// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aP7aF":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d7fe96c059a40e7a";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lRBv":[function(require,module,exports) {
var _declarationJs = require("./declaration.js");
var _handlersJs = require("./handlers.js");
// Модальное окно вкл и выкл, кнопка add
(0, _declarationJs.buttonAddTodoElement).addEventListener("click", function() {
    if ((0, _declarationJs.counterInProgressElement).textContent != 2) (0, _declarationJs.modalWindowAddElement).classList.toggle("window-hide");
    else alert("\u041F\u0440\u0435\u0432\u044B\u0448\u0435\u043D\u043D\u043E \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0434\u0435\u043B!!!!!!");
});
// Спрятать модальное окно и сделать ресет формы, кнопка cancel в модалке
(0, _declarationJs.buttonCancelTodoElement).addEventListener("click", function() {
    (0, _declarationJs.modalWindowAddElement).classList.toggle("window-hide");
    (0, _declarationJs.formElement).reset();
});
// Подтверждение и рендеринг TODO, кнопка confirm
(0, _declarationJs.buttonConfirmTodoElement).addEventListener("click", (0, _handlersJs.handleMakeTodo));
// Делегирование на блок TODO Task, кнопки: Edit, Delete, Select
(0, _declarationJs.todoBlockElement).addEventListener("click", (0, _handlersJs.handleChangingTodoTask));
// Делегирование на блок In progress, кнопки: Edit, Delete, Select
(0, _declarationJs.todoInProgressElement).addEventListener("click", (0, _handlersJs.handleChangingTodoTask));
// Делегирование на блок In progress, кнопки: Edit, Delete, Select
(0, _declarationJs.todoDoneElement).addEventListener("click", (0, _handlersJs.handleChangingTodoTask));
// Вызов модальное окна на удаление
(0, _declarationJs.buttonDeleteAllElement).addEventListener("click", (0, _handlersJs.handleCallModalDelete));
// Отмена удаление дел
(0, _declarationJs.buttonDeleteAllCancelElement).addEventListener("click", function() {
    (0, _declarationJs.modalWindowDeleteAllElement).classList.toggle("window-hide");
});
(0, _declarationJs.buttonDeleteAllConfirmElement).addEventListener("click", (0, _handlersJs.handleDeleteAllTask));
window.onload = function() {
    setInterval(function() {
        // Seconds
        var seconds = new Date().getSeconds();
        document.getElementById("seconds").innerHTML = (seconds < 10 ? "0" : "") + seconds;
        // Minutes
        var minutes = new Date().getMinutes();
        document.getElementById("minutes").innerHTML = (minutes < 10 ? "0" : "") + minutes;
        // Hours
        var hours = new Date().getHours();
        document.getElementById("hours").innerHTML = (hours < 10 ? "0" : "") + hours;
    }, 1000);
};

},{"./declaration.js":"3LNmn","./handlers.js":"jlk9X"}],"3LNmn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buttonAddTodoElement", ()=>buttonAddTodoElement);
parcelHelpers.export(exports, "modalWindowAddElement", ()=>modalWindowAddElement);
parcelHelpers.export(exports, "buttonConfirmTodoElement", ()=>buttonConfirmTodoElement);
parcelHelpers.export(exports, "buttonCancelTodoElement", ()=>buttonCancelTodoElement);
parcelHelpers.export(exports, "inputTitleTodoElement", ()=>inputTitleTodoElement);
parcelHelpers.export(exports, "inputDiscriptionTodoElement", ()=>inputDiscriptionTodoElement);
parcelHelpers.export(exports, "todoBlockElement", ()=>todoBlockElement);
parcelHelpers.export(exports, "todoInProgressElement", ()=>todoInProgressElement);
parcelHelpers.export(exports, "selectUserElement", ()=>selectUserElement);
parcelHelpers.export(exports, "formElement", ()=>formElement);
parcelHelpers.export(exports, "counterTodoElement", ()=>counterTodoElement);
parcelHelpers.export(exports, "spaceTodoElement", ()=>spaceTodoElement);
parcelHelpers.export(exports, "spaceProgressElement", ()=>spaceProgressElement);
parcelHelpers.export(exports, "spaceDoneElement", ()=>spaceDoneElement);
parcelHelpers.export(exports, "todoDoneElement", ()=>todoDoneElement);
parcelHelpers.export(exports, "buttonDeleteAllElement", ()=>buttonDeleteAllElement);
parcelHelpers.export(exports, "counterDoneElement", ()=>counterDoneElement);
parcelHelpers.export(exports, "counterInProgressElement", ()=>counterInProgressElement);
parcelHelpers.export(exports, "modalWindowDeleteAllElement", ()=>modalWindowDeleteAllElement);
parcelHelpers.export(exports, "buttonDeleteAllConfirmElement", ()=>buttonDeleteAllConfirmElement);
parcelHelpers.export(exports, "buttonDeleteAllCancelElement", ()=>buttonDeleteAllCancelElement);
const modalWindowAddElement = document.querySelector("#window-add");
const modalWindowDeleteAllElement = document.querySelector("#window-delete");
const buttonAddTodoElement = document.querySelector("#add-todo");
const buttonConfirmTodoElement = document.querySelector("#add-confirm");
const buttonCancelTodoElement = document.querySelector("#cancel");
const buttonDeleteAllElement = document.querySelector(".todo-work__button_delete-all");
const buttonDeleteAllConfirmElement = document.querySelector(".button-delete-all-confirm");
const buttonDeleteAllCancelElement = document.querySelector(".button-delete-all-cancel");
const inputTitleTodoElement = document.querySelector("#todo-title");
const inputDiscriptionTodoElement = document.querySelector("#todo-discription");
const todoBlockElement = document.querySelector("#task");
const todoInProgressElement = document.querySelector("#in-progress");
const todoDoneElement = document.querySelector("#done");
const selectUserElement = document.querySelector("#users");
const formElement = document.querySelector(".modals");
const counterTodoElement = document.querySelector("#count-tasks");
const counterInProgressElement = document.querySelector("#count-in-progress");
const counterDoneElement = document.querySelector("#count-done");
const spaceTodoElement = document.querySelector("#workspace-task");
const spaceProgressElement = document.querySelector("#workspace-progress");
const spaceDoneElement = document.querySelector("#workspace-done");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"jlk9X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "handleChangingTodoTask", ()=>handleChangingTodoTask);
parcelHelpers.export(exports, "handleMakeTodo", ()=>handleMakeTodo);
parcelHelpers.export(exports, "handleCallModalDelete", ()=>handleCallModalDelete);
parcelHelpers.export(exports, "handleDeleteAllTask", ()=>handleDeleteAllTask);
var _declarationJs = require("./declaration.js");
var _helpersJs = require("./helpers.js");
var _storeJs = require("./store.js");
let isEdit = false;
let todoEditId;
// Поиск нужного индекса в массиве
function findTodo(id) {
    const actualTodos = (0, _storeJs.getTodos)();
    const indexTodo = actualTodos.findIndex((el)=>el.id == id);
    return actualTodos[indexTodo];
}
// Поиск нужного индекса в массиве, изменение и сохранение
function editTodo(id, newValue) {
    const actualTodos = (0, _storeJs.getTodos)();
    const indexTodo = actualTodos.findIndex((el)=>el.id == id);
    actualTodos[indexTodo] = {
        ...actualTodos[indexTodo],
        ...newValue
    };
    (0, _storeJs.setTodos)(actualTodos);
}
// Поиск нужного индекса в массиве, удаление из массива и сохранение
function deleteTodo(id) {
    const actualTodos = (0, _storeJs.getTodos)();
    const indexTodo = actualTodos.findIndex((el)=>el.id == id);
    actualTodos.splice(indexTodo, 1);
    (0, _storeJs.setTodos)(actualTodos);
}
// Подтверждение TODO и отрисовка
const handleMakeTodo = function() {
    const actualTodos = (0, _storeJs.getTodos)();
    function addSelectListener(el, selectValue = "Todo") {
        const todoElement = document.getElementById(el.id);
        const selectStageElement = todoElement.querySelector("#select-todo");
        selectStageElement.value = selectValue;
        selectStageElement.addEventListener("change", function() {
            switch(selectStageElement.value){
                case "Todo":
                    todoElement.remove();
                    editTodo(el.id, {
                        column: "Todo"
                    });
                    (0, _helpersJs.buildTemplateTodo)(el, (0, _declarationJs.spaceTodoElement));
                    addSelectListener(el, selectStageElement.value);
                    (0, _helpersJs.actualCounter)();
                    break;
                case "In progress":
                    todoElement.remove();
                    editTodo(el.id, {
                        column: "In progress"
                    });
                    (0, _helpersJs.buildTemplateTodo)(el, (0, _declarationJs.spaceProgressElement));
                    addSelectListener(el, selectStageElement.value);
                    (0, _helpersJs.actualCounter)();
                    break;
                case "Done":
                    todoElement.remove();
                    editTodo(el.id, {
                        column: "Done"
                    });
                    (0, _helpersJs.buildTemplateTodo)(el, (0, _declarationJs.spaceDoneElement));
                    addSelectListener(el, selectStageElement.value);
                    (0, _helpersJs.actualCounter)();
                    break;
                default:
                    console.log("Sorry");
            }
        });
    }
    if (!isEdit) {
        if ((0, _declarationJs.inputTitleTodoElement).value !== "" || (0, _declarationJs.inputDiscriptionTodoElement).value !== "") {
            const newId = crypto.randomUUID();
            const time = (0, _helpersJs.getActualTime)();
            const userName = (0, _declarationJs.selectUserElement).selectedIndex;
            function Todo() {
                this.id = newId;
                this.text = (0, _declarationJs.inputDiscriptionTodoElement).value;
                this.title = (0, _declarationJs.inputTitleTodoElement).value;
                this.createdAt = time;
                this.userIndex = userName;
                this.column = "Todo";
            }
            const todo = new Todo();
            actualTodos.push(todo);
            (0, _declarationJs.modalWindowAddElement).classList.toggle("window-hide");
            (0, _helpersJs.buildTemplateTodo)(todo, (0, _declarationJs.spaceTodoElement));
            addSelectListener(todo);
            (0, _helpersJs.actualCounter)();
            (0, _storeJs.setTodos)(actualTodos);
            (0, _declarationJs.formElement).reset();
            console.log(actualTodos);
        }
    } else if (findTodo(todoEditId).column == "Todo") {
        console.log("Todo");
        editTodo(todoEditId, {
            text: (0, _declarationJs.inputDiscriptionTodoElement).value,
            title: (0, _declarationJs.inputTitleTodoElement).value,
            userIndex: (0, _declarationJs.selectUserElement).selectedIndex
        });
        (0, _declarationJs.spaceTodoElement).innerHTML = ""; // Очистка колонки
        actualTodos.forEach((el)=>{
            if (el.column == "Todo") {
                (0, _helpersJs.buildTemplateTodo)(el, (0, _declarationJs.spaceTodoElement));
                addSelectListener(el);
            }
        });
        (0, _declarationJs.modalWindowAddElement).classList.toggle("window-hide");
        // counterTodoElement.textContent = actualTodos.length;
        (0, _declarationJs.formElement).reset();
        isEdit = false;
    } else if (findTodo(todoEditId).column == "In progress") {
        console.log("In progress");
        editTodo(todoEditId, {
            text: (0, _declarationJs.inputDiscriptionTodoElement).value,
            title: (0, _declarationJs.inputTitleTodoElement).value,
            userIndex: (0, _declarationJs.selectUserElement).selectedIndex
        });
        (0, _declarationJs.spaceProgressElement).innerHTML = ""; // Очистка колонки
        actualTodos.forEach((el)=>{
            if (el.column == "In progress") {
                (0, _helpersJs.buildTemplateTodo)(el, (0, _declarationJs.spaceProgressElement));
                addSelectListener(el, "In progress");
            }
        });
        (0, _declarationJs.modalWindowAddElement).classList.toggle("window-hide");
        // counterTodoElement.textContent = actualTodos.length;
        (0, _declarationJs.formElement).reset();
        isEdit = false;
    } else if (findTodo(todoEditId).column == "Done") {
        console.log("Done");
        editTodo(todoEditId, {
            text: (0, _declarationJs.inputDiscriptionTodoElement).value,
            title: (0, _declarationJs.inputTitleTodoElement).value,
            userIndex: (0, _declarationJs.selectUserElement).selectedIndex
        });
        (0, _declarationJs.spaceDoneElement).innerHTML = ""; // Очистка колонки
        actualTodos.forEach((el)=>{
            if (el.column == "Done") {
                (0, _helpersJs.buildTemplateTodo)(el, (0, _declarationJs.spaceDoneElement));
                addSelectListener(el, "Done");
            }
        });
        (0, _declarationJs.modalWindowAddElement).classList.toggle("window-hide");
        // counterTodoElement.textContent = actualTodos.length;
        (0, _declarationJs.formElement).reset();
        isEdit = false;
    }
};
// Делегирование событий на блок TODO task
const handleChangingTodoTask = function() {
    const buttonEditElement = event.target.closest(".todo-work__button_edit");
    const buttonDeleteElement = event.target.closest(".todo-work__button_delete");
    const idElement = event.target.closest(".todo-work")?.getAttribute("id");
    const todo = findTodo(idElement);
    if (buttonEditElement) {
        // Редактирование карточки
        isEdit = true;
        todoEditId = idElement;
        (0, _declarationJs.inputTitleTodoElement).value = todo.title;
        (0, _declarationJs.inputDiscriptionTodoElement).value = todo.text;
        (0, _declarationJs.modalWindowAddElement).classList.toggle("window-hide");
    }
    if (buttonDeleteElement) {
        buttonDeleteElement.closest(".todo-work").remove();
        deleteTodo(idElement);
        (0, _helpersJs.actualCounter)();
    }
};
const handleCallModalDelete = function() {
    (0, _declarationJs.modalWindowDeleteAllElement).classList.toggle("window-hide");
};
const handleDeleteAllTask = function() {
    const actualTodos = (0, _storeJs.getTodos)();
    (0, _declarationJs.spaceDoneElement).innerHTML = "";
    let newArray = actualTodos.filter((el)=>el.column !== "Done");
    (0, _storeJs.setTodos)(newArray);
    (0, _helpersJs.actualCounter)();
    (0, _declarationJs.modalWindowDeleteAllElement).classList.toggle("window-hide");
};

},{"./declaration.js":"3LNmn","./helpers.js":"hGI1E","./store.js":"9NZPX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hGI1E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildTemplateTodo", ()=>buildTemplateTodo);
parcelHelpers.export(exports, "getActualTime", ()=>getActualTime);
parcelHelpers.export(exports, "actualCounter", ()=>actualCounter);
parcelHelpers.export(exports, "actualInProgressTodo", ()=>actualInProgressTodo);
var _declarationJs = require("./declaration.js");
var _storeJs = require("./store.js");
function getActualTime() {
    const date = new Date(); // Data
    const createdAt = `${date.getHours()}:${date.getMinutes()}
  ${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}  `;
    return createdAt;
}
function actualCounter() {
    const actualTodos = (0, _storeJs.getTodos)();
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    (0, _declarationJs.counterTodoElement).textContent = 0;
    (0, _declarationJs.counterInProgressElement).textContent = 0;
    (0, _declarationJs.counterDoneElement).textContent = 0;
    actualTodos.forEach((el)=>{
        if (el.column == "Todo") {
            count1 = count1 + 1;
            (0, _declarationJs.counterTodoElement).textContent = count1;
        } else if (el.column == "In progress") {
            count2 = count2 + 1;
            (0, _declarationJs.counterInProgressElement).textContent = count2;
        } else if (el.column == "Done") {
            count3 = count3 + 1;
            (0, _declarationJs.counterDoneElement).textContent = count3;
        }
    });
}
const buildTemplateTodo = (todo, columnElement)=>{
    const { id, text, title, createdAt, userIndex } = todo;
    columnElement.insertAdjacentHTML("afterbegin", `<div class="todo-work" id="${id}">
        <p class="todo-work__title">Title: ${title}</p>
        <p class="todo-work__discription">Discription: ${text}</p>
        <p>${(0, _declarationJs.selectUserElement).options[userIndex].value}</p>
        <p>${createdAt}</p>
        <div class="todo-work__buttons">
          <button type="button" class="btn btn-primary todo-work__button_edit btn-sm">EDIT</button>
          <button type="button" class="btn btn-primary btn-sm todo-work__button_enter">
            <select name="" id="select-todo">
              <option value="Todo">Todo</option>
              <option value="In progress">In progress</option>
              <option value="Done">Done</option>
            </select>
          </button>
          <button type="button" class="btn btn-primary todo-work__button_delete btn-sm">
            DELETE
          </button>
        </div>
    </div>`);
};

},{"./declaration.js":"3LNmn","./store.js":"9NZPX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9NZPX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getTodos", ()=>getTodos);
parcelHelpers.export(exports, "setTodos", ()=>setTodos);
let todos = [];
function getTodos() {
    // Возвращаем акутальный массив
    return todos;
}
function setTodos(value) {
    // Обновление массива и запись в localStorage
    todos = value;
    window.todos = todos;
//   localStorage.setItem(todosKey, JSON.stringify(todos));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["aP7aF","8lRBv"], "8lRBv", "parcelRequire503a")

//# sourceMappingURL=index.59a40e7a.js.map
