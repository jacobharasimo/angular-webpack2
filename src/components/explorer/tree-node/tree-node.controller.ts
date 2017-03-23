export class TreeNode implements ng.IController {
    static $inject = [
        '$q',
        'treeNodeService',
        '$log'
    ];
    public isExpanded: boolean;
    public isLoading: boolean;
    public node: any;
    public selected?: any;

    constructor(public $q,
                public treeNodeService,
                public $log: ng.ILogService) {
        this.isExpanded = false;
        this.isLoading = false;
    }

    public getChildren(e) {
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
        this.selected.call(this.node);
    }

    private icon() {
        let iconString: string;
        switch (this.node.type) {
            case 'file':
                iconString = 'glyphicon glyphicon-file';
                break;
            default:
                iconString = 'glyphicon glyphicon-folder-open';
                break;
        }
        return iconString;
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
