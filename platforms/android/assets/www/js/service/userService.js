(
    function(app){
        'user strict';
        
        app.factory('userSerivce',userSerivce);
        
        userSerivce.$inject=['APPCONFIG','apiService'];
        
        function userSerivce(APPCONFIG,apiService){    
                 
            return {
                getUser : getUser            
            }       
            
            function getUser(id,success,failure){
                return apiService.get(APPCONFIG.URL + 'Users/' + id, null, success, failure);             
            }
        }               
    }    
)(angular.module("kilo.services"));