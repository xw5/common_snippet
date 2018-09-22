//设置cookie
/* 注：由于同源策略，脚本只能访问父域名或本域名的cookie（浏览器只能发送父域名或本域名的cookie)
*  cookie区分域，而不区分端口，也就是说，同一个ip下的多个端口下的cookie是共享的 
*  @param name是要设置的cookie名
*  @param value是要设置的cookie值
*  @param options是设置的cookie相关配置:
*  {
*    expires有效期
*    domain有效域名
*    path影响路径
*    maxage有效期，与expires作用相同
*    httpOnly,是否只能http使用，true/false
*    secure只有在安全协议（如https、ssl）时，浏览器才会传输cookie
*  }
*/
function setCookie(name,value,options){
    if (!name) {
        throw new Error("cookie 必须指定 name！");
    }    
    var enc = encodeURIComponent;
    var parts = [];
    value = (value !== null && value !== undefined) ? value.toString() : "";
    options = options || {};
    parts.push(enc(name) + "=" + enc(value));

    // domain中必须包含两个点号     
    if (options.domain) {
        parts.push("domain=" + options.domain);
    }
    if (options.path) {
        parts.push("path=" + options.path);  
    }
    // 如果不设置expires和max-age浏览器会在页面关闭时清空cookie              
    if (options.expires) {
        parts.push("expires=" + options.expires.toGMTString());             
    }
    if (options.maxAge && typeof options.maxAge === "number") {
        parts.push("max-age=" + options.maxAge);         
    }    
    if (options.httpOnly) {
        parts.push("HTTPOnly");
    }      
    if (options.secure) {
        parts.push("secure");        
    }
    document.cookie = parts.join("; ");
}

//获取cookie
//param name要获取的cookie名
function getCookie(name){
    var cookiestr=decodeURIComponent(document.cookie),//获取cookie,格式应该为"name=value; name0=value0"
        cookiearr0=cookiestr.split("; "),//以"; "来分构字符串成数组 ["name=value","name0=value0"]
        cookiearr1=[],
        result = '';
    for(var i=0;i<cookiearr0.length;i++){
        cookiearr1=cookiearr0[i].split("=");//以"="分构字符串为数组,["name","value"]
        if(cookiearr1[0] == name){//如果找到相同名称的cookie,返回它的值
            result = cookiearr1[1];
            break;
        }
    }
    return result;
}

//删除cookie
//param name要删除的cookie名
function removeCookie(name){
    setCookie(name,"",{expires:new Date(0)});//把过期时间设为昨天，即删除了当前cookie
}
module.expires = {
    set:setCookie,
    get:getCookie,
    remove:removeCookie
}