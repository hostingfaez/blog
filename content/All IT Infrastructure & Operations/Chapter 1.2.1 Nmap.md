1. Scan open port

```bash
nmap -sS ipaddress
```

```bash
PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
139/tcp  open  netbios-ssn
445/tcp  open  microsoft-ds
8080/tcp open  http-proxy
8083/tcp open  us-srv
9090/tcp open  zeus-admin
```

### Other options:

- TCP Connect Scan (**-sT**)
- UDP Scan (**-sU**)
- TCP FIN Scan (**-sF**)
- Host Discovery Scan (**-sn**)

```bash
nmap -sn ipaddress/subnet
```

```bash
Starting Nmap 7.99 ( https://nmap.org ) at 2026-08-28 11:38 +0800
Nmap scan report for 192.168.0.1
Host is up (0.013s latency).
Nmap scan report for 192.168.0.100
Host is up (0.0023s latency).
Nmap scan report for 192.168.0.114
Host is up (0.25s latency).
Nmap scan report for 192.168.0.157
Host is up (0.00055s latency).
Nmap scan report for 192.168.0.197
Host is up (0.091s latency).
```

- Timing Options (**-T 0-5**)
- Syn Scan (-sS)

![[Pasted image 20260828122619.png]]

### Timing Options ( -T 0-5 )

The Nmap scanner provides six timing templates that can be specified with the **-T** option and the template number (0 through 5) or name. Nmap timing templates enable you to dictate how aggressive a scan will be, while leaving Nmap to pick the exact timing values. These are the timing options:

- **-T0 (Paranoid)** : Very slow, used for IDS evasion
- **-T1 (Sneaky)** : Quite slow, used for IDS evasion
- **-T2 (Polite)** : Slows down to consume less bandwidth, runs about 10 times slower than the default
- **-T3 (Normal)** : Default, a dynamic timing model based on target responsiveness
- **-T4 (Aggressive)** : Assumes a fast and reliable network and may overwhelm targets
- **-T5 (Insane)** : Very aggressive; will likely overwhelm targets or miss open ports

### Scan Top 100 Ports Fast

```bash
nmap -T4 --top-ports 100 192.168.0.100
```
### Scan for vulnerabilities

```bash
**nmap -sV --script vulners [--script-args mincvss=<arg_val>] <target>**
```

Contoh

```bash
nmap -sV --script vulners --script-args mincvss=4 10.6.6.26
```
