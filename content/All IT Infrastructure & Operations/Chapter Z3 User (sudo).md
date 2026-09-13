1. Check user dalam group

```bash
groups namauser
```

This would be the output (yang penting ada nama user tu selepas : )

```bash
f8un99@rendang:~$ groups f8un99
f8un99 : f8un99 adm cdrom sudo dip plugdev users lxd docker
```

Kalau ada tak perlu buat boleh teruskan dengan lock root account. Kalau takde kena buat.

1. Masuk root `su -`
2. Masukkan user dalam group sudo

```bash
su -
apt update && apt install -y sudo
/usr/sbin/usermod- aG sudo username
```

Lock root account (for security reasons)

1. Lock root login

```bash
sudo passwd -l root
```

2. Block SSH for root (optional for better security)

```bash
sudo vim /etc/ssh/sshd_config
```

3. Cari and Tukar (make sure to uncomment) 

```
PermitRootLogin no
```

4. Restart SSH

```bash
sudo systemctl restart ssh
```

So bila try ssh ke root masukkan password takkan dapat sebab kita dah block root login.

```bash
f8un99@rendang:~$ su -
Password: 
su: Authentication failure
```

