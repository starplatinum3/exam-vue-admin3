
function getVal(obj) {
    // for(let val of obj){
    //     console.log(val);
    // }
  
    for (let i in obj) {
      let val = obj[i]
      console.log(val);
    }
  }
  
  
  function getValList(obj) {
    // for(let val of obj){
    //     console.log(val);
    // }
  
    let res = []
    let keyList = []
    for (let i in obj) {
      let val = obj[i]
      //   console.log(val);
      res.push(val)
      keyList.push(i)
    }
  
    // return res,keyList
    return [res, keyList]
  }
  
  
  function getValTdList(obj) {
    // for(let val of obj){
    //     console.log(val);
    // }
  
    let res = []
    for (let i in obj) {
      let val = obj[i]
      //   console.log(val);
      res.push(val)
    }
  
    return res
  }
  
  function genTdsCode(ValList) {
    ValList = ValList.map(o => {
      return "<td>" + o + "</td>"
    }).join("\n")
  
    return `<tr>${ValList}</tr>`
    //   return ValList
  }
  
  
 export function genTableCode(response) {
  
    let tableRows = []
    let  keyListThis = []
    for (let o of response) {
      // console.log(o);
      //   getVal(o)
      //   ValList,keyList=  getValList(o)
      //   ValList=  getValList(o)
      let  [ValList, keyList] = getValList(o)
      keyListThis=keyList
      //   ValList=ValList.map(o=>{
      //     return "<td>"+o+"</td>"
      //   }).join("\n")
  
      let TdsCode = genTdsCode(ValList)
      tableRows.push(TdsCode)
  
      //   console.log(ValList);
      // console.log(keyList);
    }
  
    let keyListTdsCode = genTdsCode(keyListThis)
  
    let tableBody = keyListTdsCode + "\n" + tableRows.join("\n")
    return `<table border="1">
       ${tableBody}
       </table>`
  }
  