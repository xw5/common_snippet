/**
 * Created by xiewu on 2018/9/20.
 * 获取字符串长度
 */
/**在指定的元素上绑定属性data-scroll或者data-scroll-once就会自动进入滚动监听的元素，
*  data-scroll为永久监听，data-scroll-once为一次监听。
*  例如:data-scroll='{"classname":"acitve","fn":"fn0","leavefn":"fn2"}',当前元素进入可视区时
*  会自动添加对应的classname,并执行fn0函数如播放视频，按需加载图片，当离开可视范围时执行fn2函数，data-scroll-once没有离开逻辑处理
*  fn0 fn2是定义在全局的函数
*/
(function($){
    var nowBound = null;//位置属性集合
    var nowScrollObj = null;//当前处于可视区内的滚动对象，永久监听的
    var nowScrollAttr = null;//获取data-scroll值
    var nowScrollOnceObj = null;//当前处于可视区内的滚动对象，一次监听的
    var nowScrollOnceAttr = null;//获取data-scroll-once值
    var winH = $(window).height();//可视区高
    var timerScroll = null;//用于页面滚动节流
    var timerResize = null;//用于页面缩放节流

    //设置只处理一次的逻辑
    function setOnceFn(){
        var scrollListOnce = $('[data-scroll-once]');
        //遍历所有元素在可视范围内的元素执行相应的操作
        for (var i = 0, lenScrollAni = scrollListOnce.length; i < lenScrollAni; i++) {
            nowScrollOnceObj = scrollListOnce.eq(i);
            nowScrollOnceAttr = JSON.parse(nowScrollOnceObj.attr('data-scroll-once'));
            nowBound = nowScrollOnceObj[0].getBoundingClientRect();
            if (nowBound.top < winH && nowBound.top > -winH) {
                nowScrollOnceAttr.classname && nowScrollOnceObj.addClass(nowScrollOnceAttr.classname);
                nowScrollOnceAttr.fn && window[nowScrollOnceAttr.fn]();
                nowScrollOnceObj.removeAttr('data-scroll-once');
            }
        }
    }

    //设置需要处理多次的操作
    function setManyFn(){
        var scrollList = $('[data-scroll]');
        //遍历所有元素在可视范围内的元素执行相应的操作
        for (var j = 0, lenScroll = scrollList.length; j < lenScroll; j++) {
            nowScrollObj = scrollList.eq(j);
            nowScrollAttr = JSON.parse(nowScrollObj.attr('data-scroll'));
            nowBound = nowScrollObj[0].getBoundingClientRect();
            if (nowBound.top < winH && nowBound.top > -nowScrollObj.height()) {
                if(nowScrollObj.attr('in')) continue;
                nowScrollObj.attr('in',1);
                nowScrollObj.removeAttr('out');
                nowScrollAttr.classname && nowScrollObj.addClass(nowScrollAttr.classname);
                nowScrollAttr.fn && window[nowScrollAttr.fn]();
            }else{
                if(nowScrollObj.attr('out')) continue;
                nowScrollObj.attr('out',1);
                nowScrollObj.removeAttr('in');
                nowScrollAttr.classname && nowScrollObj.removeClass(nowScrollAttr.classname);
                nowScrollAttr.leavefn && window[nowScrollAttr.leavefn]();
            }
        }
    }

    //当滚动条到达要求点后应该执行的操作
    function scrollFn() {
        setOnceFn();
        setManyFn();
    };
    //初始进入的执行一次
    scrollFn();

    //页面滚动的时候执行
    $(window).on('scroll',function(){
        clearTimeout(timerScroll);
        timerScroll = setTimeout(function(){
            scrollFn();
        },200);
    });

    //页面缩放的时候执行
    $(window).on('resize',function(){
        clearTimeout(timerResize);
        timerResize = setTimeout(function(){
            winH = $(window).height();
        },200);
    });
})(jQuery)