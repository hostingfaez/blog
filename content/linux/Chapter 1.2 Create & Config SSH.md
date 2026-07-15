
1. Generate SSH key

```bash
# Generate key
ssh-keygen -t ed25519 -C "email.utama@gmail.com" -f ~/.ssh/id_username1
ssh-keygen -t ed25519 -C "email.utama@gmail.com" -f ~/.ssh/id_username2
```

2. Masukkan key dalam Github

Pergi Website Github>Settings > SSH & GPG Keys > New SSH Key

```
cat ~/.ssh/id_username1.pub
```

Masukkan dalam github

```bash
vim ~/.ssh/config
```

1 Account 

```bash
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_username1
```

Kalau ada 2 account

``` bash
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
```

Wajib buat 

```bash
# Change permission
chmod 600 ~/.ssh/config

# Try connection
ssh -T git@github.com
```


> If guna HTTPS, guna HTTPS and if dah configure SSH untuk github dalam workstation **MAKE SURE YOU USE SSH** kalau tak dia akan error bila nak push code.


