export class TreeNode {
    public expanded: boolean;

    constructor() {
        this.expanded = false;
    }
    public toggleExpand() {
        this.expanded = !this.expanded;
    }
}
