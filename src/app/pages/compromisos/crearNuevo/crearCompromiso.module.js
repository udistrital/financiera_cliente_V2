(function() {
    'use strict';

    angular.module('Kronos.pages.compromisos.crearCompromiso', [
            'financieraService.service'
        ])
        .config(routeConfig);
    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('compromisos.crearCompromiso', {
                url: '/crear',
                templateUrl: 'app/pages/compromisos/crearNuevo/crear-compromiso.html',
                title: 'Crear',
                sidebarMeta: {
                    order: 100,
                }
            });
    }
})();
