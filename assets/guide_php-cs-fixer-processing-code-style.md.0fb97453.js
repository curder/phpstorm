import{_ as a,c as p,o as n,a as l}from"./app.1e3d666e.js";const o="/phpstorm/assets/which-php-cs-fixer-get-bin-path.236d83b2.png",e="/phpstorm/assets/config-php-cs-fixer-integration.265cddce.png",c="/phpstorm/assets/config-php-cs-fixer-path-step1.9469d227.png",t="/phpstorm/assets/config-php-cs-fixer-path-step2.91706eaa.png",r="/phpstorm/assets/enable-php-cs-fixer-inspection-use-psr12.2780a5aa.png",D="/phpstorm/assets/php-cs-fixer-fix-the-whole-file.3a48759b.png",s="/phpstorm/assets/add-new-external-tool-for-php-cs-fixer.94bf7f38.png",F="/phpstorm/assets/config-php-cs-fixer-for-external-tool.b19fdd59.png",i="/phpstorm/assets/apply-external-tool-php-cs-fixer.c10299af.png",y="/phpstorm/assets/run-external-tool-php-cs-fixer.fde88783.png",C="/phpstorm/assets/config-php-cs-fixer-for-external-tool-using-custom-config-file.6e5bd037.png",d="/phpstorm/assets/close-output-for-php-cs-fixer.85487034.png",S=JSON.parse('{"title":"PSR-12 \u4EE3\u7801\u98CE\u683C","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E0B\u8F7D php-cs-fixer","slug":"\u4E0B\u8F7D-php-cs-fixer","link":"#\u4E0B\u8F7D-php-cs-fixer","children":[]},{"level":2,"title":"\u914D\u7F6E php-cs-fixer","slug":"\u914D\u7F6E-php-cs-fixer","link":"#\u914D\u7F6E-php-cs-fixer","children":[]},{"level":2,"title":"\u4FEE\u590D\u4EE3\u7801 php-cs-fixer","slug":"\u4FEE\u590D\u4EE3\u7801-php-cs-fixer","link":"#\u4FEE\u590D\u4EE3\u7801-php-cs-fixer","children":[{"level":3,"title":"\u9488\u5BF9\u5355\u4E2A\u6587\u4EF6","slug":"\u9488\u5BF9\u5355\u4E2A\u6587\u4EF6","link":"#\u9488\u5BF9\u5355\u4E2A\u6587\u4EF6","children":[]},{"level":3,"title":"\u6279\u91CF\u4FEE\u6B63","slug":"\u6279\u91CF\u4FEE\u6B63","link":"#\u6279\u91CF\u4FEE\u6B63","children":[]}]},{"level":2,"title":"\u81EA\u5B9A\u4E49\u98CE\u683C\u914D\u7F6E","slug":"\u81EA\u5B9A\u4E49\u98CE\u683C\u914D\u7F6E","link":"#\u81EA\u5B9A\u4E49\u98CE\u683C\u914D\u7F6E","children":[]},{"level":2,"title":"\u5173\u95ED\u4FEE\u590D\u8F93\u51FA","slug":"\u5173\u95ED\u4FEE\u590D\u8F93\u51FA","link":"#\u5173\u95ED\u4FEE\u590D\u8F93\u51FA","children":[]}],"relativePath":"guide/php-cs-fixer-processing-code-style.md","lastUpdated":1662453587000}'),A={name:"guide/php-cs-fixer-processing-code-style.md"},h=l(`<h1 id="psr-12-\u4EE3\u7801\u98CE\u683C" tabindex="-1">PSR-12 \u4EE3\u7801\u98CE\u683C <a class="header-anchor" href="#psr-12-\u4EE3\u7801\u98CE\u683C" aria-hidden="true">#</a></h1><p>PSR-12 \u662F <a href="https://www.php-fig.org/" target="_blank" rel="noreferrer">PHP-FIG</a> \u7EC4\u7EC7\u4E3A PHP \u5236\u5B9A\u7684\u7F16\u7801\u98CE\u683C\u6807\u51C6\u3002</p><p>\u5982\u679C\u8981\u8BA9 PHP \u9879\u76EE\u9075\u5FAA PSR-12 \u6807\u51C6\uFF0C\u53EF\u4EE5\u901A\u8FC7 <a href="https://packagist.org/packages/friendsofphp/php-cs-fixer" target="_blank" rel="noreferrer">PHP-CS-Fixer</a> \u4E4B\u7C7B\u7684\u7B2C\u4E09\u65B9\u6269\u5C55\u5BF9 PHP \u9879\u76EE\u4EE3\u7801\u8FDB\u884C\u81EA\u52A8\u68C0\u6D4B\uFF0C\u53EF\u4EE5\u5C06\u8FD9\u4E9B\u4EE3\u7801\u98CE\u683C\u68C0\u6D4B\u903B\u8F91\u653E\u5230\u63D0\u4EA4\u4EE3\u7801\u5230\u4EE3\u7801\u4ED3\u5E93\u7684\u94A9\u5B50\u51FD\u6570\u4E2D\uFF0C\u5982\u679C\u4E0D\u7B26\u5408\u6307\u5B9A\u7F16\u7801\u98CE\u683C\uFF08\u4E0D\u9650\u4E8E PSR-12\uFF0C\u8FD8\u53EF\u4EE5\u662F\u81EA\u5B9A\u4E49\u7684\u7F16\u7801\u98CE\u683C\u7B49\uFF09\uFF0C\u5219\u62D2\u7EDD\u63D0\u4EA4\u4EE3\u7801\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u4FDD\u8BC1\u4EE3\u7801\u4ED3\u5E93\u4E2D\u7EF4\u62A4\u7684\u4EE3\u7801\u90FD\u662F\u7B26\u5408\u7279\u5B9A\u7F16\u7801\u98CE\u683C\u7684\u3002</p><p>\u5728 PhpStorm \u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7\u96C6\u6210\u5916\u90E8\u5B89\u88C5\u7684\u8FD9\u4E9B\u4EE3\u7801\u68C0\u67E5\u5DE5\u5177\u975E\u5E38\u65B9\u4FBF\u7684\u5BF9\u4EE3\u7801\u8FDB\u884C\u81EA\u52A8\u68C0\u6D4B\u548C\u4FEE\u590D\uFF0C\u4ECE\u800C\u8BA9\u6700\u7EC8\u63D0\u4EA4\u5230\u7248\u672C\u5E93\u4E2D\u7684\u4EE3\u7801\u90FD\u662F\u7B26\u5408\u7279\u5B9A\u4EE3\u7801\u98CE\u683C\u7684\u3002</p><p>\u4E0B\u9762\u4EE5 <code>php-cs-fixer</code> \u4F5C\u4E3A\u4EE3\u7801\u81EA\u52A8\u4FEE\u590D\u5DE5\u5177\uFF0C\u5C06\u4EE3\u7801\u98CE\u683C\u8BBE\u7F6E\u4E3A\u9075\u5FAA PSR-12 \u6807\u51C6\u3002</p><h2 id="\u4E0B\u8F7D-php-cs-fixer" tabindex="-1">\u4E0B\u8F7D php-cs-fixer <a class="header-anchor" href="#\u4E0B\u8F7D-php-cs-fixer" aria-hidden="true">#</a></h2><p>\u5EFA\u8BAE\u4F7F\u7528 Composer \u547D\u4EE4\u5728\u5168\u5C40\u8FDB\u884C\u5B89\u88C5\uFF1A</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">composer global require friendsofphp/php-cs-fixer</span></span>
<span class="line"></span></code></pre></div><p>\u901A\u8FC7\u547D\u4EE4\u83B7\u53D6 <code>php-cs-fixer</code> \u547D\u4EE4\u7684\u6267\u884C\u8DEF\u5F84\uFF1A</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">which php-cs-fixer</span></span>
<span class="line"></span></code></pre></div><p><img src="`+o+'" alt=""></p><h2 id="\u914D\u7F6E-php-cs-fixer" tabindex="-1">\u914D\u7F6E php-cs-fixer <a class="header-anchor" href="#\u914D\u7F6E-php-cs-fixer" aria-hidden="true">#</a></h2><ol><li><p>\u914D\u7F6E php-cs-fixer \u8DEF\u5F84</p><ol><li><p>\u5728 PhpStorm \u7684 <code>Preferences</code> -&gt; <code>PHP</code> -&gt; <code>Quality Tools</code> \u914D\u7F6E\u754C\u9762\u4E2D\uFF0C\u76EE\u524D\u8FD8\u6CA1\u6709\u914D\u7F6E\u4EFB\u4F55 PHP CS Fixer \u8DEF\u5F84\uFF1A</p><details class="details custom-block"><summary>\u70B9\u51FB\u5207\u6362\u622A\u56FE\u5C55\u793A\u4E0E\u9690\u85CF</summary><p><img src="'+e+'" alt=""></p></details></li><li><p>\u70B9\u51FB\u4E0A\u56FE\u7684 <code>...</code> \u65B0\u589E\u4E00\u4E2A\u914D\u7F6E\uFF0C\u5728\u65B0\u589E\u7684\u5F39\u51FA\u5C42\u8F93\u5165\u5982\u4E0B\u914D\u7F6E\uFF1A</p><ul><li><ol><li>\u65B0\u589E\u4E00\u4E2APHP\u914D\u7F6E 2. \u5728\u5F39\u51FA\u5C42\u7684\u4E0B\u62C9\u9009\u9879\u9009\u62E9\u4E00\u4E2APHP\u7248\u672C 3. \u70B9\u51FB <code>OK</code> \u786E\u8BA4\u9009\u62E9</li></ol><details class="details custom-block"><summary>\u70B9\u51FB\u5207\u6362\u622A\u56FE\u5C55\u793A\u4E0E\u9690\u85CF</summary><p><img src="'+c+'" alt=""></p></details></li><li><ol start="2"><li>\u5728\u65B0\u589E\u7684PHP\u914D\u7F6E\u4E2D\u5C06 phpcs \u8DEF\u5F84\u63D0\u4F9B</li></ol><details class="details custom-block"><summary>\u70B9\u51FB\u5207\u6362\u622A\u56FE\u5C55\u793A\u4E0E\u9690\u85CF</summary><p><img src="'+t+'" alt=""></p></details></li><li><ol start="3"><li>\u70B9\u51FB OK \u4FDD\u5B58\u914D\u7F6E</li></ol></li></ul></li></ol></li><li><p>\u542F\u7528 PHP CS Fixer</p><p>PHP CS Fixer \u9ED8\u8BA4\u662F\u5173\u95ED\u7684\uFF0C\u5728 PhpStorm \u7684 <code>Preferences</code> -&gt; <code>Editor</code> -&gt; <code>Inspections</code> \u914D\u7F6E\u754C\u9762\u4E2D\uFF0C\u627E\u5230\u53F3\u4FA7 <strong>PHP</strong> | <strong>Quality Tools</strong> | <strong>PHP CS Fixer validation</strong>\uFF0C\u5E76\u5C06\u53F3\u4FA7\u7684 Ruleset \u4E2D\u9009\u62E9 PSR12 \u6807\u51C6\u3002</p><details class="details custom-block"><summary>\u70B9\u51FB\u5207\u6362\u622A\u56FE\u5C55\u793A\u4E0E\u9690\u85CF</summary><p><img src="'+r+`" alt=""></p></details></li></ol><h2 id="\u4FEE\u590D\u4EE3\u7801-php-cs-fixer" tabindex="-1">\u4FEE\u590D\u4EE3\u7801 php-cs-fixer <a class="header-anchor" href="#\u4FEE\u590D\u4EE3\u7801-php-cs-fixer" aria-hidden="true">#</a></h2><h3 id="\u9488\u5BF9\u5355\u4E2A\u6587\u4EF6" tabindex="-1">\u9488\u5BF9\u5355\u4E2A\u6587\u4EF6 <a class="header-anchor" href="#\u9488\u5BF9\u5355\u4E2A\u6587\u4EF6" aria-hidden="true">#</a></h3><p>\u8FD8\u662F\u4EE5\u4E0A\u9762\u63D0\u5230\u7684\u4EE3\u7801\u98CE\u683C\u4E0D\u6B63\u786E\u7684\u6587\u4EF6\u5185\u5BB9\u4E3A\u4F8B\uFF1A</p><div class="language-php"><button class="copy"></button><span class="lang">php</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;?</span><span style="color:#A6ACCD;">php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">App</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Models</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">User</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">Illuminate</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Support</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Facades</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Route</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Route</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">view</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">welcome</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);});</span></span>
<span class="line"></span></code></pre></div><p>\u4EE3\u7801\u4E0B\u9762\u51FA\u73B0\u6CE2\u6D6A\u7EBF\uFF0C\u8FD9\u610F\u5473\u7740 <code>PHP CS Fixer</code> \u68C0\u67E5\u5230\u4E0D\u7B26\u5408\u7CFB\u7EDF\u8BBE\u7F6E\u7F16\u7801\u98CE\u683C\u7684\u4EE3\u7801\uFF08\u5F53\u524D\u4E3APSR-12\uFF09\uFF0C\u5C06\u5149\u6807\u79FB\u52A8\u5230\u51FA\u73B0\u95EE\u9898\u7684\u4EE3\u7801\u4F4D\u7F6E\u5904\uFF0C\u4F7F\u7528\u5FEB\u6377\u952E <code>Option\uFF08\u6216 Alt\uFF09\u2325 + Enter</code>\uFF0C\u5F39\u51FA\u5FEB\u6377\u4FEE\u590D\u5F39\u51FA\u5C42\uFF0C\u9009\u62E9 <code>PHP CS Fixer: fix the whole file</code>\u540E\u56DE\u8F66\u786E\u8BA4</p><details class="details custom-block"><summary>\u70B9\u51FB\u5207\u6362\u622A\u56FE\u5C55\u793A\u4E0E\u9690\u85CF</summary><p><img src="`+D+'" alt=""></p></details><h3 id="\u6279\u91CF\u4FEE\u6B63" tabindex="-1">\u6279\u91CF\u4FEE\u6B63 <a class="header-anchor" href="#\u6279\u91CF\u4FEE\u6B63" aria-hidden="true">#</a></h3><p>\u5BF9\u4E8E\u6574\u4E2A\u9879\u76EE\u6765\u8BF4\uFF0C\u53EF\u4EE5\u5728 PhpStorm \u4E2D\u901A\u8FC7\u914D\u7F6E\u5916\u90E8\u5DE5\u5177\u6765\u5B9E\u73B0\u6279\u91CF\u4FEE\u6B63\u6307\u5B9A\u76EE\u5F55\u7684\u4EE3\u7801\u98CE\u683C\u3002</p><p>\u5728 <code>Preferences</code> -&gt; <code>Tools</code> -&gt; <code>External Tools</code> \u754C\u9762\u70B9\u51FB <code>+</code> \u65B0\u5EFA\u4E00\u4E2A\u5916\u90E8\u5DE5\u5177\uFF1A</p><details class="details custom-block"><summary>\u70B9\u51FB\u5207\u6362\u622A\u56FE\u5C55\u793A\u4E0E\u9690\u85CF</summary><p><img src="'+s+'" alt=""></p></details><p>\u5728\u5F39\u51FA\u7A97\u4E2D\u8F93\u5165\u5982\u4E0B\u5185\u5BB9\uFF1A</p><ul><li>Name: <code>PHP CS Fixer</code></li><li>Description: <code>Apply php-cs-fixer to files.</code></li><li>Program: <code>/Users/curder/.composer/vendor/bin/php-cs-fixer</code></li><li>Arguments: <code>fix $FileDir$ --rules=@PSR12</code></li><li>Working directory: <code>$ProjectFileDir$</code></li></ul><details class="details custom-block"><summary>\u70B9\u51FB\u5207\u6362\u622A\u56FE\u5C55\u793A\u4E0E\u9690\u85CF</summary><p><img src="'+F+'" alt=""></p></details><p>\u5C06\u8FD9\u4E2A\u5916\u90E8\u5DE5\u5177\u547D\u540D\u4E3A <code>PHP CS Fixer</code>\uFF0C\u5728 Paragam \u8F93\u5165 <code>php-cs-fixer</code> \u6240\u5728\u7CFB\u7EDF\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u53C2\u6570\u4E2D\u8F93\u5165\u4FEE\u590D\u6307\u4EE4\uFF0C\u8FD9\u91CC\u6211\u4EEC\u6307\u5B9A\u8DEF\u5F84\u4E3A\u5F53\u524D\u76EE\u5F55\uFF0C\u9A8C\u8BC1\u89C4\u5219\u4E3A <code>PSR-12</code>\uFF0C\u6700\u540E\u70B9\u51FB <code>OK</code> \u4FDD\u5B58\u3002</p><p>\u63A5\u4E0B\u6765\uFF0C\u5C31\u53EF\u4EE5\u5728 PhpStorm \u7684 Project \u533A\u57DF\u9009\u4E2D\u67D0\u4E2A\u76EE\u5F55\uFF0C\u70B9\u51FB\u53F3\u952E\uFF0C\u5728\u4E0B\u62C9\u83DC\u5355\u770B\u5230 <code>External Tools</code> -&gt; <code> PHP CS Fixer</code> \u9009\u9879\uFF1A</p><details class="details custom-block"><summary>\u70B9\u51FB\u5207\u6362\u622A\u56FE\u5C55\u793A\u4E0E\u9690\u85CF</summary><p><img src="'+i+'" alt=""></p></details><p>\u70B9\u51FB PHP CS Fixer \u5C31\u53EF\u4EE5\u5BF9\u9009\u4E2D\u76EE\u5F55\u8FDB\u884C\u8FDB\u884C\u4EE3\u7801\u68C0\u67E5\u548C\u4FEE\u590D\u4E86\uFF0C\u5B9E\u9645\u4E0A\u6307\u5B9A\u7684\u662F\u524D\u9762\u914D\u7F6E\u7684 <code>php-cs-fixer fix</code> \u6307\u4EE4\uFF0C\u6267\u884C\u7ED3\u679C\u4F1A\u8F93\u5165\u5230 PhpStorm \u4E0B\u65B9 Run \u533A\u57DF\uFF1A</p><details class="details custom-block"><summary>\u70B9\u51FB\u5207\u6362\u622A\u56FE\u5C55\u793A\u4E0E\u9690\u85CF</summary><p><img src="'+y+`" alt=""></p></details><p>\u5982\u679C\u6709\u4EE3\u7801\u88AB\u4FEE\u6B63\uFF0C\u4F1A\u5217\u5728\u63A7\u5236\u53F0\u8F93\u51FA\u65E5\u5FD7\u4E2D\u3002\u53EF\u4EE5\u76F4\u63A5\u5728\u6307\u5B9A\u76EE\u5F55\u4E0B\u6267\u884C\u5BF9\u5E94 fix \u6307\u4EE4\uFF0C\u53EA\u4E0D\u8FC7\u5728 PhpStorm \u4E2D\u901A\u8FC7\u8FD9\u79CD\u914D\u7F6E\u5916\u90E8\u5DE5\u5177\u7684\u65B9\u5F0F\u66F4\u52A0\u76F4\u89C2\u66F4\u52A0\u4FBF\u6377\uFF0C\u8FD8\u53EF\u4EE5\u4E3A\u8FD9\u4E2A PHP CS Fixer \u5916\u90E8\u5DE5\u5177\u914D\u7F6E\u4E00\u4E2A\u5FEB\u6377\u952E\uFF0C\u8FD9\u6837\u5C31\u66F4\u52A0\u65B9\u4FBF\u3002</p><h2 id="\u81EA\u5B9A\u4E49\u98CE\u683C\u914D\u7F6E" tabindex="-1">\u81EA\u5B9A\u4E49\u98CE\u683C\u914D\u7F6E <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u98CE\u683C\u914D\u7F6E" aria-hidden="true">#</a></h2><p>php-cs-fixer \u652F\u6301\u5C06\u9879\u76EE\u914D\u7F6E\u4FDD\u5B58\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E2D\u7684 <code>.php-cs-fixer.dist.php</code> \u6587\u4EF6\u4E2D\uFF0C\u800C\u4E0D\u662F\u4F7F\u7528\u547D\u4EE4\u884C\u9009\u9879\u81EA\u5B9A\u4E49\u89C4\u5219\u548C\u89C4\u5219\u96C6\u3002</p><p>\u8BE5\u6587\u4EF6\u5FC5\u987B\u8FD4\u56DE <code>PhpCsFixer\\ConfigInterface</code> \u7684\u5B9E\u4F8B\uFF0C\u8BE5\u5B9E\u4F8B\u5141\u8BB8\u60A8\u914D\u7F6E\u9700\u8981\u5206\u6790\u7684\u89C4\u5219\u3001\u6587\u4EF6\u548C\u76EE\u5F55\u3002</p><p>\u8FD8\u53EF\u4EE5\u521B\u5EFA <code>.php-cs-fixer.php</code> \u6587\u4EF6\uFF0C\u8FD9\u662F\u5C06\u4F7F\u7528\u7684\u672C\u5730\u914D\u7F6E\uFF0C\u800C\u4E0D\u662F\u9879\u76EE\u914D\u7F6E\u3002</p><p>\u5C06\u8BE5\u6587\u4EF6\u6DFB\u52A0\u5230 <code>.gitignore</code> \u5FFD\u7565\u3002\u4F7F\u7528 <code>--config</code> \u9009\u9879\uFF0C\u53EF\u4EE5\u6307\u5B9A\u6307\u5411 <code>.php-cs-fixer.php</code> \u6587\u4EF6\u3002</p><ul><li><p>\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u65B0\u5EFA\u81EA\u5B9A\u4E49\u89C4\u5219\uFF0C\u5E76\u547D\u540D\u4E3A<code>.php-cs-fixer.dist.php</code>\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-php"><button class="copy"></button><span class="lang">php</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;?</span><span style="color:#A6ACCD;">php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">finder </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Symfony</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Component</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Finder</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Finder</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">create</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">in</span><span style="color:#89DDFF;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">__DIR__</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">__DIR__</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/routes</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">__DIR__</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/tests</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">])</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">name</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">*.php</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">notName</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">*.blade.php</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">ignoreDotFiles</span><span style="color:#89DDFF;">(true)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">ignoreVCS</span><span style="color:#89DDFF;">(true);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> PhpCsFixer</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Config</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">setRules</span><span style="color:#89DDFF;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@PSR12</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">array_syntax</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">syntax</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">short</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ordered_imports</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sort_algorithm</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">alpha</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">no_unused_imports</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">not_operator_with_successor_space</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">trailing_comma_in_multiline</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">phpdoc_scalar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">unary_operator_spaces</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">binary_operator_spaces</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">blank_line_before_statement</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">statements</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">break</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">continue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">declare</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">return</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">throw</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">try</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">phpdoc_single_line_var_spacing</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">phpdoc_var_without_name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">class_attributes_separation</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">elements</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">method</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">one</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">method_argument_space</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">on_multiline</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ensure_fully_multiline</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">keep_multiple_spaces_after_comma</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">single_trait_insert_per_statement</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">])</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">setFinder</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">finder</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div></li><li><p>\u91CD\u65B0\u914D\u7F6E\u5916\u90E8\u5DE5\u5177\u6765\u5B9E\u73B0\u6279\u91CF\u4FEE\u6B63\u6307\u5B9A\u76EE\u5F55\u7684\u4EE3\u7801\u98CE\u683C \u5728 <code>Preferences</code> -&gt; <code>Tools</code> -&gt; <code>External Tools</code> \u754C\u9762\u70B9\u51FB <code>+</code> \u65B0\u5EFA\u4E00\u4E2A\u5916\u90E8\u5DE5\u5177\uFF1A</p><details class="details custom-block"><summary>\u70B9\u51FB\u5207\u6362\u622A\u56FE\u5C55\u793A\u4E0E\u9690\u85CF</summary><p><img src="`+s+'" alt=""></p></details><p>\u5728\u5F39\u51FA\u7A97\u4E2D\u8F93\u5165\u5982\u4E0B\u5185\u5BB9\uFF1A</p><ul><li>Name: <code>PHP CS Fixer</code></li><li>Description: <code>Apply php-cs-fixer to files.</code></li><li>Program: <code>/Users/curder/.composer/vendor/bin/php-cs-fixer</code></li><li><strong>Arguments: <code>fix $FileDir$ --config=.php-cs-fixer.dist.php --allow-risky=yes</code></strong></li><li>Working directory: <code>$ProjectFileDir$</code></li></ul><details class="details custom-block"><summary>\u70B9\u51FB\u5207\u6362\u622A\u56FE\u5C55\u793A\u4E0E\u9690\u85CF</summary><p><img src="'+C+'" alt=""></p></details><p>\u5C06\u8FD9\u4E2A\u5916\u90E8\u5DE5\u5177\u547D\u540D\u4E3A <code>PHP CS Fixer</code>\uFF0C\u5728 Paragam \u8F93\u5165 <code>php-cs-fixer</code> \u6240\u5728\u7CFB\u7EDF\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u53C2\u6570\u4E2D\u8F93\u5165\u4FEE\u590D\u81EA\u5B9A\u4E49\u914D\u7F6E\uFF0C\u8FD9\u91CC\u6211\u4EEC\u6307\u5B9A\u8DEF\u5F84\u4E3A\u5F53\u524D\u76EE\u5F55\uFF0C\u9A8C\u8BC1\u89C4\u5219\u4E3A <code>PSR-12</code>\uFF0C\u6700\u540E\u70B9\u51FB <code>OK</code> \u4FDD\u5B58\u3002</p></li></ul><h2 id="\u5173\u95ED\u4FEE\u590D\u8F93\u51FA" tabindex="-1">\u5173\u95ED\u4FEE\u590D\u8F93\u51FA <a class="header-anchor" href="#\u5173\u95ED\u4FEE\u590D\u8F93\u51FA" aria-hidden="true">#</a></h2><p>\u5982\u679C\u4E0D\u60F3\u6BCF\u6B21\u90FD\u67E5\u770B\u4FEE\u590D\u540E\u7684\u7ED3\u679C\u6253\u5370\uFF0C\u53EF\u4EE5\u5728\u914D\u7F6E\u5DE5\u5177\u662F\u5C06 <code>Advanced Options</code> -&gt; <code>Open console for tool output</code> \u5173\u95ED\u5373\u53EF\u3002</p><details class="details custom-block"><summary>\u70B9\u51FB\u5207\u6362\u622A\u56FE\u5C55\u793A\u4E0E\u9690\u85CF</summary><p><img src="'+d+'" alt=""></p></details>',41),m=[h];function g(u,f,_,x,P,b){return n(),p("div",null,m)}const k=a(A,[["render",g]]);export{S as __pageData,k as default};
