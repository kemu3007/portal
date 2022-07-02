import json
from pathlib import Path
from typing import Dict, List, Optional, TypedDict

Label = TypedDict("Label", {"name": str, "color": str})

Article = TypedDict(
    "Article", {"title": str, "body": str, "created_at": str, "photo": Optional[str], "labels": List[Label]}
)

meta = {}


def create_meta(img: str, title: str, description: str, path: str):
    meta[path] = {
        "title": title,
        "description": description.strip(),
        "img": img,
    }


if __name__ == "__main__":
    # blog
    articles: Dict[str, Article] = json.loads((Path() / "portal/src/assets/articles/list.json").read_text())
    en_articles: Dict[str, Article] = json.loads((Path() / "portal/src/assets/articles/en/list.json").read_text())
    zh_articles: Dict[str, Article] = json.loads((Path() / "portal/src/assets/articles/zh/list.json").read_text())
    logs: Dict[str, Article] = json.loads((Path() / "portal/src/assets/logs/list.json").read_text())

    create_meta(
        "https://portal.kemu.site/assets/images/blog.png",
        "Kemu Tech Blog",
        """
        Angular / DjangoがメインのTech Noteです。
        転職先/個人での仕事の依頼など可能です。Contactページより連絡を行なってください。
        """,
        "/blog",
    )
    for key, data in articles.items():
        create_meta(
            f"https://portal.kemu.site/assets/images/{key}.png",
            f"{data['title']} | Kemu Tech Blog",
            data["body"],
            f"/blog/{key}",
        )
    create_meta(
        "https://portal.kemu.site/assets/images/blog.png",
        "Kemu Tech Blog ~English~",
        """
        Kemu's Tech Note about Angular / Django / etc...
        """,
        "/blog/en",
    )
    for key, data in en_articles.items():
        create_meta(
            f"https://portal.kemu.site/assets/images/en/{key}.png",
            f"{data['title']} | Kemu Tech Blog",
            data["body"],
            f"/blog/en/{key}",
        )
    create_meta(
        "https://portal.kemu.site/assets/images/zh/blog.png",
        "Kemu Tech Blog ~Chinese~",
        """
        Kemu's Tech Note about Angular / Django / etc...
        """,
        "/blog/zh",
    )
    for key, data in zh_articles.items():
        create_meta(
            f"https://portal.kemu.site/assets/images/en/{key}.png",
            f"{data['title']} | Kemu Tech Blog",
            data["body"],
            f"/blog/zh/{key}",
        )
    # log
    create_meta(
        "https://portal.kemu.site/assets/images/log.png",
        "kemu 旅行記録など雑記 | Kemu Log",
        """
        旅行ログなど雑記置き場、日ごろは東京にいたり淡路島にいたり大阪にいたり。
        淡路島のログが多めになるかと思います(写真が撮りやすいということもあるので)
        """,
        "/log",
    )
    for key, data in logs.items():
        create_meta(
            f"https://portal.kemu.site/assets/images/{key}.png",
            f"{data['title']} | Kemu Log",
            data["body"],
            f"/log/{key}",
        )

    # tools
    create_meta(
        "https://portal.kemu.site/assets/images/tools.png",
        "Kemu Tools",
        "自作ツール置き場 / Markdown Writer, QrCode Maker, JSON Typer, JSON Formatter, Base64 Translator...",
        "/tools",
    )
    # ip address checker
    create_meta(
        "https://portal.kemu.site/assets/images/user-info.png",
        "IP Address Checker | Kemu Tools",
        """
        IP Address, User Agentなどの端末情報を確認することができ、結果を自動的にローカルストレージに保存することで、過去データとの称号を可能にしています。
        """,
        "/tools/userInfo",
    )
    # associate link maker
    create_meta(
        "https://portal.kemu.site/assets/images/associate.png",
        "Amazon Associate Linker | Kemu Tools",
        """
        Amazon Associate IDと商品URLを入力することで商品リンクにアソシエイトIDの紐付けを可能にしています。
        ローカルストレージ上に前回入力したデータを保存することで再入力の手間を削減しています。
        """,
        "/tools/amazonAssociate",
    )
    # JSON Typer
    create_meta(
        "https://portal.kemu.site/assets/images/json-typer.png",
        "JSON Typer | Kemu Tools",
        """
        任意のJSONの値をTypeScriptのinterface型に変換します。
        ローカルストレージ上に前回入力されたデータを保存することで利便性を高めており、ワンクリックで結果をコピーすることが可能です。
        """,
        "/tools/jsonTyper",
    )

    # realtime

    create_meta(
        "https://portal.kemu.site/assets/images/realtime.png",
        "REALTIME | Kemu Tools",
        """
        現在時刻を100ms単位で更新し、正確な日時をお知らせします。
        指定した時刻に指定したワードを呟きたいTwitterのmeme / 先着順の申し込みカウントダウンのようなケースでお使いください。
        """,
        "/tools/realtime",
    )

    # JSON Formatter

    create_meta(
        "https://portal.kemu.site/assets/images/json-formatter.png",
        "JSON Formatter | Kemu Tools",
        """
        未整形のJSONデータを整形します。
        ローカルストレージ上に前回入力されたデータを保存することで利便性を高めており、ワンクリックで結果をコピーすることが可能です。
        """,
        "/tools/jsonFormatter",
    )

    # Base64 Encoder/Decoder

    create_meta(
        "https://portal.kemu.site/assets/images/base64.png",
        "Base64 Encoder/Decoder | Kemu Tools",
        """
        文字列データをBase64に、Base64データを文字列に変換します。
        マルチバイト文字にも対応しており、フロントエンドからバックエンドにJSON形式でファイルを送信する場合のダミーデータ作成などに便利です。
        """,
        "/tools/base64",
    )

    # GitHub Flavored Markdown Writer

    create_meta(
        "https://portal.kemu.site/assets/images/mdwriter.png",
        "GitHub Flavored Markdown Writer | Kemu Tools",
        """
        GitHub Flavored MarkdownをHTMLに変換します。変換データ及び元のMarkdwonデータをワンクリックでコピー可能です。
        """,
        "/tools/mdwriter",
    )

    # Regex Checker

    create_meta(
        "https://portal.kemu.site/assets/images/regex.png",
        "Regex Checker | Kemu Tools",
        """
        正規表現とテキストを入力することでテキストを対象とした正規表現のテストを行い、index, マッチ文字列を返却します。
        """,
        "/tools/regex",
    )

    # Year Checker

    create_meta(
        "https://portal.kemu.site/assets/images/fx-calc.png",
        "FX Calculator | Kemu Tools",
        """
        FXに利用する証拠金率、ロスカット値、購入可能の最大ロット数などの値を計算します。
        """,
        "/tools/fx-calc",
    )

    # Year Checker

    create_meta(
        "https://portal.kemu.site/assets/images/year.png",
        "Year Checker | Kemu Tools",
        """
        誕生日をもとに各種卒業年度/厄年といった年月日を計算します。
        """,
        "/tools/year",
    )

    # OpenApi Viewer

    create_meta(
        "https://portal.kemu.site/assets/images/openapi.png",
        "OpenApi Viewer | Kemu Tools",
        """
        OpenApi JSON/YAMLをSwagger-UI / Redoc UIで表示します。
        """,
        "/tools/openapi",
    )

    # Mermaid Live Editor

    create_meta(
        "https://portal.kemu.site/assets/images/mermaid.png",
        "Mermaid Live Editor | Kemu Tools",
        """
        Mermaidをリアルタイムで描画し、記述を支援します。
        """,
        "/tools/mermaid",
    )

    # contact

    create_meta(
        "https://portal.kemu.site/assets/images/contact.png",
        "Contact | Kemu Portal",
        """
        仕事の依頼/転職の誘いなどはこちらからお願いします。セールスメールはお控えください。
        """,
        "/contact",
    )

    # snippets

    create_meta(
        "https://portal.kemu.site/assets/images/snippets.png",
        "Snippets | Kemu Portal",
        """
        開発時によく利用するスニペット置き場
        """,
        "/snippets",
    )

    # projects

    create_meta(
        "https://portal.kemu.site/assets/images/projects.png",
        "Projects | Kemu Portal",
        """
        開発したアプリケーション / テストに利用したレポジトリ一覧
        """,
        "/projects",
    )
    # nav count
    Path("portal/src/assets/count.json").write_text(json.dumps({"blog": len(articles.keys()), "log": len(logs.keys())}))

    Path("portal/src/assets/meta.json").write_text(json.dumps(meta, ensure_ascii=False))
