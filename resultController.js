
var app=angular.module('myApp',[]);
app.controller('resultctrl',function($scope){
    $scope.result =[{name:'raju',grade:'A+'},
                    {name:'abu',grade:'A'},
                    {name:'gold',grade:'B+'}];
    $scope.final_per='65%';
});