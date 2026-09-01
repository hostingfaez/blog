
1. Install 

```bash
sudo apt update
sudo apt install fail2ban -y
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
```

2. Check IP yang kena ban

```bash
sudo fail2ban-client status sshd
```

3. Unblock IP (optional)

```bash
sudo fail2ban-client set sshd unbanip <IP_ADDRESS>
```



