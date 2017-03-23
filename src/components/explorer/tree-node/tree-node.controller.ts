export class TreeNode implements ng.IController {
    static $inject = [
        '$q',
        'treeNodeService',
        '$log'
    ];
    public isExpanded: boolean;
    public isLoading: boolean;
    public node: any;

    constructor(public $q,
                public treeNodeService,
                public $log: ng.ILogService) {
        this.isExpanded = false;
        this.isLoading = false;
    }

    public getChildren() {
        this.setSelected();
        if (!this.node.hasChildren) {
            return null;
        }
        this.isExpanded = !this.isExpanded;
        if (!this.isExpanded) {
            this.collapseChildren(this.node);
        } else {
            this.isLoading = true;
            this.expandChildren(this.node);
        }
    }

    private setSelected() {
        this.$log.debug('set selected: ', this.node);
    }

    private icon() {
        return 'glyphicon glyphicon-folder-open';
    }

    private expandChildren(node) {
        return this.treeNodeService.getChildren(node).then((children) => {
            node.children = children;
        }).finally(() => {
            this.isLoading = false;
        });
    }

    private collapseChildren(node) {
        node.children = null;
    }
}
