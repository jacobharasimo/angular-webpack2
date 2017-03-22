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
        const deferred = this.$q.defer();
        if (this.isExpanded) {
            this.collapseChildren(this.node);
        } else {
            this.isLoading = true;
            this.expandChildren(this.node);
        }
        return deferred.promise;
    }

    private expandChildren(node) {
        this.treeNodeService.getChildren(node).then((children) => {
            node.children = children;
            this.isExpanded = true;
        }).finally(() => {
            this.isLoading = false;
        });
    }

    private collapseChildren(node) {
        node.children = null;
        this.isExpanded = false;
    }
}
