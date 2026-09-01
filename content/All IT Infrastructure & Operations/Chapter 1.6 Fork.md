1. Fork Repo dalam github website (kanan atas)

![[Pasted image 20260716112832.png]]

2. Clone repo (kalau takde lagi folder dalam workstation)
3. `git pull origin main` (kalau ada lebih dari sorang yang conribute dalam project ni and ada recent changes yang berlaku untuk sync dengan code repo latest)

### Error

```bash
f8un@deb:~/codesa/jaja$ git remote add origin git@github.com:faezbun/mydotfiles.git
error: remote origin already exists.
```

1. set kita punya folder as username mana and repo mana yang kita akan push kan nanti

```bash
git remote set-url origin git@github.com:hostingfaez/mydotfiles.git
```

2. Then push macam biasa and then create pull request dalam github website

![[Pasted image 20260716022634.png]]

![[Pasted image 20260716022740.png]]

owner repo sahaja ada keputusan sama ada 
1. Merge pull request (accept code kita masuk dalam repo dia )
2. Close pull request (decline)

```bash
### Closed with unmerged commits
This pull request is closed.
```