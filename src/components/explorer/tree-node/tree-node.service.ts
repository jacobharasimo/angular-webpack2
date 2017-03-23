export interface ITreeNode {
    id: number;
    name: string;
    type: string;
    icon: string;
    hasChildren: boolean;
}

export class TreeNodeService {
    static $inject = [
        '$q',
        '$timeout'
    ];

    constructor(public $q,
                public $timeout) {

    }

    getChildren() {
        return this.$timeout(() => {
            const treeNodeArray: ITreeNode[] = [];
            const limit = 1000;
            for (let i = 0; i < limit; ++i) {
                const nodeIndex: number = 10 + 1;
                const random_boolean = Math.random() >= 0.5;
                let nodeType;
                nodeType = random_boolean ? 'Folder' : 'File';
                let node: ITreeNode = {
                    id: nodeIndex,
                    name: 'Node ' + nodeIndex,
                    type: nodeType,
                    icon: 'Something',
                    hasChildren: random_boolean
                };
                treeNodeArray.push(node);
            }
            return treeNodeArray;
        }, 1500);
    }
}
