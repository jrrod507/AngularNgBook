//var app = angular.module("MyApp").controller('MyCtrl', ['scope', 'parse', function($scope, $parse){
//        
//        $scope.$watch('expr', function(newVal, oldVal, scope){
//            if(newVal !== oldVal){
//                // Let's set up our parseFun with the expression
//                var parseFun = $parse(newVal);
//                // Get the value of the parsed expression
//                var parsedValue =  parseFun(scope);
//            }
//        });
//        
//        $scope.clock = {
//            now: new Date()
//        };
//        var updateClock = function() {
//            $scope.clock.now = new Date();
//        };
//        setInterval(function() {
//            $scope.$apply(updateClock);
//        }, 1000);
//
//        updateClock();
//}]);

var app = angular.module('MyApp', []);

app.controller('MyCtrl', function ($scope) {
    $scope.clock = {
        now: new Date()
    };

    var updateClock = function () {
        $scope.clock.now = new Date();
    };

    setInterval(function () {
        $scope.$apply(updateClock);
    }, 1000);

    updateClock();
});

app.controller('MyController2', function ($scope) {
    $scope.appName = 'App number 2';
});

app.controller('MyController3', function($scope) {
    $scope.anotherProperty = "hello world";
    
})
//angular.module('MyApp', ['capitalizeFilter']).controller('MyController2', function ($scope) {
//    $scope.appName = 'App number 2';
//});
//
//angular.module('capitalizeFilter', []).filter('capitalize', function () {
//    return function (input) {
//        return input[0].toUpperCase() + input.slice(1);
//    };
//});

