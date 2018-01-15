/* Factory */
var appFactory = angular.module('AppFactory', []); //
appFactory.factory('DataFactory', ['$http', function ($http) {
    function makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

        for (var i = 0; i < 3; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
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

        //Get Map Script
        GetMapScript: function (key) {
            return $.getScript("https://code.highcharts.com/mapdata/" + key + '.js');
        },

    }
}]);
appFactory.factory('LoaderFactory', function ($http) {
    this.State = false;
    return {
        SetState: function (state) {
            this.State = state;
            console.log(this);
            console.log("Called and Set to : ",state)
        }
    }
});
appFactory.factory('ErrorFactory', function ($http) {
    return {
        State: false,
        Reason: "",
        SetState: function (state, reason) {
            console.log(reason);
            this.State = state;
            this.Reason = reason;
        }
    }

});
