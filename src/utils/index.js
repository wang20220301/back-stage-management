// import { md } from "@/Md5";


// base64加密并储存到localStorage
function baseLocalStorage(name, value) {
    // let key = base64.fromByteArray(value);
    let key = window.btoa(value)
    localStorage.setItem(name, key);
}

//  获取localstorage的值并解密
function localStorageValue(key) {
    let base = localStorage.getItem(key);
    if (base == null) {
        return ""
    } else {
        return window.atob(base)
    }

}

// md5加密
function Md5(key) {
    return window.btoa(key)
}

// 设置cookie
function baseCookie(key) {

    let base = Md5(key)
    document.cookie = "username=" + base;
}

// 获取解密过后的cookie值
function cookieValue() {
    let base = getCookie("username")
    if (base == null) {
        return ""
    } else {
        return window.atob(base)
    }
}

// 获取指定cookie值
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
export {
    baseLocalStorage,
    localStorageValue,
    baseCookie,
    getCookie,
    cookieValue,
}