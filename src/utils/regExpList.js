/**
 * Set of regular expressions to be used
 * 使用到的正则表达式集合
 */

module.exports = {
  // 文件名,长度不超过255且不包括特殊字符\/<>|?:*
  filename: /^((?!\\|\/|:|\*|\?|<|>|\|).){1,255}$/,
  // 只包含字母或数字
  letterOrNum: /^[A-Za-z0-9]+$/,
  // 邮箱
  email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  // 必须包含字母数字和下划线
  letterNumULine: /(?=.*[A-Za-z])(?=.*[\d])(?=.*_)/,
  // 是否为http(s)格式链接
  httpUrl: /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&@=]*)?$/,
}
