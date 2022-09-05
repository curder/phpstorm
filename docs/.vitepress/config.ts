import {defineConfig} from 'vitepress'

export default defineConfig({
    lang: "zh-CN",
    base: "/phpstorm/",
    title: "PhpStorm 简单使用",
    description: "PhpStorm 简单使用",
    lastUpdated: true,
    themeConfig: {
        // logo: "https://www.apple.com.cn/autopush/ww/search/modules/finalcutpro/image__do2eec8w8n42_large_2x.jpg",
        siteTitle: "PhpStorm",
        outlineTitle: "章节导航",
        lastUpdatedText: "最后更新时间",
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
    }
});

function nav() {
    return [
        {text: 'Guide', link: '/guide/getting-started', activeMatch: '/guide/'},
    ];
}

function sidebarGuide() {
    return [
        {
            text: "基础",
            collapsible: true,
            collapsed: false,
            items: [
                {text: "为什么选择 PhpStorm", link: "/guide/what-is-phpstorm"},
                {text: "下载和安装", link: "/guide/getting-started"},
                {text: "选择主题", link: "/guide/themes"},
                {text: "极简配置", link: "/guide/minimalism.md"},
                {text: "常用快捷键", link: "/guide/some-important-keybindings"},
                {text: "快速创建文件", link: "/guide/create-new-files-quickly"},
                {text: "自定义文件模版 - todo", link: "/guide/custom-file-templates"},
                {text: "代码片段 - todo", link: "/guide/live-templates"},
                {text: "自定义代码风格 - todo", link: "/guide/custom-formatting"},
                {text: "重构变量名和方法 - todo", link: "/guide/refactoring-for-name-and-method"},
                {text: "重构之向上拉成员 - todo", link: "/guide/refactoring-for-pull-members-up"},
                {text: "重构之提取接口 - todo", link: "/guide/refactoring-for-extract-interface"},
                {text: "重构之引入变量 - todo", link: "/guide/refactoring-for-introduce-variable"},
                {text: "快速组合 - todo", link: "/guide/fast-composition"},
                {text: "导航到符号 - todo", link: "/guide/navigate-to-symbol"},
                {text: "多点编辑 - todo", link: "/guide/multiple-cursors"},
                {text: "窗口分割 - todo", link: "/guide/window-splits"},
                {text: "带映射的 Vi 模式 - todo", link: "/guide/vi-mode-with-mappings"},
                {text: "PHP 文件使用 Xdebug", link: "/guide/xdebug-for-signal-php-file"},
                {text: "Laravel 项目中使用 Xdebug - todo", link: "/guide/xdebug-for-laravel"},
                {text: "Composer 依赖", link: "/guide/composer-dependencies"},
                {text: "PHPUnit 单元测试", link: "/guide/testing-laravel-using-phpunit"},
            ]
        }
    ];
}