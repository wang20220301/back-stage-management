import store from "@/vuex/index"
// 工具方法
import { post } from "@/Api/index";
import { url } from "@/Api/http.js"
import { details, control, alter, queryAllDevilce, } from "@/token/index";
import { backLoginPage } from "@/utils/index.js"

let gitData = () => {
    // 进入页面发送请求获取数据
    post(`${url}/api/monitor/monitor_detail`, details()).then(
        (res) => {
            if (res.data.err_code == -2) {
                backLoginPage()
                alert("登录已过期,请重新登录")
            } else {
                // 通过vuex设置数据共享
                store.commit("popup/AddData", res.data.data);
            }

        }
    );
}


// 获取通过计时器异步获取vuex里的data数据
let msg = (fun) => {
    let time = setInterval(() => {
        let data = store.state.popup.data
        if (data != null) {
            clearInterval(time);
            fun(data)
        }
    }, 130)

}

//  设备状态数据

let list = [
    {
        key: "室内温度：",
        value: "",
    },
    {
        key: "电量：",
        value: "",
    },
    {
        key: "规格：",
        value: "",
    },
    {
        key: "充电功率：",
        value: "",
    },
    {
        key: "放电电流：",
        value: "",
    },
    {
        key: "状态：",
        value: "",
        class: ""
    },
    {
        key: "充电电流：",
        value: "",
    },
    {
        key: "放电电压：",
        value: "",
    },
    {
        key: "灯状态：",
        value: "",
        show: ""
    },
    {
        key: "pv电压:",
        value: "",
    },
    {
        key: "日发电量:",
        value: "",
    },
    {
        key: "电源状态:",
        value: "",
    },
]

// 设备状态数据
let StatusMsg = () => {
    msg((data) => {
        let msg = data.detail;
        //结构不规范
        // 这里采用笨方法一个一个设置
        list[0].value = msg.temperature + "°C"
        list[1].value = msg.battery + "%"
        if (msg.kind == 1) {
            list[2].value = "36格"
        } else {
            list[2].value = "64格"
        }
        list[3].value = msg.power + "W"
        list[4].value = msg.drain_current + "A"
        if (msg.status == 0) {
            list[5].value = "离线"
            list[5].class = 'highlight'
        } else {
            list[5].value = "在线"
            list[5].class = "highlight2"
        }

        list[6].value = msg.current + "A"
        list[7].value = msg.drain_voltage + "V"
        list[8].img = msg.lamp
        if (list[8].name == 0) {
            list[8].value = "关闭"
            list[8].class = 'highlight'
        } else {
            list[8].value = "开启"
            list[8].class = "highlight2"
        }

        list[9].value = msg.voltage + "V"
        list[10].value = msg.electric + "w/h"
        list[11].img = msg.wire
        if (list[11].name == 0) {
            list[11].value = "关闭"
            list[11].class = 'highlight'
        } else {
            list[11].value = "开启"
            list[11].class = "highlight2"
        }
    });
    return list
}

//  数据修改 开灯或电源，打开门，或关闭门
let controData = (type, key, value) => {
    let msg
    post(`${url}/api/monitor/control_monitor`, control(type, key, value)).then((res) => {
        if (res.data.err_code == -2) {
            backLoginPage()
            alert("登录已过期,请重新登录")
        }
    })
    return msg
}

// 修改设备的名字id
let alterData = (name, long, address, shop_id, kind) => {
    post(`${url}/api/monitor/monitor_modify`, alter(name, long, address, shop_id, kind)).then((res) => {
        if (res.data.err_code == -2) {
            backLoginPage()
            alert("登录已过期,请重新登录")
        }
    })
}
// 获取弹窗的格子数量,以及是否有物品,給格子添加不同的class,已区分
let getBoxSize = (fun) => {
    let obj = {}
    msg((data) => {
        let arr = data.all_position
        for (let key in arr) {
            obj[key] = {}
            obj[key].value = arr[key]
        }
        // 遍历存在货物的柜子，給每个柜子添加一个样式
        let leng = data.goods_position.length
        for (let i = 0; i < leng; i++) {
            obj[data.goods_position[i]].class = "have"
        }
        //遍历未关门的柜子，給每个柜子添加一个样式
        let len = data.monitor_door.length
        for (let i = 0; i < len; i++) {
            obj[data.goods_position[i]].class = "have"
        }
        fun(obj)
    })
}

// // 获取弹窗的设备数据
let getFacilityData = (path, type, hour, day, day_start, day_end) => {
    post(`${url}${path}`, queryAllDevilce(type, hour, day, day_start, day_end)).then((res) => {
        if (res.data.err_code == -2) {
            backLoginPage()
            alert("登录已过期,请重新登录")
        } else {
            // 通过vuex设置数据共享,数据分发
            store.commit("popup/AddDetailsMsg", res.data.data);
        }

    })
}

// 懒加载获取数据
let getLoadData = (path, type, hour, day, day_start, day_end) => {
    post(`${url}${path}`, queryAllDevilce(type, hour, day, day_start, day_end)).then((res) => {
        if (res.data.err_code == -2) {
            backLoginPage()
            alert("登录已过期,请重新登录")
        } else {
            console.log(res.data.data,"打印请求回来的数据")
            // 通过vuex设置数据共享,数据分发
            store.commit("popup/SetLoadData", res.data.data);
        }

    })
}

export {
    msg,
    StatusMsg,
    gitData,
    controData,
    alterData,
    getBoxSize,
    getFacilityData,
    getLoadData
}