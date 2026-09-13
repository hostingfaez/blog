
1. Install

```bash
sudo apt install rsync
```

2. Make a directory that you want to store your files at.

```bash
mkdir destinationdir
```

3. Run **from your computer**.

```
rsync -avzh --progress /DATA/sourcedir f8un@192.168.0.157:/home/destdir
```