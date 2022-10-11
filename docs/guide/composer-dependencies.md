# Composer 依赖

一般使用命令行终端命令创建 Composer 依赖，也可以使用 PhpStorm 编辑带给我们的编辑体验。

比如这里以安装一个依赖包：[spatie/laravel-backup](https://github.com/spatie/laravel-backup) 为例作为演示。

## 添加 Composer 依赖

可以在命令行中使用 `composer require spatie/laravel-backup` 命令添加对应的第三方扩展包 `spatie/laravel-backup`。

如果要使用 PhpStorm 工作流程应该怎么添加它呢？

1. 在主菜单界面选择 `Tools` -> `Composer` -> 选择 `Manage Dependencies...`（或者在打开 `composer.json` 文件界面点击右上角的 ⚙️ 按钮，选择 `Manage Dependencies...`）
    ::: details 点击切换截图展示与隐藏
    ![](./images/composer-dependencies/add-compose-dependencies-using-manage-dependencies.png)
    :::

2. 在随即打开的 `composer.json` 文件中输入要安装的软件包名，并点击 `Update` 安装软件包
   ::: details 点击切换截图展示与隐藏
   1. 输入需要安装的软件包
   2. 确认安装包输入无误后，点击 `Update` 确认安装
   3. 等待片刻，软件包就安装到本地 `vendor/` 目录下
   ![](./images/composer-dependencies/enter-install-package-name-and-update.png)
   :::

> 如果需要安装的软件包是仅开发时使用，可以选中对应的软件包后，使用快捷键 `Option（或 Alt）⌥ + Shift ⇧ + 上箭头` 将它移动到 `require-dev` 里。