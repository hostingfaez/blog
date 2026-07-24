Kau ada hdd yang healthy and kau nak guna untuk server. First thing first kau kena format hard disk yang kau ada. Macam mana ?


![[Pasted image 20260724114310.png]]

Guna HDD Docking Station. Kau akan cucuk dekat computer (Windows 10+) and boleh tengok content dalam file explorer. If kalau ada data yang penting dalam tu then kau boleh masukkan dalam computer or external hard drive (its totally up to you).

Lets say kau dah takde benda yang penting dalam tu and boleh proceed dengan format hard disk. Tekan Windows Key
and search Disk Management.

![[Pasted image 20260724114854.png]]

Kau akan nampak berapa banyak disk yang ada (start with 0) and partition yang kau pernah buat.

> Tips (Best Practice) : Kalau nak minimize risk kena attack dengan hacker pastikan buat partition sebab hacker akan attack system files and bila ada data dalam partition lain 99% chance untuk recover data adalah tinggi.
> Contoh Disk 0 ada Sanity(X: Files Partition) and C: System Files. 

Boleh right click partition yang nak buang and extend volume. 

Ada several issues 

1. If last partition nak buang and dia kata nak jadikan Dynamic Disk **JANGAN TEKAN YES** sebab nanti akan ada issue server takleh baca hard disk masa nak setup server nanti.

![[Pasted image 20260724120104.png]]

2. Kalau tak boleh buang partition Healty (Recovery Partition) dan Healthy (EFI System Partition) since kita nak guna semua space dalam disk and partition tu takde guna kalau dalam server (especially Linux Server).
3. Takleh tukar ke file system NTFS (grey text)

![[Pasted image 20260724120228.png]]

Solution: Clean Disk dalam CMD & New Volume

Run Command Prompt (as an Administrator) and run setiap satu.

```
diskpart
list disk
```

Pastikan select disk yang betul sebab kita nak clean semua benda dalam disk  dalam CMD. Korang maybe disk 1.2....

```
select disk 2 
```

Clean

```
clean
```

Right click dekat drive yang korang baru clean tadi (Drive 1,2...) and bukannya dekat kotak partition unallocated. Tekan initialize disk and make sure GPT (modern format) and tekan OK. 


Right click partition box and select New Simple Volume and tekan next sampai habis.