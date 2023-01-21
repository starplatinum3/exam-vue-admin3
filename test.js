let tableNameExcelColsMap={
    "a":"a",
}

// console.log(
//     tableNameExcelColsMap["b"]);
    // undefined

    // if( !tableNameExcelColsMap["b"]){
    //     console.log("no");
    // }

//     undefined
// no


// export 
function formatDateNumber(numb, format) {
    let time = new Date((numb - 1) * 24 * 3600000 + 1)
    time.setFullYear(time.getFullYear() - 70)
    let year = time.getFullYear() + ''
    let month = time.getMonth() + 1 + ''
    month = month.length === 1 ? '0' + month : month;
    let date = time.getDate() + ''
    date = date.length === 1 ? '0' + date : date;
    if(format && format.length === 1) {
      return year + format + month + format + date
    }
    return year+(month < 10 ? '0' + month : month)+(date < 10 ? '0' + date : date)
  }


  let  formatDateNumberGang=formatDateNumber(43434,"-")

  // console.log(formatDateNumberGang);

//   D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin>node test
// 2018-11-30

// D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin>node test.js
// 2018-11-30

// {/* <div>userScoreSum {{ userScoreSum }}}</div> */}

let sumArticle=`userScoreSum:0,
paperScoreSum:0,
questionCorrectSum:0,
questionCountSum:0,
doTimeSum:0,`
let  sumNames=
sumArticle.trim().split("\n").forEach(item=>{
    // console.log(item.split(":")[0]);
    return item.split(":")[0]
})

console.log(sumNames);