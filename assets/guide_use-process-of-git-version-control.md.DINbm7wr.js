import{_ as e,c as o,o as t,a2 as a}from"./chunks/framework.T1JhP7-b.js";const r="/phpstorm/assets/enable-version-control-integration.D3mBbp9-.png",s="/phpstorm/assets/add-file-to-git.CAw1G-Sz.png",p="/phpstorm/assets/show-git-local-changes.BnK6pU1W.png",c="/phpstorm/assets/commit-panel.lfA5K-DD.png",i="/phpstorm/assets/reset-current-branch-to-some-step.Lr7tD2ni.png",n="/phpstorm/assets/define-remote.DzoK8kq1.png",d="/phpstorm/assets/show-git-log.BCcsQ-Ae.png",l="/phpstorm/assets/show-git-log-panel.lKw3QHyK.png",h="/phpstorm/assets/create-new-branch-from-main-menu.CSfmOn45.png",m="/phpstorm/assets/create-new-branch-from-keymap.CMQ_9bro.png",g="/phpstorm/assets/create-new-branch.Cjn1wmvp.png",_="/phpstorm/assets/create-new-branch-add-branch-name.hZBmiErp.png",u="/phpstorm/assets/branchs-list-panel.Cpf8X36Y.png",b="/phpstorm/assets/delete-a-local-branch.Dl9vk1s5.png",f="/phpstorm/assets/branchs-list-panel-for-rename.DLp_QeNS.png",q="/phpstorm/assets/rename-a-local-branch.DNvTUvl9.png",P="/phpstorm/assets/submit-rename-a-local-branch.BD2DWd4s.png",C="/phpstorm/assets/merge-another-local-branch.t9mryqGp.png",k="/phpstorm/assets/merge-another-local-branch-submit.BQJSIvs3.png",S="/phpstorm/assets/create-new-tag-from-main-menu.D3eVDkMP.png",x="/phpstorm/assets/create-new-tag-from-main-menu-form.CJr8QdlT.png",G="/phpstorm/assets/create-new-tag-from-commit-histories.Cg3MTvyb.png",w="/phpstorm/assets/create-new-tag-from-commit-histories-submit.Cl808SeK.png",D="/phpstorm/assets/delete-exists-tag.Ddn5B_Px.png",O=JSON.parse('{"title":"Git 工作流","description":"","frontmatter":{},"headers":[],"relativePath":"guide/use-process-of-git-version-control.md","filePath":"guide/use-process-of-git-version-control.md","lastUpdated":1665733517000}'),B={name:"guide/use-process-of-git-version-control.md"},v=a('<h1 id="git-工作流" tabindex="-1">Git 工作流 <a class="header-anchor" href="#git-工作流" aria-label="Permalink to &quot;Git 工作流&quot;">​</a></h1><p>PhpStorm 集成了 Git、SVN 等版本管理工具，可以快速预览提交历史、提交版本、分支操作和标签的管理等等。</p><p>这里演示 PhpStorm 中使用 Git 的一些流程。</p><h2 id="启用-git-版本控制" tabindex="-1">启用 Git 版本控制 <a class="header-anchor" href="#启用-git-版本控制" aria-label="Permalink to &quot;启用 Git 版本控制&quot;">​</a></h2><p>当打开一个没有版本控制的项目时，可以在顶部主菜单 <code>VCS</code> | <code>Enable Version Control Integration...</code></p><p><img src="'+r+'" alt=""></p><p>点击 OK 确认启用版本控制集成。</p><h2 id="向版本库中添加文件" tabindex="-1">向版本库中添加文件 <a class="header-anchor" href="#向版本库中添加文件" aria-label="Permalink to &quot;向版本库中添加文件&quot;">​</a></h2><p>使用 PhpStorm 新建文件 <code>index.php</code> 时，编辑器默认会提示是否需要将新建的文件添加到版本库中</p><p>如果需要新增到版本库中可以点击 OK；当然也可以选择不添加，然后在后期需要添加的时候再添加。根据情况选择即可。</p><p><img src="'+s+'" alt=""></p><p>再添加一个 <code>route.php</code> 文件并且不添加到 Git 版本库中。</p><h2 id="查看本地变更" tabindex="-1">查看本地变更 <a class="header-anchor" href="#查看本地变更" aria-label="Permalink to &quot;查看本地变更&quot;">​</a></h2><p>默认情况下 PhpStorm 将本地变更记录取消了，但是可以通过系统偏好设置重新设置。</p><p>使用 Command , 来到 Version Control 相关的设置后选择 Commit，将 <code>Use non-modal commit interface</code> 反选后保存即可。</p><p>再使用快捷键 Command 9 在查看提交历史面板可以看到本地文件的变更。</p><p><img src="'+p+'" alt=""></p><h2 id="提交历史管理" tabindex="-1">提交历史管理 <a class="header-anchor" href="#提交历史管理" aria-label="Permalink to &quot;提交历史管理&quot;">​</a></h2><h3 id="本地暂存区文件" tabindex="-1">本地暂存区文件 <a class="header-anchor" href="#本地暂存区文件" aria-label="Permalink to &quot;本地暂存区文件&quot;">​</a></h3><p>在编写代码时，想浏览本地文件的变更情况，当然可以在终端输入 <code>git status</code> 来查看文件变更记录，那么使用 PhpStorm 应该怎么操作呢？</p><p>PhpStorm 的查看工作区文件变更情况远不止查看文件变更历史，还包含了：文件内容变更可视化查看、文件分组、树形显示、甚至可以直接提交版本等操作。</p><p>通过在 PhpStorm 主菜单点击 <code>Git</code> -&gt; <code>Commit</code> 会弹出当前工作区文件的变更情况，或者直接使用快捷键 <code>Command + K</code> 即可。</p><p><img src="'+c+'" alt=""></p><ol><li><p>功能操作区</p><ul><li><strong>查看差异</strong> 将光标悬浮在下面文件上点击 <code>Show diff</code> 按钮可以看到对应文件的前后变更差异，也可以直接双击文件查看差异</li><li><strong>回滚</strong> 一般用户文件状态回滚</li><li><strong>刷新</strong> 一般用于本地文件变更后刷新列表</li><li><strong>分组方式</strong> 默认为文件夹分组</li><li><strong>展开所有</strong> 将所有文件夹展开，如果存在文件夹的话</li><li><strong>全部收缩</strong> 将所有文件夹搜索，如果存在文件夹的话</li><li><strong>变更列表</strong> 相当于可以将变更历史添加一个分组，方便后期查看对应分组中的文件变更</li></ul></li><li><p><strong>文件变更列表</strong></p><p>显示版本库当前变更记录，比如，新增文件、编辑文件、删除文件等。</p><p>点击文件名称，在右侧可以看到对应的文件变更内容。</p></li><li><p><strong>提交信息</strong></p><p>可以在这里提供提交版本时的信息。</p></li><li><p><strong>提交、提交并推送到远程</strong></p><p>可以选择提交到版本库，也可以通过下拉选项选择提交到版本库之后直接推送到远程仓库。</p></li></ol><h3 id="版本回退" tabindex="-1">版本回退 <a class="header-anchor" href="#版本回退" aria-label="Permalink to &quot;版本回退&quot;">​</a></h3><p>在上面查看本地文件暂存变更列表可以对文件提交版本管理，那么如果和历史版本进行回退呢？</p><p>使用 <code>Command + 9</code> 可以在版本库提交历史中定位到需要回退的版本，并使用右键点击 <code>Reset current branch to Here</code> ，然后在接下来的弹出层选择需要回退的模式。</p><p><img src="'+i+'" alt=""></p><p>还有另一种情况就是当我们回退版本后发现回退错了，还是应该将版本库切换到回退前的状态。当前建议使用 <code>git reflog</code> 查看版本库历史记录信息，并复制 hash 值。</p><p>然后来到主菜单的 <code>Git</code> -&gt; <code>Reset Head...</code>，将上面执行的命令获取的hash值提取到粘贴到弹出层即可回退到指定版本。</p><h2 id="添加远程仓库" tabindex="-1">添加远程仓库 <a class="header-anchor" href="#添加远程仓库" aria-label="Permalink to &quot;添加远程仓库&quot;">​</a></h2><p>开发一个项目一般会多人协同开发，如果将自己本地编写的代码推送到远程仓库，或者将远程仓库变更获取到本地。</p><p>接下来一起看一下在 PhpStorm 中添加远程仓库的流程。</p><p>在顶部主菜单选择 <code>Git</code> | <code>Manage Remotes...</code> 在弹窗中选择加号添加一个</p><p><img src="'+n+'" alt=""></p><ul><li><strong>Name</strong>: <code>origin</code></li><li><strong>URL</strong>: <code>git@github.com:curder/git-demo.git</code></li></ul><p>然后点击 OK 确认输入。</p><h2 id="推送和拉取代码" tabindex="-1">推送和拉取代码 <a class="header-anchor" href="#推送和拉取代码" aria-label="Permalink to &quot;推送和拉取代码&quot;">​</a></h2><h3 id="推送代码到远程" tabindex="-1">推送代码到远程 <a class="header-anchor" href="#推送代码到远程" aria-label="Permalink to &quot;推送代码到远程&quot;">​</a></h3><p>在顶部主菜单选择 <code>Git</code> | <code>Push</code> 或者使用快捷键 Command Shift K 可以将本地提交的版本推送到远程仓库。</p><p>会弹出确认推送的面板，包含需要推送的本地历史提交和推送对应的文件变更列表。</p><p>点击 Push 就可以推送。</p><p>但是如果是一个协同开发的项目，一个好的习惯是推送之前先更新一下项目最新的代码再推送，那么接下来一起来看一下从远程仓库获取代码更新。</p><h3 id="拉取代码到本地" tabindex="-1">拉取代码到本地 <a class="header-anchor" href="#拉取代码到本地" aria-label="Permalink to &quot;拉取代码到本地&quot;">​</a></h3><p>当需要获取远程代码中其他伙伴更新的代码或者推送之前都建议拉取最新的仓库代码到本地。</p><p>在编辑器的顶部主菜单找到 Git | Update Project... 或者使用快捷键 Command T 可以从远程仓库更新项目代码到本地。</p><p>在弹出的更新项目模式可以选择 Merge 或 Rebase，这里选择 Rebase 即可。</p><h2 id="查看提交历史" tabindex="-1">查看提交历史 <a class="header-anchor" href="#查看提交历史" aria-label="Permalink to &quot;查看提交历史&quot;">​</a></h2><p>在顶部菜单栏，选择 <code>Git</code> -&gt; <code>Show Git Log</code>，或者使用快捷键 <code>Command + 9</code> 快速切换 Git 提交历史</p><p><img src="'+d+'" alt=""></p><p>查看提交历史界面如下：</p><p><img src="'+l+'" alt=""></p><ol><li>本地和远程分支预览</li><li>分支、用户、时间和路径过滤</li><li>提交历史列表</li><li>提交对应文件变更列表</li></ol><h2 id="分支操作" tabindex="-1">分支操作 <a class="header-anchor" href="#分支操作" aria-label="Permalink to &quot;分支操作&quot;">​</a></h2><h3 id="新建本地分支" tabindex="-1">新建本地分支 <a class="header-anchor" href="#新建本地分支" aria-label="Permalink to &quot;新建本地分支&quot;">​</a></h3><p>当需要新建一个本地分支时，可以使用 <code>git branch 分支名</code> 来通过命令行的方式新建一个新分支。</p><p>在 PhpStorm 中可以通过在主菜单，选择 <code>Git</code> -&gt; 点击 <code>New Branch...</code> 通过当前分支，创建一个新分支，并且默认情况下会将当前工作区自动切换到新分支上。</p><p><img src="'+h+'" alt=""></p><p>或者通过快捷键 <code>Ctrl + V</code> 呼出 VSC 操作项。</p><p><img src="'+m+'" alt=""></p><p>接着点击 <code>Create new branch...</code></p><p><img src="'+g+'" alt=""></p><p>然后命名一个新分支即可。</p><p><img src="'+_+'" alt=""></p><h3 id="删除本地分支" tabindex="-1">删除本地分支 <a class="header-anchor" href="#删除本地分支" aria-label="Permalink to &quot;删除本地分支&quot;">​</a></h3><p>当需要删除对应分支时，可以使用命令 <code>git branch -d 待删除的分支名</code> 来删除不需要的本地分支。</p><p>在 PhpStorm 中可以通过主菜单上的 <code>Git</code> -&gt; 选择 <code>Branches...</code></p><p><img src="'+u+'" alt=""></p><p>或者通过快捷键 <code>Ctrl + V</code> 呼出 VSC 操作项，接着选择 <code>Branches...</code>，在接下来的弹窗选择对应分支，再选中 <code>Delete</code> 操作。</p><p><img src="'+b+'" alt=""></p><div class="tip custom-block"><p class="custom-block-title">温馨提示</p><p>删除的分支不能是当前所在分支</p></div><h3 id="编辑分支名称" tabindex="-1">编辑分支名称 <a class="header-anchor" href="#编辑分支名称" aria-label="Permalink to &quot;编辑分支名称&quot;">​</a></h3><p>当需要修改对应分支名称时，可以使用命令 <code>git branch -m 旧分支 新分支</code> 修改分支名称。</p><p>在 PhpStorm 中可以通过主菜单上的 <code>Git</code> -&gt; 选择 <code>Branches...</code></p><p><img src="'+f+'" alt=""></p><p>或者通过快捷键 <code>Ctrl + V</code> 呼出 VSC 操作项，接着选择 <code>Branches...</code>，在接下来的弹窗选择对应分支，再选中 <code>Rename</code> 操作。</p><p><img src="'+q+'" alt=""></p><p>在接下来的弹出层中输入修改后的分支名，然后点击 Rename 确认修改</p><p><img src="'+P+'" alt=""></p><h3 id="分支合并操作" tabindex="-1">分支合并操作 <a class="header-anchor" href="#分支合并操作" aria-label="Permalink to &quot;分支合并操作&quot;">​</a></h3><p>当需要合并另一个分支变更操作时，可以使用命令 <code>git merge 待合并的分支名</code> 来合并另一个分支。</p><p>在 PhpStorm 中可以通过主菜单上的 <code>Git</code> -&gt; 选择 <code>Branches...</code></p><p><img src="'+C+'" alt=""></p><p>或者通过快捷键 <code>Ctrl + V</code> 呼出 VSC 操作项，接着选择 <code>Branches...</code>，在接下来的弹窗选择对应分支，再选中 <code>Merge ... into ...</code> 操作。</p><p><img src="'+k+'" alt=""></p><h2 id="标签管理" tabindex="-1">标签管理 <a class="header-anchor" href="#标签管理" aria-label="Permalink to &quot;标签管理&quot;">​</a></h2><p>Git 可以给仓库历史中的某一个提交打上标签，以示重要，比较有代表性的是人们会使用这个功能来标记发布结点（ v1.0 、 v2.0 等等）。</p><h3 id="新建标签" tabindex="-1">新建标签 <a class="header-anchor" href="#新建标签" aria-label="Permalink to &quot;新建标签&quot;">​</a></h3><p>当需要在某个提交添加标签时，可以使用命令 <code>git tag 标签名</code> 或者指定提交ID参数 <code>git tag -a 标签名 hashId</code> 来新建一个标签。</p><p>Git 支持两种标签：轻量标签（lightweight）与附注标签（annotated）。</p><h4 id="方式一-主菜单" tabindex="-1">方式一：主菜单 <a class="header-anchor" href="#方式一-主菜单" aria-label="Permalink to &quot;方式一：主菜单&quot;">​</a></h4><p>在 PhpStorm 中可以通过主菜单上的 <code>Git</code> -&gt; 选择 <code>New Tag...</code>，这种方式创建的标签需要添加hashId，hashId的值可以通过提交历史获取。</p><p><img src="'+S+'" alt=""></p><p>以上方式在弹出的输入框由如下信息：</p><ol><li>输入新建的标签名</li><li>对应提交HashId</li><li>提交信息简介，如果提供了信息则为&quot;附注标签&quot; ，参考<a href="https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%89%93%E6%A0%87%E7%AD%BE" target="_blank" rel="noreferrer">git-scm 附注标签</a></li><li>以上信息确认无误后点击 <code>Create Tag</code> 确认输入 <img src="'+x+'" alt=""></li></ol><h4 id="方式二-提交历史记录" tabindex="-1">方式二：提交历史记录 <a class="header-anchor" href="#方式二-提交历史记录" aria-label="Permalink to &quot;方式二：提交历史记录&quot;">​</a></h4><p>使用快捷键 <code>Command + 9</code> 打开提交历史记录列表，将光标选中指定提交历史，右键点击获取弹出层，选中 <code>New Tag...</code></p><p><img src="'+G+'" alt=""></p><p>可以看到，相比方式一：通过主菜单新建标签的方式不同的是，由于已经选择了具体关联的提交记录，所以不再需要提供 hashId，然后默认提交的是轻量标签，所以我们仅需要提供标签名称即可。</p><p><img src="'+w+'" alt=""></p><h3 id="删除标签" tabindex="-1">删除标签 <a class="header-anchor" href="#删除标签" aria-label="Permalink to &quot;删除标签&quot;">​</a></h3><p>使用快捷键 <code>Command + 9</code> 打开提交历史记录记录列表，将光标选中指定提交历史，右键点击获取弹出层，当存在多个标签时选中 <code>Tags</code> 或者 当前提交版本仅存在一个标签名时选中 <code>Tag 标签名</code>。</p><p>然后选中 <code>Delete</code>，确认操作误后点击回车确认即可。</p><p><img src="'+D+'" alt=""></p>',104),V=[v];function T(K,A,E,I,N,R){return t(),o("div",null,V)}const Q=e(B,[["render",T]]);export{O as __pageData,Q as default};
