---
{}
---
### Installation

Kalau korang nak migrate from windows to whatever OS other than windows sekalipun make sure to backup your data boleh tengok dekat sini → [[Different File System Before Changing Into Linux]] 

Sebelum ni aku memang dah format dan install Ubuntu dekat komputer Lenovo aku, tapi lepas install tu aku tak pernah guna pun sebab kebanyakan masa aku buat kerja dekat Windows. Disebabkan aku tak pasti apa yang pernah aku install sebelum ni macam Snap ( File manager ) aku ambil keputusan untuk format balik.

![[feb625e1-8e19-41d2-9a71-9453ec9b30c6.png]]

So ni part manual partitioning ( optional ) masa nak install Ubuntu untuk gain more control dekat dalam disk. So aku explain sikit :

Dia akan listkan semua drives yang dia detect tak kisahla external or internal. So sebab tu kena pastikan kita tau mana satu yang kita nak install kalau tak memang kena format balik. Kenapa? Bayangkan kau nak install system dekat internal tapi kau install dekat external drive. Setiap kali kau nak on computer kau kena cucuk drive via USB so macam tak efficient la.

1. sda ( 15.51 GB ) ni sebenarnya aku punya external USB bootloader untuk install Ubuntu. Sebelum nak dia load tu kena setting dekat Bios yang USB ni first option baru dia akan load.
    - sda1 content dalam USB bootloader
2. nvmeOn 1 ( 128.04 GB ) ni internal drive. So bila dalam Linux ada banyak file system macam FAT32, Ext4 etc so kita kena tau mana file system yang efficient untuk kita. So seperti yang korang nampak aku buat 2 partition without boot file. 
    - nvmeOn 1 p1 ( /boot / efi ) Dia akan tanya drive mana nak guna untuk bootloader installation. Basically setiap kali kita nak buka computer dia akan cari bootloader untuk on OS. Size dia tak banyak 1.13 GB and kenapa dia masih guna FAT32 file system? UEFI systems are able to boot only from FAT12/16/32.
    - nvmeOn 1 p2 ( / ) Akan ada satu partition yang kena mount dengan root directory or ( / ). Kenapa ? It acts as the foundation of the entire filesystem. This is essential for the operating system to access all other files and directories, which are structured beneath this root.
    - nvmeOn 1 p3 ni adalah space yang lebihan.

    ### Post Installation
Post installation wajib buat.
```shell
sudo apt update && sudo apt upgrade
```
![[e58d5ad4-3cc0-458a-86ea-91c351bb97e7.png]]
Kenapa?
    - **Security:** Get the latest security patches.
    - **Stability:** Fix bugs and improve performance.
    - **New Features:** Access newer versions of installed software.
![[9390316a-6e30-4d33-b61f-ffe611061e8e.png]]
And dia akan install semua.
Disebabkan aku rasa annoyed gila dengan taskbar sebab tak lawa so aku pergi Ubuntu Desktop dekat Settings.
![[Untitled.png]]
Barulah nampak “clean”.

Kalau dah biasa guna windows directory user kita boleh write permission contoh macam C:\ file tapi untuk linux by default dia tak bagi dor security reasons so kita kena buat command dalam terminal.
```shell
sudo chown -R f8un:f8un /home/f8un
```
Install .deb package 
```bash
sudo apt-get install ./filename.deb
```