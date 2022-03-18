import { post } from "@/Api/index";
import { queryHome, queryOnce } from "@/token/index";
import { url } from "@/Api/http.js";
import store from "@/vuex/index.js"
import { backLoginPage } from "@/utils/index.js"

// 获取所有首页所有数据
let gitData = async () => {
    let data = await post(`${url}/api/index/index`, queryHome())

    if (data.data.err_code == -2) {
        backLoginPage()
        alert("登录已过期,请重新登录")
    } else {
        store.commit(
            "home/AddData",
            data.data.data
        )
    }

}
// 获取通过计时器异步获取vuex里的数据
let VuexMsg = (fun) => {
    let time = setInterval(() => {
        let data = store.state.home.data
        if (data != null) {
            fun(data)
            clearInterval(time);
        }
    }, 100)
}

//  获取新增会员
let getAddVip = async (key, value) => {
    let data = await post(`${url}/api/index/members_num_switch`, queryOnce(key, value))
    if (data.data.err_code == -2) {
        backLoginPage()
        alert("登录已过期,请重新登录")
    } else {
        let obj = data.data.data
        // 格式化数据
        let addVip = {}
        addVip.xData = []
        addVip.yDate = []
        for (let item of obj) {
            addVip.xData.push(item.name)
            addVip.yDate.push(item.count)
        }
        return addVip
    }

}

export {
    gitData,
    VuexMsg,
    getAddVip,
}