import json
from pathlib import Path

if __name__ == "__main__":
    # blog
    articles = json.loads((Path() / "portal/src/assets/articles/list.json").read_text())
    base_html = Path('./bot.html').read_text()
    blog_home = base_html.replace("page_image", "https://portal.kemu.site/assets/images/blog.png").replace("page_title", "kemu tech blog").replace("page_description", "kemu tech blog")
    blog_home_html = [f"<a href='/blog/{key}'>{article['title']}</a><hr /> {article['body']}" for key, article in articles.items()]
    blog_home = blog_home.replace("page_contents", "<hr />".join(blog_home_html))
    path = Path("portal/src/blog")
    path.mkdir(exist_ok=True)
    (path / "index.html").write_text(blog_home)
    for key, data in articles.items():
        blog = base_html.replace("page_image", f"https://portal.kemu.site/assets/images/{key}.png").replace("page_title", f"kemu tech blog | {data['title']}").replace("page_description", data['body'])
        blog_details = json.loads((Path() / f"portal/src/assets/articles/{key}.json").read_text())
        blog = blog.replace("page_contents", f"<h2>{data['title']}</h2> {blog_details['body']} <hr /> meta: {blog_details}")
        path = Path("portal/src/blog") / key
        path.mkdir(exist_ok=True)
        (path / "index.html").write_text(blog)
    # log
    logs = json.loads((Path() / "portal/src/assets/logs/list.json").read_text())
    log_home = base_html.replace("page_image", "https://portal.kemu.site/assets/images/log.png").replace("page_title", "kemu logs").replace("page_description", "kemu logs")
    log_home_html = [f"<a href='/log/{key}'>{log['title']}</a><hr /> {log['body']}" for key, log in logs.items()]
    log_home.replace("page_contents", "<hr />".join(log_home_html))    
    path = Path("portal/src/log")
    path.mkdir(exist_ok=True)
    (path / "index.html").write_text(log_home)
    for key, data in logs.items():
        log = base_html.replace("page_image", data["photo"] or f"https://portal.kemu.site/assets/images/{key}.png").replace("page_title", f"kemu logs | {data['title']}").replace("page_description", data['body'])
        log_details = json.loads((Path() / f"portal/src/assets/logs/{key}.json").read_text())
        log = log.replace("page_contents", f"<h2>{data['title']}</h2><hr />{log_details['body']}<hr /> meta: {log_details}")
        path = Path("portal/src/log") / key
        path.mkdir(exist_ok=True)
        (path / "index.html").write_text(log)
