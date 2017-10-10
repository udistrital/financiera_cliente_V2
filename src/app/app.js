'use strict';

angular.module('Kronos', [
        'ngAnimate',
        'ui.bootstrap',
        'ui.sortable',
        'ui.router',
        'ngTouch',
        'toastr',
        'smart-table',
        "xeditable",
        'ui.slimscroll',
        'ngJsTree',
        'angular-progress-button-styles',
        'pascalprecht.translate',
        'Kronos.theme',
        'Kronos.pages',
        'financieraService.service',
        'academicaService.service'
    ])
    .config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix("");
    }]);