let MapUtil={
  listContains(list,want){
    for (const obj of list) {
      if(obj==want){
        return true
      }

    }
    return false
  },

  getLast(list){
    let lastIdx = list.length - 1
    return list[lastIdx]
  },

  listRemove(list,dontWant){
    let resList=[]
    for (const obj of list) {
      if(obj==dontWant){
        continue
      }
      resList.push(obj)
    }
    return resList
  },

  listTrim(list,dontWant){
    let resList=[]
    for (const obj of list) {
      if(obj==dontWant){
        continue
      }
      resList.push(obj)
    }
    return resList
  }

  

}



export default  MapUtil
