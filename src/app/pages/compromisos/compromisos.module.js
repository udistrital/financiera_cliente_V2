(function() {
    'use strict';
    angular.module('Kronos.pages.compromisos', [
            'Kronos.pages.compromisos.listadoCompromisos',
            'financieraService.service'          
        ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('compromisos', {
                url: '/compromisos',
                abstract: true,
                template: '<div ui-view  autoscroll="true" autoscroll-body-top></div>',
                title: 'Compromisos',
                sidebarMeta: {
                    icon: 'ion-stats-bars',
                    order: 1000, //Posicion en el menu
                },
            });
    }

})();
