Link : https://github.com/FlareSolverr/FlareSolverr

Ada indexer yang guna Cloudflare DDoS Protection jadi kalau nak guna indexer tu kita kena guna FlareSolverr untuk access. Clone repo, masuk dalam directory flare solverr and run container `sudo docker compose up -d`.

Web UI if success.

![[Pasted image 20260729112908.png]]

Follow the standard steps to add the indexer noting the following changes. 
1. Pergi dekat indexer yang kena block.
2. Uncheck (Disable) the `Enabled` box
3. Press `Save`
4. Press `Save` again to trigger a force save
5. Edit the Indexer (Wrench Icon)
6. Check (Enable) the `Enabled` box
7. Press `Save`
8. Press `Save` again to trigger a force save