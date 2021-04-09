<template>
  <m-header></m-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/header/Header.vue'
export default defineComponent({
  name: '',
  components: { MHeader: Header },
  setup(props) {
    return {}
  },
})
</script>

<style lang="" scoped></style>
