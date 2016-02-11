---
title: Sitemap
permalink: /sitemap/
---

<h2>Site Map</h2>
<ul>
    {% for page in site.pages %}
        {% unless page.exclude_from_nav %}
            {% if page.title %}
                <li><a class="text-center" href="{{ page.url | prepend: site.baseurl }}">{{ page.title }}</a></li>
            {% endif %}
        {% endunless %}
    {% endfor %}
</ul>