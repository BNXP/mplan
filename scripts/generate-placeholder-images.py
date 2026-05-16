#!/usr/bin/env python3
"""One-shot generator for product placeholder PNGs.

Run from project root:
  python3 scripts/generate-placeholder-images.py

Outputs into public/images/competitors and public/images.
Skips files that already look like real product photos (>40KB),
so it is safe to re-run after you've dropped real images in.
"""
from PIL import Image, ImageDraw, ImageFont
import os

HERE = os.path.dirname(os.path.abspath(__file__))
PROJECT = os.path.dirname(HERE)
OUT_DIR = os.path.join(PROJECT, "public", "images")
COMP_DIR = os.path.join(OUT_DIR, "competitors")
os.makedirs(COMP_DIR, exist_ok=True)

REAL_IMAGE_MIN_BYTES = 40_000

ARIAL_BLACK = "/System/Library/Fonts/Supplemental/Arial Black.ttf"
ARIAL_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
ARIAL = "/System/Library/Fonts/Supplemental/Arial.ttf"

W, H = 400, 600

def font(path, size):
    return ImageFont.truetype(path, size)

def measure(draw, text, f):
    bbox = draw.textbbox((0, 0), text, font=f)
    return bbox[2] - bbox[0], bbox[3] - bbox[1]

def fit_font(draw, text, font_path, start_size, max_width, min_size=18):
    size = start_size
    f = font(font_path, size)
    w, h = measure(draw, text, f)
    while w > max_width and size > min_size:
        size -= 2
        f = font(font_path, size)
        w, h = measure(draw, text, f)
    return f, w, h

def make_competitor(name, category, filename):
    img = Image.new("RGB", (W, H), (255, 255, 255))
    d = ImageDraw.Draw(img)
    border = 6
    d.rectangle([0, 0, W-1, H-1], outline=(254, 226, 226), width=border)
    d.rectangle([border, border, W-border, border+80], fill=(254, 242, 242))
    cat_f = font(ARIAL_BOLD, 28)
    cw, ch = measure(d, category, cat_f)
    d.text(((W-cw)/2, border + (80-ch)/2 - 4), category, fill=(185, 28, 28), font=cat_f)

    pack_top = 130
    pack_h = 320
    pack_left = 70
    pack_right = W - 70
    d.rounded_rectangle(
        [pack_left, pack_top, pack_right, pack_top + pack_h],
        radius=24, fill=(243, 244, 246), outline=(209, 213, 219), width=3
    )
    start = 56 if len(name) <= 8 else (44 if len(name) <= 12 else 36)
    name_f, nw, nh = fit_font(d, name, ARIAL_BLACK, start, pack_right - pack_left - 30)
    d.text(((W-nw)/2, pack_top + pack_h/2 - nh/2 - 30), name, fill=(31, 41, 55), font=name_f)
    sub = "GENERIC OPTION"
    sub_f = font(ARIAL_BOLD, 20)
    sw, sh = measure(d, sub, sub_f)
    d.text(((W-sw)/2, pack_top + pack_h/2 - sh/2 + 30), sub, fill=(156, 163, 175), font=sub_f)
    foot = "TEMPORARY  ONLY"
    foot_f = font(ARIAL_BOLD, 22)
    fw, fh = measure(d, foot, foot_f)
    d.text(((W-fw)/2, H - 80), foot, fill=(220, 38, 38), font=foot_f)
    img.save(os.path.join(COMP_DIR, filename), "PNG", optimize=True)
    print(f"  - competitors/{filename}")

