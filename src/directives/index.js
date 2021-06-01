// 自定义指令
export const imgerr = {
  inserted(dom, options) {
    dom.onerror = function() {
      dom.src = options.value
    }
  }
}
