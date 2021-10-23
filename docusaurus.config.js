// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('./src/theme/prism-ayu-light');
const darkCodeTheme = require('./src/theme/prism-ayu-dark');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Jacy',
    tagline: 'DevBook',
    url: 'https://jacylang.github.io',
    baseUrl: '/dev-book/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'jacylang',
    projectName: 'dev-book',
    trailingSlash: false,

    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/jacylang/dev-book/edit/master',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.scss'),
                },
            }),
        ],
    ],

    plugins: ['docusaurus-plugin-sass'],

    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    themeConfig: ({
        colorMode: {
            respectPrefersColorScheme: true,
            switchConfig: {
                darkIcon: '🌙',
                lightIcon: '☀️',
            },
        },
        navbar: {
            title: 'Jacy DevBook',
            hideOnScroll: true,
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'doc',
                    docId: 'index',
                    position: 'left',
                    label: 'Docs',
                },
                {
                    to: '/user-guide',
                    label: 'User Guide',
                    position: 'left'
                },
                {
                    href: 'https://github.com/jacylang/jacy',
                    label: 'Jacy on GitHub',
                    position: 'right',
                },
                {
                    href: 'https://github.com/jacylang/dev-book',
                    label: 'DevBook GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Docs',
                            to: '/docs/index',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/jacy',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Jacy DevBook, JacyLang team.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    }),
};

module.exports = config;
