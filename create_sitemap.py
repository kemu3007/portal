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

    add_url_element(urlset, "https://trash-box.dev/tech/")
    add_url_element(urlset, "https://trash-box.dev/tech/blog/")
    add_url_element(urlset, "https://trash-box.dev/tech/log/")
    add_url_element(urlset, "https://trash-box.dev/tech/snippets/")
    add_url_element(urlset, "https://trash-box.dev/tech/projects/")

    add_url_element(urlset, "https://trash-box.dev/tech/tools/")
    add_url_element(urlset, "https://trash-box.dev/tech/tools/jsonTyper/")
    add_url_element(urlset, "https://trash-box.dev/tech/tools/realtime/")
    add_url_element(urlset, "https://trash-box.dev/tech/tools/jsonFormatter/")
    add_url_element(urlset, "https://trash-box.dev/tech/tools/base64/")
    add_url_element(urlset, "https://trash-box.dev/tech/tools/mdwriter/")
    add_url_element(urlset, "https://trash-box.dev/tech/tools/regex/")
    add_url_element(urlset, "https://trash-box.dev/tech/tools/year/")
    add_url_element(urlset, "https://trash-box.dev/tech/tools/openapi/")
    add_url_element(urlset, "https://trash-box.dev/tech/tools/mermaid/")
    add_url_element(urlset, "https://trash-box.dev/tech/tools/fx-calc/")
    add_url_element(urlset, "https://trash-box.dev/tech/doc/")

    for id, value in articles.items():
        add_url_element(urlset, f"https://trash-box.dev/tech/blog/{id}/", value["updated_at"])

    ElementTree.ElementTree(element=urlset).write("portal/src/sitemap.xml", encoding="utf-8", xml_declaration=True)
