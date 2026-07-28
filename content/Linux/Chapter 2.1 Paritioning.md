Ada banyak cara untuk partitioning disk. Kalau rasa nak senang setup pilih first option (Guided-use entire disk).

![[Screenshot_xenl_2026-07-28_12 49 50.png]]

Kalau nak rasa better security, boleh buat partitioning. 

>Note : Aku allocate 50 GB sebab aku buat dalam VM and korang maybe ada 512 GB , 1 TB or others so korang patut sesuaikan ikut hard disk storage korang. Untuk 1TB partitioning guide boleh tengok [[Chapter 2.1.1 1TB Partitioning]].

Aku divide by 3 partitions ikut storage yang aku dah allocate (optional nak buat berapa tapi aku nak seperate antara system OS and Personal Files).
1. Swap (virtual memory) partition : System akan guna Swap dalam hard disk bila RAM dah penuh.
2. Root (/) partition : System files, installed software and global system configurations.
3. Home (/home) partition : Personal files, projects, documents & user specific config.

Ni actually post-partition process tapi aku tunjuk bagi nak senang faham.

![[Screenshot_xenl_2026-07-28_13 06 19.png]]

Swap Partition
- Beginning
- Primary
- file system : swap area
- Bootable flag : off

Root Partition
- Beginning
- Primary
- (Mandatory) bootable flag on untuk bagitau BIOS mana nak start OS.

![[Screenshot_xenl_2026-07-28_13 04 43.png]]

Home Partition
- Beginning
- Primary

![[Screenshot_xenl_2026-07-28_13 03 28.png]]