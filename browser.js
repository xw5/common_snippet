/**
 * Created by xiewu on 2016/10/22
 */
var browser={
    versions:function(){
        var u = navigator.userAgent, app = navigator.appVersion;
        return {//移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
            weixin: u.indexOf('MicroMessenger') > -1, //是否微信
            qqWeb: u.indexOf('MQQBrowser') > -1, //是否微信
            qq: new RegExp('\\sQQ\/','i').test(u) //是否有 QQ字段
        };
    }(),
    language:(navigator.browserLanguage || navigator.language).toLowerCase()
}
userData.wxWap=browser.versions.weixin;
userData.qqWap=browser.versions.qqWeb && browser.versions.qq;
//如果是移动端则跳转到移动端活动页面
if(browser.versions.mobile || browser.versions.android || (browser.versions.ios && (browser.versions.iPhone || browser.versions.iPad))){
    //window.location = "http://h5-open.flyme.cn/wap/index.html";
    console.log('这是移动端做该做的事');
}else{
    //window.location = "http://h5-open.flyme.cn/web/index.html";
    console.log('这是做PC端该做的事');
}