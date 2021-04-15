export default ({ app, store }) => {
  app.router.beforeEach((to, from, next) => {
    // 客户端route change时，刷新页面，便于重新加载底部js
    if (process.browser && from.name && to.path !== from.path) {
      window.location.href = to.path
    }
    next()
    // window.location.reload()
    // let isClient = process.client
    // if (isClient) {
    // }
  })
}
