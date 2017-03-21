export class Explorer {
    static $inject = [
        '$log'
    ];

    constructor(public $log: ng.ILogService) {
        //
    }

    public $onInit() {
        // init
    }

    public $onChanges(onChangesObj: ng.IOnChangesObject) {
        this.$log.debug('onChangesObj:', onChangesObj);
        if (onChangesObj.nodes && onChangesObj.nodes.currentValue) {
            this.$log.debug('new value: ', onChangesObj);
        }
    }
}
