let ListUtil={
  addList(src,toBeAdded){
    for (const obj of toBeAdded) {
      src.push(obj)
    }

    return src

  },
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
  },
  sum(list,propName){
    // propName=propName||'value'
    let resList=[]
    let res=0
    for (const obj of list) {
      // if(obj==dontWant){
      //   continue
      // }
      if(propName){
        res+=obj[propName]
      }else{
        res+=obj
      }
    
      
      // resList.push(obj)
    }
    return res
    // return resList
  },
  getListOfProp(list,propName){
    // propName=propName||'value'
    let resList=[]
    let res=0
    for (const obj of list) {
      // if(obj==dontWant){
      //   continue
      // }
      if(propName){
        resList.push(obj[propName])
        // res+=obj[propName]
      }else{
        // res+=obj
        resList.push(obj)
      }
    
      
      // resList.push(obj)
    }
    return resList
    // return resList
  }

  

}

//分组
export const groupBy = (list, fn) => {
  const groups = {};
  list.forEach(function (o) {
      const group = JSON.stringify(fn(o));
      groups[group] = groups[group] || [];
      groups[group].push(o);
  });
  // return Object.keys(groups).map(function (group) {
  //     return groups[group];
  // });
  return groups;
}


export default  ListUtil
