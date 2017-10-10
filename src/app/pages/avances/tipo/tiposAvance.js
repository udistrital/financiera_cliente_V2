(function() {
    'use strict';

    angular.module('Kronos.pages.avances.tipos', [
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
            .state('avances.tipos', {
                url: '/tipo_avance',
                templateUrl: 'app/pages/avances/tipo/tipos-avance.html',
                title: 'Tipos Avance',
                sidebarMeta: {
                    order: 300,
                }
            });
    }

})();