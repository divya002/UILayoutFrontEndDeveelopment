angular.module('myDeploy').service('env', function () {
        var dm;
        var depl_input = {};
        return {
            dm,
            depl_input
        };

    })
    .controller('envController', function ($scope, $rootScope, env) {
        $scope.EnvironmentName = '';
        $scope.DeployModel = '';
        $scope.EnvironmentDescription = '';
        $scope.transfer = function () {
            env.dm = $scope.DeployModel;
            env.depl_input.envName = $scope.EnvironmentName;
            env.depl_input.envDescription = $scope.EnvironmentDescription;
            env.depl_input.envType = $scope.DeployModel;
            console.log(env.depl_input);
        }
    });
