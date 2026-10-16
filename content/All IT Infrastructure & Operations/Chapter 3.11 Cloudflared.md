Cloudflare Tunnel requires the installation of a lightweight server-side daemon, `cloudflared`, to connect your infrastructure to Cloudflare. If you want to setup your tunnel, you can go to cloudflare dashboard and go to Tunnel navbar to setup your tunnel.


Update cloudflared service

1. Update if installed via dpkg

```bash
curl --location --output cloudflared.deb "https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-$(dpkg --print-architecture).deb" && sudo dpkg -i cloudflared.deb
```

2. Restart service 

```bash
sudo systemctl restart cloudflared.service
```