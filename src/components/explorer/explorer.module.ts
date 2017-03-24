import * as angular from 'angular';
import 'angular-vs-repeat';
import './explorer.scss';
import { ExplorerComponent } from './explorer.component';
import { TreeNodeModule } from './tree-node';
import { ExplorerService } from './explorer.service';

export const ExplorerModule = angular.module('explorer',
    [
        TreeNodeModule,
        'vs-repeat'
    ])
    .component('explorer', ExplorerComponent)
    .service('explorerService', ExplorerService)
    .name;
