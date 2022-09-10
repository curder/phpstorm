import{_ as e,c as t,o,a as s}from"./app.6df5c9d9.js";const r="/phpstorm/assets/get-from-vcs.a5efc17d.png",p="/phpstorm/assets/get-from-version-control-display.ffad17d0.png",c="/phpstorm/assets/log-in-via-github.ab2754f3.png",a="/phpstorm/assets/clone-github-repository.fa6eef5f.png",i="/phpstorm/assets/vcs-options.5b385805.png",n="/phpstorm/assets/show-git-log.b2d1d07c.png",d="/phpstorm/assets/show-git-log-panel.2690ea59.png",l="/phpstorm/assets/commit-panel.507306c0.png",h="/phpstorm/assets/reset-current-branch-to-some-step.c57d24f1.png",g="/phpstorm/assets/create-new-branch-from-main-menu.d4e67e30.png",m="/phpstorm/assets/create-new-branch-from-keymap.6bd0d75a.png",_="/phpstorm/assets/create-new-branch.1b48d949.png",b="/phpstorm/assets/create-new-branch-add-branch-name.74315314.png",u="/phpstorm/assets/branchs-list-panel.c4557bc4.png",f="/phpstorm/assets/delete-a-local-branch.e815726e.png",S="/phpstorm/assets/branchs-list-panel-for-rename.5049d71b.png",v="/phpstorm/assets/rename-a-local-branch.8fb40dba.png",C="/phpstorm/assets/submit-rename-a-local-branch.77458e8d.png",G="/phpstorm/assets/merge-another-local-branch.617ab100.png",k="/phpstorm/assets/merge-another-local-branch-submit.8d75f0e4.png",A=JSON.parse('{"title":"Git \u5DE5\u4F5C\u6D41","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u67E5\u770B\u63D0\u4EA4\u5386\u53F2","slug":"\u67E5\u770B\u63D0\u4EA4\u5386\u53F2","link":"#\u67E5\u770B\u63D0\u4EA4\u5386\u53F2","children":[]},{"level":2,"title":"\u63D0\u4EA4\u5386\u53F2\u7BA1\u7406","slug":"\u63D0\u4EA4\u5386\u53F2\u7BA1\u7406","link":"#\u63D0\u4EA4\u5386\u53F2\u7BA1\u7406","children":[{"level":3,"title":"\u672C\u5730\u6682\u5B58\u533A\u6587\u4EF6","slug":"\u672C\u5730\u6682\u5B58\u533A\u6587\u4EF6","link":"#\u672C\u5730\u6682\u5B58\u533A\u6587\u4EF6","children":[]},{"level":3,"title":"\u7248\u672C\u56DE\u9000","slug":"\u7248\u672C\u56DE\u9000","link":"#\u7248\u672C\u56DE\u9000","children":[]}]},{"level":2,"title":"\u5206\u652F\u64CD\u4F5C","slug":"\u5206\u652F\u64CD\u4F5C","link":"#\u5206\u652F\u64CD\u4F5C","children":[{"level":3,"title":"\u65B0\u5EFA\u672C\u5730\u5206\u652F","slug":"\u65B0\u5EFA\u672C\u5730\u5206\u652F","link":"#\u65B0\u5EFA\u672C\u5730\u5206\u652F","children":[]},{"level":3,"title":"\u5220\u9664\u672C\u5730\u5206\u652F","slug":"\u5220\u9664\u672C\u5730\u5206\u652F","link":"#\u5220\u9664\u672C\u5730\u5206\u652F","children":[]},{"level":3,"title":"\u7F16\u8F91\u5206\u652F\u540D\u79F0","slug":"\u7F16\u8F91\u5206\u652F\u540D\u79F0","link":"#\u7F16\u8F91\u5206\u652F\u540D\u79F0","children":[]},{"level":3,"title":"\u5206\u652F\u5408\u5E76\u64CD\u4F5C","slug":"\u5206\u652F\u5408\u5E76\u64CD\u4F5C","link":"#\u5206\u652F\u5408\u5E76\u64CD\u4F5C","children":[]}]},{"level":2,"title":"\u6807\u7B7E\u7BA1\u7406","slug":"\u6807\u7B7E\u7BA1\u7406","link":"#\u6807\u7B7E\u7BA1\u7406","children":[]}],"relativePath":"guide/use-process-of-git-version-control.md","lastUpdated":1662800849000}'),V={name:"guide/use-process-of-git-version-control.md"},x=s('<h1 id="git-\u5DE5\u4F5C\u6D41" tabindex="-1">Git \u5DE5\u4F5C\u6D41 <a class="header-anchor" href="#git-\u5DE5\u4F5C\u6D41" aria-hidden="true">#</a></h1><p>PhpStorm \u96C6\u6210\u4E86 Git\u3001SVN \u7B49\u7248\u672C\u7BA1\u7406\u5DE5\u5177\uFF0C\u53EF\u4EE5\u5FEB\u901F\u9884\u89C8\u63D0\u4EA4\u5386\u53F2\u3001\u63D0\u4EA4\u7248\u672C\u3001\u5408\u5E76\u51B2\u7A81\u7B49\u7B49\u3002</p><p>\u5F53\u6765\u5230 PhpStorm \u7684\u6B22\u8FCE\u9875\u9762\uFF0C\u5728 <code>Projects</code> \u6709\u4E00\u4E2A <code>Get from VCS</code> \u9009\u9879\u63D0\u4F9B\uFF1A</p><p><img src="'+r+'" alt=""></p><p>\u70B9\u51FB\u8FDB\u5165\uFF0C\u53EF\u4EE5\u9009\u62E9\u5BF9\u5E94\u7248\u672C\u63A7\u5236\u8F6F\u4EF6\u3001\u5BF9\u5E94\u4ED3\u5E93URL\u5730\u5740\u4EE5\u53CA\u672C\u5730\u5B58\u50A8\u5730\u5740\u3002</p><p><img src="'+p+'" alt=""></p><p>\u4E5F\u540C\u65F6\u96C6\u6210\u4E86 GitHub \u8D26\u6237\u6388\u6743\u767B\u5F55\u3002</p><p><img src="'+c+'" alt=""></p><p>\u767B\u5F55\u6210\u529F\u540E\u53EF\u4EE5\u9009\u62E9\u5BF9\u5E94\u4ED3\u5E93\u548C\u672C\u5730\u5B58\u50A8\u5730\u5740\uFF0C\u5219\u4F1A\u5C06\u4EE3\u7801\u62C9\u53D6\u5230\u672C\u5730\u3002</p><p><img src="'+a+'" alt=""></p><p>\u4E0B\u9762\u4EE5 Git \u4F5C\u4E3A\u9879\u76EE\u7248\u672C\u63A7\u5236\u4F5C\u4E3A\u8BB2\u89E3\uFF0C\u5E38\u7528\u7684 Git \u76F8\u5173\u7684\u64CD\u4F5C\u53EF\u4EE5\u4F7F\u7528 <code>Ctrl + V</code> \u540E\u5728\u5F39\u51FA\u7684\u7A97\u53E3\u9009\u62E9\u5BF9\u5E94\u64CD\u4F5C\u3002</p><p><img src="'+i+'" alt=""></p><h2 id="\u67E5\u770B\u63D0\u4EA4\u5386\u53F2" tabindex="-1">\u67E5\u770B\u63D0\u4EA4\u5386\u53F2 <a class="header-anchor" href="#\u67E5\u770B\u63D0\u4EA4\u5386\u53F2" aria-hidden="true">#</a></h2><p>\u5728\u9876\u90E8\u83DC\u5355\u680F\uFF0C\u9009\u62E9 <code>Git</code> -&gt; <code>Show Git Log</code>\uFF0C\u6216\u8005\u4F7F\u7528\u5FEB\u6377\u952E <code>Command + 9</code> \u5FEB\u901F\u5207\u6362 Git \u63D0\u4EA4\u5386\u53F2</p><p><img src="'+n+'" alt=""></p><p>\u67E5\u770B\u63D0\u4EA4\u5386\u53F2\u754C\u9762\u5982\u4E0B\uFF1A</p><p><img src="'+d+'" alt=""></p><ol><li>\u672C\u5730\u548C\u8FDC\u7A0B\u5206\u652F\u9884\u89C8</li><li>\u5206\u652F\u3001\u7528\u6237\u3001\u65F6\u95F4\u548C\u8DEF\u5F84\u8FC7\u6EE4</li><li>\u63D0\u4EA4\u5386\u53F2\u5217\u8868</li><li>\u63D0\u4EA4\u5BF9\u5E94\u6587\u4EF6\u53D8\u66F4\u5217\u8868</li></ol><h2 id="\u63D0\u4EA4\u5386\u53F2\u7BA1\u7406" tabindex="-1">\u63D0\u4EA4\u5386\u53F2\u7BA1\u7406 <a class="header-anchor" href="#\u63D0\u4EA4\u5386\u53F2\u7BA1\u7406" aria-hidden="true">#</a></h2><h3 id="\u672C\u5730\u6682\u5B58\u533A\u6587\u4EF6" tabindex="-1">\u672C\u5730\u6682\u5B58\u533A\u6587\u4EF6 <a class="header-anchor" href="#\u672C\u5730\u6682\u5B58\u533A\u6587\u4EF6" aria-hidden="true">#</a></h3><p>\u5728\u7F16\u5199\u4EE3\u7801\u65F6\uFF0C\u60F3\u6D4F\u89C8\u672C\u5730\u6587\u4EF6\u7684\u53D8\u66F4\u60C5\u51B5\uFF0C\u5F53\u7136\u53EF\u4EE5\u5728\u7EC8\u7AEF\u8F93\u5165 <code>git status</code> \u6765\u67E5\u770B\u6587\u4EF6\u53D8\u66F4\u8BB0\u5F55\uFF0C\u90A3\u4E48\u4F7F\u7528 PhpStorm \u5E94\u8BE5\u600E\u4E48\u64CD\u4F5C\u5462\uFF1F</p><p>PhpStorm \u7684\u67E5\u770B\u5DE5\u4F5C\u533A\u6587\u4EF6\u53D8\u66F4\u60C5\u51B5\u8FDC\u4E0D\u6B62\u67E5\u770B\u6587\u4EF6\u53D8\u66F4\u5386\u53F2\uFF0C\u8FD8\u5305\u542B\u4E86\uFF1A\u6587\u4EF6\u5185\u5BB9\u53D8\u66F4\u53EF\u89C6\u5316\u67E5\u770B\u3001\u6587\u4EF6\u5206\u7EC4\u3001\u6811\u5F62\u663E\u793A\u3001\u751A\u81F3\u53EF\u4EE5\u76F4\u63A5\u63D0\u4EA4\u7248\u672C\u7B49\u64CD\u4F5C\u3002</p><p>\u901A\u8FC7\u5728 PhpStorm \u4E3B\u83DC\u5355\u70B9\u51FB <code>Git</code> -&gt; <code>Commit</code> \u4F1A\u5F39\u51FA\u5F53\u524D\u5DE5\u4F5C\u533A\u6587\u4EF6\u7684\u53D8\u66F4\u60C5\u51B5\uFF0C\u6216\u8005\u76F4\u63A5\u4F7F\u7528\u5FEB\u6377\u952E <code>Command + K</code> \u5373\u53EF\u3002</p><p><img src="'+l+'" alt=""></p><ol><li><p>\u529F\u80FD\u64CD\u4F5C\u533A</p><ul><li><strong>\u5237\u65B0</strong> \u4E00\u822C\u7528\u4E8E\u672C\u5730\u6587\u4EF6\u53D8\u66F4\u540E\u5237\u65B0\u5217\u8868</li><li><strong>\u56DE\u6EDA</strong> \u4E00\u822C\u7528\u6237\u6587\u4EF6\u72B6\u6001\u56DE\u6EDA</li><li><strong>\u67E5\u770B\u5DEE\u5F02</strong> \u5C06\u5149\u6807\u60AC\u6D6E\u5728\u4E0B\u9762\u6587\u4EF6\u4E0A\u70B9\u51FB <code>Show diff</code> \u6309\u94AE\u53EF\u4EE5\u770B\u5230\u5BF9\u5E94\u6587\u4EF6\u7684\u524D\u540E\u53D8\u66F4\u5DEE\u5F02\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u53CC\u51FB\u6587\u4EF6\u67E5\u770B\u5DEE\u5F02</li><li><strong>\u53D8\u66F4\u5217\u8868</strong> \u76F8\u5F53\u4E8E\u53EF\u4EE5\u5C06\u53D8\u66F4\u5386\u53F2\u6DFB\u52A0\u4E00\u4E2A\u5206\u7EC4\uFF0C\u65B9\u4FBF\u540E\u671F\u67E5\u770B\u5BF9\u5E94\u5206\u7EC4\u4E2D\u7684\u6587\u4EF6\u53D8\u66F4</li><li><strong>\u9759\u9ED8\u6401\u7F6E</strong> \u53EF\u4EE5\u5C06\u53D8\u66F4\u4EE3\u7801\u6401\u7F6E\u8D77\u6765\uFF0C\u76F8\u5F53\u4E8E <code>git reset --hard</code>\u7684\u6548\u679C\uFF0C\u4F46\u662F\u8FD9\u4E9B\u64CD\u4F5C\u53EF\u4EE5\u901A\u8FC7\u5728 <code>Local History</code> \u4E2D\u627E\u5230</li><li><strong>\u5206\u7EC4\u65B9\u5F0F</strong> \u9ED8\u8BA4\u4E3A\u6587\u4EF6\u5939\u5206\u7EC4</li><li><strong>\u663E\u793A\u9009\u9879</strong> \u53EF\u4EE5\u9009\u62E9\u5C06 <code>.gitignore</code> \u4E2D\u7684\u6587\u4EF6\u663E\u793A\uFF0C\u4E00\u822C\u4E0D\u663E\u793A</li><li><strong>\u5C55\u5F00\u6240\u6709</strong> \u5C06\u6240\u6709\u6587\u4EF6\u5939\u5C55\u5F00\uFF0C\u5982\u679C\u5B58\u5728\u6587\u4EF6\u5939\u7684\u8BDD</li><li><strong>\u5168\u90E8\u6536\u7F29</strong> \u5C06\u6240\u6709\u6587\u4EF6\u5939\u641C\u7D22\uFF0C\u5982\u679C\u5B58\u5728\u6587\u4EF6\u5939\u7684\u8BDD</li></ul></li><li><p><strong>\u6587\u4EF6\u53D8\u66F4\u5217\u8868</strong></p><p>\u663E\u793A\u7248\u672C\u5E93\u5F53\u524D\u53D8\u66F4\u8BB0\u5F55\uFF0C\u6BD4\u5982\uFF0C\u65B0\u589E\u6587\u4EF6\u3001\u7F16\u8F91\u6587\u4EF6\u3001\u5220\u9664\u6587\u4EF6\u7B49\u3002</p><p>\u70B9\u51FB\u6587\u4EF6\u540D\u79F0\uFF0C\u5728\u53F3\u4FA7\u53EF\u4EE5\u770B\u5230\u5BF9\u5E94\u7684\u6587\u4EF6\u53D8\u66F4\u5185\u5BB9\u3002</p></li><li><p><strong>\u63D0\u4EA4\u4FE1\u606F</strong></p><p>\u53EF\u4EE5\u5728\u8FD9\u91CC\u63D0\u4F9B\u63D0\u4EA4\u7248\u672C\u65F6\u7684\u4FE1\u606F\u3002</p></li><li><p><strong>\u63D0\u4EA4\u3001\u63D0\u4EA4\u5E76\u63A8\u9001\u5230\u8FDC\u7A0B</strong></p><p>\u53EF\u4EE5\u9009\u62E9\u63D0\u4EA4\u5230\u7248\u672C\u5E93\uFF0C\u4E5F\u53EF\u4EE5\u9009\u62E9\u63D0\u4EA4\u5230\u7248\u672C\u5E93\u4E4B\u540E\u76F4\u63A5\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93</p></li></ol><h3 id="\u7248\u672C\u56DE\u9000" tabindex="-1">\u7248\u672C\u56DE\u9000 <a class="header-anchor" href="#\u7248\u672C\u56DE\u9000" aria-hidden="true">#</a></h3><p>\u5728\u4E0A\u9762\u67E5\u770B\u672C\u5730\u6587\u4EF6\u6682\u5B58\u53D8\u66F4\u5217\u8868\u53EF\u4EE5\u5BF9\u6587\u4EF6\u63D0\u4EA4\u7248\u672C\u7BA1\u7406\uFF0C\u90A3\u4E48\u5982\u679C\u548C\u5386\u53F2\u7248\u672C\u8FDB\u884C\u56DE\u9000\u5462\uFF1F</p><p>\u4F7F\u7528 <code>Command + 9</code> \u53EF\u4EE5\u5728\u7248\u672C\u5E93\u63D0\u4EA4\u5386\u53F2\u4E2D\u5B9A\u4F4D\u5230\u9700\u8981\u56DE\u9000\u7684\u7248\u672C\uFF0C\u5E76\u4F7F\u7528\u53F3\u952E\u70B9\u51FB <code>Reset current branch to Here</code> \uFF0C\u7136\u540E\u5728\u63A5\u4E0B\u6765\u7684\u5F39\u51FA\u5C42\u9009\u62E9\u9700\u8981\u56DE\u9000\u7684\u6A21\u5F0F\u3002</p><p><img src="'+h+'" alt=""></p><p>\u8FD8\u6709\u53E6\u4E00\u79CD\u60C5\u51B5\u5C31\u662F\u5F53\u6211\u4EEC\u56DE\u9000\u7248\u672C\u540E\u53D1\u73B0\u56DE\u9000\u9519\u4E86\uFF0C\u8FD8\u662F\u5E94\u8BE5\u5C06\u7248\u672C\u5E93\u5207\u6362\u5230\u56DE\u9000\u524D\u7684\u72B6\u6001\u3002\u5F53\u524D\u5EFA\u8BAE\u4F7F\u7528 <code>git reflog</code> \u67E5\u770B\u7248\u672C\u5E93\u5386\u53F2\u8BB0\u5F55\u4FE1\u606F\uFF0C\u5E76\u590D\u5236 hash \u503C\u3002</p><p>\u7136\u540E\u6765\u5230\u4E3B\u83DC\u5355\u7684 <code>Git</code> -&gt; <code>Reset Head...</code>\uFF0C\u5C06\u4E0A\u9762\u6267\u884C\u7684\u547D\u4EE4\u83B7\u53D6\u7684hash\u503C\u63D0\u53D6\u5230\u7C98\u8D34\u5230\u5F39\u51FA\u5C42\u5373\u53EF\u56DE\u9000\u5230\u6307\u5B9A\u7248\u672C\u3002</p><h2 id="\u5206\u652F\u64CD\u4F5C" tabindex="-1">\u5206\u652F\u64CD\u4F5C <a class="header-anchor" href="#\u5206\u652F\u64CD\u4F5C" aria-hidden="true">#</a></h2><h3 id="\u65B0\u5EFA\u672C\u5730\u5206\u652F" tabindex="-1">\u65B0\u5EFA\u672C\u5730\u5206\u652F <a class="header-anchor" href="#\u65B0\u5EFA\u672C\u5730\u5206\u652F" aria-hidden="true">#</a></h3><p>\u5F53\u9700\u8981\u65B0\u5EFA\u4E00\u4E2A\u672C\u5730\u5206\u652F\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>git branch \u5206\u652F\u540D</code> \u6765\u901A\u8FC7\u6863\u671F\u554A\u4F60\u5206\u652F\uFF0C\u65B0\u5EFA\u4E00\u4E2A\u65B0\u5206\u652F\u3002</p><p>\u5728 PhpStorm \u4E2D\u53EF\u4EE5\u901A\u8FC7\u5728\u4E3B\u83DC\u5355\uFF0C\u9009\u62E9 <code>Git</code> -&gt; \u70B9\u51FB <code>New Branch...</code> \u901A\u8FC7\u5F53\u524D\u5206\u652F\uFF0C\u521B\u5EFA\u4E00\u4E2A\u65B0\u5206\u652F\uFF0C\u5E76\u4E14\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4F1A\u5C06\u5F53\u524D\u5DE5\u4F5C\u533A\u81EA\u52A8\u5207\u6362\u5230\u65B0\u5206\u652F\u4E0A\u3002</p><p><img src="'+g+'" alt=""></p><p>\u6216\u8005\u901A\u8FC7\u5FEB\u6377\u952E <code>Ctrl + V</code> \u547C\u51FA VSC \u64CD\u4F5C\u9879\u3002</p><p><img src="'+m+'" alt=""></p><p>\u63A5\u7740\u70B9\u51FB <code>Create new branch...</code></p><p><img src="'+_+'" alt=""></p><p>\u7136\u540E\u547D\u540D\u4E00\u4E2A\u65B0\u5206\u652F\u5373\u53EF\u3002</p><p><img src="'+b+'" alt=""></p><h3 id="\u5220\u9664\u672C\u5730\u5206\u652F" tabindex="-1">\u5220\u9664\u672C\u5730\u5206\u652F <a class="header-anchor" href="#\u5220\u9664\u672C\u5730\u5206\u652F" aria-hidden="true">#</a></h3><p>\u5F53\u9700\u8981\u5220\u9664\u5BF9\u5E94\u5206\u652F\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u547D\u4EE4 <code>git branch -d \u5F85\u5220\u9664\u7684\u5206\u652F\u540D</code> \u6765\u5220\u9664\u4E0D\u9700\u8981\u7684\u672C\u5730\u5206\u652F\u3002</p><p>\u5728 PhpStorm \u4E2D\u53EF\u4EE5\u901A\u8FC7\u4E3B\u83DC\u5355\u4E0A\u7684 <code>Git</code> -&gt; \u9009\u62E9 <code>Branches...</code></p><p><img src="'+u+'" alt=""></p><p>\u6216\u8005\u901A\u8FC7\u5FEB\u6377\u952E <code>Ctrl + V</code> \u547C\u51FA VSC \u64CD\u4F5C\u9879\uFF0C\u63A5\u7740\u9009\u62E9 <code>Branches...</code>\uFF0C\u5728\u63A5\u4E0B\u6765\u7684\u5F39\u7A97\u9009\u62E9\u5BF9\u5E94\u5206\u652F\uFF0C\u518D\u9009\u4E2D <code>Delete</code> \u64CD\u4F5C\u3002</p><p><img src="'+f+'" alt=""></p><div class="tip custom-block"><p class="custom-block-title">\u6E29\u99A8\u63D0\u793A</p><p>\u5220\u9664\u7684\u5206\u652F\u4E0D\u80FD\u662F\u5F53\u524D\u6240\u5728\u5206\u652F</p></div><h3 id="\u7F16\u8F91\u5206\u652F\u540D\u79F0" tabindex="-1">\u7F16\u8F91\u5206\u652F\u540D\u79F0 <a class="header-anchor" href="#\u7F16\u8F91\u5206\u652F\u540D\u79F0" aria-hidden="true">#</a></h3><p>\u5F53\u9700\u8981\u4FEE\u6539\u5BF9\u5E94\u5206\u652F\u540D\u79F0\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u547D\u4EE4 <code>git branch -m \u65E7\u5206\u652F \u65B0\u5206\u652F</code> \u4FEE\u6539\u5206\u652F\u540D\u79F0\u3002</p><p>\u5728 PhpStorm \u4E2D\u53EF\u4EE5\u901A\u8FC7\u4E3B\u83DC\u5355\u4E0A\u7684 <code>Git</code> -&gt; \u9009\u62E9 <code>Branches...</code></p><p><img src="'+S+'" alt=""></p><p>\u6216\u8005\u901A\u8FC7\u5FEB\u6377\u952E <code>Ctrl + V</code> \u547C\u51FA VSC \u64CD\u4F5C\u9879\uFF0C\u63A5\u7740\u9009\u62E9 <code>Branches...</code>\uFF0C\u5728\u63A5\u4E0B\u6765\u7684\u5F39\u7A97\u9009\u62E9\u5BF9\u5E94\u5206\u652F\uFF0C\u518D\u9009\u4E2D <code>Rename</code> \u64CD\u4F5C\u3002</p><p><img src="'+v+'" alt=""></p><p>\u5728\u63A5\u4E0B\u6765\u7684\u5F39\u51FA\u5C42\u4E2D\u8F93\u5165\u4FEE\u6539\u540E\u7684\u5206\u652F\u540D\uFF0C\u7136\u540E\u70B9\u51FB Rename \u786E\u8BA4\u4FEE\u6539</p><p><img src="'+C+'" alt=""></p><h3 id="\u5206\u652F\u5408\u5E76\u64CD\u4F5C" tabindex="-1">\u5206\u652F\u5408\u5E76\u64CD\u4F5C <a class="header-anchor" href="#\u5206\u652F\u5408\u5E76\u64CD\u4F5C" aria-hidden="true">#</a></h3><p>\u5F53\u9700\u8981\u5408\u5E76\u53E6\u4E00\u4E2A\u5206\u652F\u53D8\u66F4\u64CD\u4F5C\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u547D\u4EE4 <code>git merge \u5F85\u5408\u5E76\u7684\u5206\u652F\u540D</code> \u6765\u5408\u5E76\u53E6\u4E00\u4E2A\u5206\u652F\u3002</p><p>\u5728 PhpStorm \u4E2D\u53EF\u4EE5\u901A\u8FC7\u4E3B\u83DC\u5355\u4E0A\u7684 <code>Git</code> -&gt; \u9009\u62E9 <code>Branches...</code></p><p><img src="'+G+'" alt=""></p><p>\u6216\u8005\u901A\u8FC7\u5FEB\u6377\u952E <code>Ctrl + V</code> \u547C\u51FA VSC \u64CD\u4F5C\u9879\uFF0C\u63A5\u7740\u9009\u62E9 <code>Branches...</code>\uFF0C\u5728\u63A5\u4E0B\u6765\u7684\u5F39\u7A97\u9009\u62E9\u5BF9\u5E94\u5206\u652F\uFF0C\u518D\u9009\u4E2D <code>Merge ... into ...</code> \u64CD\u4F5C\u3002</p><p><img src="'+k+'" alt=""></p><h2 id="\u6807\u7B7E\u7BA1\u7406" tabindex="-1">\u6807\u7B7E\u7BA1\u7406 <a class="header-anchor" href="#\u6807\u7B7E\u7BA1\u7406" aria-hidden="true">#</a></h2><p>\u65B0\u5EFA\u6807\u7B7E</p><p>\u5220\u9664\u6807\u7B7E</p>',66),P=[x];function w(B,R,T,N,y,H){return o(),t("div",null,P)}const D=e(V,[["render",w]]);export{A as __pageData,D as default};
