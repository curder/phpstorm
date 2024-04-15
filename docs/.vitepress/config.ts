import {defineConfig} from 'vitepress'
import sidebar from "./sidebar";

export default defineConfig({
    lang: "zh-CN",
    base: "/phpstorm/",
    title: "PhpStorm Skill",
    description: "PhpStorm Skill, Jetbrains, Editor",
    lastUpdated: true,
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        // logo: "https://www.apple.com.cn/autopush/ww/search/modules/finalcutpro/image__do2eec8w8n42_large_2x.jpg",
        siteTitle: "PhpStorm",
        outline: {
            label: '章节导航'
        },
        lastUpdated: {
            text: "最后更新时间",
        },
        search: {
            provider: 'local'
        },
        docFooter: {
            prev: "上一篇",
            next: "下一篇",
        },
        editLink: {
            pattern: "https://github.com/curder/phpstorm/edit/master/docs/:path",
            text: '编辑它'
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/curder/phpstorm'}
        ],
        nav: nav(),
        sidebar: {
            "/guide": sidebar,
        }
    },
    head: [
        [
            'script',
            // @ts-ignore
            {'async': true, 'src': 'https://www.googletagmanager.com/gtag/js?id=G-S6RB4D9N5L'}
        ],
        [
            'script',
            {},
            "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-S6RB4D9N5L');"
        ]
    ],
});

function nav() {
    return [
        {text: 'Guide', link: '/guide/getting-started', activeMatch: '/guide/'},
    ];
}
