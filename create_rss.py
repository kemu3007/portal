import json
from datetime import datetime
from pathlib import Path
from typing import Any, Dict
from xml.etree import ElementTree

articles_list: Dict[str, Any] = json.loads(Path("portal/src/assets/articles/list.json").read_text())


def append_child(parent: ElementTree.Element, tag: str, text: str):
    child = ElementTree.SubElement(parent, tag)
    child.text = text


if __name__ == "__main__":
    rss = ElementTree.Element("rss")
    rss.set("version", "2.0")
    channel = ElementTree.SubElement(rss, "channel")

    append_child(channel, "title", "Kemu Tech Blog")
    append_child(channel, "link", "https://portal.kemu.site/blog/")
    append_child(channel, "description", "Kemu Tech Blogでは主にDjango / Angularに関する技術的な知見のメモ、共有を行っています。")
    append_child(channel, "language", "ja")
    append_child(channel, "copyright", "©️ 2017-2022 kemu All Rights Reserved.")
    append_child(channel, "managingEditor", "kemu430113@gmail.com(kemu)")
    append_child(channel, "webMaster", "kemu430113@gmail.com(kemu)")

    for id in list(reversed(articles_list.keys()))[:15]:
        item = ElementTree.SubElement(channel, "item")
        article = articles_list[id]

        append_child(item, "title", article["title"])
        append_child(item, "link", f"https://portal.kemu.site/blog/{id}/")
        append_child(item, "description", article["body"])
        append_child(
            item,
            "pubDate",
            datetime.strptime(article["created_at"], "%Y-%m-%dT%H:%M:%SZ").strftime("%a, %d %b %Y %H:%M:%S GMT"),
        )

    ElementTree.ElementTree(element=rss).write("portal/src/rss.xml", encoding="utf-8", xml_declaration=True)
