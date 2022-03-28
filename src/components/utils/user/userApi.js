import { post } from "@/Api/index";
import { query, queryOnce, deleteDevice } from "@/token/index";
import { url } from "@/Api/http.js";

// 获取数据
let gitData = async () => {
    let data = await post(`${url}/api/members/get_member_list`, query())
    // 遍历数组
    // let leng = data.data.data.list.leng
    for (let item of data.data.data.list) {
        //    如果为1就正常,2就锁定,并且添加class属性
        if (item.is_status == 1) {
            item.is_status = "正常"
            item.class = "normal "
        } else {
            item.is_status = "锁定"
            item.class = "offNormal "
        }
        // 判断是经销商还是管理员
        let id = item.role_id * 1
        switch (id) {
            case 1:
                item.role_id = "超级管理员"
                break;
            case 5:
                item.role_id = "经销商"
                break;
            case 7:
                item.role_id = "运营商"
                break
            case 4:
                item.role_id = "大客户"
                break
            default:
        }
    }
    console.log(data.data.data.list)
    return data.data.data.list
}

// 搜索
let searchUres = async (key, value) => {
    let data = await post(`${url}/api/members/select_member`, queryOnce(key, value))
    for (let item of data.data.data) {
        //    如果为1就正常,2就锁定,并且添加class属性
        if (item.is_status == 1) {
            item.is_status = "正常"
            item.class = "normal "
        } else {
            item.is_status = "锁定"
            item.class = "offNormal "
        }
        // 判断是经销商还是管理员
        let id = item.role_id * 1
        switch (id) {
            case 1:
                item.role_id = "超级管理员"
                break;
            case 5:
                item.role_id = "经销商"
                break;
            case 7:
                item.role_id = "运营商"
                break
            case 4:
                item.role_id = "大客户"
                break
            default:
        }
    }
    return data.data.data
}

// 删除用户

let del = async (value) => {
    // 处理选中的值
    // 遍历数组
    let msg = value.map(Item => {
        return Item.user_id
    });
    console.log(msg)
    let data = await post(`${url}/api/members/del_users`, deleteDevice("user_id", msg.toString()))
    console.info(data)
}


export {
    gitData,
    searchUres,
    del
}