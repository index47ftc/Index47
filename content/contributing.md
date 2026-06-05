## Contributing via Github's Web-based Editor

(Best for quick contributions)

1. **Fork the Repo** at [the repository](https://github.com/Index47FTC/Index47.)

![fork](image.png)

2. Go to your new fork on github and navigate to the `content` folder 
    - You can also press `.` on your keyboard to open a web-based editor
3. **Make your changes**
    - You can edit descriptions in the `terms` folder.
    - You can create a new term by creating a new file in the `terms` folder.
    - File names should be `flatcase.md` (all lowercase, no spaces or delimeters).
    - Add the following to the top of a new file:

    ```yaml
    ---
    title: Title Here
    alises: [alternative1, alternative2]
    # the last line is optional
    # you can put queries other than the title that will result in this page.
    ---
    ```

4. **Commit your changes**
5. **Add yourself** to `content/contributors.yaml`. You deserve it!
6. **Create a new pull request**
7. **Thank you for contributing** to Index47! Please wait for your changes to be reviewed.

## Contributing via Local Clone

(Best for full previews and regular contributions)

### Prerequisites

- Have [Git](https://git-scm.org) installed.
- Have [Bun](https://bun.sh) installed.
- Have a code editor/IDE installed. [Visual Studio Code](https://code.visualstudio.com) or [Webstorm](https://www.jetbrains.com/webstorm/) is recommended.
- Feel free to ask developers in the [discord](https://discord.gg/e7F3Ku7Xuu) for help with these steps.
- Usages of AI for content is strictly prohibited and will not be accepted

### Steps

1.  **Fork the repo** at [the repository](https://github.com/Index47FTC/Index47.)
2.  **Clone your fork** in your code editor/IDE of choice or by running `git clone https://github.com/YOUR_USERNAME/Index47.git`.
3.  **Open the repo** in your code editor/IDE of choice.
4.  **Install the dependencies** by running `bun install`.
5.  **Preview the website** locally by running `bun run dev`.
6.  **Make your changes** in the `content` folder.
    - You can edit descriptions in the `terms` folder.
    - You can create a new term by creating a new file in the `terms` folder.
    - File names should be `flatcase.md` (all lowercase, no spaces or delimeters).
    - Add the following to the top of a new file:

    ```yaml
    ---
    title: Title Here
    alises: [alternative1, alternative2]
    # the last line is optional
    # you can put queries other than the title that will result in this page.
    ---
    ```

7.  **Commit your changes** in your code editor/IDE or by running `git commit`.
8.  **Push your changes** in your code editor/IDE or by running `git push`.
9.  **Add yourself** to `content/contributors.yaml`. You deserve it!
10. **Create a pull request** at [the repository](https://github.com/Index47FTC/Index47/compare)
11. **Thank you for contributing** to Index47! Please wait for your changes to be reviewed.


See how to format with Markdown here: https://www.markdownguide.org/cheat-sheet/