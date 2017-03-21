import * as angular from 'angular';
import 'angular-ui-router';
import { RouterConfig } from './router.config';

export const RouterConfigModule = angular
    .module('routerConfig', [
        'ui.router'
    ])
    .config(RouterConfig)
    .name;
