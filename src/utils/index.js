

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

function baseCookie(key) {
    console.log(key)
    let base = window.btoa(key)
    
    document.cookie = "username=" + base;
}

function cookieValue(){
    let base=getCookie("username")
    if (base == null) {
        return ""
    } else {
        return window.atob(base)
    }
}

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