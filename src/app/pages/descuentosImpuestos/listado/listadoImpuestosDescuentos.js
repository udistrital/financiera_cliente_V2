(function () {
  'use strict';

  angular.module('BlurAdmin.pages.descuentosImpuestos.listadoImpuestosDescuentos', [
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
        .state('descuentosImpuestos.listadoImpuestosDescuentos', {
          url: '/ver',
          templateUrl: 'app/pages/descuentosImpuestos/listado/listado-impuestos-descuentos.html',
          title: 'ver',
          sidebarMeta: {
            order: 300,
          }
        });
  }

})();
