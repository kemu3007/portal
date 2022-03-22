import json
from pathlib import Path

if __name__ == "__main__":
    # blog
    articles = json.loads((Path() / "portal/src/assets/articles/list.json").read_text())
    base_html = Path('./bot.html').read_text()
    blog_home = base_html.replace("page_image", "https://portal.kemu.site/assets/images/blog.png").replace("page_title", "kemu tech blog").replace("page_description", "kemu tech blog")
    blog_home_html = [f"<h2><a href='/blog/{key}'>{article['title']}</a></h2><hr /> {article['body']}" for key, article in articles.items()]
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
    log_home_html = [f"<h2><a href='/log/{key}'>{log['title']}</a></h2><hr /> {log['body']}" for key, log in logs.items()]
    log_home = log_home.replace("page_contents", "<hr />".join(log_home_html))    
    path = Path("portal/src/log")
    path.mkdir(exist_ok=True)
    (path / "index.html").write_text(log_home)
    # tools
    tools = json.loads((Path() / "portal/src/assets/kemu-site.tools.json").read_text())
    tools_html = base_html.replace("page_image", "https://portal.kemu.site/assets/images/tools.png").replace("page_title", "kemu tools").replace("page_description", "自作ツール置き場")
    tools_base = [f"<h2><a href='{tool['link']}'>{tool['name']}</a></h2><hr /> {tool['description']}" for tool in tools]
    tools_html = tools_html.replace("page_contents", "<hr />".join(tools_base))
    path = Path("portal/src/tools")
    path.mkdir(exist_ok=True)
    (path / "index.html").write_text(tools_html)
    # userInfo
    user_info_html = base_html.replace("page_image", "https://portal.kemu.site/assets/images/user-info.png").replace("page_title", "kemu tools | user information").replace("page_description", "ユーザ情報確認")
    user_info_html = user_info_html.replace("page_contents", "IPアドレス等の情報を確認します。 あなたのIPアドレス ...")
    path = Path("portal/src/tools/userInfo")
    path.mkdir(exist_ok=True)
    (path / "index.html").write_text(user_info_html)
    # contact
    contact_html = base_html.replace("page_image", "https://portal.kemu.site/assets/images/contact.png").replace("page_title", "Contact").replace("page_description", "Contact")
    contact_html = contact_html.replace("page_contents", "仕事の依頼などは以下のメールアドレスにお願いします。セールスメールはお控えください。")
    path = Path("portal/src/contact")
    path.mkdir(exist_ok=True)
    (path / "index.html").write_text(contact_html)
    for key, data in logs.items():
        log = base_html.replace("page_image", data["photo"] or f"https://portal.kemu.site/assets/images/{key}.png").replace("page_title", f"kemu logs | {data['title']}").replace("page_description", data['body'])
        log_details = json.loads((Path() / f"portal/src/assets/logs/{key}.json").read_text())
        log = log.replace("page_contents", f"<h2>{data['title']}</h2><hr />{log_details['body']}<hr /> meta: {log_details}")
        path = Path("portal/src/log") / key
        path.mkdir(exist_ok=True)
        (path / "index.html").write_text(log)
    # nav count
    Path("portal/src/assets/count.json").write_text(json.dumps({ "blog": len(articles.keys()), "log": len(logs.keys())}))
