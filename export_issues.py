import json
import re
from pathlib import Path

import requests

articles_dir = Path("portal/src/assets/articles")
logs_dir = Path("portal/src/assets/logs")


def export_issues(label: str, dir: Path, extract_photo: bool = False):
    for path in dir.glob("*.json"):
        path.unlink(missing_ok=True)
    res = requests.get(f"https://api.github.com/repos/kemu3007/portal/issues?labels={label}&per_page=100")
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
            issue_dict[issue["id"]]["photo"] = (
                re.search("https:\/\/user-images.githubusercontent.com.*\.png", issue["body"]).group() or ""
            )
        (dir / f"{issue['id']}.json").write_text(json.dumps(issue))
    (dir / "list.json").write_text(json.dumps(issue_dict))
    return issues


if __name__ == "__main__":
    export_issues("article", articles_dir)
    export_issues("log", logs_dir, extract_photo=True)
