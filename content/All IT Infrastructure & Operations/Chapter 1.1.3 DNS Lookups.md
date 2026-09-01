
1. DNS Recon

```bash
dnsrecon -d namawebsite.com
```

2. Dig

```bash
dig namawebsite.com
```

Cari mx records

```bash
dig namawebsite.com mx
```

3. Whois ; Identify domain technical and administrative contacts.

```bash
whois namawebsite.com
```

```
Domain Name: tesla.com
Registry Domain ID: 187902_DOMAIN_COM-VRSN
Registrar WHOIS Server: whois.markmonitor.com
Registrar URL: http://www.markmonitor.com
Updated Date: 2024-10-02T10:15:20+0000
Creation Date: 1992-11-04T05:00:00+0000
Registrar Registration Expiration Date: 2026-11-03T00:00:00+0000
Registrar: MarkMonitor, Inc.
Registrar IANA ID: 292
Registrar Abuse Contact: https://corp.markmonitor.com/domain/ui/abuse-report
Registrar Abuse Contact Phone: +1.2086851750
Domain Status: clientUpdateProhibited (https://www.icann.org/epp#clientUpdateProhibited)
Domain Status: clientTransferProhibited (https://www.icann.org/epp#clientTransferProhibited)
Domain Status: clientDeleteProhibited (https://www.icann.org/epp#clientDeleteProhibited)
Domain Status: serverUpdateProhibited (https://www.icann.org/epp#serverUpdateProhibited)
Domain Status: serverTransferProhibited (https://www.icann.org/epp#serverTransferProhibited)
Domain Status: serverDeleteProhibited (https://www.icann.org/epp#serverDeleteProhibited)
Registrant Name: Domain Administrator
Registrant Organization: DNStination Inc.
Registrant Street: 3450 Sacramento Street, Suite 405
Registrant City: San Francisco
Registrant State/Province: CA
Registrant Postal Code: 94118
Registrant Country: US
Registrant Phone: +1.4155319335
...
```

Cari email company

```bash
whois cisco.com | grep '@cisco.com'                             
Registrant Email: infosec@cisco.com
Tech Email: infosec@cisco.com
```

