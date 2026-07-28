The first config is to **make sure** that bila tutup lid computer dia takkan auto sleep and bila setiap kali dia turn on after a minute dia takkan display apa apa on the screen (if the lid was on).

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

TLP Power Management (battery)

Since laptop guna battery and to make it last longer so kita make sure dia tak charge sampai penuh and bukan 100% all the time untuk melambatkan battery kembung and safety hazard since it is likely to happen if guna untuk long term.

```bash
sudo apt install tlp
sudo vim /etc/tlp.conf
#uncomment 
START_CHARGE_THRESH_BAT0=25
STOP_CHARGE_THRESH_BAT0=80
sudo tlp start
```
