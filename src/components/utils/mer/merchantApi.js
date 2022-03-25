import { post } from "@/Api/index";
import { query, queryOnce, deleteDevice, queryHome, addMer, alertMer2 } from "@/token/index";
import { url } from "@/Api/http.js";
import { backLoginPage } from "@/utils/index.js"

// 获取数据
let gitData = async (val,page_num) => {
    let data = await post(`${url}/api/members/get_member_list`, query(val,page_num))
    // 遍历数组
    if (data.data.err_code == -2) {
        alert("登录已过期,请重新登录")
        backLoginPage()

    } else {
        // let leng = data.data.data.list.leng
        for (let item of data.data.data.list) {
            //    如果为1就正常,2就锁定,并且添加class属性
            if (item.is_status == 1) {
                item.type = "正常"
                item.class = "normal "
            } else {
                item.is_status = "锁定"
                item.class = "offNormal "
            }

            let id = item.role_id * 1
            switch (id) {
                case 1:
                    item.role_name = "超级管理员"
                    break;
                case 5:
                    item.role_name = "经销商"
                    break;
                case 7:
                    item.role_name = "运营商"
                    break
                case 8:
                    item.role_name = "大客户"
                    break
                default:
            }
        }
        return data.data.data
    }

}

// 搜索
let searchUres = async (key, value) => {
    let data = await post(`${url}/api/members/select_member`, queryOnce(key, value))
    if (data.data.err_code == -2) {
        backLoginPage()
        alert("登录已过期,请重新登录")
    } else {
        for (let item of data.data.data) {
            //    如果为1就正常,2就锁定,并且添加class属性
            if (item.is_status == 1) {
                item.type = "正常"
                item.class = "normal "
            } else {
                item.type = "锁定"
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
                case 8:
                    item.role_id = "大客户"
                    break
                default:
            }
        }
        return data.data.data
    }

}
// 删除商户

let del = async (value) => {
    // 处理选中的值
    // 遍历数组
    let msg = value.map(Item => {
        return Item.user_id
    });
    let data = await post(`${url}/api/members/del_users`, deleteDevice("user_id", msg.toString()))
    if (data.data.err_code == 2) {
        backLoginPage()
    } {
        console.log(data)
    }
}

// 获取商户类型
let commercialType = async () => {
    let data = await post(`${url}/api/members/member_group`, queryHome())
    if (data.data.err_code == -2) {
        alert("登录已过期,请重新登录")
        backLoginPage()
    } else {
        console.log(data.data.data, "商户类型")
        return data.data.data
    }
}

// 添加商户
let addMerchants = async (obj, string) => {

    let data = await post(`${url}/api/members/add_account`, addMer(obj.userName, obj.pass, obj.email, obj.phone, string))
    if (data.data.err_code == -2) {
        alert("登录已过期,请重新登录")
        backLoginPage()
    } else if (data.data.err_code == -1) {
        return 1
    } else {
        console.log(data.data.err_code, "jin")
        return 2
    }
}
// 修改商户数据
let alterMsg = async (obj, string) => {

    let data = await post(`${url}/api/members/update_users`, alertMer2(obj, string))
    console.log(data, obj)
}

export {
    gitData,
    searchUres,
    del,
    commercialType,
    addMerchants,
    alterMsg,
}