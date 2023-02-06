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

    add_url_element(urlset, "https://tech.trash-box.dev/")
    add_url_element(urlset, "https://tech.trash-box.dev/blog/")
    add_url_element(urlset, "https://tech.trash-box.dev/log/")
    add_url_element(urlset, "https://tech.trash-box.dev/snippets/")
    add_url_element(urlset, "https://tech.trash-box.dev/projects/")

    add_url_element(urlset, "https://tech.trash-box.dev/tools/")
    add_url_element(urlset, "https://tech.trash-box.dev/tools/jsonTyper/")
    add_url_element(urlset, "https://tech.trash-box.dev/tools/realtime/")
    add_url_element(urlset, "https://tech.trash-box.dev/tools/jsonFormatter/")
    add_url_element(urlset, "https://tech.trash-box.dev/tools/base64/")
    add_url_element(urlset, "https://tech.trash-box.dev/tools/mdwriter/")
    add_url_element(urlset, "https://tech.trash-box.dev/tools/regex/")
    add_url_element(urlset, "https://tech.trash-box.dev/tools/year/")
    add_url_element(urlset, "https://tech.trash-box.dev/tools/openapi/")
    add_url_element(urlset, "https://tech.trash-box.dev/tools/mermaid/")
    add_url_element(urlset, "https://tech.trash-box.dev/tools/fx-calc/")
    add_url_element(urlset, "https://tech.trash-box.dev/doc/")

    for id, value in articles.items():
        add_url_element(urlset, f"https://tech.trash-box.dev/blog/{id}/", value["updated_at"])

    ElementTree.ElementTree(element=urlset).write("portal/src/sitemap.xml", encoding="utf-8", xml_declaration=True)
