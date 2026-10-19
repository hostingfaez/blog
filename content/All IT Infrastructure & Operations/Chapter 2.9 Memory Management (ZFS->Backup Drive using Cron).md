
1. Make a script

```bash
vim  ~/script.sh
```

```bash
#!/bin/bash
# Skrip Backup dari ZFS Pool to another drive (sdc)

SRC="/SRC_MEDIA/"
DEST="/DEST_MEDIA/"

echo "Memulakan proses backup..."
rsync -avh --delete "$SRC" "$DEST"
echo "Proses backup selesai!"
```

> Note: Untuk delete kalau ada file yang delete dekat src dia akan delete jugak dekat destination so dia akan sync.

2. Give permission execute

```
chmod +x ~/script.sh
```

3. Start backup

```
sudo ~/script.sh
```

### Automate Backup

I want the server backup my files every sunday at 3 AM. We will use cron to make the automation.

1. Buka cron and masukkan code dekat bawah sekali.

```bash
sudo crontab -e
```


```
0 3 * * 0 /bin/bash /root/script.sh > /var/log/backup-backup.log 2>&1
```

- `0 3 * * 0` bermaksud ia akan dijalankan secara automatik pada **pukul 3:00 pagi setiap hari Ahad**.
- `> /var/log/backup-backup.log 2>&1` akan menyimpan rekod (log) hasil sandaran sekiranya anda ingin menyemaknya kemudian hari.
   
2. Check 

```
sudo crontab -l
```
