---
{}
---
### Installation

Guna balena Etcher & pastikan usb tu ada bila connect dengan computer. Check dekat Disks boleh or dekat terminal. Kita punya external disk yang SDA tu

```bash
lsblk
sda           8:0    1  58.6G  0 disk 
└─sda1        8:1    1  58.6G  0 part /media/f8un/UBUNTU 24_0
nvme0n1     259:0    0 931.5G  0 disk 
├─nvme0n1p1 259:1    0     1G  0 part /boot/efi
└─nvme0n1p2 259:2    0 930.5G  0 part /
```

Pergi dekat DIR Balena Etcher ( dekat Home DIR )

```bash
chmod +x balenaEtcher
./balena-etcher --no-sandbox
```

Pastikan amik drive yang betul bukannya drive computer kita and flash!

![[image 20.png]]

Static IP

1. Edit WIFI
2. Edit IPV4 

```bash
Subnet : 192.168.0.0/24
Address :192.168.0.100
Gateway : 192.168.0.1
Name Servers:8.8.8.8, 1.1.1.1
```

Then SSH

![[image 21.png]]

```bash
sudo vim /etc/systemd/logind.conf
#tukar 
HandleLidSwitch=ignore
HandleLidSwitchExternalPower=ignore
HandleLidSwitchDocked=ignore
LidSwitchIgnoreInhibited=no
sudo systemctl restart systemd-logind

sudo vim /etc/default/grub
GRUB_CMDLINE_LINUX_DEFAULT="maybe-ubiquity consoleblank=60"
sudo update-grub

sudo reboot
```

### Power Management (TLP)

```bash
sudo apt install tlp
sudo vim /etc/tlp.conf
#uncomment 
START_CHARGE_THRESH_BAT0=75
STOP_CHARGE_THRESH_BAT0=80
sudo tlp start
```
