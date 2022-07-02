import json
from pathlib import Path

import requests

assets_dir = Path("portal/src/assets/")


def export_projects():
    res = json.loads(requests.get(f"https://api.github.com/users/kemu3007/repos").content)
    (assets_dir / "projects.json").write_text(json.dumps(res, indent=4, ensure_ascii=False))


if __name__ == "__main__":
    export_projects()
