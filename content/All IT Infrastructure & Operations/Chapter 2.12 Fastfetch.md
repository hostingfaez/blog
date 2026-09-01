### Install

```bash
sudo apt update
sudo apt install fastfetch -y
```

1. Generate config

```bash
fastfetch --gen-config
```

2. Edit 

```bash
vim ~/.config/fastfetch/config.jsonc
```

```
{
  "$schema": "https://github.com/fastfetch-cli/fastfetch/raw/dev/doc/json_schema.json",
  "logo": {
    "type": "file",
    "source": "~/.config/fastfetch/logo.txt",
    "color": {
      "1": "white",
      "2": "white"
    }
  },
  "modules": [
    "title",
    "separator",
    "os",
    "kernel",
    "uptime",
    "shell",
    "terminal",
    "cpu",
    "memory",
    "disk",
    "break",
    "colors"
  ]
}
```