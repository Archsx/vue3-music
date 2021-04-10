<template> </template>

<script>
import { defineComponent } from 'vue'
import { getRecommend } from '@/service/recommend'
export default defineComponent({
  name: 'Recommend',
  components: {},
  async setup(props) {
    const result = await getRecommend()
    console.log(result)
    return {}
  },
})
</script>

<style lang="" scoped></style>
