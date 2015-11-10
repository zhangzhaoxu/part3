angular.module("app",[])
.directive("qrCode", function () {
        return{
            restrict:"EA",
            template:'<div id="div1"></div>',
            compile: function (ele, attrs, transclude) {
                new QRCode(document.getElementById("div1"),"www.baidu.com");
                return function (scope, ele, attrs) {
                    console.log("boom");
                }
            }
        }
    });