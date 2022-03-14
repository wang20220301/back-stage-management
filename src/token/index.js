
import {
    cookieValue
} from "../utils/index"

// 查询设备数据
function query(page = 10) {
    var param = new FormData();
    let tok = token()
    param.append("token", tok);
    param.append("page", page);
    param.append("page_num", 20);
    return param
}

// 获取指定设备详情
function details() {
    let id = cookieValue("id")
    let tok = token()
    var param = new FormData()
    param.append("token", tok);
    param.append("group_id", id);
    // param.append("page_num", 20);
    return param
}

function token() {
    return cookieValue("token")
}

export {
    token,
    query,
    details,
}