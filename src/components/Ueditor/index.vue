<template>
  <div>
    <script :id="randomId" type="text/plain" style="height: 300px"></script>
    <el-button @click="getUEContentTest">getUEContentTest</el-button>

    <el-button @click="insertFomuleTest">insertFomuleTest</el-button>
    <el-button @click="getUEHtml">getUEHtml</el-button>
    <el-button @click="setUEHtml">setUEHtml</el-button>
    <!-- <div style="color: red">res</div>

    <mjx-container
      class="MathJax CtxtMenu_Attached_0"
      jax="SVG"
      tabindex="0"
      ctxtmenu_counter="3"
      style="position: relative"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="2.185ex"
        height="1.909ex"
        role="img"
        focusable="false"
        viewBox="0 -833.9 965.6 843.9"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        style="vertical-align: -0.023ex"
      >
        <defs>
          <path
            id="MJX-4-TEX-I-1D44E"
            d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"
          ></path>
          <path
            id="MJX-4-TEX-N-32"
            d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"
          ></path>
        </defs>
        <g
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          transform="scale(1,-1)"
        >
          <g data-mml-node="math">
            <g data-mml-node="msup">
              <g data-mml-node="mi">
                <use data-c="1D44E" xlink:href="#MJX-4-TEX-I-1D44E"></use>
              </g>
              <g data-mml-node="mn" transform="translate(562,363) scale(0.707)">
                <use data-c="32" xlink:href="#MJX-4-TEX-N-32"></use>
              </g>
            </g>
          </g>
        </g></svg
      ><mjx-assistive-mml unselectable="on" display="inline"
        ><math xmlns="http://www.w3.org/1998/Math/MathML"
          ><msup><mi>a</mi><mn>2</mn></msup></math
        ></mjx-assistive-mml
      ></mjx-container
    > -->

    <!-- <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2.185ex"
      height="1.909ex"
      role="img"
      focusable="false"
      viewBox="0 -833.9 965.6 843.9"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      style="vertical-align: -0.023ex"
    >
      <defs>
        <path
          id="MJX-6-TEX-I-1D44E"
          d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"
        ></path>
        <path
          id="MJX-6-TEX-N-32"
          d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"
        ></path>
      </defs>
      <g
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        transform="scale(1,-1)"
      >
        <g data-mml-node="math">
          <g data-mml-node="msup">
            <g data-mml-node="mi">
              <use data-c="1D44E" xlink:href="#MJX-6-TEX-I-1D44E"></use>
            </g>
            <g data-mml-node="mn" transform="translate(562,363) scale(0.707)">
              <use data-c="32" xlink:href="#MJX-6-TEX-N-32"></use>
            </g>
          </g>
        </g>
      </g>
    </svg> -->
  </div>
</template>

<script>

import SnowflakeId from "snowflake-id";
// D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\node_modules\snowflake-id\lib\snowflake-id.js
const snowflake = new SnowflakeId({
    mid: 42,
    offset: (2019 - 1970) * 31536000 * 1000
});


