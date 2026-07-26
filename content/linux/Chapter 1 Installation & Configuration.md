Link ISO : https://ubuntu.com/download/server & kalau nak masukkan dalam USB boleh tengok [[Change Another OS]]

> Note: I install Ubuntu Server in virtual machine and the setup may differ. 

Check Search for third party drivers (just in case) especially if the server is connecting to the network wirelessly instead of ethernet.

![[Screenshot_server_2026-07-25_23 32 01.png]]

![[Screenshot_server_2026-07-25_23 32 27.png]]

Reason kenapa aku guna DHCP (and you are not if setup real server) sebab aku connect dengan internet via mobile hotspot so ip akan sentiasa bertukar (dynamic IP). [[Chapter 1.1 Router Configuration]]

Kalau korang setup real server then you should edit the ipv4 address and assign it to make it static ip. 

Kenapa kena statickan? Sebab bila korang nak access server the ip will be the same. Sebagai contoh nak bukak dalam web browser:

```
https://192.168.1.2
```

If kalau dynamic IP nanti nak kena SSH server sebab nak tau ip address and baru boleh access. Kalau dalam virtual machine dia memang dah statickan.

![[Pasted image 20260726000452.png]]

Untuk storage configuration terpulang kepada korang nak allocate macam mana since aku memang guna 100% memory aku untuk ubuntu server.

![[Screenshot_server_2026-07-25_23 35 37.png]]

SSH 

```
ssh nama@ipserver
```

![[Pasted image 20260726001153.png]]

Update and upgrade packages

```bash
sudo apt update && sudo apt upgrade -y
```

Errors

1. WARNING: terminal is not fully functional

```bash
export TERM=xterm-256color
```

2. Error: Failed to fetch http://my.archive.ubuntu.com/ubuntu/pool/main/l/linux-firmware-amd-misc/linux-firmware-amd-misc_20260319.git217ca6e4-0ubuntu1.1_all.deb  403  Forbidden [IP: x.x.x.x]
	Error: Unable to fetch some archives, maybe run apt update or try with --fix-missing?
	
```bash
sudo sed -i 's/my.archive.ubuntu.com/archive.ubuntu.com/g' /etc/apt/sources.list 2>/dev/null
sudo sed -i 's/my.archive.ubuntu.com/archive.ubuntu.com/g' /etc/apt/sources.list.d/ubuntu.sources 2>/dev/null
```