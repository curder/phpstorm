import{_ as e,c as a,o as i,a4 as t}from"./chunks/framework.B-5gogL2.js";const s="/phpstorm/assets/turn-off-built-in-code-formatting-for-php.C_p4aan2.png",n="/phpstorm/assets/add-new-file-watcher.BeLS4gIy.png",r="/phpstorm/assets/create-a-new-file-watcher-for-laravel-pint.CfN7rsn3.png",P=JSON.parse('{"title":"Pint 规范 Laravel 代码风格","description":"","frontmatter":{},"headers":[],"relativePath":"guide/laravel-pint.md","filePath":"guide/laravel-pint.md","lastUpdated":1663725946000}'),p={name:"guide/laravel-pint.md"},l=t('<h1 id="pint-规范-laravel-代码风格" tabindex="-1">Pint 规范 Laravel 代码风格 <a class="header-anchor" href="#pint-规范-laravel-代码风格" aria-label="Permalink to &quot;Pint 规范 Laravel 代码风格&quot;">​</a></h1><p>Laravel Pint 是一个针对极简主义的 PHP 代码风格修复程序。</p><p>它构建在 <a href="https://github.com/FriendsOfPHP/PHP-CS-Fixer" target="_blank" rel="noreferrer">PHP-CS-Fixer</a> 之上，它可以简单地确保代码风格保持干净和一致。</p><p>Pint会自动安装所有新的Laravel应用程序，因此可以立即开始使用它。</p><p>默认情况下，Pint不需要任何配置，并将通过遵循 Laravel 的编码风格来修复代码风格问题。</p><blockquote><p><strong>注意：</strong> Laravel Pint 需要PHP版本最低 8.0</p></blockquote><h2 id="安装-pint" tabindex="-1">安装 Pint <a class="header-anchor" href="#安装-pint" aria-label="Permalink to &quot;安装 Pint&quot;">​</a></h2><p>Pint 包含在 Laravel 框架的最新版本中，因此通常不需要安装。</p><p>但是，对于较旧的应用程序，可以通过 Composer 安装Laravel Pint：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">composer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> require</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> laravel/pint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --dev</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="运行-pint" tabindex="-1">运行 Pint <a class="header-anchor" href="#运行-pint" aria-label="Permalink to &quot;运行 Pint&quot;">​</a></h2><p>可以通过调用项目的 <code>vendor/bin</code> 目录中的 <code>pint</code> 二进制文件来查看当前项目中代码样式问题：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./vendor/bin/pint</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>通过在调用 Pint 时提供 <code>-v</code> 选项，可以查看关于Pint更改的更多详细信息</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./vendor/bin/pint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果希望 Pint 仅检查代码中的样式错误而不实际修改文件，可以使用 <code>--test</code> 选项：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./vendor/bin/pint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --test</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>更多自定义配置可以参考<a href="https://laravel.com/docs/pint" target="_blank" rel="noreferrer">Laravel Pint 官方文档</a></p><h2 id="phpstorm-中集成-pint" tabindex="-1">PhpStorm 中集成 Pint <a class="header-anchor" href="#phpstorm-中集成-pint" aria-label="Permalink to &quot;PhpStorm 中集成 Pint&quot;">​</a></h2><p>让 <a href="https://github.com/laravel/pint" target="_blank" rel="noreferrer">Laravel Print</a> 在 PhpStorm 中保存时自动格式化 PHP 代码，可以通过下面的配置进行。</p><ol><li><p>如果开启了 <code>Refactor Code</code> 配置，需要关闭 PhpStorm 的 PHP 内置代码格式化</p><p><code>Command + ,</code> 系统偏好设置 -&gt; <code>Tools</code> -&gt; <code>Refactor codes</code> -&gt; 点击 <code>All file types</code> 下拉框，反选 <code>PHP</code> 即可。</p><p><img src="'+s+'" alt=""></p></li><li><p>为 Laravel Pint 创建一个新的 File Watcher</p><p><code>Command + ,</code> 系统偏好设置 -&gt; <code>Tooles</code> -&gt; <code>File Watchers</code> -&gt; Add <code>Command + N</code> -&gt; 选择 <code>Custom</code>，在弹窗中输入如下配置</p><p><img src="'+n+'" alt=""></p><ul><li><code>Program</code>: <code>$ProjectFileDir$/vendor/bin/pint</code></li><li><code>Arguments</code>: <code>$FileRelativePath$</code></li><li><code>Output paths to refresh</code>: <code>$FileRelativePath$</code></li><li><code>Working directory</code>: <code>$ProjectFileDir$</code></li></ul></li><li><p>检查配置是否正确</p><p><img src="'+r+'" alt=""></p></li><li><p>在 PHP 文件中测试 pint 是否能正确生效</p></li></ol>',21),o=[l];function d(c,h,m,u,g,v){return i(),a("div",null,o)}const k=e(p,[["render",d]]);export{P as __pageData,k as default};