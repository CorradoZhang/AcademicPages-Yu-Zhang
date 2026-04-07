#!/bin/zsh
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

TEX_FILE="CVTex.tex"
PDF_FILE="CVTex.pdf"

pdflatex -interaction=nonstopmode -halt-on-error "$TEX_FILE" >/tmp/cvtex-build.log
pdflatex -interaction=nonstopmode -halt-on-error "$TEX_FILE" >/tmp/cvtex-build.log

echo "Built $PDF_FILE"
echo "$SCRIPT_DIR/$PDF_FILE"
