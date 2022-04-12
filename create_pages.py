import json
from pathlib import Path

import markdown

if __name__ == "__main__":
    # blog
    articles = json.loads((Path() / "portal/src/assets/articles/list.json").read_text())
    base_html = Path("./base.html").read_text()
    blog_home = (
        base_html.replace("page_image", "https://portal.kemu.site/assets/images/blog.png")
        .replace("page_title", "kemu tech blog")
        .replace(
            "page_description",
            """
            Angular / Djangoがメインのtech blogです。このページはAngularで作成後Github Actionsでビルド、GitHub Pagesで配信されています。
            メモ書きのような記事が中心ではありますがつまりどころっぽいのを寄せ集めています。転職先/個人での仕事の依頼など可能です。contactより連絡を行なってください。
            """,
        )
    )
    blog_home_html = [
        f"<h1><a href='/blog/{key}'>{article['title']}</a></h1><hr /> {article['body']}"
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
        body = markdown.Markdown().convert(blog_details["body"])
        blog = blog.replace(
            "page_contents",
            f"""
            <h1>{data['title']}</h1> 
            <hr />
            {body}
            <hr /> 
            meta: {blog_details}
            """,
        )
        path = Path("portal/src/blog") / key
        path.mkdir(exist_ok=True)
        (path / "index.html").write_text(blog)
    # log
    logs = json.loads((Path() / "portal/src/assets/logs/list.json").read_text())
    log_home = (
        base_html.replace("page_image", "https://portal.kemu.site/assets/images/log.png")
        .replace("page_title", "kemu 旅行記録など雑記 | kemu logs")
        .replace(
            "page_description",
            """
            旅行ログなど雑記置き場、日ごろは東京にいたり淡路島にいたり大阪にいたり。
            淡路島のログが多めになるかと思います(写真が撮りやすいということもあるので)
            """,
        )
    )
    log_home_html = [
        f"<h1><a href='/log/{key}'>{log['title']}</a></h1><hr /> {log['body']}" for key, log in logs.items()
    ]
    log_home = log_home.replace("page_contents", "<hr />".join(log_home_html) + f"meta: {logs}")
    path = Path("portal/src/log")
    path.mkdir(exist_ok=True)
    (path / "index.html").write_text(log_home)
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
        body = markdown.Markdown().convert(log_details["body"])
        log = log.replace(
            "page_contents",
            f"""
            <h1>{data['title']}</h1>
            <hr />
            {body}
            <hr /> 
            meta: {log_details}
            """,
        )
        path = Path("portal/src/log") / key
        path.mkdir(exist_ok=True)
        (path / "index.html").write_text(log)

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
        .replace(
            "page_description",
            """
            IP Address, User Agentなどの端末情報を確認することができ、結果を自動的にローカルストレージに保存することで、過去データとの称号を可能にしています。
            """,
        )
    )
    user_info_html = user_info_html.replace(
        "page_contents",
        """
        <h1>IP Address Checker</h1>
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
        .replace(
            "page_description",
            """
            Amazon Associate IDと商品URLを入力することで商品リンクにアソシエイトIDの紐付けを可能にしています。
            ローカルストレージ上に前回入力したデータを保存することで再入力の手間を削減しています。
            """,
        )
    )
    associate_html = associate_html.replace(
        "page_contents",
        """
        <h1>Amazon Associate Linker</h1>
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
        .replace(
            "page_description",
            """
            任意のJSONの値をTypeScriptのinterface型に変換します。
            ローカルストレージ上に前回入力されたデータを保存することで利便性を高めており、ワンクリックで結果をコピーすることが可能です。
            """,
        )
    )
    typer_html = typer_html.replace(
        "page_contents",
        """
        <h1>JSON Typer</h1>
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
        .replace(
            "page_description",
            """
            現在時刻を100ms単位で更新し、正確な日時をお知らせします。
            指定した時刻に指定したワードを呟きたいTwitterのmeme / 先着順の申し込みカウントダウンのようなケースでお使いください。
            """,
        )
    )
    realtime_html = realtime_html.replace(
        "page_contents",
        """
        <h1>REALTIME</h1> 
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
        .replace(
            "page_description",
            """
            未整形のJSONデータを整形します。
            ローカルストレージ上に前回入力されたデータを保存することで利便性を高めており、ワンクリックで結果をコピーすることが可能です。
            """,
        )
    )
    formatter_html = formatter_html.replace(
        "page_contents",
        """
        <h1>JSON Formatter</h1> 
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
        .replace(
            "page_description",
            """
            文字列データをBase64に、Base64データを文字列に変換します。
            マルチバイト文字にも対応しており、フロントエンドからバックエンドにJSON形式でファイルを送信する場合のダミーデータ作成などに便利です。
            """,
        )
    )
    base64_html = base64_html.replace(
        "page_contents",
        """
        <h1>Base64 Encoder/Decoder</h1> 
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

    # GitHub Flavored Markdown Writer
    mdwriter_html = (
        base_html.replace("page_image", "https://portal.kemu.site/assets/images/mdwriter.png")
        .replace("page_title", "GitHub Flavored Markdown Writer | kemu tools")
        .replace(
            "page_description",
            """
            GitHub Flavored MarkdownをHTMLに変換します。変換データ及び元のMarkdwonデータをワンクリックでコピー可能です。
            """,
        )
    )
    mdwriter_html = mdwriter_html.replace(
        "page_contents",
        """
        <h1>GitHub Flavored Markdown Writer</h1> 
        markdwon / HTML
        <hr />
        markdown<button>copy</button>
        <textarea></textarea>
        <hr />
        html 
        ............................
    """,
    )
    path = Path("portal/src/tools/mdwriter")
    path.mkdir(exist_ok=True)
    (path / "index.html").write_text(mdwriter_html)

    # Regex Checker
    regex_html = (
        base_html.replace("page_image", "https://portal.kemu.site/assets/images/regex.png")
        .replace("page_title", "Regex Checker | kemu tools")
        .replace(
            "page_description",
            """
            正規表現とテキストを入力することでテキストを対象とした正規表現のテストを行い、index, マッチ文字列を返却します。
            """,
        )
    )
    regex_html = regex_html.replace(
        "page_contents",
        """
        <h1>Regex Checker</h1> 
        正規表現<br />
        <input />
        <hr />
        テスト対象<br />
        <textarea></textarea>
        <hr />
        <table>
            <tr><th>#</th><th>index</th><th>matched text</th></tr>
            <tr><td>1</td><td>1</td><td>..........</td></tr>
            <tr><td>2</td><td>10</td><td>..........</td></tr>
        </table>
        ............................
    """,
    )
    path = Path("portal/src/tools/regex")
    path.mkdir(exist_ok=True)
    (path / "index.html").write_text(regex_html)

    # Year Checker
    year_html = (
        base_html.replace("page_image", "https://portal.kemu.site/assets/images/year.png")
        .replace("page_title", "Year Checker | kemu tools")
        .replace(
            "page_description",
            """
            誕生日をもとに各種卒業年度/厄年といった年月日を計算します。
            """,
        )
    )
    year_html = year_html.replace(
        "page_contents",
        """
        <h1>Year Checker</h1> <hr />
        誕生日をもとに各種卒業年度/厄年といった年月日を計算します。
        誕生日<br />
        <input type="date" class="form-control" />
        <hr />
        留年/浪人などの特記事項
        <hr />
        高校留年年数
        <input type="date" class="form-control" />
        大学浪人回数
        <input type="date" class="form-control" />
        大学留年年数
        <input type="date" class="form-control" />
        就職浪人年数
        <input type="date" class="form-control" />
        <hr />
        <table>
            <tr><th>#</th><th>年</th><th>出来事</th></tr>
            <tr><td>1</td><td>1</td><td>..........</td></tr>
            <tr><td>2</td><td>10</td><td>..........</td></tr>
        </table>
        ............................
    """,
    )
    path = Path("portal/src/tools/year")
    path.mkdir(exist_ok=True)
    (path / "index.html").write_text(year_html)

    # OpenApi Viewer
    swagger_html = (
        base_html.replace("page_image", "https://portal.kemu.site/assets/images/openapi.png")
        .replace("page_title", "OpenApi Viewer | kemu tools")
        .replace(
            "page_description",
            """
            OpenApi JSON/YAMLをSwagger-UIで表示します。
            """,
        )
    )
    swagger_html = swagger_html.replace(
        "page_contents",
        """
        <h1>Year Checker</h1> <hr />
        OpenApi JSON/YAMLをSwagger-UI / Redoc形式で表示します。<br />
        入力した値はローカルストレージにのみ記録され、サーバ等には記録していないため安心して利用可能です。<br />
        Spec Type<br />
        <input type="radio" class="form-control" />
        <input type="radio" class="form-control" />
        <hr />
        Swagger Spec
        <textarea class="form-control"></textarea>
        <hr />
        <button class="btn btn-secondary">Check Swagger UI</button>
        ............................
    """,
    )
    path = Path("portal/src/tools/openapi")
    path.mkdir(exist_ok=True)
    (path / "index.html").write_text(swagger_html)

    # contact
    contact_html = (
        base_html.replace("page_image", "https://portal.kemu.site/assets/images/contact.png")
        .replace("page_title", "Contact | kemu portal")
        .replace("page_description", """仕事の依頼/転職の誘いなどはこちらからお願いします。セールスメールはお控えください。""")
    )
    contact_html = contact_html.replace(
        "page_contents",
        """
        <h1> Contact Me </h1>
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
    # nav count
    Path("portal/src/assets/count.json").write_text(json.dumps({"blog": len(articles.keys()), "log": len(logs.keys())}))
