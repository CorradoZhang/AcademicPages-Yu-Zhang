# Blog Structure

The top-level `blog.html` page is the public blog index. Each topic or note
series lives in its own directory under `blogs/`:

```text
blogs/
|-- README.md
`-- <series-slug>/
    |-- index.html
    |-- assets/
    |   `-- <images-and-downloads>
    `-- posts/
        `-- <post-slug>.html
```

## Conventions

- Use lowercase kebab-case names for series, posts, and new assets.
- Keep a series landing page at `blogs/<series-slug>/index.html`.
- Put individual articles in the series `posts/` directory.
- Put images and downloads shared by the series in its `assets/` directory.
- Link to each public series from the root `blog.html` page.
- Set `data-base-path="../../"` on series pages and
  `data-base-path="../../../"` on post pages so shared navigation resolves
  from any directory depth.
