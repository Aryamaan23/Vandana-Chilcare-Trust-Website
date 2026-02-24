#!/bin/bash
# Copies the 5 screenshot images into public/gallery/ for the Our Moments section.
# Run from the Vandana-Chilcare-Trust-Website folder:
#   bash scripts/copy-gallery-images.sh
# If your screenshots are in the parent folder (vandana-childcare-trust-website).

set -e
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
PARENT_DIR="$(cd "$REPO_DIR/.." && pwd)"
GAL="$REPO_DIR/public/gallery"

mkdir -p "$GAL"

SRC1="$PARENT_DIR/Screenshot 2026-02-24 at 8.53.09 PM.png"
if [ ! -f "$SRC1" ]; then
  echo "Screenshots not found in $PARENT_DIR"
  echo "Please copy these 5 files into $GAL with names:"
  echo "  1-new-year-sapru.png, 2-tulsi-christmas-talent.png, 3-teachers-day.png, 4-awareness-visionless-kids.png, 5-raj-blind-school.png"
  exit 1
fi

cp "$SRC1" "$GAL/1-new-year-sapru.png"
cp "$PARENT_DIR/Screenshot 2026-02-24 at 8.53.29 PM.png" "$GAL/2-tulsi-christmas-talent.png"
cp "$PARENT_DIR/Screenshot 2026-02-24 at 8.53.46 PM.png" "$GAL/3-teachers-day.png"
cp "$PARENT_DIR/Screenshot 2026-02-24 at 8.54.02 PM.png" "$GAL/4-awareness-visionless-kids.png"
cp "$PARENT_DIR/Screenshot 2026-02-24 at 8.54.17 PM.png" "$GAL/5-raj-blind-school.png"

echo "Done. Gallery images copied to public/gallery/"
ls -la "$GAL"
