Install navidrome with docker compose : https://www.navidrome.org/docs/installation/docker/ 

docker-compose.yml (my config)

```bash
services:
  navidrome:
    image: deluan/navidrome:latest
    ports:
      - "4533:4533"
    restart: unless-stopped
    environment:
      ND_SCANSCHEDULE: 1h
      ND_LOGLEVEL: info
      ND_SESSIONTIMEOUT: 24h
    volumes:
      - "./data:/data"
      - "/home/user/pathlagu/:/music:ro"
```

Run 

```bash
docker compose up -d
```

supposed tree after run the container (may differ)

```bash
.
└── navi
    ├── data
    │   ├── cache
    │   │   ├── backgrounds
    │   ├── navidrome.db
    │   ├── navidrome.db-shm
    │   ├── navidrome.db-wal
    │   └── plugins 
    └── docker-compose.yml
```

>Note : Folder lagu aku bukan dalam navi but in the ~/lagu directory (/home/namauser/lagu to be exact)

```bash
f8un99@rendang:~$ ls
lagu 
```

Bukak web browser 

```
http://ipserver:4533
```

Setup admin account 

![[Pasted image 20260726102946.png]]

Aku letak 3 lagu as example. If kalau path kau betul dalam docker compose the album will automatically show up.

![[Pasted image 20260726104554.png]]
