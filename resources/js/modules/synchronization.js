var Synchronization = {};

(function (chrome, Synchronization) {
    "use strict";

    Synchronization.Manager = {};

    /**
     * Start synchronization
     *
     * @param {Function} [successCallback]
     */
    Synchronization.Manager.start = function (successCallback) {
        successCallback && successCallback();
    };
})(chrome, Synchronization);


export default {Synchronization};
