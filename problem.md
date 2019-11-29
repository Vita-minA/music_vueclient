### 在这里记下开发过程的一些小问题

#### http://localhost:8080 无法访问 http://localhost:3000

同源限制，在 vue.config.js 下的 dev 中配置代理

#### 布局时相同背景的两个 div 出现空白

有可能是浏览器缩放显示导致的，将缩放比例调整到 100% 应该就没了

#### 如何实现文字两行后超出部分省略加上 ...

如果是移动端的，可以使用下面的方法，因为绝大多数的手机浏览器都是 webkit 内核的

```css
div {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
}
```
