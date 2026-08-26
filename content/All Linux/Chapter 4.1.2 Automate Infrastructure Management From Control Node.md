
1. Sediakan SSH Key

```bash
ssh-keygen -t rsa -b 4096
```

2. Copy key ke target host (Managed Node)

```bash
ssh-copy-id -i ~/.ssh/namassh.pub username@ipaddr
```

3. Buat file inventory (Control Node). Exp nama file : hosts.ini

```
[testingserverboss]
192.168.122.30 ansible_user=username ansible_ssh_private_key_file=~/.ssh/namasshkey
```

4. Try ping (recommended)

```bash
ansible testingserverboss -i hosts.ini -m ping
```

5. Buat playbook. 

> Note : Command ni sekali je guna untuk bypass masalah username is not in sudoers file. Ansible akan masuk as username yang kita dah state and dia akan masuk as root. Bila ada command **BECOME password :** masukkan password root. Make your own test.yml.

```bash
ansible-playbook -i hosts.ini test.yml -K --become-method=su
```

5. Run automation 

```bash
ansible-playbook -i hosts.ini test.yml -K
```

### Errors

1. Tak boleh nak run automation / ping sebab Ansible tak boleh  type paraphrase bila dapat SSH key

Hidupkan ssh agent

```bash
eval "$(ssh-agent -s)"
```

Masukkan ssh key 

```bas
ssh-add ~/.ssh/namakey
```

Try ping 

```bash
ansible testingserverboss -i host.ini -m ping
```