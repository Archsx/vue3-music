import { addClass, removeClass } from '@/assets/js/dom'
import {
  ComponentPublicInstance,
  createApp,
  DirectiveBinding,
  Ref,
} from '@vue/runtime-dom'
import Loading from './loading.vue'
interface withInstanceProperty {
  instance: ComponentPublicInstance
}
const relativeCls = 'g-relative'
const loadingDirective = {
  mounted(el: HTMLElement & withInstanceProperty, binding: DirectiveBinding) {
    const app = createApp(Loading)
    const instance = app.mount(document.createElement('div'))
    el.instance = instance
    const title = binding.arg
    if (typeof title !== 'undefined') {
      (instance as any).setTitle(title)
    }
    if (binding.value) {
      append(el)
    }
  },
  updated(el: HTMLElement & withInstanceProperty, binding: DirectiveBinding) {
    const title = binding.arg
    if (typeof title !== 'undefined') {
      (el.instance as any).setTitle(title)
    }
    if (binding.value !== binding.oldValue) {
      binding.value ? append(el) : remove(el)
    }
  },
}

function append(el: HTMLElement & withInstanceProperty) {
  const style = getComputedStyle(el)
  if (['absolute', 'fixed', 'relative'].indexOf(style.position) === -1) {
    addClass(el, relativeCls)
  }
  el.appendChild(el.instance.$el)
}

function remove(el: HTMLElement & withInstanceProperty) {
  removeClass(el, relativeCls)
  el.removeChild(el.instance.$el)
}

export default loadingDirective

// 以下写法从代码上看不会报错
// import {
//   ComponentPublicInstance,
//   createApp,
//   createVNode,
//   DirectiveBinding,
//   Ref,
//   render,
// } from '@vue/runtime-dom'
// import Loading from './loading.vue'

// interface withLoadingElement {
//   loading: Element
// }

// const loadingDirective = {
//   mounted(el: Element & withLoadingElement, binding: DirectiveBinding) {
//     const loadingVnode = createVNode(Loading)
//     const container = document.createElement('div')
//     render(loadingVnode, container)
//     el.loading = container.firstElementChild!
//     if (binding.value) {
//       append(el)
//     }
//   },
//   updated(el: Element & withLoadingElement, binding: DirectiveBinding) {
//     if (binding.value !== binding.oldValue) {
//       binding.value ? append(el) : remove(el)
//     }
//   },
// }

// function append(el: Element & withLoadingElement) {
//   el.appendChild(el.loading)
// }

// function remove(el: Element & withLoadingElement) {
//   el.removeChild(el.loading)
// }

// export default loadingDirective
