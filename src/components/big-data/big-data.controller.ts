export class BigData implements ng.IController {
    static $inject = [
        '$log',
        'treeNodes'
    ];

    constructor(public $log: ng.ILogService,
                public treeNodes) {
        this.$log.debug('big data controller: ', treeNodes);
    }

    public childSelected(node) {
        this.$log.debug('Item selected', node);
    }
}
