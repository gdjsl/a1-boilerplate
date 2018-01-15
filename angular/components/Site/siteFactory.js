/* Template Factory */
angular.module('MainApplication').factory('SiteDataFactory', ['$http', function ($http) {
    return {
        //Samples
        SampleGET: function () {
            return $http({
                url: "url/sampleget",
                method: 'GET', cache: false
            });
        },
        SamplePOST: function (obj) {
            return $http({
                method: "POST",
                url: "url/samplepost",
                data: obj,
            });
        },

        LoadComponentsJson: function () {
            return $http({
                url: "api/Components.json",
                method: 'GET', cache: false
            });
        },
    }
}]);
