/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function() {
    'use strict';

    angular.module('Kronos.pages.ui', [
            'Kronos.pages.ui.typography',
            'Kronos.pages.ui.buttons',
            'Kronos.pages.ui.icons',
            'Kronos.pages.ui.modals',
            'Kronos.pages.ui.grid',
            'Kronos.pages.ui.alerts',
            'Kronos.pages.ui.progressBars',
            'Kronos.pages.ui.notifications',
            'Kronos.pages.ui.tabs',
            'Kronos.pages.ui.slider',
            'Kronos.pages.ui.panels',
        ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('ui', {
                url: '/ui',
                template: '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
                abstract: true,
                title: 'UI Features',
                sidebarMeta: {
                    icon: 'ion-android-laptop',
                    order: 200,
                },
            });
    }

})();