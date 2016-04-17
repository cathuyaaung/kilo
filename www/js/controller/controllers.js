angular.module('kilo.controllers', [])
/*
.controller('DashCtrl', function($rootScope,$scope,Routes) {
    $scope.$on('$ionicView.enter', function(e) {
        //console.log(_sc.routes);        
    });    
    
      var _sc = $scope.data = { 
        'routes' : Routes.all()       
       }
       
      $scope.tab = tab;
      
      function tab(obj) {
          console.log(obj);
          alert("tab " + obj.$id)
      } 
      
       //Routes.onChange(function(e){
           //console.log(e);
           //console.log($scope.data);           
       //});
                 
}) 
.controller('SellCtrl', function($rootScope,$scope) {
    $scope.$on('$ionicView.enter', function(e) {
        console.log(e);
    });    
    //$rootScope.loggedInUser = "123";
})*/
// .controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

//   $scope.chats = Chats.all();
//   $scope.remove = function(chat) {
//     Chats.remove(chat);
//   };
// })

// .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//   $scope.chat = Chats.get($stateParams.chatId);
// })

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
/*
.controller('LoginCtrl', function($rootScope,$scope,$state,$stateParams,$ionicNavBarDelegate,Auth,Users) {
   
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
       
         Auth.facebookLogin()
        .then(function(authData) {
            console.log('Logged in successfully as: ', authData.uid);
            console.log(authData);
            $rootScope.loggedInUser = authData;
        }).catch(function(error) {
            console.log('Error: ', error);
        });
       
    }
    function goBack(){
        $state.go('tab.dash');
    }
    function login(){
        Auth.loginWithPassword(_sc.user)
        .then(function(authData) {            
            $rootScope.loggedInUser = authData;
            alert(_toUrl);
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

)*/
;
