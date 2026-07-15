

Error

```bash
f8un@deb:~/codesa/jaja$ git remote add origin git@github.com:faezbun/mydotfiles.git
error: remote origin already exists.
```

set kita punya folder as username mana and repo mana yang kita akan push kan nanti

```bash
git remote set-url origin git@github.com:hostingfaez/mydotfiles.git
```

Then push macam biasa and then create pull request dalam github website

![[Pasted image 20260716022634.png]]

![[Pasted image 20260716022740.png]]

owner repo sahaja ada keputusan sama ada 
1. Merge pull request (accept code kita masuk dalam repo dia )
2. Close pull request (decline)

```bash
### Closed with unmerged commits
This pull request is closed.
```