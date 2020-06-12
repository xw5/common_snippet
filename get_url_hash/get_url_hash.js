/**
 * Created by xiewu on 2016/9/20.
 * 获取hash值
 * @param name 是要获取的hash值
 * @param callBack 是获取后想要做的处理，如果不做处理可以不传即可,默认第一个参数为当前的hash值
 */
function getUrlHash(name,callBack){
    var urlHash=location.hash,
        hashArr=urlHash.substring(1).split('#'),
        resultVal='',
        testReg=new RegExp('^'+name+'=');
    for(var i=0,len=hashArr.length;i<len;i++){
        if(testReg.test(hashArr[i])){
            resultVal=decodeURI(hashArr[i].split('=')[1]);
        }
    }
    callBack && callBack(resultVal);
    return resultVal;
}

module.exports=getUrlHash;