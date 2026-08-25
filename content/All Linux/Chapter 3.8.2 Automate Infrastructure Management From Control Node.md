
1. Sediakan SSH Key

```bash
ssh-keygen -t rsa -b 4096
```

2. Copy key ke target host (Managed Node)

```bash
ssh-copy-id username@targetip
```

3. Buat file inventory (Control Node). Exp nama file : hosts.ini

```
[testingserverboss]
192.168.122.30 ansible_user=username
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