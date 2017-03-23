import { TreeNode } from './tree-node.controller';
export const TreeNodeComponent: ng.IComponentOptions = {
    template: require('./tree-node.html'),
    controller: TreeNode,
    bindings: {
        node: '<',
        selected: '&'
    }
};
