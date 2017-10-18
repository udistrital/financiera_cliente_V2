(function() {
    'use strict';

    angular.module('Kronos.pages.compromisos.listadoCompromisos', [
            //'financieraService.service',
            'ui.grid',
            'ui.grid.edit',
            'ui.grid.rowEdit',
            'ui.grid.cellNav',
            'ui.grid.treeView',
            'ui.grid.selection',
            'ui.grid.exporter',
            'ui.grid.autoResize',
            'ui.grid.pagination',
            'ui.grid.resizeColumns',
            'ui.grid.exporter',
            'ui.grid.expandable',
            'ui.grid.pinning',
        ])
        .config(routeConfig);
    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('compromisos.listadoCompromisos', {
                url: '/ver',
                templateUrl: 'app/pages/compromisos/listado/listado-compromisos.html',
                title: 'Listado',
                sidebarMeta: {
                    order: 100,
                }
            });
    }

})();
