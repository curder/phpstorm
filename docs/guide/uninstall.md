# 卸载

删除 PhpStorm 的正确方法取决于安装时的方法。

## 卸载独立安装

如果正在运行独立的 PhpStorm 实例，则删除实例时会保留默认的IDE目录，以备以后保留设置，或将其用于其他实例、其他版本或其他IDE。

如果您确定不需要这些目录，则可以删除它们。

1. 删除系统应用程序 `Applications` 目录中的 PhpStorm 应用程序。
2. 删除以下目录：
   ```bash
    # 路径规则 product 为 PhpStorm，version 为软件当前版本
    ~/Library/Application Support/JetBrains/<product><version>
    ~/Library/Caches/JetBrains/<product><version>
    ```

    ::: warning 注意
    这里路径中包含空格，需要使用 `\` 对空格进行转义。比如：

    `~/Library/Application\ Support/JetBrains/<product><version>`
    :::

    ```bash
    # 示例
    ~/Library/Application Support/JetBrains/PhpStorm2022.2
    ~/Library/Caches/JetBrains/PhpStorm2022.2
    ```
    ::: warning 注意
    这里路径中包含空格，需要使用 `\` 对空格进行转义。比如：
    
    `~/Library/Application\ Support/JetBrains/PhpStorm2022.2`
    :::

## 卸载使用 Toolbox App 安装

如果使用 Toolbox App 安装了 PhpStorm，请执行以下操作：

打开 Toolbox 应用程序，单击必要实例的设置图标，然后选择卸载。

![](./images/uninstall/uninstall-phpstorm-using-toolbox.png)