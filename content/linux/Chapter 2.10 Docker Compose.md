1. Letak official repo docker 

```bash
sudo apt install ca-certificates curl -y
```

2. Donwload GPG Docker

```bash
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

3. Masukkan repo docker dalam workstation (debian)

```bash
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

4. Install Docker compose

```bash
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-compose-plugin -y
```

5. Try docker boleh run ke tak (optional)

Clone repo 

```bash
git clone https://github.com/FaezBun/dockertest.git
```

6. Run docker `sudo docker compose up -d`

Sepatutnya akan keluar

```bash
f8un@deb:~/codesa/dockertest$ docker compose up -d
[+] up 13/13
 ✔ Image nginx:alpine         Pulled                                                      11.8s
 ✔ Network dockertest_default Created                                                      0.0s
 ✔ Container ujian_nginx      Started      
```

Bukak web browser and search : http://youripaddress:8080/


![[Screenshot from 2026-07-16 12-04-06 1.png]]

6. off run container `sudo docker compose down`