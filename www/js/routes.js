angular
  .module('kilo')
  .config(config);
 
   config.$inject = ['$stateProvider', '$urlRouterProvider','$httpProvider'];
        
function config ($stateProvider, $urlRouterProvider,$httpProvider) {

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
  $httpProvider.interceptors.push('httpInterceptor');
}