define([], function () {
    "use strict";

    // Escape a string for HTML interpolation.
    return function (string) {
        if (string == null) {
            return '';
        }
        return ('' + string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;');
    };
});