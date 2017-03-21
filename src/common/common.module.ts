import * as angular from 'angular';
import { ErrorPageModule } from './error-page';
export const CommonModule = angular
    .module('app.common', [
        ErrorPageModule
    ])
    .name;
