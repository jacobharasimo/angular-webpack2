import * as angular from 'angular';

import './explorer.scss';
import { ExplorerComponent } from './explorer.component';

export const ExplorerModule = angular.module('explorer',
    [])
    .component('explorer', ExplorerComponent)
    .name;
