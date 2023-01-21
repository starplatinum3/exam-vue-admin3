let parmas=`
cell,row,all`
parmas=
parmas.trim()
// parmas=parmas.strip()
sps=parmas.split(",")
// # log
// console.log();
// for i in sps:
//     print()

for(let o of  sps){
    title=`console.log('${o}');`
    val=`console.log(${o});`
    // console.log(`${}`);
    console.log(title);
    console.log(val);
}