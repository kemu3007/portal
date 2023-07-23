import json
import os
from pathlib import Path

import requests

assets_dir = Path("portal/src/assets/")
github_token = os.environ["GITHUB_TOKEN"]
headers = {"Authorization": f"Bearer {github_token}"}


def export_projects():
    res = json.loads(requests.get(f"https://api.github.com/users/kemu3007/repos", headers=headers).content)
    (assets_dir / "projects.json").write_text(json.dumps(res, indent=4, ensure_ascii=False))


if __name__ == "__main__":
    export_projects()
