/**
 * Created by xiewu on 2016/10/11.
 * ajax封装，方便ajax的调用
 */
//@@setting是一个参数对象对应的参数如下
//@param url请求的地址
//@param type请求的方式
//@param data传递的数值
//@param async是否是异步请求
//@param cache是否开启ajax缓存
//@param xhrFields,crossDomain是否允许cors请求带cookie
//@param success成功后的回调
//@param error失败后的回调
//@param dataType返回的数据类型
function startAjax(setting){
    var defaultSetting={//默认ajax是type请求,返回json数据
      'type':'get',
      'async':true,
      'dataType':'json',
      'xhrFields': {withCredentials: false},
      'crossDomain': true,
      'cache':false,
    };
    $.extend(defaultSetting,setting);//参数合并
    $.ajax({//调用JQ的ajax请求
      'url':defaultSetting['url'],
      'type':defaultSetting['type'],
      'data':defaultSetting['data'],
      'async':defaultSetting['async'],
      'xhrFields': defaultSetting['xhrFields'],
      'crossDomain': defaultSetting['crossDomain'],
      'cache':defaultSetting['cache'],
      'dataType':defaultSetting['dataType'],
      'success':function(data){
        defaultSetting['success'] && defaultSetting['success'](data);
      },
      'error':function(XmlHttpRequest,textStatus,errorThrown){
        defaultSetting['error'] && defaultSetting['error'](XmlHttpRequest,textStatus,errorThrown);
      }
    })
}
module.exports=startAjax;