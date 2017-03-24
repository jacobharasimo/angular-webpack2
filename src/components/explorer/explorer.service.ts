import { ITreeNode } from './tree-node/tree-node.service';
export class ExplorerService {
    private selectedNode: ITreeNode;

    constructor() {
        //
    }

    public get SelectedNode(): ITreeNode {
        return this.selectedNode as ITreeNode;
    }

    public set SelectedNode(node: ITreeNode) {
        this.selectedNode = node as ITreeNode;
    }
}
