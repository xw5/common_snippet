// 页面刷新或者关闭当前页面时弹窗挽留提示，各浏览器下弹窗样式各有差异
window.addEventListener("beforeunload", function(e) {
  var confirmationMessage = "要记得保存！你确定要离开我吗？";
  (e || window.event).returnValue = confirmationMessage; // 兼容 Gecko + IE
  return confirmationMessage; // 兼容 Gecko + Webkit, Safari, Chrome
});