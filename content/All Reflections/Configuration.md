---
{}
---
### 1. Tak Boleh Update 

```bash
su -
nano /etc/apt/sources.list
# commentkan debian.....

# Tambah dekat bawah

deb http://deb.debian.org/debian/ trixie main contrib non-free non-free-firmware
deb-src http://deb.debian.org/debian/ trixie main contrib non-free non-free-firmware

deb http://deb.debian.org/debian-security/ trixie-security main contrib non-free non-free-firmware
deb-src http://deb.debian.org/debian-security/ trixie-security main contrib non-free non-free-firmware

deb http://deb.debian.org/debian/ trixie-updates main contrib non-free non-free-firmware
deb-src http://deb.debian.org/debian/ trixie-updates main contrib non-free non-free-firmware
```

```bash
# 1. Update senarai software dari internet
apt update

# 2. Install sudo
apt install sudo -y

# 3. Beri kuasa sudo kepada user anda (f8un)
usermod -aG sudo f8un
apt install build-essential libncurses-dev bison flex libssl-dev libelf-dev -y

# 4. Restart laptop untuk bagi kesan
reboot
```

### 2. Reduce Compile Time

```bash
cd Linux 
make clean
make mrproper

lsmod > /tmp/my_mods
make localmodconfig LSMOD=/tmp/my_mods
make nconfig # buang mana yang drag masa compile

# Compile Pembinaan kernel
time make -j4(n core)

# ni kalau -j2
Kernel: arch/x86/boot/bzImage is ready  (#1)
real	35m23.613s
user	71m49.516s
sys	4m23.867s
```

### 3. Masukkan kernel dalam GRUB bootloader

```bash
# Install modules
sudo make modules_install

# Pasang Kernel
sudo make install

# Update Grub
sudo update-grub
sudo reboot
```

Tekan Esc dalam VM nak masuk dalam bootloader  and amik (rc1)

![[Screenshot_from_2026-03-03_18-52-40.png]]
