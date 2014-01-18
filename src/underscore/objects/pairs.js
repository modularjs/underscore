/**
 * Convert an object into a list of `[key, value]` pairs.
 */
define(['underscore/objects/keys'], function (keys) {
    "use strict";

    return function (obj) {
        var keys = keys(obj);
        var length = keys.length;
        var pairs = new Array(length);
        for (var i = 0; i < length; i++) {
            pairs[i] = [keys[i], obj[keys[i]]];
        }
        return pairs;
    };

});