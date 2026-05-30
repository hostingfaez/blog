---
{}
---
### Installation 

```bash
sudo apt update
sudo apt install ca-certificates curl gnupg lsb-release -y
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y

sudo usermod -aG docker $USER

sudo docker pull gcc
sudo docker pull python
```

### Commands

```bash
sudo docker ps - task manager untuk docker

f8un99@server:~$ sudo docker image ls
                                                                                                                                                         i Info →   U  In Use
IMAGE                         ID             DISK USAGE   CONTENT SIZE   EXTRA
deluan/navidrome:0.58.5       648ebd45c50c        369MB         98.5MB    U   
pihole/pihole:2025.11.1       91dc91ddd413        144MB         41.7MB    U   
tailscale/tailscale:v1.90.8   4dacf554cf34        158MB         53.5MB    U  

# buat container gcc
f8un99@server:~$ sudo docker run -d --name f8un99-gcc -it gcc
521dfd8b04c90e0835573093d11ed2004794a629a44d4c199e19b4806fe0bf51
# Masuk dalam container
f8un99@server:~$ sudo docker exec -it f8un99-gcc bash
root@521dfd8b04c9:/# apt update && apt upgrade 


# buat container python
sudo docker run -d --name f8un99-python -it python
f8un99@server:~$ sudo docker exec -it f8un99-python bash

# Buang container 
sudo docker rm -f f8un99-gcc f8un99-python

# Nak edit dekat luar 
# Maksudnya: Folder 'code' kat laptop kau akan muncul kat '/app' dalam container
sudo docker run -d -v ~/Documents/Codesa:/app --name f8un99-python python sleep infinity
```

> **Note : B**uat "terowong" (sync). Apa-apa file yang kau tulis guna Vim kat laptop dalam folder, automatik akan muncul dalam folder /app  kat dalam container.
