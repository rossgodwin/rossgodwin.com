---
layout: bojekylls/default
permalink: /links/
title: "Ross Godwin"
logo-relative-url: /
logo-image-relative-url: assets/images/site/logo.png
subtitle: Land Development Project Manager at Bowman.
links:
  - title: Resume
    url:
      internal-relative-url: assets/docs/cv.pdf
    open-new-tab: yes
    fontawesome-icon-classnames: fa fa-file-pdf fa-2x
  - title: LinkedIn
    url:
      external-url: https://www.linkedin.com/in/ross-godwin
    open-new-tab: yes
    fontawesome-icon-classnames: fab fa-linkedin-in fa-2x
  - title: Github
    url:
      external-url: https://www.github.com/rossgodwin
    open-new-tab: yes
    fontawesome-icon-classnames: fab fa-github fa-2x
redirect_from:
  - /linktree/
  - /about/
  - /blog/
---

{% include bojekylls/layout/onlylinks/page.html
	logo-relative-url=page.logo-relative-url
	logo-image-relative-url=page.logo-image-relative-url
	title=page.title
	subtitle=page.subtitle
	links=page.links %}