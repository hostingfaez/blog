> Note: This page is created to make Windows client is open for SSH (Win 10). 


1. Install SSH in Windows in Powershell (Run As Administrator)

```bash
Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0
```

2. Start Service

```bash
Start-Service sshd
Set-Service -Name sshd -StartupType Automatic
```

3. Allow Windows Firewall access port 22

```bash
if (!(Get-NetFirewallRule -Name "OpenSSH-Server-In-TCP" -ErrorAction SilentlyContinue)) {
    New-NetFirewallRule -Name "OpenSSH-Server-In-TCP" -DisplayName "OpenSSH Server (sshd)" -Enabled True -Direction Inbound -Protocol TCP -Action Allow -LocalPort 22
}
```

4. The result if you can SSH to your Windows

```bash
Microsoft Windows [Version 10.0.19045.6466]
(c) Microsoft Corporation. All rights reserved.

edfae@DESKTOP-TDCMNJ0 C:\Users\edfae>
```

5. Restart SSH service

```bash
Restart-Service sshd
```

6. Try ping server from Windows

```bash
Test-NetConnection -ComputerName IPADDR_SERVER -Port 22       
```

```
ComputerName     : 192.168.0.xx                                                                                        RemoteAddress    : 192.168.0.xx                                                                                        RemotePort       : 22                                                                                                   InterfaceAlias   : Ethernet 2                                                                                           SourceAddress    : 192.168.0.200                                                                                        TcpTestSucceeded : True
```
### Setup password (optional)

If you enter your password and it is still wrong it means that you have not configured your password for your account.

1. Press Win + i to open settings
2. Account > Sign In Options
3. Password and Add / Change to local account instead and enter your password