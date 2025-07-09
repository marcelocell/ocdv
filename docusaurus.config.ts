import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const contextPath: string = '/ocdv/';

const config: Config = {
  title: 'O Código Dá 20',
  tagline: 'Reflexões e práticas para quem vive na lógica e sonha em alto nível.',
  favicon: contextPath + 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://marcelocell.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: contextPath,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'marcelocell', // Usually your GitHub org/user name.
  projectName: 'ocdv', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        pages: false,
        svgr: false,
        gtag: false,
        googleTagManager: false,
        sitemap: {},
        blog: {
          blogTitle: '',
          blogDescription: 'Reflexões e práticas para quem vive na lógica e sonha em alto nível.',
          postsPerPage: 20,
          blogSidebarTitle: 'Últimas postagens',
          blogSidebarCount: 20,
          showReadingTime: true,
          routeBasePath: '/',
          archiveBasePath: 'arquivo',
          authorsBasePath: 'autores',
          blogListComponent: '@theme/BlogListPage',
          feedOptions: {
            type: ['rss', 'atom', 'json'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: contextPath + 'img/social-card.jpg',
    navbar: {
      title: 'O Código Dá 20',
      hideOnScroll: true,
      style: 'dark',
      items: [
        {
          href: 'https://www.linkedin.com/in/marceloandreia/',
          label: 'LinkedIn',
          position: 'right',
        },
//         {
//           type: 'localeDropdown',
//           position: 'right',
//         },
      ],
    },
    footer: {
      logo: {
        alt: 'Logo OCDV',
        src: contextPath + 'img/ocdv-logo.jpg',
        height: 200,
        width: 200,
      },
      style: 'dark',
      links: [
        {
          html: ' ',
        },
        {
          label: 'Arquivo',
          to: 'arquivo',
        },
        {
          label: 'Pagina Inicial',
          to: '/',
        },
        {
          label: 'Sobre Mim',
          to: 'autores/marcelojr',
        },
        {
          label: 'Tags',
          to: 'tags',
        },
        {
          label: 'Github',
          href: 'https://www.github.com/marcelocell/',
        },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/marceloandreia/',
        },
        {
          html: ' ',
        },
      ],
      copyright: `Licenciado sob a <a href="https://creativecommons.org/licenses/by/4.0/deed.pt-br">licença CC BY 4.0</a> ${new Date().getFullYear()} | OCDV - O Código Dá 20. <br>Construído com Docusaurus.`,
    },
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java'],
    },
    blog : {
      sidebar: {
        groupByYear: false,
      },
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    metadata: [
      {name: 'keywords', content: 'tech, technology, tecnologia, tec, desenvolvimento, programação, programming, developer, software, java'},
    ],
  } satisfies Preset.ThemeConfig,
  titleDelimiter: "-",
};

export default config;
