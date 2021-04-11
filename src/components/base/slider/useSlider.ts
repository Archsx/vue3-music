import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'
import { onMounted, onUnmounted, Ref, ref } from '@vue/runtime-core'
BScroll.use(Slide)
export function useSlider(WrapperRef: Ref<HTMLElement | null>) {
  const slider = ref<any>(null)
  const currentPageIndex = ref(0)
  onMounted(() => {
    const sliderVal = slider.value = new BScroll(WrapperRef.value!, {
      click: true,
      scrollX: true,
      scrollY: false,
      momentum: false,
      bounce: false,
      slide: true,
      probeType: 2,
    })
    sliderVal.on('slideWillChange', (page: any) => {
      currentPageIndex.value = page.pageX
    })
  })
  onUnmounted(() => {
    slider.value.destroy()
  })
  return {
    slider,
    currentPageIndex,
  }
}
