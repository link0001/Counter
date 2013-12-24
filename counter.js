/**
 * Created by lingan on 10/19/13.
 */
'use strict'

var counterApp = angular.module('counterApp', []);

counterApp.controller('pageCtrl', function($scope){
    $scope.items=[];
    $scope.newCounter=function() {
        $scope.items.push({});
    };
});

counterApp.controller('counterCtrl', function($scope){
    $scope.count = 0;

    $scope.add = function() {
        $scope.count++;
    };

    $scope.subtract = function() {
        $scope.count--;
    };
});