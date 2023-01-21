
let sumArticle=`userScoreSum:0,
paperScoreSum:0,
questionCorrectSum:0,
questionCountSum:0,
doTimeSum:0,`
let  sumNames=
sumArticle.trim().split("\n")

let  sumNamesTrue=[]
for(let sumName of sumNames){
    sumNamesTrue.push(sumName.split(":")[0])
}
// sumNamesTrue
console.log(sumNamesTrue);
for(let userScoreSum of  sumNamesTrue){
       let res= `<div>${userScoreSum} {{ ${userScoreSum} }}}</div>`
       console.log(res);
}
// let  sumNames=
// sumArticle.trim().split("\n").forEach(item=>{
//     // console.log(item.split(":")[0]);
//     return item.split(":")[0]
// })

// console.log(sumNames);

