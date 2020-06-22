(function () {
    'use strict';
    
    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        // Default redirect
        $urlRouterProvider.otherwise('/');

        // UI states
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/home/home.html'
            })
            .state('categories', {
                url: '/categories',
                templateUrl: 'src/categories/categories.html',
                controller: 'CategoriesController as categoriesCtrl',
                resolve: {
                    categories: ['MenuDataService', function(MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })
            .state('items', {
                url: '/items/{shortName}',
                templateUrl: 'src/items/items.html',
                controller: 'ItemsController as itemsCtrl',
                resolve: {
                    items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
                        return MenuDataService.getItemsForCategory($stateParams.shortName);
                    }]
                }
            });
        
    }
    
})();