# Contributing Guidelines

*Pull requests, bug reports, and all other forms of contribution are welcomed and highly encouraged!* :octocat:

## Contents

- [Code of Conduct](#book-code-of-conduct)
- [Asking Questions](#bulb-asking-questions)
- [Opening an Issue](#inbox_tray-opening-an-issue)
  - [Reporting Security Issues](#lock-reporting-security-issues)
  - [Bug Reports and Other Issues](#beetle-bug-reports-and-other-issues)
- [Feature Requests](#love_letter-feature-requests)
- [Triaging Issues](#mag-triaging-issues)
- [Submitting Pull Requests](#repeat-submitting-pull-requests)
- [Writing Commit Messages](#memo-writing-commit-messages)
- [Code Review](#white_check_mark-code-review)
- [Coding Style](#nail_care-coding-style)
- [Certificate of Origin](#medal_sports-certificate-of-origin)
- [Credits](#pray-credits)

> This guide sets clear expectations for everyone involved in the project so that we can improve it together while creating a welcoming space for everyone to participate. Following these guidelines will ensure a positive experience for contributors and maintainers.

## :book: Code of Conduct

Please review our [Code of Conduct](https://github.com/manvil95/BestPracticeExtensionSF/blob/main/CODE_OF_CONDUCT.md). It is in effect at all times, and we expect it to be honored by everyone who contributes to this project.

## :bulb: Asking Questions

If you have questions, first check our documentation and FAQs. If you cannot find an answer, feel free to open an issue in the repository.

## :inbox_tray: Opening an Issue

Before [creating an issue](https://help.github.com/en/github/managing-your-work-on-github/creating-an-issue), ensure you are using the latest version of the project. If the issue persists:

1. **Check existing issues** to avoid duplicates.
2. Provide a detailed report, including:
   - Steps to reproduce the issue.
   - Relevant error messages or screenshots.
   - The version of the extension and browser.

### :lock: Reporting Security Issues

If you discover a security vulnerability, please do not open a public issue. Instead, contact us directly following our [Security Policy](https://github.com/manvil95/BestPracticeExtensionSF/blob/main/SECURITY.md).

### :beetle: Bug Reports and Other Issues

A great way to contribute to the project is to send a detailed issue when you encounter a problem. We always appreciate a well-written, thorough bug report. :v:

In short, since you are most likely a developer, **provide a ticket that you would like to receive**.


- **Do not open a duplicate issue!** Search through existing issues to see if your issue has previously been reported. If your issue exists, comment with any additional information you have. You may simply note "I have this problem too", which helps prioritize the most common problems and requests. 

- **Prefer using [reactions](https://github.blog/2016-03-10-add-reactions-to-pull-requests-issues-and-comments/)**, not comments, if you simply want to "+1" an existing issue.

- **Fully complete the provided issue template.** The bug report template requests all the information we need to quickly and efficiently address your issue. Be clear, concise, and descriptive. Provide as much information as you can, including steps to reproduce, stack traces, compiler errors, library versions, OS versions, and screenshots (if applicable).

- **Use [GitHub-flavored Markdown](https://help.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax).** Especially put code blocks and console outputs in backticks (```). This improves readability.

## :love_letter: Feature Requests

Feature requests are welcome! However, not all requests may be accepted to avoid feature creep. If your request is accepted, we cannot guarantee a timeline for implementation, but you are welcome to submit a pull request.

- **Check for existing feature requests** before opening a new one.
- Provide a clear description of the proposed feature and how it relates to existing functionality.

## :mag: Triaging Issues

You can help triage issues by reproducing bug reports or asking for additional information, such as version numbers or reproduction steps. Your assistance is greatly appreciated!

## :repeat: Submitting Pull Requests

We **love** pull requests! Follow these guidelines to ensure a smooth review process:

1. **One change per pull request**: Each pull request should address a single issue or feature.
2. **Coordinate large changes**: For significant changes, open an issue to discuss your approach with maintainers.
3. **Follow the existing coding style**: Keep your code consistent with the project's conventions.
4. **Include tests**: Add unit tests or UI tests for your changes when possible.
5. **Update documentation**: If your changes affect functionality, update the relevant documentation.
6. **Resolve merge conflicts**: Ensure your branch is up-to-date with the main branch before submitting.

## :memo: Writing Commit Messages

A good commit message is essential for maintaining a clear project history. Follow these guidelines:

1. Separate the subject from the body with a blank line.
2. Limit the subject line to 50 characters.
3. Use the imperative mood in the subject line (e.g., "Add support for X").
4. Explain **why** the change was made, not just **what** was changed.
5. Include the issue number if applicable (e.g., "Resolves: #123").

Example commit message:

```md
[Feature] Add support for dynamic HTML generation

This commit introduces functionality to generate dynamic HTML files
based on user-provided input. It includes:

- JSON file processing.
- Table generation with placeholders like <span data-bu>.
- Automatic file download.

Resolves: #45
```

## :white_check_mark: Code Review

- **Review the code, not the author**: Provide constructive feedback and explain your suggestions.
- **Be respectful**: Remember that everyone is here to learn and improve.
- **Prioritize clarity**: Code should be easy to understand for future contributors.

## :nail_care: Coding Style

Consistency is key. Follow the existing style and conventions in the project. For example:

- Use **camelCase** for variable and method names.
- Use **SNAKE_CASE** for constants.
- Keep the code clean and well-documented.

When possible, style and formatting will be enforced with a linter.

## :medal_sports: Certificate of Origin

By contributing to this project, you certify that:

1. The contribution was created by you or you have the right to submit it under the project's license.
2. The contribution does not infringe on the rights of third parties.
3. You understand that your contribution will be publicly available and maintained indefinitely.

## :pray: Credits

This project is made possible thanks to all contributors. Feel free to adopt this guide for your own projects.

Thank you for contributing! :black_heart: