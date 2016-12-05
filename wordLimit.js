/**
 * Created by xiewu on 2016/10/12.
 * 字数限制效果
 */
;(function($,window,document,undefined){
    var wordLimitInput=$('input[data-word-limit]');
    //事件绑定
    wordLimitInput.each(function(){
        //字数限制表单获得焦点事件
        $(this).on('focus',function(){
            createWordLimitTips($(this));
        })
        //字数限制表单失去焦点事件
        $(this).on('blur',function(){
            clearWordLimitTips($(this));
        })
        //字数动态判断
        $(this).on('keyup',function(){
            changeWordLimitTips($(this));
        })
    })
    //动态插入字数显示块
    function createWordLimitTips(obj){
        var wordLimitParent=obj.parentsUntil('.form_item_con').length>0?obj.parentsUntil('.form_item_con').parent():obj.parent();
        wordLimitParent.addClass('active').append($('<span class="wordLimitTips"></span>'));
        changeWordLimitTips(obj);//执行一次字数计算
    }
    //删除字数显示块
    function clearWordLimitTips(obj){
        var wordLimitParent=obj.parentsUntil('.form_item_con').length>0?obj.parentsUntil('.form_item_con').parent():obj.parent();
        wordLimitParent.removeClass('active').find('.wordLimitTips').remove();

    }
    //动态字数判断
    function changeWordLimitTips(obj){
        var wordLimitParent=obj.parentsUntil('.form_item_con').length>0?obj.parentsUntil('.form_item_con').parent():obj.parent(),
            wordLimitTips=wordLimitParent.find('.wordLimitTips'),
            totalWord=obj.attr('data-word-limit'),
            nowVal=obj.val(),
            leaveWord=totalWord-nowVal.length;
        if(leaveWord<=0){//如果字数已经超过可输字数则直接删掉多输的字
            obj.val(nowVal.slice(0,totalWord));
            leaveWord=0;
        }
        wordLimitTips.html(leaveWord);
    }
})(jQuery,window,document,undefined)
