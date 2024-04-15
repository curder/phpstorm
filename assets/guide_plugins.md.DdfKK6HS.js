import{_ as e,c as a,o as t,a4 as s}from"./chunks/framework.B-5gogL2.js";const r="/phpstorm/assets/marketplace-plugins.wFcb5VPh.png",o="/phpstorm/assets/search-plugins-use-keymap.CqNptrp0.png",n="/phpstorm/assets/install-plugin.Cdw6VBmr.png",i="/phpstorm/assets/download-plugin-jar-data.BuDZbYip.png",l="/phpstorm/assets/install-plugin-from-disk.Bame7PRq.png",p="/phpstorm/assets/uninstall-plugin.Bnik8HiH.png",q=JSON.parse('{"title":"插件管理","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/plugins.md","filePath":"guide/plugins.md","lastUpdated":1711684239000}'),c={name:"guide/plugins.md"},d=s('<h1 id="插件管理" tabindex="-1">插件管理 <a class="header-anchor" href="#插件管理" aria-label="Permalink to &quot;插件管理&quot;">​</a></h1><p>PhpStorm 除了自带的功能，还可以通过安装第三方插件的方式来扩展编辑器功能。</p><p>PhpStorm 插件安装、卸载管理是在系统偏好设定的 <code>Plugins</code> 里。可以通过下列方式打开 <code>Plugins</code>：</p><ul><li><p>方式一：可以使用快捷键 <code>Command + ,</code> 在偏好设置 <code>Preferences</code> -&gt; <code>Plugins</code> 菜单栏打开插件安装界面：</p><p><img src="'+r+'" alt=""></p></li><li><p>方式二：使用快捷键 <code>Shift + Shift</code> 或 <code>Command + Shift + A</code>后，输入 <strong>Plugins</strong> 来打开插件安装界面：</p><p><img src="'+o+'" alt=""></p></li></ul><h2 id="搜索安装" tabindex="-1">搜索安装 <a class="header-anchor" href="#搜索安装" aria-label="Permalink to &quot;搜索安装&quot;">​</a></h2><p>在 <code>Plugins</code> 的功能界面包含了两个标签页，左侧对应插件市场 <code>Marketplace</code>，用户可以在这里搜索并选择安装的第三方插件。</p><p>比如想要在 PhpStorm 中安装 <code>CamelCase</code> 插件，输入插件名会自动搜索，在下拉列表选择正确的插件，右侧会显示对应插件的简单介绍和使用方法，点击 <code>Install</code> 即可安装到本地，最后记得点击 <strong>OK</strong> 保存。</p><p><img src="'+n+'" alt=""></p><div class="info custom-block"><p class="custom-block-title">注意</p><p>有的插件需要重启 PhpStorm 才能生效，具体以插件使用说明为准。</p></div><h2 id="jar存档安装" tabindex="-1">jar存档安装 <a class="header-anchor" href="#jar存档安装" aria-label="Permalink to &quot;jar存档安装&quot;">​</a></h2><p>当使用上面的方式下载由于网络等原因无法完成安装可以尝试在<a href="https://plugins.jetbrains.com/" target="_blank" rel="noreferrer">官网插件市场</a>找到对应插件的 <strong>.jar</strong> 包。</p><ol><li><p>下载jar安装包 还是以安装 <code>CamelCase</code> 插件为例，搜索并来到插件的详情页面的 <code>Versions</code> 选择符合编辑器版本的软件进行下载：</p><p><img src="'+i+'" alt=""></p></li><li><p>在 PhpStorm 中启用</p><ul><li>单击齿轮图标的设置按钮，然后选择 <code>Install Plugin from disk...</code></li><li>选择上一步下载的插件jar文件并单击确定</li><li>单击确定以应用更改并在出现提示时重新启动 PhpStorm <img src="'+l+'" alt=""></li></ul></li></ol><h2 id="卸载" tabindex="-1">卸载 <a class="header-anchor" href="#卸载" aria-label="Permalink to &quot;卸载&quot;">​</a></h2><p>在 Plugins 的功能界面包含了两个标签页，右侧编辑器预设和用户安装的第三方插件，可以在这里对插件禁用和卸载。</p><ol><li>选中右侧的 <code>Installed</code> 来到已安装的插件</li><li>选中需要操作的插件</li><li>使用空格禁用</li><li>右键点击选择 <code>Uninstall</code> 卸载插件</li><li>点击 <strong>OK</strong> 确认操作 <img src="'+p+'" alt=""></li></ol><h2 id="插件推荐" tabindex="-1">插件推荐 <a class="header-anchor" href="#插件推荐" aria-label="Permalink to &quot;插件推荐&quot;">​</a></h2><h3 id="camelcase" tabindex="-1"><a href="https://plugins.jetbrains.com/plugin/7160" target="_blank" rel="noreferrer"><strong>CamelCase</strong></a> <a class="header-anchor" href="#camelcase" aria-label="Permalink to &quot;[**CamelCase**](https://plugins.jetbrains.com/plugin/7160)&quot;">​</a></h3><p>允许用户通过快捷键 <code>Alt + Shift + U</code> 在 <code>kebab-case</code>、<code>SNAKE_CASE</code>、<code>PascalCase</code>、<code>camelCase</code>、<code>snake_case</code> 或 <code>space case</code> 之间轻松切换。</p><h3 id="translation" tabindex="-1"><a href="https://plugins.jetbrains.com/plugin/8579" target="_blank" rel="noreferrer"><strong>Translation</strong></a> <a class="header-anchor" href="#translation" aria-label="Permalink to &quot;[**Translation**](https://plugins.jetbrains.com/plugin/8579)&quot;">​</a></h3><p>选中单词进行翻译，支持谷歌、有道、阿里巴巴和百度的翻译接口。除了谷歌翻译之外，其它的提供商都需要授权。</p><p>插件配置在系统偏好设定的 <code>Tools</code> -&gt; <code>Translation</code>。注意：在<strong>常规</strong>处的主要语言选择 <code>中文简体</code>。</p><p>使用方式：1. 选中单词或段使用快捷键 <code>Command + Ctrl + U</code> 就可以呼出翻译弹层 2. 选择单词或段后右键点击选择 <code>Translate</code></p><h3 id="chinese-simplified-language-pack-中文语言包" tabindex="-1"><a href="https://plugins.jetbrains.com/plugin/13710" target="_blank" rel="noreferrer"><strong>Chinese (Simplified) Language Pack / 中文语言包</strong></a> <a class="header-anchor" href="#chinese-simplified-language-pack-中文语言包" aria-label="Permalink to &quot;[**Chinese (Simplified) Language Pack / 中文语言包**](https://plugins.jetbrains.com/plugin/13710)&quot;">​</a></h3><p>下载并安装后，重启 PhpStorm 编辑器外观可以看到支持中文操作界面。</p><h3 id="chinese-php-document" tabindex="-1"><a href="https://plugins.jetbrains.com/plugin/12734" target="_blank" rel="noreferrer"><strong>Chinese PHP Document</strong></a> <a class="header-anchor" href="#chinese-php-document" aria-label="Permalink to &quot;[**Chinese PHP Document**](https://plugins.jetbrains.com/plugin/12734)&quot;">​</a></h3><p>光标悬浮在 PHP 系统函数上，可以在代码上快速查看其中文文档。</p><h3 id="env-files-support" tabindex="-1"><a href="https://plugins.jetbrains.com/plugin/9525" target="_blank" rel="noreferrer"><strong>.env files support</strong></a> <a class="header-anchor" href="#env-files-support" aria-label="Permalink to &quot;[**.env files support**](https://plugins.jetbrains.com/plugin/9525)&quot;">​</a></h3><p><code>.env</code> 项目环境文件的高亮显示插件</p><h3 id="codegeex" tabindex="-1"><a href="https://plugins.jetbrains.com/plugin/20587" target="_blank" rel="noreferrer"><strong>CodeGeeX</strong></a> <a class="header-anchor" href="#codegeex" aria-label="Permalink to &quot;[**CodeGeeX**](https://plugins.jetbrains.com/plugin/20587)&quot;">​</a></h3><p><code>CodeGeeX</code> 是一款基于法学硕士的强大智能编程助手。提供代码生成/补全、注释生成、代码翻译、AI聊天等功能，帮助开发者大幅提升工作效率。</p><h3 id="laravel-idea" tabindex="-1"><a href="https://plugins.jetbrains.com/plugin/13441" target="_blank" rel="noreferrer"><strong>Laravel Idea</strong></a> <a class="header-anchor" href="#laravel-idea" aria-label="Permalink to &quot;[**Laravel Idea**](https://plugins.jetbrains.com/plugin/13441)&quot;">​</a></h3><p><a href="https://laravel.com" target="_blank" rel="noreferrer"><code>Laravel</code></a> 框架更有好的语法支持插件。</p><h3 id="presentation-assistant" tabindex="-1"><a href="https://plugins.jetbrains.com/plugin/11631" target="_blank" rel="noreferrer">Presentation Assistant</a> <a class="header-anchor" href="#presentation-assistant" aria-label="Permalink to &quot;[Presentation Assistant](https://plugins.jetbrains.com/plugin/11631)&quot;">​</a></h3><p><code>Presentation Assistant</code> 插件用于显示调用的操作的名称和键盘快捷键。</p><div class="info custom-block"><p class="custom-block-title"><strong>注意：</strong> 新版 PhpStorm 已经集成在编辑器。</p><p>在编辑器在主菜单中，转到查看| 外观并启用 <code>Presentation Assistant</code>，更多使用详情可以<a href="https://www.jetbrains.com/help/phpstorm/presentation-assistant.html#configure-the-keymap" target="_blank" rel="noreferrer">查看官方文档</a>。</p></div>',35),h=[d];function g(u,m,b,f,_,P){return t(),a("div",null,h)}const j=e(c,[["render",g]]);export{q as __pageData,j as default};