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
    translator = Translator(service_urls=["translate.google.com.hk"])
    articles: Dict[str, Article] = json.loads(Path("portal/src/assets/articles/list.json").read_text())
    for lang in Languages:
        _articles = deepcopy(articles)
        dir = Path(f"portal/src/assets/articles/{lang[-2:]}")
        dir.mkdir(exist_ok=True)
        logger.info("start %s", lang[-2:])
        for key, article in tqdm(_articles.items()):
            errors = []
            try:
                article["title"] = translator.translate(article["title"], dest=lang, src="ja").text
                article["body"] = translator.translate(article["body"], dest=lang, src="ja").text
                detail_json = json.loads(Path(f"portal/src/assets/articles/{key}.json").read_text())
                detail_json["title"] = article["title"]
                detail_json["body"] = translator.translate(detail_json["body"], dest=lang, src="ja").text
                (dir / f"{key}.json").write_text(json.dumps(detail_json, ensure_ascii=False))
            except:
                errors.append(key)
        logger.error("%s miss!", ", ".join(errors))
        (dir / "list.json").write_text(json.dumps(_articles, ensure_ascii=False))
