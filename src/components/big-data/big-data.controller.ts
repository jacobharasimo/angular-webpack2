export class BigData {
    static $inject = [
        '$log',
        'treeNodes'
    ];

    constructor(public $log: ng.ILogService,
                public treeNodes) {
        this.$log.debug('big data controller: ', treeNodes);
    }

}
