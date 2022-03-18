
import { post } from "@/Api/index";
import { query, queryOnce, deleteDevice } from "@/token/index";
import { url } from "@/Api/http.js";
import { backLoginPage } from "@/utils/index.js"

// 获取数据
let gitData = async () => {
    let data = await post(`${url}/api/monitor/sark_list`, query())
    if (data.data.err_code == -2) {
        backLoginPage()
        alert("登录已过期,请重新登录")
    } else {
        return data.data.data.list
    }

}

// 搜索设备
let searchUres = async (key, value) => {
    let data = await post(`${url}/api/monitor/select_monitor`, queryOnce(key, value))
    if (data.data.err_code == -2) {
        backLoginPage()
        alert("登录已过期,请重新登录")
    } else {
        return data.data.data
    }
}

// 删除设备

let del = async (value) => {
    // 处理选中的值
    // 遍历数组
    let msg = value.map(Item => {
        return Item.group_id
    });
    let data = await post(`${url}/api/monitor/del_monitors`, deleteDevice("group_id", msg.toString()))
    if (data.data.err_code == -2) {
        backLoginPage()
        alert("登录已过期,请重新登录")
    }
}


export {
    gitData,
    searchUres,
    del
}
