class ObjUtil {
    static isGot(obj) {
      return !!obj
    }

    static isArr(obj){
      return   obj  instanceof Array
    }

    static isStr(object){
     return typeof(object)=='string'

    }

    // const clone = {...original}
// 
static
deepCloneByExtend(src){
    const clone = {...src}
    return clone
    // return   JSON.parse(  JSON.stringify(src))
   
   }
    deepClone(src){
      return   JSON.parse(  JSON.stringify(src))
     
     }

    // https://blog.csdn.net/stone10086/article/details/80974157
    static getAllJson(jsons, name, sign) {
        if(name == "" || name == undefined) {
            name = "json"
        }
        for(let key in jsons) {
            var newName = name + sign + key;
            let  val=jsons[key] 
            let notObj=!(val instanceof Object)
            if(notObj){
                console.log(newName + " = " + val); //如果不是Object则打印键值
            }else{
                ObjUtil. getAllJson(val, newName, sign); //如果是Object则递归
            } 
        }
    };


}
export default ObjUtil;