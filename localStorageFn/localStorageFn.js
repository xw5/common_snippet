//作为本地存储的公用方法
//@param key 本地存储的key值
//@param value 本地存储的值
//@param time 该key本地存储的有效期,单位为小时,不传或者传0就
function setLocalStorage (key,value,time){
  localStorage.setItem(key,JSON.stringify({
    "dur":time ? new Date().getTime()+time*60*3600 : '-1',
    "value":value
  }))
}
//作为本地存储的公用方法
//@param key 本地存储的key值
//@param value 本地存储的源数据
//@param keys 本地存储要提取的用于存储的值
//@param time 该key本地存储的有效期,单位为小时
function setLocalStorageKeys (key,value,keys,time){
  var storageValue = [];
  var temp = {};
  for(var i=0,lenx=value.length;i<lenx;i++){
    temp = {};
    for(var j=0,lenj=keys.length;j<lenj;j++){
      temp[keys[j]]=value[i][keys[j]];
    }
    storageValue.push(temp);
  }
  localStorage.setItem(key,JSON.stringify({
    "dur":new Date().getTime()+time*60*3600,
    "value":storageValue
  }))
}
//作为本地存储的提取方法，如果该值没有，或者已经过了有效期就直接返回null,否则返回需要的值
//@param key 想拿取的本地存储的key值
function getLocalStorage(key){
  var nowItem = JSON.parse(localStorage.getItem(key));
  if(!nowItem) return null;
  if(nowItem.dur < new Date().getTime() && nowItem.dur != '-1'){
    return null;
  }else{
    return nowItem.value;
  }
}

module.exports = {
  setLs:setLocalStorage,
  getLs:getLocalStorage,
  setLsKeys:setLocalStorageKeys
};