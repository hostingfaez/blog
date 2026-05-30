---
{}
---
### Buat Token 

Github Website > Settings > Developer Settings

Personal Access Tokens  > Token (Classic) & Generate New Token 

Tick Kotak Repo (Paling Penting) & copy token

```bash
# Type balik
git push origin main

# Masukkan Username 
Passw: Token 

# Biar Git ingat Token 
git config --global credential.helper store
```