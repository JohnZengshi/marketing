const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 过滤西金特定时间 2018-4-18
const extractXjTime = (parm, y = '-') => {
  console.log('进来了', parm)
  if (parm) {
    var Year = parm.slice(0, 4)
    var Month = parm.slice(4, 6)
    var Sun = parm.slice(6, 8)
    // var allTime = Year + '-' + Month + '-' + Sun
    var allTime = `${Year}${y}${Month}${y}${Sun}`
    return allTime
  }
  return ''
}
// 过滤西金特定时间 00:00
const extractXjTimeSF = (parm, y = ':') => {
  if (parm) {
    var hour = parm.slice(8, 10)
    var minute = parm.slice(10, 12)
    return `${hour}${y}${minute}`
  }
  return ''
}

// 过滤西金特定时间 00:00
const extractXjTimeYR = (parm, y = ':') => {
  if (parm) {
    var Month = parm.slice(4, 6)
    var Sun = parm.slice(6, 8)
    return `${Month}${y}${Sun}`
  }
  return ''
}

// 过滤西金特定时间 年月日  new date() 时间格式
const xjformattingTimeNYR = (parm) => {
  if (parm) {
    var N = parm.getFullYear()
    var Y = parm.getMonth() + 1 // 获取当前月份的日期
    var R = parm.getDate()
    if (Y.toString().length == 1) {
      Y = `0${Y}`
    }
    if (R.toString().length == 1) {
      R = `0${R}`
    }
    return `${N}${Y}${R}`
  }
  return ''
}


// 提取非重复值
const extractValue = (name, data) => {
  let datas = {
    name: name,
    value: value
  }
  return datas
}

module.exports = {
  formatTime: formatTime,
  extractXjTimeSF: extractXjTimeSF,
  extractXjTime: extractXjTime,
  extractXjTimeYR: extractXjTimeYR,
  xjformattingTimeNYR: xjformattingTimeNYR
}
