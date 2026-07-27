Kalau take notes guna latex it is actually **recommended** guna Zathura (pdf viewer) since normal pdf viewer dalam web browser tak support instant update bila kita save file latex and kita terpaksa tutup and bukak balik the PDF so agak renyah.

Install Full Latex
```bash
sudo apt install texlive-bibtex-extra biber texlive-full zathura curl -y
```

> Pakej `texlive-full` mengandungi **semua** _font_ dan _package_ LaTeX di dunia, jadi saiznya sangat besar (melebihi 5GB)


```
Masuk dalam main matter tex files

```bash
vim appendices.tex
```

type \ll & zathura auto open

Issue :Compile pdf tak dapat 

Buang cache 

```
latexmk -c
```