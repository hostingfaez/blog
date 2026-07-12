---
{}
---

## Setup Git (Folder)

Buat repository dalam github **Without README file** untuk ease kan process. Boleh tambah readme lepas push the first commit code nanti.

```bash
# Nak assign folder to git 
git init

# Dah habis coding 

git add . # all files 
git commit -m 'tukar apa'
	#first time (optional)
	buat repo dekat website github
	git remote add origin www.github.com..... # HTTPS / SSH
git push origin main
git push origin namabranch (if ada LAIN)

```

### Configure SSH (Optional but Highly Recommended)

1. Generate SSH key

```bash
# Generate key
ssh-keygen -t ed25519 -C "email.utama@gmail.com" -f ~/.ssh/id_username1
ssh-keygen -t ed25519 -C "email.utama@gmail.com" -f ~/.ssh/id_username2
```

2. Masukkan key dalam Github
Pergi Settings > SSH & GPG Keys > New SSH Key

``` bash
cat ~/.ssh/config

# Akaun Utama (username1)
Host github.com-username1
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_username1

# Akaun Kedua (username2)
Host github.com-username2
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_username2
    
# Both identity file kena link dekat nama file dalam workstation
    
# Change permission
chmod 600 ~/.ssh/config

# Try connection
ssh -T git@github.com
```

> If guna HTTPS, guna HTTPS and if dah configure SSH untuk github dalam workstation **MAKE SURE YOU USE SSH** kalau tak dia akan error bila nak push code.
### Error

```bash 
git remote set-url origin git@github.com:namauser/namarepo.git
```
## Rollback

```bash
# kalau nak reverse balik
git log ( untuk tengok semua commit and copy number commit)
git checkout numbercommit
```

### Others

```bash
# nak start code if ada orang lain ada edit 
git origin pull main/namabranch

# Nak tukar repo 
git remote -v # Check repo mana skrg
git remote set-url origin https://github...
git push origin main
```

