import Editor from 'wangeditor'
import createPanelInsert from "./create-panel-insert";
 
const { PanelMenu, Panel} = Editor;
 
 
class InsertMenu extends PanelMenu {
    constructor(editor) {
        // data-title属性表示当鼠标悬停在该按钮上时提示该按钮的功能简述
        const $elem = Editor.$(
            `<div class="w-e-menu" style='width:100px'  data-title="插入数学公式">
        <span>插入数学公式</span>
      </div>`
        );
        super($elem, editor);
    }
 
    /**
     * 菜单点击事件
     */
    clickHandler() {
        const conf = createPanelInsert(this.editor);
        const panel = new Panel(this, conf);
        panel.create();
    }
    tryChangeActive() { }
}
 
// 注册菜单
Editor.registerMenu('InsertMenuKey', InsertMenu);
 
export default Editor;