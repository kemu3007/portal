import json
from copy import deepcopy
from logging import getLogger
from pathlib import Path
from typing import Dict, List, Optional, TypedDict

from googletrans import Translator
from tqdm import tqdm

logger = getLogger(__name__)

Label = TypedDict("Label", {"name": str, "color": str})

Article = TypedDict(
    "Article", {"title": str, "body": str, "created_at": str, "photo": Optional[str], "labels": List[Label]}
)


Languages = ["en", "zh-cn"]


if __name__ == "__main__":
    translator = Translator()
    translator.raise_Exception = True
    articles: Dict[str, Article] = json.loads(Path("portal/src/assets/articles/list.json").read_text())
    for lang in Languages:
        _articles = deepcopy(articles)
        dir = Path(f"portal/src/assets/articles/{lang[-2:]}")
        dir.mkdir(exist_ok=True)
        for key, article in tqdm(_articles.items()):
            article["title"] = translator.translate(article["title"], dest=lang, src="ja").text
            article["body"] = translator.translate(article["body"], dest=lang, src="ja").text
            detail_json = json.loads(Path(f"portal/src/assets/articles/{key}.json").read_text())
            detail_json["title"] = article["title"]
            splitted_texts: List[str] = detail_json["body"].split("\n")
            is_codeblock = False
            for text in splitted_texts:
                if "```" in text:
                    is_codeblock = not is_codeblock
                    if is_codeblock:
                        continue
                if "[!" in text:
                    continue
                # https://github.com/ssut/py-googletrans/issues/267 対応 
                if text:
                    text = text.replace('.', '. ')
                    text = translator.translate(text, dest=lang, src="ja").text
                    text = text.replace("-", "- ")
            detail_json["body"] = "\n".join(splitted_texts)
            (dir / f"{key}.json").write_text(json.dumps(detail_json, ensure_ascii=False))
        (dir / "list.json").write_text(json.dumps(_articles, ensure_ascii=False))
