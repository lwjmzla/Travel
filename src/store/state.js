let defaultCity = '上海'
try { // try catch是为了 以免低版本浏览器 或者关闭了本地存储功能报错
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) { alert(e) }

export default {
  city: defaultCity
}
