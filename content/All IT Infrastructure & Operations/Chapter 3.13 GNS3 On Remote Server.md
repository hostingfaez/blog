
Docs Link : https://docs.gns3.com/docs/getting-started/installation/remote-server 

> If you are using Ubuntu as your server then you can proceed with the docs page from GNS3 or you will get an error.


1. Install

```bash
pipx install gns3-server
```

2. Run manually (test) 

> Note : Kalau run dalam remote server boleh guna ip dari VPN.

```bash
gns3server --port 3080
```

http://ipadressserver:3080

3. Jadikan dia autorun in background

```bash
sudo vim /etc/systemd/system/gns3-server.service
```

```
[Unit]
Description=GNS3 Server
After=network.target

[Service]
Type=simple
User=f8un99
ExecStart=/home/f8un99/.local/bin/gns3server --host 0.0.0.0 --port 3080
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

4. Enable and start service

```bash
sudo systemctl daemon-reload
sudo systemctl enable gns3-server
sudo systemctl start gns3-server
```

5. Install Dynamips (For Debian 13 and Distributions Based on Debian 13)

```bash
sudo apt update
sudo apt install build-essential
sudo apt install cmake
```

6. Install dependencies

```bash
sudo apt update
sudo apt install libelf-dev libpcap0.8-dev
```

7. Clone 

```bash
git clone https://github.com/GNS3/dynamips.git
cd dynamips
mkdir build
cd build
cmake ..
make install
```


### Error

1. CMake Error

```bash
sudo make install
```

2. ubridge is missing

```bash
sudo apt update
sudo apt install build-essential libpcap-dev git -y
```

```bash
cd /tmp
git clone https://github.com/GNS3/ubridge.git
cd ubridge
make
sudo make install
```

```bash
sudo setcap cap_net_admin,cap_net_raw=ep /usr/local/bin/ubridge
```

```bash
sudo systemctl restart gns3-server
```