import requests
import json
from pathlib import Path
import re
from xml.etree import ElementTree

save_dir = Path("portal/src/assets/articles")

if __name__ == "__main__":
    for path in save_dir.glob("*.json"):
        path.unlink(missing_ok=True)
    res = requests.get("https://api.github.com/repos/kemu3007/portal/issues?labels=article")
    articles = json.loads(res.content)
    article_dict = {}
    for article in reversed(articles):
        res = requests.get(f"https://api.github.com/repos/kemu3007/portal/issues/{article['number']}/comments")
        article["comments"] = json.loads(res.content)
        article_dict[article["id"]] = {
            "title": article["title"],
            "body": re.sub(r"#|`|\n|\r", "", article["body"])[:100],
            "labels": [{"name": label["name"], "color": label["color"]} for label in article["labels"]]
        }
        with (save_dir / f"{article['id']}.json").open("x") as f:
            f.write(json.dumps(article))
    with (save_dir / "list.json").open("x") as f:
        f.write(json.dumps(article_dict))
    urlset = ElementTree.Element('urlset')
    urlset.set("xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9")
    for article in articles:
        url_element = ElementTree.SubElement(urlset, 'url')
        loc = ElementTree.SubElement(url_element, 'loc')
        loc.text = f"https://portal.kemu.site/blog/{article['id']}"
        lastmod = ElementTree.SubElement(url_element, 'lastmod')
        lastmod.text = article["created_at"][:10]
    ElementTree.ElementTree(element=urlset).write(save_dir / 'sitemap.xml', encoding='utf-8', xml_declaration=True)
