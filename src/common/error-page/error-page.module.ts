import * as angular from 'angular';
import 'angular-ui-router';
import { ErrorPageComponent } from './error-page.component';

export const ErrorPageModule = angular
    .module('ErrorPage', [
        'ui.router'
    ])
    .component('error', ErrorPageComponent)
    .config(($urlRouterProvider: ng.ui.IUrlRouterProvider, $stateProvider: ng.ui.IStateProvider) => {
        $urlRouterProvider.otherwise('/404');
        $stateProvider
            .state('error', {
                url: '/404',
                views: {
                    'content@': {
                        template: '<error></error>'
                    }
                }
            });
    })
    .name;
