
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
    
[buku]
    path = /home/f8un99/buku
    read only = no
    browsable = yes
    valid users = f8un99
```

3. change ownership untuk folder (if not permission denied nak buat changes in the folder)

```bash
sudo chown -R f8un99:f8un99 /home/f8un99/lagu
sudo chown -R f8un99:f8un99 /home/f8un99/buku
```

4. Buat password untuk samba (password user and password samba tak sama)

```bash
sudo smbpasswd -a f8un99
```

4. Restart service

```bash
sudo systemctl restart smbd
```

Access dari file explorer.
![[Pasted image 20260726003145.png]]

```
smb://ipserver
```

Authenticate and dapat masuk dalam server.

![[Pasted image 20260726111651.png]]

And authenticate balik untuk access folder lagu.

![[Pasted image 20260726003246.png]]

Drag and drop files from your computer to the server.


![[Pasted image 20260726091701.png]]

### Tutup access without username and password 

1. Config file

```bash
sudo vim /etc/samba/smb.conf
```

```bash
[global]
    map to guest = Never
    null passwords = no
    guest ok = no
```

```bash
sudo vim /etc/samba/smb.casa.conf
```

Tambah untuk setiap folder yang ada eg. Music Coding

```bash
guest ok = no
public = no
```

2. Restart Samba Service

```bash
sudo systemctl restart smbd
```