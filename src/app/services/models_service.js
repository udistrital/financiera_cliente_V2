'use strict';

angular.module('Kronos')
    .factory('modelsRequest', function($http) {
        var path = "scripts/models/";
        // Public API here
        return {
            get: function(tabla) {
                return $http.get(path + tabla + ".json");
            }
        };
    });