# ZodURL

## Kneel before your shortened URL

A short URL manager built with [Eleventy](https://www.11ty.dev/), a JavaScript/Node based Static Site Generator.


## How does it work?

First, create a new markdown file with `.md` extension. The name of the file will be unique identifier for the shortened URL. E.g., a filename of `mxy.md` will become `http://example.com/mxy`. 

In the markdown file, only list one item of metadata, which is the URL and its value.

```markdown
---
url: https://en.wikipedia.org/wiki/Mister_Mxyzptlk
---
```

During the build process, a series of files will be updated to allow for the shortened URL to redirect:

- Apache HTTP server with [Alias module](https://httpd.apache.org/docs/current/en/mod/mod_alias.html) in a `.htaccess` file
- Apache HTTP server with [Rewrite module](https://httpd.apache.org/docs/current/en/mod/mod_rewrite.html) (less efficient) in the same `.htaccess` file
- [Netlify](https://netlify.com/) hosting with [redirects](https://docs.netlify.com/routing/redirects/) in a `_redirects` file
- HTML pages with both [HTML redirect](https://css-tricks.com/redirect-web-page/#article-header-id-1) (`<meta>` tag) and [JavaScript Redirect](https://css-tricks.com/redirect-web-page/#article-header-id-2). This method is only meant as a last resort, only there if previous formats don't work. Your HTTP server needs to be able to respond to [https://example.com>/**myx**](https://example.com/myx) with this actual ressource: [https://example.com/**myx/index.html**](https://example.com/myx/index.html)


## Copyright

Thanks to [Nicolas Hoizey](https://github.com/teleject/zodurl/blob/master/LICENSE.md) for creating 1ty.


