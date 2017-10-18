(function() {
  'use strict';

  angular.module('Kronos.pages.compromisos.listadoCompromisos')
    .controller('GestionCompromisosCtrl', function($scope, financieraRequest) {
      var self = this;

      //grid para mostrar los impuestos y descuentos existentes
      self.gridOptions = {
        paginationPageSizes: [5, 10, 15, 20, 50],
        paginationPageSize: 5,
        enableRowSelection: true,
        enableRowHeaderSelection: false,
        enableFiltering: true,
        enableHorizontalScrollbar: 0,
        enableVerticalScrollbar: 0,
        useExternalPagination: false,
        enableSelectAll: false,
        columnDefs: [{
            field: 'Vigencia',
            displayName: ('Vigencia'),
            headerCellClass: $scope.highlightFilteredHeader + 'text-center text-info',
            width: '7%'
          },
          {
            field: 'Objeto',
            displayName: ('Objeto'),
            headerCellClass: $scope.highlightFilteredHeader + 'text-center text-info',
            width: '50%'
          },
          {
            field: 'FechaInicio',
            displayName: ('Inicio'),
            headerCellClass: $scope.highlightFilteredHeader + 'text-center text-info',
            width: '10%'
          },
          {
            field: 'FechaFin',
            displayName: ('Fin'),
            headerCellClass: $scope.highlightFilteredHeader + 'text-center text-info',
            width: '10%'
          },
          {
            field: 'EstadoCompromiso.Nombre',
            displayName: ('Estado'),
            headerCellClass: $scope.highlightFilteredHeader + 'text-center text-info',
            width: '7%'
          },
          {
            field: 'TipoCompromisoTesoral.Nombre',
            displayName: ('Tipo'),
            headerCellClass: $scope.highlightFilteredHeader + 'text-center text-info',
            width: '8%'
          },
          {
            visible:false,
            field: 'TipoCompromisoTesoral.CategoriaCompromiso.Nombre',
            displayName: ('Tipo'),
            headerCellClass: $scope.highlightFilteredHeader + 'text-center text-info',
            width: '8%'
          },
          {
            name: ('OPCIONES'),
            enableFiltering: false,
            width: '8%',
            cellTemplate: '<center>' +
              '<a href="" class="editar" ng-click="grid.appScope.crearPlan.mod_editar(row.entity);grid.appScope.editar=true;" data-toggle="modal" data-target="#modalform">' +
              '<i data-toggle="tooltip" title="{{\'BTN.EDITAR\' }}" class="fa fa-cog fa-lg" aria-hidden="true"></i></a> ' +
              '</center>'
          }
        ]
      };

      //opciones extras para el control del grid
      self.gridOptions.multiSelect = false;
      self.gridOptions.modifierKeysToMultiSelect = false;
      self.gridOptions.enablePaginationControls = true;
      self.gridOptions.onRegisterApi = function(gridApi) {
        self.gridApi = gridApi;
        gridApi.selection.on.rowSelectionChanged($scope, function() {
          self.compromiso = self.gridApi.selection.getSelectedRows()[0];
        });
      };


      self.cargar = function() {
        financieraRequest.get("compromiso", $.param({
          limit: -1,
          query: "TipoCompromisoTesoral.CategoriaCompromiso.Nombre:"+self.filtro_categoria.Nombre
        })).then(function(response) {
          self.gridOptions.data = response.data;
        });
      };

      $scope.$watch('gestionCompromisos.filtro_categoria',function(){
        if (self.filtro_categoria != null) {
          self.gridfield=true;
          self.cargar();
        } else {
          self.gridfield=false;
        }
      },true);



    });

})();
