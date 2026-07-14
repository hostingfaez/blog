Install 

```bash
sudo apt install qemu-system libvirt-daemon-system libvirt-clients bridge-utils virt-manager -y
```

Tambah access

```bash
sudo usermod -aG libvirt f8un
sudo usermod -aG kvm f8un
```

Aktifkan service (run automatic bila Debian on)

```bash
sudo systemctl enable --now libvirtd
```

List all running vms

```bash
virsh list --all
```

Add storage 

```bash
qemu-img create -f qcow2 ~/vms/freebsd_data.qcow2 10G
```

Resize storage 
```
qemu-img resize ~/vms/freebsd.qcow2 +30G
```

Autostart VM (specific)
```
virsh autostart namaserver
```