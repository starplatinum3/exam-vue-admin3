// Common

// 将批量题目分成一个个题目字符串
import Common from './Common'
import ListUtil from './ListUtil'

function getEachSub (whole) {
  let me = this
  me.previewSubjects = []

  // Common
  // Common

  console.log('whole')
  console.log(whole)
  // 主要就是这句话
  let eachSourceSubs = whole.trim().split(/\n\s*\n\s*/g)
  console.log('eachSourceSubs')
  console.log(eachSourceSubs)
  if (eachSourceSubs.length) {
    eachSourceSubs.forEach(item => {
      // assembleSub就是把每个题目的字符串转换成题目对象，保存到previewSubjects数组里
      me.previewSubjects.push(me.assembleSub(item.trim()))
    })
  }
  return me.previewSubjects
}

// 将一个个题目字符串拆解/组合成题目对象
function assembleSub (eachSub) {
  let me = this
  let subObj = {
    inpttype: '', // 类型
    subject: '', // 题干
    answer: '', // 正确答案
    items: [], // 题目选项
    err: '' // 错误提示
  }
  let ansArr = eachSub.match(/\n\s*答案[:：]/g)

  if (ansArr) {
    if (ansArr.length > 1) { // 匹配到多个答案
      subObj.err = '每道题只能有一个答案'
    } else {
      /**
       * 单选题和多选题
       */
      if (eachSub.search(/\n\s*[A-Z][\.、]/ig) > -1) {
        let selReg = /\n\s*答案[:：]\s*[A-Z]+/i // 单选题和多选题

        let selectAns = eachSub.match(selReg)

        if (selectAns) {
          let ans = selectAns[0].trim().replace(/^答案[:：]\s*/g, '').toUpperCase()
          subObj.answer = ans
          // 单选题与多选题
          subObj.inpttype = ans.length === 1 ? 'radio' : 'chk'

          let sourceTimu = eachSub.replace(selReg, '')
          // 拆分题干与选项
          let sourceTimuArr = sourceTimu.split(/[A-Z][、\.]/ig)
          if (sourceTimuArr.length == 1) {
            subObj.err = '选项不能为空'
          } else if (sourceTimuArr.length > 11) {
            subObj.err = '选项数量不能大于10个'
          }

          let valArr = []
          sourceTimuArr.map((item, i) => {
            sourceTimuArr[i] = item.trim().replace(/\s+/g, ' ')

            if (i === 0) {
              // 题干
              subObj.subject = sourceTimuArr[i]
            } else {
              // 选项
              let obj = {
                pic: '',
                text: sourceTimuArr[i],
                val: String.fromCharCode(65 + i - 1) // ascii转字母
              }
              subObj.items.push(obj)
              valArr.push(obj.val)
            }
          })

          // 单选题
          if (subObj.answer.length === 1) {
            if (!valArr.includes(subObj.answer)) {
              subObj.err = '答案选项不正确'
            }
          } else { // 多选题
            for (let a of subObj.answer) {
              if (!valArr.includes(a)) {
                subObj.err = '答案选项不正确'
                break
              }
            }
          }
        } else {
          subObj.err = '选择题答案不正确'
        }
      } else {
        let reg = /\n\s*答案[:：]\s*/g
        let regArr = eachSub.split(reg)

        subObj.subject = regArr[0]
        /**
         * 填空题
         */
        if (regArr[0].includes('___')) {
          subObj.inpttype = 'fillin'
          let len = regArr[0].match(/_{3,}/g).length
          let fillinAns = regArr[1].split(/\s*\|\s*/g)

          if (len > 0 && len <= fillinAns.length) {
            for (let i = 0; i < len; i++) {
              if (fillinAns[i].includes('&&')) {
                subObj.items.push({
                  matchtype: 'equal',
                  vals: fillinAns[i].split('&&').filter(item => {
                    return item
                  })
                })
              } else {
                subObj.items.push({
                  matchtype: 'equal',
                  vals: [fillinAns[i]]
                })
              }
            }
          } else {
            subObj.err = '填空题答案个数错误'
          }
        }
        /**
         * 判断题
         */
        else if (regArr[1].trim() === '对'
          || regArr[1].trim() === '错'
          || regArr[1].trim() === '正确'
          || regArr[1].trim() === '错误') {
          subObj.inpttype = 'judge'

          subObj.answer = (regArr[1].trim() === '对' || regArr[1].trim() === '正确') ? '1' : '0'
        }
        /**
         * 文件上传题
         */
        else if (regArr[1].trim() === '[文件]') {
          subObj.inpttype = 'file'
        }
        /**
         * 问答题
         */
        else {
          subObj.inpttype = 'textarea'
          subObj.answer = regArr[1].trim()
        }
      }
    }
  } else { // 未匹配到则为null
    subObj.err = '题目缺少答案'
  }

  return subObj
}

// class QuestionParser{
//      getEachSub(){
//            return getEachSub()
//      }
//     assembleSub(){

//     }
// }

let QuestionParser = {
  getEachSub,
  assembleSub,
  parseQues (quesStr) {
    quesStr= quesStr.trim()
    let lines = quesStr.split('\n')
    // console.log("lines");
    // console.log(lines);
    // lines.dontWant
    // lines= this.listRemove(lines,"")
    // console.log("lines");
    // console.log(lines);

    lines = lines.filter(o => o != '').map(o => o.trim())
    console.log('lines')
    console.log(lines)

    let idx = 0
    const titleIdx = 0
    const questionIdx = 1
    const aIdx = 1
    const bIdx = 2
    const cIdx = 3
    const dIdx = 4
    const ansIdx = 5
    // 不启用eslint
    const ansIdxes = [1, 2, 3, 4]
    const optionIdxes = [1, 2, 3, 4]

    let quesList = []
    for (const line of lines) {
      if (idx == titleIdx) {
        let oneQuestion = {
          id: null,
          // 单选题
          // questionType: 1,
          questionType: Common.QuestionType.singleChoice,
          // ,`grade_level`,  1 是一年级吗
          gradeLevel: null,
          subjectId: null,
          title: line,
          items: [
            { prefix: 'A', content: '' },
            { prefix: 'B', content: '' },
            { prefix: 'C', content: '' },
            { prefix: 'D', content: '' }
          ],
          analyze: '',
          correct: '',
          score: '',
          difficult: 0
        }
        quesList.push(oneQuestion)
      }
      // else if(idx==aIdx){
      //   let lastIdx=quesList.length-1
      //   let lastQues= quesList[lastIdx]
      //   lastQues.items[0].content=line
      //
      // }
      else if (ListUtil.listContains(optionIdxes, idx)) {
        let lastIdx = quesList.length - 1
        let lastQues = quesList[lastIdx]

        lastQues.items[idx - 1].content = line
      } else if (idx == ansIdx) {

        let lastQues = ListUtil.getLast(quesList)
        lastQues.correct = line.replace("参考答案 : ","")
        // js replace

      }
      idx++
      if (idx == 6) {
        idx = 0
      }
    }
    console.log("quesList")
    console.log(quesList)
    return quesList
  },

  listContains (list, want) {
    for (const obj of list) {
      if (obj == want) {
        return true
      }

    }
    return false
  },

  listRemove (list, dontWant) {
    let resList = []
    for (const obj of list) {
      if (obj == dontWant) {
        continue
      }
      resList.push(obj)
    }
    return resList
  },

  listTrim (list, dontWant) {
    let resList = []
    for (const obj of list) {
      if (obj == dontWant) {
        continue
      }
      resList.push(obj)
    }
    return resList
  }
}

export default QuestionParser
