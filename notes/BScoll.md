## 使用 BScroll 遇到的三个知识点

### 在 new Bscroll()的时候，内容(content)的高度(宽度)要大于容器(wrapper)的

```javascript
  // useScroll.ts
  onMounted(() => {
    // 由于数据是异步获取的，所以此时在执行初始化函数的时候，内容的高度小于容器的，所以此时是不能滚动的，所以加上了observeDom:true这一配置
    scroll.value = new BScroll(wrapperRef.value!, {
      observeDOM: true,
      ...options,
    })
  })

```
假如数据是静态的，但是还是没能滚动，那么就要检查一下css部分了,看下wrapper和content的高度

### 配合使用 v-if

在使用 slider.vue 的时候，此时数据依然是异步获取的，所以依然是无法滚动的

```vue
  // 使用v-if确保数据获取成功之后再进行组件渲染
  <slider v-if="data"><slider>
```

### wrapper 里面的第一个子 dom 作为 content

原本的 html 结构是：

```html
<scroll>
  <div class="slider"></div>
  <div class="recommend-list"></div>
</scroll>
```

但是其实滚动的区域包括 slider 和 recommend-list，而 BS 只对 wrapper 的第一个子 content 有效

所以将 html 结构修改如下:

```html
<scroll>
  <!-- 使用div包裹,这样这个div就是wrapper的第一个子content了 -->
  <div>
      <div class="slider"></div>
      <div class="recommend-list"></div>
  <div>
</scroll>
```

实际渲染的效果为

```html
<!-- 下面这个div是wrapper -->
<div>
  <!-- 下面这个div是content -->
  <div>
    <div class="slider"></div>
    <div class="recommend-list"></div>
  </div>
</div>
```

### 如何使用 BScroll

我感觉其实使用 BScoll 时的 dom 结构很简单

```html
<wrapper>
  <content>
    <!-- whatever -->
  </content>
</wrapper>
```

js 部分也很简单

```javascript
new BScroll(wrapperDOM, options)
```
