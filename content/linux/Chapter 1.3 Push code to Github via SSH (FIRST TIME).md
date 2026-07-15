
Sebelum add and commit 

```bash
git remote set-url origin git@github.com:namauser/namarepo.git
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

Error

```bash
f8un@deb:~/codesa/jaja$ git push origin main
no such identity: /home/f8un/.ssh/id-hostingfaez: No such file or directory
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

Check ssh confg kalau ada typo sebab kalau dah masukkan key ssh dalam Github website and dalam ssh config sepatutnya dapat. 
Macam code bawah dia akan mintak password

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

