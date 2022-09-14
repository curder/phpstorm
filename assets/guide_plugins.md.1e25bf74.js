import{_ as e,c as a,o as s,a as o}from"./app.201db6a0.js";const t="/phpstorm/assets/marketplace-plugins.470fc05b.png",r="/phpstorm/assets/search-plugins-use-keymap.4f6a4b0e.png",l="/phpstorm/assets/install-plugin.76a41ade.png",i="/phpstorm/assets/download-plugin-jar-data.827025e2.png",n="/phpstorm/assets/install-plugin-from-disk.1e9c76da.png",p="/phpstorm/assets/uninstall-plugin.56a164ef.png",S=JSON.parse('{"title":"\u63D2\u4EF6\u7BA1\u7406","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u641C\u7D22\u5B89\u88C5","slug":"\u641C\u7D22\u5B89\u88C5","link":"#\u641C\u7D22\u5B89\u88C5","children":[]},{"level":2,"title":"jar\u5B58\u6863\u5B89\u88C5","slug":"jar\u5B58\u6863\u5B89\u88C5","link":"#jar\u5B58\u6863\u5B89\u88C5","children":[]},{"level":2,"title":"\u5378\u8F7D","slug":"\u5378\u8F7D","link":"#\u5378\u8F7D","children":[]},{"level":2,"title":"\u63D2\u4EF6\u63A8\u8350","slug":"\u63D2\u4EF6\u63A8\u8350","link":"#\u63D2\u4EF6\u63A8\u8350","children":[]}],"relativePath":"guide/plugins.md","lastUpdated":1663142628000}'),c={name:"guide/plugins.md"},d=o('<h1 id="\u63D2\u4EF6\u7BA1\u7406" tabindex="-1">\u63D2\u4EF6\u7BA1\u7406 <a class="header-anchor" href="#\u63D2\u4EF6\u7BA1\u7406" aria-hidden="true">#</a></h1><p>\u9664\u4E86 PhpStorm \u81EA\u5E26\u7684\u529F\u80FD\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7\u5B89\u88C5\u7B2C\u4E09\u65B9\u63D2\u4EF6\u7684\u65B9\u5F0F\u6765\u6269\u5C55\u7F16\u8F91\u5668\u529F\u80FD\u3002</p><p>PhpStorm \u63D2\u4EF6\u5B89\u88C5\u3001\u5378\u8F7D\u7BA1\u7406\u662F\u5728\u7CFB\u7EDF\u504F\u597D\u8BBE\u5B9A\u7684 <code>Plugins</code> \u91CC\u3002\u53EF\u4EE5\u901A\u8FC7\u4E0B\u5217\u65B9\u5F0F\u6253\u5F00 <code>Plugins</code>\uFF1A</p><ul><li><p>\u65B9\u5F0F\u4E00\uFF1A\u53EF\u4EE5\u4F7F\u7528\u5FEB\u6377\u952E <code>Command + ,</code> \u5728\u504F\u597D\u8BBE\u7F6E <code>Preferences</code> -&gt; <code>Plugins</code> \u83DC\u5355\u680F\u6253\u5F00\u63D2\u4EF6\u5B89\u88C5\u754C\u9762\uFF1A</p><p><img src="'+t+'" alt=""></p></li><li><p>\u65B9\u5F0F\u4E8C\uFF1A\u4F7F\u7528\u5FEB\u6377\u952E <code>Shift + Shift</code> \u6216 <code>Command + Shift + A</code>\u540E\uFF0C\u8F93\u5165 <strong>Plugins</strong> \u6765\u6253\u5F00\u63D2\u4EF6\u5B89\u88C5\u754C\u9762\uFF1A</p><p><img src="'+r+'" alt=""></p></li></ul><h2 id="\u641C\u7D22\u5B89\u88C5" tabindex="-1">\u641C\u7D22\u5B89\u88C5 <a class="header-anchor" href="#\u641C\u7D22\u5B89\u88C5" aria-hidden="true">#</a></h2><p>\u5728 <code>Plugins</code> \u7684\u529F\u80FD\u754C\u9762\u5305\u542B\u4E86\u4E24\u4E2A\u6807\u7B7E\u9875\uFF0C\u5DE6\u4FA7\u5BF9\u5E94\u63D2\u4EF6\u5E02\u573A <code>Marketplace</code>\uFF0C\u7528\u6237\u53EF\u4EE5\u5728\u8FD9\u91CC\u641C\u7D22\u5E76\u9009\u62E9\u5B89\u88C5\u7684\u7B2C\u4E09\u65B9\u63D2\u4EF6\u3002</p><p>\u6BD4\u5982\u60F3\u8981\u5728 PhpStorm \u4E2D\u5B89\u88C5 <code>CamelCase</code> \u63D2\u4EF6\uFF0C\u8F93\u5165\u63D2\u4EF6\u540D\u4F1A\u81EA\u52A8\u641C\u7D22\uFF0C\u5728\u4E0B\u62C9\u5217\u8868\u9009\u62E9\u6B63\u786E\u7684\u63D2\u4EF6\uFF0C\u53F3\u4FA7\u4F1A\u663E\u793A\u5BF9\u5E94\u63D2\u4EF6\u7684\u7B80\u5355\u4ECB\u7ECD\u548C\u4F7F\u7528\u65B9\u6CD5\uFF0C\u70B9\u51FB <code>Install</code> \u5373\u53EF\u5B89\u88C5\u5230\u672C\u5730\uFF0C\u6700\u540E\u8BB0\u5F97\u70B9\u51FB <strong>OK</strong> \u4FDD\u5B58\u3002</p><p><img src="'+l+'" alt=""></p><div class="info custom-block"><p class="custom-block-title">\u6CE8\u610F</p><p>\u6709\u7684\u63D2\u4EF6\u9700\u8981\u91CD\u542F PhpStorm \u624D\u80FD\u751F\u6548\uFF0C\u5177\u4F53\u4EE5\u63D2\u4EF6\u4F7F\u7528\u8BF4\u660E\u4E3A\u51C6\u3002</p></div><h2 id="jar\u5B58\u6863\u5B89\u88C5" tabindex="-1">jar\u5B58\u6863\u5B89\u88C5 <a class="header-anchor" href="#jar\u5B58\u6863\u5B89\u88C5" aria-hidden="true">#</a></h2><p>\u5F53\u4F7F\u7528\u4E0A\u9762\u7684\u65B9\u5F0F\u4E0B\u8F7D\u7531\u4E8E\u7F51\u7EDC\u7B49\u539F\u56E0\u65E0\u6CD5\u5B8C\u6210\u5B89\u88C5\u53EF\u4EE5\u5C1D\u8BD5\u5728<a href="https://plugins.jetbrains.com/" target="_blank" rel="noreferrer">\u5B98\u7F51\u63D2\u4EF6\u5E02\u573A</a>\u627E\u5230\u5BF9\u5E94\u63D2\u4EF6\u7684 <strong>.jar</strong> \u5305\u3002</p><ol><li><p>\u4E0B\u8F7Djar\u5B89\u88C5\u5305 \u8FD8\u662F\u4EE5\u5B89\u88C5 <code>CamelCase</code> \u63D2\u4EF6\u4E3A\u4F8B\uFF0C\u641C\u7D22\u5E76\u6765\u5230\u63D2\u4EF6\u7684\u8BE6\u60C5\u9875\u9762\u7684 <code>Versions</code> \u9009\u62E9\u7B26\u5408\u7F16\u8F91\u5668\u7248\u672C\u7684\u8F6F\u4EF6\u8FDB\u884C\u4E0B\u8F7D\uFF1A</p><p><img src="'+i+'" alt=""></p></li><li><p>\u5728 PhpStorm \u4E2D\u542F\u7528</p><ul><li>\u5355\u51FB\u9F7F\u8F6E\u56FE\u6807\u7684\u8BBE\u7F6E\u6309\u94AE\uFF0C\u7136\u540E\u9009\u62E9 <code>Install Plugin from disk...</code></li><li>\u9009\u62E9\u4E0A\u4E00\u6B65\u4E0B\u8F7D\u7684\u63D2\u4EF6jar\u6587\u4EF6\u5E76\u5355\u51FB\u786E\u5B9A</li><li>\u5355\u51FB\u786E\u5B9A\u4EE5\u5E94\u7528\u66F4\u6539\u5E76\u5728\u51FA\u73B0\u63D0\u793A\u65F6\u91CD\u65B0\u542F\u52A8 PhpStorm <img src="'+n+'" alt=""></li></ul></li></ol><h2 id="\u5378\u8F7D" tabindex="-1">\u5378\u8F7D <a class="header-anchor" href="#\u5378\u8F7D" aria-hidden="true">#</a></h2><p>\u5728 Plugins \u7684\u529F\u80FD\u754C\u9762\u5305\u542B\u4E86\u4E24\u4E2A\u6807\u7B7E\u9875\uFF0C\u53F3\u4FA7\u7F16\u8F91\u5668\u9884\u8BBE\u548C\u7528\u6237\u5B89\u88C5\u7684\u7B2C\u4E09\u65B9\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u5728\u8FD9\u91CC\u5BF9\u63D2\u4EF6\u7981\u7528\u548C\u5378\u8F7D\u3002</p><ol><li>\u9009\u4E2D\u53F3\u4FA7\u7684 <code>Installed</code> \u6765\u5230\u5DF2\u5B89\u88C5\u7684\u63D2\u4EF6</li><li>\u9009\u4E2D\u9700\u8981\u64CD\u4F5C\u7684\u63D2\u4EF6</li><li>\u4F7F\u7528\u7A7A\u683C\u7981\u7528</li><li>\u53F3\u952E\u70B9\u51FB\u9009\u62E9 <code>Uninstall</code> \u5378\u8F7D\u63D2\u4EF6</li><li>\u70B9\u51FB <strong>OK</strong> \u786E\u8BA4\u64CD\u4F5C <img src="'+p+'" alt=""></li></ol><h2 id="\u63D2\u4EF6\u63A8\u8350" tabindex="-1">\u63D2\u4EF6\u63A8\u8350 <a class="header-anchor" href="#\u63D2\u4EF6\u63A8\u8350" aria-hidden="true">#</a></h2><ul><li><p><a href="https://plugins.jetbrains.com/plugin/7160" target="_blank" rel="noreferrer"><strong>CamelCase</strong></a></p><p>\u5141\u8BB8\u7528\u6237\u901A\u8FC7\u5FEB\u6377\u952E <code>Alt + Shift + U</code> \u5728 <code>kebab-case</code>\u3001<code>SNAKE_CASE</code>\u3001<code>PascalCase</code>\u3001<code>camelCase</code>\u3001<code>snake_case</code> \u6216 <code>space case</code> \u4E4B\u95F4\u8F7B\u677E\u5207\u6362</p></li><li><p><a href="https://plugins.jetbrains.com/plugin/8579" target="_blank" rel="noreferrer"><strong>Translation</strong></a></p><p>\u9009\u4E2D\u5355\u8BCD\u8FDB\u884C\u7FFB\u8BD1\uFF0C\u652F\u6301\u8C37\u6B4C\u3001\u6709\u9053\u3001\u963F\u91CC\u5DF4\u5DF4\u548C\u767E\u5EA6\u7684\u7FFB\u8BD1\u63A5\u53E3\u3002\u9664\u4E86\u8C37\u6B4C\u7FFB\u8BD1\u4E4B\u5916\uFF0C\u5176\u5B83\u7684\u63D0\u4F9B\u5546\u90FD\u9700\u8981\u6388\u6743\u3002</p><p>\u63D2\u4EF6\u914D\u7F6E\u5728\u7CFB\u7EDF\u504F\u597D\u8BBE\u5B9A\u7684 <code>Tools</code> -&gt; <code>Translation</code>\u3002\u6CE8\u610F\uFF1A\u5728<strong>\u5E38\u89C4</strong>\u5904\u7684\u4E3B\u8981\u8BED\u8A00\u9009\u62E9 <code>\u4E2D\u6587\u7B80\u4F53</code></p><p>\u4F7F\u7528\u65B9\u5F0F\uFF1A1. \u9009\u4E2D\u5355\u8BCD\u6216\u6BB5\u4F7F\u7528\u5FEB\u6377\u952E <code>Command + Ctrl + U</code> \u5C31\u53EF\u4EE5\u547C\u51FA\u7FFB\u8BD1\u5F39\u5C42 2. \u9009\u62E9\u5355\u8BCD\u6216\u6BB5\u540E\u53F3\u952E\u70B9\u51FB\u9009\u62E9 <code>Translate</code></p></li><li><p><a href="https://plugins.jetbrains.com/plugin/13710" target="_blank" rel="noreferrer"><strong>Chinese \u200B(Simplified)\u200B Language Pack / \u4E2D\u6587\u8BED\u8A00\u5305</strong></a></p><p>\u4E0B\u8F7D\u5E76\u5B89\u88C5\u540E\uFF0C\u91CD\u542F PhpStorm \u7F16\u8F91\u5668\u5916\u89C2\u53EF\u4EE5\u770B\u5230\u652F\u6301\u4E2D\u6587\u64CD\u4F5C\u754C\u9762\u3002</p></li><li><p><a href="https://plugins.jetbrains.com/plugin/12734" target="_blank" rel="noreferrer"><strong>Chinese PHP Document</strong></a></p><p>\u5149\u6807\u60AC\u6D6E\u5728 PHP \u7CFB\u7EDF\u51FD\u6570\u4E0A\uFF0C\u53EF\u4EE5\u5728\u4EE3\u7801\u4E0A\u5FEB\u901F\u67E5\u770B\u5176\u4E2D\u6587\u6587\u6863\u3002</p></li><li><p><a href="https://plugins.jetbrains.com/plugin/9525" target="_blank" rel="noreferrer"><strong>.env files support</strong></a></p><p><code>.env</code> \u6587\u4EF6\u7684\u9AD8\u4EAE\u663E\u793A\u63D2\u4EF6</p></li></ul>',17),g=[d];function h(m,u,_,f,P,b){return s(),a("div",null,g)}const C=e(c,[["render",h]]);export{S as __pageData,C as default};
