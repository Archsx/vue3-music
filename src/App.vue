<template>
  <m-header></m-header>
  <m-tab></m-tab>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/header/Header.vue'
import Tab from '@/components/tab/Tab.vue'
export default defineComponent({
  name: '',
  components: { MHeader: Header, MTab: Tab },
  setup(props) {
    return {}
  },
})
</script>

<style lang="" scoped>









</style>
