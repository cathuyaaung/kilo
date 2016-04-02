(
    function(app){
        'use strict';
        
         app.controller('DashDetailsPostCtrl', DashDetailsPostCtrl);
         
         DashDetailsPostCtrl.$inject = ['$rootScope','$scope','$state','$stateParams','AppValue','postService','routeService'];
         
         function DashDetailsPostCtrl($rootScope,$scope,$state,$stateParams,AppValue,postService,routeService){
             
             var _sc = $scope.data = {                
               postId : $stateParams.postId                                      
            }
             
            $scope.$on('$ionicView.enter', function(e) {                
                console.log(_sc.postId);
                AppValue.tabBrowse = "tab.dashdetailspost";                                
            });
    
           console.log($state);
                
        function failed(params) {
                
            }                        
            
            
         }
    }
) 
(angular.module('kilo.controllers'));