(
    function(app){
        'use strict';
        
         app.controller('SellCtrl', SellCtrl);
         
         SellCtrl.$inject = ['$ionicPlatform','$rootScope','$scope','$state','$stateParams','AppValue','postService','$cordovaDatePicker','routeService'];
         
         function SellCtrl($ionicPlatform,$rootScope,$scope,$state,$stateParams,AppValue,postService,$cordovaDatePicker,routeService){
             
             
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
            
            $ionicPlatform.ready(function() {
                
                  var options = {
                        date: new Date(),
                        mode: 'date', // or 'time'
                        minDate: new Date() - 10000,
                        allowOldDates: true,
                        allowFutureDates: false,
                        doneButtonLabel: 'DONE',
                        doneButtonColor: '#F2F3F4',
                        cancelButtonLabel: 'CANCEL',
                        cancelButtonColor: '#000000'
                    };
                
                $scope.openDatePicker = function(){
                  
                    alert('Calender');
                    
                    console.log($cordovaDatePicker);
                    
                    $cordovaDatePicker.show(options).then(function(date){
                        _sc.selectedDate = date;  
                        alert(date);
                    });
                }        
            });
            
           $scope.savePosts = function(){
                 alert("save Posts"+_sc.postType);
                _sc.posts.push({ 'postType':_sc.postType, 'kilo': _sc.kilo, 'price':_sc.price, 'route':_sc.route , 'currency':_sc.currency ,'date':_sc.selectedDate});		
              
                postService.savePost(_sc.posts,loadPostSuccess,failed);
                
                _sc.postType='';
                _sc.kilo='';
                _sc.price='';
               _sc.route='';
                _sc.currency='';
            }
            
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