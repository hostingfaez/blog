Link : https://www.metasploit.com/

1. Run

```
/opt/metasploit-framework/bin/msfconsole
or
msfconsole
```

2. Pilih module memana. 

### Exp : Check Samba boleh diakeses from guest / anonymous.

```
use auxiliary/scanner/smb/smb_enumshares
```

3. Set target IP

```
set RHOSTS ipaddr
```

4. Exploit

```
exploit
```

```bash
[-] 192.168.0.100:139 - Login Failed: Unable to negotiate SMB1 with the remote host: Expecting SMB1 protocol with command=114, got SMB1 protocol with command=114, Status: (0x00000000) STATUS_SUCCESS: The operation completed successfully.
[!] 192.168.0.100:445 - peer_native_os is only available with SMB1 (current version: SMB3)
[!] 192.168.0.100:445 - peer_native_lm is only available with SMB1 (current version: SMB3)
[+] 192.168.0.100:445 - **Music** - (DISK) CasaOS share Music
[+] 192.168.0.100:445 - **cod** - (DISK) CasaOS share cod
[+] 192.168.0.100:445 - IPC$ - (IPC|SPECIAL) IPC Service (Samba 4.22.10-Debian-4.22.10+dfsg-0+deb13u2)
[*] 192.168.0.100: - Scanned 1 of 1 hosts (100% complete)
[*] Auxiliary module execution completed
```

5. Try masuk secara anonymous ke dalam Music and Cod.

```bash
smbclient //ipaddr/foldersamba -N
```

```
Anonymous login successful
tree connect failed: NT_STATUS_ACCESS_DENIED
```

Disebabkan kita dah configure tutup access without username and password dekat [[Chapter 3.2 Samba]] sebab tu dia tak dapat.

### Exp : Check Directory Web 

```
use auxiliary/scanner/http/dir_scanner
set RHOSTS 192.168.0.100
set RPORT 80
exploit
```

### Exp : Kerberos and LDAP-Based Attacks

An attacker can manipulate Kerberos tickets based on available hashes by compromising a vulnerable system and obtaining the local user credentials and password hashes. If the system is connected to a domain, the attacker can identify a Kerberos TGT (KRBTGT) password hash to get the golden ticket.

```
use module powershell/credentials/mimikatz/golden_ticket
```

5. Exit msfconsole

```
exit
```
