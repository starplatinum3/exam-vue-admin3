

  let StringUtil={
	
	checkUrl(url) {
		const re = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
		return re.test(url)
	  },
	
	  // GITHUB_URL:"https://github.com",
	  // Types are not supported by current JavaScript version
	  // js 参数  类型
	  // urlAdd(url:String,addStr:String){
	  // localhost:8080/ +  user/save
	  // 后面加的开头都不要有 斜杠
	  urlAdd(url,addStr){
		// if(url.endwith)
		if (!url.endsWith("/")) {
		  url+="/"
		}
		if(addStr.startsWith("/")){
		  addStr=addStr.substring(1,addStr.length)
		}
	
		url+=addStr
		return url
	  },
	  isEmpty(string){
		   return string===null||string===undefined||string===""
	  }
	  ,
    getHtmlPlainText(html_str) {
        //提取字符串中的文字
        let re = new RegExp('<[^<>]+>', 'g')
        let text = html_str.replace(re, '')
        //或
        //var text = html_str.replace(/<[^<>]+>/g, "");
        return text
      },
    
      // 对象转query字符串的方法
	 queryObjToPathStr(obj) {
		// 首先判断obj是否为真，为真则进行处理，不然直接return
		if (obj) {
			// 定义变量接收query字符串
			let query = ""
			// 循环遍历对象
			for (let i in obj) {
				// 定义变量接收对象的value值
				let value = obj[i]
				// 若对象的value值为数组，则进行join打断
				if (Array.isArray(value)) {
					value = value.join(",")
				}
				// 进行字符串拼接
				query += `&${i}=${value}`
			}
			// replace返回一个新的字符串，要用query重新接受一下，并把第一个&替换为?
			query = query.replace('&', '?')
			// 返回生成的query字符串
			return query
		}
		return ""
	}

  
    
  
  }
  
  // let obj = {
	// 	username: '我叫胡八一',
	// 	password: 1627889159
	// }
	// console.log(query(obj)) //?username=我叫胡八一&password=1627889159

  export default  StringUtil
