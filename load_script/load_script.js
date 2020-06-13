const defaultJs = "这里是默认动态加载的js地址";
/**
 * 
 * @param {string} url 加载的js地址
 * @param {function} cb 加载完的回调
 * @param {boolean} isNoCache 是否要实时更新js的，如果为true会在链接后加上时间戳
 */
export default function loadConfigScript(url, cb, isNoCache = true) {
  var head = document.getElementsByTagName('head')[0],
    scriptTag = document.createElement('script'),
    scriptSrc = url ? url : defaultJs;
  scriptTag.type = 'text/javascript';
  scriptTag.charset = 'utf-8';
  scriptTag.onload = scriptTag.onreadystatechange = function() {
    if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete" ) {
      cb && cb();
      scriptTag.onload = scriptTag.onreadystatechange = null;
    }
  };
  scriptTag.src= isNoCache ? (scriptSrc+'?t='+Date.now()) : scriptSrc;
  head.appendChild(scriptTag);
}