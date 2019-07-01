// 数字转千分位
function handleThousands(number) {
  if (number < 999) {
    return number
  } else {
    var residue = number % 1000;
    var exactDivision  = parseInt(number / 1000); 
    return (exactDivision > 999 ? handleThousands(exactDivision) : exactDivision) +','+ fillUp(residue);
  }
};
// 位数补全
function fillUp(number) {
  var str = number + '';
  var len = str.length;
  var diffLen = 3-len;
  for (var i = 0; i < diffLen; i++) {
    str = '0'+str;
  }
  return str;
}

module.exports=handleThousands;