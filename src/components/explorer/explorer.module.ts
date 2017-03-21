import * as angular from 'angular';

import './explorer.scss';
import { ExplorerComponent } from './explorer.component';
import { TreeNodeModule } from './tree-node';

export const ExplorerModule = angular.module('explorer',
    [
        TreeNodeModule
    ])
    .component('explorer', ExplorerComponent)
    .name;
