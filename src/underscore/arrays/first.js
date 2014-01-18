/**
 *
 */
define(['es5/Array/slice'], function (slice) {
    "use strict";

    // Get the first element of an array. Passing **n** will return the first N
    // values in the array. Aliased as `head` and `take`. The **guard** check
    // allows it to work with `_.map`.
    return function(array, n, guard) {
        if (array == null) {
            return void 0;
        }
        return (n == null) || guard ? array[0] : slice.call(array, 0, n);
    };
});