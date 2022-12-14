import {defineConfig} from 'vitepress'

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
        outlineTitle: "章节导航",
        lastUpdatedText: "最后更新时间",
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
            "/guide": sidebarGuide(),
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

function sidebarGuide() {
    return [
        {
            text: "",
            collapsible: true,
            collapsed: false,
            items: [
                {text: "为什么选择 PhpStorm", link: "/guide/what-is-phpstorm"},
                {text: "下载和安装", link: "/guide/getting-started"},
                {text: "插件管理", link: "/guide/plugins"},
                {text: "选择主题", link: "/guide/themes"},
                {text: "自定义字体", link: "/guide/custom-fonts"},
                {text: "极简配置", link: "/guide/minimalism.md"},
                {text: "常用快捷键", link: "/guide/some-important-keybindings"},
                {text: "自定义快捷方式", link: "/guide/configuring-keyboard-and-mouse-shortcuts"},
                {text: "项目文件", link: "/guide/project-files"},
                {text: "快速创建文件", link: "/guide/create-new-files-quickly"},
                {text: "自定义文件模版", link: "/guide/custom-file-templates"},
                {text: "代码片段", link: "/guide/live-templates"},
                {text: "自定义代码风格", link: "/guide/custom-formatting"},
                {text: "php-cs-fixer规范代码风格", link: "/guide/php-cs-fixer-processing-code-style"},
                {text: "Pint 规范 Laravel 代码风格", link: "/guide/laravel-pint"},
                {text: "自动 PSR-4 命名空间", link: "/guide/automatic-psr-4-namespacing"},
                {text: "重构变量", link: "/guide/refactoring-for-introduce-variable"},
                {text: "重构方法", link: "/guide/refactoring-for-introduce-method"},
                {text: "重构父子类方法转移", link: "/guide/refactoring-for-pull-members-up"},
                {text: "重构接口", link: "/guide/refactoring-for-extract-interface"},
                {text: "快速编写构造函数", link: "/guide/fast-construct-method"},
                {text: "导航到属性或方法", link: "/guide/navigate-to-symbol"},
                {text: "导航到类或文件", link: "/guide/navigate-to-classes-or-files"},
                {text: "多点编辑", link: "/guide/multiple-cursors"},
                {text: "拆分屏幕", link: "/guide/split-screen"},
                {text: "带映射的 Vi 模式", link: "/guide/vi-mode-with-mappings"},
                {text: "PHP 文件使用 Xdebug", link: "/guide/xdebug-for-signal-php-file"},
                {text: "Laravel 项目中使用 Xdebug", link: "/guide/xdebug-for-laravel"},
                {text: "Composer 依赖", link: "/guide/composer-dependencies"},
                {text: "PHPUnit 单元测试", link: "/guide/testing-laravel-using-phpunit"},
                {text: "Code Coverage 代码覆盖率", link: "/guide/code-coverage"},
                {text: "Pest 单元测试", link: "/guide/testing-laravel-using-pest"},
                {text: "Git 工作流", link: "/guide/use-process-of-git-version-control"},
                {text: "数据库和 SQL", link: "/guide/database"},
                {text: "Docker 和 Docker Compose", link: "/guide/docker-and-docker-compose"},
                {text: "Vagrant", link: "/guide/vagrant"},
                {text: "Deployment 部署", link: "/guide/deployment"},
                {text: "卸载", link: "/guide/uninstall"},
            ]
        }
    ];
}
