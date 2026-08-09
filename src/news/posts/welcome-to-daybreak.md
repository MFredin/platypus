---
layout: layouts/post.njk
title: Welcome to Daybreak
date: 2026-08-09
permalink: "/news/{{ page.fileSlug }}/"
excerpt: "The Daybreak website is live. Here's how the news feed works."
---
This is a placeholder post. Replace or delete it once real announcements start
flowing.

## Adding a new post

Drop a new Markdown file into `src/news/posts/`, for example
`fleet-week-recap.md`, with front matter like this:

{% raw %}
```md
---
layout: layouts/post.njk
title: Fleet Week Recap
date: 2026-08-15
permalink: "/news/{{ page.fileSlug }}/"
excerpt: "Short one-line summary shown in the news list."
---
Your announcement content goes here, in normal Markdown.
```
{% endraw %}

Posts are sorted newest-first automatically by the `date` field — no need to
touch any layout or listing code.
