import json
from pathlib import Path
from urllib.request import urlopen, urlretrieve

from bs4 import BeautifulSoup
from PIL import Image, ImageDraw, ImageFont

ogp_size = (1200, 630)
font = ImageFont.truetype(
    urlopen("https://github.com/googlefonts/morisawa-biz-ud-mincho/raw/main/fonts/ttf/BIZUDPMincho-Regular.ttf"),
    size=36,
)
white = (255, 255, 255)
black = (0, 0, 0)
save_dir = Path("portal/src/assets/images")
save_dir.mkdir(exist_ok=True)
iframes_dir = Path("portal/src/assets/iframes")
iframes_dir.mkdir(exist_ok=True)
weed_iframe_base = """
<html>
    <head><link rel="stylesheet" href="./weed.css" /></head>
    <body>
        {svg}
    </body>
</html>
"""


def write_blog_image(title: str, output: str):
    image = Image.new("RGB", ogp_size, (255, 255, 255))
    draw = ImageDraw.Draw(image)
    draw.text((30, 315 - 50), title, black, font=font)
    draw.text((750, 315 + 2), "Tech Blog | Trash Box", black, font=font)
    draw.line([(0, 315), (1200, 315)], black, width=2)
    image.save(save_dir / f"{output}.png")


def write_portal_image(title: str, output: str):
    image = Image.new("RGB", ogp_size, (255, 255, 255))
    draw = ImageDraw.Draw(image)
    draw.text((30, 315 - 50), title, black, font=font)
    draw.text((950, 315 + 2), "Trash Box", black, font=font)
    draw.line([(0, 315), (1200, 315)], black, width=2)
    image.save(save_dir / f"{output}.png")


def write_tools_image(title: str, output: str):
    image = Image.new("RGB", ogp_size, (255, 255, 255))
    draw = ImageDraw.Draw(image)
    draw.text((30, 315 - 50), title, black, font=font)
    draw.text((800, 315 + 2), "Tools | Trash Box", black, font=font)
    draw.line([(0, 315), (1200, 315)], black, width=2)
    image.save(save_dir / f"{output}.png")


if __name__ == "__main__":
    articles = json.loads((Path() / "portal/src/assets/articles/list.json").read_text())
    for key in articles.keys():
        write_blog_image(articles[key]["title"], key)
    write_portal_image("Home", "home")
    write_portal_image("Projects", "projects")
    write_blog_image("Tech Articles", "blog")
    write_portal_image("Tools", "tools")
    write_portal_image("Snippets", "snippets")
    write_tools_image("JSON Typer", "json-typer")
    write_tools_image("REALTIME", "realtime")
    write_tools_image("JSON Formatter", "json-formatter")
    write_tools_image("Base64 Encoder/Decoder", "base64")
    write_tools_image("GitHub Flavored Markdown Writer", "mdwriter")
    write_tools_image("Regex Checker", "regex")
    write_tools_image("Year Checker", "year")
    write_tools_image("OpenApi Viewer", "openapi")
    write_tools_image("Mermaid Live Editor", "mermaid")
    write_tools_image("FX Calculator", "fx-calc")
