
docker-compose.yml (my config)

```
services:
  calibre-web:
    image: lscr.io/linuxserver/calibre-web:latest
    container_name: calibre-web
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Asia/Kuala_Lumpur
    volumes:
      - ./config:/config
      - /home/f8un99/buku:/books
    ports:
      - "8083:8083"
    restart: unless-stopped
```

Run 

```bash
docker compose up -d
```

Buka web browser

```bash
http://192.168.122.11:8083
```

![[Pasted image 20260726112350.png]]

Default 
Username:admin
Password:admin123

Masukkan dalam folder buku (elakkan masuk dalam folder calibre web untuk mengelakkan db hilang kalau update)

```bash
sudo wget https://github.com/janeczku/calibre-web/raw/master/library/metadata.db
```

Boleh masukkan db dalam satu folder yang sama dengan buku kalau taknak pon boleh seperate buku dengan db.

![[Pasted image 20260726121808.png]] 

Upload Buku : Edit Basic Configuration > enable uploads.

![[Pasted image 20260726121624.png]]

Pergi books page nanti akan ada button upload dekat navbar atas.

![[Pasted image 20260726123755.png]]