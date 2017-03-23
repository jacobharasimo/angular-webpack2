export class Explorer implements ng.IController {
    static $inject = [
        '$log'
    ];

    constructor(public $log: ng.ILogService) {
        //
    }

    public setSelected(node) {
        this.$log.debug('selected: ', node);
    }
}
