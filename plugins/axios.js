const STATUS = {
  API_SUCCESS: 1,
  API_FAIL: 400,
  NO_LOGIN: 1000,
  HTTP_SUCCESS: 200,
  HTTP_NOT_FOUND: 404,
  HTTP_MOVEED: 302,
  HTTP_FORBID: 403,
  HTTP_NOT_ALLOW: 405
}

export default function ({ $axios, redirect }, inject) {
  $axios.onRequest((config) => {
    if (config.method === 'get') {
      config.params = {
        ...(config.params || {}),
        _t: Date.now()
      }
    }
    console.log('Making request to ' + config.url)
    return config
  })
  $axios.onError((error) => {
    if (error.response.status === STATUS.HTTP_NOT_FOUND) {
      redirect('/404')
    }
  })
  $axios.onResponse((resp) => {
    if (resp.data.code === STATUS.API_SUCCESS) {
      // console.log('onResponse ', resp)
      return resp.data.data
    }
    return resp.data
  })
}
