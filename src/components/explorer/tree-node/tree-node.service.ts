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
                    name: 'Node 2',
                    type: 'Folder',
                    icon: 'Something',
                    hasChildren: false
                },
                {
                    name: 'Node 3',
                    type: 'Folder',
                    icon: 'Something',
                    hasChildren: true
                },
                {
                    name: 'Node 4',
                    type: 'Folder',
                    icon: 'Something',
                    hasChildren: false
                }
            ];
        }, 2000);
    }
}
