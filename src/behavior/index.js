import G6 from "@antv/g6/build/g6";
// D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\node_modules\_@antv_g6@2.2.6@@antv\g6\build
import hoverNode from './hover-node'
import addLine from './add-edge'
import dragItem from './drag-item'
import selectNode from './select-node'
import hoverEdge from "./hover-edge";
import keyboard from './keyboard'
import mulitSelect from './mulit-select'
import addMenu from './add-menu'

const behavors = {
    'hover-node': hoverNode,
    'add-edge': addLine,
    'drag-item': dragItem,
    'select-node': selectNode,
    'hover-edge': hoverEdge,
    'keyboard':keyboard,
    'mulit-select':mulitSelect,
    'add-menu':addMenu
}

export function initBehavors() {
    for (let key in behavors) {
        G6.registerBehavior(key, behavors[key])
    }
}


