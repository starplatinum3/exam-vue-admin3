 
export default function (wangEditor) {
    const btnOkId = 'btn-insert'
    //无用的标签
    const UN_TAGS = [ //转换成svg后只提取svg内容 去除没必要内容
        /<\/?mjx-container[^>]*>/gi,//去除标签保留内容
        /<\/?mjx-assistive-mml[^>]*>/gi,//去除标签保留内容
        /<math[^>]*>.*<\/math>/gi,//去除标签不保留内容
        /<mfrac[^>]*>.*<\/mfrac>/gi//去除标签不保留内容
    ]
    //判断是否引入了MathJax 动态引入MathJax 
    //这里转换的是svg
    if (!window.MathJax || !window.MathJax.version) {
        const script = document.createElement('script');
        script.src = 'https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/mathjax/3.2.0/es5/tex-svg.min.js';
        script.async = true;
        script.id = 'MathJax-script'
        document.head.appendChild(script)
    }
    /**
     * 插入公式
     */
    function insertFomule() {
        //转换svg的配置
        const options = {
            scale: 1.15,// global scaling factor for all expressions
            minScale: 0.5, // smallest scaling factor to use
            exFactor: .5,
            display: false,
            zoom: 'DoubleClick',
        };
        //获取文本内容
        let value = document.getElementById('formulaInput').value;
        if (!value)
            return alert('请输入内容')
        //框架不支持tabular标签，替换成array来显示
        value = value.replace(/tabular/g, "array")
        //输出转换svg
        // tex2svg svg2text
        console.log("value");
        console.log(value);
        let formula = window.MathJax.tex2svg(value, options).outerHTML
        // window.MathJax.svg 
       
        console.log( "window.MathJax.svg2text");
        console.log( window.MathJax.svg2text);
        //去除无用的标签
        //不去除的话，会影响富文本的显示，插入后会自动换行，且手动换行无效果，
        //有兴趣的可以去除看看效果
        UN_TAGS.forEach(tags => {
                formula = formula.replace(tags, '')
        })
        console.log("formula");
        console.log(formula);
            //插入html
        wangEditor.cmd.do('insertHTML', formula)
        return true
    }
 
 
    // tabs配置
    const tabsConf = [{
        // tab 的标题
        title: "插入数学公式",
        // 模板
        tpl: `<div>
              <div id="edit-content">
              <textarea id='formulaInput'  style='height:100px;width:450px;textalgin:left;font-size='12px'' ></textarea>
              <div class="w-e-button-container">
                <button type="button" id="${btnOkId}" class="right">插入</button>
              </div>
            </div>`,
        // 事件绑定
        events: [{
            selector: '#' + btnOkId,
            type: 'click',
            fn: insertFomule,
            bindEnter: true,
        },],
    }, // tab end
    ]
 
    return {
        width: 500,
        height: 0,
        // panel 中可包含多个 tab
        tabs: tabsConf, // tabs end
    }
}