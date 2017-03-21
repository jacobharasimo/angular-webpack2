import * as angular from 'angular';
import { ExplorerModule } from './explorer';

export const ComponentsModule = angular
    .module('app.components', [
        ExplorerModule
    ])
    .name;
