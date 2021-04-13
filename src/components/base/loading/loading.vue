<template>
  <div class="loading">
    <div class="loading-content">
      <img src="./loading.gif" alt="" width="24" height="24" />
      <p class="desc">{{ title }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: '',
  components: {},
  setup(props) {
    const title = ref('')
    const setTitle = (newTitle: string) => {
      title.value = newTitle
    }
    return {
      title,
      setTitle,
    }
  },
})
</script>

<style lang="scss" scoped>
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .loading-content {
    text-align: center;
    .desc {
      line-height: 20px;
      font-size: $font-size-small;
      color: $color-text-l;
    }
  }
}
</style>
