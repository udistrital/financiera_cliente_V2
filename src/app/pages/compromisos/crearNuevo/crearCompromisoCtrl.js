(function(){

  'use strict';


  angular.module('Kronos.pages.compromisos.crearCompromiso')
    .controller('crearCompromisoCtrl', function (financieraRequest, $translate) {
      var self = this;

      self.nueva_categoria={};
      self.nuevo_compromiso={};
      self.nuevo_tipo={
        Activo:true
      };

      self.categorias=[];
      self.tipos=[];
      self.unidades_ejecutoras=[];
      self.estados_compromiso=[];


      self.cargar_unidades_ejecutoras=function(){
        financieraRequest.get("unidad_ejecutora",$.param({
          sortby: "Id",
          order: "asc",
          limit:0
        })).then(function(response){
          self.unidades_ejecutoras=response.data;
        });
      };

      self.cargar_estados_compromisos=function(){
        financieraRequest.get("estado_compromiso",$.param({
          sortby: "Id",
          order: "asc",
          limit:0
        })).then(function(response){
          self.estados_compromiso=response.data;
        });
      };



      self.crear_categoria=function(){
        swal({
          title: 'Nueva Categoria!',
          text: "Deseas crear una nueva categoria?",
          type: 'info',
          showCancelButton: true,
          confirmButtonClass: 'btn btn-success',
          cancelButtonClass: 'btn btn-danger',
          confirmButtonText: 'Aceptar',
          cancelButtonText: 'Cancelar',
          buttonsStyling: false
        }).then(function() {
          financieraRequest.post('categoria_compromiso',self.nueva_categoria).then(function(response){
            console.log("categoria agregada",response.data);
            swal("",$translate.instant(response.data.Code), response.data.Type);
            if (response.data.Type=='success') {
              self.nueva_categoria={};
              self.cargar_categorias=!self.cargar_categorias;
            }
          });
        });
        //.then(function(){});
        //self.categorias.push(self.nueva_categoria);

      };

      self.crear_tipo=function(){

        swal({
          title: 'Nuevo Tipo!',
          text: "Deseas crear un nuevo Tipo?",
          type: 'info',
          showCancelButton: true,
          confirmButtonClass: 'btn btn-success',
          cancelButtonClass: 'btn btn-danger',
          confirmButtonText: 'Aceptar',
          cancelButtonText: 'Cancelar',
          buttonsStyling: false
        }).then(function() {
          financieraRequest.post('tipo_compromiso_tesoral',self.nuevo_tipo).then(function(response){
            swal("",$translate.instant(response.data.Code), response.data.Type);
            if (response.data.Type=='success') {
              self.nuevo_tipo={
                Activo:true
              };
              self.cargar_categorias=!self.cargar_categorias;
            }
          });
        });

      };

      self.crear_compromiso=function(){
        self.nuevo_compromiso.FechaModificacion= new Date();
        financieraRequest.post('compromiso',self.nuevo_compromiso).then(function(response){
          console.log("compromiso agregado",response.data);
          self.nuevo_compromiso={};
        });
      };

      self.cancelar=function(form){
        form.$setPristine();
        form.$setUntouched();
      };

      self.cargar_unidades_ejecutoras();
      self.cargar_estados_compromisos();
    })

})();
