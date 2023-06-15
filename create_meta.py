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

    create_meta(
        "https://trash-box.dev/tech/assets/images/blog.png",
        "Tech Blog | Trash Box",
        """
        Angular / Djangoがメインのログゴミ置き場です。
        """,
        "/blog",
    )

    for key, data in articles.items():
        create_meta(
            f"https://trash-box.dev/tech/assets/images/{key}.png",
            f"{data['title']} | Tech Blog | Trash Box",
            data["body"],
            f"/blog/{key}",
        )

    # tools
    create_meta(
        "https://trash-box.dev/tech/assets/images/tools.png",
        "Tools | Trash Box",
        "自作ツール置き場 / Markdown Writer, QrCode Maker, JSON Typer, JSON Formatter, Base64 Translator...",
        "/tools",
    )
    # JSON Typer
    create_meta(
        "https://trash-box.dev/tech/assets/images/json-typer.png",
        "JSON Typer | Tools | Trash Box",
        """
        任意のJSONの値をTypeScriptのinterface型に変換します。
        ローカルストレージ上に前回入力されたデータを保存することで利便性を高めており、ワンクリックで結果をコピーすることが可能です。
        """,
        "/tools/jsonTyper",
    )

    # realtime

    create_meta(
        "https://trash-box.dev/tech/assets/images/realtime.png",
        "REALTIME | Tools | Trash Box",
        """
        現在時刻を100ms単位で更新し、正確な日時をお知らせします。
        指定した時刻に指定したワードを呟きたいTwitterのmeme / 先着順の申し込みカウントダウンのようなケースでお使いください。
        """,
        "/tools/realtime",
    )

    # JSON Formatter

    create_meta(
        "https://trash-box.dev/tech/assets/images/json-formatter.png",
        "JSON Formatter | Tools | Trash Box",
        """
        未整形のJSONデータを整形します。
        ローカルストレージ上に前回入力されたデータを保存することで利便性を高めており、ワンクリックで結果をコピーすることが可能です。
        """,
        "/tools/jsonFormatter",
    )

    # Base64 Encoder/Decoder

    create_meta(
        "https://trash-box.dev/tech/assets/images/base64.png",
        "Base64 Encoder/Decoder | Tools | Trash Box",
        """
        文字列データをBase64に、Base64データを文字列に変換します。
        マルチバイト文字にも対応しており、フロントエンドからバックエンドにJSON形式でファイルを送信する場合のダミーデータ作成などに便利です。
        """,
        "/tools/base64",
    )

    # GitHub Flavored Markdown Writer

    create_meta(
        "https://trash-box.dev/tech/assets/images/mdwriter.png",
        "GitHub Flavored Markdown Writer | Tools | Trash Box",
        """
        GitHub Flavored MarkdownをHTMLに変換します。変換データ及び元のMarkdwonデータをワンクリックでコピー可能です。
        """,
        "/tools/mdwriter",
    )

    # Regex Checker

    create_meta(
        "https://trash-box.dev/tech/assets/images/regex.png",
        "Regex Checker | Tools | Trash Box",
        """
        正規表現とテキストを入力することでテキストを対象とした正規表現のテストを行い、index, マッチ文字列を返却します。
        """,
        "/tools/regex",
    )

    # Year Checker

    create_meta(
        "https://trash-box.dev/tech/assets/images/fx-calc.png",
        "FX Calculator | Tools | Trash Box",
        """
        FXに利用する証拠金率、ロスカット値、購入可能の最大ロット数などの値を計算します。
        """,
        "/tools/fx-calc",
    )

    # Year Checker

    create_meta(
        "https://trash-box.dev/tech/assets/images/year.png",
        "Year Checker | Tools | Trash Box",
        """
        誕生日をもとに各種卒業年度/厄年といった年月日を計算します。
        """,
        "/tools/year",
    )

    # OpenApi Viewer

    create_meta(
        "https://trash-box.dev/tech/assets/images/openapi.png",
        "OpenApi Viewer | Tools | Trash Box",
        """
        OpenApi JSON/YAMLをSwagger-UI / Redoc UIで表示します。
        """,
        "/tools/openapi",
    )

    # Mermaid Live Editor

    create_meta(
        "https://trash-box.dev/tech/assets/images/mermaid.png",
        "Mermaid Live Editor | Tools | Trash Box",
        """
        Mermaidをリアルタイムで描画し、記述を支援します。
        """,
        "/tools/mermaid",
    )

    # snippets

    create_meta(
        "https://trash-box.dev/tech/assets/images/snippets.png",
        "Snippets | Trash Box",
        """
        開発時によく利用するスニペット置き場
        """,
        "/snippets",
    )

    # nav count
    Path("portal/src/assets/count.json").write_text(json.dumps({"blog": len(articles.keys())}))

    Path("portal/src/assets/meta.json").write_text(json.dumps(meta, ensure_ascii=False))
