---
{}
---
```bash
# Nak assign folder to git 
git init

# Dah habis 
git add . (all) / git add file.txt
git commit -m 'tukar apa'
	#first time (optional)
	buat repo dekat website github
	git remote add origin ww.github.com.....42
git push origin main
gut push origin namabranch (if ada)

# kalau nak reverse balik
git log ( untuk tengok semua commit and copy number commit)
git checkout numbercommit

# Nak buat branch baru
git checkout -b namabranch
By default :
├── master/main    ; coding yang betul punya (working code)
├── file yang tengah tukar   ; 
git branch (untuk tengok)
├── master/main    ; coding yang betul punya (working code)
├── namabranch baru   ; takkan kacau other peoples code and rosakkan working code
├── file yang tengah tukar   ; 

# nak start code if ada orang lain ada edit 
git origin pull main/namabranch

# Nak tukar repo 
git remote -v # Check repo mana skrg
git remote set-url origin https://github...
git push origin main
```

> ***Note : Dia akan dua cara nak link kan local repo dengan GitHub repo***

