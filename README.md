# Personal website

A static first version in Deepak Pathak's compact homepage format, with industry work first. Layout and code are original; the reference is credited in the footer. No framework or build dependency is needed.

## Preview

From the repository root, run `make site`, then visit <http://localhost:8000>. You can also open `website/index.html` directly. Research entries show non-clickable animated GIFs alongside the papers. Full videos open through ordinary text links. Reduced-motion preferences select static previews instead.

## Editing

- `index.html`: biography, experience, publications, and links. Each major work has an anchor (`#tuesday-labs`, `#arena`, `#guts`, `#star`) for direct sharing.
- `styles.css`: responsive layout and typography.
- `assets/portrait-square.png`: square portrait prepared from the user-supplied photo using the image-editing tool; used in the profile and social preview. The earlier `assets/nikhil.jpg` is retained as an unused original.
- `assets/guts.jpg`, `assets/star.jpg`: thumbnails from the user's YouTube videos `9ZgbL5IEkAE` and `Fs1lv4y6Nq8`.
- `assets/Nikhil_Angad_Bakshi_Public_Resume.pdf`: website resume with the private phone contact removed before rendering. Build with `make site-assets`.
- `assets/Nikhil_Angad_Bakshi_Resume.pdf`: compatibility copy of the same public PDF so the previously shared URL also serves a phone-free document.

Employment claims follow `resume.html`. The quantitative Arena benchmark, ambiguous publication count, ISER year, and field-test area are omitted pending the checks in `presence/website-plan.md`. The industry entries use text until public demo media is supplied. The hosting target is https://bakshienator77.github.io/.

## GitHub Pages publishing

The contents of this directory are published at <https://bakshienator77.github.io/> from the root of the public `bakshienator77/bakshienator77.github.io` repository on its `main` branch. GitHub Pages rebuilds after pushes to that branch.

To update, run `make site-assets` in the resume repository, copy this directory's contents into a checkout of the website repository, review the diff, commit, and push. Include both generated resume PDFs, even though they are ignored in the resume builder repository. Never copy the root private resume PDF into the website. Do not copy the full resume builder repository.

Canonical URL, social-preview metadata, `robots.txt`, and `sitemap.xml` use the free GitHub Pages address. Search Console ownership verification can be added separately.

## Research media

- `assets/guts-demo.mp4`: 16-second GUTS field clip from the owner's `call of duty icra 2023.mp4`, encoded as H.264 at 854×480 without audio (about 2.7 MB); originals are unchanged.
- `assets/guts-demo-poster.jpg`: frame from that clip at 12 seconds.
- `assets/icra-2023-presentation.jpeg`: the owner's photo presenting GUTS at ICRA 2023, used as the header banner with a caption and full-size link. The responsive CSS crops the display; the image file is unchanged.

The GUTS GIF is derived from the supplied field clip (360×202, 10 fps). The STAR GIF is the unchanged `images/target-detection-example.gif` from the STAR repository's `master` branch. The earlier MP4 and thumbnails are retained as source/fallback assets. There are no inline video players or expanding previews.
