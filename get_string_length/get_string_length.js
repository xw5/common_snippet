/**
 * Created by xiewu on 2018/9/20.
 * 获取字符串长度
 */
//@param str是要计算长度的字符串
//@param mode是决定是否要开启中文与全角字符当二个长度使用,传true则是中文与全角算二个长充，不传或者传false则算一个
function getStringLength(str,mode){
    if(!mode){
        return str.length;
    }
    return str.replace(/[^\x00-\xff]/g, '**').length
}
module.exports=getStringLength;