
> Note : This operating system is strictly configured as an isolated lab environment for my Ethical Hacking certifications and practical exercises. For detailed post-installation walkthrough you can go to [[Debian Docs]] since Kali is Debian-based.

IP Address: 192.168.122.128

Websites
1. https://whatsmyname.app/ ; community-maintained dataset that lets you find out if a username exists across hundreds of websites.

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