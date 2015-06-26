appApp.factory('utilityFactory', function($http) {
     var promise;
     return {
          doCrossDomainGet: function(url) {
               var req = {
                    method: 'GET',
                    url: url,
               }
               $http(req).success(function(response) {
                    console.log(response);
                    return response;
               }).error(function(error) {
                    return error;
               });
          }  
     }
});