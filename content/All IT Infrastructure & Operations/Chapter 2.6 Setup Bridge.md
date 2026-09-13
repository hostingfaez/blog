> Note : This is not **FOR THE WEAK** since you have to turn off your physical network interface so you cannot SSH to your server. If you do please make sure you are **NOT IN A HURRY** and **don't have plans for the entire day**. I am not exaggerating.

Youtube Link : https://youtu.be/2t_ugcQIJ-0?si=W2l44YQHTN4CX2OK

I follow this video with some modifications. The reason is because for my physical server I have installed Debian with CasaOS and other services before I setup the bridge. It means that my physical server needs an IP address to operate and for me of course to access those services. There will be 2 subheadings and both ways for you to follow:

1. Physical Server (Network Manager)
	CasaOS and Docker **very dependent** with network management yang dynamic which make it more secure and stable.
2. VM (traditional config file /etc/network/interfaces)
	Simpler to follow and easier to manage if there are any error.
### Physical Server

1. Check your interface name 

```bash
ip -br a
```

2. Comment out your network card (for me enp2s0) in ifupdown

```bash
sudo vim /etc/network/interfaces
```

```
# The primary network interface
#allow-hotplug enp2s0
#iface enp2s0 inet dhcp
# This is an autoconfigured IPv6 interface
#iface enp2s0 inet6 auto
```

3. Stop ifupdown control

```bash
sudo ifdown enp2s0
```

4. Enable network manager control

```bash
sudo nmcli device set enp2s0 managed yes
sudo systemctl restart NetworkManager
```

5. There are 2 options that you can use. This follows when you first setup your server either using DHCP or static IP. 

DHCP

```bash
sudo nmcli connection modify <BRIDGE_NAME> ipv4.method auto
sudo nmcli connection up <BRIDGE_NAME>
```

Static

```bash
sudo nmcli connection modify br0 ipv4.addresses <IP_ADDRESS>/24 ipv4.gateway <GATEWAY> ipv4.dns "<DNS>" ipv4.method manual
sudo nmcli connection up br0
```

6. State to up 

```bash
sudo ip link set dev <BRIDGE_NAME> up
```

6. Restart

```bash
sudo systemctl restart networking
```

6. Check 

```bash
ip -br a
```

### VM

1. Check your interface name 

```
ip -br a
```

2. Edit interface and set static IP. Its recommended for server to have static IP.

```bash
sudo vim /etc/network/interfaces
```

```bash
auto eth0
iface eth0 inet static
    address 192.168.0.150
    netmask 255.255.255.0
    gateway 192.168.0.1
    dns-nameservers 8.8.8.8 1.1.1.1
```

3. Restart

```bash
sudo systemctl restart networking
```

### Errors

1. Tak boleh install package sebab tak configure DNS (for traditional config file)

```bash
vim /etc/resolv.conf
```

```bash
nameserver 8.8.8.8
nameserver 1.1.1.1
```