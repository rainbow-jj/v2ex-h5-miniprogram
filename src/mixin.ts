import {format} from 'timeago.js/lib'

export const common = {
  methods: {
    // 时间解析为 xxx年-xx月-xx日
    parseDate(d: number): string {
      d = this.toJSTimeStamp(d)
      let date
      try {
        date = new Date(d)
      } catch (e) {
        date = new Date()
      }
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}-${date.getHours()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    },
    // 转为 xxx时间前
    timeAgo(d: number): string {
      d = this.toJSTimeStamp(d)
      return format(d, "zh_CN")
    },
    // 时间戳转换
    toJSTimeStamp(d: number): number {
      const len = String(d).length
      if (len < 13) {
        d = d * (10 ** (13 - len))
      }
      if (len > 13) {
        d = d / (10 ** (13 - len))
      }
      return d
    }
  }
}
