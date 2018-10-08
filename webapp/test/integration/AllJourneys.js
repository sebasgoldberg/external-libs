sap.ui.define([
    "sap/ui/test/Opa5",
    "./arrangements/Arrangement",
    "./navigationJourney"
], function (Opa5, Arrangement) {
    "use strict";

    Opa5.extendConfig({
        arrangements: new Arrangement(),
        viewNamespace: "cencosud.libs.external.view.",
        autoWait: true
    });
});
