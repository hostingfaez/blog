
1. SSH to server using tailscale. Kalau belum setup make sure dah setup dekat server [[Chapter 3.4 Tailscale]]. 

```bash
ssh usernameserver@iptailscale
```

2. Install askpass dekat laptop

```bash
sudo apt install ssh-askpass-gnome -y
```

3. Buka VM manager dekat laptop

```bash
virt-manager
```

3. Masukkan username and ip server. Enable Connect to remote host over SSH.

![[Pasted image 20260816165315.png]]

4. Siap !

![[Pasted image 20260816170401.png]]

> Note : Setiap kali nak buka VM kena ssh guna IP tailscale sebab nak kena authenticate baru VM manager QEMU/KVM boleh connect.

Kalau nak SSH dari terminal workstation terus ke VM dalam server (optional).

1. Cari IP Address VM

```bash
sudo virsh list -all
sudo virsh domifaddr <nama-vm>
```

2. SSH

```bash
ssh -J username_server@IP_TAILSCALE username_vm@ip_vm
```

Kalau tak dapat ssh 

```bash
sudo apt install openssh-server -y
```
### Errors

1. Network default is not active.

![[Pasted image 20260825215730.png]]


```bash
sudo virsh net-start default
sudo virsh net-autostart default
```

> Note : Pastikan SSH tailscale dulu baru try connect dalam VM manager kalau tak nanti fail2ban akan block ip.

2. Masukkan iso and storage files dalam home directory

![[Pasted image 20260825225156.png]]

Kalau nak guna folder yang kita dah masukkan 

```bash
sudo chmod 777 /home/f8un99
sudo chmod 777 /home/f8un99/vms
sudo chown libvirt-qemu:libvirt-qemu /home/f8un99/vms/debtest.qcow2
```

Kalau nak guna folder yang qemu dah assignkan cuma kena move

```bash
sudo mv /home/f8un99/vms/debtest.qcow2 /var/lib/libvirt/images/
```