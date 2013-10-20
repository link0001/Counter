/**
 * Created by lingan on 10/19/13.
 */
'use strict'

var counterApp = angular.module('counterApp', []);

counterApp.controller('pageCtrl', function($scope){
    $scope.newCounter = function(){
        // Load an element that uses controller Ctrl
        $('<div class="singleCounter" ng-controller="counterCtrl"><button id="subtract-btn" ng-click="subtract()">-</button>{{count}}<button id="add-btn" ng-click="add()">+</button></div>').appendTo('body');
        angular.bootstrap($('.singleCounter'), ['counterApp']);
    };
});

counterApp.controller('counterCtrl', function($scope){
    $scope.count = 0;

    $scope.add = function(){
        $scope.count++;
    };

    $scope.subtract = function(){
        $scope.count--;
    };
});