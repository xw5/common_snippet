/**
 * 传入秒数输入余多少天多少小时多少秒
 * @param {Number} countdown 总秒数
 * @param {Array} separate 分隔符,默认为["天","小时","分","秒"]
 * @param {Boolean} isAll 是否要显示全部,不传则会忽略不0的项
 */
function formatCountDownStr(countdown, separate, isAll) {
  var separate = separate ? separate : ["天", "小时", "分", "秒"];
  var day = Math.floor(countdown / 86400);
  countdown -= day * 86400;
  var hour = Math.floor(countdown / 3600);
  countdown -= hour * 3600;
  var minite = Math.floor(countdown / 60);
  var seconds = countdown - minite * 60;
  if (isAll) {
    return ("00" + day).slice(-2) + separate[0] + ("00" + hour).slice(-2) + separate[1] + ("00" + minite).slice(-2) + separate[2] + ("00" + seconds).slice(-2) + separate[3];
  } else {
    if (day > 0) {
      return resultStr = ("00" + day).slice(-2) + separate[0] + ("00" + hour).slice(-2) + separate[1] + ("00" + minite).slice(-2) + separate[2] + ("00" + seconds).slice(-2) + separate[3];
    }

    if (hour > 0) {
      return resultStr = ("00" + hour).slice(-2) + separate[1] + ("00" + minite).slice(-2) + separate[2] + ("00" + seconds).slice(-2) + separate[3];
    }

    if (minite > 0) {
      return resultStr = ("00" + minite).slice(-2) + separate[2] + ("00" + seconds).slice(-2) + separate[3];
    }
    return ("00" + seconds).slice(-2) + separate[3];
  }
  return resultStr;
}

/**
 * 获得今日日期时间字符串，格式:2019-01-08 10:20:05
 * @param {Number} times 毫秒数
 * @param {Array} separate 分隔符 默认为["-",":"]
 */
function formatToday(times, separate) {
  var now = null,
  separate = separate ? separate : ["-", ":"];
  if (times) {
    now = new Date(times)
  } else {
    now = new Date()
  }
  return now.getFullYear().toString().toString() + separate[0] +
    ("00" + (now.getMonth() + 1).toString()).slice(-2) + separate[0] +
    ("00" + now.getDate().toString()).slice(-2) + " " +
    ("00" + now.getHours().toString()).slice(-2) + separate[1] +
    ("00" + now.getMinutes().toString()).slice(-2) + separate[1] +
    ("00" + now.getSeconds().toString()).slice(-2);
}

/**
* 获得多少小时以前
* @param {Number} passTime 事件发生时的毫秒数
*/
function getPastTimeStr(passTime) {
  var remain = (Date.now() - passTime) / 1000;
  var y = Math.floor(remain / 31104000);
  remain = remain % 31104000;
  var M = Math.floor(remain / 2592000);
  remain = remain % 2592000;
  var d = Math.floor(remain / 86400);
  remain = remain % 86400;
  var h = Math.floor(remain / 3600);
  remain = remain % 3600;
  var m = Math.floor(remain / 60);
  if (y > 1) {
    return parseInt(m) + "年前";
  }
  if (M > 1) {
    return parseInt(M) + "月前";
  }
  if (d > 1) {
    return parseInt(d) + "天前";
  }
  if (h > 1) {
    return parseInt(h) + "小时前";
  }
  if (m > 1) {
    return parseInt(m) + "分钟前";
  }
  return "刚刚"
}

/**
 * 将剩余秒数切割，返回[x,x,x,x]，分别表述天、小时、分、秒
 * @param {Number} second 剩余秒数
 */
function sliceTime(second) {
  if (!second) {
    return [0, 0, 0, 0]
  }

  var remain = second;
  var d = Math.floor(remain / 86400);
  remain = remain % 86400;
  var h = Math.floor(remain / 3600);
  remain = remain % 3600;
  var m = Math.floor(remain / 60);
  remain = remain % 60;
  var s = remain;

  return [("00" + d).slice(-2), ("00" + h).slice(-2), ("00" + m).slice(-2), ("00" + s).slice(-2)];
}


module.exports = {
  formatCountDownStr: formatCountDownStr,
  formatToday: formatToday,
  getPastTimeStr: getPastTimeStr
};