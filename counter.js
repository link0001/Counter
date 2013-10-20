/**
 * Created by lingan on 10/19/13.
 */
'use strict'

var simpleApp = angular.module('counterApp', []);

simpleApp.controller('counterCtrl', function($scope){
    $scope.count = 0;

    $scope.add = function(){
        $scope.count++;
    };

    $scope.subtract = function(){
        $scope.count--;
    };
});