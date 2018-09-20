/**
 * Created by xiewu on 2016/10/19.
 * 清除input内容效果
 */
function inputClear(){
    var delBtn=$('[del-link]');
    delBtn.each(function(){
        $(this).on('click',function(){
            var input =$('[del-input='+$(this).attr('del-link')+']');
            input.val('').focus();
        })
    })
}
module.exports=inputClear;