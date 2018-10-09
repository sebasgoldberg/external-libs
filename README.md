# External Lib Definition Test
This is an example of library definition where:
- It is encapsulated an external library: babel polyfills (support for async/await).
- It is defined a custom control.

The important parts here, are the following:

- `webapp/library.js`: Basically defines and initialize the library:
```javascript
/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "polyfill" }]*/
import polyfill from "./lib/polyfill"; // Here is where are imported the babel polyfills resources.

let oLibrary = sap.ui.getCore().initLibrary({
    name: "iamsoft.libs.external.polyfill",
    noLibraryCSS: true,
});

export default oLibrary;
```

- `manifest.json`: Here we tell to UI5 that we are defining a library.
```json
    "sap.app": {
        "id": "iamsoft.libs.external.polyfill",
        "type": "library"
    }
```

- `Gruntfile.js`: Here we tell to openui5_preload task that we are defining a library (this is for the library-preload.js bundle creation).
```javascript
    openui5_preload: {
        component: {
            options: {
                resources: {
                    cwd: "transp",
                    prefix: "iamsoft/libs/external/polyfill"
                },
                dest: "<%= dir.dist %>",
                compatVersion: "1.52",
            },
            libraries: true
        }
    },
```

## Getting started

1.Install node.js (get it from [nodejs.org](http://nodejs.org/)).
  * If working behind a proxy, you need to configure it properly (HTTP_PROXY / HTTPS_PROXY / NO_PROXY environment variables)

2.Install grunt-cli globally

```sh
npm install grunt-cli -g
```

3.Clone the repository and navigate into it

```sh
git clone https://github.com/sebasgoldberg/external-libs.git
cd external-libs
```

4.Install all npm dependencies

```sh
npm install
```

5.Run grunt to lint, build and run a local server (have a look into `Gruntfile.js` to see all the tasks).

```sh
grunt
```

7.Open the app in your browser: [http://localhost:7081](http://localhost:7081)

## Some notes

1.You can code using ES8.

2.Is possible to use async/await (babel-polyfills already imported in Component).

3.Transpiled version and Dist version use different ports (see grunt file).

4.UI5 preload compatible version was set for the current LTS version: 1.52.

5.Remember to change to your own namespace.
