Website : https://www.netacad.com/resources/lab-downloads?courseLang=en-US 

Install File : [[Chapter 2.99 Deb Files]]

Masa agreement tekan arrow kanan and then quit

Dia akn tanya : Please review Cisco Packet Tracer End User Licese Agreement (EULA)

Enter 1, 2 or 3 at the prompt below
1) Show EULA text again
2) Accept EULA
3) Decline EULA
#? 
Tekan 2
Accept EULA (selected)

Error

```bash
f8un@deb:~/Downloads$ packettracer
Cisco_Packet_Tracer_9.0.0:b3ff134c88b008deda94147e4c7ac664:/opt/pt/packettracer.AppImage
mkdir: cannot create directory ‘/home/f8un/.local/.packettracer/lib’: Permission denied

```

```bash
sudo chown -R f8un:f8un ~/.local/.packettracer
```

Run : `packettracer`