
angular.module('kilo', [
    'ionic',
    'ngCordova',
    'kilo.controllers', 
    'kilo.services',
    'angular-meteor',
    'angularMoment'
    ])
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
                       
        if (to.name !== 'login' && to.name !== 'tab.dash' && to.name !== 'tab.dashdetails'
         && to.name !== 'tab.dashdetailspost' && typeof(AppValue.auth) === 'undefined' )
        { 
            ev.preventDefault();         
            //$state.go('login',{to : to.name});
        } 
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
    auth : undefined, //{token : 'xxxxxxxxxxxxxxxxxxx'},
    tabBrowse : '#/tab/dash',
    tabBuySell :'#/tab/sell',
    tabChat: '#/tab/chats',
    tabAccount : '#/tab/account',
    routeTypes : [{value : 'wtb', desc : 'Want to Buy'},{value : 'wts' , desc : 'Want to sell'} ]
});


angular.module('kilo.controllers', []);

angular.module('kilo.services', []);
