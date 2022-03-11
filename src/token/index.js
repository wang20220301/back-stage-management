
import {
    cookieValue
} from "../utils/index"

 function msg(page=10){
    var param = new FormData();
    let tok=token()
    param.append("token", tok);
    param.append("page", page);
    param.append("page_num", 20);
    return param
 }

function token(){
   return cookieValue("token")
}

export {
    token,
    msg
}