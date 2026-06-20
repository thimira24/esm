#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock
git add -A
git commit -m "Add Privacy Policy & T&C seed script; fix Sanity CDN caching"
git push origin main
echo ""
echo "Done - pushed to GitHub."
read -p "Press Enter to close..."
