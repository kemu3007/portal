import requests
import json
from pathlib import Path


if __name__ == "__main__":
    Path("articles.json").unlink(missing_ok=True)
    res = requests.get("https://api.github.com/repos/kemu3007/portal/issues?labels=article")
    articles = json.loads(res.content)
    with open("articles.json", "x") as f:
        f.write(json.dumps(articles))
