
```bash
sudo apt update
sudo apt install qbittorrent-nox
```

Buat file service systemd

```
[Unit]
Description=qBittorrent Command Line Client
After=network.target

[Service]
Type=simple
User=f8un99
Group=f8un99
UMask=002
ExecStart=/usr/bin/qbittorrent-nox
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

Enable service

```bash
sudo systemctl daemon-reload
sudo systemctl start qbittorrent-nox
sudo systemctl enable qbittorrent-nox
```

Run

```bash
qbittorrent-nox
```

1. Temporary username dengan password ada dekat dalam CLI.

![[Screenshot From 2026-07-28 22-01-26.png]]

2. Change username dengan password. Settings (Gear Icon) > WebUi Tab.

![[Screenshot From 2026-07-28 22-08-39.png]]
