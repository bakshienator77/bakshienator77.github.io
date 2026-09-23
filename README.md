# Nikhil Angad Bakshi — personal website

Live at <https://bakshienator77.github.io/>. This repository is the sole source for the static website; GitHub Pages publishes the root of `main` after each push.

## Preview and edit

Run `make preview`, then open <http://127.0.0.1:8000/>. Edit files here directly and refresh the browser. No build or package installation is needed.

- `index.html`: biography, industry work, publications, highlights, and education.
- `styles.css`: background colour, portrait border, typography, and responsive layout.
- `contact.js`: scrambled email with an explicit unscramble button; revealed address is non-clickable.
- `assets/portrait-night-square.png`: current portrait and social preview.
- `assets/logos/`: company and university SVGs; sources recorded in `SOURCES.md`.
- `assets/guts-demo.gif` and `assets/star-paired.gif`: research previews. STAR combines both views into one synchronized animation. Reduced-motion preferences use static images; full videos remain text links.
- `assets/icra-2023-presentation.jpeg`: full-width banner source, cropped and padded through CSS.

After editing `styles.css` or `contact.js`, update the corresponding `?v=` value in `index.html` to bust browser caches when publishing. Review changes, commit, and push from this repository. Verify GitHub Pages has finished deploying before checking the live site.

## Public resume

The resume source and privacy filter live in the separate sibling `../resume` repository. To refresh the website PDFs:

```sh
make -C ../resume export-public-resume
```

Review and commit both generated PDFs here:

- `assets/Nikhil_Angad_Bakshi_Public_Resume.pdf`
- `assets/Nikhil_Angad_Bakshi_Resume.pdf` (legacy URL, identical phone-free content)

Never copy the private PDF from the resume repository root. The export command does not deploy automatically.

## Local drafts

`.local/` is ignored by Git and should not be published. It holds historical planning notes, profile/LinkedIn drafts, and unused logo originals from the repository split. These notes may describe superseded designs. The profile README's source of truth is the separate `bakshienator77/bakshienator77` repository.

The layout is inspired by Deepak Pathak's homepage and credited in the footer.
