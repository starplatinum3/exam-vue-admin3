
/**
 * 2021-1-1
 * @param {*} date 
 * @returns  2021-1-1
 */
export function formatDate(date) {
    if (!!date) {
      const d = new Date(date);
      return d.getFullYear() + '-' + addDateZero(d.getMonth() + 1) + '-' + addDateZero(d.getDate());
    } else {
      return '';
    }

  }

  const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
  }

  
  export function  formatTime (date ) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
  
    return [year, month, day].map(formatNumber).join('/') + ' ' 
    + [hour, minute, second].map(formatNumber).join(':')
  }
  
  
  // 日期必须是 符合格式的 但是金数据填表的就不是正常数据啊
  export function formatDateTime(date) {
    if (!!date) {
      const d = new Date(date);
      return d.getFullYear() + '-' + addDateZero(d.getMonth() + 1) + '-' + addDateZero(d.getDate()) + ' '
          + addDateZero(d.getHours()) + ':' + addDateZero(d.getMinutes()) + ':' + addDateZero(d.getSeconds());
    } else {
      return '';
    }
  }
  
  /**
   * 
  let  formatDateNumberGang=formatDateNumber(43434,"-")

  console.log(formatDateNumberGang);

//   D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin>node test
// 2018-11-30
   * @param {*} numb 
   * @param {*} format 
   * @returns 
   */
  export function formatDateNumber(numb, format) {
    numb= parseInt(numb)
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
  
  function addDateZero(num) {
    return (num < 10 ? '0' + num : num)
  }
  
  export function isEmpty(str) {
    return str === null || str === undefined || str === '';
  }
  
  //  将对象的所有属性值置为空
  export function resetDict(data) {
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        if (key !== 'pageSize' && key !== 'pageNum') {  // 不要修改这几个字段值
          data[key] = '';
        }
      }
    }
  }
  
  export function copy(temp, target) {
    for (let key in target) {
      if (target.hasOwnProperty(key) && temp.hasOwnProperty(key)) {
        target[key] = temp[key];
      }
    }
  }
  