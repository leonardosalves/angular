  angular
      .module("meuModulo", ["ngRoute"])
      .config(function ($routeProvider) {
          $routeProvider
              .when('/', {
                  templateUrl: 'listar.html'
              })
              .when('/acao/adiciona', {
                  templateUrl: 'adiciona.html',
                  controller: 'CtrlAdiciona'
              })
              .when('/acao/:index', {
                  templateUrl: 'editar.html',
                  controller: 'CtrlEditar'
              });
      })
      .controller('CtrlModulo', ['$scope', function (s) {
          s.carros = [{
                  name: "HB20",
                  brand: "HYUNDAY"
            },
              {
                  name: "Veloster",
                  brand: "HYUNDAY"
            },
              {
                  name: "SantaFé",
                  brand: "HYUNDAY"
            },
              {
                  name: "i3",
                  brand: "HYUNDAY"
            },
              {
                  name: "Murano",
                  brand: "Nissan"
            },
              {
                  name: "Civic",
                  brand: "Honda"
            },
              {
                  name: "Fit",
                  brand: "Honda"
            },
              {
                  name: "Versa",
                  brand: "Nissan"
            },
              {
                  name: "Frontier",
                  brand: "Honda"
            }
        ];

          s.remove = function (index) {
              s.carros.splice(index, 1);
          };
    }])
      .controller('CtrlAdiciona', ['$scope', function (s) {
          s.add = function () {
              s.carros.push(s.carro);
              s.carro = "";
              s.result = "<div class='alert alert-success' role='alert'>Registro adicionado com successo!</div>";
          };
    }])
      .controller('CtrlEditar', ["$scope", function (s, $routeParams) {
          s.carro = s.carros[$routeParams.index];

    }]);
