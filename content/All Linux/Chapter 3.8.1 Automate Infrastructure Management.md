

1. Buat playbook. Exp nama fail : an.yml

```
---
- name: Bootstrap VM Baru
  hosts: localhost
  connection: local
  become: yes # Jalankan sebagai root
  tasks:
    - name: Kemas kini cache apt dan upgrade sistem
      apt:
        update_cache: yes
        upgrade: dist

    - name: Pasang utiliti asas pentadbiran
      apt:
        name:
          - git
          - curl
          - neovim
          - bat
          - htop
        state: present
```

2. Run

```bash
ansible-playbook an.yml -K
```