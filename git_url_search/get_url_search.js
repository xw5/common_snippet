/**
 * Created by xiewu on 2016/9/20.
 * 获取search值
 * @param name 是要获取的serach值
 * @param callBack 是获取后想要做的处理，如果不做处理可以不传即可,默认第一个参数为当前的search值
 */
function getUrlSearch(name,callBack){
    var urlSearch=location.search,
        searchArr=urlSearch.substring(1).split('&'),
        resultVal='',
        testReg=new RegExp('^'+name+'=');
    for(var i=0,len=searchArr.length;i<len;i++){
        if(testReg.test(searchArr[i])/*searchArr[i].indexOf(name+'=')!=-1*/){
            resultVal=decodeURI(searchArr[i].split('=')[1]);
        }
    }
    callBack && callBack(resultVal);
    return resultVal;
}

/**
 * 把ur的query字段解析成对象返回
 * @param {string} url 要解析的url
 */
function urlQueryParse(url){
  var url = url ? url : location.href;
  var arr = url.split('?');
  var params = arr[1] ? arr[1].split('&') : [];
  var obj = {};
  for(var i=0;i<params.length;i++){
    var param = params[i].split('=');
    obj[param[0]] = param[1]; 
  }
  return obj;
}

module.exports={
  getUrlSearch: getUrlSearch,
  urlQueryParse: urlQueryParse
};