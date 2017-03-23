export class RouterConfig {
    public static $inject = [
        '$stateProvider',
        '$urlRouterProvider'
    ];

    constructor($stateProvider: ng.ui.IStateProvider,
                $urlRouterProvider: ng.ui.IUrlRouterProvider) {
        // pass through / to main state
        $urlRouterProvider.when('', '/bigData/');
        // unrecognized routes go to error state
        $urlRouterProvider.otherwise('/404');
        $stateProvider
            .state('app', {
                url: '/main',
                views: {
                    'content@': {
                        template: `      
                            <!-- Main component for a primary marketing message or call to action -->
                            <div class="container" >
                                <div class="jumbotron">
                                    <h1>Navbar example</h1>
                                    <p>This example is a quick exercise to illustrate how the default, static and fixed to top navbar work. 
                                    It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>
                                    <p>To see the difference between static and fixed top navbars, just scroll.</p>
                                    <p>
                                      <a class="btn btn-lg btn-primary" href="../../components/#navbar" role="button">View navbar docs »</a>
                                    </p>
                                  </div>
                            </div>`
                    }
                }
            })
            .state('aside', {
                    abstract: true,
                    views: {
                        'content@': {
                            template: `
                                <div class="flex-parent full-height gutter">
                                    <div class="flex-item-sm flex-item" ui-view="left">A</div>
                                    <div class="flex-item-lg flex-item">ITEM LIST</div>
                                </div>`
                        }
                    }
                }
            );
    }
}
