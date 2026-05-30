---
{}
---
Kalau korang nak migrate from windows to whatever OS other than windows sekalipun make sure to backup your data sebab kalau dah install OS baru dia akan wipe semua ya. 

```shell
sudo testdisk
```

Ini untuk data recovery and partition repair tool.

So For linux dia guna ext4 and windows guna NTFS which is different file system. Contoh kalau korang mount external hard drive yang sebelum ni selalu cucuk dekat computer windows dekat computer linux dia takkan dapat baca. Dia akan kata hard disk tu dah corrupt ( which isnt ).

![[Screenshot_from_2026-01-27_01-03-17.png]]

Kalau korang nampak aku punya external hard drive still ada content cuma dalam different file system dia tak boleh nak baca.What you have to do is make sure format external hard drive ke exfat which is compatible for Windows and Linux. 

Kalau dah ada file dalam external hard drive then the best option is to compressed kan file yang ada and masukkan dalam computer windows and format to ext4. Baru masukkan balik file dalam hard drive macam biasa, Bila korang dah buat benda ni bila korang mount to linux and tetibe ke windows dia still boleh baca for both OS.
