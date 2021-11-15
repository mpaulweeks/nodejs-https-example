# nodejs-https-example

Attempt to serve HTTPS within Node (aka without nginx)

## certbot

```bash

sudo apt-get update

sudo apt install snapd
sudo snap install core
sudo snap refresh core

sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot

sudo certbot certonly --standalone
// nodehttps.mpaulweeks.com
```
