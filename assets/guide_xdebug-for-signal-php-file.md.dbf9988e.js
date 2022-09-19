import{_ as s,c as a,o as e,a as n}from"./app.08c5a059.js";const p="/phpstorm/assets/cli-general-info.ba11739b.png",l="/phpstorm/assets/start-debugging-php-script.3e91e002.png",o="/phpstorm/assets/click-to-set-endpoint.6c99f9cd.png",t="/phpstorm/assets/add-separate-watches-panel.b37a66f2.png",r="/phpstorm/assets/default-separate-watches-panel.e22b1c1c.png",c="/phpstorm/assets/add-variable-to-watches.b9bd04b5.gif",i="/phpstorm/assets/show-variables-on-watches.fd472ae0.png",P=JSON.parse('{"title":"PHP \u6587\u4EF6\u4F7F\u7528 Xdebug","description":"","frontmatter":{},"headers":[{"level":2,"title":"xdeug \u8C03\u8BD5\u5355\u6587\u4EF6","slug":"xdeug-\u8C03\u8BD5\u5355\u6587\u4EF6","link":"#xdeug-\u8C03\u8BD5\u5355\u6587\u4EF6","children":[]},{"level":2,"title":"\u5728 PhpStorm \u4E2D\u914D\u7F6E Xdebug","slug":"\u5728-phpstorm-\u4E2D\u914D\u7F6E-xdebug","link":"#\u5728-phpstorm-\u4E2D\u914D\u7F6E-xdebug","children":[]},{"level":2,"title":"\u5F00\u59CB\u8C03\u8BD5 PHP \u6587\u4EF6","slug":"\u5F00\u59CB\u8C03\u8BD5-php-\u6587\u4EF6","link":"#\u5F00\u59CB\u8C03\u8BD5-php-\u6587\u4EF6","children":[]},{"level":2,"title":"\u6DFB\u52A0\u53D8\u91CF\u76D1\u542C","slug":"\u6DFB\u52A0\u53D8\u91CF\u76D1\u542C","link":"#\u6DFB\u52A0\u53D8\u91CF\u76D1\u542C","children":[{"level":3,"title":"\u5F00\u542F Separate Watches","slug":"\u5F00\u542F-separate-watches","link":"#\u5F00\u542F-separate-watches","children":[]},{"level":3,"title":"\u6DFB\u52A0\u76D1\u542C\u7684\u53D8\u91CF","slug":"\u6DFB\u52A0\u76D1\u542C\u7684\u53D8\u91CF","link":"#\u6DFB\u52A0\u76D1\u542C\u7684\u53D8\u91CF","children":[]}]}],"relativePath":"guide/xdebug-for-signal-php-file.md","lastUpdated":1662389891000}'),d={name:"guide/xdebug-for-signal-php-file.md"},D=n(`<h1 id="php-\u6587\u4EF6\u4F7F\u7528-xdebug" tabindex="-1">PHP \u6587\u4EF6\u4F7F\u7528 Xdebug <a class="header-anchor" href="#php-\u6587\u4EF6\u4F7F\u7528-xdebug" aria-hidden="true">#</a></h1><h2 id="xdeug-\u8C03\u8BD5\u5355\u6587\u4EF6" tabindex="-1">xdeug \u8C03\u8BD5\u5355\u6587\u4EF6 <a class="header-anchor" href="#xdeug-\u8C03\u8BD5\u5355\u6587\u4EF6" aria-hidden="true">#</a></h2><p>\u5047\u5982\u6709\u5982\u4E0B PHP \u6587\u4EF6\uFF1A</p><div class="language-php line-numbers-mode"><button class="copy"></button><span class="lang">php</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;?</span><span style="color:#A6ACCD;">php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getMessage</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">step</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">string</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">step </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">message </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">At step1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">step </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">message </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">At step2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">message </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">woo, unknown current step</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$</span><span style="color:#A6ACCD;">name</span><span style="color:#C3E88D;">: </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">message</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getMessage</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Curder</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u5982\u4F55\u8FFD\u8E2A PHP \u5728\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u53D8\u91CF\u7684\u8D4B\u503C\u60C5\u51B5\uFF0C\u4E00\u79CD\u60C5\u51B5\u53EF\u4EE5\u901A\u8FC7\u6253\u5370 <code>$result</code> \u53D8\u91CF\u7684\u7ED3\u679C\uFF0C\u6BD4\u5982\u4F7F\u7528 <code>var_dump($result);</code> \u5982\u679C\u4F7F\u7528\u7684\u662F Laravel \u9879\u76EE\u4E5F\u53EF\u4EE5\u4F7F\u7528 <code>dd($result);</code>\uFF0C\u7136\u540E\u5728\u6D4F\u89C8\u5668\u4E2D\u67E5\u770B\u7ED3\u679C\u3002</p><p>\u7136\u800C\u4E0A\u9762\u7684\u60C5\u51B5\u6211\u4EEC\u53EF\u4EE5\u5F88\u65B9\u4FBF\u7684\u5728 xdebug \u4E2D\u8FFD\u8E2A\u903B\u8F91\u5728\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u53D8\u91CF\u7684\u8D4B\u503C\u60C5\u51B5\u3002</p><p>PhpStorm \u652F\u6301\u76F4\u63A5\u4F7F\u7528 Xdebug \u8C03\u8BD5 PHP \u6587\u4EF6\uFF0C\u4F46\u662F\u9700\u8981\u6709\u5982\u4E0B\u524D\u7F6E\u9700\u6C42\uFF1A</p><p>\u4E0B\u8F7D\u4E0E PHP \u7248\u672C\u517C\u5BB9\u7684 <a href="https://www.xdebug.org/" target="_blank" rel="noreferrer">Xdebug \u6269\u5C55</a>\uFF0C\u5E76\u6309\u7167<a href="https://xdebug.org/docs/install" target="_blank" rel="noreferrer">\u5B89\u88C5\u6307\u5357</a>\u4E2D\u7684\u8BF4\u660E\u8FDB\u884C\u5B89\u88C5\uFF0C<a href="https://www.jetbrains.com/help/phpstorm/configuring-xdebug.html#updatingPhpIni" target="_blank" rel="noreferrer">\u53EF\u4EE5\u53C2\u8003\u8FD9\u91CC\u7ED9 PHP \u5B89\u88C5\u597D Xdebug \u6269\u5C55</a></p><h2 id="\u5728-phpstorm-\u4E2D\u914D\u7F6E-xdebug" tabindex="-1">\u5728 PhpStorm \u4E2D\u914D\u7F6E Xdebug <a class="header-anchor" href="#\u5728-phpstorm-\u4E2D\u914D\u7F6E-xdebug" aria-hidden="true">#</a></h2><p>\u4EE5\u4E0B\u914D\u7F6E\u7684\u6D41\u7A0B\u6765\u81EA <a href="https://www.jetbrains.com/help/phpstorm/configuring-xdebug.html#integrationWithProduct" target="_blank" rel="noreferrer">PhpStorm \u5B98\u65B9\u5E2E\u52A9\u6587\u6863</a>\uFF0C\u53EF\u4EE5\u5728\u5B98\u65B9\u6587\u6863\u67E5\u770B\u66F4\u591A\u8BE6\u60C5\u3002</p><ol><li>\u4F7F\u7528\u5FEB\u6377\u952E <code>\u2318 + ,</code>\uFF0C\u6253\u5F00 <code>IDE</code> \u8BBE\u7F6E\u5E76\u9009\u62E9 <strong>PHP</strong>\u3002</li><li>\u68C0\u67E5\u4E0E\u6240\u9009 PHP \u89E3\u91CA\u5668\u5173\u8054\u7684 Xdebug \u5B89\u88C5\uFF1A <ol><li>\u5728 PHP \u9875\u9762\u4E0A\uFF0C\u4ECE <code>CLI Interpreter</code> \u5217\u8868\u4E2D\u9009\u62E9\u76F8\u5173\u7684 PHP \u5B89\u88C5\uFF0C\u7136\u540E\u5355\u51FB <code>...</code>\u3002\u8BE5\u5217\u8868\u663E\u793A\u4E86 PhpStorm \u4E2D\u53EF\u7528\u7684\u6240\u6709 PHP \u5B89\u88C5\u3002</li><li>\u6253\u5F00\u7684 CLI \u89E3\u91CA\u5668\u5BF9\u8BDD\u6846\u663E\u793A\u4EE5\u4E0B\u5185\u5BB9\uFF1A <ol><li>\u6240\u9009 PHP \u5B89\u88C5\u7684\u7248\u672C\u3002</li><li>\u4E0E\u6240\u9009 PHP \u5B89\u88C5\uFF08Xdebug \u6216 Zend Debugger\uFF09\u5173\u8054\u7684\u8C03\u8BD5\u5F15\u64CE\u7684\u540D\u79F0\u548C\u7248\u672C\u3002\u5982\u679C\u6CA1\u6709\u914D\u7F6E\u8C03\u8BD5\u5668\uFF0CPhpStorm \u4F1A\u663E\u793A\u76F8\u5E94\u7684\u6D88\u606F\uFF1A <img src="`+p+'" alt=""></li></ol></li></ol></li></ol><h2 id="\u5F00\u59CB\u8C03\u8BD5-php-\u6587\u4EF6" tabindex="-1">\u5F00\u59CB\u8C03\u8BD5 PHP \u6587\u4EF6 <a class="header-anchor" href="#\u5F00\u59CB\u8C03\u8BD5-php-\u6587\u4EF6" aria-hidden="true">#</a></h2><p>\u5F53 PHP \u914D\u7F6E\u597D Xdebug\uFF0C\u5E76\u4E14\u5728 PhpStorm \u4E2D\u6B63\u786E\u8BBE\u7F6E\u540E\u5C31\u53EF\u4EE5\u5BF9 <code>.php</code> \u6587\u4EF6\u8FDB\u884C\u8C03\u8BD5\u3002</p><p>\u6765\u5230\u4E3B\u83DC\u5355\u680F <code>Run</code> -&gt; <code>Debug &#39;index.php&#39;</code>\uFF08\u6216\u8005\u76F4\u63A5\u4F7F\u7528\u5FEB\u6377\u952E <code>Control\uFF08\u6216 Ctrl\uFF09\u2303 + D</code>\uFF09\u5C31\u53EF\u4EE5\u5BF9\u5F53\u524D\u6587\u4EF6\u8FDB\u884C\u8C03\u8BD5\uFF0C\u4F46\u662F\u6267\u884C\u5B8C\u4E4B\u540E\u53D1\u73B0\u4EE3\u7801\u5E76\u6CA1\u6709\u6309\u9884\u671F\uFF0C\u811A\u672C\u6267\u884C\u5B8C\u76F4\u63A5\u9000\u51FA\u4E86\u3002 <img src="'+l+'" alt=""></p><p>\u51FA\u73B0\u8FD9\u4E2A\u95EE\u9898\u7684\u539F\u56E0\u662F\u5E76<strong>\u672A\u8BBE\u7F6E\u65AD\u70B9</strong>\uFF0Cxdebug\u5E76\u4E0D\u77E5\u9053\u4ECE\u54EA\u513F\u622A\u65AD\u7A0B\u5E8F\u7684\u6267\u884C\uFF0C\u81EA\u7136\u5C31\u4E00\u76F4\u6267\u884C\u5230\u811A\u672C\u6267\u884C\u5B8C\u6BD5\u624D\u9000\u51FA\u3002</p><p><img src="'+o+'" alt=""></p><p>\u8BBE\u7F6E\u5B8C\u65AD\u70B9\u540E\u518D\u6267\u884C\u5FEB\u6377\u952E <code>Control\uFF08\u6216\u8005 Ctrl\uFF09\u2303 + D</code> \u5C31\u53EF\u4EE5\u770B\u5230\u5982\u4E0B\u8C03\u8BD5\u754C\u9762\uFF1A 1. <code>Show Execution Point</code> \u67E5\u770B\u5F53\u524D\u65AD\u70B9\u6240\u5728\u4F4D\u7F6E 2. <code>Step Over</code> \u8DF3\u8FC7\u5F53\u524D\u4EE3\u7801\u884C\u5E76\u5E26\u60A8\u5230\u4E0B\u4E00\u884C\uFF0C\u5373\u4F7F\u7A81\u51FA\u663E\u793A\u7684\u884C\u4E2D\u6709\u65B9\u6CD5\u8C03\u7528\u3002\u65B9\u6CD5\u7684\u5B9E\u73B0\u88AB\u8DF3\u8FC7\uFF0C\u76F4\u63A5\u8FDB\u5165\u8C03\u7528\u8005\u65B9\u6CD5\u7684\u4E0B\u4E00\u884C\u3002 3. <code>Step Into</code> \u8FDB\u5165\u8BE5\u65B9\u6CD5\u4EE5\u663E\u793A\u5176\u4E2D\u53D1\u751F\u7684\u4E8B\u60C5\u3002\u5F53\u60A8\u4E0D\u786E\u5B9A\u8BE5\u65B9\u6CD5\u662F\u5426\u8FD4\u56DE\u6B63\u786E\u7684\u7ED3\u679C\u65F6\uFF0C\u8BF7\u4F7F\u7528\u6B64\u9009\u9879\u3002 4. <code>Force Step Into</code> \u65B9\u6CD5\u4E2D\u7684\u6B65\u9AA4\uFF0C\u5373\u4F7F\u6B64\u65B9\u6CD5\u88AB\u5E38\u89C4 <code>Step Into</code> \u8DF3\u8FC7\u3002 5. <code>Step Out</code> \u8DF3\u51FA\u5F53\u524D\u65B9\u6CD5\u5230\u8C03\u7528\u8005\u65B9\u6CD5\u3002 6. <code>Run to Cursor</code> \u7EE7\u7EED\u6267\u884C\uFF0C\u76F4\u5230\u5230\u8FBE\u63D2\u5165\u7B26\u53F7\u7684\u4F4D\u7F6E\u3002\u9014\u4E2D\u7684\u6240\u6709\u65AD\u70B9\u90FD\u5C06\u88AB\u5FFD\u7565\u3002</p><blockquote><p>Tips: \u5728 xdeug \u8C03\u8BD5\u8FC7\u7684\u6B65\u9AA4\u4E2D\uFF0C\u5F53\u6211\u4EEC\u5C06\u9F20\u6807\u5149\u6807\u60AC\u6D6E\u5728\u53D8\u91CF\u540D\u4E0A\uFF0C\u53EF\u4EE5\u770B\u5230\u5BF9\u5E94\u53D8\u91CF\u8FD0\u884C\u65F6\u7684\u503C\u3002</p></blockquote><h2 id="\u6DFB\u52A0\u53D8\u91CF\u76D1\u542C" tabindex="-1">\u6DFB\u52A0\u53D8\u91CF\u76D1\u542C <a class="header-anchor" href="#\u6DFB\u52A0\u53D8\u91CF\u76D1\u542C" aria-hidden="true">#</a></h2><p>\u5F53\u8C03\u8BD5\u7684\u9879\u76EE\u76F8\u5BF9\u590D\u6742\u65F6\uFF0C\u4F1A\u9700\u8981\u5355\u72EC\u89C2\u5BDF\u4E00\u4E9B\u53D8\u91CF\uFF0C\u53EF\u4EE5\u5C06\u5B83\u4EEC\u6DFB\u52A0\u5230 <code>Watches Lists</code></p><h3 id="\u5F00\u542F-separate-watches" tabindex="-1">\u5F00\u542F Separate Watches <a class="header-anchor" href="#\u5F00\u542F-separate-watches" aria-hidden="true">#</a></h3><ol><li>\u70B9\u51FB\u53F3\u4FA7\u7684 <code>Layout Settings</code> \u5E03\u5C40\u8BBE\u7F6E\u6309\u94AE</li><li>\u70B9\u51FB <code>Separate Watches</code> \u9009\u9879\uFF0C\u5F00\u542F <code>Separate Watches</code><details class="details custom-block"><summary>\u70B9\u51FB\u5207\u6362\u622A\u56FE\u5C55\u793A\u4E0E\u9690\u85CF</summary><ul><li><p>\u4F7F\u7528\u4E0B\u9762\u7684\u793A\u4F8B\u6D41\u7A0B\u5F00\u542F <code>Separate Watches</code></p><p><img src="'+t+'" alt=""></p></li><li><p>\u4E0B\u56FE\u4E3A\u5F00\u542F <code>Separate Watches</code> \u540E\u7684\u9762\u677F</p><p><img src="'+r+'" alt=""></p></li></ul></details></li></ol><h3 id="\u6DFB\u52A0\u76D1\u542C\u7684\u53D8\u91CF" tabindex="-1">\u6DFB\u52A0\u76D1\u542C\u7684\u53D8\u91CF <a class="header-anchor" href="#\u6DFB\u52A0\u76D1\u542C\u7684\u53D8\u91CF" aria-hidden="true">#</a></h3><ul><li>\u53EF\u4EE5\u901A\u8FC7\u5728\u8F93\u5165\u6846\u6DFB\u52A0\u8981\u76D1\u542C\u7684\u53D8\u91CF\u540D\uFF0C\u5E76\u70B9\u51FB\u53F3\u4FA7\u7684 <code>+</code> \u6309\u94AE\u6216\u4F7F\u7528\u5FEB\u6377\u952E<code>Command + Shift + Enter</code>\u6DFB\u52A0\u3002</li><li>\u4E5F\u53EF\u4EE5\u70B9\u51FB\u9762\u677F\u5DE6\u4FA7\u7684 <code>+</code> \u6309\u94AE\u5728\u968F\u540E\u65B0\u589E\u7684\u8F93\u5165\u6846\u4E2D\u8F93\u5165\u8981\u76D1\u542C\u7684\u53D8\u91CF\u540D\u5E76\u6309\u56DE\u8F66 Enter \u786E\u8BA4\u8F93\u5165\u3002</li></ul><p><img src="'+c+'" alt=""></p><p>\u8FD9\u6837\u65B9\u4FBF\u5728\u4F17\u591A\u53D8\u91CF\u4E2D\u7B5B\u9009\u51FA\u5173\u5FC3\u7684\u53D8\u91CF\u8FDB\u884C\u76D1\u542C\u67E5\u770B\u3002</p><p><img src="'+i+'" alt=""></p>',27),h=[D];function F(u,y,C,g,A,b){return e(),a("div",null,h)}const _=s(d,[["render",F]]);export{P as __pageData,_ as default};