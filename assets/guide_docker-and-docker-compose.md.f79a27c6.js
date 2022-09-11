import{_ as e,c as o,o as r,a as c}from"./app.abfca8dd.js";const t="/phpstorm/assets/phpstorm-docker-settings.71835e99.png",d="/phpstorm/assets/phpstorm-docker-connected.e1a6bfb2.png",s="/phpstorm/assets/phpstorm-find-and-inspect-image.23c80dd8.png",a="/phpstorm/assets/phpstorm-docker-registry-dialog.bbc3d99c.png",i="/phpstorm/assets/phpstorm-docker-pull-image-console.963ec419.png",p="/phpstorm/assets/phpstorm-docker-pull-image-processing.53ab7a49.png",l="/phpstorm/assets/phpstorm-docker-push-image.c804ec56.png",n="/phpstorm/assets/phpstorm-docker-push-dialog.8cfbf418.png",C=JSON.parse('{"title":"Docker \u548C Docker Compose","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u542F\u7528 Docker \u652F\u6301","slug":"\u542F\u7528-docker-\u652F\u6301","link":"#\u542F\u7528-docker-\u652F\u6301","children":[]},{"level":2,"title":"\u955C\u50CF\u7BA1\u7406","slug":"\u955C\u50CF\u7BA1\u7406","link":"#\u955C\u50CF\u7BA1\u7406","children":[{"level":3,"title":"\u914D\u7F6E\u955C\u50CF\u5730\u5740","slug":"\u914D\u7F6E\u955C\u50CF\u5730\u5740","link":"#\u914D\u7F6E\u955C\u50CF\u5730\u5740","children":[]},{"level":3,"title":"\u4ECE Docker Registry \u83B7\u53D6\u955C\u50CF","slug":"\u4ECE-docker-registry-\u83B7\u53D6\u955C\u50CF","link":"#\u4ECE-docker-registry-\u83B7\u53D6\u955C\u50CF","children":[]},{"level":3,"title":"\u5C06\u955C\u50CF\u63A8\u9001\u5230 Docker Registry \u4ED3\u5E93","slug":"\u5C06\u955C\u50CF\u63A8\u9001\u5230-docker-registry-\u4ED3\u5E93","link":"#\u5C06\u955C\u50CF\u63A8\u9001\u5230-docker-registry-\u4ED3\u5E93","children":[]}]}],"relativePath":"guide/docker-and-docker-compose.md","lastUpdated":1662887511000}'),h={name:"guide/docker-and-docker-compose.md"},k=c('<h1 id="docker-\u548C-docker-compose" tabindex="-1">Docker \u548C Docker Compose <a class="header-anchor" href="#docker-\u548C-docker-compose" aria-hidden="true">#</a></h1><p><a href="https://www.docker.com/what-docker" target="_blank" rel="noreferrer">Docker</a> \u4F7F\u5F00\u53D1\u4EBA\u5458\u80FD\u591F\u5728\u5BB9\u5668\u5185\u90E8\u7F72\u5E94\u7528\u7A0B\u5E8F\uFF0C\u4EE5\u4FBF\u5728\u4E0E\u751F\u4EA7\u73AF\u5883\u76F8\u540C\u7684\u73AF\u5883\u4E2D\u6D4B\u8BD5\u4EE3\u7801\u3002</p><p>PhpStorm \u4F7F\u7528 <a href="https://plugins.jetbrains.com/plugin/7724-docker" target="_blank" rel="noreferrer">Docker\u63D2\u4EF6</a> \u63D0\u4F9B Docker \u652F\u6301\u3002</p><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CDocker \u63D2\u4EF6\u5DF2\u4E0B\u8F7D\u5E76\u542F\u7528\u3002\u5982\u679C\u63D2\u4EF6\u88AB\u7981\u7528\uFF0C\u5728 <code>\u8BBE\u7F6E/\u9996\u9009\u9879</code> -&gt; <code>\u63D2\u4EF6</code> \u9875\u9762\u7684 <code>\u5DF2\u5B89\u88C5</code> \u9009\u9879\u5361\u4E0A\u542F\u7528\u5B83\u3002</p><h2 id="\u542F\u7528-docker-\u652F\u6301" tabindex="-1">\u542F\u7528 Docker \u652F\u6301 <a class="header-anchor" href="#\u542F\u7528-docker-\u652F\u6301" aria-hidden="true">#</a></h2><ol><li>\u5B89\u88C5\u5E76\u542F\u52A8 Docker\uFF0C<a href="https://docs.docker.com/get-docker/" target="_blank" rel="noreferrer">\u70B9\u8FD9\u91CC\u67E5\u770B\u6587\u6863</a></li><li>\u914D\u7F6E Docker \u5B88\u62A4\u7A0B\u5E8F\u8FDE\u63A5\u8BBE\u7F6E <ul><li><p>\u4F7F\u7528\u5FEB\u6377\u952E <code>Command + ,</code>\u6253\u5F00\u7CFB\u7EDF\u504F\u597D\u8BBE\u7F6E\uFF0C\u9009\u62E9 <code>Build, Execution, Deployment</code> -&gt; <code>Docker</code></p></li><li><p>\u70B9\u51FB <code>+</code> \u6DFB\u52A0 Docker \u914D\u7F6E\u5E76\u6307\u5B9A\u5982\u4F55\u8FDE\u63A5\u5230 Docker \u5B88\u62A4\u7A0B\u5E8F <img src="'+t+'" alt=""></p></li><li><p>\u8FDE\u63A5\u5230 Docker \u5B88\u62A4\u7A0B\u5E8F \u914D\u7F6E\u7684 Docker \u8FDE\u63A5\u4F1A\u51FA\u73B0\u5728\u670D\u52A1\u5DE5\u5177\u7A97\u53E3\u4E2D\uFF08\u4F7F\u7528\u5FEB\u6377\u952E <code>Command + 8</code>\u5207\u6362\u663E\u793A\u548C\u9690\u85CF\uFF09\u3002 \u9009\u62E9 <code>Docker</code> \u8282\u70B9\u5E76\u5355\u51FB\u8FDE\u63A5\u6309\u94AE\uFF0C\u6216\u4ECE\u4E0A\u4E0B\u6587\u83DC\u5355\u4E2D\u9009\u62E9\u8FDE\u63A5\u3002 <img src="'+d+'" alt=""> \u8981\u7F16\u8F91 <code>Docker</code> \u8FDE\u63A5\u8BBE\u7F6E\uFF0C\u53EF\u4EE5\u9009\u62E9 <code>Docker</code> \u8282\u70B9\u5E76\u5355\u51FB\u5DE5\u5177\u680F\u4E0A\u7684\u7F16\u8F91\u914D\u7F6E\u6309\u94AE\uFF0C\u6216\u4ECE\u4E0A\u4E0B\u6587\u83DC\u5355\u4E2D\u9009\u62E9\u7F16\u8F91\u914D\u7F6E\u3002</p><p>\u5728 Services \u5DE5\u5177\u7A97\u53E3\uFF08\u4F7F\u7528\u5FEB\u6377\u952E <code>Command + 8</code>\uFF09\u4E2D\uFF0C\u53EF\u4EE5\u62C9\u53D6\u548C\u63A8\u9001\u955C\u50CF\u3001\u521B\u5EFA\u548C\u8FD0\u884C\u5BB9\u5668\u3001\u7BA1\u7406 Docker Compose \u670D\u52A1\u7B49\u3002 \u4E5F\u53EF\u4EE5\u4E0E\u5176\u4ED6\u5DE5\u5177\u7A97\u53E3\u4E00\u6837\uFF0C\u8F93\u5165\u955C\u50CF\u6216\u5BB9\u5668\u7684\u540D\u79F0\u4EE5\u7A81\u51FA\u663E\u793A\u5339\u914D\u7684\u9879\u76EE\u3002 <img src="'+s+'" alt=""></p></li></ul></li></ol><h2 id="\u955C\u50CF\u7BA1\u7406" tabindex="-1">\u955C\u50CF\u7BA1\u7406 <a class="header-anchor" href="#\u955C\u50CF\u7BA1\u7406" aria-hidden="true">#</a></h2><h3 id="\u914D\u7F6E\u955C\u50CF\u5730\u5740" tabindex="-1">\u914D\u7F6E\u955C\u50CF\u5730\u5740 <a class="header-anchor" href="#\u914D\u7F6E\u955C\u50CF\u5730\u5740" aria-hidden="true">#</a></h3><ol><li><p>\u8F93\u5165\u5FEB\u6377\u952E <code>Command + ,</code> \u6253\u5F00 IDE \u8BBE\u7F6E\u5E76\u9009\u62E9 <code>Build, Execution, Deployment</code> -&gt; <code>Docker</code> -&gt; <code>Docker Registry</code></p></li><li><p>\u5355\u51FB\u6DFB\u52A0\u6309\u94AE\u4EE5\u6DFB\u52A0 <code>Docker Registry</code> \u914D\u7F6E\u5E76\u6307\u5B9A\u5982\u4F55\u8FDE\u63A5\u5230\u6CE8\u518C\u8868\u3002\u5982\u679C\u6307\u5B9A\u6388\u6743\u51ED\u8BC1\uFF0CPhpStorm \u5C06\u81EA\u52A8\u68C0\u67E5\u4E0E\u6CE8\u518C\u8868\u7684\u8FDE\u63A5\uFF0C\u8FDE\u63A5\u6210\u529F\u6D88\u606F\u5E94\u51FA\u73B0\u5728\u5BF9\u8BDD\u6846\u5E95\u90E8\u3002</p><p><img src="'+a+'" alt=""></p><p>\u66F4\u591A Docker Registry \u914D\u7F6E\u53EF\u4EE5<a href="https://www.jetbrains.com/help/phpstorm/settings-docker-registry.html" target="_blank" rel="noreferrer">\u67E5\u770B\u8FD9\u91CC</a></p></li></ol><h3 id="\u4ECE-docker-registry-\u83B7\u53D6\u955C\u50CF" tabindex="-1">\u4ECE Docker Registry \u83B7\u53D6\u955C\u50CF <a class="header-anchor" href="#\u4ECE-docker-registry-\u83B7\u53D6\u955C\u50CF" aria-hidden="true">#</a></h3><ol><li><p>\u5728\u670D\u52A1\u5DE5\u5177\u7A97\u53E3\u4E2D\uFF0C\u9009\u62E9\u56FE\u50CF\u8282\u70B9</p></li><li><p>\u5728\u955C\u50CF\u7684\u63A7\u5236\u53F0\u4E0B\uFF0C\u8F93\u5165\u8981\u62C9\u53D6\u7684\u56FE\u50CF\u7684\u540D\u79F0\uFF0C\u4F8B\u5982 <code>curder/laravel-docker</code></p><p><img src="'+i+'" alt=""></p></li><li><p>\u6309 <code>Command + Enter</code> \u62C9\u53D6\u955C\u50CF\u5230\u672C\u5730\u3002</p><p><img src="'+p+'" alt=""></p></li></ol><h3 id="\u5C06\u955C\u50CF\u63A8\u9001\u5230-docker-registry-\u4ED3\u5E93" tabindex="-1">\u5C06\u955C\u50CF\u63A8\u9001\u5230 Docker Registry \u4ED3\u5E93 <a class="header-anchor" href="#\u5C06\u955C\u50CF\u63A8\u9001\u5230-docker-registry-\u4ED3\u5E93" aria-hidden="true">#</a></h3><ol><li><p>\u5728\u670D\u52A1 <code>Services</code> \u5DE5\u5177\u7A97\u53E3\u4E2D\uFF08\u4F7F\u7528\u5FEB\u6377\u952E <code>Command + 8</code>\uFF09\uFF0C\u9009\u62E9\u8981\u4E0A\u4F20\u7684\u955C\u50CF\u5E76\u5355\u51FB <code>push image</code> \u6309\u94AE\u6216\u4ECE\u4E0A\u4E0B\u6587\u83DC\u5355\u4E2D\u9009\u62E9 <code>push image</code></p><p><img src="'+l+'" alt=""></p></li><li><p>\u9009\u62E9 Docker Registry \u5E76\u6307\u5B9A\u540D\u79F0\u548C\u7248\u672C\u6807\u7B7E\uFF08\u955C\u50CF\u7684\u540D\u79F0\u548C\u7248\u672C\uFF0C\u4F8B\u5982 <code>my-laravel-docker:v2</code>\uFF09</p><p><img src="'+n+'" alt=""></p></li><li><p>\u5355\u51FB <code>OK</code> \u8FD0\u884C docker \u63A8\u9001\u547D\u4EE4</p></li></ol><p>\u66F4\u591A\u955C\u50CF\u548C\u5BB9\u5668\u76F8\u5173\u64CD\u4F5C\u53EF\u4EE5\u67E5\u770B\u5B98\u65B9\u6587\u6863\uFF0C\u5730\u5740\uFF1A<a href="https://www.jetbrains.com/help/phpstorm/docker.html#run-containers" target="_blank" rel="noreferrer">Docker | PhpStorm</a></p>',14),m=[k];function g(_,D,u,f,y,b){return r(),o("div",null,m)}const x=e(h,[["render",g]]);export{C as __pageData,x as default};
