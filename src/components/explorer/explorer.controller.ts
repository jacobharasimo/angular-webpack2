import { ITreeNode } from './tree-node/tree-node.service';
export class Explorer implements ng.IController {
    static $inject = [
        '$log'
    ];
    selected?: any;
    selectedNode: ITreeNode;

    constructor(public $log: ng.ILogService) {
        //
    }

    public setSelected(node) {
        this.selectedNode = node;
        this.selected(node);
        this.$log.debug('explorer controller selected: ', node);
    }
}
