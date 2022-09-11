import{_ as e,c as o,o as t,a as d}from"./app.d7678259.js";const p="/phpstorm/assets/phpstorm-deployment-add-server.99bc3d14.png",c="/phpstorm/assets/phpstorm-deployment-connection-tab.38bd341d.png",l="/phpstorm/assets/phpstorm-deployment-mappings-tab.16ef9413.png",s="/phpstorm/assets/phpstorm-upload-to-custom-local-folder.d4eb4d69.png",a="/phpstorm/assets/phpstorm-browse-remote-host.eb3a2e12.png",r="/phpstorm/assets/phpstorm-show-upload-result.d35b4556.png",i="/phpstorm/assets/phpstorm-deployment-modify-source.b3a48ec6.png",n="/phpstorm/assets/phpstorm-compare-with-local-version.7bdf5bc4.png",h="/phpstorm/assets/phpstorm-deployment-diff-viewer.c8dfd864.png",m="/phpstorm/assets/phpstorm-deployment-download-warning.708f3b13.png",g="/phpstorm/assets/phpstorm-deployment-sync.02286954.png",u="/phpstorm/assets/phpstorm-using-as-default.3c2b6d48.png",_="/phpstorm/assets/always-upload-changed-files-automatically-to-the-default-server.ce14348b.png",f="/phpstorm/assets/phpstorm-deployment-options-external-changes.aabce05e.png",A=JSON.parse('{"title":"Deployment","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u914D\u7F6E\u90E8\u7F72\u670D\u52A1\u5668","slug":"\u914D\u7F6E\u90E8\u7F72\u670D\u52A1\u5668","link":"#\u914D\u7F6E\u90E8\u7F72\u670D\u52A1\u5668","children":[{"level":3,"title":"\u8FDE\u63A5\u9009\u9879 Connection","slug":"\u8FDE\u63A5\u9009\u9879-connection","link":"#\u8FDE\u63A5\u9009\u9879-connection","children":[]},{"level":3,"title":"\u6620\u5C04\u9009\u9879 Mappings","slug":"\u6620\u5C04\u9009\u9879-mappings","link":"#\u6620\u5C04\u9009\u9879-mappings","children":[]}]},{"level":2,"title":"\u90E8\u7F72","slug":"\u90E8\u7F72","link":"#\u90E8\u7F72","children":[{"level":3,"title":"\u4E0A\u4F20","slug":"\u4E0A\u4F20","link":"#\u4E0A\u4F20","children":[]},{"level":3,"title":"\u6BD4\u8F83\u8FDC\u7A0B\u7248\u672C\u548C\u672C\u5730\u7248\u672C","slug":"\u6BD4\u8F83\u8FDC\u7A0B\u7248\u672C\u548C\u672C\u5730\u7248\u672C","link":"#\u6BD4\u8F83\u8FDC\u7A0B\u7248\u672C\u548C\u672C\u5730\u7248\u672C","children":[]},{"level":3,"title":"\u4E0B\u8F7D","slug":"\u4E0B\u8F7D","link":"#\u4E0B\u8F7D","children":[]}]},{"level":2,"title":"\u540C\u6B65\u4EE3\u7801","slug":"\u540C\u6B65\u4EE3\u7801","link":"#\u540C\u6B65\u4EE3\u7801","children":[]},{"level":2,"title":"\u81EA\u52A8\u4E0A\u4F20\u5230\u9ED8\u8BA4\u670D\u52A1\u5668","slug":"\u81EA\u52A8\u4E0A\u4F20\u5230\u9ED8\u8BA4\u670D\u52A1\u5668","link":"#\u81EA\u52A8\u4E0A\u4F20\u5230\u9ED8\u8BA4\u670D\u52A1\u5668","children":[{"level":3,"title":"\u5C06\u670D\u52A1\u5668\u5B9A\u4E49\u4E3A\u9ED8\u8BA4\u670D\u52A1\u5668","slug":"\u5C06\u670D\u52A1\u5668\u5B9A\u4E49\u4E3A\u9ED8\u8BA4\u670D\u52A1\u5668","link":"#\u5C06\u670D\u52A1\u5668\u5B9A\u4E49\u4E3A\u9ED8\u8BA4\u670D\u52A1\u5668","children":[]},{"level":3,"title":"\u542F\u7528\u81EA\u52A8\u4E0A\u4F20","slug":"\u542F\u7528\u81EA\u52A8\u4E0A\u4F20","link":"#\u542F\u7528\u81EA\u52A8\u4E0A\u4F20","children":[]}]},{"level":2,"title":"\u5916\u90E8\u53D8\u66F4\u5FFD\u7565\u4E0A\u4F20","slug":"\u5916\u90E8\u53D8\u66F4\u5FFD\u7565\u4E0A\u4F20","link":"#\u5916\u90E8\u53D8\u66F4\u5FFD\u7565\u4E0A\u4F20","children":[]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]}],"relativePath":"guide/deployment.md","lastUpdated":1662914778000}'),y={name:"guide/deployment.md"},b=d('<h1 id="deployment" tabindex="-1">Deployment <a class="header-anchor" href="#deployment" aria-hidden="true">#</a></h1><p>\u901A\u8FC7\u4F7F\u7528 PhpStorm \u9010\u6B65\u914D\u7F6E\u4EE3\u7801\u5230\u8FDC\u7A0B\u4E3B\u673A\u7684\u7BA1\u7406\u90E8\u7F72\u3002</p><h2 id="\u914D\u7F6E\u90E8\u7F72\u670D\u52A1\u5668" tabindex="-1">\u914D\u7F6E\u90E8\u7F72\u670D\u52A1\u5668 <a class="header-anchor" href="#\u914D\u7F6E\u90E8\u7F72\u670D\u52A1\u5668" aria-hidden="true">#</a></h2><p>\u5728\u4E3B\u5DE5\u5177\u680F\u4E0A\u70B9\u51FB\u8BBE\u7F6E/\u9996\u9009\u9879\uFF0C\u6216\u6309 <code>\u2318 + ,</code>\u6253\u5F00<strong>\u8BBE\u7F6E/\u9996\u9009\u9879</strong>\u5BF9\u8BDD\u6846\uFF0C\u7136\u540E\u9009\u62E9 <code>Build, Execution, Deployment</code> -&gt; <code>Deployment</code> \u9875\u9762\uFF08\u4E5F\u53EF\u4EE5\u901A\u8FC7\u4ECE\u4E3B\u83DC\u5355\u4E2D\u9009\u62E9 <code>Tools</code> -&gt; <code>Deployment</code> -&gt; <code>Configration...</code>\uFF09</p><p>\u70B9\u51FB <code>Add +</code>\uFF0C\u9009\u62E9\u5176\u7C7B\u578B\uFF08\u8FD9\u662F Local or mounted folder\uFF09\uFF0C\u7136\u540E\u5728 <code>Create New Server</code> \u5BF9\u8BDD\u6846\u4E2D\uFF0C\u952E\u5165\u670D\u52A1\u5668\u540D\u79F0 <code>CustomLocalFolder</code>\uFF1A</p><p><img src="'+p+'" alt=""></p><p>\u65B0\u670D\u52A1\u5668\u5DF2\u6DFB\u52A0\uFF0C\u4F46\u5F53\u524D\u4ECD\u7136\u65E0\u6548\uFF0C\u56E0\u4E3A\u5B83\u4EC5\u663E\u793AWeb\u670D\u52A1\u5668URL <code>http://localhost</code>\uFF0C\u5C06\u5728\u5176\u4E2D\u5B9E\u9645\u6D4F\u89C8\u4E0A\u4F20\u7684\u6587\u4EF6\u3002</p><h3 id="\u8FDE\u63A5\u9009\u9879-connection" tabindex="-1">\u8FDE\u63A5\u9009\u9879 Connection <a class="header-anchor" href="#\u8FDE\u63A5\u9009\u9879-connection" aria-hidden="true">#</a></h3><p>\u9009\u62E9\u5C06\u8981\u4E0A\u4F20\u7684\u9879\u76EE\u6587\u4EF6\u76EE\u5F55\u3002\u5728\u5F53\u524D\u793A\u4F8B\u4E2D\u662F <code>/Users/curder/Desktop/codes</code> \u672C\u5730\u6587\u4EF6\u5939\u3002\u53EF\u4EE5\u6309\u5FEB\u6377\u952E <code>Shift + Enter</code> \u6253\u5F00 <code>Browser...</code> \u5BF9\u8BDD\u6846 \u3002</p><p><img src="'+c+'" alt=""></p><h3 id="\u6620\u5C04\u9009\u9879-mappings" tabindex="-1">\u6620\u5C04\u9009\u9879 Mappings <a class="header-anchor" href="#\u6620\u5C04\u9009\u9879-mappings" aria-hidden="true">#</a></h3><ul><li><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C<code>Local Path</code> \u5B57\u6BB5\u5305\u542B\u9879\u76EE\u6839\u76EE\u5F55\u7684\u8DEF\u5F84\u3002\u4F46\u53EF\u4EE5\u6839\u636E\u5B9E\u9645\u9700\u6C42\u5728\u9879\u76EE\u6811\u4E2D\u9009\u62E9\u4EFB\u4F55\u5176\u4ED6\u76EE\u5F55\uFF0C\u8FD9\u91CC\u4F7F\u7528\u9ED8\u8BA4\u503C</p></li><li><p>\u5728<code>Deployment Path</code> \u5B57\u6BB5\u4E2D\uFF08\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4E3A\u7A7A\uFF09\uFF0C\u6307\u5B9A\u670D\u52A1\u5668\u4E0A\u7684\u6587\u4EF6\u5939\uFF0CPhpStorm \u5C06\u5728\u5176\u4E2D\u4ECE <code>Local Path</code> \u5B57\u6BB5\u4E2D\u6307\u5B9A\u7684\u6587\u4EF6\u5939\u4E0A\u4F20\u6570\u636E\u3002\u76F8\u5BF9\u4E8E\u6587\u4EF6\u5939 <code>phpstorm</code> \u6307\u5B9A\u6B64\u8DEF\u5F84\u3002\u76F8\u5BF9\u4E8E <code>/Users/curder/Codes/phpstorm</code> \u6587\u4EF6\u5939</p></li><li><p>\u6700\u540E\uFF0CWeb\u8DEF\u5F84\u4F7F\u7528\u9ED8\u8BA4\u503C <code>/</code></p></li></ul><p><img src="'+l+'" alt=""></p><p>\u7136\u540E\u5355\u51FB\u786E\u5B9A\uFF0C\u5E94\u7528\u66F4\u6539\uFF0C\u670D\u52A1\u5668\u5C31\u53EF\u4EE5\u4F7F\u7528\u4E86\u3002</p><h2 id="\u90E8\u7F72" tabindex="-1">\u90E8\u7F72 <a class="header-anchor" href="#\u90E8\u7F72" aria-hidden="true">#</a></h2><h3 id="\u4E0A\u4F20" tabindex="-1">\u4E0A\u4F20 <a class="header-anchor" href="#\u4E0A\u4F20" aria-hidden="true">#</a></h3><p>\u9996\u5148\u5C1D\u8BD5\u5C06\u672C\u5730\u4E00\u4E2A\u6587\u4EF6\u4F20\u9012\u5230\u8FDC\u7A0B\u670D\u52A1\u5668 <code>CustomLocalFolder</code>\u3002</p><p>\u4F7F\u7528\u5FEB\u6377\u952E <code>Command + 1</code> \u6253\u5F00 <code>Project</code> \u7A97\u53E3\uFF0C\u53F3\u952E\u5355\u51FB\u5F85\u4E0A\u4F20\u7684\u6587\u4EF6\u3002\u5F53\u524D\u4F7F\u7528 <code>README.md</code> \u6587\u4EF6\u3002</p><p>\u4ECE\u4E0A\u4E0B\u6587\u83DC\u5355\u4E2D\uFF0C\u9009\u62E9 <code>Upload to CustomLocalFolder</code></p><p><img src="'+s+'" alt=""></p><p>\u7136\u540E\u901A\u8FC7\u9876\u90E8\u4E3B\u83DC\u5355\u70B9\u51FB <code>Tools</code> -&gt; <code>Deployment</code> -&gt; \u9009\u62E9 <code>Browse Romote Host</code>\uFF0C\u67E5\u770B\u4E0A\u4F20\u7ED3\u679C\u3002</p><p><img src="'+a+'" alt=""></p><p>\u53EF\u4EE5\u770B\u5230\u8FDC\u7A0B\u670D\u52A1\u5668\u5DF2\u7ECF\u5B58\u5728\u540C\u6B65\u8FC7\u53BB\u7684\u6587\u4EF6</p><p><img src="'+r+'" alt=""></p><p>\u5F53\u7136\u4E5F\u652F\u6301\u4E0A\u4F20\u6587\u4EF6\u5939\uFF0C\u7531\u4E8E\u64CD\u4F5C\u7C7B\u4F3C\u8FD9\u8FB9\u4E0D\u5C55\u5F00\u8BA8\u8BBA\u3002</p><h3 id="\u6BD4\u8F83\u8FDC\u7A0B\u7248\u672C\u548C\u672C\u5730\u7248\u672C" tabindex="-1">\u6BD4\u8F83\u8FDC\u7A0B\u7248\u672C\u548C\u672C\u5730\u7248\u672C <a class="header-anchor" href="#\u6BD4\u8F83\u8FDC\u7A0B\u7248\u672C\u548C\u672C\u5730\u7248\u672C" aria-hidden="true">#</a></h3><p><code>README.md</code> \u6587\u4EF6\u6709\u672C\u5730\u548C\u8FDC\u7A0B\u526F\u672C\uFF0C\u5F53\u524D\u4E8C\u8005\u6587\u4EF6\u5185\u5BB9\u662F\u76F8\u540C\u7684\u3002\u6B64\u65F6\u5C1D\u8BD5\u4FEE\u6539\u672C\u5730\u6587\u4EF6\u5185\u5BB9\uFF0C\u6DFB\u52A0\u4E00\u4E2A <code>Hello world!</code></p><p><img src="'+i+'" alt=""></p><p>\u73B0\u5728\u7531\u4E8E\u66F4\u6539\u4E86 <code>README.md</code> \u672C\u5730\u7248\u672C\u3002\u9700\u8981\u786E\u4FDD PhpStorm \u4E86\u89E3\u8FD9\u4E9B\u66F4\u6539\u3002</p><p>\u4E3A\u6B64\uFF0C\u8BF7\u8F6C\u5230 <code>Remote Host</code> \u5DE5\u5177\u7A97\u53E3\uFF0C\u7136\u540E\u5355\u51FB\u9F20\u6807\u53F3\u952E\uFF0C\u4ECE\u4E0A\u4E0B\u6587\u83DC\u5355\u4E2D\uFF0C\u9009\u62E9\u4E0E\u672C\u5730\u7248\u672C\u6BD4\u8F83\u3002</p><p><img src="'+n+'" alt=""></p><p>PhpStorm \u5C06\u6253\u5F00\u5DEE\u5F02\u67E5\u770B\u5668\u3002</p><p><img src="'+h+'" alt=""></p><h3 id="\u4E0B\u8F7D" tabindex="-1">\u4E0B\u8F7D <a class="header-anchor" href="#\u4E0B\u8F7D" aria-hidden="true">#</a></h3><p>\u5728 <code>Remote Host</code> \u5DE5\u5177\u7A97\u53E3\u4E2D\uFF0C\u53F3\u952E\u5355\u51FB\u6587\u4EF6\u6216\u8005\u76EE\u5F55\uFF0C\u7136\u540E\u5728\u4E0A\u4E0B\u6587\u83DC\u5355\u4E2D\u9009\u62E9 <code>Download form here</code>\u3002PhpStorm\u663E\u793A\u8B66\u544A\uFF1A</p><p><img src="'+m+'" alt=""></p><p>\u70B9\u51FB <code>Yes</code> \u5C06\u53EF\u4EE5\u5C06\u6587\u4EF6\u6216\u8005\u76EE\u5F55\u540C\u6B65\u5230\u672C\u5730\u3002</p><div class="tip custom-block"><p class="custom-block-title">\u6CE8\u610F</p><p>\u4E0B\u8F7D\u7684\u6587\u4EF6\u6216\u8005\u76EE\u5F55\u9700\u8981\u5728\u914D\u7F6E <code>connection</code> \u4E2D\u7684\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u6216\u8005\u76EE\u5F55\uFF0C\u914D\u7F6E\u76EE\u5F55\u4E4B\u5916\u7684\u76EE\u5F55\u5C06\u4E0D\u4F1A\u8FFD\u8E2A\u6587\u4EF6\u3002</p></div><h2 id="\u540C\u6B65\u4EE3\u7801" tabindex="-1">\u540C\u6B65\u4EE3\u7801 <a class="header-anchor" href="#\u540C\u6B65\u4EE3\u7801" aria-hidden="true">#</a></h2><p>\u5B9E\u9645\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u7ECF\u5E38\u4F1A\u9700\u8981\u7528\u5230\u4EE3\u7801\u540C\u6B65\u66F4\u65B0\u529F\u80FD\uFF0C\u5C31\u662F\u4FEE\u6539\u4E86\u672C\u5730\u4EE3\u7801\u81EA\u52A8\u540C\u6B65\u5230\u670D\u52A1\u5668\u3002</p><p>\u6F14\u793A\u540C\u6B65\u4EE3\u7801\u4E4B\u524D\u5C06 <code>README.md</code> \u6587\u4EF6\u672C\u5730\u5185\u5BB9\u56DE\u5230\u6700\u521D\u672C\u5730\u6DFB\u52A0 <code>Hello world!</code> \u800C\u8FDC\u7A0B\u670D\u52A1\u5668\u6CA1\u6709 <code>Hello world!</code> \u7684\u7248\u672C\u3002</p><p>\u5355\u51FB <code>README.md</code> \u6587\u4EF6\uFF0C\u7136\u540E\u5728\u4E3B\u83DC\u5355\u4E0A\u9009\u62E9 <code>Tools</code> -&gt; <code>Deployment</code> -&gt; <code>Sync with Deployed to CustomLocalFolder</code></p><p><img src="'+g+'" alt=""></p><p>\u53EF\u4EE5\u5728PhpStorm \u663E\u793A\u5DEE\u5F02\u67E5\u770B\u5668\u4E2D\u63A5\u53D7\u5355\u4E2A\u66F4\u6539\u6216\u62D2\u7EDD\u5B83\u4EEC\u3002</p><h2 id="\u81EA\u52A8\u4E0A\u4F20\u5230\u9ED8\u8BA4\u670D\u52A1\u5668" tabindex="-1">\u81EA\u52A8\u4E0A\u4F20\u5230\u9ED8\u8BA4\u670D\u52A1\u5668 <a class="header-anchor" href="#\u81EA\u52A8\u4E0A\u4F20\u5230\u9ED8\u8BA4\u670D\u52A1\u5668" aria-hidden="true">#</a></h2><p>\u5982\u679C\u9700\u8981\u670D\u52A1\u5668\u4E0A\u7684\u6587\u4EF6\u4E0E PhpStorm \u9879\u76EE\u4E2D\u7684\u6587\u4EF6\u5B8C\u5168\u76F8\u540C\uFF0C\u5219\u81EA\u52A8\u4E0A\u4F20\u4F1A\u6709\u6240\u5E2E\u52A9\u3002</p><p>\u81EA\u52A8\u4E0A\u8F7D\u610F\u5473\u7740\uFF0C\u53EA\u8981 IDE \u4E2D\u53D1\u751F\u66F4\u6539\uFF0C\u5B83\u5C31\u4F1A\u88AB\u90E8\u7F72\u5230\u9ED8\u8BA4\u7684\u90E8\u7F72\u670D\u52A1\u5668\u3002</p><p>\u7531\u4E8E\u90E8\u7F72\u670D\u52A1\u5668\u7684\u8BBE\u7F6E\u5728\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u81EA\u52A8\u4E0A\u4F20\u66F4\u6539\u6587\u4EF6\uFF0C\u9700\u8981\u8BBE\u7F6E\u9ED8\u8BA4\u90E8\u7F72\u670D\u52A1\u5668\uFF0C\u6240\u4EE5\u63A5\u4E0B\u6765\u5148\u770B\u4E0B\u5982\u4F55\u5C06\u670D\u52A1\u5668\u5B9A\u4E49\u4E3A\u9ED8\u8BA4\u670D\u52A1\u5668\u3002</p><h3 id="\u5C06\u670D\u52A1\u5668\u5B9A\u4E49\u4E3A\u9ED8\u8BA4\u670D\u52A1\u5668" tabindex="-1">\u5C06\u670D\u52A1\u5668\u5B9A\u4E49\u4E3A\u9ED8\u8BA4\u670D\u52A1\u5668 <a class="header-anchor" href="#\u5C06\u670D\u52A1\u5668\u5B9A\u4E49\u4E3A\u9ED8\u8BA4\u670D\u52A1\u5668" aria-hidden="true">#</a></h3><p>\u8981\u5C06\u90E8\u7F72\u670D\u52A1\u5668\u5B9A\u4E49\u4E3A\u9ED8\u8BA4\u670D\u52A1\u5668\uFF0C\u8BF7\u6309\u7167\u4E0B\u5217\u6B65\u9AA4\u64CD\u4F5C\uFF1A</p><ol><li><p>\u5728 <code>Deployment</code> \u9875\u9762\u4E0A\u9009\u62E9\u6240\u9700\u7684\u670D\u52A1\u5668\uFF08\u5728\u5F53\u524D\u7684\u793A\u4F8B\u4E2D\u4E3A <code>CustomLocalFolder</code> \uFF09\u3002\u53EF\u4EE5\u901A\u8FC7\u4E24\u79CD\u53EF\u80FD\u7684\u65B9\u5F0F\u6253\u5F00\u6B64\u9875\u9762\uFF1A</p><ul><li>\u6309 <code>\u2318 + ,</code> \u6253\u5F00\u8BBE\u7F6E/\u9996\u9009\u9879\u5BF9\u8BDD\u6846 -&gt; <code>Build, Execution, Deployment</code> -&gt; <code>Deployment</code></li><li>\u4E3B\u83DC\u5355\u9009\u62E9 <code>Tools</code> -&gt; <code>Deployment</code> -&gt; <code>Configuration...</code><img src="'+u+'" alt=""></li></ul></li><li><p>\u8BF7\u70B9\u51FB<code>Using as default</code> \u6309\u94AE\u3002</p></li></ol><h3 id="\u542F\u7528\u81EA\u52A8\u4E0A\u4F20" tabindex="-1">\u542F\u7528\u81EA\u52A8\u4E0A\u4F20 <a class="header-anchor" href="#\u542F\u7528\u81EA\u52A8\u4E0A\u4F20" aria-hidden="true">#</a></h3><p>\u8BBE\u7F6E\u9ED8\u8BA4\u670D\u52A1\u5668\u540E\uFF0C\u5C31\u53EF\u4EE5\u81EA\u52A8\u4E0A\u4F20\u5230\u8BE5\u670D\u52A1\u5668\u3002</p><p>\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u4E24\u79CD\u65B9\u5F0F\u5B8C\u6210\uFF1A</p><ul><li>\u6309 <code>\u2318 + ,</code> \u6253\u5F00\u8BBE\u7F6E/\u9996\u9009\u9879\u5BF9\u8BDD\u6846 -&gt; <code>Build, Execution, Deployment</code> -&gt; <code>Deployment</code>\uFF0C\u7136\u540E\u5728 <code>Upload changed files automatically to the default server</code> \u5B57\u6BB5\u4E2D\uFF0C\u9009\u62E9\u59CB\u7EC8\u3001\u6267\u884C\u4FDD\u5B58\u64CD\u4F5C\u6216\u8005\u4ECE\u4E0D\u3002 <img src="'+_+'" alt=""></li><li>\u5728\u4E3B\u83DC\u5355\u4E2D\uFF0C\u9009\u62E9 <code>Tools</code> -&gt; <code>Deployment</code> -&gt; <code>Automatic upload</code>\u3002<div class="warning custom-block"><p class="custom-block-title">\u6CE8\u610F</p><p>\u8BF7\u6CE8\u610F\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u81EA\u52A8\u4E0A\u4F20\u662F\u5728\u59CB\u7EC8\u6A21\u5F0F\u4E0B\u6267\u884C\u7684\u3002</p></div></li></ul><div class="warning custom-block"><p class="custom-block-title">\u503C\u5F97\u6CE8\u610F</p><p>\u4E0D\u5EFA\u8BAE\u59CB\u7EC8\u6A21\u5F0F\u90E8\u7F72\u5230\u751F\u4EA7\u73AF\u5883\uFF0C\u56E0\u4E3A\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u53EF\u80FD\u4F1A\u4E0A\u4F20\u4E0D\u5B8C\u6574\u7684\u4EE3\u7801\uFF0C\u4ECE\u800C\u53EF\u80FD\u7834\u574F\u751F\u4EA7\u5E94\u7528\u7A0B\u5E8F\u3002</p></div><h2 id="\u5916\u90E8\u53D8\u66F4\u5FFD\u7565\u4E0A\u4F20" tabindex="-1">\u5916\u90E8\u53D8\u66F4\u5FFD\u7565\u4E0A\u4F20 <a class="header-anchor" href="#\u5916\u90E8\u53D8\u66F4\u5FFD\u7565\u4E0A\u4F20" aria-hidden="true">#</a></h2><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u901A\u8FC7\u67D0\u4E9B\u5916\u90E8\u8FC7\u7A0B\uFF08\u4F8B\u5982\uFF0C VCS\u5206\u652F\u66F4\u6539\uFF0CSASS\u6216LESS\u7684\u7F16\u8BD1\u6216File Watcher\uFF09\u66F4\u6539\u4E86\u6587\u4EF6\uFF0CPhpStorm \u8FD8\u5C06\u4E0A\u4F20\u6587\u4EF6\u3002</p><p>\u82E5\u8981\u66F4\u6539\u6B64\u884C\u4E3A\u5E76\u8DF3\u8FC7\u5916\u90E8\u66F4\u6539\uFF0C\u9700\u8981\u5C06 <code>Upload changed files automatically to the default server</code> \u8BBE\u7F6E\u4E3A <code>always</code>\uFF0C\u7136\u540E\u9009\u4E2D <code>Skip extrnal changes</code> \u590D\u9009\u6846\uFF1A</p><p><img src="'+f+'" alt=""></p><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><ul><li><p>\u521B\u5EFA\u5E76\u914D\u7F6E\u4E86\u81EA\u5DF1\u7684\u670D\u52A1\u5668\u3002</p></li><li><p>\u4E0A\u8F7D\u548C\u4E0B\u8F7D\u6587\u4EF6\u548C\u6587\u4EF6\u5939\u3002</p></li><li><p>\u6BD4\u8F83\u672C\u5730\u548C\u8FDC\u7A0B\u7248\u672C\u3002</p></li><li><p>\u5C06\u670D\u52A1\u5668\u914D\u7F6E\u4E3A\u9ED8\u8BA4\u670D\u52A1\u5668\u3002</p></li><li><p>\u542F\u7528\u4E86\u81EA\u52A8\u4E0A\u4F20\u5916\u90E8\u66F4\u6539\u3002</p></li></ul><p>\u66F4\u591A\u7528\u6CD5\u8BF7\u53C2\u8003\u5B98\u65B9\u6587\u6863 <a href="https://www.jetbrains.com/help/phpstorm/deploying-applications.html" target="_blank" rel="noreferrer">Deploy your application</a>\u3002</p>',63),v=[b];function D(k,S,x,w,E,C){return t(),o("div",null,v)}const T=e(y,[["render",D]]);export{A as __pageData,T as default};
