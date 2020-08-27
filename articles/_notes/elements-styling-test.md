---
layout: article
article_id: 1000
title: Elements Styling Test
summary: Format features that I use through articles on this website.
categories: [notes]
tags: [jekyll, markdown, demo]
date: 2020-05-15
---

Below are elements that I use through my notes and blogs.  [View the markdown source](https://www.google.com) for the code on how to integrate in your posts. 

#### Link to Local Asset

[Link to a image]({% link /assets/images/article/{{ page.article_id }}/arrows-1738067_1280_350.jpg %})[^link]

[^link]: [Jekyll resource linking](https://jekyllrb.com/docs/liquid/tags/#link){:target="_blank"}

#### Embed Image

![A bunch of colorful arrows]({% link /assets/images/article/{{ page.article_id }}/arrows-1738067_1280_350.jpg %}){:class="img-responsive" width="100%"}

#### Code Block Example

[Usage](https://highlightjs.org/usage){:target="_blank"} <span>&#124;</span> [Themes](https://highlightjs.org/static/demo){:target="_blank"}

<pre>
<code>
function $initHighlight(block, cls) {
  try {
    if (cls.search(/\bno\-highlight\b/) != -1)
      return process(block, true, 0x0F) +
             ` class="${cls}"`;
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }
}

export  $initHighlight;
</code>
</pre>

#### Quote Example

{% capture _quote %}
	You might not think that programmers are artists, but programming is an extremely creative profession. It's logic-based creativity.
{% endcapture %}
{% include quote.html quote=_quote quote_by="John Romero" %}

#### Embed a Tweet

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">1969:<br>-what&#39;re you doing with that 2KB of RAM?<br>-sending people to the moon<br><br>2017:<br>-what&#39;re you doing with that 1.5GB of RAM?<br>-running Slack</p>&mdash; I Am Devloper (@iamdevloper) <a href="https://twitter.com/iamdevloper/status/926458505355235328?ref_src=twsrc%5Etfw">November 3, 2017</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

#### Gist

[Gist source](https://github.com/jekyll/jekyll-gist){:target="_blank"}

{% gist 0dc4c027aeb67bab75de4e44f75d53ee %}