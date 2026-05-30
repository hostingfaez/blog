---
{}
---

APT

```bash
sudo apt remove app-name
To remove config files too (clean uninstall): sudo apt purge app-name
Then clean up unused dependencies: sudo apt autoremove
```

Flatpak

```bash
flatpak list
flatpak uninstall app-name
```

.deb

```bash
dpkg -l | grep app-name
sudo apt remove app-name
```

./install.sh packages 

Apps installed via:

- `apt`, `snap`, `flatpak` → **tracked**
- `./install.sh` → **NOT tracked**

```bash
ls
/usr/bin/
/usr/local/bin/
/opt/
/usr/share/
/etc/

sudo rm /usr/bin/app
or sudo rm -r /usr/bin/app

& Remove Desktop Files
```

Desktop Files

```bash
ls ~/.local/share/applications
or ls /usr/share/applications

cat /usr/share/applications/cnsetuputil2.desktop
or cat ~/.local/share/applications/appname

sudo rm /usr/share/applications/cnsetuputil2l.desktop
```