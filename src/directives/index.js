// 自定义指令

/**
 * 图片有路径却不能正常显示时
 */
export const imgerr = {
  inserted(dom, options) {
    dom.onerror = function() {
      dom.src = options.value
    }
  }
}
