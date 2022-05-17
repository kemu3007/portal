import json
import shutil
from pathlib import Path
from typing import Dict, List, Optional, TypedDict

Label = TypedDict("Label", {"name": str, "color": str})

Article = TypedDict(
    "Article", {"title": str, "body": str, "created_at": str, "photo": Optional[str], "labels": List[Label]}
)

Tool = TypedDict("Tool", {"label": str, "link": str, "description": str, "external": bool})

articles: Dict[str, Article] = json.loads(Path("portal/src/assets/articles/list.json").read_text())
logs: Dict[str, Article] = json.loads(Path("portal/src/assets/logs/list.json").read_text())
tools: List[Tool] = json.loads(Path("portal/src/assets/tools.json").read_text())

if __name__ == "__main__":
    urls = (
        ["blog/", "log/", "contact/", "tools/"]
        + [f"blog/{key}/" for key in articles.keys()]
        + [f"log/{key}" for key in logs]
        + [tool["link"].strip("/") + "/" for tool in filter(lambda x: not x["external"], tools)]
    )
    base_path = Path("portal/dist/portal")
    index_html = Path("portal/dist/portal/index.html")
    for url in urls:
        to_path = base_path / url
        to_path.mkdir(exist_ok=True)
        shutil.copy2(index_html, to_path / "index.html")
