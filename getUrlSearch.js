/**
 * Created by xiewu on 2016/9/20.
 * 获取search值
 */
//@param name是要获取的serach值
//@param callBack是获取后想要做的处理，如果不做处理可以不传即可,默认第一个参数为当前的search值
function getUrlSearch(name,callBack){
    var urlSearch=location.search,
        searchArr=urlSearch.substring(1).split('&'),
        resultVal='',
        testReg=new RegExp('^'+name+'=');
    for(var i=0,len=searchArr.length;i<len;i++){
        if(testReg.test(searchArr[i])/*searchArr[i].indexOf(name+'=')!=-1*/){
            resultVal=searchArr[i].split('=')[1];
        }
    }
    callBack && callBack(resultVal);
    return resultVal;
}
module.exports=getUrlSearch;