def make_our_product(lines, sublines, filename):
    img = Image.new("RGB", (W, H), (5, 46, 22))
    d = ImageDraw.Draw(img)
    for y in range(H):
        t = y / H
        r = int(5 + (16-5)*t)
        g = int(46 + (101-46)*t)
        b = int(22 + (52-22)*t)
        d.line([(0, y), (W, y)], fill=(r, g, b))
    d.rectangle([0, 0, W-1, H-1], outline=(212, 175, 55), width=10)
    d.rectangle([15, 15, W-16, H-16], outline=(245, 215, 119), width=2)

    badge_f = font(ARIAL_BOLD, 22)
    badge = "OUR  PRODUCT"
    bw, bh = measure(d, badge, badge_f)
    d.rounded_rectangle([(W-bw)/2 - 18, 60, (W+bw)/2 + 18, 60 + bh + 16], radius=10, fill=(212, 175, 55))
    d.text(((W-bw)/2, 60 + 8), badge, fill=(5, 46, 22), font=badge_f)

    label_y = 180
    line_gap = 8
    for line in lines:
        f, lw, lh = fit_font(d, line, ARIAL_BLACK, 64, W - 80, min_size=28)
        d.text(((W-lw)/2, label_y), line, fill=(245, 215, 119), font=f)
        label_y += lh + line_gap

    label_y += 24

    sub_f = font(ARIAL_BOLD, 22)
    for line in sublines:
        sw, sh = measure(d, line, sub_f)
        d.text(((W-sw)/2, label_y), line, fill=(229, 231, 235), font=sub_f)
        label_y += sh + 6

    foot = "PERSONALIZED  PLAN"
    foot_f = font(ARIAL_BOLD, 18)
    fw, fh = measure(d, foot, foot_f)
    d.text(((W-fw)/2, H - 60), foot, fill=(245, 215, 119), font=foot_f)
    img.save(os.path.join(OUT_DIR, filename), "PNG", optimize=True)
    print(f"  - {filename}")

competitors = [
    ("VIAGRA", "ED PILL", "viagra.png"),
    ("CIALIS", "ED PILL", "cialis.png"),
    ("SNAFI", "ED PILL", "snafi.png"),
    ("ERECTA", "ED PILL", "erecta.png"),
    ("WAFI", "ED PILL", "wafi.png"),
    ("PRILIGY", "PE PILL", "priligy.png"),
    ("LEJAM", "PE PILL", "lejam.png"),
    ("ENDURA", "PE PILL", "endura.png"),
    ("PROCOMIL", "DELAY SPRAY", "procomil.png"),
    ("DYNAMO", "DELAY SPRAY", "dynamo.png"),
    ("STUD 100", "DELAY SPRAY", "stud100.png"),
    ("pjur PROLONG", "DELAY SPRAY", "pjur-prolong.png"),
    ("EROS DELAY", "DELAY SPRAY", "eros-delay.png"),
    ("HIMCOLIN", "GEL", "himcolin.png"),
    ("EROXON", "GEL", "eroxon.png"),
    ("PRILA 5%", "CREAM", "prila-cream.png"),
    ("EMLA", "CREAM", "emla-cream.png"),
    ("LIDOCAINE", "CREAM", "lidocaine-cream.png"),
]

our = [
    (["YOUR", "PLAN"], ["Personalised", "Daily Follow-Up"], "our-product-main.png"),
    (["YOUR", "BOX"], ["Discreet Packaging", "90-Day Guarantee"], "our-product-box.png"),
    (["YOUR", "BOTTLE"], ["Halal Formula", "Doctor-Reviewed"], "our-product-bottle.png"),
]

def should_skip(filepath):
    if not os.path.exists(filepath):
        return False
    return os.path.getsize(filepath) > REAL_IMAGE_MIN_BYTES

print("Generating competitor placeholders…")
for name, cat, fn in competitors:
    path = os.path.join(COMP_DIR, fn)
    if should_skip(path):
        print(f"  = competitors/{fn} (kept real image)")
        continue
    make_competitor(name, cat, fn)

print("\nGenerating own-product placeholders…")
for lines, sublines, fn in our:
    path = os.path.join(OUT_DIR, fn)
    if should_skip(path):
        print(f"  = {fn} (kept real image)")
        continue
    make_our_product(lines, sublines, fn)

print("\nAll done.")
