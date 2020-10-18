# Contributing to _World-Countries-Capitals_

We welcome bug reports, feature requests and pull requests. If you want to help us,
please follow these guidelines, in order to avoid redundant work.

Please take a moment and read this document in order to make the contribution process easy
and effective for everyone involved.

Following these guidelines helps to communicate that you respect the time of the developers managing
and developing this open source project. In return, they should reciprocate that respect
in addressing your issue or assessing patches and features.

Thank you to everyone who contributes! 🙌

---

## Commenting

When commenting, keep a civil tone and stay on topic. Do not:
- Ask for _support_ using this library
- Post _"+1"_ or _"I agree"_ type of comments - use the emojis instead

Asking for status of an issues can be discouraged.
Unless someone is assigned to an issue or has explicitly said that the work is in progress,
most likely that means no one is working on it.
We do not ignore any issue but it may not be a top priority for us at that specific moment.

❗️ Keep the discussion on topic and respect other opinions

---

## Creating Issues

The [issue tracker][URL_GH_ISSUES] is the preferred channel for bug reports, features requests
and submitting pull requests. But before you create one, please respect the following restrictions:
- Be sure [documentation][DOC_README] doesn't resolve your question/problem
- **DO NOT** use the issue tracker to ask for _support_ (use [Stack Overflow][URL_SO] instead)

### Bug report

_Bug_ is a demonstrable problem that is caused by the code in the repository.
Good _bug reports_ are extremely helpful - thank you!

Guidelines for _bug reports_:
1. **Use the GitHub issue search** to check whether the issue has been reported already
2. **Check if issue occur on the newest version** - try to reproduce it using latest `master` branch
in the repository
3. **Isolate the problem** and share with us by creating [reduced test case][URL_REDUCED_TEST_CASE]
and a live example

A good _bug report_ should be clear so no one is forced to chase you up for more information.
Try to be as detailed as possible in your report. Here are a few questions that may help you:
- What is your environment?
- What browser(s) and OS experience the problem?
- What steps will reproduce the issue?
- What is current (incorrect) behaviour?
- What is expected behaviour that should be the outcome?

All these details will help people fix any potential _bugs_.

Sample _"template"_ for _bug report_:
> ## Description
> General description of an issue that may direct people what the problem is
>
> ## Environment
> - Library: 1.2.3
> - Node: 1.2.3
> - Browser: XYZ 1.2.3
> - Operating System: XYZ 123
>
> ## Current behaviour
> Description of current behaviour that seems to be incorrect
>
> ## Expected behaviour
> Description of expected behaviour that should happen
>
> ## Steps to reproduce
> 1. First step description
> 2. Second step description
> 3. Other steps...
>
> ## Reduced test case preview
> <URL_TO_REDUCED_TEST_CASE>
>
> ## Additional notes
> - Any information you want to share that might be relevant to the issue being reported
> - This might include some lines of code that you have identified as causing the bug
> - It can also contain potential solutions (and your opinions on their merits)

### Feature request

Feature requests are always welcome! But keep in mind it might take a moment to find out
whether your idea fits with the scope and aims of the project.

It's up to you to make a strong case to convince [core team][DOC_CORE_TEAM] of the merits
of this feature. Describe what would you like to add and why.
Provide as much detail and context as possible to make it clear and avoid confusion.

If you want to request multiple features that aren't directly related
then please create one issue per feature.

---

## Creating Pull Request

Pull requests are fantastic - they let our project grow and improve in case of features and quality!
But to manage this properly, we have few rules for them:
- **Ask first before embarking on any significant pull request**<br>
  Otherwise you take risk spending time working on something that might not be added/merged
- Pull Requests **should remain focused in scope** and **avoid containing unrelated commits.**<br>
  Otherwise it might be hard to understand changes in _code review_
- **Adhere to coding conventions used throughout a project** (indentation, accurate comments, etc.)
- Be sure that current funcionality still works properly (by writing/checking tests)

Adhering to the following process is the best way to get your work included in the project:
1. [Fork the project][URL_GH_FORK]
2. Clone your fork
  ```
  git clone https://github.com/<USER_NAME>/world-countries-capitals.git
  ```
3. Configure the remotes
  ```
  git remote add upstream https://github.com/bhatvikrant/world-countries-capitals.git
  ```
4. Get latest changes from upstream (in case you cloned _some time ago_)
  ```
  git pull upstream master
  ```
5. Create branch to add your feature, change, or fix
  ```
  git checkout -b <BRANCH_NAME>
  ```
6. Commit your changes in small chunks (so it is easier to revert some unnecessary parts)
7. Locally merge the upstream development branch into your branch
  ```
  git pull upstream master
  ```
8. Push your branch to your fork
  ```
  git push origin <BRANCH_NAME>
  ```
9. [Open a Pull Request][URL_GH_NEW_PULL_REQUEST] with clear title and description

❗️ Remember to run tests before making _Pull Request_. You can do that using `npm test` command.
It ensures that all current methods are working properly.

Sample _"template"_ for _pull request_:
> ## General
> **Reference:** <ISSUE_ID>
> <br>
> **Description:**
> <br>
> Description of an _Pull Request_ that may direct people what was done
>
> ## Types of changes
> - [ ] Bug fix (non-breaking change which fixes an issue)
> - [ ] New feature (non-breaking change which adds functionality)
> - [ ] Breaking change (fix or feature that would cause existing functionality to change)
>
> ## Checklist
> - [ ] I have updated the documentation accordingly
> - [ ] I have added tests to cover my changes
> - [ ] All new and existing tests passed
>
> ## Additional notes
> Any information that you found out and you want to share (might not be connected directly to _PR_)

❗️ By submitting _Pull Request_ you agree to allow the project owners to license your work
under the terms of the [MIT License][DOC_LICENSE].

---

[DOC_README]: ../README.md
[DOC_CORE_TEAM]: ../README.md#core-team
[DOC_LICENSE]: ../README.md#license
[URL_GH_ISSUES]: https://github.com/asdsad/asdasd/issues
[URL_GH_FORK]: https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo
[URL_GH_NEW_PULL_REQUEST]: https://github.com/sthiepaan/world-countries-capitals/compare
[URL_SO]: https://stackoverflow.com
[URL_REDUCED_TEST_CASE]: https://css-tricks.com/reduced-test-cases/
