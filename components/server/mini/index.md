# Mini 服务器

::: warning 早期开发阶段

由于 `Mini` 仍处于早期开发阶段，我们不推荐您在生产环境单独使用它。如果有可能的话，最好能配合其他相对较为成熟的验证码解决方案（如 mCaptcha ）一起使用。

我们无法保证相关的 API 接口稳定性，未来可能会随着相关开发工作的进展出现一些破坏性的改动，请注意跟进相关的更新。

:::

## 快速开始

Mini 服务器的数据主要由两大部分组成：配置文件和资源目录。

- 配置文件用于指引 Mini 服务器的整体行为；
- 资源目录用于存放生成验证码时需要使用到的具体资源。

### 配置文件

目前的配置文件分为以下部分：

- `sites` 指定与待部署验证码的站点相关信息，用于站点（与后端）获取验证码使用。
- `captcha` 设指定验证码具体生成的相关参数
- `security` 指定与 IP 反攻击处理相关的参数
- `system` 指定一些与系统相关的选项。

具体的配置文件样例可以参见 [config.yml.example](https://github.com/nyawork/nyacap-mini/blob/main/config.yml.example) 。我们会尽可能保障版本升级时相关的配置兼容性与默认值，但如果出现了不可避免的破坏性改动，您可能需要做出一些对应的调整。

::: details 演示服务器的部署配置

```yaml
sites:
  - site_key: demo-key
    site_secret: demo-secret
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
```

:::

### 资源目录

资源目录主要分为以下部分：

- `font` 用于放置生成验证码文字时使用的字体文件
- `background` 用于放置生成的包含字符的大图使用的背景图片
- `thumbnail` 用于放置生成的待点击文字小图使用的背景图片

具体的请参阅 go-captcha 相关的设置文档：[验证码配置](https://github.com/wenlng/go-captcha/blob/master/README_zh.md#%E9%AA%8C%E8%AF%81%E7%A0%81%E9%85%8D%E7%BD%AE)

## 请求接口

TODO

## 结构解析

TODO
