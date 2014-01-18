/**
 * Retrieve all the names of the object's properties.
 */
define(['es5/Object/keys', 'underscore/objects/has'], function (nativeKeys, has) {
    "use strict";

    // Delegates to **ECMAScript 5**'s native `Object.keys`
    return nativeKeys || function (obj) {
        if (obj !== Object(obj)) {
            throw new TypeError('Invalid object');
        }
        var keys = [];
        for (var key in obj) {
            if (has(obj, key)) {
                keys[keys.length] = key;
            }
        }
        return keys;
    };
});