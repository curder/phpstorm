import{_ as a,c as l,o,a as e}from"./app.ef0b2f06.js";const n="/phpstorm/assets/introduce-variable-step1.9b2d9b8b.png",p="/phpstorm/assets/introduce-variable-step2.f2243e36.png",s="/phpstorm/assets/introduce-variable-step3.bf328e36.png",t="/phpstorm/assets/introduce-variable-step4.cba8da5a.png",c="/phpstorm/assets/introduce-variable-step5.cd028f57.png",r="/phpstorm/assets/introduce-variable-step6.27402457.png",i="/phpstorm/assets/introduce-free-variable-step1.a9418308.png",d="/phpstorm/assets/introduce-free-variable-step2.55585404.png",f=JSON.parse('{"title":"\u91CD\u6784\u53D8\u91CF","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u63D0\u53D6\u53D8\u91CF","slug":"\u63D0\u53D6\u53D8\u91CF","link":"#\u63D0\u53D6\u53D8\u91CF","children":[]},{"level":2,"title":"\u91CA\u653E\u53D8\u91CF","slug":"\u91CA\u653E\u53D8\u91CF","link":"#\u91CA\u653E\u53D8\u91CF","children":[]}],"relativePath":"guide/refactoring-for-introduce-variable.md","lastUpdated":1662547995000}'),m={name:"guide/refactoring-for-introduce-variable.md"},y=e(`<h1 id="\u91CD\u6784\u53D8\u91CF" tabindex="-1">\u91CD\u6784\u53D8\u91CF <a class="header-anchor" href="#\u91CD\u6784\u53D8\u91CF" aria-hidden="true">#</a></h1><h2 id="\u63D0\u53D6\u53D8\u91CF" tabindex="-1">\u63D0\u53D6\u53D8\u91CF <a class="header-anchor" href="#\u63D0\u53D6\u53D8\u91CF" aria-hidden="true">#</a></h2><p>\u4EE5\u4E0B\u9762\u8FD9\u6BB5\u4EE3\u7801\u4E3A\u4F8B\u8FDB\u884C\u6F14\u793A\uFF1A</p><div class="language-php"><button class="copy"></button><span class="lang">php</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;?</span><span style="color:#A6ACCD;">php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">binary_num </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">decbin</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;"># \u8BA1\u7B97\u4E8C\u8FDB\u5236</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">random_num </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">mt_rand</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;"># \u968F\u673A\u6570</span></span>
<span class="line"></span></code></pre></div><p>\u9700\u6C42\u8981\u5C06\u4E0A\u8FF0\u4EE3\u7801\u4E2D\u7684\u6570\u5B57 <code>10</code> \u91CD\u6784\u4E3A\u53D8\u91CF\u3002\u53EF\u4EE5\u8FD9\u6837\u64CD\u4F5C\uFF1A</p><ol><li><p>\u9009\u4E2D\u6216\u8005\u5C06\u5149\u6807\u60AC\u6D6E\u5728\u5F85\u91CD\u6784\u7684\u6570\u5B57 <code>10</code> \u4E0A\uFF0C\u5728\u4E3B\u83DC\u5355\u754C\u9762\u9009\u4E2D <code>Refactor</code> -&gt; <code>Refactor This...</code> \uFF0C\u6216\u8005\u76F4\u63A5\u4F7F\u7528\u5FEB\u6377\u952E <code>Control\uFF08\u6216 Ctrl\uFF09\u2303 + T</code></p><details class="details custom-block"><summary>\u70B9\u51FB\u5C55\u793A\u6216\u9690\u85CF\u6F14\u793A\u56FE</summary><ol><li>\u5C06\u5149\u6807\u60AC\u6D6E\u5728\u53D8\u91CF\u4E0A</li><li>\u70B9\u51FB\u4E3B\u83DC\u5355\u754C\u9762\u9009\u4E2D <code>Refactor</code> -&gt; \u5E76\u9009\u62E9 <code>Refactor This...</code><img src="`+n+'" alt=""> :::</li></ol></details></li><li><p>\u5728\u968F\u540E\u5F39\u51FA\u7684\u9009\u9879\u5217\u8868\u4E2D\u9009\u62E9 <code>Introduce Variable...</code></p><details class="details custom-block"><summary>\u70B9\u51FB\u5C55\u793A\u6216\u9690\u85CF\u6F14\u793A\u56FE</summary><p><img src="'+p+'" alt=""></p></details></li><li><p>\u5982\u679C\u4F7F\u7528\u7684\u662F\u9F20\u6807\u60AC\u6D6E\u5728\u91CD\u6784\u7684\u53D8\u91CF\u4E0A\uFF0C\u53EF\u80FD\u4F1A\u51FA\u73B0\u4E0B\u9762\u7684\u63D0\u793A\u5C42\uFF0C\u786E\u8BA4\u91CD\u6784\u53D8\u91CF\u7684\u8303\u56F4</p><details class="details custom-block"><summary>\u70B9\u51FB\u5C55\u793A\u6216\u9690\u85CF\u6F14\u793A\u56FE</summary><p><img src="'+s+'" alt=""></p></details></li><li><p>\u5982\u679C\u5F53\u524D\u6709\u591A\u4E2A\u53D8\u91CF\uFF0C\u4F1A\u7EE7\u7EED\u5F39\u51FA\u5F39\u5C42\u63D0\u793A\u662F\u5426\u9700\u8981\u5168\u90E8\u66FF\u6362\uFF0C\u8FD9\u91CC\u9009\u62E9\u66FF\u6362\u5168\u90E8\u53D8\u91CF\u540E\uFF0C\u70B9\u51FB\u56DE\u8F66\u786E\u8BA4\u9009\u62E9</p><details class="details custom-block"><summary>\u70B9\u51FB\u5C55\u793A\u6216\u9690\u85CF\u6F14\u793A\u56FE</summary><p><img src="'+t+'" alt=""></p></details></li><li><p>\u53EF\u4EE5\u53D1\u73B0\u4EE3\u7801\u4E2D\u7684 2 \u4E2A\u6570\u5B57 10 \u5C31\u88AB\u91CD\u6784\u6210\u4E86\u53D8\u91CF <code>$num</code>\uFF0C\u4E14\u5149\u6807\u8FD8\u505C\u7559\u5728\u8FD9\u4E2A\u53D8\u91CF <code>$num</code> \u4E0A</p><details class="details custom-block"><summary>\u70B9\u51FB\u5C55\u793A\u6216\u9690\u85CF\u6F14\u793A\u56FE</summary><p><img src="'+c+'" alt=""></p></details></li><li><p>\u5982\u679C\u751F\u6210\u7684\u53D8\u91CF\u540D\u79F0\u4E0D\u6EE1\u610F\uFF0C\u53EF\u4EE5\u5BF9\u53D8\u91CF\u8FDB\u884C\u4FEE\u6539\uFF0C\u7F16\u8F91\u5B8C\u6210\u540E\u6309\u56DE\u8F66\u786E\u8BA4</p><details class="details custom-block"><summary>\u70B9\u51FB\u5C55\u793A\u6216\u9690\u85CF\u6F14\u793A\u56FE</summary><p><img src="'+r+`" alt=""></p></details></li></ol><p>\u4E5F\u53EF\u4EE5\u5C06\u4E0A\u9762\u7684\u503C\u63D0\u53D6\u4E3A <strong>\u5E38\u91CF</strong> \u3001<strong>\u7C7B\u5C5E\u6027</strong>\u7B49\uFF0C\u64CD\u4F5C\u6D41\u7A0B\u548C\u4E0A\u9762\u7C7B\u4F3C\u3002</p><h2 id="\u91CA\u653E\u53D8\u91CF" tabindex="-1">\u91CA\u653E\u53D8\u91CF <a class="header-anchor" href="#\u91CA\u653E\u53D8\u91CF" aria-hidden="true">#</a></h2><p>\u4EE5\u4E0B\u9762\u8FD9\u6BB5\u4EE3\u7801\u4F5C\u4E3A\u6F14\u793A\uFF1A</p><div class="language-php"><button class="copy"></button><span class="lang">php</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;?</span><span style="color:#A6ACCD;">php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">number </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">binary_num </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">decbin</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">number</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;"># \u8BA1\u7B97\u4E8C\u8FDB\u5236</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">random_num </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">mt_rand</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">number</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;"># \u968F\u673A\u6570</span></span>
<span class="line"></span></code></pre></div><p>\u9700\u6C42\u8981\u5C06\u4E0A\u8FF0\u4EE3\u7801\u4E2D\u7684\u53D8\u91CF <code>$number</code> \u91CA\u653E\u3002\u53EF\u4EE5\u8FD9\u6837\u64CD\u4F5C\uFF1A</p><ol><li><p>\u9009\u4E2D\u6216\u8005\u5C06\u5149\u6807\u60AC\u6D6E\u5728\u5F85\u91CD\u6784\u7684\u53D8\u91CF <code>$number</code> \u4E0A\uFF0C\u5728\u4E3B\u83DC\u5355\u754C\u9762\u9009\u4E2D <code>Refactor</code> -&gt; <code>Refactor This...</code> \uFF0C\u6216\u8005\u76F4\u63A5\u4F7F\u7528\u5FEB\u6377\u952E <code>Control\uFF08\u6216 Ctrl\uFF09\u2303 + T</code></p><details class="details custom-block"><summary>\u70B9\u51FB\u5C55\u793A\u6216\u9690\u85CF\u6F14\u793A\u56FE</summary><ol><li>\u5C06\u5149\u6807\u60AC\u6D6E\u5728\u53D8\u91CF <code>$number</code> \u4E0A</li><li>\u70B9\u51FB\u4E3B\u83DC\u5355\u754C\u9762\u9009\u4E2D <code>Refactor</code> -&gt; \u5E76\u9009\u62E9 <code>Refactor This...</code><img src="`+i+'" alt=""> :::</li></ol></details></li><li><p>\u5728\u968F\u540E\u5F39\u51FA\u7684\u9009\u9879\u5217\u8868\u4E2D\u9009\u62E9 <code>Introduce Variable...</code></p><details class="details custom-block"><summary>\u70B9\u51FB\u5C55\u793A\u6216\u9690\u85CF\u6F14\u793A\u56FE</summary><p><img src="'+d+'" alt=""></p></details></li><li><p>\u53EF\u4EE5\u53D1\u73B0\u4EE3\u7801\u4E2D\u7684\u53D8\u91CF <code>$number</code> \u5C31\u88AB\u91CA\u653E\u4E86\uFF0C\u4E14\u6709\u6539\u52A8\u7684\u5730\u65B9\u9AD8\u4EAE\u5C55\u793A</p><details class="details custom-block"><summary>\u70B9\u51FB\u5C55\u793A\u6216\u9690\u85CF\u6F14\u793A\u56FE</summary><p><img src="'+s+'" alt=""></p></details></li></ol>',12),u=[y];function D(F,C,A,_,b,h){return o(),l("div",null,u)}const v=a(m,[["render",D]]);export{f as __pageData,v as default};