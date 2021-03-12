---
layout: post
title: Git Tip of the day -- What Changed?
author: ris
image: '/images/posts/hooded-hacker-3'
categories:
- development
tags:
- git
- development
---

So you've just come back from vacation and what to see what your co-workers have been up to?  Coming back to a project after a long break?  There is a little known command in git that will show you all the commits that have happened since you left off.

``` bash
git whatchanged --since='2019-04-11'
```

### Use a Friendly Date

``` bash
git whatchanged --since='yesterday'
git whatchanged --since='3 weeks ago'
```