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
                    url: '/bigData/:folderID',
                    resolve: {
                        treeNodes: () => {
                            return [
                                {
                                    id: 1,
                                    name: 'Node',
                                    type: 'Folder',
                                    icon: 'Something',
                                    hasChildren: true
                                },
                                {
                                    id: 4,
                                    name: 'Node 4',
                                    type: 'Folder',
                                    icon: 'Something',
                                    hasChildren: false
                                },
                                {
                                    id: 6,
                                    name: 'Node 6',
                                    type: 'Folder',
                                    icon: 'Something',
                                    hasChildren: false
                                }
                            ];
                        }
                    },
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
