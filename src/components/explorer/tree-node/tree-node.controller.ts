export class TreeNode implements ng.IController {
    static $inject = [
        '$q',
        'treeNodeService'
    ];
    public isExpanded: boolean;
    public isLoading: boolean;
    public node: any;

    constructor(public $q,
                public treeNodeService) {
        this.isExpanded = false;
        this.isLoading = false;
    }

    public getChildren() {
        this.isExpanded = !this.isExpanded;

        const deferred = this.$q.defer();
        if (!this.isExpanded) {
            this.collapseChildren(this.node);
        } else {
            this.isLoading = true;
            this.expandChildren(this.node);
        }
        return deferred.promise;
    }

    private icon() {
        return 'glyphicon glyphicon-folder-open'
    }

    private expandChildren(node) {
        this.treeNodeService.getChildren(node).then((children) => {
            node.children = children;
        }).finally(() => {
            this.isLoading = false;
        });
    }

    private collapseChildren(node) {
        node.children = null;
    }
}
