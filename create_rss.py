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

logs: Dict[str, Article] = json.loads(Path("portal/src/assets/logs/list.json").read_text())

tools: List[Tool] = json.loads(Path("portal/src/assets/tools.json").read_text())


def create_ja_rss() -> ElementTree.Element:
    rss = ElementTree.Element("rss")
    rss.set("version", "2.0")
    rss.set("xmlns:atom", "http://www.w3.org/2005/Atom")
    channel = ElementTree.SubElement(rss, "channel")
    atom_link = ElementTree.SubElement(channel, "atom:link")
    atom_link.set("href", "https://portal.kemu.site/rss.xml")
    atom_link.set("rel", "self")
    atom_link.set("type", "application/rss+xml")

    append_child(channel, "lastBuildDate", datetime.now().strftime("%a, %d %b %Y %H:%M:%S +0900"))
    append_child(channel, "category", "Python/TypeScript/Django/Angular/Nuxt/Vue/Docker/GitHub Pages")
    append_child(channel, "title", "Kemu Tech Blog")
    append_child(channel, "link", "https://portal.kemu.site/")
    append_child(channel, "description", "Kemu Tech Blogでは主にDjango / Angularに関する技術的な知見のメモ、共有を行っています。")
    append_child(channel, "language", "ja")
    append_child(channel, "copyright", "©️ 2017-2022 kemu All Rights Reserved.")
    append_child(channel, "managingEditor", "kemu430113@gmail.com(kemu)")
    append_child(channel, "webMaster", "kemu430113@gmail.com(kemu)")
    append_child(channel, "generator", "https://github.com/kemu3007/portal/blob/master/create_rss.py")

    all_articles = articles | logs

    for id in sorted(all_articles.keys(), reverse=True):
        item = ElementTree.SubElement(channel, "item")

        guid = ElementTree.SubElement(item, "guid")
        guid.set("isPermaLink", "false")
        guid.text = id

        article = all_articles[id]

        append_child(item, "title", escape(article["title"]))
        if id in logs:
            append_child(item, "link", f"https://portal.kemu.site/log/{id}/")
        else:
            append_child(item, "link", f"https://portal.kemu.site/blog/{id}/")

        append_child(item, "category", "/".join([label["name"] for label in article["labels"]]))

        append_child(item, "description", escape(article["body"]))

        append_child(
            item,
            "pubDate",
            datetime.strptime(article["created_at"], "%Y-%m-%dT%H:%M:%SZ").strftime("%a, %d %b %Y %H:%M:%S +0900"),
        )
    return rss


def create_another_lang_rss(lang: str, articles: Dict[str, Article]) -> ElementTree.Element:
    rss = ElementTree.Element("rss")
    rss.set("version", "2.0")
    rss.set("xmlns:atom", "http://www.w3.org/2005/Atom")
    channel = ElementTree.SubElement(rss, "channel")
    atom_link = ElementTree.SubElement(channel, "atom:link")
    atom_link.set("href", f"https://portal.kemu.site/rss_{lang}.xml")
    atom_link.set("rel", "self")
    atom_link.set("type", "application/rss+xml")

    append_child(channel, "lastBuildDate", datetime.now().strftime("%a, %d %b %Y %H:%M:%S +0900"))
    append_child(channel, "category", "Python/TypeScript/Django/Angular/Nuxt/Vue/Docker/GitHub Pages")
    append_child(channel, "title", "Kemu Tech Blog")
    append_child(channel, "link", "https://portal.kemu.site/")
    append_child(channel, "description", "Kemu's Tech Note about Angular / Django / etc...")
    append_child(channel, "language", lang)
    append_child(channel, "copyright", "©️ 2017-2022 kemu All Rights Reserved.")
    append_child(channel, "managingEditor", "kemu430113@gmail.com(kemu)")
    append_child(channel, "webMaster", "kemu430113@gmail.com(kemu)")
    append_child(channel, "generator", "https://github.com/kemu3007/portal/blob/master/create_rss.py")

    for id in sorted(articles.keys(), reverse=True):
        item = ElementTree.SubElement(channel, "item")

        guid = ElementTree.SubElement(item, "guid")
        guid.set("isPermaLink", "false")
        guid.text = f"{lang}-{id}"

        article = articles[id]

        append_child(item, "title", escape(article["title"]))
        append_child(item, "link", f"https://portal.kemu.site/blog/{lang}/{id}/")
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
    atom_link.set("href", f"https://portal.kemu.site/tools_rss.xml")
    atom_link.set("rel", "self")
    atom_link.set("type", "application/rss+xml")

    append_child(channel, "lastBuildDate", datetime.now().strftime("%a, %d %b %Y %H:%M:%S +0900"))
    append_child(channel, "category", "Python/TypeScript/Django/Angular/Nuxt/Vue/Docker/GitHub Pages")
    append_child(channel, "title", "Kemu Tools")
    append_child(channel, "link", "https://portal.kemu.site/")
    append_child(channel, "description", "Mermaid Live Editor, GitHub Flavored Markdown, Regex Checker, JSON Typer...")
    append_child(channel, "language", "ja")
    append_child(channel, "copyright", "©️ 2017-2022 kemu All Rights Reserved.")
    append_child(channel, "managingEditor", "kemu430113@gmail.com(kemu)")
    append_child(channel, "webMaster", "kemu430113@gmail.com(kemu)")
    append_child(channel, "generator", "https://github.com/kemu3007/portal/blob/master/create_rss.py")

    for tool in filter(lambda x: not x["external"], tools):
        item = ElementTree.SubElement(channel, "item")

        guid = ElementTree.SubElement(item, "guid")
        guid.set("isPermaLink", "true")
        guid.text = tool["link"]

        append_child(item, "title", tool["label"])
        append_child(item, "link", f"https://portal.kemu.site{tool['link']}/")
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
