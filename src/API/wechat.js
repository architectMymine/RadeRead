import { getOpenId } from './index'

export function getSetting(auth, OnSuccess, Onfail) {
  mpvue.getSetting({
    success(res) {
      if (res.authSetting[`scope.${auth}`]) {
        OnSuccess(res)
      } else {
        Onfail(res)
      }
    },
    fail(res) {
      console.log(res) // 直接抛出异常
    }
  })
}

export function getUserInfo(OnSuccess, Onfail) {
  mpvue.getUserInfo({
    success(res) {
      console.log(res)
      const { userInfo } = res
      if (userInfo) {
        OnSuccess(res)
      } else {
        Onfail(res)
      }
    },
    fail(res) {
      console.log(res) // 直接抛出异常
    }
  })
}

export function setStorageSync(key, value) {
  mpvue.setStorageSync(key, value)
}

export function getStorageSync(key) {
  return mpvue.getStorageSync(key)
}

export function getUserOpenId(callback) {
  mpvue.login({
    success(res) {
      if (res.code) {
        const { code } = res
        getOpenId(code).then(response => {
          const { data: { data: { openid } } } = response
          setStorageSync('openId', openid)
          callback && callback(openid)
        }).catch(err => {
          console.log(err) // 直接抛出异常
        })
      } else {
        console.log(res) // 直接抛出异常
      }
    },
    fail(res) {
      console.log('fail...')
    }
  })
}
