/**
 * 数字保留小数位数
 * @param {Number} number 要处理数字
 * @param {Number} len 要保留的小数位数，如果为整数则返回整数
 */
function decimalHandler(number, len) {
  var result= Number(number);
  var len = len != undefined ? len : 0;
  if (String(result).indexOf(".") != -1) {
    result = Number(result).toFixed(len);
    return Number(result) > 0 ? result : 0;
  } else {
    return result;
  }
}

/**
 * 数字前置补全,如55返回00055
 * @param {Number} number 要补全的数字 
 * @param {String} cover 用于补全的字符串，默认为0
 * @param {Number} len 需要返回多长的结果，默认为5 
 */
function numberPreCompletion(number, cover=0, len = 0) {
  var resultArr = [];
  var cover = cover != undefined ? cover : 0;
  var len = len != undefined ? len : 0;
  var strArr = String(number).split('');
  var lenStr = strArr.length;
  var resetIndex = 0;
  if (lenStr >= len) {
    return number;
  }
  for (var i = 0; i < len; i++) {
    resultArr.push(cover);
  }
  for (var i = lenStr-1; i>=0; i--) {
    resultArr.splice(len-1-resetIndex,1,strArr[i])
    resetIndex += 1;
  }
  return resultArr.join('');
}

module.export = {
  decimalHandler: decimalHandler,
  numberPreCompletion: numberPreCompletion
}