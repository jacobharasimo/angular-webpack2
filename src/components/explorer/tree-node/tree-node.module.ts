import * as angular from 'angular';
import { TreeNodeComponent } from './tree-node.component';
import './tree-node.scss';
import { TreeNodeService } from './tree-node.service';

export const TreeNodeModule = angular.module('treeNode',
    [])
    .component('treeNode', TreeNodeComponent)
    .service('treeNodeService', TreeNodeService)
    .name;
