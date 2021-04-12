import { ComponentPublicInstance, createApp, Ref } from '@vue/runtime-dom'
import Loading from './loading.vue'
interface withInstanceProperty {
  instance: ComponentPublicInstance
}
const loadingDirective = {
  mounted(el: HTMLElement & withInstanceProperty, binding: any) {
    const app = createApp(Loading)
    const instance = app.mount(document.createElement('div'))
    el.instance = instance
    if (binding.value) {
      append(el)
    }
  },
  updated(el: HTMLElement & withInstanceProperty, binding: any) {
    if (binding.value !== binding.oldValue) {
      binding.value ? append(el) : remove(el)
    }
  },
}

function append(el: HTMLElement & withInstanceProperty) {
  el.appendChild(el.instance.$el)
}

function remove(el: HTMLElement & withInstanceProperty) {
  el.removeChild(el.instance.$el)
}

export default loadingDirective
