
> Note : This operating system is strictly configured as an isolated lab environment for **my Ethical Hacking certifications and practical exercises**. For detailed post-installation walkthrough you can go to [[Debian Docs]] since Kali is Debian-based.
> 
> There's a lot of modules in this course and I only took the tools and methods that are beneficial for real world scenario since the theory of how 'something works' I am pretty sure you can search it anywhere including using AI. Please make sure that your understanding and foundation is stable enough for you to use any of these tools. I already put a description after the tools that in use for you to get an overview on **what are you doing and what is happening**. Happy Learning !

![[Ethical Hacker Certificate.pdf]]

Websites & Others
1. https://whatsmyname.app/ ; community-maintained dataset that lets you find out if a username exists across hundreds of websites.
2. https://linuxvox.com/blog/ddos-kali-linux/ ; DDOS attacks with Kali Linux
3. http://scanme.nmap.org/ ; Website to test and make sure that their Nmap installation (or Internet connection) is working properly.
4. [[Chapter Z9 Deal With Vulnerability]]

If you want to access web for any of these tools please make sure that you allow your firewall not to block other host entering that port.

```bash
sudo ufw allow portno/tcp
```


---

Chapter 1 Tools


> Disclaimer : Use these _tools_ strictly within a lab environment or against targets for which you have **explicit written authorization**. Any unauthorized scanning or exploitation of third-party systems is a strict violation of cyber laws.


Chapter 1.1 Performing Passive Reconnaissance
- [[Chapter 1.1.1 SpiderFoot]] ; An automated OSINT scanner.
- [[Chapter 1.1.2 Recon-ng]] ; An OSINT framework that is similar to the Metasploit exploitation framework or the Social-Engineering Tooklit (SET). It consists of a series of modules that can be run in their own workspaces.
- [[Chapter 1.1.3 DNS Lookups]] ; Determine the IP address or addresses used by the website and any other subdomains that might be in use
- [[Chapter 1.1.4 Exiftool]] ; Specification that defines the formats for images, sound, and supplementary tags used by digital cameras, mobile phones, scanners, and other systems that process image and sound files.
- Chapter 1.1.5 Wayback Machine https://archive.org/web ; Allows you to go back in time on the Internet (Crawler).
- [[Chapter 1.1.6 Email Harvester]] ; A tool to retrieve Domain email addresses from Search Engines.
- [[Chapter 1.1.7 Google Dorking]]

Chapter 1.2 Performing Active Reconnaissance
- [[Chapter 1.2.1 Nmap]]
- [[Chapter 1.2.2 Enum4Linux]] ; Enumerate Samba shares, including user accounts, shares, and other configurations.
- Chapter 1.2.3 GVM Scanner ; GVM is part of the Open Source Vulnerability Management suite of products produced by Greenbone Networks GmbH. The GVM scanner is one of the most widely used open-source vulnerability scanners.

Chapter 1.3 Social Engineering Tools 
- [[Chapter 1.3.1 Social-Engineer Toolkit (SET)]] ; This tool can be used to launch numerous social engineering attacks and can be integrated with third-party tools and frameworks such as Metasploit. SET is installed by default in Kali Linux and Parrot Security.
- [[Chapter 1.3.2 Browser Exploitation Framework (BeEF)]] ; Tool that can be used to manipulate users by leveraging XSS vulnerabilities
- Chapter 1.3.3 Call Spoofing Tools
	- **SpoofApp**: This is an Apple iOS and Android app that can be used to easily spoof a phone number.
	- **SpoofCard**: This is an Apple iOS and Android app that can spoof a number and change your voice, record calls, generate different background noises, and send calls straight to voicemail.
	- **Asterisk**: Asterisk is a legitimate voice over IP (VoIP) management tool that can also be used to impersonate caller ID.

Chapter 1.4 Exploiting Network-Based Vulnerabilites.
- [[Chapter 1.4.1 Metasploit]] ; An important open-source penetration testing framework used by ethical hackers, cybersecurity professionals and security researchers to identify, test and exploit vulnerabilities in systems, networks and applications.
- Chapter 1.4.2 Ettercap ; Ettercap is used to perform on-path (MITM) attacks.

Chapter 1.5 Exploiting Wireless Vulnerabilities
- Chapter 1.5.1 airmon-ng ; Deauthentication Attack (have to have Wireless USB Adapter & support monitor mode and packet injection)
- Chapter 1.5.2 Bluesnarfer ; Bluesnarfing attacks are performed to obtain unauthorized access to information from a Bluetooth-enabled device. (have to have Bluetooth USB Adapter)

Chapter 1.6 Exploiting Application-Based Vulnerabilities

> Note : It is advisable to do cross site scripting, SQL injection and dictionary attack in **DVWA**. link : https://github.com/digininja/DVWA> 

- [[Chapter 1.6.1 Nikto]] ; Nikto is a popular web vulnerability scanner that can find SQL injection, XSS, and other common vulnerabilities in websites. It can identify installed software using page headers and files. Nikto supports both HTTP and HTTPS protocols.
- Chapter 1.6.2 Hydra ; Online brute-force attacks against live network services. Ps : I already made a book about it ! 
- Chapter 1.6.3 Jack The Ripper ; Offline password cracking against captured hash files

Chapter 1.7 Cloud, Mobile & IOT Security
- [[Chapter 1.7.1 VM Escape Attack]] ; Security exploit where a malicious program breaks out of an isolated virtual machine or container environment to gain unauthorized access to the underlying host operating system or other virtual machines.

Chapter 1.8 Post Exploitation
A reverse shell is a vulnerability in which an attacking system has a listener (port open), and the victim initiates a connection back to the attacking system.
- [[Chapter 1.8.1 Netcat]]
- Chapter 1.8.2 socat ; A C2 utility that can be used to create multiple reverse shells (see [_http://www.dest-unreach.org/socat_](http://www.dest-unreach.org/socat))
- Chapter 1.8.3 TrevorC2 ; A Python-based C2 utility created by Dave Kennedy of TrustedSec (see [_https://github.com/trustedsec/trevorc2_](https://github.com/trustedsec/trevorc2))