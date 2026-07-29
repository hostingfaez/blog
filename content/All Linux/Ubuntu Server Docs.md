
[[Chapter 1 Format Hard Disk]] ; (Optional) kalau ada extra HDD/SDD yang tak guna dekat rumah

---

[[Chapter 1 Installation & Configuration]]
- [[Chapter 1.1 Router Configuration]]
- [[Chapter 1.2 Display & Power Management]] ; (optional) **if install ubuntu server using laptop

---

Chapter 2 Installing Services

>Note (for ease of mind and easier access) :
>
>1. Download casaOS rather than bare docker installation sebab CasaOS ada GUI so senang nak navigate. **Kalau nak rasa challenging then teruskan.**
>2. The configurations may differ sebab aku download guna docker (not CasaOS).
>3. Untuk number dalam kurungan tu adalah port number bila nak access webUI (may differ). 

- [[Chapter 2.1 Samba]] ; File sharing protocol
- [[Chapter 2.2 Docker Compose]]
- [[Chapter 2.3 Navidrome]] ; Music hosting 
- [[Chapter 2.4 Calibre Web]] ; Book hosting
- Chapter 2.5 The Film Hosting Stack
	- [[Chapter 2.5.1 Radarr]] ; Manages your movie library. (7878)
	- [[Chapter 2.5.2 Sonarr]] ; Manages your TV library. (8989)
	- [[Chapter 2.5.3 Prowlarr]]; Manages torrent sites. (9696)
	- [[Chapter 2.5.4 qBitTorrent]] ; Download files using torrent links. (8080)
	- [[Chapter 2.5.5 Flare Solverr]] ; Bypass indexer that use Cloudflare DDOS Protection (8191)
	- [[Chapter 2.5.6 Jellyfin]] ; Stream and play the movies that have downloaded. (8096)
- Chapter 2.6 Tailscale ; VPN (to access server from remote network)
- Chapter 2.7 Cloudflared ; A tunneling daemon by Cloudflare that safely exposes your web servers into the internet.