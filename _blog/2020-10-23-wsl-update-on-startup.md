---
layout: post
title: "Automatically Update WSL on Startup"
image: "/images/posts/laptop-and-latte"
author: ris
categories:
  - development
tags:
  - wsl
  - development
  - scripts
---

## How to keep your WSL instance up to date

If you are like me, you prefer to always keep your packages as up to date as possible.
you also like to automate things when possible to avoid repetitive admin tasks.

This script will call your default WSL instance [^footnote], and update/upgrade all packages.

```bash
wsl -u root -e apt update
wsl -u root -e apt upgrade -y
```

Once this script is saved, use the Windows Task Scheduler to automate it's execution.  I have it set to run at login, and once per week.

[^footnote]: I use Ubuntu, adjust as needed.  You can also adjust to use a specific distro if required. I only use a single instance.
