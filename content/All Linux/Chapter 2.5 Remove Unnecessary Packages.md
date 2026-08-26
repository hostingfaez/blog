
1. Tutup GUI

```bash
sudo systemctl set-default multi-user.target
```

2. Buang package desktop

```bash
sudo apt purge task-desktop task-gnome-desktop task-kde-desktop task-xfce-desktop
```

3. Buang x11 and walyland (engine graphic)

```bash
sudo apt purge xserver-xorg-core x11-common wayland-protocols
```

4. Bersihkan 

```bash
sudo apt autoremove --purge
sudo apt clean
```