---
layout: article
title: Website Kitchen Sink
categories: [notes]
tags: [demo, jekyll, markdown, kitchen-sink]
date: 2020-05-15
include-highlightjs: yes
---

These are examples of components that I've used throughout my website. I created this and will maintain it as a reference during development.<!--more--> Source can be in the github website [repository]({{ site.github.url }}/{{ site.github.website-repo }})

#### Link to Local Asset

[Link to a image]({% link /assets/images/article/website-kitchen-sink/arrows-1738067_1280_350.jpg %})[^link]

[^link]: [Jekyll resource linking](https://jekyllrb.com/docs/liquid/tags/#link){:target="_blank"}

#### Embed Image

![A bunch of colorful arrows]({% link /assets/images/article/website-kitchen-sink/arrows-1738067_1280_350.jpg %}){:class="img-responsive" width="100%"}

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
{% include snippets/quote.html quote=_quote quote_by="John Romero" %}

#### Embed a Tweet

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">1969:<br>-what&#39;re you doing with that 2KB of RAM?<br>-sending people to the moon<br><br>2017:<br>-what&#39;re you doing with that 1.5GB of RAM?<br>-running Slack</p>&mdash; I Am Devloper (@iamdevloper) <a href="https://twitter.com/iamdevloper/status/926458505355235328?ref_src=twsrc%5Etfw">November 3, 2017</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

#### Gist

[Gist source](https://github.com/jekyll/jekyll-gist){:target="_blank"}

{% gist 0dc4c027aeb67bab75de4e44f75d53ee %}