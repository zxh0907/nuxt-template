export default function ($axios) {
  return {
    getUserList (params) {
      return $axios.get('/User/getList', { params })
    }
  }
}
