import { ITreeNode } from '../explorer/tree-node/tree-node.service';
export class BigData implements ng.IController {
    static $inject = [
        '$log'
    ];
    treeNodes: ITreeNode[];

    constructor(public $log: ng.ILogService) {
    }

    $onInit() {
        this.treeNodes = [
            {
                id: 1,
                name: 'Node',
                type: 'folder',
                icon: 'Something',
                hasChildren: true
            },
            {
                id: 4,
                name: 'Node 4',
                type: 'file',
                icon: 'Something',
                hasChildren: false
            },
            {
                id: 6,
                name: 'Node 6',
                type: 'file',
                icon: 'Something',
                hasChildren: false
            }
        ] as ITreeNode[];
    }
}
