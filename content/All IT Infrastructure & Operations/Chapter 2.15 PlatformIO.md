> Note : I use this as an alternative to Arduino IDE since i want to code in the terminal.

1. Install dependencies

```bash
sudo apt update
sudo apt install python3-venv python3-pip
```

2. Download

```bash
curl -fsSL https://raw.githubusercontent.com/platformio/platformio-core-installer/master/get-platformio.py | python3 -
```

```bash
python3 -m venv ~/.platformio/penv
~/.platformio/penv/bin/pip install --upgrade pip
~/.platformio/penv/bin/pip install platformio
```

2. Access everywhere

```bash
sudo ln -s ~/.platformio/penv/bin/pio /usr/local/bin/pio
```

3. Give permission to user to read & write to ESP via USB

```bash
sudo usermod -a -G dialout $USER
```

4. Make project directory

```
mkdir ~/project
cd ~/project
```

According to your hardware
- Jika ESP8266 (NodeMCU): `pio project init --board nodemcuv2`
- Jika ESP32 biasa: `pio project init --board esp32dev`

5. Edit your project 

```bash
vim src/main.cpp
```
### Extras

1. Library

```bash
vim platformio.ini
```

2. Compile & run

```bash
pio run -t upload
```

3. Serial Monitor 

```bash
pio device monitor
```

4. Initialize project

```bash
pio project init --board nodemcuv2
```