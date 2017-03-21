import * as angular from 'angular';
import { TreeNodeComponent } from './tree-node.component';
import './tree-node.scss';

export const TreeNodeModule = angular.module('treeNode',
    [])
    .component('treeNode', TreeNodeComponent)
    .name;
