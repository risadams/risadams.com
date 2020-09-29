---
layout: post
title: 'Git: Checkout a branch at a specific date'
image: '/images/posts/hooded-hacker-2.jpg'
author: ris
categories:
- development
tags:
- development
- git
---

Sometimes one needs to grab a copy of your source repo as of a specific point in time.
This is the command to do so. Update the date and branch (e.g dev) according to your needs.

``` bash
git checkout `git rev-list -n 1 --before="2017-01-01 00:00" dev`
```