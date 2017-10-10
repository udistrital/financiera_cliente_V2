(function() {
    'use strict';

    angular.module('Kronos.pages.avances.requisitos', [
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
            .state('avances.requisitos', {
                url: '/requisito_avance',
                templateUrl: 'app/pages/avances/requisito/requisitos.html',
                title: 'ver',
                sidebarMeta: {
                    order: 300,
                }
            });
    }

})();