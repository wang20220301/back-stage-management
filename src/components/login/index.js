// <<<<<<< HEAD
import router from "../../router/index";

import { url } from "@/Api/http.js"


import { baseLocalStorage } from "../../utils/index";

// 根据登录方式跳转到对应的url路线,显示对应的组件,实现权限控制
function routers(key) {
    key = Number(key)
    switch (key) {
        case 1: {
            router.push("/superAdmin/home");
            break
        }
        case 2: {
            router.push("/ompAdmin");
            break
        }
        case 3: {
            router.push("/schoolAdmin");
            break
        }
        case 4: {
            router.push("/teacherAdmin");
            break
        }
    }
}

//  根据登录选项返回对应的请求路径url
function RequestUrl(key) {
    key = Number(key)
    switch (key) {
        case 1: {
            return `${url}/api/login/index`

        }
        case 2: {
            return `${url}/api/login/index`

        }
        case 3: {
            return `${url}/api/login/index`
        }
        case 4: {
            return `${url}/api/login/index`
        }
    }
}

// 请求发送参数fromdata
function getLocalStorage(username, password, value) {
    baseLocalStorage("username", username);
    baseLocalStorage("password", password);
    baseLocalStorage("loginType", value);
}
export {
    routers,
    getLocalStorage,
    RequestUrl,
}