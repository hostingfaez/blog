
Config Post Installation : https://www.youtube.com/watch?v=jx7QtdAyR04&t=6s


1. Authentication 

![[Screenshot From 2026-07-28 21-40-54.png]]

2. Settings > Edit Quality Profile 
- Tick upgrades allowed and ambil bluray 1080p

![[Screenshot From 2026-07-28 21-56-56.png]]

3. Settings > Download Client
- Choose qBitTorrent

![[Screenshot From 2026-07-28 22-06-16.png]]

![[Screenshot From 2026-07-28 22-14-58.png]]

4. Masukkan host (ip address server), username and password.

![[Screenshot From 2026-07-28 22-12-34.png]]

5. Settings > Media Management
- Pastikan both kotak paling atas kena tick
- Masukkan path root folders

![[Screenshot From 2026-07-28 21-56-21.png]]

If ada error : 
Unable to add root folder
Folder '/home/f8un99/' is not writable by user 'sonarr'

```bash
mkdir -p /home/f8un99/films
chmod 755 /home/f8un99
sudo chmod -R 775 /home/f8un99/films
sudo usermod -aG f8un99 sonarr
sudo systemctl restart sonarr
```

6. Try download films and films automaticaly akan masuk dalam queue qBitTorrent untuk download. 

![[Screenshot From 2026-07-28 21-45-58.png]]

![[Screenshot From 2026-07-28 21-46-19.png]]

![[Screenshot From 2026-07-28 22-17-40.png]]