export default {
  name: "UE",
  props: {
    value: {
      default: function () {
        return "";
      },
    },
  },
  data() {
    return {
      mjx_assistive_mml_map:{},
      randomId: "editor_" + Math.random() * 100000000000000000,
      // 编辑器实例
      instance: null,
      ready: false,
    };
  },
  watch: {
    value: function (val, oldVal) {
      if (val != null && this.ready) {
        // eslint-disable-next-line no-undef
        this.instance = UE.getEditor(this.randomId);
        this.instance.setContent(val);
        // this.instance.se
      }
    },
  },
  mounted() {
    this.initEditor();
  },

  beforeDestroy() {
    if (this.instance !== null && this.instance.destroy) {
      this.instance.destroy();
    }
  },
  methods: {
    initEditor() {
      this.$nextTick(() => {
        // eslint-disable-next-line no-undef
        this.instance = UE.getEditor(this.randomId);
        // 往UEditor编辑头部工具栏中添加一个自定义名为 newbtn 的功能按扭

        //         UE.registerUI('newbtn', function (editor, uiName) {

        // return new UE.ui.Button({
        //     name: uiName,
        //     title: '我是新增按扭的提示文字',  // 这里是设置当鼠标指向这个按扭时显示的文字
        //     onclick: function () {

        //         alert('我是新增按扭在被点击时执行的方法，在这里可以编写你想要实现的功能哦！');
        //     }
        // });

        // }, [1, ['editor']]);

        this.instance.addListener("ready", () => {
          this.ready = true;
          this.$emit("ready", this.instance);
        });
      });
    },
    getUEContent() {
      return this.instance.getContent();
    },
    setUEHtml() {
      //   let UEDom= document.getElementById(this.randomId)
      //  let body=   UEDom.getElementsByTagName('body')[0]
      //  let   UEHtml=  body.innerHTML
      //     window.frames.forEach(frame=>{
      //   console.log(frame.name);
      // })

      // for(let i=0;i< window.frames.length;i++){
      //   console.log(window.frames[i].name);
      // }

      let frame = window.frames[window.frames.length - 1];
      // let   UEHtml=
      // frame.document.body.innerHTML
      // UEHtml=''

      const UN_TAGS = [
        //转换成svg后只提取svg内容 去除没必要内容
        /<\/?mjx-container[^>]*>/gi, //去除标签保留内容
        /<\/?mjx-assistive-mml[^>]*>/gi, //去除标签保留内容
        /<math[^>]*>.*<\/math>/gi, //去除标签不保留内容
        /<mfrac[^>]*>.*<\/mfrac>/gi, //去除标签不保留内容
      ];
      //判断是否引入了MathJax 动态引入MathJax
      //这里转换的是svg
      // if (!window.MathJax || !window.MathJax.version) {
      //     const script = document.createElement('script');
      //     script.src = 'https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/mathjax/3.2.0/es5/tex-svg.min.js';
      //     script.async = true;
      //     script.id = 'MathJax-script'
      //     document.head.appendChild(script)
      // }

      //转换svg的配置
      const options = {
        scale: 1.15, // global scaling factor for all expressions
        minScale: 0.5, // smallest scaling factor to use
        exFactor: 0.5,
        display: false,
        zoom: "DoubleClick",
      };
      //获取文本内容
      // let value = document.getElementById('formulaInput').value;
      // if (!value)
      //     return alert('请输入内容')
      let value = "a^2";
      //框架不支持tabular标签，替换成array来显示
      value = value.replace(/tabular/g, "array");
      //输出转换svg
      // tex2svg svg2text
      console.log("value");
      console.log(value);
      // MathJax.tex2svg 获取 svg 
    let  tex2svgDom=   window.MathJax.tex2svg(value, options)

    let  id = snowflake.generate();

    // let  formula=tex2svgDom.outerHTML

    // UN_TAGS.forEach((tags) => {
    //     formula = formula.replace(tags, "");
    //   });
   let  svg= tex2svgDom.getElementsByTagName('svg')[0]
   let  mjx_assistive_mml= tex2svgDom.getElementsByTagName('mjx-assistive-mml')[0]
  //  svg.seid 
  svg.id=id
  // mjx_assistive_mml 渲染
  this.mjx_assistive_mml_map[id]=mjx_assistive_mml
  // document.create 
  // 创建一个 span 并且 设置他的内部html为svg
  let  span= document.createElement('span')
  span.innerHTML=svg.outerHTML
  // span 设置点击事件

  // script:
//   span.addEventListener('click', evt => {
//     const {currentTarget} = evt;
//     // currentTarget.classList.add('chooosed');
//     console.log("evt");
//     console.log(evt);
// })

span.onclick = function(evt){
  // todo something 
  console.log("evt");
    console.log(evt);
};

span.setAttribute('onclick', "onclickOfSpan(this)")
const script = document.createElement('script');
// 
// span.onclick = function (evt) {
//             // todo something 
//             console.log(evt);
//             console.log("onclick");
//         };

// document.querySelector('#btn_content').addEventListener('click', evt => {
//     const {currentTarget} = evt;
//     currentTarget.classList.add('chooosed');
// })

// span
let  formula=span.outerHTML
  // let  formula=svg.outerHTML
  svg.onclick=function (e){
    console.log("e");
    console.log(e);
    console.log("formula");
    console.log(formula);
  }
  // dom 

  //  .setAttribute('xmlns', 'http://www.w3.org/2000/svg')
      // let formula = window.MathJax.tex2svg(value, options).outerHTML;
      // window.MathJax.svg
      console.log("formula");
      console.log(formula);
      // formula.getemta
      // formula.get 
      frame.document.body.innerHTML = formula;

      // let   UEHtml=   frame.contentWindow.document.body.innerHTML
      //  let   UEHtml=  window.frames['ueditor_8'].contentWindow.document.body.innerHTML
      // ueditor_8
      // for(let i )
      // window.frames.forEach(frame=>{
      //   console.log(frame.name);
      // })
      // //简单示例，在加入富文本编辑器的页面中获取中id为 ueditor_0 的 iframe 标签中 body 的内容

      // <input type="button" value="获取" onclick="alert(window.frames['ueditor_0'].contentWindow.document.body.innerHTML)">

      // //一个测试地址：http://ueditor.baidu.com/website/onlinedemo.html
      // //将上述第5行代码复制到编辑页面HTML的一个可见位置即可

      //  let   UEHtml=document.getElementById(this.randomId).innerHTML
      // console.log("UEHtml");
      // console.log(UEHtml);
      // return this.instance.getContent()
    },
    getUEHtml() {
      //   let UEDom= document.getElementById(this.randomId)
      //  let body=   UEDom.getElementsByTagName('body')[0]
      //  let   UEHtml=  body.innerHTML
      //     window.frames.forEach(frame=>{
      //   console.log(frame.name);
      // })

      // for(let i=0;i< window.frames.length;i++){
      //   console.log(window.frames[i].name);
      // }

      let frame = window.frames[window.frames.length - 1];
      // let UEHtml = frame.document.body.innerHTML;
      let UEHtml = frame.document.body.outerHTML;
      // let   UEHtml=   frame.contentWindow.document.body.innerHTML
      //  let   UEHtml=  window.frames['ueditor_8'].contentWindow.document.body.innerHTML
      // ueditor_8
      // for(let i )
      // window.frames.forEach(frame=>{
      //   console.log(frame.name);
      // })
      // //简单示例，在加入富文本编辑器的页面中获取中id为 ueditor_0 的 iframe 标签中 body 的内容

      // <input type="button" value="获取" onclick="alert(window.frames['ueditor_0'].contentWindow.document.body.innerHTML)">

      // //一个测试地址：http://ueditor.baidu.com/website/onlinedemo.html
      // //将上述第5行代码复制到编辑页面HTML的一个可见位置即可

      //  let   UEHtml=document.getElementById(this.randomId).innerHTML
      console.log("UEHtml");
      console.log(UEHtml);
      let  bodyDom=frame.document.body
     let  svgs= bodyDom.getElementsByTagName('svg')
   let   mjx_assistive_mml=this. mjx_assistive_mml_map[svgs[0].id]
     console.log("mjx_assistive_mml");
     console.log(mjx_assistive_mml);
      // return this.instance.getContent()
    },
    getUEContentTest() {
      let UEContent = this.getUEContent();
      console.log("UEContent");
      console.log(UEContent);
      // return this.instance.getContent()
    },
    insertFomuleTest() {
      let UEContent = this.getUEContent();
      console.log("UEContent");
      console.log(UEContent);

      const btnOkId = "btn-insert";
      //无用的标签
      const UN_TAGS = [
        //转换成svg后只提取svg内容 去除没必要内容
        /<\/?mjx-container[^>]*>/gi, //去除标签保留内容
        /<\/?mjx-assistive-mml[^>]*>/gi, //去除标签保留内容
        /<math[^>]*>.*<\/math>/gi, //去除标签不保留内容
        /<mfrac[^>]*>.*<\/mfrac>/gi, //去除标签不保留内容
      ];
      //判断是否引入了MathJax 动态引入MathJax
      //这里转换的是svg
      // if (!window.MathJax || !window.MathJax.version) {
      //     const script = document.createElement('script');
      //     script.src = 'https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/mathjax/3.2.0/es5/tex-svg.min.js';
      //     script.async = true;
      //     script.id = 'MathJax-script'
      //     document.head.appendChild(script)
      // }

      //转换svg的配置
      const options = {
        scale: 1.15, // global scaling factor for all expressions
        minScale: 0.5, // smallest scaling factor to use
        exFactor: 0.5,
        display: false,
        zoom: "DoubleClick",
      };
      //获取文本内容
      // let value = document.getElementById('formulaInput').value;
      // if (!value)
      //     return alert('请输入内容')
      let value = "a^2";
      //框架不支持tabular标签，替换成array来显示
      value = value.replace(/tabular/g, "array");
      //输出转换svg
      // tex2svg svg2text
      console.log("value");
      console.log(value);
      let formula = window.MathJax.tex2svg(value, options).outerHTML;
      // window.MathJax.svg

      console.log("window.MathJax.svg2text");
      console.log(window.MathJax.svg2text);
      //去除无用的标签
      //不去除的话，会影响富文本的显示，插入后会自动换行，且手动换行无效果，
      //有兴趣的可以去除看看效果
      UN_TAGS.forEach((tags) => {
        formula = formula.replace(tags, "");
      });
      console.log("formula");
      console.log(formula);
      //插入html
      // wangEditor.cmd.do('insertHTML', formula)
      // return true
      // this.instance.setContent(`<div style='color:red;'>res</div>`)
      //  this.instance.setContent(formula)
      // return this.instance.getContent()

      this.instance.execCommand(
        "insertHtml",
        `<div style='color:red;'>res</div>`
      );
    },
    setText(con) {
      // eslint-disable-next-line no-undef
      this.instance = UE.getEditor(this.randomId);
      this.instance.setContent(con);
      // = UE.getEditor setContent
    },
    /**
     * 插入公式
     */
    insertFomule() {
      const btnOkId = "btn-insert";
      //无用的标签
      const UN_TAGS = [
        //转换成svg后只提取svg内容 去除没必要内容
        /<\/?mjx-container[^>]*>/gi, //去除标签保留内容
        /<\/?mjx-assistive-mml[^>]*>/gi, //去除标签保留内容
        /<math[^>]*>.*<\/math>/gi, //去除标签不保留内容
        /<mfrac[^>]*>.*<\/mfrac>/gi, //去除标签不保留内容
      ];
      //判断是否引入了MathJax 动态引入MathJax
      //这里转换的是svg
      if (!window.MathJax || !window.MathJax.version) {
        const script = document.createElement("script");
        script.src =
          "https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/mathjax/3.2.0/es5/tex-svg.min.js";
        script.async = true;
        script.id = "MathJax-script";
        document.head.appendChild(script);
      }

      //转换svg的配置
      const options = {
        scale: 1.15, // global scaling factor for all expressions
        minScale: 0.5, // smallest scaling factor to use
        exFactor: 0.5,
        display: false,
        zoom: "DoubleClick",
      };
      //获取文本内容
      let value = document.getElementById("formulaInput").value;
      if (!value) return alert("请输入内容");
      //框架不支持tabular标签，替换成array来显示
      value = value.replace(/tabular/g, "array");
      //输出转换svg
      // tex2svg svg2text
      console.log("value");
      console.log(value);
      let formula = window.MathJax.tex2svg(value, options).outerHTML;
      // window.MathJax.svg

      console.log("window.MathJax.svg2text");
      console.log(window.MathJax.svg2text);
      //去除无用的标签
      //不去除的话，会影响富文本的显示，插入后会自动换行，且手动换行无效果，
      //有兴趣的可以去除看看效果
      UN_TAGS.forEach((tags) => {
        formula = formula.replace(tags, "");
      });
      console.log("formula");
      console.log(formula);
      //插入html
      wangEditor.cmd.do("insertHTML", formula);
      return true;
    },
  },
};
</script>

<style scoped>
svg{
  pointer-events: none; 
}
</style>