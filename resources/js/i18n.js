(function (document, chrome) {
    "use strict";

    document.querySelectorAll('[data-i18n]').forEach(function (node) {
        var translatedValue = chrome.i18n.getMessage(node.dataset.i18n);

        node.innerHTML = translatedValue;
    });
}(document, chrome));
