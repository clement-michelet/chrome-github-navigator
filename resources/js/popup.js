"use strict";

import Synchronization from "resources/js/modules/synchronization";

(function (chrome, document, console) {
    "use strict";

    document.getElementById('synchronize').addEventListener('click', function (event) {
        document.getElementById('synchronize-progress').classList.add('active-state');

        Synchronization.Manager.start(function () {
            document.getElementById('synchronize-progress').classList.remove('active-state');

            var notification = document.querySelector('.mdl-js-snackbar');
            notification.MaterialSnackbar.showSnackbar(
                {
                    message: chrome.i18n.getMessage('synchronization_succeed'),
                    timeout: 1500
                }
            );

        });
    });

    document.getElementById('settings').addEventListener('click', function () {
        chrome.runtime.openOptionsPage();
    });
})(chrome, document, console);
