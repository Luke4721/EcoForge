#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# Move the Ecobin theme assets off the vendor's demo server and into your own
# public/ folder. Run from the project root. Requires: wget.
#
# Why: layout.tsx currently loads ~91 CSS/JS files from demo.awaikenthemes.com.
# That means (a) the vendor can change or delete those files and the site
# breaks with no warning, (b) every visitor's browser hits their server, and
# (c) it is what made their licence checker flag the site in the first place.
#
# Prefer copying the CSS/JS out of the theme ZIP you purchased. Use this only
# for the Elementor/ElementsKit generated CSS that isn't in the ZIP.
# ---------------------------------------------------------------------------
set -euo pipefail

SRC="demo.awaikenthemes.com"
DEST="public/theme"

echo "==> Collecting asset URLs from app/layout.tsx"
grep -o "https://${SRC}/[^\"']*" app/layout.tsx | sort -u > /tmp/eg-assets.txt
echo "    $(wc -l < /tmp/eg-assets.txt) unique URLs"

echo "==> Downloading into ${DEST}/"
mkdir -p "${DEST}"
wget --quiet --show-progress \
     --directory-prefix="${DEST}" \
     --force-directories --no-host-directories \
     --input-file=/tmp/eg-assets.txt

echo "==> Rewriting references in app/layout.tsx"
cp app/layout.tsx app/layout.tsx.bak
sed -i.tmp "s|https://${SRC}/ecobin/|/theme/ecobin/|g; s|https://${SRC}/|/theme/|g" app/layout.tsx
rm -f app/layout.tsx.tmp

echo "==> Remaining references to the vendor host:"
grep -c "${SRC}" app/layout.tsx || echo "    0 — clean"
echo "Backup saved at app/layout.tsx.bak"
