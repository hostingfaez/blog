So ada banyak file systems dekat sini.

![[Screenshot_xenl_2026-07-28_13 01 50.png]]

### Ext (Linux Standard)

- Ext4 journaling file system: Standard format and recommended for newer linux distros.

### Servers Grade 

- Btrfs journaling file system: Sistem fail generasi baharu. Ada snapshot function. Kalau kau tersalah buang fail penting atau sistem rosak selepas backup, kau boleh kembalikan keseluruhan partition ke sebelum ni punya.
- XFS journaling file system: Sangat berkuasa dan cekap untuk menguruskan fail-fail bersaiz gergasi (puluhan hingga ratusan Gigabyte) secara selari. Banyak digunakan oleh pelayan yang memproses video berat atau pangkalan data (database) yang besar.
- JFS journaling file system: Sistem fail ciptaan IBM. Kelebihannya ialah ia menggunakan sangat sedikit kuasa pemprosesan CPU. Legacy version.

### Universal Format

- FAT32 & FAT16 file system: Ini format lama peninggalan era DOS/Windows. Semua OS boleh membaca format ini. Kelemahannya sangat ketara: FAT32 mempunyai had saiz maksimum di mana satu fail tidak boleh melebihi 4GB. Dalam Linux, ia selalunya hanya digunakan untuk partition untuk EFI/Boot sahaja.

### Disk Utilities

- Swap area: Ruang memori maya (Virtual RAM) seperti yang kau tetapkan pada langkah sebelum ini.
- Physical volume for encryption: Sistem akan menyulitkan (encrypt) keseluruhan partisi ini. Setiap kali server dihidupkan, ia akan berhenti pada skrin hitam dan meminta kata laluan dimasukkan sebelum proses boot boleh bersambung. Sangat selamat jika pelayan fizikal kau dicuri.
- Physical volume for RAID: Ada 1 ore more SSD and nak gambungkan semua disk dalam satu logical space or copy data automatically
- Physical volume for LVM: Logical Volume Manager. Sistem ini membolehkan kau membesarkan, mengecilkan, atau memindahkan saiz partition pada masa hadapan secara dinamik (tanpa perlu memadam fail atau format semula) walaupun tengah turn on.
- Do not use the partition: Takan allocate apa apa file system dalam partition