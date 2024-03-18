import{_ as s,c as a,o as i,a2 as n}from"./chunks/framework.T1JhP7-b.js";const e="/phpstorm/assets/run-pest-tests-using-terminal.KGYdDSRO.png",p="/phpstorm/assets/search-plugin-step.DwUW3ljd.png",l="/phpstorm/assets/install-pest.BpjOkT14.png",t="/phpstorm/assets/select-php-cli-interpreter.BqricXjX.png",h="/phpstorm/assets/new-pest-local-dialog.C3K2fC5p.png",r="/phpstorm/assets/config-pest-local-setting.D3GRBBoZ.png",k="/phpstorm/assets/run-pest-tests-using-phpstorm-plugin.CtxQKjFK.png",P=JSON.parse('{"title":"Pest 单元测试","description":"","frontmatter":{},"headers":[],"relativePath":"guide/testing-laravel-using-pest.md","filePath":"guide/testing-laravel-using-pest.md","lastUpdated":1662711392000}'),d={name:"guide/testing-laravel-using-pest.md"},c=n(`<h1 id="pest-单元测试" tabindex="-1">Pest 单元测试 <a class="header-anchor" href="#pest-单元测试" aria-label="Permalink to &quot;Pest 单元测试&quot;">​</a></h1><p><a href="https://pestphp.com/" target="_blank" rel="noreferrer">Pest</a> 是 <a href="https://twitter.com/enunomaduro" target="_blank" rel="noreferrer">Nuno Maduro</a> 开发的一个新的测试 PHP 框架。</p><p>虽然 <code>Pest</code> 本身是建立在流行的PHP测试框架 <code>PHPUnit</code> 之上，但 <code>Pest</code> 旨在为编写测试提供更好的体验，哲学很简单。</p><p>通过提供富有表现力的界面，使 <code>TDD</code> 体验简单而优雅。</p><p>接下来带大家了解如何在 <code>Laravel</code> 项目中开始使用 <code>Pest</code> 。</p><h2 id="技术要求" tabindex="-1">技术要求 <a class="header-anchor" href="#技术要求" aria-label="Permalink to &quot;技术要求&quot;">​</a></h2><ul><li><code>PHP 8.0</code> 或更高版本。<code>Pest</code> 需要 <code>PHP 7.3+</code> 才能运行。</li><li><code>Laravel 9</code> 需要 <code>PHP 8.0+</code></li><li><code>Composer</code></li><li>对 <code>PHPUnit</code> 的基本了解</li></ul><h2 id="安装-pest-到-laravel-项目" tabindex="-1">安装 Pest 到 Laravel 项目 <a class="header-anchor" href="#安装-pest-到-laravel-项目" aria-label="Permalink to &quot;安装 Pest 到 Laravel 项目&quot;">​</a></h2><p>来到 Pest 的<a href="https://pestphp.com/docs/installation" target="_blank" rel="noreferrer">官方文档</a>，可以看到在 Laravel 项目路径所在的命令行终端执行如下命令：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">composer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> require</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pestphp/pest-plugin-laravel</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --dev</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pest:install</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>执行完上面的命令将 pest 集成到 Laravel 项目中，会生成一个 <code>tests/Pest.php</code> 的文件。</p><h2 id="修改-laravel-默认测试用例" tabindex="-1">修改 Laravel 默认测试用例 <a class="header-anchor" href="#修改-laravel-默认测试用例" aria-label="Permalink to &quot;修改 Laravel 默认测试用例&quot;">​</a></h2><ul><li><p><code>tests/Unit/ExampleTest.php</code></p><ul><li><p><strong>修改前</strong></p><div class="language-php vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  &lt;?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Tests\\Unit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> PHPUnit\\Framework\\TestCase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ExampleTest</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TestCase</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       * A basic test example.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> test_that_true_is_true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">          $this</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">assertTrue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></li><li><p><strong>修改后</strong></p><div class="language-php vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;that true is true&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">assertTrue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul></li><li><p><code>tests\\Feature\\ExampleTest.php</code></p><ul><li><p><strong>修改前</strong></p><div class="language-php vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Tests\\Feature</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// use Illuminate\\Foundation\\Testing\\RefreshDatabase;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Tests\\TestCase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ExampleTest</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TestCase</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    * A basic test example.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> test_the_application_returns_a_successful_response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        $response </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> $this</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        $response</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">assertStatus</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></li><li><p><strong>修改后</strong></p><div class="language-php vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">it</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;the application returns a successful response&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">assertOk</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul></li></ul><p>将 PHPUint 代码逻辑修改为 Pest，可以看到明显简化了代码，代码一目了然。</p><p><img src="`+e+'" alt=""></p><p>但是，使用 PhpStorm 运行测试，需要安装插件才能正常集成。</p><h2 id="phpstorm-集成-pest" tabindex="-1">PhpStorm 集成 Pest <a class="header-anchor" href="#phpstorm-集成-pest" aria-label="Permalink to &quot;PhpStorm 集成 Pest&quot;">​</a></h2><p>Pest 当前支持 PhpStorm 和 VSCode，可以在这里查看：<a href="https://pestphp.com/docs/ide-plugins" target="_blank" rel="noreferrer">docs/ide-plugins</a>，PhpStorm 安装插件的流程如下：</p><ol><li><p>使用快捷键 <code>⌘ +</code> ,，打开 IDE 设置并选择 <code>Plugins</code> -&gt; <code>Marketplace</code></p><p><img src="'+p+'" alt=""></p></li><li><p>输入 <code>Pest</code> 进行搜索 -&gt; 安装插件 <img src="'+l+'" alt=""></p></li><li><p>使用快捷键 <code>⌘ + ,</code>，打开 IDE 设置并选择 <strong>PHP</strong></p></li><li><p>检查当前所选 PHP 解释器 <img src="'+t+'" alt=""></p><p>在 PHP 页面上，从 CLI Interpreter 列表中选择相关的 PHP 版本，如果没有请添加。</p></li><li><p>点开 PHP 解释器，选择 <code>Test Frameworks</code></p><ol><li><p>点击 New（或者使用快捷键 <code>Control（或 Ctrl）⌃ + N</code>） 新建一个 <code>Pest Local</code>。</p><details class="details custom-block"><summary>点击切换截图展示与隐藏</summary><p><img src="'+h+'" alt=""></p></details></li><li><p>输入如下内容：</p><ol><li><p>在 <strong>Path to Pest executable:</strong> 输入当前项目的绝对路径 + <code>vendor/bin/pest</code></p></li><li><p>在 <code>Test Runner</code> 分组勾选上 <strong>Default configuration file:</strong> 输入当前项目的绝对路径 + <code>phpunit.xml</code></p></li></ol><details class="details custom-block"><summary>点击切换截图展示与隐藏</summary><p><img src="'+r+'" alt=""></p></details></li></ol><p>至此，已将 Pest 集成到了 PHPStorm 中。</p></li></ol><p>下面是使用 pest 集成到 PhpStorm 中运行后的结果：</p><p><img src="'+k+'" alt=""></p>',21),o=[c];function g(u,E,b,m,y,F){return i(),a("div",null,o)}const D=s(d,[["render",g]]);export{P as __pageData,D as default};
