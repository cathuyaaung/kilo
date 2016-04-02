(
    function(app){
        'use strict';
        
         app.controller('TabCtrl', TabCtrl);
         
         TabCtrl.$inject = ['$rootScope','$scope','$state','AppValue'];
         
         function TabCtrl($rootScope,$scope,$state,AppValue){
             
             var _sc = $scope.data = { 
                    tabBrowse : AppValue.tabBrowse,
                    tabBuySell :AppValue.tabBuySell,
                    tabChat: AppValue.tabChat,
                    tabAccount : AppValue.tabAccount                  
                }                                    
         }
    }
) 
(angular.module('kilo.controllers'));