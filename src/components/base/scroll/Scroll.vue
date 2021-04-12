<template>
  <div ref="rootRef">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useScroll } from './useScroll'
export default defineComponent({
  name: 'Scroll',
  components: {},
  props: {
    click: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const rootRef = ref<HTMLElement | null>(null)
    useScroll(rootRef,props)
    return {
      rootRef,
    }
  },
})
</script>

<style lang="" scoped></style>
