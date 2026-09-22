# Personal website

A static first version in Deepak Pathak's compact homepage format, with industry work first. Layout and code are original; the reference is credited in the footer. No framework or build dependency is needed.

## Preview

From the repository root, run `make site`, then visit <http://localhost:8000>. You can also open `website/index.html` directly. Video previews load a YouTube player only when clicked; without JavaScript they open YouTube normally.

## Editing

- `index.html`: biography, experience, publications, and links. Each major work has an anchor (`#tuesday-labs`, `#arena`, `#guts`, `#star`) for direct sharing.
- `styles.css`: responsive layout and typography.
- `site.js`: progressive enhancement for video playback.
- `assets/nikhil.jpg`: existing portrait copied from `Nikhil.jpg` without alteration.
- `assets/guts.jpg`, `assets/star.jpg`: thumbnails from the user's YouTube videos `9ZgbL5IEkAE` and `Fs1lv4y6Nq8`.
- `assets/Nikhil_Angad_Bakshi_Resume.pdf`: local resume snapshot. Refresh with `make site-assets` after updating the resume.

Employment claims follow `resume.html`. The quantitative Arena benchmark, ambiguous publication count, ISER year, and field-test area are omitted pending the checks in `presence/website-plan.md`. The industry entries use text until public demo media is supplied. The hosting target is https://bakshienator77.github.io/.

## GitHub Pages publishing

The contents of this directory are published at <https://bakshienator77.github.io/> from the root of the public `bakshienator77/bakshienator77.github.io` repository on its `main` branch. GitHub Pages rebuilds after pushes to that branch.

To update, run `make site-assets` in the resume repository, copy this directory's contents into a checkout of the website repository, review the diff, commit, and push. Include the generated `assets/Nikhil_Angad_Bakshi_Resume.pdf`, even though it is ignored in the resume builder repository. Do not copy the full resume builder repository.

Canonical URL, social-preview metadata, `robots.txt`, and `sitemap.xml` use the free GitHub Pages address. Search Console ownership verification can be added separately.
