(function () {
  'use strict';

  angular.module('BlurAdmin.pages.descuentosImpuestos',
  [
    'BlurAdmin.pages.descuentosImpuestos.nuevoImpuestoDescuento',
    'BlurAdmin.pages.descuentosImpuestos.listadoImpuestosDescuentos'
  ])
  .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('descuentosImpuestos', {
            url: '/descuentosImpuestos',
            abstract: true,
            template: '<div ui-view  autoscroll="true" autoscroll-body-top></div>',
            title: 'Impuestos',
            sidebarMeta: {
              icon: 'ion-stats-bars',
              order: 1000, //Posicion en el menu
            },
          });
    }



})();
