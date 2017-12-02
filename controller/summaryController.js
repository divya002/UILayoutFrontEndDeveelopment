angular.module('myDeploy').controller("summaryController", function ($scope, $http, env) {
    $scope.generate = function () {
        console.log(env.depl_input);
        $http.post('http://localhost:8080/bigdecisions/config/deployment/generatedeploymentarchitecture', env.depl_input).then(
            function (response) {
                console.log(response.data);
                $scope.summaryData = response.data.result;
                $scope.summaryHosts = $scope.summaryData.hosts;
            },
            function (response) {
                console.log(response.data);
            }

        );
    }

    $scope.copyToClipboard = function () {

        alert("Copied to Clipboard!!!");
        var clip =
            "Instance Name: " + $scope.summaryData.deploymentSize + "\n" +
            " Environment: " + $scope.summaryData.environment + "\n" +
            " Instance Name: " + $scope.summaryData.instanceName+"\n";


        var head = "HostName " +
            "PortNo " +
            "UserName " +
            "InstanceName " +
            "PrivateIp ";


var data="\n"
console.log($scope.summaryHosts);
console.log("lenth"+$scope.summaryHosts.length);
for(var i=0;i<$scope.summaryHosts.length;i++)
    {
       

        var line=$scope.summaryHosts[i].host.hostName +" "+

        + $scope.summaryHosts[i].host.portNo +" "


        + $scope.summaryHosts[i].host.userName +" "

        +$scope.summaryHosts[i].host.instanceName +" "


        + $scope.summaryHosts[i].host.privateIp+"\n\n";
        
        data=data+line;
   

    }
$scope.copyData=clip+head+data;
//        console.log($scope.copyData);


    }

});
