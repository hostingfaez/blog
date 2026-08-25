
### Why Ansible

- **Agentless:** No software to install on target servers; it uses standard SSH.
- **Idempotent:** Safe to run repeatedly; it only changes what needs fixing.
- **Declarative:** You define _what_ the end state should look like using simple YAML playbooks.
- **Push-based:** Control everything directly and centrally from your control node.

1. Download pipx (if you dont have it yet)

```bash
sudo apt update
sudo apt install pipx -y
pipx ensurepath
```

2. Install Ansible (full package)

```bash
pipx install --include-deps ansible
```