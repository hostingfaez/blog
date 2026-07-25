
```bash
sudo apt update && sudo apt install samba -y
```

1. Buat folder dalam server exp : lagu folder

```bash
mkdir ~/lagu
```

2. Samba Config (for any folders and printers as well)

```bash
sudo vim /etc/samba/smb.conf
```

```
[lagu]
    path = /home/f8un99/lagu
    read only = no
    browsable = yes
    valid users = namauserserver
```

3. Buat password untuk samba (password user and password samba tak sama)

```bash
sudo smbpasswd -a f8un99
```

4. Restart service

```bash
sudo systemctl restart smbd
```

Access dari file explorer.
![[Pasted image 20260726003145.png]]
Authenticate and dapat masuk dalam server.

![[Pasted image 20260726003318.png]]
And authenticate balik untuk access folder lagu.

![[Pasted image 20260726003246.png]]

Drag and drop files from your computer to the server.