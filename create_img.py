import json
from pathlib import Path
from urllib.request import urlopen

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
iframes_dir = Path("portal/src/assets/iframes")
weed_iframe_base = """
<html>
    <head><link rel="stylesheet" href="./weed.css" /></head>
    <body>%s</body>
</html>
"""


def write_weeds_iframe():
    years = [2017, 2018, 2019, 2020, 2022]
    for year in years:
        weed_svg = BeautifulSoup(
            urlopen(f"https://github.com/kemu3007?tab=overview&from={year}-12-01&to={year}-12-31"),
            features="html.parser",
        ).find(class_="js-calendar-graph-svg")
        html = weed_iframe_base % weed_svg
        (iframes_dir / f"weed_{year}.html").write_text(html)


def write_blog_image(title: str, output: str):
    image = Image.new("RGB", ogp_size, (255, 255, 255))
    draw = ImageDraw.Draw(image)
    draw.text((30, 315 - 50), title, black, font=font)
    draw.text((880, 315 + 2), "kemu tech blog", black, font=font)
    draw.line([(0, 315), (1200, 315)], black, width=2)
    image.save(save_dir / f"{output}.png")


def write_log_image(title: str, output: str):
    image = Image.new("RGB", ogp_size, (255, 255, 255))
    draw = ImageDraw.Draw(image)
    draw.text((30, 315 - 50), title, black, font=font)
    draw.text((1000, 315 + 2), "kemu log", black, font=font)
    draw.line([(0, 315), (1200, 315)], black, width=2)
    image.save(save_dir / f"{output}.png")


def write_portal_image(title: str, output: str):
    image = Image.new("RGB", ogp_size, (255, 255, 255))
    draw = ImageDraw.Draw(image)
    draw.text((30, 315 - 50), title, black, font=font)
    draw.text((950, 315 + 2), "kemu portal", black, font=font)
    draw.line([(0, 315), (1200, 315)], black, width=2)
    image.save(save_dir / f"{output}.png")


def write_tools_image(title: str, output: str):
    image = Image.new("RGB", ogp_size, (255, 255, 255))
    draw = ImageDraw.Draw(image)
    draw.text((30, 315 - 50), title, black, font=font)
    draw.text((970, 315 + 2), "kemu tools", black, font=font)
    draw.line([(0, 315), (1200, 315)], black, width=2)
    image.save(save_dir / f"{output}.png")


if __name__ == "__main__":
    articles = json.loads((Path() / "portal/src/assets/articles/list.json").read_text())
    for key in articles.keys():
        write_blog_image(articles[key]["title"], key)
    logs = json.loads((Path() / "portal/src/assets/logs/list.json").read_text())
    for key in logs.keys():
        write_log_image(logs[key]["title"], key)
    write_portal_image("home", "home")
    write_blog_image("blog", "blog")
    write_log_image("log", "log")
    write_portal_image("tools", "tools")
    write_portal_image("contact", "contact")
    write_tools_image("IP Address Checker", "user-info")
    write_tools_image("Amazon Associate Linker", "associate")
    write_tools_image("JSON Typer", "json-typer")
    write_tools_image("REALTIME", "realtime")
    write_tools_image("JSON Formatter", "json-formatter")
    write_tools_image("Base64 Encoder/Decoder", "base64")
    write_tools_image("GitHub Flavored Markdown Writer", "mdwriter")
    write_tools_image("Regex Checker", "regex")
    write_tools_image("Year Checker", "year")
    write_tools_image("OpenApi Viewer", "openapi")
    write_weeds_iframe()
