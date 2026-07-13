Install dependencies

```bash
sudo apt install libfuse2 -y
```

Download Balena Etcher 

```bash
chmod +x balenaEtcher
./balena-etcher --no-sandbox
```

Guna balena Etcher & pastikan usb tu ada bila connect dengan computer. Check dekat Disks boleh or dekat terminal. Kita punya external disk yang SDA tu

Linux

```bash
lsblk
```

```bash
sda           8:0    1  58.6G  0 disk 
└─sda1        8:1    1  58.6G  0 part /media/f8un/UBUNTU 24_0
nvme0n1     259:0    0 931.5G  0 disk 
├─nvme0n1p1 259:1    0     1G  0 part /boot/efi
└─nvme0n1p2 259:2    0 930.5G  0 part /
```

Windows

Pastikan amik hard drive/ USB stick yang betul bukannya drive computer kita and flash!

![[image 20.png]]
