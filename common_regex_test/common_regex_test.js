/**
 * Created by xiewu on 2018/9/20.
 * 获取字符串长度
 */
//@param str是要用于验证的字符串
//@param type是用于判断当前要验证的类型
function commonRegexTest(str,type){
    var result = false;
    switch(type){
        case 'username-general'://判断是否为有效用户名,数字字母下划线
            result = /^[a-zA-Z0-9_]{4,15}$/.test(str);
            break;
        case 'username-strict'://判断是否为严格有效用户名，必须由数字和字母组成
            result = /^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$/.test(str);
            break;
        case 'number'://判断是否为数字
            result = /^\d+$/.test(str);
            break;
        case 'char'://判断是否全为字母
            result = /^[a-zA-Z]+$/.test(str);
            break;
        case 'tel'://判断是否为有效移动电话
            result = /^1[3,4,5,6,7,8,9]\d{9}$/.test(str);
            break;
        case 'phone'://判断是否为电话号码 匹配形式如:4405222 44052222 0511-4405222 021-87888822 021-44055520-555 (0511)4405222 
            result = /^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}(-\d{3})*$/.test(str);
            break;
        case 'ch'://判断是否为中文
            result = /^[\u4e00-\u9fa5]+$/.test(str);
            break;
        case 'email'://判断是否为邮箱
            result = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(str);
            break;
        case 'post'://判断是否为邮政编码
            result = /^[1-9]\d{5}$/.test(str);
            break;
        case 'card'://判断是否是身份证号
            result = /^\d{15}$|^(\d{17}[\dX]{1})$/i.test(str);
            break;
        default ://默认判断是否为空
            result = /^\s*$/i.test(str);
            break;
    }
    return result;
}
module.exports=commonRegexTest;