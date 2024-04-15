import{_ as s,c as e,o as a,a4 as i}from"./chunks/framework.B-5gogL2.js";const n="/phpstorm/assets/use-option-and-mouse-left-click.DH_oExZp.gif",t="/phpstorm/assets/select-the-next-occurrence-of-case-sensitively-matching-word-or-text-range.DPMVKpVW.gif",p="/phpstorm/assets/select-all-case-sensitively-matching-words-or-text-ranges-in-the-document.BXKlkAlq.gif",l="/phpstorm/assets/remove-section-from-the-last-selected-occurrence.BIDHn-41.gif",r="/phpstorm/assets/select-the-next-occurrence-and-return-the-selection-to-the-lastly-skipped-occurrence.CzA3P3ZT.gif",y=JSON.parse('{"title":"多点编辑","description":"","frontmatter":{},"headers":[],"relativePath":"guide/multiple-cursors.md","filePath":"guide/multiple-cursors.md","lastUpdated":1666072486000}'),c={name:"guide/multiple-cursors.md"},o=i(`<h1 id="多点编辑" tabindex="-1">多点编辑 <a class="header-anchor" href="#多点编辑" aria-label="Permalink to &quot;多点编辑&quot;">​</a></h1><p>在 PhpStorm 编辑器中键入、复制或粘贴时，可以切换多个光标，以便操作同时应用于多个位置。</p><p>假如有如下代码，需要修改类属性的可见行为 <code>public</code>：</p><div class="language-php vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    protected</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $name;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    protected</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $age;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    protected</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $description;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>在 PhpStorm 中有如下几种操作方式。</p><h2 id="使用鼠标" tabindex="-1">使用鼠标 <a class="header-anchor" href="#使用鼠标" aria-label="Permalink to &quot;使用鼠标&quot;">​</a></h2><p>按住键盘的 <code>Option（或 Alt）⌥</code> 配合鼠标左键点击光标，可以多选编辑器代码。</p><p><img src="`+n+'" alt=""></p><h2 id="使用快捷键" tabindex="-1">使用快捷键 <a class="header-anchor" href="#使用快捷键" aria-label="Permalink to &quot;使用快捷键&quot;">​</a></h2><ol><li><p>如果要选择单词，请将插入符号设置在所需单词的出现处。或者使用鼠标或键盘快捷键选择所需范围。</p></li><li><p>执行以下操作之一：</p><ul><li><p>连续按 <code>⌃ + G</code> 查找并选择下一个匹配大小写匹配的单词或文本范围</p><p><img src="'+t+'" alt=""></p></li><li><p>按 <code>⌃ + ⌘ + G</code> 选择文档中所有区分大小写匹配的单词或文本范围</p><p><img src="'+p+'" alt=""></p></li></ul></li><li><p>要从上次选择的项目中删除选择，按快捷键 <code>⌃ + ⇧ + G</code></p><p><img src="'+l+'" alt=""></p></li><li><p>在使用 <code>⌃ + G</code> 添加第二个或任何连续选择后，也可以跳过它并使用 <code>⌘ + G</code> 选择下一个匹配项。要将选择返回到最后跳过的匹配项，请按 <code>⇧ + ⌘ + G</code></p><p><img src="'+r+'" alt=""></p></li></ol>',10),h=[o];function d(k,m,u,g,_,b){return a(),e("div",null,h)}const f=s(c,[["render",d]]);export{y as __pageData,f as default};