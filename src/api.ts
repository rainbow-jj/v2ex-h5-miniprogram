// export const API_ROOT = 判断什么环境下用  /api ''
import Taro from '@tarojs/taro';

export const API = {
  weappURL: 'https://www.v2ex.com/',
  getAllList(): string {
    if (Taro.getEnv() == 'WEAPP') {
      return `${this.weappURL}api/topics/latest.json`
    } else {
      return '/api/topics/latest.json'
    }
  },

  getUserNode(): string {
    if (Taro.getEnv() == 'WEAPP') {
      return `${this.weappURL}api/members/show.json`
    } else {
      return '/api/members/show.json'
    }
  },

  getSearchNode(): string {
    if (Taro.getEnv() == 'WEAPP') {
      return `${this.weappURL}api/nodes/show.json`
    } else {
      return '/api/nodes/show.json'
    }
  }

}
