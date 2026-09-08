
1. Check port 25

```bash
telnet portquiz.net 25
```

The output would be `Connected to portquiz.net`. If you can connect you can use Poste.io and SMTP relay to have your own SMTP server.

```bash
Trying 35.180.139.74...
telnet: Unable to connect to remote host: Connection timed out
```

If you get this output then you have several options.
1. Call your own ISP to change from Home Plan to Business Plan.
2. Rent VPS service that support port 25 and use reverse proxy tunnel and point it to your Tailscale Poste.io.


