var app = angular.module('myApp');

app.service('storage', function() {
    this.store = {skills:[], education:[], extraskills:[], interests:[], timeline: [], references:[]};
    this.get = function () {
        return this.store;
    }

    this.set = function (data) {
    	this.store = data;
    }
});