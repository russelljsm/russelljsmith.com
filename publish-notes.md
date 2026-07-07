# Publishing Notes

This project uses an alternate local Git metadata folder because `.git/` is locked by the desktop workspace.

Use this Git pattern from the website folder:

```powershell
& "C:\Users\Russell\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe" --git-dir ".site-git" --work-tree "." status
```

For GitHub Pages, the repository should publish from the root of the default branch.

Repository target:

```text
https://github.com/russelljsm/russelljsmith.com
```

The custom domain file is already present:

```text
CNAME -> russelljsmith.com
```

After the repository is live, set the GitHub Pages custom domain to `russelljsmith.com`, then point GoDaddy DNS to GitHub Pages.
