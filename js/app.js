angular.module("app",[])
.controller('maskCtrl',['$scope', function ($scope) {
        $scope.show = function () {
            new MaskQRCode({callback: function () {
                console.log("success");
            }});
        }
    }]);