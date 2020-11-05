export default (Vue) => {
  Vue.directive('outside-click', {
    bind: function (el, binding, vnode) {
      function clickHandler(e) {
        if(el.contains(e.target)) {
          return false;
        }
        if (binding.expression) {
          binding.value(e);
        }
      }
      el.vueOutsideClick = clickHandler;
      document.addEventListener('click', clickHandler);
    },
    unbind: function (el, binding, vnode) {
      document.removeEventListener('click', el.vueOutsideClick);
      delete el.vueOutsideClick;
    }
  })

}
