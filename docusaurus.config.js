/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GotaBit Docs',
  tagline: 'GotaBit',
  url: 'https://docs.gotabit.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://res.gotabit.io/svg/icon.svg',

  organizationName: 'gotabit', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/gotabit/docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    '@docusaurus/theme-live-codeblock'
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: 'OZGZTY4HPJ',
        apiKey: '28ad9e20411e65ab37491b4566220ee3',
        indexName: 'Gotabit',
        searchPagePath: 'search',
      },
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },
      prism: {
        theme: require('prism-react-renderer/themes/github'),
        darkTheme: require('prism-react-renderer/themes/dracula'),
      },
      navbar: {
        title: '',
        logo: {
          src: 'https://res.gotabit.io/svg/gotabit-docs.svg',
          srcDark: 'https://res.gotabit.io/svg/gotabit-docs-white.svg',
        },
        items: [
          {
            href: 'https://github.com/gotabit/docs',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
    }),
};

module.exports = config;
