(function() {
    'use strict';

    angular.module('Kronos.pages.avances.listaSolicitud', [
            'financieraService.service',
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
            .state('avances.listaSolicitud', {
                url: '/listaSolicitud',
                templateUrl: 'app/pages/avances/lista/lista-solicitud.html',
                title: 'Lista Solicitud',
                sidebarMeta: {
                    order: 300,
                }
            });
    }

})();