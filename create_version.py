from datetime import datetime
import json
from pathlib import Path

if __name__ == "__main__":
    path = (Path() / "portal/src/assets/version.json")
    path.write_text(json.dumps({ "last-release": datetime.now().strftime("%Y/%m/%d %H:%M:%S") }))
