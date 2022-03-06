import requests
import json
from pathlib import Path
import re


if __name__ == "__main__":
    Path("articles/list.json").unlink(missing_ok=True)
    for path in Path("articles/retrieve").glob("*.json"):
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
        with open(f"articles/retrieve/{article['id']}.json", "x") as f:
            f.write(json.dumps(article))
    with open("articles/list.json", "x") as f:
        f.write(json.dumps(article_dict))
