import json
from pathlib import Path
from urllib.request import urlopen
from PIL import Image, ImageFont, ImageDraw

ogp_size = (1200, 630)
font = ImageFont.truetype("./font.ttf", size=36)
white = (255, 255, 255)
black = (0, 0, 0)
save_dir = Path("portal/src/assets/images")

def write_weed_image():
    weed = urlopen("https://grass-graph.appspot.com/images/kemu3007.png").read()
    (save_dir / "weed.png").write_bytes(weed)

def write_blog_image(title: str, output: str):
    image = Image.new("RGB", ogp_size, (255, 255, 255))
    draw = ImageDraw.Draw(image)
    draw.text((30, 315 - 50), title, black, font=font)
    draw.text((900, 315 + 2), "kemu tech blog", black, font=font)
    draw.line([(0, 315), (1200, 315)], black, width=2)
    image.save(save_dir /f"{output}.png")

def write_log_image(title: str, output: str):
    image = Image.new("RGB", ogp_size, (255, 255, 255))
    draw = ImageDraw.Draw(image)
    draw.text((30, 315 - 50), title, black, font=font)
    draw.text((900, 315 + 2), "kemu log", black, font=font)
    draw.line([(0, 315), (1200, 315)], black, width=2)
    image.save(save_dir /f"{output}.png")

def write_portal_image(title: str, output: str):
    image = Image.new("RGB", ogp_size, (255, 255, 255))
    draw = ImageDraw.Draw(image)
    draw.text((30, 315 - 50), title, black, font=font)
    draw.text((970, 315 + 2), "kemu portal", black, font=font)
    draw.line([(0, 315), (1200, 315)], black, width=2)
    image.save(save_dir /f"{output}.png")

if __name__ == "__main__":
    articles = json.loads((Path() / "portal/src/assets/articles/list.json").read_text())
    for key in articles.keys():
        write_blog_image(articles[key]["title"], key)
    logs = json.loads((Path() / "portal/src/assets/logs/list.json").read_text())
    for key in logs.keys():
        write_log_image(logs[key]["title"], key)
    write_portal_image("home", "home")
    write_portal_image("blog", "blog")
    write_portal_image("log", "log")
    write_portal_image("tools", "tools")
    write_portal_image("contact", "contact")
    write_portal_image("IP Address Checker", "user-info")
    write_portal_image("Amazon Associate Linker", "associate")
    write_portal_image("JSON Typer", "json-typer")
    write_weed_image()
