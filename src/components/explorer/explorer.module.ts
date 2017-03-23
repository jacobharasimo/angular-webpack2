import * as angular from 'angular';
import 'angular-vs-repeat';
import './explorer.scss';
import { ExplorerComponent } from './explorer.component';
import { TreeNodeModule } from './tree-node';

export const ExplorerModule = angular.module('explorer',
    [
        TreeNodeModule,
        'vs-repeat'
    ])
    .component('explorer', ExplorerComponent)
    .name;
