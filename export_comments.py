import json
from pathlib import Path

import requests

comments_dir = Path("portal/src/assets/comments")
logs_dir = Path("portal/src/assets/logs")


def export_comments():
    res = requests.get(f"https://api.github.com/repos/kemu3007/portal/issues")
    issues = json.loads(res.content)
    comments_dir.mkdir(exist_ok=True)
    for issue in issues:
        # APIの制限にかかることが増えているためスケジュール実行のみ行う
        res = requests.get(f"https://api.github.com/repos/kemu3007/portal/issues/{issue['number']}/comments")
        (comments_dir / f"{issue['id']}.json").write_bytes(res.content)
    return issues


if __name__ == "__main__":
    export_comments()
