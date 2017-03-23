import * as angular from 'angular';

import { BigData } from './big-data.controller';

export const BigDataModule = angular.module('bigData',
    [])
    .controller('bigData', BigData)
    .config(($stateProvider: ng.ui.IStateProvider) => {
        $stateProvider
            .state(
                'aside.bigData',
                {
                    url: '/bigData?itemId=:folderID',
                    views: {
                        'left@aside': {
                            template: require('./big-data.html'),
                            controller: BigData,
                            controllerAs: '$ctrl'
                        }
                    },
                    reloadOnSearch: false
                }
            );
    })
    .name;
