Link download software (CLI) : https://www.cyberpowersystems.com/product/software/power-panel-personal/powerpanel-personal-linux/ 

[[Chapter 2.99 Deb Files]]

Cyberpower UPS Telegram Monitor : https://github.com/FaezBun/sebups

1. Monitor UPS Status

```bash
sudo pwrstat -status
```

```bash
The UPS information shows as following:
	Properties:
		Model Name................... UT1500EG
		Firmware Number.............. BF02203C191.y
		Rating Voltage............... 230 V
		Rating Power................. 900 Watt

	Current UPS status:
		State........................ Normal
		Power Supply by.............. Utility Power
		Utility Voltage.............. 229 V
		Output Voltage............... 228 V
		Utility Frequency............ 501.0 Hz
		Battery Capacity............. 100 %
		Remaining Runtime............ 132 min.
		Load......................... 72 Watt(8 %)
		Line Interaction............. None
		Test Result.................. Unknown
		Last Power Event............. None
```

2. Other pwrstat command 

```bash
sudo pwrstat -help
```

3. Test guna battery power & check status

```bash
sudo pwrstat -help
```

```bash
Test Result.................. Passed at 2026/08/24 14:34:49
Last Power Event............. None
```

4. Manual

```bash
man pwrstat
man pwrstatd
```

