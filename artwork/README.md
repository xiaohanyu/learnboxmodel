# Logo

Need imagemagick and `brew cask install xquartz`.

```sh
xelatex logo.tex
convert -density 8000 -quality 8000 logo.pdf logo.png
convert -density 8000 -quality 8000 logo.pdf logo.jpg
pdf2svg logo.pdf logo.svg
```
