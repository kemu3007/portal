import requests
import json
from pathlib import Path
import re
import datetime
from xml.etree import ElementTree

articles_dir = Path("portal/src/assets/articles")
logs_dir = Path("portal/src/assets/logs")

def export_issues(label:str, dir: Path, extract_photo: bool=False):
    for path in dir.glob("*.json"):
        path.unlink(missing_ok=True)
    res = requests.get(f"https://api.github.com/repos/kemu3007/portal/issues?labels={label}")
    issues = json.loads(res.content)
    issue_dict = {}
    for issue in reversed(issues):
        res = requests.get(f"https://api.github.com/repos/kemu3007/portal/issues/{issue['number']}/comments")
        issue["comments"] = json.loads(res.content)
        issue_dict[issue["id"]] = {
            "title": issue["title"],
            "body": re.sub(r"#|`|\n|\r", "", issue["body"])[:100],
            "labels": [{"name": label["name"], "color": label["color"]} for label in issue["labels"]]
        }
        if extract_photo:
            issue_dict[issue["id"]]["photo"] = re.search("https:\/\/user-images.githubusercontent.com.*\.png", issue["body"]).group() or ""
        (dir / f"{issue['id']}.json").write_text(json.dumps(issue))
    (dir / "list.json").write_text(json.dumps(issue_dict))
    return issues


if __name__ == "__main__":
    articles = export_issues("article", articles_dir)
    logs = export_issues("log", logs_dir, extract_photo=True)
    today = datetime.datetime.now().strftime("%Y-%m-%d")
    urlset = ElementTree.Element('urlset')
    urlset.set("xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9")
    url_element = ElementTree.SubElement(urlset, 'url')
    loc = ElementTree.SubElement(url_element, 'loc')
    loc.text = f"https://portal.kemu.site/"
    lastmod = ElementTree.SubElement(url_element, 'lastmod')
    lastmod.text = today
    url_element = ElementTree.SubElement(urlset, 'url')
    loc = ElementTree.SubElement(url_element, 'loc')
    loc.text = f"https://portal.kemu.site/blog/"
    lastmod = ElementTree.SubElement(url_element, 'lastmod')
    lastmod.text = today
    url_element = ElementTree.SubElement(urlset, 'url')
    loc = ElementTree.SubElement(url_element, 'loc')
    loc.text = f"https://portal.kemu.site/log/"
    lastmod = ElementTree.SubElement(url_element, 'lastmod')
    lastmod.text = today
    url_element = ElementTree.SubElement(urlset, 'url')
    loc = ElementTree.SubElement(url_element, 'loc')
    loc.text = f"https://portal.kemu.site/contact/"
    lastmod = ElementTree.SubElement(url_element, 'lastmod')
    lastmod.text = today
    url_element = ElementTree.SubElement(urlset, 'url')
    loc = ElementTree.SubElement(url_element, 'loc')
    loc.text = f"https://portal.kemu.site/tools/"
    lastmod = ElementTree.SubElement(url_element, 'lastmod')
    lastmod.text = today
    for article in articles:
        url_element = ElementTree.SubElement(urlset, 'url')
        loc = ElementTree.SubElement(url_element, 'loc')
        loc.text = f"https://portal.kemu.site/blog/{article['id']}"
        lastmod = ElementTree.SubElement(url_element, 'lastmod')
        lastmod.text = article["created_at"][:10]
    for log in logs:
        url_element = ElementTree.SubElement(urlset, 'url')
        loc = ElementTree.SubElement(url_element, 'loc')
        loc.text = f"https://portal.kemu.site/log/{log['id']}"
        lastmod = ElementTree.SubElement(url_element, 'lastmod')
        lastmod.text = log["created_at"][:10]
    ElementTree.ElementTree(element=urlset).write('portal/src/assets/sitemap.xml', encoding='utf-8', xml_declaration=True)
