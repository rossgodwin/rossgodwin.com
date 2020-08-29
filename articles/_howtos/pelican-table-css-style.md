---
layout: article
title: How To Style a Markdown Table in Pelican
summary: This explains how to style a markdown table in the static site generator pelican.
categories: [howtos]
tags: [pelican, markdown, css]
date: 2017-11-17
---

In your style sheet define a custom class that styles a HTML table.

{% gist 70eb1c973aca53a594e39c35a10fd320 %}

Then in your markdown file wrap the table syntax with a HTML div tag that includes your custom css class.

{% gist c66cc4e9fac6ee0658372e8d8a6842d4 %}

Here is a example...

{% gist e64bac3ae5fedd462e4a20584d267806 %}

Booyah!