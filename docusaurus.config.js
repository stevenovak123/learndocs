// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const lightTheme = themes.github;
const darkTheme = themes.dracula;

const organizationName = "stevenovak123";
const projectName = "learndocs";

// /** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Learn Docs",
  tagline: "All my learnings in a single website",
  favicon: "img/learndocs.ico",

  // Set the production url of your site here
  url: `https://${organizationName}.github.io`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: `/${projectName}/`,
  deploymentBranch: "main",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/stevenovak123/learndocs/tree/master",
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: ['@docusaurus/theme-live-codeblock'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/learn-docs-logo.png",
      navbar: {
        title: "Learn Docs",
        logo: {
          alt: "My Site Logo",
          src: "img/learn-docs-logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Tutorials",
          },
          {
            href: "https://github.com/stevenovak123/learndocs",
            label: "Repo",
            position: "right",
          },
        ],
      },
      footer: {
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorials",
                to: "/intro",
              },
            ],
          },
          {
            title: "Socials",
            items: [
              {
                label: "Instagram",
                href: "https://www.instagram.com/stevenovak123/",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/stevenovak123/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/stevenovak123",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Portfolio Website",
                href: "https://stevedsouza.vercel.app/",
              },
              {
                label: "GitHub Profile",
                href: "https://github.com/stevenovak123",
              },
            ],
          },
        ],
        copyright: ` ${new Date().getFullYear()} Steve Docs, Built with ❤ & Docusaurus.`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
        additionalLanguages: ["jsx"],
      },
      liveCodeBlock: {
        // Add any additional liveCodeBlock settings here
        // For example, you can specify the playgroundPosition or theme
        playgroundPosition: "bottom",
      },
    }),
};

module.exports = config;
