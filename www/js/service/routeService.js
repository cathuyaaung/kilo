(
    function(app){
        'user strict';
        
        app.factory('routeService',routeService);
        
        routeService.$inject=['APPCONFIG','apiService'];
        
        function routeService(APPCONFIG,apiService){    
                 
            return {
                getRoutes : getRoutes            
            }       
            
            function getRoutes(success,failure){
                if (APPCONFIG.DEBUG){
                    return apiService.get("js/service/data/routes.js",null,success,failure);    
                }else {
                    return apiService.get(APPCONFIG.URL + 'route', null, success, failure);                        
                }                                            
            }
        }               
    }    
)(angular.module("kilo.services"));