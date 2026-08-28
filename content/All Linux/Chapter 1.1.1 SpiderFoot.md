
1. Start & run SpiderFoot.

Kalau nak bukak dari computer yang sama 

```bash
spiderfoot -l 127.0.0.1:5001
```

Kalau nak bukak dari computer lain

```bash
spiderfoot -l 0.0.0.0:5001
```

The command should run without errors. Open a browser and enter the IP address and port for the SpiderFoot GUI. You will see the SpiderFoot interface appear. If this is the first time that SpiderFoot has been opened in this VM, you will see the Scans screen. This screen displays a list of all the scans recently run. In this example it is empty.

![[Pasted image 20260828003516.png]]

Enter `spiderfoot –h` to view the command line options.

> **Note**: The **All** use case scan may use active scanning. Unless you have permission to scan the target, you should avoid this setting. To be completely safe, the Passive use case should avoid any problems with unauthorized scanning.

Nak tengok details. Scans > Browse

![[Pasted image 20260828004403.png]]

A lot of info yang kita boleh dapat dari scan tadi.

Sebagai contoh kita tengok Name Server

![[Pasted image 20260828004346.png]]


A few interesting modules
1. Ahmia
2. AccountFinder
3. Archive.org
4. Bing
5. Dehashed
6. Leak-Lookup
7. CommonCrawl
8. EmailCrawlr
9. DuckDuckGo

