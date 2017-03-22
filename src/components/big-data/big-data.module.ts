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
                    url: '/bigData',
                    resolve: {
                        treeNodes: () => {
                            return [
                                {
                                    name: 'Node',
                                    type: 'Folder',
                                    icon: 'Something',
                                    hasChildren: true,
                                    children: [
                                        {
                                            name: 'Node 2',
                                            type: 'Folder',
                                            icon: 'Something',
                                            hasChildren: false
                                        },
                                        {
                                            name: 'Node 3',
                                            type: 'Folder',
                                            icon: 'Something',
                                            hasChildren: true
                                        },
                                        {
                                            name: 'Node 4',
                                            type: 'Folder',
                                            icon: 'Something',
                                            hasChildren: false
                                        }
                                    ]
                                },
                                {
                                    name: 'Node 4',
                                    type: 'Folder',
                                    icon: 'Something',
                                    hasChildren: false
                                },
                                {
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
                    }
                }
            );
    })
    .name;
