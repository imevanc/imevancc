import { ArticleLayout } from "../ArticleLayout";

const meta = {
  date: "2023-05-06",
  title: "Make your git log look better using a single command",
};

export const BeautifyGitLog: React.FC = () => (
  <ArticleLayout meta={meta}>
    <div className="max-w-2xl">
      <h1 className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
        👋 Introduction
      </h1>
      <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
        Are you tired of sifting through a bland and confusing Git commit
        history? There's a simple yet powerful command that can give your Git
        log a much-needed makeover, making it both visually appealing and
        informative.
      </p>
    </div>
    <div className="max-w-2xl">
      <h1 className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
        🚀 Getting Started
      </h1>
      <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
        Add the following lines to your Git configuration file (usually located
        at ~/.gitconfig):
      </p>
      <pre>
        [alias]
        <br />
        {
          'gl = git log --color --graph --pretty=format:"%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset" --abbrev-commit --branches'
        }
      </pre>
      <br />
      <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
        Let's break down the command to understand its magic:
      </p>
      <ul className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
        <li>
          <span className="font-bold">color:</span> Infuses your Git log with
          vivid colors, making it pop.
        </li>
        <li>
          <span className="font-bold">graph:</span> Generates a graphical
          representation of branches and merges.
        </li>
        <li>
          <span className="font-bold">pretty=format:</span> Customizes the log's
          format to your liking.
        </li>
        <li>
          <span className="font-bold">%Cred%h%Creset:</span>
          Displays commit hash in red.
        </li>
        <li>
          <span className="font-bold">%s:</span> Displays the commit message.
        </li>
        <li>
          <span className="font-bold">%Cgreen(%cr):</span> Shows the commit's
          relative time in green.
        </li>
        <li>
          <span className="font-bold">{"%C(bold blue)<%an>%Creset:"}</span>
          Displays the author's name in bold blue.
        </li>
        <li>
          <span className="font-bold">abbrev-commit:</span> Shortens commit hash
          for a cleaner look.
        </li>
        <li>
          <span className="font-bold">branches:</span> Displays commits from all
          branches.
        </li>
      </ul>
      <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
        Upon running gl, your Git log will transform into an engaging visual
        journey. Each commit is highlighted with colors, and the log provides
        valuable insights like commit messages, author names, and relative
        times. The branching and merging patterns are more apparent, allowing
        you to follow your project's development path effortlessly.
      </p>
      <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
        This command is a game-changer, making your Git log not only
        aesthetically pleasing but also incredibly functional. Collaborate
        effectively, track changes efficiently, and understand your project's
        history at a glance.
      </p>
    </div>
    <div className="max-w-2xl">
      <h1 className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
        🏁 Conclusion
      </h1>
      <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
        Using the git log command with colourful formatting and visuals spruces
        up your commit history. It's a simple way to make your git log more
        organised and helpful, promoting better teamwork and project insight.
        Give it a whirl!
      </p>
      <span className="text-lg sm:text-xl font-semibold italic">Github:</span>{" "}
      <a href={"https://github.com/imevanc"}>@imevanc</a>
    </div>
  </ArticleLayout>
);
