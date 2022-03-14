from email.mime import base
import json
from pathlib import Path


if __name__ == "__main__":
    articles = json.loads((Path() / "portal/src/assets/articles/list.json").read_text())
    base_html = Path('./404.html').read_text()
    blog_home = base_html.replace("page_image", "https://portal.kemu.site/assets/images/blog.png").replace("page_title", "kemu tech blog").replace("page_description", "kemu tech blog")
    path = Path("portal/src/blog")
    path.mkdir(exist_ok=True)
    (path / "index.html").write_text(blog_home)
    for key, data in articles.items():
        blog = base_html.replace("page_image", f"https://portal.kemu.site/assets/images/{key}.png").replace("page_title", f"kemu tech blog | {data['title']}").replace("page_description", data['body'])
        path = Path("portal/src/blog") / key
        path.mkdir(exist_ok=True)
        (path / "index.html").write_text(blog)
    logs = json.loads((Path() / "portal/src/assets/logs/list.json").read_text())
    log_home = base_html.replace("page_image", "https://portal.kemu.site/assets/images/log.png").replace("page_title", "kemu logs").replace("page_description", "kemu logs")
    path = Path("portal/src/log")
    path.mkdir(exist_ok=True)
    (path / "index.html").write_text(log_home)
    for key, data in logs.items():
        blog = base_html.replace("page_image", data["photo"] or f"https://portal.kemu.site/assets/images/{key}.png").replace("page_title", f"kemu logs | {data['title']}").replace("page_description", data['body'])
        path = Path("portal/src/blog") / key
        path.mkdir(exist_ok=True)
        (path / "index.html").write_text(blog)
