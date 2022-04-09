import json
from pathlib import Path
from xml.etree import ElementTree

articles_list = json.loads(Path("portal/src/assets/articles/list.json").read_text())
logs_list = json.loads(Path("portal/src/assets/logs/list.json").read_text())

urlset = ElementTree.Element("urlset")


def add_url_element(url):
    url_element = ElementTree.SubElement(urlset, "url")
    loc = ElementTree.SubElement(url_element, "loc")
    loc.text = url
    lastmod = ElementTree.SubElement(url_element, "lastmod")
    lastmod.text = "2022-04-02"


if __name__ == "__main__":
    urlset = ElementTree.Element("urlset")
    urlset.set("xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9")

    add_url_element("https://portal.kemu.site/")
    add_url_element("https://portal.kemu.site/robots.txt")
    add_url_element("https://portal.kemu.site/sitemap.xml")
    add_url_element("https://portal.kemu.site/blog/")
    add_url_element("https://portal.kemu.site/log/")
    add_url_element("https://portal.kemu.site/contact/")

    add_url_element("https://portal.kemu.site/tools/")
    add_url_element("https://portal.kemu.site/tools/userInfo/")
    add_url_element("https://portal.kemu.site/tools/amazonAssociate/")
    add_url_element("https://portal.kemu.site/tools/jsonTyper/")
    add_url_element("https://portal.kemu.site/tools/realtime/")
    add_url_element("https://portal.kemu.site/tools/jsonFormatter/")
    add_url_element("https://portal.kemu.site/tools/base64/")
    add_url_element("https://portal.kemu.site/tools/mdwriter/")
    add_url_element("https://portal.kemu.site/tools/regex/")
    add_url_element("https://portal.kemu.site/tools/year/")
    add_url_element("https://portal.kemu.site/tools/openapi/")

    for article_id in articles_list.keys():
        add_url_element(f"https://portal.kemu.site/blog/{article_id}/")
    for log_id in logs_list.keys():
        add_url_element(f"https://portal.kemu.site/log/{log_id}/")

    ElementTree.ElementTree(element=urlset).write("portal/src/sitemap.xml", encoding="utf-8", xml_declaration=True)
