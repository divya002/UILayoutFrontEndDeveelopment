app.controller('DeployCtrl', function ($scope) {
    $scope.count=0;
    $scope.currentLink='views/env.html';
$scope.continue=function()
{
    $scope.link=['views/env.html','views/plan.html','views/host.html','views/map.html','views/configure.html','views/summary.html'];
    $scope.count++;
    $scope.currentLink=$scope.link[$scope.count];
   
}
}); 