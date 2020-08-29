---
layout: article-mvgallery
title: Demo Minimum Viable Gallery(mv-gallery) in Jekyll Website
categories: [notes]
tags: [demo, gallery, jekyll, mv-gallery]
date: 2020-07-07
gallery:
  - base_name: /assets/images/article/demo-mvgallery-in-jekyll/sample1
    title: Sample 1
  - base_name: /assets/images/article/demo-mvgallery-in-jekyll/sample2
    title: Sample 2
  - base_name: /assets/images/article/demo-mvgallery-in-jekyll/sample3
    title: Sample 3
  - base_name: /assets/images/article/demo-mvgallery-in-jekyll/sample4
    title: Sample 4
  - base_name: /assets/images/article/demo-mvgallery-in-jekyll/sample5
    title: Sample 5
  - base_name: /assets/images/article/demo-mvgallery-in-jekyll/sample6
    title: Sample 6
  - base_name: /assets/images/article/demo-mvgallery-in-jekyll/sample7
    title: Sample 7
  - base_name: /assets/images/article/demo-mvgallery-in-jekyll/sample8
    title: Sample 8
  - base_name: /assets/images/article/demo-mvgallery-in-jekyll/sample9
    title: Sample 9
  - base_name: /assets/images/article/demo-mvgallery-in-jekyll/sample10
    title: Sample 10
  - base_name: /assets/images/article/demo-mvgallery-in-jekyll/sample11
    title: Sample 11
  - base_name: /assets/images/article/demo-mvgallery-in-jekyll/sample12
    title: Sample 12
---

The following demonstrates integrating [Minimum Viable Gallery](https://github.com/blinkcursor/mv-gallery){:target="_blank"} in to a Jekyll generated website.<!--more--> I was digging around for a simple photo gallery rendering framework to use in my website and this was one that I came across. I wanted something to take in to account loading smaller sized thumbnail images and then select expanding to view larger size images.  Also I wanted to reuse the source code across articles. The one thing I don't like about about this method of rendering photos was all the different size versions of a photo that is need to be created. It would be to cumbersome for me. I contemplated writing a program to generate all the different sized photo versions that would be needed from a base photo but did not want to invest time in that.

Had I stuck with this method, it would have been a big deterrence to posting photos. For this reason I kept researching and settled on [magnific-popup]({% link _notes/demo-magnific-popup-in-jekyll.md %}). Nevertheless because I tried it out, I figured I would leave a demonstration for anyone else that might be interested in integrating this in to their Jekyll website. Source can be in the github website [repository]({{ site.github.url }}/{{ site.github.website-repo }}).

{% include gallery-mvgallery.html %}