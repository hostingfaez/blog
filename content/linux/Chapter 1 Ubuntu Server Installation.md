
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

Kalau guna laptop

```bash
sudo vim /etc/systemd/logind.conf
```

```bash
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
