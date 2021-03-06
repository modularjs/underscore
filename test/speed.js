require([
    'underscore/collections/each',
    'underscore/collections/map',
    'underscore/collections/sortBy',
    'underscore/collections/pluck',
    'underscore/arrays/range',
    'underscore/arrays/uniq',
    'underscore/arrays/intersection',
    'underscore/arrays/flatten',
    'underscore/objects/keys',
    'underscore/objects/values',
    'underscore/objects/isEqual',
    'underscore/utility/times'
], function (each, map, sortBy, pluck, range, uniq, intersection, flatten, keys, values, isEqual, times) {
    "use strict";

    var _ = function (obj) {
        if (obj instanceof _) return obj;
        if (!(this instanceof _)) return new _(obj);
        this._wrapped = obj;
        this.each = each;
    };

    _.each = each;
    _.map = map;
    _.times = times;
    _.sortBy = sortBy;
    _.range = range;
    _.pluck = pluck;
    _.uniq = uniq;
    _.keys = keys;
    _.values = values;
    _.isEqual = isEqual;
    _.intersection = intersection;
    _.flatten = flatten;

    (function() {

        var numbers = [];
        for (var i=0; i<1000; i++) numbers.push(i);
        var objArray = _.map(numbers, function(n){ return {num : n}; });
        var bigObj = {};
        _.times(1000, function(n){ bigObj['key' + n] = n; });
        var randomized = _.sortBy(numbers, function(){ return Math.random(); });
        var deep = _.map(_.range(100), function() { return _.range(1000); });

        JSLitmus.test('_.each()', function() {
            var timesTwo = [];
            _.each(numbers, function(num){ timesTwo.push(num * 2); });
            return timesTwo;
        });

        JSLitmus.test('_(list).each()', function() {
            var timesTwo = [];
            _(numbers).each(function(num){ timesTwo.push(num * 2); });
            return timesTwo;
        });

        JSLitmus.test('jQuery.each()', function() {
            var timesTwo = [];
            jQuery.each(numbers, function(){ timesTwo.push(this * 2); });
            return timesTwo;
        });

        JSLitmus.test('_.map()', function() {
            return _.map(objArray, function(obj){ return obj.num; });
        });

        JSLitmus.test('jQuery.map()', function() {
            return jQuery.map(objArray, function(obj){ return obj.num; });
        });

        JSLitmus.test('_.pluck()', function() {
            return _.pluck(objArray, 'num');
        });

        JSLitmus.test('_.uniq()', function() {
            return _.uniq(randomized);
        });

        JSLitmus.test('_.uniq() (sorted)', function() {
            return _.uniq(numbers, true);
        });

        JSLitmus.test('_.sortBy()', function() {
            return _.sortBy(numbers, function(num){ return -num; });
        });

        JSLitmus.test('_.isEqual()', function() {
            return _.isEqual(numbers, randomized);
        });

        JSLitmus.test('_.keys()', function() {
            return _.keys(bigObj);
        });

        JSLitmus.test('_.values()', function() {
            return _.values(bigObj);
        });

        JSLitmus.test('_.intersection()', function() {
            return _.intersection(numbers, randomized);
        });

        JSLitmus.test('_.range()', function() {
            return _.range(1000);
        });

        JSLitmus.test('_.flatten()', function() {
            return _.flatten(deep);
        });

        JSLitmus.test('_.flatten() (shallow)', function() {
            return _.flatten(deep, true);
        });
    })();

});