1. By default dia akan scan port 80. Basic Scan

```
nikto -h scanme.nmap.org
```

2. To scan domains with HTTPS enabled, you must specify the **-ssl** flag to scan port 443.

```
nikto -h https://nmap.org -ssl
```

### Scan multiple web server

1. Buat list dalam txt file & masukkan semua IP address dalam tu. 

```
vim list.txt
```

2. Run

```
nikito -h list.txt
```

### Export result to a file 

```
nikto -h ipaddress/domain -o scan_results.html
```