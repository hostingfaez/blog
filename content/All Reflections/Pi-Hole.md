---
{}
---
```bash
#Kalau port DNS tak bagi untuk download 
sudo vim /etc/systemd/resolved.conf 
#tukar
DNSStubListener=no

sudo ln -sf /run/systemd/resolve/resolv.conf /etc/resolv.conf
sudo systemctl restart systemd-resolved
```

Assign Passw dekat sebelah key :

```bash
FTLCONF_webserver_api_password
```

![[image 25.png]]

DNS settings enable manual and masukkan ip server & disable ipv6 SLAAC RA config.

![[Screenshot_from_2026-02-18_14-06-18.png]]

> ***Note : Bila dah tukar DNS server ke hanya ip address server and server down semua device dalam LAN takkan dapat internet.***

DNS Settings → Tukar ke Expert and tukar permit all origin

![[image 26.png]]

![[image 27.png]]

Contoh aku block domain tiktok 

![[image 28.png]]

Then bila nak bukak terus blank 

![[Screenshot_from_2026-02-18_14-42-38.png]]
