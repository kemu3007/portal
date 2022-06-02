import json
from copy import deepcopy
from pathlib import Path
from typing import Dict, List, Optional, TypedDict

import argostranslate.package
import argostranslate.translate
from argostranslate.translate import CachedTranslation, Language
from googletrans import Translator
from tqdm import tqdm

Label = TypedDict("Label", {"name": str, "color": str})

Article = TypedDict(
    "Article", {"title": str, "body": str, "created_at": str, "photo": Optional[str], "labels": List[Label]}
)

LANGUAGES = ["en", "zh-cn"]


def translate_google():
    translator = Translator()
    translator.raise_Exception = True
    articles: Dict[str, Article] = json.loads(Path("portal/src/assets/articles/list.json").read_text())

    for lang in LANGUAGES:
        dir = Path(f"portal/src/assets/articles/{lang[-2:]}")
        dir.mkdir(exist_ok=True)
        _articles = deepcopy(articles)
        items = tqdm(_articles.items())
        for key, article in items:
            items.set_description("Processing: %s" % key)
            article["title"] = translator.translate(article["title"], dest=lang, src="ja").text
            article["body"] = translator.translate(article["body"], dest=lang, src="ja").text
            detail_json = json.loads(Path(f"portal/src/assets/articles/{key}.json").read_text())
            detail_json["title"] = article["title"]
            splitted_texts: List[str] = detail_json["body"].splitlines()
            is_codeblock = False
            for i in range(len(splitted_texts)):
                if "```" in splitted_texts[i]:
                    is_codeblock = not is_codeblock
                    continue
                if is_codeblock:
                    continue
                if "![" in splitted_texts[i]:
                    continue
                try:
                    splitted_texts[i] = translator.translate(splitted_texts[i], dest=lang, src="ja").text
                except IndexError:
                    pass
                splitted_texts[i] = splitted_texts[i].replace("-", "- ")
            detail_json["body"] = "\n".join(splitted_texts)
            (dir / f"{key}.json").write_text(json.dumps(detail_json, ensure_ascii=False, indent=4))
        (dir / "list.json").write_text(json.dumps(articles, ensure_ascii=False, indent=4))


def translate_argos():
    argostranslate.package.update_package_index()
    available_packages = argostranslate.package.get_available_packages()

    for package in tqdm(list(filter(lambda x: x.from_code == "ja" and x.to_code == "en", available_packages))):
        argostranslate.package.install_from_path(package.download())

    installed_languages: List[Language] = argostranslate.translate.get_installed_languages()

    from_lang: Language = list(filter(lambda x: x.code == "ja", installed_languages))[0]
    to_lang: Language = list(filter(lambda x: x.code == "en", installed_languages))[0]

    articles: Dict[str, Article] = json.loads(Path("portal/src/assets/articles/list.json").read_text())
    translator: CachedTranslation = from_lang.get_translation(to_lang)

    dir = Path(f"portal/src/assets/articles/en")
    dir.mkdir(exist_ok=True)
    items = tqdm(articles.items())
    for key, article in items:
        items.set_description("Processing: %s" % key)
        article["title"] = translator.translate(article["title"])
        article["body"] = translator.translate(article["body"])
        detail_json = json.loads(Path(f"portal/src/assets/articles/{key}.json").read_text())
        detail_json["title"] = article["title"]
        splitted_texts: List[str] = detail_json["body"].splitlines()
        is_codeblock = False
        for i in range(len(splitted_texts)):
            if "```" in splitted_texts[i]:
                is_codeblock = not is_codeblock
                continue
            if is_codeblock:
                continue
            if "![" in splitted_texts[i]:
                continue
            splitted_texts[i] = translator.translate(splitted_texts[i])
            splitted_texts[i] = splitted_texts[i].replace("-", "- ")
        detail_json["body"] = "\n".join(splitted_texts)
        (dir / f"{key}.json").write_text(json.dumps(detail_json, ensure_ascii=False, indent=4))
    (dir / "list.json").write_text(json.dumps(articles, ensure_ascii=False, indent=4))


if __name__ == "__main__":
    translate_google()
