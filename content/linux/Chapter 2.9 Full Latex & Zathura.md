Kalau take notes guna latex it is actually **recommended** guna Zathura (pdf viewer) since normal pdf viewer dalam web browser tak support instant update bila kita save file latex and kita terpaksa tutup and bukak balik the PDF so agak renyah.

Install Full Latex
```bash
sudo apt install texlive-full zathura curl -y
```

> Pakej `texlive-full` mengandungi **semua** _font_ dan _package_ LaTeX di dunia, jadi saiznya sangat besar (melebihi 5GB)

Pasang vim Plug

```bash
curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```

```bash
vim ~/.vimrc
```

```bash
" --- BAHAGIAN VIM-PLUG ---
call plug#begin('~/.vim/plugged')

" Pasang plugin VimTex
Plug 'lervag/vimtex'

call plug#end()

" --- TETAPAN VIMTEX & ZATHURA ---
" Beritahu VimTex untuk gunakan Zathura
let g:vimtex_view_method = 'zathura'

" Gunakan latexmk untuk compile (sudah ada dalam texlive-full)
let g:vimtex_compiler_method = 'latexmk'
```

Pasang plugin

```bash
vim
```

```
:PlugInstall
```

Masuk dalam main matter tex files

```bash
vim appendices.tex
```

type \ll & zathura auto open