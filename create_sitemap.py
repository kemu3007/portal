import json
from pathlib import Path
from xml.etree import ElementTree

articles_list = json.loads(Path("portal/src/assets/articles/list.json").read_text())
logs_list = json.loads(Path("portal/src/assets/logs/list.json").read_text())


if __name__ == "__main__":
    urlset = ElementTree.Element("urlset")
    urlset.set("xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9")

    url_element = ElementTree.SubElement(urlset, "url")
    loc = ElementTree.SubElement(url_element, "loc")
    loc.text = f"https://portal.kemu.site/robots.txt"
    lastmod = ElementTree.SubElement(url_element, "lastmod")
    lastmod.text = "2022-03-29"

    url_element = ElementTree.SubElement(urlset, "url")
    loc = ElementTree.SubElement(url_element, "loc")
    loc.text = f"https://portal.kemu.site/sitemap.xml"
    lastmod = ElementTree.SubElement(url_element, "lastmod")
    lastmod.text = "2022-03-29"

    url_element = ElementTree.SubElement(urlset, "url")
    loc = ElementTree.SubElement(url_element, "loc")
    loc.text = f"https://portal.kemu.site/"
    lastmod = ElementTree.SubElement(url_element, "lastmod")
    lastmod.text = "2022-03-29"

    url_element = ElementTree.SubElement(urlset, "url")
    loc = ElementTree.SubElement(url_element, "loc")
    loc.text = f"https://portal.kemu.site/blog/"
    lastmod = ElementTree.SubElement(url_element, "lastmod")
    lastmod.text = "2022-03-29"

    url_element = ElementTree.SubElement(urlset, "url")
    loc = ElementTree.SubElement(url_element, "loc")
    loc.text = f"https://portal.kemu.site/log/"
    lastmod = ElementTree.SubElement(url_element, "lastmod")
    lastmod.text = "2022-03-29"

    url_element = ElementTree.SubElement(urlset, "url")
    loc = ElementTree.SubElement(url_element, "loc")
    loc.text = f"https://portal.kemu.site/contact/"
    lastmod = ElementTree.SubElement(url_element, "lastmod")
    lastmod.text = "2022-03-29"

    url_element = ElementTree.SubElement(urlset, "url")
    loc = ElementTree.SubElement(url_element, "loc")
    loc.text = f"https://portal.kemu.site/tools/"
    lastmod = ElementTree.SubElement(url_element, "lastmod")
    lastmod.text = "2022-03-29"

    url_element = ElementTree.SubElement(urlset, "url")
    loc = ElementTree.SubElement(url_element, "loc")
    loc.text = f"https://portal.kemu.site/tools/userInfo/"
    lastmod = ElementTree.SubElement(url_element, "lastmod")
    lastmod.text = "2022-03-29"

    url_element = ElementTree.SubElement(urlset, "url")
    loc = ElementTree.SubElement(url_element, "loc")
    loc.text = f"https://portal.kemu.site/tools/amazonAssociate/"
    lastmod = ElementTree.SubElement(url_element, "lastmod")
    lastmod.text = "2022-03-29"

    url_element = ElementTree.SubElement(urlset, "url")
    loc = ElementTree.SubElement(url_element, "loc")
    loc.text = f"https://portal.kemu.site/tools/jsonTyper/"
    lastmod = ElementTree.SubElement(url_element, "lastmod")
    lastmod.text = "2022-03-29"

    url_element = ElementTree.SubElement(urlset, "url")
    loc = ElementTree.SubElement(url_element, "loc")
    loc.text = f"https://portal.kemu.site/tools/realtime/"
    lastmod = ElementTree.SubElement(url_element, "lastmod")
    lastmod.text = "2022-03-29"

    url_element = ElementTree.SubElement(urlset, "url")
    loc = ElementTree.SubElement(url_element, "loc")
    loc.text = f"https://portal.kemu.site/tools/jsonFormatter/"
    lastmod = ElementTree.SubElement(url_element, "lastmod")
    lastmod.text = "2022-03-29"

    url_element = ElementTree.SubElement(urlset, "url")
    loc = ElementTree.SubElement(url_element, "loc")
    loc.text = f"https://portal.kemu.site/tools/base64/"
    lastmod = ElementTree.SubElement(url_element, "lastmod")
    lastmod.text = "2022-03-29"

    for article_id in articles_list.keys():
        url_element = ElementTree.SubElement(urlset, "url")
        loc = ElementTree.SubElement(url_element, "loc")
        loc.text = f"https://portal.kemu.site/blog/{article_id}/"
        lastmod = ElementTree.SubElement(url_element, "lastmod")
        lastmod.text = articles_list[article_id]["created_at"][:10]

    for log_id in logs_list.keys():
        url_element = ElementTree.SubElement(urlset, "url")
        loc = ElementTree.SubElement(url_element, "loc")
        loc.text = f"https://portal.kemu.site/log/{log_id}/"
        lastmod = ElementTree.SubElement(url_element, "lastmod")
        lastmod.text = logs_list[log_id]["created_at"][:10]

    ElementTree.ElementTree(element=urlset).write("portal/src/sitemap.xml", encoding="utf-8", xml_declaration=True)
