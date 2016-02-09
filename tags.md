---
permalink: /tags/
title: Tags
---

{% capture tags %}{% for tag in site.tags %}{{ tag[0] }}|{% endfor %}{% endcapture %}
{% assign sortedtags = tags | split:'|' | sort %}

{% for tag in sortedtags %}
<a name="{{ tag }}"></a>
<h3><a href="/tags/{{ tag }}/">{{ tag }}</a></h3> 
<ul>
    {% for post in site.tags[tag] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>
{% endfor %}