
1. SSH to server using tailscale. Kalau belum setup make sure dah setup dekat server [[Chapter 3.4 Tailscale]]. 

```bash
ssh f8un99@iptailscale
```

2. Install askpass dekat laptop

```bash
sudo apt install ssh-askpass-gnome -y
```

3. Buka VM manager dekat laptop

```bash
virt-manager
```

3. Masukkan username and ip server. Enable Connect to remote host over SSH.

![[Pasted image 20260816165315.png]]

4. Siap !

![[Pasted image 20260816170401.png]]