import { ITreeNode } from './tree-node.service';
export class TreeNode implements ng.IController {
    static $inject = [
        '$q',
        'treeNodeService',
        '$log',
        'explorerService'
    ];
    public isExpanded: boolean;
    public isLoading: boolean;
    public node: any;
    public selected?: any;

    constructor(public $q,
                public treeNodeService,
                public $log: ng.ILogService,
                public explorerService) {
        this.isExpanded = false;
        this.isLoading = false;
    }

    public getChildren() {
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

    private setSelected(e: Event) {
        if (!e) {
            return;
        }
        if (this.explorerService.SelectedNode) {
            this.explorerService.SelectedNode.active = false;
            this.$log.debug('previous node:', this.explorerService.SelectedNode.id, ' current node ', this.node.id);
        }
        this.node.active = true;
        this.explorerService.SelectedNode = this.node as ITreeNode;
        this.selected.call(this.node);
    }

    private icon() {
        let iconString: string;
        switch (this.node.type.toLocaleLowerCase()) {
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
