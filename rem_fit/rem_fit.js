/**
 * Created by xiewu on 2018/9/25.
 * rem布局实现
 */
/**
 * 修改designWidth为你设计稿的宽度
*/
(function (doc, win) {
    var docEl = doc.documentElement,
        designWidth = 1080,//设计稿的宽度
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function () {
			var clientWidth = docEl.clientWidth;
			if (!clientWidth) return;
			clientWidth = clientWidth > 540 ? 540 : clientWidth;
			clientWidth = clientWidth < 320 ? 320 : clientWidth;
			//docEl.style.fontSize = clientWidth / 10+'px';                    
			docEl.style.fontSize = clientWidth / designWidth * 100+'px'; //*100倍，便于布局计算，如设计稿为840px则为8.4rem                   
		};
		if (!doc.addEventListener) return;
		win.addEventListener(resizeEvt, recalc, false);
		doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window); 