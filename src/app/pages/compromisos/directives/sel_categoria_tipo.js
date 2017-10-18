(function(){
  'use strict';

  /**
   * @ngdoc directive
   * @name financieraClienteApp.directive:cuentasContables/listaPlanesCuentas
   * @description
   * # cuentasContables/listaPlanesCuentas
   */
  angular.module('Kronos.pages.compromisos')
      .directive('selCategoriaTipo', function(financieraRequest) {
          return {
              restrict: 'E',
              scope: {
                  categoria: '=?',
                  tipo: '=?'
              },
              templateUrl: 'app/pages/compromisos/directives/sel-categoria-tipo.html',
              controller: function($scope, $attrs) {
                var self=this;
                self.sel_tipo='tipo' in $attrs;                
                self.cargar_categorias = function() {
                  financieraRequest.get("categoria_compromiso", $.param({
                    sortby: "Id",
                    order: "asc",
                    limit: 0
                  })).then(function(response) {
                    self.categorias = response.data;
                  });
                };
                self.cargar_categorias();

              },
              controllerAs: 'd_selCategoriaTipo'
          };
      });

})();
