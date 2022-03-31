import json
import zoneinfo
from datetime import datetime
from pathlib import Path

if __name__ == "__main__":
    path = Path() / "portal/src/assets/version.json"
    tz = zoneinfo.ZoneInfo("Asia/Tokyo")
    path.write_text(json.dumps({"last-release": datetime.now(tz=tz).strftime("%Y/%m/%d %H:%M:%S(JST)")}))
