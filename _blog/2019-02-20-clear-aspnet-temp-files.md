---
layout: post
title: Clearing ASP.Net temporary files
author: ris
image: '/images/posts/hooded-hacker-4'
category:
- development
tags:
- development
- dotnet
- asp.net
---

## How to clear your caches

By default, when you compile a Web application the compiled code is placed in the Temporary ASP.NET Files folder. This folder is a sub-directory of the location where you installed the .NET framework.

If you're seeing strange caching behaviour either in the Console or in WebAccess and an IISreset is not correcting your problem you can try to clear the Temporary ASP.NET Files.

***(N.B you mustn't delete the Temporary ASP.NET Files folder itself, but you can clear its contents.)***

### Using The CLI
First stop IIS

Then find your temp directory

``` powershell
# delete all files from
C:\Windows\Microsoft.NET\Framework\v4.0.30319\"Temporary ASP.NET Files"

C:\Windows\Microsoft.NET\Framework64\v4.0.30319\"Temporary ASP.NET Files"
```

depending on your configuration you may also wish to check:
``` powershell
%temp%\"Temporary ASP.NET Files"

C:\Users\[youruserid]\AppData\Local\Temp\"Temporary ASP.NET Files"
```

Don't forget to re-start IIS when finished