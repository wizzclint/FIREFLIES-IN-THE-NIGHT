import re, base64, os, sys, hashlib

SRC = sys.argv[1]
OUT_DIR = sys.argv[2]
os.makedirs(OUT_DIR, exist_ok=True)

EXT = {
    "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp", "image/gif": "gif",
    "video/mp4": "mp4", "video/webm": "webm", "video/quicktime": "mov",
    "audio/mpeg": "mp3", "audio/mp4": "m4a", "audio/wav": "wav",
}

pattern = re.compile(r'data:(image|video|audio)/([a-zA-Z0-9.+-]+);base64,([A-Za-z0-9+/=]{200,})')

with open(SRC, "r", encoding="utf-8", errors="ignore") as f:
    content = f.read()

seen = {}
count = 0
for m in pattern.finditer(content):
    kind, subtype, data = m.group(1), m.group(2), m.group(3)
    mime = f"{kind}/{subtype}"
    ext = EXT.get(mime, subtype.split("+")[0])
    # Hash the full payload (not just a prefix) - MP4/JPEG containers often
    # share identical header bytes across genuinely different files, so a
    # short prefix key wrongly collapses distinct clips into "duplicates".
    key = hashlib.sha256(data.encode("ascii")).hexdigest()
    if key in seen:
        continue
    seen[key] = True
    count += 1
    fname = f"{count:02d}_{kind}.{ext}"
    try:
        raw = base64.b64decode(data)
    except Exception as e:
        print(f"skip {fname}: {e}")
        continue
    with open(os.path.join(OUT_DIR, fname), "wb") as out:
        out.write(raw)
    print(f"{fname}: {len(raw)/1024:.0f} KB")

print(f"\nExtracted {count} unique media files to {OUT_DIR}")
