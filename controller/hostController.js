angular.module('myDeploy').controller('hostController', function ($scope, $http, $rootScope, env) {
    $scope.options = [];
    $scope.DeploymentOption = 'b';


    $scope.discover = function () {


        var path = "http://localhost:8080/bigdecisions/config/deployment/hosts/" + env.dm + '/' + $scope.DeploymentOption;
        $http.get(path).then(function (response) {
                $scope.tableContent1 = response.data;
                $scope.mainTable = $scope.tableContent1.result;



            },
            function (response) {
                $scope.tableContent1 = response.data;
                $scope.mainTable = $scope.tableContent1.result;


            })

    }

    $scope.hostTransfer = function () {
        env.depl_input.hostList = [];
        env.depl_input.deploymentSize = $scope.DeploymentOption;
        env.depl_input.hostList = $scope.mainTable;


        console.log(env.depl_input);
    }
});
