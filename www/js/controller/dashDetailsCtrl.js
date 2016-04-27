(
    function(app){
        'use strict';
        
         app.controller('DashDetailsCtrl', DashDetailsCtrl);
         
         DashDetailsCtrl.$inject = ['$ionicPlatform','$rootScope','$scope','$state','$stateParams','$ionicModal','$cordovaDatePicker','AppValue','postService','routeService'];
         
         function DashDetailsCtrl($ionicPlatform,$rootScope,$scope,$state,$stateParams,$ionicModal,$cordovaDatePicker,AppValue,postService,routeService){
             
              $ionicPlatform.ready(function() {
                
                $scope.openDatePicker = function(){
                    
                     var options = {
                        date: new Date(),
                        mode: 'date', // or 'time'
                        minDate: new Date() ,
                        allowOldDates: true,
                        allowFutureDates: true,
                        doneButtonLabel: 'DONE',
                        doneButtonColor: '#000000',
                        cancelButtonLabel: 'CANCEL',
                        cancelButtonColor: '#000000'
                    };
                    
                    if(_sc.selectedDate !== 'All'){
                        var year = _sc.selectedDate.substr(6,4);
                        var month = _sc.selectedDate.substr(3,2) - 1;
                        var day = _sc.selectedDate.substr(0,2);
                        options.date = new Date(year,month,day);
                    }
                    
                    $cordovaDatePicker.show(options).then(function(date){
                        var day = moment(date);
                        _sc.selectedDate = day.format("DD/MM/YYYY");  
                    });
                }        
            });
             
             
             var _sc = $scope.data = { 
               posts : [],
               routes : [],
               routeTypes : AppValue.routeTypes,
               selectedRoute : {},
               routeId : $stateParams.routeId,
               selectedRouteType : ($stateParams.routeType === '' ? 'wts' : $stateParams.routeType),
               selectedRouteTypeDesc : ($stateParams.routeType === 'wts' ? 'Want to sell' : 'Want to buy'),
               selectedDate : 'All',
               barCSS : {padding : '0px' , overflow : 'hidden'},     
               contentCSS : {}                               
            }
             
            $scope.changeType = changeType;
            $scope.changeRoute = changeRoute;
            $scope.changeDate = changeDate;
            $scope.selectPost = selectPost;
            $scope.cancelModalRoute = cancelModalRoute;
            $scope.routeSelected = routeSelected;
            $scope.cancelModalRouteType = cancelModalRouteType;
            $scope.routeTypeSelected = routeTypeSelected;
             
            $scope.$on('$ionicView.enter', function(e) {                
                if(_sc.routes.length === 0){
                    loadRoutes();    
                }
                loadPosts();
                AppValue.tabBrowse = "tab.dashdetails";
                if(AppValue.platform === 'android'){
                     _sc.barCSS = {height : '50px',padding : '0px',overflow : 'hidden', 'margin-top' : '50px'};
                     _sc.contentCSS = {top : '125px'};        
                }                                 
            });
    
            function changeType(){
                console.log(AppValue.routeTypes);
                console.log(_sc.routeTypes);
                if(typeof $scope.modalRouteType == 'undefined'){
                    $ionicModal.fromTemplateUrl('templates/modalroutetype.html', {
                        scope: $scope,
                        animation: 'slide-in-up'
                    }).then(function(modal) {
                        $scope.modalRouteType = modal;
                        $scope.modalRouteType.show(); 
                   });    
                } else{
                    $scope.modalRouteType.show();    
                }
                
                //_sc.selectedRouteType = v;
                //loadPosts();
            }
            function changeRoute(){
                if(typeof $scope.modalRoute == 'undefined'){
                    $ionicModal.fromTemplateUrl('templates/modalroutes.html', {
                        scope: $scope,
                        animation: 'slide-in-up'
                    }).then(function(modal) {
                        $scope.modalRoute = modal;
                        $scope.modalRoute.show(); 
                   });    
                } else{
                    $scope.modalRoute.show();    
                }                
            }
            function changeDate(){
                $scope.openDatePicker();
            }
            function selectPost(v){
                $state.go('tab.dashdetailspost',{postId:v.id});
            }
            function loadPosts(){
                if(_sc.selectedRouteType === ''){
                    _sc.selectedRouteType = 'wts';
                }
                //load post from server
                postService.getRoutePosts(_sc.routeId,_sc.selectedRouteType,loadPostSuccess,failed);
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
            function cancelModalRoute(params) {
                $scope.modalRoute.hide();
            }
            function routeSelected(params) {
                _sc.selectedRoute = params;
                $scope.modalRoute.remove();
                $scope.modalRoute = undefined;
            }
            function cancelModalRouteType(params) {
                $scope.modalRouteType.hide();
            }
            function routeTypeSelected(params) {              
                _sc.selectedRouteType = params.value;
                _sc.selectedRouteTypeDesc = params.desc;
                $scope.modalRouteType.remove();
                $scope.modalRouteType = undefined;
            }
         }
    }
) 
(angular.module('kilo.controllers'));