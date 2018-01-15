/* MAIN MODULE */
var app = angular.module('MainApplication', [
    "ds.clock",
    "AppFactory",
    "AppDirectives",
    "AppRouter",
    "AppConstants",
    'ngSanitize',
    'ngAnimate',
    "ngMaterial",
    "jQueryScrollbar"]); //
app.controller('MainController', function ($mdDialog, $state, $mdSidenav, $rootScope, $scope, $log, DataFactory, LoaderFactory) {
    $scope.Date = {
        weekday: moment().format('dddd'),
        day: moment().format('Do'),
        month: moment().format('MMMM'),
        year: moment().format('YYYY'),
        time: moment().format("h:mm:ss a")
    };

    console.log($state);
$scope.state = $state;
    /* Start: Loader Controls */
    /*  Description
        LoaderFactory - Factory for Loading States.
        Properties:
            State           :   Boolean     :   Defines the current state
            SetState(state) :   Function    :   Sets new state of State
    */
    $scope.MasterPageData = {
        dashboardTitle:"Test Dashboard"
    }

    $scope.UserProfile = {
        fname: "John",
        lname: "Doe",
        email: "j.doe",
        emailExtension:"@dxc.com"
    }
    $scope.LoadState = LoaderFactory;
    LoaderFactory.SetState(false);
    /* End: Loader Controls */

});