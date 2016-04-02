(
    function(app){
        'user strict';
        
        app.controller('LoginCtrl',LoginCtrl);
        
       //LoginCtrl.$inject = ['$rootScope','$scope','$state','$stateParams','$ionicNavBarDelegate','Auth','Users'];
        
       //function LoginCtrl($rootScope,$scope,$state,$stateParams,$ionicNavBarDelegate,Auth,Users) {
           
       LoginCtrl.$inject = ['$rootScope','$scope','$state','$stateParams','$ionicNavBarDelegate'];
        
       function LoginCtrl($rootScope,$scope,$state,$stateParams,$ionicNavBarDelegate) {
           
           var Auth = {};
           var Users = {};
   
            var _sc = $scope.data = { 
                'activeButton' : 'login',
                'user' : {
                    'userName' : '',
                    'email' : '',
                    'pass' : '',
                    'uid' : ''
                    }
                }
                
                var _toUrl = $stateParams.to;   
                
                $scope.changeScreen = changeScreen;
                $scope.facebookLogin = facebookLogin;
                $scope.goBack = goBack;
                $scope.login = login;
                $scope.signup = signup;
                
                function changeScreen(v){
                    _sc.activeButton = v;
                }
                function facebookLogin(){       
                    alert("Stay Tuned");
                    /*
                    Auth.facebookLogin()
                    .then(function(authData) {
                        console.log('Logged in successfully as: ', authData.uid);
                        console.log(authData);
                        $rootScope.loggedInUser = authData;
                    }).catch(function(error) {
                        console.log('Error: ', error);
                    });
                    */
                }
                function goBack(){
                    $state.go('tab.dash');
                }
                function login(){
                    Auth.loginWithPassword(_sc.user)
                    .then(function(authData) {            
                        $rootScope.loggedInUser = authData;                        
                        $state.go(_toUrl);            
                    }).catch(function(error) {
                        alert(error);
                    });
                }
                function signup(){
                    Auth.createUser(_sc.user).then(function() {            
                        // User created successfully, log them in
                        return Auth.loginWithPassword(_sc.user);
                    }).then(function(authData) {
                        _sc.user.uid = authData.uid;
                        Users.createUserProfile(_sc.user);            
                        $rootScope.loggedInUser = authData;
                        $state.go(_toUrl);
                    }).catch(function(error) {
                        alert(error);
                    });
                }       
            }
    }               
)
(angular.module('kilo.controllers'));