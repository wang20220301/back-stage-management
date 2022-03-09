
import {
    cookieValue
} from "../utils/index"

 function msg(){
     
 }

function token(){
   return cookieValue(token)
}

export {
    token,
    msg
}