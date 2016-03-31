(
    function(app){
        'use strict';
        
         app.controller('SellCtrl', SellCtrl);
         
         SellCtrl.$inject = ['$rootScope','$scope','postService'];
         
         function SellCtrl($rootScope,$scope,postService){
            $scope.$on('$ionicView.enter', function(e) {
                console.log(e);
            });
                
            var _sc = $scope.data = { 
               'post' : []        
            }
            
            postService.getRoutes(loadSuccess,failed)
            
            
         }
    }
) 
(angular.module('kilo.controllers'));