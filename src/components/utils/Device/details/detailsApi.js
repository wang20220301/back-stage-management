import store from "@/vuex/index"
// 工具方法
import { post } from "@/Api/index";
import { url } from "@/Api/http.js"
import { details, control, alter } from "@/token/index";

let gitData = () => {
    // 进入页面发送请求获取数据
    post(`${url}/api/monitor/monitor_detail`, details()).then(
        (res) => {
            // 通过vuex设置数据共享
            store.commit("details/AddData", res.data.data);
        }
    );
}


// 获取通过计时器异步获取vuex里的数据
let msg = (fun) => {
    let time = setTimeout(() => {
        let data = store.state.details.data
        console.log(data)
        if (data != null) {
            clearInterval(time);
            fun(data)
        }
    }, 100)

}

//  设备状态数据

let list = [
    {
        key: "室内温度",
        value: "",
    },
    {
        key: "电量",
        value: "",
    },
    {
        key: "规格",
        value: "",
    },
    {
        key: "充电功率",
        value: "",
    },
    {
        key: "放电电流",
        value: "",
    },
    {
        key: "状态",
        value: "",
        class: ""
    },
    {
        key: "充电电流",
        value: "",
    },
    {
        key: "放电电压",
        value: "",
    },
    {
        key: "灯状态",
        value: "",
        show: ""
    },
    {
        key: "pv电压",
        value: "",
    },
    {
        key: "日发电量",
        value: "",
    },
    {
        key: "电源状态",
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
        list[8].show = true
        list[8].type = 1
        list[8].name = "lamp"
        list[9].value = msg.voltage + "V"
        list[10].value = msg.electric + "w/h"
        list[11].img = msg.wire
        list[11].show = true
        list[11].type = 2
        list[11].name = "wire"
    });
    return list
}

//  数据修改 开灯或电源，打开门，或关闭门
let controData = (type, key, value) => {
    let msg
    post(`${url}/api/monitor/control_monitor`, control(type, key, value)).then((res) => {
        console.log(res)
    })
    return msg
}

// 修改设备的名字id
let alterData = (name, long, address) => {
    post(`${url}/api/monitor/monitor_modify`, alter(name, long, address)).then((res) => {
        console.log(res)
        // 修改成功刷新数据
        // gitData()
    })
}
// 获取格子数量,以及是否有物品
let getBoxSize = (fun) => {
    let obj = {}
    msg((data) => {
        console.log(data.all_position, "12121")
        // 格式化数据

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

export {
    msg,
    StatusMsg,
    gitData,
    controData,
    alterData,
    getBoxSize
}