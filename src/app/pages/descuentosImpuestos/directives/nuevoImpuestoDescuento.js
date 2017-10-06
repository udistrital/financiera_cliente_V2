(function () {
  'use strict';

  angular.module('BlurAdmin.pages.descuentosImpuestos.nuevoImpuestoDescuento', [])
  .config(routeConfig);
  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('descuentosImpuestos.nuevoImpuestoDescuento', {
          url: '/crearNuevo',
          templateUrl: 'app/pages/descuentosImpuestos/crearNuevo/nuevo-impuesto-descuento.html',
          title: 'crear Nuevo',
          sidebarMeta: {
            order: 300,
          }
        });
  }

})();
