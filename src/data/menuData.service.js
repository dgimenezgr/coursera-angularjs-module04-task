(function () {
    'use strict';
    
    angular.module('data')
        .service('MenuDataService', MenuDataService);
    
    MenuDataService.$inject = ['$http','ApiEndpoint'];
    function MenuDataService($http, ApiEndpoint) {
        var service = this;

        /**
         * getAllCategories()
         * @returns String  JSON result with all categories
         */
        service.getAllCategories = function () {
            return $http({
                method: "GET",
                url: (ApiEndpoint + "/categories.json")
            }).then(function(result) {
                return result.data;
            });
        };

        /**
         * getItemsForCategory()
         * @param   shortName   Category short name
         * @returns String  JSON result with queried items by category
         */
        service.getItemsForCategory = function(shortName) {
            return $http({
                method: "GET",
                url: (ApiEndpoint + "/menu_items.json"),
                params: {
                    category: shortName
                }
            }).then(function(result) {
                return result.data;
            });
        };

    };
})();