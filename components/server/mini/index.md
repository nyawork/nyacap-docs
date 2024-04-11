# Mini 服务器 <Badge type="tip" text="v0.1.4" vertical="top" />

::: warning 早期开发阶段

由于 `Mini` 仍处于早期开发阶段，我们不推荐您在生产环境单独使用它。如果有可能的话，最好能配合其他相对较为成熟的验证码解决方案一起使用。

我们无法保证相关的 API 接口稳定性，未来可能会随着相关开发工作的进展出现一些破坏性的改动，请注意跟进相关的更新。

:::

## 发布渠道

Mini 使用我们自己的 NyaCodes 构建并管理镜像 `ncr.pub/nyawork/nyacap/mini` ：

- 您可以使用 `latest` 标签拉取最新的稳定发布镜像，
- 或是使用 `develop` 标签拉取开发镜像。

具体可用的标签列表请参见 [Mini Server 容器镜像库] 。

[Mini Server 容器镜像库]: https://nya.codes/nyawork/nyacap/mini/container_registry/24

我们目前仅提供在 amd64 指令集架构下的 Docker 镜像作为官方发布，如果您需要使用二进制可执行文件或是在其他架构（如 aarch64 ）上使用，您可以自行使用仓库源代码构建。

## 使用方法

Mini 服务器的数据主要由两大部分组成：配置文件和资源目录。

- 配置文件用于指引 Mini 服务器的整体行为；
- 资源目录用于存放生成验证码时需要使用到的具体资源。

### 配置文件

目前的配置文件分为以下部分：

- `sites` 指定与待部署验证码的站点相关信息，用于站点（与后端）获取验证码使用。
- `captcha` 设指定验证码具体生成的相关参数
- `security` 指定与 IP 反攻击处理相关的参数
- `system` 指定一些与系统相关的选项。

具体的配置文件样例可以参见 [config.yml.example] 。我们会尽可能保障版本升级时相关的配置兼容性与默认值，但如果出现了不可避免的破坏性改动，您需要及时做出一些对应的调整。

[config.yml.example]: https://nya.codes/nyawork/nyacap/mini/-/blob/main/config.yml.example

::: details 演示服务器的部署配置

```yaml
sites:
  - site_key: demo-key
    secret_key: demo-secret
    allowed_origins:
      - https://nyacap.com
      - https://www.nyacap.com
captcha:
  pending_valid_for: 5m
  submit_valid_for: 2m
  characters: ["你","好","呀","这","是","点","击","验","证","码","哟"]
  padding: 5
security:
  ip_ban_period: 1m
  captcha_request_cd: 1s
  captcha_submit_cd: 2s
system:
  debug: true
  redis: "redis://redis:6379/0"
  listen: ":8080"
```

:::

### 资源目录

资源目录主要分为以下部分：

- `font` 用于放置生成验证码文字时使用的字体文件
- `background` 用于放置生成的包含字符的大图使用的背景图片
- `thumbnail` 用于放置生成的待点击文字小图使用的背景图片

具体的请参阅 go-captcha 相关的设置文档：[验证码配置] 。

[验证码配置]: https://github.com/wenlng/go-captcha/blob/master/README_zh.md#%E9%AA%8C%E8%AF%81%E7%A0%81%E9%85%8D%E7%BD%AE

请恕我们无法在发布镜像中嵌入开箱即用的资源，也无法为您提供任何「官方资源包」。这里是一些寻找（或制作）资源时需要注意的事项：

1. 可以在对应资源目录下再放置子目录，但请注意不要嵌套过多导致出现可能的路径过长问题。
2. 请注意加入用于背景的图片格式与尺寸。我们推荐使用 300px × 240px 尺寸的 JPEG 图片，使用其他格式或是其他尺寸可能会导致出现意想不到的问题。
3. 出于可使用性角度考虑，我们推荐使用较为粗体的文字，太细的文字不好辨认。
4. 未避免小图模糊，可以不设置小图背景图片（也就是将 `thumbnail` 目录留空）。

## 请求接口

TODO
