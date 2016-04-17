(
    function(app){
        'user strict';
        
        app.factory('postService',postService);
        
        postService.$inject=['APPCONFIG','apiService'];
        
        function postService(APPCONFIG,apiService){    
                 
            return {
                getPosts : getPosts,
                getRoutePosts : getRoutePosts,
                savePost : savePost            
            }       
            
            function getPosts(success,failure){
                return apiService.get(APPCONFIG.URL + 'posts', null, success, failure);             
            }
            
            function getRoutePosts(routeId,routeType,success,failure){                
                if (APPCONFIG.DEBUG){
                    return apiService.get("js/service/data/posts.js",null,success,failure);    
                }else {
                    return apiService.get(APPCONFIG.URL + 'posts/' + routeType + '/' + routeId , null, success, failure);                        
                }                           
            }
            
            function savePost(data,success,failure){
                return apiService.post(APPCONFIG.URL + 'posts' , data, success, failure);             
            }
        }               
    }    
)(angular.module("kilo.services"));