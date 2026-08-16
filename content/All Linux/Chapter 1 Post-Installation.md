> ISO installation pastikan amik yang full and bukannya yang guna internet connection untuk **tidak pening kepala** pada kemudian hari

![[Screenshot_debian_2026-07-13_17 51 22.png]]

Software selection boleh try mana dekstop environment yang korang nak but for is GNOME Desktop Environment.

> Terpulang nak guna distro apa (Linux Mint,Ubuntu) for beginner friendly tapi kalau nak advance sikit boleh guna Debian (more stable) or Arch Linux.


1.  Install vim `apt install vim`

Error: The repository 'cdrom://[Debian GNU/Linux 13.6.0 Trixie - Official amd64 DVD Binary-1 with firmware 20260711-09:43] trixie Release' does not have a Release file.
```bash
sed -i '/cdrom/s/^/#/' /etc/apt/sources.list
```

Check if error ada kaitan dengan takde link ke repo untuk download.

```
vim /etc/apt/sources.list
```

```bash

deb http://deb.debian.org/debian/ trixie main non-free-firmware
deb-src http://deb.debian.org/debian/ trixie main non-free-firmware

deb http://security.debian.org/debian-security trixie-security main non-free-firmware
deb-src http://security.debian.org/debian-security trixie-security main non-free-firmware

deb http://deb.debian.org/debian/ trixie-updates main non-free-firmware
deb-src http://deb.debian.org/debian/ trixie-updates main non-free-firmware

```

4. update and upgrade `apt update && apt upgrade -y`
5. Install curl `apt install curl`
6. Maps caps lock key as Esc key

```bash
	gsettings set org.gnome.desktop.input-sources xkb-options "['caps:escape']"
```

 7. Jadikan vim default text editor

```bash
git config --global core.editor "vim"
```
### Errors

1. username is not in sudoers file [[Chapter Z3 User (sudo)]].
