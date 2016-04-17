(
    function(app){
        'use strict';
        
         app.controller('SellCtrl', SellCtrl);
         
         SellCtrl.$inject = ['$rootScope','$scope','$state','$stateParams','AppValue','postService','routeService'];
         
         function SellCtrl($rootScope,$scope,$state,$stateParams,AppValue,postService,routeService){
             
             var _sc = $scope.data = { 
               posts : [],
               routes : [],
               selectedRoute : {},
               routeId : $stateParams.routeId,
               routeType : ($stateParams.routeType === '' ? 'wts' : $stateParams.routeType),                       
            }
             
            $scope.changeScreen = changeScreen;
            $scope.changeRoute = changeRoute;
             
            $scope.$on('$ionicView.enter', function(e) {                
                if(_sc.routes.length === 0){
                    loadRoutes();    
                }
                loadPosts();
            });
    
           

           
            function changeScreen(v){
                _sc.routeType = v;
                loadPosts();
            }
            function changeRoute(){
                console.log(_sc.selectedRoute);
            }
            function loadPosts(){
                if(_sc.routeType === ''){
                    _sc.routeType = 'wts';
                }
                //load post from server
                postService.getRoutePosts(_sc.routeId,_sc.routeType,loadPostSuccess,failed);
            }
            function loadRoutes(){
                //load post from server
                  routeService.getRoutes(loadRouteSuccess,failed)
            }
            
            function loadPostSuccess(result){
                _sc.posts = result.data;                
            }
            function loadRouteSuccess(result){
                _sc.routes = result.data;
            }
            function failed(params) {
                
            }                        
            
            
         }
    }
) 
(angular.module('kilo.controllers'));