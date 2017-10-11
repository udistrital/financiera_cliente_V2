'use strict';

/**
 * @ngdoc directive
 * @name financieraClienteApp.directive:btnRegistro
 * @description
 * # btnRegistro
 */
angular.module('Kronos')
    .directive('btnRegistro', function() {
        return {
            restrict: 'E',
            scope: {
                fila: '=',
                funcion: '&',
                grupobotones: '='
            },
            templateUrl: 'app/directives/btn/btn-registro.html',
            link: function(scope, elm, attrs) {
                //console.log(scope);
            }
        };
    });