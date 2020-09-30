---
layout: post
title: Clearing NuGet package caches
author: ris
image: '/images/posts/hooded-hacker-1.jpg'
category:
- development
tags:
- development
- dotnet
- nuget
---

## How to clear your caches

NuGet caches downloaded packages to avoid lengthy update times.  Sometimes, however, restoring packages (such as a CI server) can become problematic.  Below is an easy method of clearing your cache to help debug restore issues.

### Manually Clearing Folders
Remove the following folders:

  * Packages Folder (In Project)
  * %userprofile%\.nuget\packages
  * %localappdata%\NuGet\Cache
  * %localappdata%\NuGet\v3-cache
  * %localappdata%\NuGet\plugins-cache

### Using The CLI
``` bash
# Clear the 3.x+ cache (use either command)
dotnet nuget locals http-cache --clear
nuget locals http-cache -clear

# Clear the 2.x cache (NuGet CLI 3.5 and earlier only)
nuget locals packages-cache -clear

# Clear the global packages folder (use either command)
dotnet nuget locals global-packages --clear
nuget locals global-packages -clear

# Clear the temporary cache (use either command)
dotnet nuget locals temp --clear
nuget locals temp -clear

# Clear the plugins cache (use either command)
dotnet nuget locals plugins-cache --clear
nuget locals plugins-cache -clear

# Clear all caches (use either command)
dotnet nuget locals all --clear
nuget locals all -clear
```
