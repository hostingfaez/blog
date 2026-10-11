Bridge specifically Open Switch Bridge (OVS) rampas NIC interface (enp2s0) so semua network akan route je bridge tu. Disebabkan aku dah configure network sebelum tu utk access service like Music, Movies, VPN etc menyebabkan aku takleh nak access service tu balik. 

Ada banyak condition sebenarnya untuk NIC hilang ip / cause conflict and ni salah satunya.
1. Multiple bridges bind to the same NIC 
2. If you have virtual vms and just follow the command instead of understanding what the command does

3. Lepaskan port fizikal from OVS

```bash
sudo ovs-vsctl del-port ovs-br0 enp2s0
```

2. Set balik ip address untuk physical server 

DHCP

```bash
sudo vim /etc/network/interfaces

# The primary network interface
allow-hotplug enp2s0
iface enp2s0 inet dhcp
iface enp2s0 inet6 auto
```

Static

```
# The primary network interface
allow-hotplug enp2s0
iface enp2s0 inet static
    address 192.168.0.100
    netmask 255.255.255.0
    gateway 192.168.0.1
    dns-nameservers 8.8.8.8 1.1.1.1

iface enp2s0 inet6 auto
```

3. Refresh 

DHCP

```bash
sudo ip link set enp2s0 up
sudo dhclient enp2s0
```

Static

```bash
sudo ip addr flush dev enp2s0
sudo systemctl restart networking
```

