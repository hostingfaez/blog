Kalau take notes guna latex it is actually **recommended** guna Zathura (pdf viewer) since normal pdf viewer dalam web browser tak support instant update bila kita save file latex and kita terpaksa tutup and bukak balik the PDF so agak renyah.

1. Install Full Latex

```bash
sudo apt install texlive-bibtex-extra biber texlive-full zathura curl -y
```

> Pakej `texlive-full` mengandungi **semua** _font_ dan _package_ LaTeX di dunia, jadi saiznya sangat besar (melebihi 5GB)

2. Masuk dalam main matter tex files

```bash
vim appendices.tex
```

3. type \ll & zathura auto open

### Errors

1. Compile pdf tak dapat (buang cache) 

```
latexmk -c
```