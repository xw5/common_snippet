/**
 * 防抖函数
 * @param {function} fn 执行方法
 * @param {number} wait 防抖时间，也就是多少间隔内不会执行
 */
function debounce(fn, wait) {
  var timeout = null;    
  return function() {        
    if(timeout !== null) {
      clearTimeout(timeout);
    }      
    timeout = setTimeout(fn, wait);    
  };
}
module.exports = {
  set: debounce
};