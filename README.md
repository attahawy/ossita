# Ossita

Static GitHub Pages website for Ossita kids furniture.

## Publish on GitHub Pages

1. Push this repository to `main`.
2. In GitHub, open **Settings > Pages**.
3. Set **Source** to **Deploy from a branch**.
4. Set the branch to `main` and folder to `/root`.
5. Keep the custom domain as `ossita.com`. The `CNAME` file in this repo preserves that setting.
6. Configure DNS for `ossita.com` at the domain provider using GitHub Pages' current custom-domain instructions.

## Local Apache

The root `.htaccess` sets `DirectoryIndex index.html` so folder URLs such as `/care/` serve `/care/index.html`.
Make sure Apache has `AllowOverride` enabled for this project directory.

## Files

- `index.html` is the home page.
- `pieces.html`, `rooms.html`, `collections.html`, `care.html`, `help.html`, `institutions.html`, and `contact.html` are the top-level navigation pages.
- `pieces/`, `rooms/`, `collections/`, `care/`, `help/`, `institutions/`, and `contact/` provide the clean URLs for those pages.
- `products/<slug>/` provides clean URLs for product pages, while the matching `products/<slug>.html` files remain for old links.
- `styles.css` contains all responsive styling.
- `CNAME` configures the custom domain for GitHub Pages.
- `assets/images/` contains generated website imagery for the hero and collection cards.
