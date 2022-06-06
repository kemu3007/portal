import json
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Optional, TypedDict
from xml.etree import ElementTree

Label = TypedDict("Label", {"name": str, "color": str})

Article = TypedDict(
    "Article", {"title": str, "body": str, "created_at": str, "photo": Optional[str], "labels": List[Label]}
)

articles: Dict[str, Article] = json.loads(Path("portal/src/assets/articles/list.json").read_text())

logs: Dict[str, Article] = json.loads(Path("portal/src/assets/logs/list.json").read_text())

articles_en: Dict[str, Article] = json.loads(Path("portal/src/assets/articles/en/list.json").read_text())

articles_zh: Dict[str, Article] = json.loads(Path("portal/src/assets/articles/zh/list.json").read_text())

urlset = ElementTree.Element("urlset")


def add_url_element(parent: ElementTree.Element, url: str, updated_at: Optional[str] = None):
    url_element = ElementTree.SubElement(parent, "url")
    loc = ElementTree.SubElement(url_element, "loc")
    loc.text = url
    lastmod = ElementTree.SubElement(url_element, "lastmod")
    lastmod.text = updated_at[:10] if updated_at else str(datetime.now().date())


if __name__ == "__main__":
    urlset = ElementTree.Element("urlset")
    urlset.set("xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9")

    add_url_element(urlset, "https://portal.kemu.site/")
    add_url_element(urlset, "https://portal.kemu.site/blog/")
    add_url_element(urlset, "https://portal.kemu.site/blog/en/")
    add_url_element(urlset, "https://portal.kemu.site/blog/ch/")
    add_url_element(urlset, "https://portal.kemu.site/log/")
    add_url_element(urlset, "https://portal.kemu.site/contact/")

    add_url_element(urlset, "https://portal.kemu.site/tools/")
    add_url_element(urlset, "https://portal.kemu.site/tools/userInfo/")
    add_url_element(urlset, "https://portal.kemu.site/tools/amazonAssociate/")
    add_url_element(urlset, "https://portal.kemu.site/tools/jsonTyper/")
    add_url_element(urlset, "https://portal.kemu.site/tools/realtime/")
    add_url_element(urlset, "https://portal.kemu.site/tools/jsonFormatter/")
    add_url_element(urlset, "https://portal.kemu.site/tools/base64/")
    add_url_element(urlset, "https://portal.kemu.site/tools/mdwriter/")
    add_url_element(urlset, "https://portal.kemu.site/tools/regex/")
    add_url_element(urlset, "https://portal.kemu.site/tools/year/")
    add_url_element(urlset, "https://portal.kemu.site/tools/openapi/")
    add_url_element(urlset, "https://portal.kemu.site/tools/mermaid/")
    add_url_element(urlset, "https://portal.kemu.site/tools/fx-calc/")
    add_url_element(urlset, "https://portal.kemu.site/doc/")

    for id, value in articles.items():
        add_url_element(urlset, f"https://portal.kemu.site/blog/{id}/", value["updated_at"])
    for id, value in articles_en.items():
        add_url_element(urlset, f"https://portal.kemu.site/blog/en/{id}/", value["updated_at"])
    for id, value in articles_zh.items():
        add_url_element(urlset, f"https://portal.kemu.site/blog/zh/{id}/", value["updated_at"])

    for id, value in logs.items():
        add_url_element(urlset, f"https://portal.kemu.site/log/{id}/", value["updated_at"])

    ElementTree.ElementTree(element=urlset).write("portal/src/sitemap.xml", encoding="utf-8", xml_declaration=True)
