import json
import os
import re
from pathlib import Path

import requests

articles_dir = Path("portal/src/assets/articles")
assets_dir = Path("portal/src/assets/")

github_token = os.environ["GITHUB_TOKEN"]
headers = {"Authorization": f"Bearer {github_token}"}


def export_issues(label: str, dir: Path, extract_photo: bool = False):
    dir.mkdir(exist_ok=True)
    for path in dir.glob("*.json"):
        path.unlink(missing_ok=True)
    res = requests.get(
        f"https://api.github.com/repos/kemu3007/portal/issues?labels={label}&per_page=100",
        headers=headers,
    )
    issues = json.loads(res.content)
    issue_dict = {}
    for issue in reversed(issues):
        if match := re.search(r"summary: .*\n", issue["body"]):
            summary = match.group()[9:]
            issue["body"] = re.sub(r"summary: .*\n", "", issue["body"])
        else:
            summary = re.sub(r"#|\n|\r|\(http.*\)|image|```.*?```|`|[|]|!", " ", issue["body"])[:150]
        issue_dict[issue["id"]] = {
            "title": issue["title"],
            "created_at": issue["created_at"],
            "updated_at": issue["updated_at"],
            "body": summary,
            "labels": [{"name": label["name"], "color": label["color"]} for label in issue["labels"]],
        }
        if extract_photo:
            if search := re.search("https:\/\/user-images.githubusercontent.com.*\.png", issue["body"]):
                issue_dict[issue["id"]]["photo"] = search.group()
            else:
                issue_dict[issue["id"]]["photo"] = f"https://trash-box.dev/tech/assets/images/{issue['id']}.png"
        (dir / f"{issue['id']}.json").write_text(json.dumps(issue, ensure_ascii=False))
    (dir / "list.json").write_text(json.dumps(issue_dict, ensure_ascii=False))
    return issues


def extract_snippets():
    res = requests.get(
        f"https://api.github.com/repos/kemu3007/portal/issues?labels=snippet&per_page=100", headers=headers
    )
    issue: str = json.loads(res.content)[0]["body"]
    snippets = []
    for line in issue.split("\n\r"):
        snippet = {}
        texts = list(filter(lambda x: x, line.split("\n")))
        snippet["title"] = texts[0].strip()
        snippet["contents"] = texts[1].strip()
        snippets.append(snippet)
    (assets_dir / "snippets.json").write_text(json.dumps(snippets, indent=4, ensure_ascii=False))


if __name__ == "__main__":
    export_issues("article", articles_dir)
    extract_snippets()
