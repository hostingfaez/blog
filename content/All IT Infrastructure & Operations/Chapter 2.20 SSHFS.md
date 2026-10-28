1. Install

```bash
sudo apt update && sudo apt install sshfs
```

2. Mount folder remotely (make sure that you have setup VPN)

```bash
sshfs user@serv:SOURCE-DIR ~/DEST-DIR
```


![[Pasted image 20261028224231.png]]

The scenario is the same as you mount your usb stick to your computer but the usb stick is remote.

3. Unmount (optional)


```bash
sudo umount ~/remote_seb
```