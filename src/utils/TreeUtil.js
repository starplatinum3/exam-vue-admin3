
/**
 *  `
  let root = {
    depth: 1
  }
  let tree = makeTreeSons(root,maxDepth)
  
  console.log(tree);
  

  {
    depth: 1,
    indexList: [
      { depth: 2, indexList: [Array] },
      { depth: 2, indexList: [Array] }
    ]
  }
  `
 * @param {*} root 
 * @param {*} maxDepth 
 * @returns 
 */
function makeTreeSons(root,maxDepth,treeInfo) {

    if (root.depth >= maxDepth) {
      return root
    }
    // let root={}
    // root.
  
    // root.left=makeTreeSons(root.left)
    // root.right=makeTreeSons(root.right)
  
    // let left=makeTreeSons(root)
    // let right=makeTreeSons(root)
    // console.log("root");
    // console.log(root);
    // children
    let sonCnt=2
    let son={
        depth: root.depth + 1,
      }
      root.children = []
    //   for(le )
    // root.children = [{
    //     depth: root.depth + 1,
    //   }, {
    //     depth: root.depth + 1,
    //   }]
    // root.indexList = [{
    //   depth: root.depth + 1,
    // }, {
    //   depth: root.depth + 1,
    // }]
    // console.log("root");
    // console.log(root);
    for(let i=0;i<sonCnt;i++){
        root.children.push({
            depth: root.depth + 1,
            label:`${root.depth}-${i}-${treeInfo.num++}`,
            // status:`${root.depth+ 1}`
        })
        root.children[i]=makeTreeSons(root.children[i],maxDepth,treeInfo)
    }
    // root.indexList[0] = makeTreeSons(root.indexList[0],maxDepth)
    // root.indexList[1] = makeTreeSons(root.indexList[1],maxDepth)
    return root
  
    // console.log(" root.indexList");
    // console.log(root.indexList);
  
    // root.right=makeTreeSons(root.right)
  }
  
  
  //  function makeTreeSons(root){
  
  //     if(root.depth>=2){
  //         return root
  //     }
  //     // let root={}
  //     // root.
  
  //     let left=makeTreeSons(root)
  //     let right=makeTreeSons(root)
  //     root.indexList=[
  //         {}
  //     ]
  //   }
  
//   let root = {
//     depth: 1
//   }
//   let tree = makeTreeSons(root,maxDepth)
  
//   console.log(tree);
  
// D:\proj\bishe\exam-vue-admin3\src\utils\TreeUtil.js
 let TreeUtil={
    makeTreeSons,
    makeTreeOfHeight(maxDepth){
        let root = {
            depth: 1,
            label:`0-0`,
            status:1
          }
          let treeInfo={
            num:1,
          }
          let tree = makeTreeSons(root,maxDepth,treeInfo)
          
          return tree
        //   console.log(tree);
    }
 }
export default  TreeUtil
