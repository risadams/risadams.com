---
layout: post
title: "Markdown Cheat Sheet"
image: "/images/posts/coder-1.jpg"
author: ris
categories:
  - development
tags:
  - development
  - markdown
---

This sheet is adapted from [The Markdown Guide](https://www.markdownguide.org)!
It's purpose is to help shape the writing and styling of posts for this site.

This Markdown cheat sheet provides a quick overview of all the Markdown syntax elements. It can’t cover every edge case, so if you need more information about any of these elements, refer to the reference guides for [basic syntax](#basic-syntax) and [extended syntax](#extended-syntax).

## Basic Syntax

These are the elements outlined in John Gruber’s original design document. All Markdown applications support these elements.

### Heading

# H1

## H2

### H3

### Bold

some text is **bold text**

### Italic

some text is _italicized text_

### Blockquote

> blockquote

### Nested Blockquote

> some block-quotes need
  >> to be nested

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

- First item
- Second item
- Third item

### Code

`code`

### Horizontal Rule

---

### Link

[title](https://www.example.com)

### Image

![Oh Hey](/images/posts/oh-hey.jpg)

## Extended Syntax

These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.

### Table

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

### Fenced Code Block

``` json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

### Footnote

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

### Heading ID

### My Great Heading {#custom-id}

### Definition List

term : definition

### Strike-through

~~The world is flat.~~

### Task List

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
