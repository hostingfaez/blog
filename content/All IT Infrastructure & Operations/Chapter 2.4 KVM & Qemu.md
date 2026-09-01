### Install 

```bash
sudo apt install qemu-system libvirt-daemon-system libvirt-clients bridge-utils virt-manager -y
```

1. Tambah access

```bash
sudo usermod -aG libvirt f8un
sudo usermod -aG kvm f8un
```

2. Aktifkan service (run automatic bila Debian on)

```bash
sudo systemctl enable --now libvirtd
```

3. Auto start network

```bash
sudo virsh net-start default
sudo virsh net-autostart default
```

4. List all running vms

```bash
virsh list --all
```

### Extras

1. Add storage 

```bash
qemu-img create -f qcow2 ~/vms/freebsd_data.qcow2 10G
```

2. Resize storage

```
qemu-img resize ~/vms/freebsd.qcow2 +30G
```

3. Autostart VM (specific)

```
virsh autostart namaserver
```

4. Kalau nak download ISO tapi dalam terminal 

```bash
sudo curl -L -o namaoutput.iso https://...
```