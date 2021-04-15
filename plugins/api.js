import user from '~/api/user'
// import base from '~/api/base'
// import ad from '~/api/ad'

export default ({ $axios }, inject) => {
  const getApis = mod => mod($axios)
  // Inject $api in Vue, context and store.
  inject('api', {
    user: getApis(user),
    // base: getApis(base),
    // ad: getApis(ad)
  })
}
