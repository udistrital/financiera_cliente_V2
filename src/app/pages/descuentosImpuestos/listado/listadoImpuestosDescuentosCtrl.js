'use strict';


angular.module('BlurAdmin.pages.descuentosImpuestos.listadoImpuestosDescuentos')
  .controller('GestionDescuentosCtrl', function($scope, financieraRequest) {
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
          field: 'CuentaContable.Codigo',
          displayName: ('CODIGO'),
          headerCellClass: $scope.highlightFilteredHeader + 'text-center text-info',
          width: '15%'
        },
        {
          field: 'CuentaContable.Nombre',
          displayName: ('NOMBRE'),
          headerCellClass: $scope.highlightFilteredHeader + 'text-center text-info',
          width: '30%'
        },
        {
          field: 'TarifaUvt',
          displayName: ('UVT'),
          headerCellClass: $scope.highlightFilteredHeader + 'text-center text-info',
          width: '5%'
        },
        {
          field: 'Porcentaje',
          displayName: ('PORCENTAJE'),
          headerCellClass: $scope.highlightFilteredHeader + 'text-center text-info',
          width: '9%'
        },
        {
          field: 'Deducible',
          displayName: ('DEDUCIBLE'),
          headerCellClass: $scope.highlightFilteredHeader + 'text-center text-info',
          cellTemplate: '<center><input type="checkbox" ng-checked="row.entity.Deducible" disabled></center>',
          width: '8%'
        },
        {
          field: 'InformacionPersonaJuridica',
          displayName: ('PROVEEDOR'),
          headerCellClass: $scope.highlightFilteredHeader + 'text-center text-info',
          width: '15%'
        },
        {
          field: 'TipoCuentaEspecial.Nombre',
          displayName: ('TIPO'),
          headerCellClass: $scope.highlightFilteredHeader + 'text-center text-info',
          width: '8%'
        },
        {
          name: ('OPCIONES'),
          enableFiltering: false,
          width: '10%',
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
        self.cuenta = self.gridApi.selection.getSelectedRows()[0];
      });
    };

    /**
     * @ngdoc function
     * @name financieraClienteApp.controller:GestionDescuentosCtrl#cargar
     * @methodOf financieraClienteApp.controller:GestionDescuentosCtrl
     * @description
     * Se realiza la carga de los descuentos e impuestos a traves del servicio {@link financieraService.service:financieraRequest financieraRequest}
     * que retorna la informacion de la cuenta contable y la del descuento o impuesto.
     */
    self.cargar = function() {
      financieraRequest.get("cuenta_especial", $.param({
        limit: -1
      })).then(function(response) {
        self.gridOptions.data = response.data;
      });
    };

    self.cargar();

  });
