1. Run

```bash
enum4linux ipaddress
```

By default boleh login without username and password so outsiders boleh tengok dalam. Cara config boleh tengok dekat [[Chapter 3.2 Samba]].

![[Pasted image 20260828120602.png]]

```bash
└─$ smbclient -L \\\ipaddress            
Password for [WORKGROUP\f8un]:
Anonymous login successful

	Sharename       Type      Comment
	---------       ----      -------
	Music           Disk      Files
	cod             Disk      Files
	IPC$            IPC       IPC Service (Samba 4.22.10-Debian-4.22.10+dfsg-0+deb13u2)
Reconnecting with SMB1 for workgroup listing.
smbXcli_negprot_smb1_done: No compatible protocol selected by server.
Protocol negotiation to server 192.168.0.100 (for a protocol between LANMAN1 and NT1) failed: NT_STATUS_INVALID_NETWORK_RESPONSE
Unable to connect with SMB1 -- no workgroup available
```