/**
 * Created by lingan on 10/19/13.
 */
'use strict'

var counterApp = angular.module('counterApp', []);

counterApp.factory('CountersService', function handler(){
    var a = [];
    return { counters: a};
});

counterApp.controller('pageCtrl', function handler($scope, CountersService){
    $scope.items=CountersService.counters;

    $scope.newCounter=function() {
        // Push a new counter on array and initialize count to 0
        CountersService.counters.push(
            {
                id : CountersService.counters.length+1,
                count : 0
            });
    };

    $scope.removeCounter=function(counter) {
        // Find and remove counter from array of counters
        var i = CountersService.counters.indexOf(counter);
        if(i != -1) {
            CountersService.counters.splice(i, 1);
        }
    }
});

counterApp.controller('counterCtrl', function handler($scope, CountersService){

    $scope.add = function(counter) {
        counter.count++;
    };

    $scope.subtract = function(counter) {
        counter.count--;
    };
});