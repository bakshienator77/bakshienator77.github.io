# Tagged versions

| Tag | Description | Snapshot |
| --- | --- | --- |
| `rlv1` | RL/ML-focused website and resume, 2026-09-30 | `7d2715e` |
| `sev1` | Software-focused website and resume before the 2026-09-30 revision | `0d60e68` |

Each tag preserves the website and both phone-free resume PDFs. Tags are fixed: add a new tag and table row for future approved versions instead of moving an existing tag.

Browse snapshots at <https://github.com/bakshienator77/bakshienator77.github.io/tags>.
Retrieve a PDF without changing the current checkout:

```sh
git show sev1:assets/Nikhil_Angad_Bakshi_Public_Resume.pdf > /tmp/Nikhil_Angad_Bakshi_sev1.pdf
```

The separate resume repository has matching tags for source files and build tooling. Its `docs/versions.md` records the source snapshot provenance. Private resume PDFs are not stored here.
