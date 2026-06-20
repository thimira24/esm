#!/bin/bash
cd "$(dirname "$0")"
node seed-legal.js
echo ""
read -p "Press Enter to close..."
