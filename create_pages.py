import json
from pathlib import Path

if __name__ == "__main__":
    # blog
    articles = json.loads((Path() / "portal/src/assets/articles/list.json").read_text())
    base_html = Path("./base.html").read_text()
    blog_home = (
        base_html.replace("page_image", "https://portal.kemu.site/assets/images/blog.png")
        .replace("page_title", "kemu tech blog")
        .replace("page_description", "kemu tech blog")
    )
    blog_home_html = [
        f"<h2><a href='/blog/{key}'>{article['title']}</a></h2><hr /> {article['body']}"
        for key, article in articles.items()
    ]
    blog_home = blog_home.replace("page_contents", "<hr />".join(blog_home_html))
    path = Path("portal/src/blog")
    path.mkdir(exist_ok=True)
    (path / "index.html").write_text(blog_home)
    for key, data in articles.items():
        blog = (
            base_html.replace("page_image", f"https://portal.kemu.site/assets/images/{key}.png")
            .replace("page_title", f"{data['title']} | kemu tech blog")
            .replace("page_description", data["body"])
        )
        blog_details = json.loads((Path() / f"portal/src/assets/articles/{key}.json").read_text())
        blog = blog.replace(
            "page_contents",
            f"<h2>{data['title']}</h2> {blog_details['body']} <hr /> meta: {blog_details}",
        )
        path = Path("portal/src/blog") / key
        path.mkdir(exist_ok=True)
        (path / "index.html").write_text(blog)
    # log
    logs = json.loads((Path() / "portal/src/assets/logs/list.json").read_text())
    log_home = (
        base_html.replace("page_image", "https://portal.kemu.site/assets/images/log.png")
        .replace("page_title", "kemu logs")
        .replace("page_description", "kemu logs")
    )
    log_home_html = [
        f"<h2><a href='/log/{key}'>{log['title']}</a></h2><hr /> {log['body']}" for key, log in logs.items()
    ]
    log_home = log_home.replace("page_contents", "<hr />".join(log_home_html) + f"meta: {logs}")
    path = Path("portal/src/log")
    path.mkdir(exist_ok=True)
    (path / "index.html").write_text(log_home)
    # tools
    tools = json.loads((Path() / "portal/src/app/tools/tools.json").read_text())
    tools_html = (
        base_html.replace("page_image", "https://portal.kemu.site/assets/images/tools.png")
        .replace("page_title", "kemu tools")
        .replace("page_description", "自作ツール置き場")
    )
    tools_base = [
        f"<h2><a href='{tool['link']}'>{tool['label']}</a></h2><hr /> {tool['description']}" for tool in tools
    ]
    tools_html = tools_html.replace("page_contents", "<hr />".join(tools_base))
    path = Path("portal/src/tools")
    path.mkdir(exist_ok=True)
    (path / "index.html").write_text(tools_html)
    # ip address checker
    user_info_html = (
        base_html.replace("page_image", "https://portal.kemu.site/assets/images/user-info.png")
        .replace("page_title", "IP Address Checker | kemu tools")
        .replace("page_description", "IP Addressなどの端末情報を確認できます。")
    )
    user_info_html = user_info_html.replace(
        "page_contents",
        """
        <h2>IP Address Checker</h2>
        IPアドレス等の情報を確認します。 あなたのIPアドレス ..........
        <table>
            <tr>
                <th>IP Address</th>
                <td>0.0.0.0</td>
            </tr>
            <tr>
                <th>UserAgent</th>
                <td>...</td>
            </tr>
            <tr>
                <th>ETC...</th><td>...</td>
            </tr>
        </table>
        """,
    )
    path = Path("portal/src/tools/userInfo")
    path.mkdir(exist_ok=True)
    (path / "index.html").write_text(user_info_html)
    # associate link maker
    associate_html = (
        base_html.replace("page_image", "https://portal.kemu.site/assets/images/associate.png")
        .replace("page_title", "Amazon Associate Linker | kemu tools")
        .replace("page_description", "アソシエイトIDからアソシエイトリンクを生成します。")
    )
    associate_html = associate_html.replace(
        "page_contents",
        """
        <h2>Amazon Associate Linker</h2>
        Amazon Associate Linkを生成します。<br />
        アソシエイトID 
        <input /> 
        商品リンク <input /> 
        <button>generate</button> 
        result <button>copy</button>..........
    """,
    )
    path = Path("portal/src/tools/amazonAssociate")
    path.mkdir(exist_ok=True)
    (path / "index.html").write_text(associate_html)
    # JSON Typer
    typer_html = (
        base_html.replace("page_image", "https://portal.kemu.site/assets/images/json-typer.png")
        .replace("page_title", "JSON Typer | kemu tools")
        .replace("page_description", "JSONの値をTypeScriptのinterface型に変換します。")
    )
    typer_html = typer_html.replace(
        "page_contents",
        """
        <h2>JSON Typer</h2>
        JSONの値をTypeScriptのinterface型に変換します。List Typeには非対応です。any[]と出力されます。<br />
        またJSONキーにスラッシュなどの値が含まれている場合正しく出力されないケースがあります。<br />
        RootTypeName<input />
        JSON <textarea></textarea> <button>TYPE</button> 
        <hr />
        result <button>copy</button> ..........
    """,
    )
    path = Path("portal/src/tools/jsonTyper")
    path.mkdir(exist_ok=True)
    (path / "index.html").write_text(typer_html)
    # realtime
    realtime_html = (
        base_html.replace("page_image", "https://portal.kemu.site/assets/images/realtime.png")
        .replace("page_title", "REALTIME | kemu tools")
        .replace("page_description", "現在時刻を100ms単位で更新し、正確な日時をお知らせします。")
    )
    realtime_html = realtime_html.replace(
        "page_contents",
        """
        <h2>REALTIME</h2> 
        現在時刻を100ms単位で更新し、正確な日時をお知らせします。<br />
        <pre>
            <h2> 2000/00/00 00:00:00 </h2>
            <h2>000</h2>
        </pre>
    """,
    )
    path = Path("portal/src/tools/realtime")
    path.mkdir(exist_ok=True)
    (path / "index.html").write_text(realtime_html)
    # JSON Formatter
    formatter_html = (
        base_html.replace("page_image", "https://portal.kemu.site/assets/images/json-formatter.png")
        .replace("page_title", "JSON Formatter | kemu tools")
        .replace("page_description", "未整形のJSONデータを整形します。")
    )
    formatter_html = formatter_html.replace(
        "page_contents",
        """
        <h2>JSON Formatter</h2> 
        未整形のJSONデータを整形します。 <br />
        <input /> 
        <button>format</button>
        <hr />
        result <button>copy</button>
        ...........................
    """,
    )
    path = Path("portal/src/tools/jsonFormatter")
    path.mkdir(exist_ok=True)
    (path / "index.html").write_text(formatter_html)
    # Base64 Encoder/Decoder
    base64_html = (
        base_html.replace("page_image", "https://portal.kemu.site/assets/images/base64.png")
        .replace("page_title", "Base64 Encoder/Decoder | kemu tools")
        .replace("page_description", "文字列データをBase64に、Base64データを文字列に変換します。")
    )
    base64_html = base64_html.replace(
        "page_contents",
        """
        <h2>Base64 Encoder/Decoder</h2> 
        文字列データをBase64に、Base64データを文字列に変換します。 
        base64 <br />
        <textarea></textarea>
        string <br />
        <textarea></textarea>
        <hr />
        result <button>copy</button>
        .............................

        string <br />
        <textarea></textarea>
        base64 <br />
        <textarea></textarea>
    """,
    )
    path = Path("portal/src/tools/base64")
    path.mkdir(exist_ok=True)
    (path / "index.html").write_text(base64_html)
    # contact
    contact_html = (
        base_html.replace("page_image", "https://portal.kemu.site/assets/images/contact.png")
        .replace("page_title", "Contact | kemu portal")
        .replace("page_description", "Contact")
    )
    contact_html = contact_html.replace(
        "page_contents",
        """
        <h2> Contact Me </h2>
        仕事の依頼などは以下のメールアドレスにお願いします。セールスメールはお控えください。<br />
        TwitterのDMも可能ですが返信が遅くなってしまう可能性があるためできる限りメールでお願いいたします。<br />
        セールスメールを送信した場合メールアドレスをブロックするため以降のメールは全て受信拒否を行います。ご了承ください。<br />
        <hr />
        *********@*****.***
    """,
    )
    path = Path("portal/src/contact")
    path.mkdir(exist_ok=True)
    (path / "index.html").write_text(contact_html)
    for key, data in logs.items():
        log = (
            base_html.replace(
                "page_image",
                data["photo"] or f"https://portal.kemu.site/assets/images/{key}.png",
            )
            .replace("page_title", f"{data['title']} | kemu logs")
            .replace("page_description", data["body"])
        )
        log_details = json.loads((Path() / f"portal/src/assets/logs/{key}.json").read_text())
        log = log.replace(
            "page_contents",
            f"<h2>{data['title']}</h2><hr />{log_details['body']}<hr /> meta: {log_details}",
        )
        path = Path("portal/src/log") / key
        path.mkdir(exist_ok=True)
        (path / "index.html").write_text(log)
    # nav count
    Path("portal/src/assets/count.json").write_text(json.dumps({"blog": len(articles.keys()), "log": len(logs.keys())}))
