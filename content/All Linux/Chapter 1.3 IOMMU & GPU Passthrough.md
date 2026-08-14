
Shell

```bash
vim /etc/default/grub
```

```bash
GRUB _CMDLINE_LINUX_DEFAULT="quiet intel_iommu=on" / amd (ikut GPU)
```

```bash
update-grub
```

BIOS 

1. SVM is enabled (CPU Virtualization).
2. IOMMU is enabled.

Make sure everything is enabled.

```bash
dmesg | grep -e DMAR -e IOMMU 
dmesg | grep 'remapping'
```

GPU Passthrough

Link : https://pve.proxmox.com/wiki/PCI_Passthrough

1. Kalau guna NVIDIA GPU, blacklist NVIDIA GPU vice versa.

- AMD GPU

```bash
echo "blacklist amdgpu" >> /etc/modprobe.d/blacklist.conf
echo "blacklist radeon" >> /etc/modprobe.d/blacklist.conf
```

- NVIDIA GPUs

```bash
echo "blacklist nouveau" >> /etc/modprobe.d/blacklist.conf 
echo "blacklist nvidia*" >> /etc/modprobe.d/blacklist.conf 
```

- Intel GPUs
```bash
echo "blacklist i915" >> /etc/modprobe.d/blacklist.conf
```

2. Reboot node
3. Pergi guest and add PCI Device and masukkan graphic card.
4. Turn on guest.

