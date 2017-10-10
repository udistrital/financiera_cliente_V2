(function() {
    'use strict';

    angular.module('Kronos.pages.avances', [
            'Kronos.pages.avances.listaSolicitud',
            'Kronos.pages.avances.requisitos',
            'Kronos.pages.avances.solicitud',
            'Kronos.pages.avances.tipo'
        ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('avances', {
                url: '/avances',
                abstract: true,
                template: '<div ui-view  autoscroll="true" autoscroll-body-top></div>',
                title: 'Avances',
                sidebarMeta: {
                    icon: 'ion-clipboard',
                    order: 1000, //Posicion en el menu
                },
            });
    }



})();