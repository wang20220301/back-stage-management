// import base64 from "base64-js";

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


export {
    baseLocalStorage,
    localStorageValue,
}