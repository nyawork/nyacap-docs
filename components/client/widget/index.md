# Widget

::: warning 早期开发阶段

由于 `Widget` 仍处于早期开发阶段，我们不推荐您在生产环境单独使用它。如果有可能的话，最好能配合其他相对较为成熟的验证码解决方案一起使用。

我们无法保证相关的 API 接口稳定性，未来可能会随着相关开发工作的进展出现一些破坏性的改动，请注意跟进相关的更新。

:::

## 发布渠道

Widget 有以下发布渠道：

| 发布渠道         | 地址                            | 版本                        | 使用环境 |
| ---------------- | ------------------------------- | --------------------------- | -------- |
| npmjs            | @nyacap/widget                  | :label: tag 发布            | Node.js  |
| GitHub Pages     | w.nyacap.com                    | :label: tag 发布            | 浏览器   |
| Cloudflare Pages | nyacap-widget.pages.dev         | :thumbsup: main 分支        | 浏览器   |
| Cloudflare Pages | develop.nyacap-widget.pages.dev | :construction: develop 分支 | 浏览器   |

::: tip \*备注

为了方便在浏览器环境下直接引入使用，我们对面向浏览器环境使用的版本做了一些小小的改进，将 `.umd.cjs` 文件名重命名为 `.umd.js` ，以避免 `.cjs` 后缀名被指定 MIME 类型为 `application/node` 使部分浏览器出现拒绝加载的情况。

:::

## 预览

您可以在这里预览各个对应的版本：

- [tag 发布](https://nyacap.com)
- [main 分支](https://nyacap.com/main)
- [develop 分支](https://nyacap.com/develop)

## 使用方法（浏览器环境）

首先加载代码。目前我们主要使用的代码文件是 `widget.umd.js` ，加载路径格式是这样的：

```html
<script src="https://<发布渠道地址>/widget.umd.js"></script>
```

例如，如果想要使用 `tag 发布` 的版本，我们可以使用 `w.nyacap.com` 。就像这样：

```html
<script src="https://w.nyacap.com/widget.umd.js"></script>
```

::: tip ES Module 模式

Vite 另外也会打包一个 ES Module 模式的代码 `widget.js` ，暂时还不知道怎么用。此处的文档以 CommonJS 的为准。

:::

为了方便理解和使用，我们提供了类似 reCaptcha 的封装：可以在代码加载完成后使用 `window.nyacap` 来访问到它。

纯 HTML 项目的使用方法可以参考 [项目首页] 的用法。 React 和 Vue 等现代前端工具构建的项目也可以这样使用，以避免在构建时引入额外的依赖对项目体积造成影响。

[项目首页]: https://nya.codes/nyawork/nyacap/home/-/blob/main/index.html#L30-47

### 功能函数

目前的函数支持如下：

| 函数        | 格式                                   | 支持状态           | 功能           |
| ----------- | -------------------------------------- | ------------------ | -------------- |
| render      | (el: HTMLElement, op: Options) => void | :white_check_mark: | 渲染验证码     |
| remove      | (id?: string) => void                  | :no_entry_sign:    | 移除验证码     |
| execute     |                                        | :no_entry_sign:    |                |
| reset       | (id?: string) => void                  | :no_entry_sign:    | 重置验证码状态 |
| getResponse | (id?: string) => string                | :no_entry_sign:    | 获得验证码响应 |

如果您有其他功能的需求，欢迎随时开启一个 PR 来实现对应的功能。

#### render

::: warning 函数定义

这个函数和一般的验证码定义不同，它不会返回验证码 id 字符串。

:::

render 函数需要传入两个参数： **待挂载验证码的元素** 和 **验证码选项** 。其中验证码选项为这些：

| 选项             | 类型                  | 必需               | 含义                        |
| ---------------- | --------------------- | ------------------ | --------------------------- |
| sitekey          | string                | :heavy_check_mark: | 验证码的站点 key            |
| instance         | string                |                    | 验证码的服务器 Instance URL |
| theme            | "light" \| "dark"     |                    | 验证码的颜色主题，目前没用  |
| callback         | (key: string) => void |                    | 验证码验证成功后的回调函数  |
| expired-callback | () => void            |                    | 验证码结果超时后的回调函数  |
| error-callback   | () => void            |                    | 验证码出现错误时的回调函数  |

支持用两种方式配置 sitekey ：

1. 使用形如 `https://mini.nyacap.com/widget?sitekey=demo` 这样的方式同时配置 Instance URL 和 Site Key （目前这个路径下不包含任何内容，但未来可能会使用，推荐您遵循这种格式）
2. 分别配置 Instance URL 和 Site Key （其中 Instance URL 为 Origin 格式，即形如 `https://mini.nyacap.com` ）。
