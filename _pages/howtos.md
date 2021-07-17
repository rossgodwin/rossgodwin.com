---
layout: page
title: How Tos
permalink: /howtos
pagination:
  enabled: true
  collection: howtos
  sort_field: 'date'
  sort_reverse: true
sitemap: false
---

{% capture _header_content %}
	<p>
		{{ page.description }}
	</p>
{% endcapture %}
{% include snippets/layout/page/page-content-header.html title='How Tos' content=_header_content %}

<section class="pf-page-content-main">
	{% include snippets/layout/articles/articles-paging-list.html %}
</section>