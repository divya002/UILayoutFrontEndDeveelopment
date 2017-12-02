angular.module('myDeploy').controller('planController', function ($scope, $http, env) {
    $scope.checkbox1 = [];
    $scope.checkbox2 = [];
    $scope.checkbox3 = [];
    $scope.checkbox4 = [];
    $scope.planTransfer = function () {
        env.depl_input.componentsList = [];
        var a = -1;
        for (var i = 0; i < $scope.checkbox1.length; i++) {

            if ($scope.checkbox1[i] != null) {
                a = a + 1;
                env.depl_input.componentsList[a] = $scope.checkbox1[i];
            }
        }

        env.depl_input.datastoreList = [];
        var b = -1;
        for (var i = 0; i < $scope.checkbox2.length; i++) {

            if ($scope.checkbox2[i] != null) {
                b = b + 1;
                env.depl_input.datastoreList[b] = $scope.checkbox2[i];
            }
        }

        env.depl_input.rdbmsDialectList = [];
        var c = -1;
        for (var i = 0; i < $scope.checkbox3.length; i++) {

            if ($scope.checkbox3[i] != null) {
                c = c + 1;
                env.depl_input.rdbmsDialectList[c] = $scope.checkbox3[i];
            }
        }

        env.depl_input.smartConnectorSourceList = [];
        var d = -1;
        for (var i = 0; i < $scope.checkbox4.length; i++) {

            if ($scope.checkbox4[i] != null) {
                d = d + 1;
                env.depl_input.smartConnectorSourceList[d] = $scope.checkbox4[i];
            }
        }
        console.log(env.depl_input);
    }
    $http.get('http://localhost:8080/bigdecisions/config/deployment/components').then(function (response) {
        $scope.Content1 = response.data;
        $scope.mainContent1 = $scope.Content1.result;


    })

    $http.get('http://localhost:8080/bigdecisions/config/deployment/datasource').then(function (response) {
        $scope.Content2 = response.data;
        $scope.mainContent2 = $scope.Content2.result;
        console.log($scope.mainContent2);

    })

    $http.get('http://localhost:8080/bigdecisions/config/deployment/rdbmsdialects').then(function (response) {
        $scope.Content3 = response.data;
        $scope.mainContent3 = $scope.Content3.result;
        console.log($scope.mainContent3);

    })

    $http.get('http://localhost:8080/bigdecisions/config/deployment/smartconnectorsources ').then(function (response) {
        $scope.Content4 = response.data;
        $scope.mainContent4 = $scope.Content4.result;
        console.log($scope.mainContent4);

    })
});
