// D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\src\views\CodeMirrorItTest.vue
import "codemirror/theme/ambiance.css";
import "codemirror/lib/codemirror.css";
import "codemirror/addon/hint/show-hint.css";

let CodeMirror = require("codemirror/lib/codemirror");
require("codemirror/addon/edit/matchbrackets");
require("codemirror/addon/selection/active-line");
require("codemirror/mode/sql/sql");
require("codemirror/addon/hint/show-hint");
require("codemirror/addon/hint/sql-hint");

import "codemirror/lib/codemirror.css";
import "codemirror/mode/xml/xml"; // xml编辑器模式
import "codemirror/theme/monokai.css"; // 主题
// D:\proj\bishe\exam-vue-admin3\src\utils\CodeMirrorUtil.js


function getEditor(refId){
    // debugger
    // let mime = 'text/x-mariadb'
    // CodeMirror xml 编辑器 代码提示
    let mime = "application/xml";
    let that = this;
    // this.$refs.mycode
    //let theme = 'ambiance'//设置主题，不设置的会使用默认主题
    let editor = CodeMirror.fromTextArea(refId, {
      mode: mime, //选择对应代码编辑器的语言，我这边选的是数据库，根据个人情况自行设置即可
      indentWithTabs: true,
      smartIndent: true,
      lineNumbers: true,
      matchBrackets: true,
      // lineNumbers: true, // 显示行号
      styleActiveLine: true, // 高亮当前行
      theme: "monokai", // 主题
      //theme: theme,
      // autofocus: true,
      // extraKeys: { Ctrl: "autocomplete" }, //自定义快捷键
      hintOptions: {
        //自定义提示选项
        tables: {
          users: ["name", "score", "birthDate"],
          countries: ["name", "population", "size"],
        },
      },
      extraKeys: {
        "'<'": "completeAfter",
        "'/'": "completeIfAfterLt",
        "' '": "completeIfInTag",
        "'='": "completeIfInTag",
        Ctrl: "autocomplete",
        "Shift-Tab": function () {
          // 选中部分格式化
        //   that.formatSelection();
          that.formatSelection(editor);
        //  this. formatSelection(editor)
        },
        "Shift-Alt": function () {
          // 全文格式化，快捷键可自定义，根据具体业务此处格式化的同时要处理其它逻辑，故把此处代码提出来写
          that.format(editor);
        //   that.format();

        },
      },
    });
    //代码自动提示功能，记住使用cursorActivity事件不要使用change事件，这是一个坑，那样页面直接会卡死
    // editor.on('cursorActivity', function () {
    //   editor.showHint()
    // })

    const tags = {
      "!attrs": {
        // 若tag标签里边没有设置attr属性,则所有的标签自带id和class属性，此为自定义项，非必须
        id: null,
        class: ["A", "B", "C"],
      },
      Button: {
        attrs: {
          x: null,
          y: null,
          w: null,
          h: null,
          align: ["center", "left", "right"],
          alignV: ["center", "top", "bottom"],
          Visibility: null,
        },
      },
    };

    // editor.on("keyup", function (cm, event) {
    //   //所有的字母和'$','{','.'在键按下之后都将触发自动完成

    //   if (
    //     !cm.state.completionActive &&
    //     ((event.keyCode >= 65 && event.keyCode <= 90) ||
    //       event.keyCode == 52 ||
    //       event.keyCode == 219 ||
    //       event.keyCode == 190)
    //   ) {
    //     CodeMirror.commands.autocomplete(cm, null, { completeSingle: false });
    //   }
    // });

    CodeMirror.commands.completeAfter = function (cm, pred) {
      if (!pred || pred())
        setTimeout(function () {
          if (!cm.state.completionActive)
            cm.showHint({ completeSingle: false });
        }, 100);
      return CodeMirror.Pass;
    };
    CodeMirror.commands.completeIfAfterLt = function (cm) {
      console.log("cm completeIfAfterLt");
      console.log(cm);
      return CodeMirror.commands.completeAfter(cm, function () {
        var cur = cm.getCursor();
        return cm.getRange(CodeMirror.Pos(cur.line, cur.ch - 1), cur) == "<";
      });
    };
    CodeMirror.commands.completeIfInTag = function (cm) {
      return CodeMirror.commands.completeAfter(cm, function () {
        var tok = cm.getTokenAt(cm.getCursor());
        var reg = /[""]/;
        if (
          tok.type == "string" &&
          (!reg.test(tok.string.charAt(tok.string.length - 1)) ||
            tok.string.length == 1)
        )
          return false;
        var inner = CodeMirror.innerMode(cm.getMode(), tok.state).state;
        return inner.tagName;
      });
    };

    CodeMirror.defineExtension("autoFormatRange", function (from, to) {
      var cm = this;
      var outer = cm.getMode(),
        text = cm.getRange(from, to).split("\n");
      var state = CodeMirror.copyState(outer, cm.getTokenAt(from).state);
      var tabSize = cm.getOption("tabSize");

      var out = "",
        lines = 0,
        atSol = from.ch == 0;

      function newline() {
        out += "\n";
        atSol = true;
        ++lines;
      }

      for (var i = 0; i < text.length; ++i) {
        var stream = new CodeMirror.StringStream(text[i], tabSize);
        while (!stream.eol()) {
          var inner = CodeMirror.innerMode(outer, state);
          var style = outer.token(stream, state),
            cur = stream.current();
          stream.start = stream.pos;
          if (!atSol || /\S/.test(cur)) {
            out += cur;
            atSol = false;
          }
          if (
            !atSol &&
            inner.mode.newlineAfterToken &&
            inner.mode.newlineAfterToken(
              style,
              cur,
              stream.string.slice(stream.pos) || text[i + 1] || "",
              inner.state
            )
          )
            newline();
        }
        if (!stream.pos && outer.blankLine) outer.blankLine(state);
        if (!atSol) newline();
      }

      cm.operation(function () {
        cm.replaceRange(out, from, to);
        for (
          var cur = from.line + 1, end = from.line + lines;
          cur <= end;
          ++cur
        ) {
          cm.indentLine(cur, "smart");
        }
      });
    });

    // this.editor = CodeMirror.fromTextArea(this.$refs.code, {
    //     extraKeys: {
    //          "'<'": "completeAfter",
    //          "'/'": "completeIfAfterLt",
    //          "' '": "completeIfInTag",
    //          "'='": "completeIfInTag",
    //     }
    // })
    editor.setOption("hintOptions", { schemaInfo: tags });
    return editor;
}


let CodeMirrorUtil={
    getEditor,
    formatSelection(editor) {
        CodeMirror.commands.indentAuto(editor);
// 
        // CodeMirror.commands.indentAuto(this.editor);
      },
      // 格式化
      format(editor) {
        // this.
        editor.autoFormatRange(
          { line: 0, ch: 0 },
          { line:
           editor.lineCount()
         }
        );
      },
      
}

export default  CodeMirrorUtil
