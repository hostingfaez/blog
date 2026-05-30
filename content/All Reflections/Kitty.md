---
{}
---
### Installation

Boleh refer wiki : [https://sw.kovidgoyal.net/kitty/binary/](https://sw.kovidgoyal.net/kitty/binary/)

```bash
# Buat Folder Shortcut
mkdir -p ~/.local/share/applications
find ~ -name "kitty.desktop" 2>/dev/null
cp /home/f8un/.local/kitty.app/share/applications/kitty.desktop ~/.local/share/applications/
sed -i "s|Icon=kitty|Icon=/home/f8un/.local/kitty.app/share/icons/hicolor/256x256/apps/kitty.png|g" ~/.local/share/applications/kitty.desktop
sed -i "s|Exec=kitty|Exec=/home/f8un/.local/kitty.app/bin/kitty|g" ~/.local/share/applications/kitty.desktop

# Type kitty dalam terminal and terus bukak
sudo ln -sf /home/f8un/.local/kitty.app/bin/kitty /usr/local/bin/kitty
```

### Config

Github file : kitty.conf