(
    function(app){
        'use strict';
        
         app.controller('DashDetailsCtrl', DashDetailsCtrl);
         
         DashDetailsCtrl.$inject = ['$rootScope','$scope','$state','$stateParams','AppValue','postService','routeService'];
         
         function DashDetailsCtrl($rootScope,$scope,$state,$stateParams,AppValue,postService,routeService){
             
             var _sc = $scope.data = { 
               posts : [],
               routes : [],
               selectedRoute : {},
               routeId : $stateParams.routeId,
               routeType : ($stateParams.routeType === '' ? 'wts' : $stateParams.routeType),                       
            }
             
            $scope.changeType = changeType;
            $scope.changeRoute = changeRoute;
            $scope.changeDate = changeDate;
            $scope.selectPost = selectPost;
                         
            $scope.$on('$ionicView.enter', function(e) {                
                if(_sc.routes.length === 0){
                    loadRoutes();    
                }
                loadPosts();
                AppValue.tabBrowse = "tab.dashdetails";                                
            });
    
            function changeType(v){
                console.log(v);
                _sc.routeType = v;
                loadPosts();
            }
            function changeRoute(){
                console.log(_sc.selectedRoute);
            }
            function changeDate(){
                
            }
            function selectPost(v){
                $state.go('tab.dashdetailspost',{postId:v.id});
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
                
                for (var index = 0; index < _sc.routes.length; index++) {
                    var element =  _sc.routes[index];
                   
                    if(element.id == _sc.routeId ){
                        element.selected = true;                        
                        _sc.selectedRoute = element;
                        break;                    
                    } else {
                        element.selected = false;                    
                    }                    
                }                                
           }
            function failed(params) {
                
            }                        
            
            
         }
    }
) 
(angular.module('kilo.controllers'));