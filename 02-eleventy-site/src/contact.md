---
layout: default
title: Prerendered Sites
---

# Build Websites Like It’s 2020!

This website was generated using [11ty](https://11ty.dev).

Everyone come to Jason’s party!

<form action="/.netlify/functions/contact" method="POST">
    <label for="name">Name</label>
    <input id="name" name="name" type="text" />
    <label for="email">Email</label>
    <input id="email" name="email" type="email" />
    <label for="comment">Comment</label>
    <textarea id="comment" name="comment"></textarea>
    <input type="hidden" name="page" value="{{ page.url }}" />
    <button type="submit">Post Comment</button>
</form>