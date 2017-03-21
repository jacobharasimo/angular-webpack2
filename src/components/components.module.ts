import * as angular from 'angular';
import { ExplorerModule } from './explorer';
import { BigDataModule } from './big-data';

export const ComponentsModule = angular
    .module('app.components', [
        ExplorerModule,
        BigDataModule
    ])
    .name;
