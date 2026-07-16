
1. Sebelum add and commit (SSH)

Add (jika folder itu masih baru dan belum pernah disambungkan ke GitHub)

![[Pasted image 20260716121017.png]]

```bash
git remote add origin git@github.com:namauser/namarepo.git
```

Set (`remote origin already exists` keluar nak ganti URL lama ke URL baru)

```bash
git remote set-url origin git@github.com:namauser/namarepo.git
```

> Kalau ada 2 account (ikut config ssh) [[Chapter 1.2 Create & Config SSH]]

```
**Host github.com-username1**
    HostName github.com

git remote set-url origin git@github.com-namauser1:namauser1/namarepo.git
```

```bash
f8un@deb:~/codesa/mydotfiles$ git add .
f8un@deb:~/codesa/mydotfiles$ git commit -m 'any commit message'
Author identity unknown

*** Please tell me who you are.

Run

  git config --global user.email "you@example.com" # masukkan ni
  git config --global user.name "Your Name" # masukkan ni 
to set your account's default identity. 
```

2. Error

```bash
f8un@deb:~/codesa/jaja$ git push origin main
no such identity: /home/f8un/.ssh/id-hostingfaez: No such file or directory
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

Ada 2 kebarangkalian dia salah 
1. Check ssh confg kalau ada typo sebab kalau dah masukkan key ssh dalam Github website and dalam ssh config sepatutnya dapat. 
2. set url command salah sebab lain untuk kalau ada 1 atau 2 account
```bash
# 1 account
git remote set-url origin git@github.com:namauser/namarepo.git

# 2 account
git remote set-url origin git@github.com namauser1:namauser1/namarepo.git
```

Kalau successful dia akan mintak password

```bash
Enter passphrase for key '/home/f8un/.ssh/id_username2': 
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 2 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 324 bytes | 162.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To github.com-username2:username2/mydotfiles.git
   dcb7ea3..d8a46d6  main -> main
```

