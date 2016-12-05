/**
 * Created by xiewu on 2016/10/19.
 * 清除input内容效果
 */
function inputClear(){
    var delBtn=$('.delBtn');
    delBtn.each(function(){
        $(this).on('click',function(){
            var input =$(this).parent().find('input');
            input.val('').focus();
        })
    })

}
module.exports=inputClear;