
Ada beberapa features

1. Cari hidden subdomain
	
	Modules:

```
recon/domains-hosts/hackertarget 
atau 
recon/domains-hosts/brute_hosts 
```

Contoh tengok domain host untuk https://uitm.edu.my

![[Pasted image 20260828011552.png]]

2. Kumpul E-Mail

	Modules:
	
```
recon/domains-contacts/whois_pocs 
atau 
recon/domains-contacts/pgp_search
```

3. Cari Data Breach

> Note : Nak guna kena ada API key.


Modules:
	
```
recon/contacts-credentials/hibp_breach
install recon/contacts-credentials/hibp_paste
```

```bash
show options
options set SOURCE contoh@email.com
run
```

4. Cari username

Modules:
	
```
recon/profiles-profiles/profiler
```

### Recon Web

1. Access

Same host 

```bash
recon-web 
```

Different Host

```bash
recon-web --host 192.168.122.128
```

![[Pasted image 20260828013742.png]]
### Exp: Feature cari hidden subdomain.

1. Buka 

```bash
recon-ng
```


2. Install modul dari marketplace (sebab secara default modul kosong)

```bash
marketplace install hackertarget
```

3. Load modul tersebut

```bash
modules load recon/domains-hosts/hackertarget
```

4. Masukkan domain sasaran

```bash
options set SOURCE targetdomain.com
```

5. Run

```bash
run
```

6. Tengok result

```bash
show hosts
```

![[Screenshot From 2026-08-28 00-57-05 1.png]]

7. Back

```bash
back
```

8. Show options

```
show options
```

9. Search marketplace 

```bash
marketplace search
```