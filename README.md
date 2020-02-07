# art-ui

这个 UI 组件库是自己仿照 ElementUI 封装的 Vue 组件库，包含了简单的常用组件：

- button

以下是 art-ui 组件库的文档说明，欢迎一起交流。

## 1. Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

## 2. button 组件

### 2.1 参数

| 参数名   | 说明     | 类型    | 可选值                              | 默认值  |
| :------- | -------- | ------- | ----------------------------------- | ------- |
| type     | 按钮类型 | string  | primary/success/warning/danger/info | default |
| plain    | 是否镂空 | boolean | -                                   | false   |
| round    | 是否圆角 | boolean | -                                   | false   |
| circle   | 是否圆形 | boolean | -                                   | false   |
| disabled | 是否禁用 | boolean | -                                   | false   |
| icon     | 图标类名 | string  | -                                   | -       |

### 2.2 事件

| 事件名 | 说明         |
| ------ | ------------ |
| click  | 按钮点击事件 |

<img src="public/images/btn.png" />
