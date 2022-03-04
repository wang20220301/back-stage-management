import router from "@/router"
import {
    baseLocalStorage,
  } from "../../utils/index";
function routers(key) {
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

function getLocalStorage(username,password,value) {
    baseLocalStorage("username", username);
    baseLocalStorage("password", password);
    baseLocalStorage("loginType", value);
}
export {
    routers,
    getLocalStorage,
}