---
{}
---
Kalau nak tambah storage 

```bash
qemu-img create -f qcow2 ~/vms/freebsd_data.qcow2 10G
```

Resize 

```bash
qemu-img resize ~/vms/freebsd.qcow2 +30G
```


### Buang semua

