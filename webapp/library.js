/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "polyfill" }]*/
import polyfill from "./lib/polyfill";

let oLibrary = sap.ui.getCore().initLibrary({
    name: "iamsoft.libs.external.polyfill",
    noLibraryCSS: true,
});

export default oLibrary;
