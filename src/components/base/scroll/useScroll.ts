import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'
BScroll.use(ObserveDOM)
import { BScrollConstructor } from '@better-scroll/core/dist/types/BScroll'
import { ref, Ref } from '@vue/reactivity'
import { onMounted, onUnmounted } from '@vue/runtime-core'
export function useScroll(wrapperRef: Ref<HTMLElement | null>, options?: any) {
  const scroll = ref<BScrollConstructor>()
  onMounted(() => {
    scroll.value = new BScroll(wrapperRef.value!, {
      observeDOM: true,
      ...options,
    })
  })
  onUnmounted(() => {
    scroll.value!.destroy()
  })
}
