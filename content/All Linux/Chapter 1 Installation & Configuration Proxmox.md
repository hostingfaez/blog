> Note: Proxmox tak support WLAN interface so pastikan guna ethernet cable kalau tak tak boleh nak access web browser untuk configuration.

Aku pilih **Install PROXMOX VE (Graphical)**. 

1. Pastikan pilih target hard disk yang betul untuk install Proxmox OS.
2. Setup Management Network Configuration
	- Pastikan management interface yang betul. 
	- Contoh hostname (FQDN) : pve.lan , pve.nama.local
	- IP Address server
	- Default Gateway IP
	- IP DNS Server guna IP address default gateway (kalau takde)

Bila dah siap boleh buka browser computer yang connect dalam satu network yang sama and search (proxmox guna port 8006). 

Configuration

1. Login via root.
2. Guna PVE Post Install Script and masukkan dalam Shell : https://community-scripts.org/scripts/post-pve-install 
	- Correct Proxmox VE Sources : Yes
	- Disable Enterprise Repo : Yes
	- Enable No Sub Repo : Yes
	- Ceph Package Repo : No (Optional)
	- Test Repo : No (Optional)
	- Disable Sub Nag : Yes 
	- Disable high Availability : Depends if you have more than 1 proxmox server than yes.
	- reboot : Yes
3. Updates > Refresh > Upgrade button (Periodically to make sure system up to date)