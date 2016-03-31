(
    function (app){
        'use strict';
         
         app.controller('DashCtrl', DashCtrl);
         
         DashCtrl.$inject = ['$rootScope','$scope','routeService'];
         
         function DashCtrl($rootScope,$scope,routeService) {
                $scope.$on('$ionicView.enter', function(e) {
                    //console.log(_sc.routes);                            
                });    
               
                var _sc = $scope.data = { 
                    'routes' : []        
                }
                
                routeService.getRoutes(loadSuccess,failed)
                
                $scope.tab = tab;
                $scope.getCountry = getCountry;
                
                function tab(obj) {
                    console.log(obj);
                    alert("tab " + obj.$id)
                } 
                
                
                function loadSuccess(result)
                {
                    _sc.routes = result.data;                                        
                }
                function failed(resposne){
                    alert(response);
                }
                
                function getCountry(v){
                   switch (v) {
                       case 'SGP':
                           return 'sg';
                       case 'YGN':
                           return 'mm';
                       case 'MYS':
                           return 'my';
                       case 'THA':
                           return 'th';    
                       case 'USA':
                           return 'us';   
                       default:
                           return '';
                   }
                                       
                }
                
                
                //Routes.onChange(function(e){
                    //console.log(e);
                    //console.log($scope.data);           
                //});                            
            }                              
    }        
)
(angular.module('kilo.controllers'));