angular.module('myDeploy', ['ngClickCopy']).controller('deployController', function ($scope, $http, $rootScope) {


    $scope.count = 0;


    $scope.currentLink = 'views/env.html';
    $scope.continue = function () {

        $scope.link = ['views/env.html', 'views/plan.html', 'views/host.html', 'views/configure.html', 'views/summary.html'];
        $scope.count++;
        if ($scope.count < 5)
            $scope.currentLink = $scope.link[$scope.count];
        else {
            $scope.count = 4;
            $scope.currentLink = link[$scope.count];
        }


    }
    $scope.back = function () {


        $scope.count--;
        if ($scope.count >= 0)
            $scope.currentLink = $scope.link[$scope.count];
        else {
            $scope.count = 0;
            $scope.currentLink = link[$scope.count];
        }


    }
});
