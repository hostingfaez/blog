> Note : Aku sarankan untuk download tailscale luar dari CasaOS kalau tak nanti akan ada bug bila nak ssh server remotely.

1. Install tailscale

```bash
curl -fsSL https://tailscale.com/install.sh | sh
```

2. Turn on tailscale

```bash
sudo tailscale up
```

3. Auto update tailscale (optional)

```bash
sudo tailscale set --auto-update
```