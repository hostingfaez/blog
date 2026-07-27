Wiki : [https://sw.kovidgoyal.net/kitty/binary/](https://sw.kovidgoyal.net/kitty/binary/)

Install 
```bash
curl -L https://sw.kovidgoyal.net/kitty/installer.sh | sh /dev/stdin
```

### Installation



```bash
# Buat Folder Shortcut
mkdir -p ~/.local/share/applications

find ~ -name "kitty.desktop" 2>/dev/null

cp (folder yang kau find tadi copy semua) ~/.local/share/applications/

sed -i "s|Icon=kitty|Icon=$(readlink -f ~)/.local/kitty.app/share/icons/hicolor/256x256/apps/kitty.png|g" ~/.local/share/applications/kitty*.desktop

sed -i "s|Exec=kitty|Exec=$(readlink -f ~)/.local/kitty.app/bin/kitty|g" ~/.local/share/applications/kitty*.desktop

echo 'kitty.desktop' > ~/.config/xdg-terminals.list

# Type kitty dalam terminal / Windows Key and search Kitty
sudo ln -sf /home/f8un/.local/kitty.app/bin/kitty /usr/local/bin/kitty
```
