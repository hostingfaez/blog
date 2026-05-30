---
{}
---
Edit dalam text editor (vim)  sambil live sync to browser untuk tengok real time changes dalam website.

install 
```
npm install -g browser-sync
# Run dalam dir website
browser-sync start --server --files "*.html, assets/css/*.css, assets/js/*.js"
```

Kalau ada html dalam sub directory html and file lain dalam directory lain
```
# Dalam dir project 
php -S localhost:8000
browser-sync start --proxy "localhost:8000" --startPath "html/index.html" --files "**/*"
```
