# Nav-Bar 导航栏组件

这是一个通用的微信小程序导航栏组件，基于 WePY 框架开发。

## 功能特性

- ✅ 支持自定义标题
- ✅ 可控制的返回按钮
- ✅ 右侧文字或图标操作
- ✅ 透明背景模式
- ✅ 固定定位支持
- ✅ 状态栏高度自适应
- ✅ 支持插槽自定义内容
- ✅ 响应式设计

## 使用方法

### 基础用法

```html
<nav-bar title="页面标题"></nav-bar>
```

### 带右侧操作

```html
<nav-bar 
  title="编辑页面" 
  right-text="保存"
  @right-tap="handleSave">
</nav-bar>
```

### 自定义样式

```html
<nav-bar 
  title="透明导航栏" 
  class="fixed transparent"
  back-icon="/images/custom-back.png"
  right-icon="search">
</nav-bar>
```

## Props 属性

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| title | String | '' | 导航栏标题 |
| showBack | Boolean | true | 是否显示返回按钮 |
| backIcon | String | '' | 自定义返回按钮图标路径 |
| rightText | String | '' | 右侧文字 |
| rightIcon | String | '' | 右侧图标类型 |
| className | String | '' | 自定义类名 |
| customStyle | String | '' | 自定义样式 |
| fixed | Boolean | false | 是否固定定位 |
| withStatusBar | Boolean | false | 是否包含状态栏高度 |

## Events 事件

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| back | 返回按钮点击事件 | - |
| right-tap | 右侧区域点击事件 | - |

## Slots 插槽

| 名称 | 说明 |
|------|------|
| title | 自定义标题区域 |
| right | 自定义右侧操作区域 |

## CSS 类名

- `transparent`: 透明背景样式
- `fixed`: 固定定位样式
- `with-status-bar`: 包含状态栏高度样式

## 注意事项

1. 当使用 `fixed` 属性时，需要在页面容器上添加 `padding-top: 88rpx` 为导航栏留出空间
2. 透明背景模式下，建议搭配深色背景图片使用
3. 返回按钮默认行为会调用 `wx.navigateBack()`，可以通过监听 `back` 事件自定义返回逻辑
4. 组件会自动适配不同设备的状态栏高度

## 示例页面

查看 `/src/pages/nav-demo/index.wpy` 文件了解更多使用示例。