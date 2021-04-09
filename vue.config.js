module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // 引入全局变量和Mixin
        prependData: `@import "@/assets/scss/variable.scss";@import "@/assets/scss/mixin.scss";`,
      },
    },
  },
}
