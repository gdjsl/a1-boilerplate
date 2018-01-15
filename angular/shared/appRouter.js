/* For Authentication and UI-Router */
var appRouter = angular.module('AppRouter', ["ui.router"]); //
appRouter.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider

        //Home Page
        .state('home', {
            data: {
                roles: []
            },
            url: "/",
            templateUrl: "angular/components/Home/home.html",
            controller: "HomeController"
        })


        //Site Page
        .state('site', {
            data: {
                roles: []
            },
            url: "/site",
            templateUrl: "angular/components/Site/site.html",
            controller: "SiteController"
        })
}]);