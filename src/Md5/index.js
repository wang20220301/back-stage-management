import md5 from "md5";
import {
    localStorageValue
} from "../utils/index"

function md() {
    //  获取当前时间戳
    let timestamp = Date.parse(new Date());
    
    // 获取当前的登录名
    let username = localStorageValue("username")
    var param = new FormData();
    let key = md5(username + "jisi123!!!@" + timestamp)
    param.append("user_id", username);
    param.append("api_key", "jisi123!!!@");
    param.append("timeline", timestamp);
    param.append("mysign", key);
    return param
}

export {
    md
}