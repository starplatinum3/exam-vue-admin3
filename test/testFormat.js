
const  format = function (date,fmt) {
    // this=date
    var o = {
        "M+": date.getMonth() + 1, //月份 
        "d+": date.getDate(), //日 
        "h+": date.getHours(), //小时 
        "m+": date.getMinutes(), //分 
        "s+": date.getSeconds(), //秒 
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
        "S": date.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}

let formatDateStr=
format(new Date(),'yyyy-MM-dd hh:mm:ss.S')

let formatDateStr2=
format(new Date(),'yyyy_MM_dd_hh_mm_ss')
console.log(formatDateStr);

// 2023-01-20 22:36:34.28

console.log(formatDateStr2);
// 2023_01_20_22_37_05