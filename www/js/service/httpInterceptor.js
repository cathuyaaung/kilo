(
    function(app){
        'user strict';
        
        app.factory('httpInterceptor',httpInterceptor);
        
        httpInterceptor.$inject=['AppValue'];
        
        function httpInterceptor(AppValue){    
                 
           return {
                request: function(config) {
                    if (typeof(AppValue.auth) !== 'undefined'){
                       // config.headers['x-kilo-token'] = AppValue.auth.token;    
                    }else{
                       // config.headers['x-kilo-token'] = "xxx";
                    }
                    return config;
                },

                requestError: function(config) {
                    return config;
                },

                response: function(res) {
                    return res;
                },

                responseError: function(res) {
                    return res;
                }
            }       
            
            
        }               
    }    
)(angular.module("kilo.services"));