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
            
            function getRoutePosts(posttype,route,success,failure){
                if (APPCONFIG.DEBUG){
                    return apiService.get("js/service/data/posts.js",null,success,failure);    
                }else {
                    return apiService.get(APPCONFIG.URL + 'posts/' + posttype + '/' + route , null, success, failure);                        
                }                           
            }
            
            function savePost(data,success,failure){
                return apiService.post(APPCONFIG.URL + 'posts' , data, success, failure);             
            }
        }               
    }    
)(angular.module("kilo.services"));