# Contributing <!-- omit in toc -->

First off, thanks for taking the time to contribute! ❤️

All types of contributions are encouraged and valued, whether you want to
suggest enhancements, report issues, or submit pull requests. See the
[Table of Contents](#table-of-contents-) for different ways to help and details
about how this project handles them. Please make sure to read the relevant
section before making your contribution. It will make it a lot easier for the
maintainers and smooth out the experience for all involved. The community looks
forward to your contributions. 🎉

> And if you like the project, but just don't have time to contribute, that's
> fine. There are other easy ways to support the project and show your
> appreciation which are awesome too!
>
> - Star it
> - Post about it
> - Mention it to friends and colleagues

## Table of Contents <!-- omit in toc -->

- [I Have a Question](#i-have-a-question)
- [I Want To Contribute](#i-want-to-contribute)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)
- [Your First Code Contribution](#your-first-code-contribution)
- [Styleguides](#styleguides)
- [Commit Messages](#commit-messages)

## I Have a Question

Before you ask a question, it is best to search for existing
[issues](https://github.com/lewxdev/vscode-glyph/issues) that might help you. In
case you have found a suitable issue and still need clarification, you can write
your question in this issue. It is also advisable to search the internet for
answers first.

If you then still feel the need to ask a question and need clarification, open a
[new issue](https://github.com/lewxdev/vscode-glyph/issues/new) and provide as
much context as you can about what you're running into.

## I Want To Contribute

> **Legal Notice**
>
> When contributing to this project, you must agree that you have authored 100%
> of the content, that you have the necessary rights to the content and that the
> content you contribute may be provided under the project license.

### Reporting Bugs

#### Before Submitting a Bug Report <!-- omit in toc -->

A good bug report shouldn't leave others needing to chase you down for more
information. Therefore, investigate carefully, collect information and describe
the issue in detail in your report. Please complete the following steps in
advance to help us fix any potential bug as fast as possible.

- Make sure that you are using the latest version.
- Determine if your bug is really a bug and not an error on your side e.g. using
  incompatible environment versions (If you are looking for support, you might
  want to check [this section](#i-have-a-question)).
- To see if other users have experienced (and potentially already solved) the
  same issue you are having, check if there is not already a bug report existing
  for your bug or error in the
  [bug tracker](https://github.com/lewxdev/vscode-glyph/issues?q=label%3Abug).
- Also make sure to search the internet (including Stack Overflow) to see if
  users outside of the GitHub community have discussed the issue.
- Collect information about the bug:
  - Stack trace
  - OS, platform and version
  - Version of the project
  - Possibly your input and the output
  - Can you reliably reproduce the issue? And can you also reproduce it with
    older versions?

#### How Do I Submit a Good Bug Report? <!-- omit in toc -->

> You must never report security related issues, vulnerabilities or bugs
> including sensitive information to the issue tracker, or elsewhere in public.
> Instead sensitive bugs must be sent by email to
> [privacy@lewx.dev](mailto:privacy@lewx.dev).

Bugs are tracked as
[GitHub issues](https://github.com/lewxdev/vscode-glyph/issues).

- Open a
  [new issue](https://github.com/lewxdev/vscode-glyph/issues/new?title=fix%3A%20%5BCHANGEME%5D&labels=bug).
- Explain the behavior you would expect and the actual behavior.
- Provide as much context as possible and describe the
  _reproduction steps_ that someone else can follow to recreate the issue on
  their own. This usually includes your code. For good bug reports you should
  isolate the problem and create a reduced test case.
- Provide the information you collected in the previous section.

Once it's filed:

- A maintainer will try to reproduce the issue with your provided steps. If
  there are no reproduction steps or no obvious way to reproduce the issue, the
  the issue will be marked as `needs-repro` and you will be asked for those
  steps. Bugs with the `needs-repro` tag will not be addressed until they are
  reproduced.
- If your issue is reproducible, it will be marked `needs-fix`, and the issue
  will be left to be [implemented by someone](#your-first-code-contribution).

### Suggesting Enhancements

This section guides you through submitting an enhancement,
**including new features and minor improvements to existing functionality**.
Following these guidelines will help maintainers and the community to understand
your suggestion and find related suggestions.

#### Before Submitting an Enhancement <!-- omit in toc -->

- Make sure that you are using the latest version.
- Perform
  [a search](https://github.com/lewxdev/vscode-glyph/issues?q=label%3Aenhancement)
  to see if the enhancement has already been suggested. If it has, add a comment
  to the existing issue instead of opening a new one.
- Find out whether your idea fits with the scope and aims of the project. It's
  up to you to make a strong case of the merits of this feature. Keep in mind
  that features should be useful to the _majority_ of our users and not just a
  small subset. If you're just targeting a minority of users, consider building
  your own solution :wink:.

#### How Do I Submit a Good Enhancement Suggestion? <!-- omit in toc -->

Enhancement are tracked as
[GitHub issues](https://github.com/lewxdev/vscode-glyph/issues).

- Open a
  [new issue](https://github.com/lewxdev/vscode-glyph/issues/new?title=feat%3A%20%5BCHANGEME%5D&labels=enhancement).
- Use a **clear and descriptive issue title** that's easily identifiable.
- Provide a **step-by-step description of the suggested enhancement** in as many
  details as possible.
- **Describe the current behavior** and
  **explain which behavior you expected to see instead** and why. At this point
  you can also tell which alternatives do not work for you.
- You may want to **include screenshots and animated GIFs** which help you
  demonstrate the steps or point out the part which the suggestion is related
  to. (You can use a tool like [LICEcap](https://www.cockos.com/licecap/) on
  macOS and Windows and [Silentcast](https://github.com/colinkeenan/silentcast)
  on Linux)
- **Explain why this enhancement would be useful** to most users. You may also
  want to point out the other projects that solved it better and which could
  serve as inspiration.

### Your First Code Contribution

To contribute code changes, please follow these steps:

1. Fork the repository.
1. Make your changes in a new branch.
1. Test your changes locally to ensure they work as expected (run the launch
   configuration by pressing with <kbd>F5</kbd>).
1. Submit a pull request with a clear description.

To add new icons to this icon theme, follow the steps below to access the design
file and submit your changes:

1. [Create an account](https://www.figma.com/signup) or
   [sign in](https://www.figma.com/login) to Figma.
1. Open the public [design file](https://www.figma.com/community/file/1350146481023811423)
   resource.
1. Add new icon components, use the existing icons as a reference for the design
   style and placement (this is important for generating the glyph font).
1. Download all exports to the `static/icons` directory.
1. Run the `build` script to generate the font and the icon themes (vscode tasks
   are predefined, so you can quickly test changes with <kbd>F5</kbd>).
1. Follow the steps mentioned above to submit a pull request with your changes.

## Styleguides

### Commit Messages

This project uses the [Conventional Commits](https://www.conventionalcommits.org/)
specification for commit messages. This convention makes it easier to understand
the history of the project and to automate the release process.

## Attribution

This guide is based on **contributing-gen**.
[Make your own](https://generator.contributing.md)!
