![[Pasted image 20260907232721.png]]

### Kernel Mode

1. Privileged mode and full system access
2. Critical operations
3. System calls

### User Mode

1. Applications
2. Background services
3. Security software
4. LOLBins (cmd.exe wmic.exe etc)

### Core Processes

- Launch during boot 
- Keep the OS stable secure and responsive

1. smss.exe (session manager subsystem)
	- Initialize user environment during startup

> Note : if smss.exe in a location other than C:\Windows\System32, it could be a malware.


2. lsass.exe (local security authority subsystem service)
	- Handle security policy enforcement
3. svchost.exe 
	- Acts as a host for various Windows services
4. csrss.exe
	- core component of the Win32 subsystem
5. explorer.exe
6. rundll32.exe