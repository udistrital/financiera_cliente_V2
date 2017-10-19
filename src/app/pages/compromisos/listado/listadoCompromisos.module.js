(function() {
    'use strict';

    angular.module('Kronos.pages.compromisos.listadoCompromisos', [
            'financieraService.service',
            'ui.grid',
            'ui.grid.cellNav',
            'ui.grid.selection',
            'ui.grid.exporter',
            'ui.grid.autoResize',
            'ui.grid.pagination',
            'ui.grid.resizeColumns',
        ])
        .config(routeConfig);
    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('compromisos.listadoCompromisos', {
                url: '/ver',
                templateUrl: 'app/pages/compromisos/listado/listado-compromisos.html',
                title: 'Lista Compromisos',
                sidebarMeta: {
                    order: 100,
                }
            });
    }

})();
