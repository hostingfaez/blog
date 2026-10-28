Install : `sudo apt install putty`

```bash
# Nak tau port (console - Device Manager)
ls /dev/tty*
```

1. Erase configuration

```
write erase
reload
```

2. Reset password

Reboot the device and Ctrl + Right Click and choose break within 60 seconds timeframe. We want to enter ROMMON Mode.

![[Screenshot From 2026-10-22 10-42-48.png]]

Set config register to normal boot mode 
![[Screenshot From 2026-10-22 10-42-24 1.png]]

```
confreg 0x2142
```

Reset router to reload os

```
reset
```

Tukar register ke normal

```
config-register 0x2012
```

Template password to enable 

```
enable
configure terminal
banner motd #
*****************************************************************
  PERHATIAN / WARNING:
  - Password untuk router ini ialah: class
  - JANGAN TUKAR password ini!
  - JANGAN SET/LETAK sebarang password baru di dalam 'conf t'!
*****************************************************************
#
end
```