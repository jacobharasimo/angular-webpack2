import * as angular from 'angular';
import { RouterConfigModule } from './router';

export const ConfigModule = angular
    .module('app.config', [
        RouterConfigModule
    ])
    .name;
