---
layout: article-mvgallery
article_id: 1001
title: Jekyll mv-gallery Demo
summary: These are just some basic notes that I took while doing some research on agile software development.
categories: [notes]
tags: [jekyll, mv-gallery, demo]
date: 2020-07-07
mvgallery:
  base_path: gallery/1000
  images:
    - base_name: sample1
      title: Sample 1
    - base_name: sample2
      title: Sample 2
    - base_name: sample3
      title: Sample 3
    - base_name: sample4
      title: Sample 4
    - base_name: sample5
      title: Sample 5
    - base_name: sample6
      title: Sample 6
    - base_name: sample7
      title: Sample 7
    - base_name: sample8
      title: Sample 8
    - base_name: sample9
      title: Sample 9
    - base_name: sample10
      title: Sample 10
    - base_name: sample11
      title: Sample 11
    - base_name: sample12
      title: Sample 12
---

The following is a demo explanation with source code reference for how I integrated mv-gallery in to my jekyll environment for reuse in articles.

I wanted a simple photo rendering framework to use for gallery displays in articles.  I wanted something to take in to account loading smaller sized images and the select expanding to view larger size images.  Also I wanted to reuse the source code across articles.

Todo:
* Add paging


https://github.com/blinkcursor/mv-gallery

https://learn.cloudcannon.com/jekyll/photo-gallery/

https://mademistakes.com/notes/static-files/#fnref-2

https://github.com/mmistakes/jekyll-picture-tag