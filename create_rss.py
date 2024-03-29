import json
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Optional, TypedDict
from xml.etree import ElementTree
from xml.sax.saxutils import escape

Label = TypedDict("Label", {"name": str, "color": str})

Article = TypedDict(
    "Article", {"title": str, "body": str, "created_at": str, "photo": Optional[str], "labels": List[Label]}
)

Tool = TypedDict("Tool", {"label": str, "link": str, "description": bool, "external": bool, "pinned": bool})

articles: Dict[str, Article] = json.loads(Path("portal/src/assets/articles/list.json").read_text())

tools: List[Tool] = json.loads(Path("portal/src/assets/tools.json").read_text())


def create_ja_rss() -> ElementTree.Element:
    rss = ElementTree.Element("rss")
    rss.set("version", "2.0")
    rss.set("xmlns:atom", "http://www.w3.org/2005/Atom")
    channel = ElementTree.SubElement(rss, "channel")
    atom_link = ElementTree.SubElement(channel, "atom:link")
    atom_link.set("href", "https://trash-box.dev/tech/rss.xml")
    atom_link.set("rel", "self")
    atom_link.set("type", "application/rss+xml")

    append_child(channel, "lastBuildDate", datetime.now().strftime("%a, %d %b %Y %H:%M:%S +0900"))
    append_child(channel, "category", "Python/TypeScript/Django/Angular/Nuxt/Vue/Docker/GitHub Pages")
    append_child(channel, "title", "Tech Blog | Trash Box")
    append_child(channel, "link", "https://trash-box.dev/tech/")
    append_child(channel, "description", "Tech Blog | Trash Box では主にDjango / Angularに関する技術的な知見のメモ、共有を行っています。")
    append_child(channel, "language", "ja")
    append_child(channel, "copyright", "©️ 2017-2022 All Rights Reserved.")

    for id in sorted(articles.keys(), reverse=True):
        item = ElementTree.SubElement(channel, "item")

        guid = ElementTree.SubElement(item, "guid")
        guid.set("isPermaLink", "false")
        guid.text = id

        article = articles[id]

        append_child(item, "title", escape(article["title"]))
        append_child(item, "link", f"https://trash-box.dev/tech/blog/{id}/")

        append_child(item, "category", "/".join([label["name"] for label in article["labels"]]))

        append_child(item, "description", escape(article["body"]))

        append_child(
            item,
            "pubDate",
            datetime.strptime(article["created_at"], "%Y-%m-%dT%H:%M:%SZ").strftime("%a, %d %b %Y %H:%M:%S +0900"),
        )
    return rss


def create_tools_rss() -> ElementTree.Element:
    rss = ElementTree.Element("rss")
    rss.set("version", "2.0")
    rss.set("xmlns:atom", "http://www.w3.org/2005/Atom")
    channel = ElementTree.SubElement(rss, "channel")
    atom_link = ElementTree.SubElement(channel, "atom:link")
    atom_link.set("href", f"https://trash-box.dev/tech/tools_rss.xml")
    atom_link.set("rel", "self")
    atom_link.set("type", "application/rss+xml")

    append_child(channel, "lastBuildDate", datetime.now().strftime("%a, %d %b %Y %H:%M:%S +0900"))
    append_child(channel, "category", "Python/TypeScript/Django/Angular/Nuxt/Vue/Docker/GitHub Pages")
    append_child(channel, "title", "Tools | Trash Box")
    append_child(channel, "link", "https://trash-box.dev/tech/")
    append_child(channel, "description", "Mermaid Live Editor, GitHub Flavored Markdown, Regex Checker, JSON Typer...")
    append_child(channel, "language", "ja")
    append_child(channel, "copyright", "©️ 2017-2022 All Rights Reserved.")

    for tool in filter(lambda x: not x["external"], tools):
        item = ElementTree.SubElement(channel, "item")

        guid = ElementTree.SubElement(item, "guid")
        guid.set("isPermaLink", "true")
        guid.text = tool["link"]

        append_child(item, "title", tool["label"])
        append_child(item, "link", f"https://trash-box.dev/tech{tool['link']}/")
        append_child(item, "category", "Tech Tool")
        append_child(item, "description", tool["description"])
        append_child(item, "pubDate", datetime.now().strftime("%a, %d %b %Y %H:%M:%S +0900"))
    return rss


def append_child(parent: ElementTree.Element, tag: str, text: str):
    child = ElementTree.SubElement(parent, tag)
    child.text = text


if __name__ == "__main__":
    ElementTree.ElementTree(element=create_ja_rss()).write("portal/src/rss.xml", encoding="utf-8", xml_declaration=True)
    ElementTree.ElementTree(element=create_tools_rss()).write(
        "portal/src/tools_rss.xml", encoding="utf-8", xml_declaration=True
    )
