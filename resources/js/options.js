(function (chrome, document, console) {
    "use strict";

    if (!document.forms['settings']) {
        console.error('Unable to find the settings form.');

        return;
    }

    var SettingsForm = {};

    /**
     * Load the settings
     * @param {HTMLFormElement} form
     */
    SettingsForm.load = function (form) {
        chrome.storage.sync.get(function (settings) {
            for (var i = 0; i < form.elements.length; i++) {
                var control = form.elements.item(i);

                if (control.name === "" || settings[control.name] === null) {
                    continue;
                }

                if (control.parentElement && control.parentElement.MaterialTextfield) {
                    control.parentElement.MaterialTextfield.change(settings[control.name]);
                }
            }
        });
    };

    /**
     * Save the settings
     * @param {HTMLFormElement} form
     */
    SettingsForm.save = function (form) {
        var settings = {};
        for (var i = 0; i < form.elements.length; i++) {
            var control = form.elements.item(i);

            if (control.name !== "") {
                settings[control.name] = control.value.trim();
            }
        }
        chrome.storage.sync.set(settings, function () {
            var notification = document.querySelector('.mdl-js-snackbar');
            notification.MaterialSnackbar.showSnackbar(
                {
                    message: chrome.i18n.getMessage('settings_notification_saved'),
                    timeout: 1500
                }
            );
        });
    };

    document.addEventListener('DOMContentLoaded', function () {
        SettingsForm.load(document.forms['settings']);
    });

    document.getElementById('undo').addEventListener('click', function () {
        SettingsForm.load(document.forms['settings']);
    });

    document.forms['settings'].addEventListener('submit', function (event) {
        SettingsForm.save(event.currentTarget);

        event.preventDefault();
        return false;
    });
})(chrome, document, console);
