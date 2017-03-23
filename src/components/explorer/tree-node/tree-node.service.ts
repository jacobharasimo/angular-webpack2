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
            return [
                {
                    id: 2,
                    name: 'Node 2',
                    type: 'File',
                    icon: 'Something',
                    hasChildren: false
                },
                {
                    id: 3,
                    name: 'Node 3',
                    type: 'Folder',
                    icon: 'Something',
                    hasChildren: true
                },
                {
                    id: 4,
                    name: 'Node 4',
                    type: 'File',
                    icon: 'Something',
                    hasChildren: false
                }
            ] as ITreeNode[];
        }, 2000);
    }
}
