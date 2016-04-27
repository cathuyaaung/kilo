(
    function(app){
        'use strict';
        
         app.controller('DashDetailsPostCtrl', DashDetailsPostCtrl);
         
         DashDetailsPostCtrl.$inject = ['$ionicPlatform','$rootScope','$scope','$state','$stateParams','$cordovaDatePicker','AppValue','postService','routeService'];
         
         function DashDetailsPostCtrl($ionicPlatform,$rootScope,$scope,$state,$stateParams,$cordovaDatePicker,AppValue,postService,routeService){
             
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
                  
           
                    
                    console.log($cordovaDatePicker);
                    
                    $cordovaDatePicker.show(options).then(function(date){
                        alert(date);
                    });
                }        
            });
            
                           
            
            
         }
    }
) 
(angular.module('kilo.controllers'));