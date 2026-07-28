
```bash
mkdir -p /home/user/namarepo
```

1. Buat repository 

```bash
cd /home/user
git init --bare namarepo.git
```

2. Buat post recieve hook

```bash
cd namarepo.git
cd hooks
vim post-recieve
```

```bash
#!/bin/sh

# Tentukan lokasi working tree dan direktori git dalam satu baris
git --work-tree=/home/user/namarepo --git-dir=/home/user/namarepo.git checkout -f

# Masuk ke direktori projek
cd /home/user/namarepo

# Install dependencies (jika guna Node.js)
npm install

# Restart aplikasi menggunakan PM2
pm2 reload namarepo
```

```bash
chmod +x namarepo.git/hooks/post-recieve
```

3. Set 

```bash
git remote add prod user@ipserver:namarepo.git

# or 
git remote add prod user@ipserver:/home/user/namarepo.git
```

4. After Changes

```bash
git add .
git commit -m 'message'
git push prod main
```