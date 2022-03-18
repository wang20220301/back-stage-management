
import {
    cookieValue
} from "../utils/index"

// 查询所有设备，或所有用户
let query = (page = 1, page_num = 10) => {
    var param = new FormData();
    let tok = token()
    param.append("token", tok);
    param.append("page", page);
    param.append("page_num", page_num);
    return param
}

let queryHome = () => {
    var param = new FormData()
    let tok = token()
    param.append("token", tok);
    return param
}

// 获取指定设备详情数据
let details = () => {
    let id = cookieValue("id")
    let tok = token()
    var param = new FormData()
    param.append("token", tok);
    param.append("group_id", id);
    return param
}

//  修改设备状态
let control = (type, key, value) => {
    let id = cookieValue("id")
    let tok = token()
    var param = new FormData()
    param.append("token", tok);
    param.append("group_id", id);
    param.append("type", type);
    if (key != undefined) {
        param.append(key, value);
    }
    return param
}

//  修改设备名字和地址

let alter = (name, shop_id, address) => {
    let id = cookieValue("id")
    let tok = token()
    var param = new FormData()
    param.append("token", tok);
    param.append("group_id", id);
    param.append("name", name);
    param.append("shop_id", shop_id);
    param.append("address", address);
    return param
}

// 查询单个设备,或用户或某日新增会员
let queryOnce = (key, value) => {
    let tok = token()
    var param = new FormData()
    param.append("token", tok);
    param.append(key, value)
    return param
}

let deleteDevice = (key, value) => {
    let tok = token()
    var param = new FormData()
    param.append("token", tok);
    param.append(key, value)
    return param
}

function token() {
    return cookieValue("token")
}

export {
    token,
    query,
    details,
    control,
    alter,
    queryOnce,
    deleteDevice,
    queryHome,
}