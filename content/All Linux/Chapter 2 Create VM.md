Boleh letak VM id as last 3 digit dalam IP address (optional). 

1. Install qemu quest agent 

```bash
apt-get install qemu-guest-agent
systemctl start qemu-guest-agent
systemctl enable qemu-guest-agent
```

if not auto started, reboot the guest.

Options > make sure Qemu Quest Agent is Enabled. Kalau tak boleh edit boleh turn off guest.

