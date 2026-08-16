
Cara nak tau drive yang mana connected to sd yang keberapa a to z. Ada 2 cara

1. Common 

```bash
lsblk
```

```bash
root@seb:~# lsblk
NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
sda      8:0    0 931.5G  0 disk 
├─sda1   8:1    0 931.5G  0 part 
└─sda9   8:9    0     8M  0 part 
sdb      8:16   0 447.1G  0 disk 
├─sdb1   8:17   0   1.9G  0 part /boot
├─sdb2   8:18   0  93.1G  0 part /
├─sdb3   8:19   0   3.7G  0 part [SWAP]
└─sdb4   8:20   0 348.4G  0 part /home
sdc      8:32   0 931.5G  0 disk 
├─sdc1   8:33   0 931.5G  0 part 
└─sdc9   8:41   0     8M  0 part 
sdd      8:48   0   1.8T  0 disk /mnt/Syurga_Media
```

2. Specific (Semua Details)

```bash
sudo fdisk -l
```

```bash
Disk /dev/sdc: 931.51 GiB, 1000204886016 bytes, 1953525168 sectors
Disk model: ST1000DM003-1ER1
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 4096 bytes
I/O size (minimum/optimal): 4096 bytes / 4096 bytes
Disklabel type: gpt
Disk identifier: 8621EC40-F1D9-8F4E-AEA7-66AB00E20C35

Device          Start        End    Sectors   Size Type
/dev/sdc1        2048 1953507327 1953505280 931.5G Solaris /usr & Apple ZFS
/dev/sdc9  1953507328 1953523711      16384     8M Solaris reserved 1


Disk /dev/sdb: 447.13 GiB, 480103981056 bytes, 937703088 sectors
Disk model: KINGSTON SA400S3
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0x74ce27be

Device     Boot     Start       End   Sectors   Size Id Type
/dev/sdb1  *         2048   3905535   3903488   1.9G 83 Linux
/dev/sdb2         3905536 199217151 195311616  93.1G 83 Linux
/dev/sdb3       199217152 207030271   7813120   3.7G 82 Linux swap / Solaris
/dev/sdb4       207030272 937701375 730671104 348.4G 83 Linux


Disk /dev/sda: 931.51 GiB, 1000204886016 bytes, 1953525168 sectors
Disk model: WDC WD10EZEX-00M
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 4096 bytes
I/O size (minimum/optimal): 4096 bytes / 4096 bytes
Disklabel type: gpt
Disk identifier: E0B21560-EDBF-BF4A-87E4-49CBBCB7B251

Device          Start        End    Sectors   Size Type
/dev/sda1        2048 1953507327 1953505280 931.5G Solaris /usr & Apple ZFS
/dev/sda9  1953507328 1953523711      16384     8M Solaris reserved 1


Disk /dev/sdd: 1.82 TiB, 2000398934016 bytes, 3907029168 sectors
Disk model: ST2000DM001-1ER1
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 4096 bytes
I/O size (minimum/optimal): 4096 bytes / 4096 bytes
```

Bila dah identified drive yang mana. Sebagai contoh kita nak buat zfs mirror untuk dua drive sda dengan sdc. 

2. Install ZFS package

```bash
sudo apt install zfsutils-linux zfs-dkms -y
```

3. Wipe Drive (kalau ada content dalam drive).

```bash
sudo wipefs -a /dev/sda /dev/sdc 
```

4. Format terpulang nak guna flesystem apa (ext4). 

```bash
mkfs.ext4 /dev/sdc
mkfs.ext4 /dev/sda
```

5. Then kita create zfs pool

```bash
zpool create -f namapool mirror /dev/sda /dev/sdc
```

6. Nak verify status / list

```bash
sudo zpool status
sudo zpool list
```

Output yang sepatutnya keluar (kalau mirror jadi).

```bash
pool: namapool
 state: ONLINE
config:

        NAME        STATE     READ WRITE CKSUM
        kunfayakun  ONLINE       0     0     0
          mirror-0  ONLINE       0     0     0
            sda     ONLINE       0     0     0
            sdc     ONLINE       0     0     0
```