// import router from "@/router"
// import router from "../../router/index";

// 根据登录方式跳转到对应的url路线,显示对应的组件,实现权限控制
function Routers(router, key) {
    key = Number(key)
    switch (key) {
        case 1: {
            router.push("/superAdmin");
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

//  根据登录方式返回对应的请求路径
function RequestUrl(key) {
    key = Number(key)
    switch (key) {
        case 1: {
            return "https://www.bi-et.com/api/login/index"

        }
        case 2: {
            return "https://www.bi-et.com/api/login/index"

        }
        case 3: {
            return "https://www.bi-et.com/api/login/index"
        }
        case 4: {
            return "https://www.bi-et.com/api/login/index"
        }
    }
}
export {
    Routers,
    RequestUrl,
}