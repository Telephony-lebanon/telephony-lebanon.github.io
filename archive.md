---
permalink: /archive/
title: Archive
---

{% for post in site.posts %}
 {% assign thisyear = post.date | date: "%B %Y" %}
 {% assign prevyear = post.previous.date | date: "%B %Y" %}
 {% assign counter = counter | plus: 1 %}

  {% if thisyear != prevyear %}
<h2 id="{{ post.date | date:"%B %Y" }}" class="archive"><a>{{ thisyear }}</a></h2>

<ul>
  {% assign fli = forloop.index | minus: counter %}
  {% for post2 in site.posts limit: counter offset: fli %} 
    <li><a href="{{ post2.url }}">{{ post2.title }}</a><br> 
    <time>{{ post2.date | date: "%a %e %b %Y"}}</time> 
    </li>
  {% endfor %}
</ul>   
 {% assign counter = 0 %}
  {% endif %}
{% endfor %}