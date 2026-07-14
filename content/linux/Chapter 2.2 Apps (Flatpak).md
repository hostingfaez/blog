
1. Install : `sudo apt install flatpak`
2. Tambah repo flathub 

```bash
flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
```

3. Install
```shell
flatpak install flathub org.telegram.desktop -y
flatpak install flathub com.jgraph.drawio.desktop -y
flatpak install flathub app.zen_browser.zen -y

```

4. Restart : `sudo reboot`
