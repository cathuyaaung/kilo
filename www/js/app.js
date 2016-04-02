// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('kilo', ['ionic', 'kilo.controllers', 'kilo.services'])

.run(
  ['$ionicPlatform','$rootScope','$state','AppValue',  
  function($ionicPlatform,$rootScope,$state,AppValue) {
    $ionicPlatform.ready(
        function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    
     $rootScope.$on('$stateChangeStart', function (ev, to, toParams, from, fromParams) { 
         console.log(to);  
         console.log(AppValue);
         //console.log(fromParams);
        /*                  
        if (to.name !== 'login' && to.name !== 'tab.dash' && $rootScope.loggedInUser === undefined )
        { 
            ev.preventDefault();         
            $state.go('login',{to : to.name});
        } */ 
     });
        
}])
//.constant("FBURL","https://kilo.firebaseio.com/")
.constant("APPCONFIG",
    {        
        URL : "http://kiloheroapi.flansoft.com/",
        DEBUG : true 
    }
)
.value("AppValue", {
    tabBrowse : '#/tab/dash',
    tabBuySell :'#/tab/sell',
    tabChat: '#/tab/chats',
    tabAccount : '#/tab/account'
})
.config(
    ['$stateProvider', '$urlRouterProvider',
   function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    controller : 'TabCtrl',
    templateUrl: 'templates/tabs.html'
  })
  // Each tab has its own nav history stack:
  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })
  .state('tab.dashdetails', { 
    url: '/dashdetails/:routeId/:routeType',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash-details.html',
        controller: 'DashDetailsCtrl'
      }
    }
  })
  .state('tab.dashdetailspost', { 
    url: '/dashdetailspost/:postId',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash-details-post.html',
        controller: 'DashDetailsPostCtrl'
      }
    }
  })
    .state('tab.sell', {
    //url: '/sell/:routeId/:routeType',
    url: '/sell',
    views: {
      'tab-sell': {
        templateUrl: 'templates/tab-sell.html',
        controller: 'SellCtrl'
      }
    }
  })
  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })
  .state('login', {
    url: '/login/:to',
    views: {
      '': {
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

}]);

angular.module('kilo.controllers', []);

angular.module('kilo.services', []);
