/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n  background-color: lightblue;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Roboto\";\n}\n\n.text {\n  max-width: 500px;\n}\n\nh1 {\n  font-size: 3rem;\n  text-align: center;\n  font-weight: 900;\n  text-decoration: underline;\n}\n\nh2 {\n  margin: 0;\n  font-size: 2rem;\n  font-weight: 700;\n  text-align: center;\n  margin-inline: 2rem;\n}\n\nh3 {\n  margin: 0;\n  font-weight: 400;\n  margin-inline: 3rem;\n}\n\n#boardOne {\n  display: flex;\n  flex-direction: column;\n  order: -1;\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n  margin-top: -1px;\n  margin-left: -1px;\n}\n.row .box {\n  outline: 2px solid; /* use instead of border */\n  margin-top: 1px;\n  margin-left: 1px;\n}\n\n.box {\n  border: 1px black solid;\n  width: 25px;\n  height: 25px;\n}\n\n#content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 50px;\n}\n\n.carrier {\n  height: 130px;\n  width: 130px;\n}\n.battleship {\n  height: 105px;\n  width: 105px;\n}\n.destroyer {\n  height: 80px;\n  width: 80px;\n}\n.submarine {\n  height: 80px;\n  width: 80px;\n}\n.patrolboat {\n  height: 80px;\n  width: 80px;\n}\n\n#place_carrier {\n  width: 125px;\n  height: 25px;\n  background-color: #ffbe0b;\n\n  cursor: move;\n}\n#place_battleship {\n  width: 100px;\n  height: 25px;\n  background-color: #fb5607;\n\n  cursor: move;\n}\n#place_destroyer {\n  width: 75px;\n  height: 25px;\n  background-color: pink;\n\n  cursor: move;\n}\n#place_submarine {\n  width: 75px;\n  height: 25px;\n  background-color: orangered;\n\n  cursor: move;\n}\n#place_patrolboat {\n  width: 50px;\n  height: 25px;\n  background-color: #ff006e;\n\n  cursor: move;\n}\n\n.draggable.dragging {\n  opacity: 0.5;\n}\n\n.boatBox {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid black;\n}\n\n.boatRow {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 10px;\n}\n\n#harbor {\n  order: -1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: lightblue;\n  border: black 10px solid;\n  border-radius: 32px;\n  gap: 10px;\n  padding: 10px;\n}\n\n.segment {\n  width: 25px;\n  height: 25px;\n  border: 1px solid black;\n}\n\n#segmented__carrier {\n  display: flex;\n  flex-direction: row;\n  /* margin-top: -1px;\n  margin-left: -1px; */\n}\n\n#segmented__carrier:hover {\n  cursor: grab;\n}\n\n#segmented__carrier .segment {\n  outline: 1px solid; /* use instead of border */\n  margin-top: 1px;\n  margin-left: 1px;\n  background-color: #ffbe0b;\n}\n\n#boatBox__carrier {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  /* border: 2px solid black; */\n  height: 130px;\n  width: 130px;\n}\n\n#segmented__battleship {\n  display: flex;\n  flex-direction: row;\n  margin-top: -1px;\n  margin-left: -1px;\n}\n\n#segmented__battleship:hover {\n  cursor: grab;\n}\n\n#segmented__battleship .segment {\n  outline: 1px solid; /* use instead of border */\n  margin-top: 1px;\n  margin-left: 1px;\n  background-color: #bc6c25;\n}\n\n#boatBox__battleship {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  /* border: 2px solid black; */\n  height: 105px;\n  width: 105px;\n}\n\n#segmented__destroyer {\n  display: flex;\n  flex-direction: row;\n  margin-top: -1px;\n  margin-left: -1px;\n}\n\n#segmented__destroyer:hover {\n  cursor: grab;\n}\n\n#segmented__destroyer .segment {\n  outline: 1px solid; /* use instead of border */\n  margin-top: 1px;\n  margin-left: 1px;\n  background-color: #1d3557;\n}\n\n#boatBox__destroyer {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  /* border: 2px solid black; */\n  height: 80px;\n  width: 80px;\n}\n\n#segmented__submarine {\n  display: flex;\n  flex-direction: row;\n  margin-top: -1px;\n  margin-left: -1px;\n}\n\n#segmented__submarine:hover {\n  cursor: grab;\n}\n\n#segmented__submarine .segment {\n  outline: 1px solid; /* use instead of border */\n  margin-top: 1px;\n  margin-left: 1px;\n  background-color: #8338ec;\n}\n\n#boatBox__submarine {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  /* border: 2px solid black; */\n  height: 80px;\n  width: 80px;\n}\n\n#segmented__patrolboat {\n  display: flex;\n  flex-direction: row;\n  margin-top: -1px;\n  margin-left: -1px;\n}\n\n#segmented__patrolboat:hover {\n  cursor: grab;\n}\n\n#segmented__patrolboat .segment {\n  outline: 1px solid; /* use instead of border */\n  margin-top: 1px;\n  margin-left: 1px;\n  background-color: #8ac926;\n}\n\n#boatBox__patrolboat {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  /* border: 2px solid black; */\n  height: 55px;\n  width: 55px;\n}\n\n#commander,\n#admiral {\n  align-self: center;\n  border: none;\n  padding: 1rem 1rem;\n  margin: 0;\n  text-decoration: none;\n  background: white;\n  color: #0c090a;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  text-align: center;\n  transition: background 250ms ease-in-out, transform 150ms ease;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n\n#commander:hover,\n#commander:focus {\n  background: #daf7a6;\n  transform: scale(1.05);\n}\n\n#commander:focus {\n  outline: 1px solid rgb(0, 0, 0);\n  outline-offset: -4px;\n}\n\n#commander:active {\n  transform: scale(0.95);\n}\n\n#admiral:hover,\n#admiral:focus {\n  background: #ffcccb;\n  transform: scale(1.05);\n}\n\n#admiral:focus {\n  outline: 1px solid rgb(0, 0, 0);\n  outline-offset: -4px;\n}\n\n#admiral:active {\n  transform: scale(0.95);\n}\n\n#replaceShips:hover,\n#replaceShips:focus {\n  background: white;\n  transform: scale(1.05);\n}\n\n#replaceShips:focus {\n  outline: 1px solid rgb(0, 0, 0);\n  outline-offset: -4px;\n}\n\n#replaceShips:active {\n  transform: scale(0.95);\n}\n\n#buttonBox {\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n}\n\n#buttonBoxTop {\n  display: flex;\n  flex-direction: row;\n  gap: 25px;\n}\n\n#buttonBoxBottom {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n#replaceShips {\n  align-self: center;\n  border: none;\n  padding: 1rem 1rem;\n  margin: 0;\n  text-decoration: none;\n  background: white;\n  color: #0c090a;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  text-align: center;\n  transition: background 250ms ease-in-out, transform 150ms ease;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n\n#playAgain {\n  align-self: center;\n  border: none;\n  padding: 1rem 1rem;\n  margin-top: 1rem;\n  text-decoration: none;\n  background: white;\n  color: #0c090a;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  text-align: center;\n  transition: background 250ms ease-in-out, transform 150ms ease;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n\n#playAgain:hover,\n#playAgain:focus {\n  background: white;\n  transform: scale(1.05);\n}\n\n#playAgain:focus {\n  outline: 1px solid rgb(0, 0, 0);\n  outline-offset: -4px;\n}\n\n#playAgain:active {\n  transform: scale(0.95);\n}\n\n#left {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n  background-color: lightblue;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Roboto\";\n}\n\n.text {\n  max-width: 500px;\n}\n\nh1 {\n  font-size: 3rem;\n  text-align: center;\n  font-weight: 900;\n  text-decoration: underline;\n}\n\nh2 {\n  margin: 0;\n  font-size: 2rem;\n  font-weight: 700;\n  text-align: center;\n  margin-inline: 2rem;\n}\n\nh3 {\n  margin: 0;\n  font-weight: 400;\n  margin-inline: 3rem;\n}\n\n#boardOne {\n  display: flex;\n  flex-direction: column;\n  order: -1;\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n  margin-top: -1px;\n  margin-left: -1px;\n}\n.row .box {\n  outline: 2px solid; /* use instead of border */\n  margin-top: 1px;\n  margin-left: 1px;\n}\n\n.box {\n  border: 1px black solid;\n  width: 25px;\n  height: 25px;\n}\n\n#content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 50px;\n}\n\n.carrier {\n  height: 130px;\n  width: 130px;\n}\n.battleship {\n  height: 105px;\n  width: 105px;\n}\n.destroyer {\n  height: 80px;\n  width: 80px;\n}\n.submarine {\n  height: 80px;\n  width: 80px;\n}\n.patrolboat {\n  height: 80px;\n  width: 80px;\n}\n\n#place_carrier {\n  width: 125px;\n  height: 25px;\n  background-color: #ffbe0b;\n\n  cursor: move;\n}\n#place_battleship {\n  width: 100px;\n  height: 25px;\n  background-color: #fb5607;\n\n  cursor: move;\n}\n#place_destroyer {\n  width: 75px;\n  height: 25px;\n  background-color: pink;\n\n  cursor: move;\n}\n#place_submarine {\n  width: 75px;\n  height: 25px;\n  background-color: orangered;\n\n  cursor: move;\n}\n#place_patrolboat {\n  width: 50px;\n  height: 25px;\n  background-color: #ff006e;\n\n  cursor: move;\n}\n\n.draggable.dragging {\n  opacity: 0.5;\n}\n\n.boatBox {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid black;\n}\n\n.boatRow {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 10px;\n}\n\n#harbor {\n  order: -1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: lightblue;\n  border: black 10px solid;\n  border-radius: 32px;\n  gap: 10px;\n  padding: 10px;\n}\n\n.segment {\n  width: 25px;\n  height: 25px;\n  border: 1px solid black;\n}\n\n#segmented__carrier {\n  display: flex;\n  flex-direction: row;\n  /* margin-top: -1px;\n  margin-left: -1px; */\n}\n\n#segmented__carrier:hover {\n  cursor: grab;\n}\n\n#segmented__carrier .segment {\n  outline: 1px solid; /* use instead of border */\n  margin-top: 1px;\n  margin-left: 1px;\n  background-color: #ffbe0b;\n}\n\n#boatBox__carrier {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  /* border: 2px solid black; */\n  height: 130px;\n  width: 130px;\n}\n\n#segmented__battleship {\n  display: flex;\n  flex-direction: row;\n  margin-top: -1px;\n  margin-left: -1px;\n}\n\n#segmented__battleship:hover {\n  cursor: grab;\n}\n\n#segmented__battleship .segment {\n  outline: 1px solid; /* use instead of border */\n  margin-top: 1px;\n  margin-left: 1px;\n  background-color: #bc6c25;\n}\n\n#boatBox__battleship {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  /* border: 2px solid black; */\n  height: 105px;\n  width: 105px;\n}\n\n#segmented__destroyer {\n  display: flex;\n  flex-direction: row;\n  margin-top: -1px;\n  margin-left: -1px;\n}\n\n#segmented__destroyer:hover {\n  cursor: grab;\n}\n\n#segmented__destroyer .segment {\n  outline: 1px solid; /* use instead of border */\n  margin-top: 1px;\n  margin-left: 1px;\n  background-color: #1d3557;\n}\n\n#boatBox__destroyer {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  /* border: 2px solid black; */\n  height: 80px;\n  width: 80px;\n}\n\n#segmented__submarine {\n  display: flex;\n  flex-direction: row;\n  margin-top: -1px;\n  margin-left: -1px;\n}\n\n#segmented__submarine:hover {\n  cursor: grab;\n}\n\n#segmented__submarine .segment {\n  outline: 1px solid; /* use instead of border */\n  margin-top: 1px;\n  margin-left: 1px;\n  background-color: #8338ec;\n}\n\n#boatBox__submarine {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  /* border: 2px solid black; */\n  height: 80px;\n  width: 80px;\n}\n\n#segmented__patrolboat {\n  display: flex;\n  flex-direction: row;\n  margin-top: -1px;\n  margin-left: -1px;\n}\n\n#segmented__patrolboat:hover {\n  cursor: grab;\n}\n\n#segmented__patrolboat .segment {\n  outline: 1px solid; /* use instead of border */\n  margin-top: 1px;\n  margin-left: 1px;\n  background-color: #8ac926;\n}\n\n#boatBox__patrolboat {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  /* border: 2px solid black; */\n  height: 55px;\n  width: 55px;\n}\n\n#commander,\n#admiral {\n  align-self: center;\n  border: none;\n  padding: 1rem 1rem;\n  margin: 0;\n  text-decoration: none;\n  background: white;\n  color: #0c090a;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  text-align: center;\n  transition: background 250ms ease-in-out, transform 150ms ease;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n\n#commander:hover,\n#commander:focus {\n  background: #daf7a6;\n  transform: scale(1.05);\n}\n\n#commander:focus {\n  outline: 1px solid rgb(0, 0, 0);\n  outline-offset: -4px;\n}\n\n#commander:active {\n  transform: scale(0.95);\n}\n\n#admiral:hover,\n#admiral:focus {\n  background: #ffcccb;\n  transform: scale(1.05);\n}\n\n#admiral:focus {\n  outline: 1px solid rgb(0, 0, 0);\n  outline-offset: -4px;\n}\n\n#admiral:active {\n  transform: scale(0.95);\n}\n\n#replaceShips:hover,\n#replaceShips:focus {\n  background: white;\n  transform: scale(1.05);\n}\n\n#replaceShips:focus {\n  outline: 1px solid rgb(0, 0, 0);\n  outline-offset: -4px;\n}\n\n#replaceShips:active {\n  transform: scale(0.95);\n}\n\n#buttonBox {\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n}\n\n#buttonBoxTop {\n  display: flex;\n  flex-direction: row;\n  gap: 25px;\n}\n\n#buttonBoxBottom {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n#replaceShips {\n  align-self: center;\n  border: none;\n  padding: 1rem 1rem;\n  margin: 0;\n  text-decoration: none;\n  background: white;\n  color: #0c090a;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  text-align: center;\n  transition: background 250ms ease-in-out, transform 150ms ease;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n\n#playAgain {\n  align-self: center;\n  border: none;\n  padding: 1rem 1rem;\n  margin-top: 1rem;\n  text-decoration: none;\n  background: white;\n  color: #0c090a;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  text-align: center;\n  transition: background 250ms ease-in-out, transform 150ms ease;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n\n#playAgain:hover,\n#playAgain:focus {\n  background: white;\n  transform: scale(1.05);\n}\n\n#playAgain:focus {\n  outline: 1px solid rgb(0, 0, 0);\n  outline-offset: -4px;\n}\n\n#playAgain:active {\n  transform: scale(0.95);\n}\n\n#left {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/buildButtonBox.js":
/*!*******************************!*\
  !*** ./src/buildButtonBox.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildButtonBox": () => (/* binding */ buildButtonBox)
/* harmony export */ });
let content = document.getElementById("content");

let buttonBox = document.createElement("div");
buttonBox.id = "buttonBox";
let buttonBoxTop = document.createElement("div");
buttonBoxTop.id = "buttonBoxTop";
let buttonBoxBottom = document.createElement("div");
buttonBoxBottom.id = "buttonBoxBottom";

function buildButtonBox() {
  buttonBox.appendChild(buttonBoxTop);
  buttonBox.appendChild(buttonBoxBottom);
  content.appendChild(buttonBox);
}



/***/ }),

/***/ "./src/buildHarbor.js":
/*!****************************!*\
  !*** ./src/buildHarbor.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildHarbor": () => (/* binding */ buildHarbor)
/* harmony export */ });
/* harmony import */ var _currentlyPlacingShip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currentlyPlacingShip */ "./src/currentlyPlacingShip.js");


function buildHarbor() {
  //element instantiation
  let content = document.getElementById("content");
  let harbor = document.createElement("div");
  harbor.id = "harbor";
  let boatRow1 = document.createElement("div");
  boatRow1.className = "boatRow";
  let boatRow2 = document.createElement("div");
  boatRow2.className = "boatRow";
  let boatBox__carrier = document.createElement("div");
  boatBox__carrier.id = "boatBox__carrier";
  let segmented__carrier = document.createElement("div");
  segmented__carrier.id = "segmented__carrier";
  segmented__carrier.draggable = "true";
  segmented__carrier.title = "Carrier";
  let boatBox__battleship = document.createElement("div");
  boatBox__battleship.id = "boatBox__battleship";
  let segmented__battleship = document.createElement("div");
  segmented__battleship.id = "segmented__battleship";
  segmented__battleship.draggable = "true";
  segmented__battleship.title = "Battleship";
  let boatBox__destroyer = document.createElement("div");
  boatBox__destroyer.id = "boatBox__destroyer";
  let segmented__destroyer = document.createElement("div");
  segmented__destroyer.id = "segmented__destroyer";
  segmented__destroyer.draggable = "true";
  segmented__destroyer.title = "Destroyer";
  let boatBox__submarine = document.createElement("div");
  boatBox__submarine.id = "boatBox__submarine";
  let segmented__submarine = document.createElement("div");
  segmented__submarine.id = "segmented__submarine";
  segmented__submarine.draggable = "true";
  segmented__submarine.title = "Submarine";
  let boatBox__patrolboat = document.createElement("div");
  boatBox__patrolboat.id = "boatBox__patrolboat";
  let segmented__patrolboat = document.createElement("div");
  segmented__patrolboat.id = "segmented__patrolboat";
  segmented__patrolboat.draggable = "true";
  segmented__patrolboat.title = "Patrol Boat";
  //element instantiation
  //draggables
  const draggables = document.querySelectorAll(".draggable");

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", () => {
      draggable.classList.add("dragging");
    });
    draggable.addEventListener("dragend", () => {
      draggable.classList.remove("dragging");
    });
  });
  //draggables
  //event listeners
  segmented__carrier.style.flexDirection = "row";
  segmented__carrier.addEventListener("dblclick", function () {
    if (segmented__carrier.style.flexDirection == "row") {
      segmented__carrier.style.flexDirection = "column";
      (0,_currentlyPlacingShip__WEBPACK_IMPORTED_MODULE_0__.setCarrierOrientation)(1);
    } else if (segmented__carrier.style.flexDirection == "column") {
      segmented__carrier.style.flexDirection = "row";
      (0,_currentlyPlacingShip__WEBPACK_IMPORTED_MODULE_0__.setCarrierOrientation)(0);
    }
  });
  segmented__carrier.addEventListener("dragstart", function () {
    (0,_currentlyPlacingShip__WEBPACK_IMPORTED_MODULE_0__.setCurrentlyPlacingShip)("carrier");
  });
  segmented__battleship.style.flexDirection = "row";
  segmented__battleship.addEventListener("dblclick", function () {
    if (segmented__battleship.style.flexDirection == "row") {
      segmented__battleship.style.flexDirection = "column";
      (0,_currentlyPlacingShip__WEBPACK_IMPORTED_MODULE_0__.setBattleshipOrientation)(1);
    } else if (segmented__battleship.style.flexDirection == "column") {
      segmented__battleship.style.flexDirection = "row";
      (0,_currentlyPlacingShip__WEBPACK_IMPORTED_MODULE_0__.setBattleshipOrientation)(0);
    }
  });
  segmented__battleship.addEventListener("dragstart", function () {
    (0,_currentlyPlacingShip__WEBPACK_IMPORTED_MODULE_0__.setCurrentlyPlacingShip)("battleship");
  });

  segmented__destroyer.style.flexDirection = "row";
  segmented__destroyer.addEventListener("dblclick", function () {
    if (segmented__destroyer.style.flexDirection == "row") {
      segmented__destroyer.style.flexDirection = "column";
      (0,_currentlyPlacingShip__WEBPACK_IMPORTED_MODULE_0__.setDestroyerOrientation)(1);
    } else if (segmented__destroyer.style.flexDirection == "column") {
      segmented__destroyer.style.flexDirection = "row";
      (0,_currentlyPlacingShip__WEBPACK_IMPORTED_MODULE_0__.setDestroyerOrientation)(0);
    }
  });
  segmented__destroyer.addEventListener("dragstart", function () {
    (0,_currentlyPlacingShip__WEBPACK_IMPORTED_MODULE_0__.setCurrentlyPlacingShip)("destroyer");
  });

  segmented__submarine.style.flexDirection = "row";
  segmented__submarine.addEventListener("dblclick", function () {
    if (segmented__submarine.style.flexDirection == "row") {
      segmented__submarine.style.flexDirection = "column";
      (0,_currentlyPlacingShip__WEBPACK_IMPORTED_MODULE_0__.setSubmarineOrientation)(1);
    } else if (segmented__submarine.style.flexDirection == "column") {
      segmented__submarine.style.flexDirection = "row";
      (0,_currentlyPlacingShip__WEBPACK_IMPORTED_MODULE_0__.setSubmarineOrientation)(0);
    }
  });
  segmented__submarine.addEventListener("dragstart", function () {
    (0,_currentlyPlacingShip__WEBPACK_IMPORTED_MODULE_0__.setCurrentlyPlacingShip)("submarine");
  });

  segmented__patrolboat.style.flexDirection = "row";
  segmented__patrolboat.addEventListener("dblclick", function () {
    if (segmented__patrolboat.style.flexDirection == "row") {
      segmented__patrolboat.style.flexDirection = "column";
      (0,_currentlyPlacingShip__WEBPACK_IMPORTED_MODULE_0__.setPatrolboatOrientation)(1);
    } else if (segmented__patrolboat.style.flexDirection == "column") {
      segmented__patrolboat.style.flexDirection = "row";
      (0,_currentlyPlacingShip__WEBPACK_IMPORTED_MODULE_0__.setPatrolboatOrientation)(0);
    }
  });
  segmented__patrolboat.addEventListener("dragstart", function () {
    (0,_currentlyPlacingShip__WEBPACK_IMPORTED_MODULE_0__.setCurrentlyPlacingShip)("patrolboat");
  });
  //event listeners

  for (let i = 0; i < 5; i++) {
    let segment = document.createElement("div");
    segment.className = "segment";
    segmented__carrier.appendChild(segment);
  }
  boatBox__carrier.appendChild(segmented__carrier);
  //
  for (let i = 0; i < 4; i++) {
    let segment = document.createElement("div");
    segment.className = "segment";
    segmented__battleship.appendChild(segment);
  }
  boatBox__battleship.appendChild(segmented__battleship);
  //
  boatRow1.appendChild(boatBox__carrier);
  boatRow1.appendChild(boatBox__battleship);
  //
  harbor.appendChild(boatRow1);
  //
  for (let i = 0; i < 3; i++) {
    let segment = document.createElement("div");
    segment.className = "segment";
    segmented__destroyer.appendChild(segment);
  }
  boatBox__destroyer.appendChild(segmented__destroyer);
  //
  for (let i = 0; i < 3; i++) {
    let segment = document.createElement("div");
    segment.className = "segment";
    segmented__submarine.appendChild(segment);
  }
  boatBox__submarine.appendChild(segmented__submarine);
  //
  for (let i = 0; i < 2; i++) {
    let segment = document.createElement("div");
    segment.className = "segment";
    segmented__patrolboat.appendChild(segment);
  }
  boatBox__patrolboat.appendChild(segmented__patrolboat);
  //
  boatRow2.appendChild(boatBox__destroyer);
  boatRow2.appendChild(boatBox__submarine);
  boatRow2.appendChild(boatBox__patrolboat);
  //
  harbor.appendChild(boatRow2);
  content.appendChild(harbor);
}



/***/ }),

/***/ "./src/computerFns/computerPlaceShip.js":
/*!**********************************************!*\
  !*** ./src/computerFns/computerPlaceShip.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "computerPlaceShips": () => (/* binding */ computerPlaceShips)
/* harmony export */ });
/* harmony import */ var _placeBattleship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./placeBattleship */ "./src/computerFns/placeBattleship.js");
/* harmony import */ var _placeCarrier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./placeCarrier */ "./src/computerFns/placeCarrier.js");
/* harmony import */ var _placeDestroyer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./placeDestroyer */ "./src/computerFns/placeDestroyer.js");
/* harmony import */ var _placePatrolboat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./placePatrolboat */ "./src/computerFns/placePatrolboat.js");
/* harmony import */ var _placeSubmarine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./placeSubmarine */ "./src/computerFns/placeSubmarine.js");






function computerPlaceShips(computerBoard) {
  (0,_placeCarrier__WEBPACK_IMPORTED_MODULE_1__.placeCarrier)(computerBoard);
  (0,_placeBattleship__WEBPACK_IMPORTED_MODULE_0__.placeBattleship)(computerBoard);
  (0,_placeDestroyer__WEBPACK_IMPORTED_MODULE_2__.placeDestroyer)(computerBoard);
  (0,_placeSubmarine__WEBPACK_IMPORTED_MODULE_4__.placeSubmarine)(computerBoard);
  (0,_placePatrolboat__WEBPACK_IMPORTED_MODULE_3__.placePatrolboat)(computerBoard);
}



/***/ }),

/***/ "./src/computerFns/placeBattleship.js":
/*!********************************************!*\
  !*** ./src/computerFns/placeBattleship.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "placeBattleship": () => (/* binding */ placeBattleship)
/* harmony export */ });
/* harmony import */ var _gameboardFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameboardFactory */ "./src/gameboardFactory.js");


function placeBattleship(board) {
  let length = 4;
  let isFound = false;
  let row = Math.floor(Math.random() * 10);
  let column = Math.floor(Math.random() * 10);
  let orientation = Math.floor(Math.random() * 2);

  while (isFound == false) {
    orientation = Math.floor(Math.random() * 2);
    row = Math.floor(Math.random() * 10);
    column = Math.floor(Math.random() * 10);
    isFound = true;

    //horizontal
    if (orientation == 0) {
      column = Math.floor(Math.random() * 7);
      for (let i = 0; i < length; i++) {
        if (typeof board.coordinates[row][column + i] === "object") {
          isFound = false;
        }
        if (row == 0) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isFound = false;
          }
        } else if (row == 1) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isFound = false;
          }

          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isFound = false;
          }
        } else if (row >= 2 && row <= 7) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isFound = false;
          }

          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isFound = false;
          }
        } else if (row == 8) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isFound = false;
          }
        } else if (row == 9) {
          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isFound = false;
          }
        }
        if (column == 0) {
          if (typeof board.coordinates[row][column + 1 + i] === "object") {
            isFound = false;
          }
        } else if (column == 1) {
          if (typeof board.coordinates[row][column + 1 + i] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row][column - 1] === "object") {
            isFound = false;
          }
        } else if (column >= 2 && column < 6) {
          if (typeof board.coordinates[row][column + 1 + i] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row][column - 1] === "object") {
            isFound = false;
          }
        } else if (column == 6) {
          if (typeof board.coordinates[row][column + i] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row][column - 1] === "object") {
            isFound = false;
          }
        } //column will never be greater than length (5 for carrier)
      }
    }
    if (orientation == 1) {
      row = Math.floor(Math.random() * 7);
      column = Math.floor(Math.random() * 10);
      for (let i = 0; i < length; i++) {
        if (typeof board.coordinates[row + i][column] === "object") {
          isFound = false;
        }
        if (column == 0) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isFound = false;
          }
        } else if (column == 1) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isFound = false;
          }

          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isFound = false;
          }
        } else if (column >= 2 && column <= 7) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isFound = false;
          }

          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isFound = false;
          }
        } else if (column == 8) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isFound = false;
          }
        } else if (column == 9) {
          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isFound = false;
          }
        }
        if (row == 0) {
          if (typeof board.coordinates[row + 1 + i][column] === "object") {
            isFound = false;
          }
        } else if (row == 1) {
          if (typeof board.coordinates[row + i + 1][column] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row - 1][column] === "object") {
            isFound = false;
          }
        } else if (row >= 2 && row < 6) {
          if (typeof board.coordinates[row + i + 1][column] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row - 1][column] === "object") {
            isFound = false;
          }
        } else if (row == 6) {
          if (typeof board.coordinates[row + i][column] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row - 1][column] === "object") {
            isFound = false;
          }
        } //row will never be greater than length (5 for carrier)
      }
    }
  }
  console.log(row, column, orientation, "battleship");
  board.placeShip(row, column, length, "battleship", orientation);
}



/***/ }),

/***/ "./src/computerFns/placeCarrier.js":
/*!*****************************************!*\
  !*** ./src/computerFns/placeCarrier.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "placeCarrier": () => (/* binding */ placeCarrier)
/* harmony export */ });
/* harmony import */ var _gameboardFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameboardFactory */ "./src/gameboardFactory.js");


function placeCarrier(board) {
  let length = 5;
  let isFound = false;
  let row = Math.floor(Math.random() * 10);
  let column = Math.floor(Math.random() * 10);
  let orientation = Math.floor(Math.random() * 2);

  while (isFound == false) {
    orientation = Math.floor(Math.random() * 2);
    row = Math.floor(Math.random() * 10);
    column = Math.floor(Math.random() * 10);
    isFound = true;

    //horizontal
    if (orientation == 0) {
      column = Math.floor(Math.random() * 6);
      for (let i = 0; i < 5; i++) {
        if (typeof board.coordinates[row][column + i] === "object") {
          isFound = false;
        }
        if (row == 0) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isFound = false;
          }
        } else if (row == 1) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isFound = false;
          }

          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isFound = false;
          }
        } else if (row >= 2 && row <= 7) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isFound = false;
          }

          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isFound = false;
          }
        } else if (row == 8) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isFound = false;
          }
        } else if (row == 9) {
          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isFound = false;
          }
        }
        if (column == 0) {
          if (typeof board.coordinates[row][column + 1 + i] === "object") {
            isFound = false;
          }
        } else if (column == 1) {
          if (typeof board.coordinates[row][column + 1 + i] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row][column - 1] === "object") {
            isFound = false;
          }
        } else if (column >= 2 && column < 5) {
          if (typeof board.coordinates[row][column + 1 + i] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row][column - 1] === "object") {
            isFound = false;
          }
        } else if (column == 5) {
          if (typeof board.coordinates[row][column + i] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row][column - 1] === "object") {
            isFound = false;
          }
        } //column will never be greater than length (5 for carrier)
      }
    }
    if (orientation == 1) {
      row = Math.floor(Math.random() * 6);
      column = Math.floor(Math.random() * 10);
      for (let i = 0; i < length; i++) {
        if (typeof board.coordinates[row + i][column] === "object") {
          isFound = false;
        }
        if (column == 0) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isFound = false;
          }
        } else if (column == 1) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isFound = false;
          }

          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isFound = false;
          }
        } else if (column >= 2 && column <= 7) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isFound = false;
          }

          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isFound = false;
          }
        } else if (column == 8) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isFound = false;
          }
        } else if (column == 9) {
          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isFound = false;
          }
        }
        if (row == 0) {
          if (typeof board.coordinates[row + 1 + i][column] === "object") {
            isFound = false;
          }
        } else if (row == 1) {
          if (typeof board.coordinates[row + i + 1][column] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row - 1][column] === "object") {
            isFound = false;
          }
        } else if (row >= 2 && row < 5) {
          if (typeof board.coordinates[row + i + 1][column] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row - 1][column] === "object") {
            isFound = false;
          }
        } else if (row == 5) {
          if (typeof board.coordinates[row + i][column] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row - 1][column] === "object") {
            isFound = false;
          }
        } //row will never be greater than length (5 for carrier)
      }
    }
  }

  board.placeShip(row, column, length, "carrier", orientation);
}



/***/ }),

/***/ "./src/computerFns/placeDestroyer.js":
/*!*******************************************!*\
  !*** ./src/computerFns/placeDestroyer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "placeDestroyer": () => (/* binding */ placeDestroyer)
/* harmony export */ });
/* harmony import */ var _gameboardFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameboardFactory */ "./src/gameboardFactory.js");


function placeDestroyer(board) {
  let length = 3;
  let isFound = false;
  let row = Math.floor(Math.random() * 10);
  let column = Math.floor(Math.random() * 10);
  let orientation = Math.floor(Math.random() * 2);

  while (isFound == false) {
    orientation = Math.floor(Math.random() * 2);
    row = Math.floor(Math.random() * 10);
    column = Math.floor(Math.random() * 10);
    isFound = true;

    //horizontal
    if (orientation == 0) {
      column = Math.floor(Math.random() * 8);
      for (let i = 0; i < length; i++) {
        if (typeof board.coordinates[row][column + i] === "object") {
          isFound = false;
        }
        if (row == 0) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isFound = false;
          }
        } else if (row == 1) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isFound = false;
          }

          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isFound = false;
          }
        } else if (row >= 2 && row <= 7) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isFound = false;
          }
        } else if (row == 8) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isFound = false;
          }
        } else if (row == 9) {
          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isFound = false;
          }
        }
        if (column == 0) {
          if (typeof board.coordinates[row][column + 1 + i] === "object") {
            isFound = false;
          }
        } else if (column == 1) {
          if (typeof board.coordinates[row][column + 1 + i] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row][column - 1] === "object") {
            isFound = false;
          }
        } else if (column >= 2 && column < 7) {
          if (typeof board.coordinates[row][column + 1 + i] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row][column - 1] === "object") {
            isFound = false;
          }
        } else if (column == 7) {
          if (typeof board.coordinates[row][column + i] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row][column - 1] === "object") {
            isFound = false;
          }
        } //column will never be greater than length (5 for carrier)
      }
    }
    if (orientation == 1) {
      row = Math.floor(Math.random() * 8);
      column = Math.floor(Math.random() * 10);
      for (let i = 0; i < length; i++) {
        if (typeof board.coordinates[row + i][column] === "object") {
          isFound = false;
        }
        if (column == 0) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isFound = false;
          }
        } else if (column == 1) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isFound = false;
          }

          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isFound = false;
          }
        } else if (column >= 2 && column <= 7) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isFound = false;
          }

          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isFound = false;
          }
        } else if (column == 8) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isFound = false;
          }
        } else if (column == 9) {
          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isFound = false;
          }
        }
        if (row == 0) {
          if (typeof board.coordinates[row + 1 + i][column] === "object") {
            isFound = false;
          }
        } else if (row == 1) {
          if (typeof board.coordinates[row + i + 1][column] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row - 1][column] === "object") {
            isFound = false;
          }
        } else if (row >= 2 && row < 7) {
          if (typeof board.coordinates[row + i + 1][column] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row - 1][column] === "object") {
            isFound = false;
          }
        } else if (row == 7) {
          if (typeof board.coordinates[row + i][column] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row - 1][column] === "object") {
            isFound = false;
          }
        } //row will never be greater than length (5 for carrier)
      }
    }
  }

  board.placeShip(row, column, length, "destroyer", orientation);
}



/***/ }),

/***/ "./src/computerFns/placePatrolboat.js":
/*!********************************************!*\
  !*** ./src/computerFns/placePatrolboat.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "placePatrolboat": () => (/* binding */ placePatrolboat)
/* harmony export */ });
/* harmony import */ var _gameboardFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameboardFactory */ "./src/gameboardFactory.js");


function placePatrolboat(board) {
  let length = 2;
  let isFound = false;
  let row = Math.floor(Math.random() * 10);
  let column = Math.floor(Math.random() * 10);
  let orientation = Math.floor(Math.random() * 2);

  while (isFound == false) {
    orientation = Math.floor(Math.random() * 2);
    row = Math.floor(Math.random() * 10);
    column = Math.floor(Math.random() * 10);
    isFound = true;

    //horizontal
    if (orientation == 0) {
      column = Math.floor(Math.random() * 9);
      for (let i = 0; i < length; i++) {
        if (typeof board.coordinates[row][column + i] === "object") {
          isFound = false;
        }
        if (row == 0) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isFound = false;
          }
        } else if (row == 1) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isFound = false;
          }

          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isFound = false;
          }
        } else if (row >= 2 && row <= 7) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isFound = false;
          }

          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isFound = false;
          }
        } else if (row == 8) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isFound = false;
          }
        } else if (row == 9) {
          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isFound = false;
          }
        }
        if (column == 0) {
          if (typeof board.coordinates[row][column + 1 + i] === "object") {
            isFound = false;
          }
        } else if (column == 1) {
          if (typeof board.coordinates[row][column + 1 + i] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row][column - 1] === "object") {
            isFound = false;
          }
        } else if (column >= 2 && column < 8) {
          if (typeof board.coordinates[row][column + 1 + i] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row][column - 1] === "object") {
            isFound = false;
          }
        } else if (column == 8) {
          if (typeof board.coordinates[row][column + i] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row][column - 1] === "object") {
            isFound = false;
          }
        } //column will never be greater than length (5 for carrier)
      }
    }
    if (orientation == 1) {
      row = Math.floor(Math.random() * 9);
      column = Math.floor(Math.random() * 10);
      for (let i = 0; i < length; i++) {
        if (typeof board.coordinates[row + i][column] === "object") {
          isFound = false;
        }
        if (column == 0) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isFound = false;
          }
        } else if (column == 1) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isFound = false;
          }

          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isFound = false;
          }
        } else if (column >= 2 && column <= 7) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isFound = false;
          }

          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isFound = false;
          }
        } else if (column == 8) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isFound = false;
          }
        } else if (column == 9) {
          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isFound = false;
          }
        }
        if (row == 0) {
          if (typeof board.coordinates[row + 1 + i][column] === "object") {
            isFound = false;
          }
        } else if (row == 1) {
          if (typeof board.coordinates[row + i + 1][column] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row - 1][column] === "object") {
            isFound = false;
          }
        } else if (row >= 2 && row < 8) {
          if (typeof board.coordinates[row + i + 1][column] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row - 1][column] === "object") {
            isFound = false;
          }
        } else if (row == 8) {
          if (typeof board.coordinates[row + i][column] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row - 1][column] === "object") {
            isFound = false;
          }
        } //row will never be greater than length (5 for carrier)
      }
    }
  }

  board.placeShip(row, column, length, "patrolboat", orientation);
}



/***/ }),

/***/ "./src/computerFns/placeSubmarine.js":
/*!*******************************************!*\
  !*** ./src/computerFns/placeSubmarine.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "placeSubmarine": () => (/* binding */ placeSubmarine)
/* harmony export */ });
/* harmony import */ var _gameboardFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameboardFactory */ "./src/gameboardFactory.js");


function placeSubmarine(board) {
  let length = 3;
  let isFound = false;
  let row = Math.floor(Math.random() * 10);
  let column = Math.floor(Math.random() * 10);
  let orientation = Math.floor(Math.random() * 2);

  while (isFound == false) {
    orientation = Math.floor(Math.random() * 2);
    row = Math.floor(Math.random() * 10);
    column = Math.floor(Math.random() * 10);
    isFound = true;

    //horizontal
    if (orientation == 0) {
      column = Math.floor(Math.random() * 8);
      for (let i = 0; i < length; i++) {
        if (typeof board.coordinates[row][column + i] === "object") {
          isFound = false;
        }
        if (row == 0) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isFound = false;
          }
        } else if (row == 1) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isFound = false;
          }

          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isFound = false;
          }
        } else if (row >= 2 && row <= 7) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isFound = false;
          }

          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isFound = false;
          }
        } else if (row == 8) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isFound = false;
          }
        } else if (row == 9) {
          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isFound = false;
          }
        }
        if (column == 0) {
          if (typeof board.coordinates[row][column + 1 + i] === "object") {
            isFound = false;
          }
        } else if (column == 1) {
          if (typeof board.coordinates[row][column + 1 + i] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row][column - 1] === "object") {
            isFound = false;
          }
        } else if (column >= 2 && column < 7) {
          if (typeof board.coordinates[row][column + 1 + i] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row][column - 1] === "object") {
            isFound = false;
          }
        } else if (column == 7) {
          if (typeof board.coordinates[row][column + i] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row][column - 1] === "object") {
            isFound = false;
          }
        } //column will never be greater than length (5 for carrier)
      }
    }
    if (orientation == 1) {
      row = Math.floor(Math.random() * 8);
      column = Math.floor(Math.random() * 10);
      for (let i = 0; i < length; i++) {
        if (typeof board.coordinates[row + i][column] === "object") {
          isFound = false;
        }
        if (column == 0) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isFound = false;
          }
        } else if (column == 1) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isFound = false;
          }

          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isFound = false;
          }
        } else if (column >= 2 && column <= 7) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isFound = false;
          }

          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isFound = false;
          }
        } else if (column == 8) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isFound = false;
          }
        } else if (column == 9) {
          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isFound = false;
          }
        }
        if (row == 0) {
          if (typeof board.coordinates[row + 1 + i][column] === "object") {
            isFound = false;
          }
        } else if (row == 1) {
          if (typeof board.coordinates[row + i + 1][column] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row - 1][column] === "object") {
            isFound = false;
          }
        } else if (row >= 2 && row < 7) {
          if (typeof board.coordinates[row + i + 1][column] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row - 1][column] === "object") {
            isFound = false;
          }
        } else if (row == 7) {
          if (typeof board.coordinates[row + i][column] === "object") {
            isFound = false;
          }
          if (typeof board.coordinates[row - 1][column] === "object") {
            isFound = false;
          }
        } //row will never be greater than length (5 for carrier)
      }
    }
  }
  console.log(row, column, orientation, "submarine");
  board.placeShip(row, column, length, "submarine", orientation);
}



/***/ }),

/***/ "./src/computerFns/randomAttack.js":
/*!*****************************************!*\
  !*** ./src/computerFns/randomAttack.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "randomAttack": () => (/* binding */ randomAttack)
/* harmony export */ });
/* harmony import */ var _gameboardFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameboardFactory */ "./src/gameboardFactory.js");
/* harmony import */ var _solveMisses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../solveMisses */ "./src/solveMisses.js");



//(board, row, column)
function randomAttack(board) {
  let row = Math.floor(Math.random() * 10);
  let column = Math.floor(Math.random() * 10);

  if (isLegal(row, column)) {
    board.receiveAttack(row, column);
    if (typeof board.coordinates[row][column] === "object") {
      if (board.coordinates[row][column].isSunk() == true) {
        (0,_solveMisses__WEBPACK_IMPORTED_MODULE_1__.solveMisses)(board, row, column);
      }
    }
  } else {
    randomAttack(board);
  }

  //else, repeat function

  function isLegal(row, column) {
    let isLegal = true;
    if (board.coordinates[row][column] == "miss") {
      isLegal = false;
    } else if (typeof board.coordinates[row][column] === "object") {
      if (
        board.coordinates[row][column].shipLocation[
          JSON.stringify([row, column])
        ] == true
      ) {
        isLegal = false;
      }
    }
    return isLegal;
  }
}



/***/ }),

/***/ "./src/computerFns/shipHunt.js":
/*!*************************************!*\
  !*** ./src/computerFns/shipHunt.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shipHunt": () => (/* binding */ shipHunt)
/* harmony export */ });
/* harmony import */ var _solveMisses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../solveMisses */ "./src/solveMisses.js");
/* harmony import */ var _randomAttack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./randomAttack */ "./src/computerFns/randomAttack.js");



let isOrienting = false;
let initialCheck = false;

// let foundCoordinate = {
//   row: 0,
//   column: 0,
//   isLeft: true,
//   isUp: true,
//   isRight: true,
//   isDown: true,
//   leftCoordinates: [],
//   rightCoordinates: [],
//   upCoordinates: [],
//   downCoordinates: [],
// };

function foundCoordinateFactory(r, c) {
  let row = r;
  let column = c;
  let isLeft = true;
  let isUp = true;
  let isRight = true;
  let isDown = true;
  let nextRow = r;
  let nextColumn = c;
  let leftCoordinates = [];
  let rightCoordinates = [];
  let upCoordinates = [];
  let downCoordinates = [];
  return {
    row,
    column,
    isLeft,
    isUp,
    isRight,
    isDown,
    leftCoordinates,
    rightCoordinates,
    upCoordinates,
    downCoordinates,
    nextRow,
    nextColumn,
  };
}
let foundCoordinate;

function shipHunt(board) {
  if (!isOrienting) {
    console.log("randomly attacking to get initial hit");
    let row = Math.floor(Math.random() * 10);
    let column = Math.floor(Math.random() * 10);
    function isLegal(row, column) {
      let isLegal = true;
      if (board.coordinates[row][column] == "miss") {
        isLegal = false;
      } else if (typeof board.coordinates[row][column] === "object") {
        if (
          board.coordinates[row][column].shipLocation[
            JSON.stringify([row, column])
          ] == true
        ) {
          isLegal = false;
        }
      }
      return isLegal;
    }

    if (!isLegal(row, column)) {
      //if the move isn't legal, get new coordinates
      shipHunt(board);
    }
    if (isLegal(row, column)) {
      if (typeof board.coordinates[row][column] === "object") {
        foundCoordinate = foundCoordinateFactory(row, column);
        isOrienting = true;
        console.log("shipHunt found an object");
        console.log("shipHunt recorded object coordinate at ");
        console.table(foundCoordinate);
        board.receiveAttack(row, column);
      } else {
        board.receiveAttack(row, column);
        console.log("shipHunt attacked an empty spot at");
        console.log(row, column);
        console.log(typeof board.coordinates[row][column]);
      }
    }
  } else if (isOrienting) {
    console.log("have initial hit; searching more closely");
    //off the bat check to see what directions we can eliminate (added benefit of checking subsequent misses)
    //row checks
    if (!initialCheck) {
      if (foundCoordinate.row == 0) {
        foundCoordinate.isUp = false;
        if (
          board.coordinates[foundCoordinate.row + 1][foundCoordinate.column] ==
          "miss"
        ) {
          console.log("foundCoordinate.isDown marked false");
          foundCoordinate.isDown = false;
        }
      }
      if (foundCoordinate.row == 9) {
        console.log("foundCoordinate.isDown marked false");
        foundCoordinate.isDown = false;
        if (
          board.coordinates[foundCoordinate.row - 1][foundCoordinate.column] ==
          "miss"
        ) {
          foundCoordinate.isUp = false;
        }
      }
      if (foundCoordinate.row > 0 && foundCoordinate.row < 9) {
        if (
          board.coordinates[foundCoordinate.row + 1][foundCoordinate.column] ==
          "miss"
        ) {
          foundCoordinate.isUp = false;
        }
        if (
          board.coordinates[foundCoordinate.row - 1][foundCoordinate.column] ==
          "miss"
        ) {
          console.log("foundCoordinate.isDown marked false");
          foundCoordinate.isDown = false;
        }
      }
      //column checks
      if (foundCoordinate.column == 0) {
        foundCoordinate.isLeft = false;
        if (
          board.coordinates[foundCoordinate.row][foundCoordinate.column + 1] ==
          "miss"
        ) {
          foundCoordinate.isRight = false;
        }
      }
      if (foundCoordinate.column == 9) {
        foundCoordinate.isRight = false;
        if (
          board.coordinates[foundCoordinate.row][foundCoordinate.column - 1] ==
          "miss"
        ) {
          foundCoordinate.isLeft = false;
        }
      }
      if (foundCoordinate.column > 0 && foundCoordinate.column < 9) {
        if (
          board.coordinates[foundCoordinate.row][foundCoordinate.column - 1] ==
          "miss"
        ) {
          foundCoordinate.isLeft = false;
        }
        if (
          board.coordinates[foundCoordinate.row][foundCoordinate.column + 1] ==
          "miss"
        ) {
          foundCoordinate.isRight = false;
        }
      }
    }
    initialCheck = true;
    //finished initial checks
    console.table(foundCoordinate);
    if (foundCoordinate.isUp == true) {
      console.log("entered isUp == true logic");
      foundCoordinate.nextRow--;
      board.receiveAttack(foundCoordinate.nextRow, foundCoordinate.column);
      if (
        typeof board.coordinates[foundCoordinate.nextRow][
          foundCoordinate.column
        ] === "object"
      ) {
        if (
          board.coordinates[foundCoordinate.nextRow][
            foundCoordinate.column
          ].isSunk()
        ) {
          (0,_solveMisses__WEBPACK_IMPORTED_MODULE_0__.solveMisses)(board, foundCoordinate.nextRow, foundCoordinate.column);
          resetHunt();
        }
      }
      if (
        typeof board.coordinates[foundCoordinate.nextRow][
          foundCoordinate.column
        ] !== "object"
      ) {
        foundCoordinate.isUp = false;
        foundCoordinate.nextRow = foundCoordinate.row;
        console.table(foundCoordinate);
      }
    } else if (foundCoordinate.isDown == true) {
      console.log("entered isDown == true logic");
      foundCoordinate.nextRow++;
      board.receiveAttack(foundCoordinate.nextRow, foundCoordinate.column);
      if (
        typeof board.coordinates[foundCoordinate.nextRow][
          foundCoordinate.column
        ] === "object"
      ) {
        if (
          board.coordinates[foundCoordinate.nextRow][
            foundCoordinate.column
          ].isSunk()
        ) {
          (0,_solveMisses__WEBPACK_IMPORTED_MODULE_0__.solveMisses)(board, foundCoordinate.nextRow, foundCoordinate.column);
          resetHunt();
        }
      }
      if (
        typeof board.coordinates[foundCoordinate.nextRow][
          foundCoordinate.column
        ] !== "object"
      ) {
        console.log("foundCoordinate.isDown marked false");
        foundCoordinate.isDown = false;
        foundCoordinate.nextRow = foundCoordinate.row;
      }
    } else if (foundCoordinate.isRight == true) {
      console.log("entered isRight == true logic");
      foundCoordinate.nextColumn++;
      board.receiveAttack(foundCoordinate.row, foundCoordinate.nextColumn);
      if (
        typeof board.coordinates[foundCoordinate.row][
          foundCoordinate.nextColumn
        ] === "object"
      ) {
        if (
          board.coordinates[foundCoordinate.row][
            foundCoordinate.nextColumn
          ].isSunk()
        ) {
          (0,_solveMisses__WEBPACK_IMPORTED_MODULE_0__.solveMisses)(board, foundCoordinate.row, foundCoordinate.nextColumn);
          resetHunt();
        }
      }
      if (
        typeof board.coordinates[foundCoordinate.row][
          foundCoordinate.nextColumn
        ] !== "object"
      ) {
        foundCoordinate.isRight = false;
        foundCoordinate.nextColumn = foundCoordinate.column;
      }
    } else if (foundCoordinate.isLeft == true) {
      console.log("entered isLeft == true logic");
      foundCoordinate.nextColumn--;
      board.receiveAttack(foundCoordinate.row, foundCoordinate.nextColumn);
      if (
        typeof board.coordinates[foundCoordinate.row][
          foundCoordinate.nextColumn
        ] === "object"
      ) {
        if (
          board.coordinates[foundCoordinate.row][
            foundCoordinate.nextColumn
          ].isSunk()
        ) {
          (0,_solveMisses__WEBPACK_IMPORTED_MODULE_0__.solveMisses)(board, foundCoordinate.row, foundCoordinate.nextColumn);
          resetHunt();
        }
      }
      if (
        typeof board.coordinates[foundCoordinate.row][
          foundCoordinate.nextColumn
        ] !== "object"
      ) {
        foundCoordinate.isLeft = false;
        foundCoordinate.nextColumn = foundCoordinate.column;
      }
    }
  }
}

function resetHunt() {
  isOrienting = false;
  initialCheck = false;
}

// function populateCoordinates(row, column) {
//   if (row == 0) {
//     if (column == 0) {
//       for (let i = 0; i < foundCoordinate.length; i++)
//         foundCoordinate.rightCoordinates.push([row, column + i]);
//     }
//   }
// }




/***/ }),

/***/ "./src/currentlyPlacingShip.js":
/*!*************************************!*\
  !*** ./src/currentlyPlacingShip.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBattleshipOrientation": () => (/* binding */ getBattleshipOrientation),
/* harmony export */   "getCarrierOrientation": () => (/* binding */ getCarrierOrientation),
/* harmony export */   "getCurrentlyPlacingLength": () => (/* binding */ getCurrentlyPlacingLength),
/* harmony export */   "getCurrentlyPlacingOrientation": () => (/* binding */ getCurrentlyPlacingOrientation),
/* harmony export */   "getCurrentlyPlacingShip": () => (/* binding */ getCurrentlyPlacingShip),
/* harmony export */   "getDestroyerOrientation": () => (/* binding */ getDestroyerOrientation),
/* harmony export */   "getIsAllPlaced": () => (/* binding */ getIsAllPlaced),
/* harmony export */   "getPatrolboatOrientation": () => (/* binding */ getPatrolboatOrientation),
/* harmony export */   "getSubmarineOrientation": () => (/* binding */ getSubmarineOrientation),
/* harmony export */   "increasePlaceCount": () => (/* binding */ increasePlaceCount),
/* harmony export */   "resetAll": () => (/* binding */ resetAll),
/* harmony export */   "resetPlacement": () => (/* binding */ resetPlacement),
/* harmony export */   "setBattleshipOrientation": () => (/* binding */ setBattleshipOrientation),
/* harmony export */   "setCarrierOrientation": () => (/* binding */ setCarrierOrientation),
/* harmony export */   "setCurrentlyPlacingShip": () => (/* binding */ setCurrentlyPlacingShip),
/* harmony export */   "setDestroyerOrientation": () => (/* binding */ setDestroyerOrientation),
/* harmony export */   "setPatrolboatOrientation": () => (/* binding */ setPatrolboatOrientation),
/* harmony export */   "setSubmarineOrientation": () => (/* binding */ setSubmarineOrientation)
/* harmony export */ });
let currentShip = "carrier";
let orientation = 0;
let carrierOrientation = 0;
let battleshipOrientation = 0;
let destroyerOrientation = 0;
let submarineOrientation = 0;
let patrolboatOrientation = 0;
let placeCount = 0;
let isAllPlaced = false;

function resetAll() {
  carrierOrientation = 0;
  battleshipOrientation = 0;
  destroyerOrientation = 0;
  submarineOrientation = 0;
  patrolboatOrientation = 0;
  placeCount = 0;
  isAllPlaced = false;
}

function increasePlaceCount() {
  placeCount++;
}

function getIsAllPlaced() {
  if (placeCount == 5) {
    isAllPlaced = true;
    return isAllPlaced;
  }
}

function resetPlacement() {
  placeCount = 0;
  isAllPlaced = false;
}

function setCurrentlyPlacingShip(ship) {
  currentShip = ship;
}

function getCurrentlyPlacingShip() {
  return currentShip;
}

function getCurrentlyPlacingLength() {
  if (currentShip == "carrier") {
    return 5;
  } else if (currentShip == "battleship") {
    return 4;
  } else if (currentShip == "destroyer") {
    return 3;
  } else if (currentShip == "submarine") {
    return 3;
  } else if (currentShip == "patrolboat") {
    return 2;
  }
}

function getCurrentlyPlacingOrientation(ship) {
  if (ship == "carrier") {
    return carrierOrientation;
  }
  if (ship == "battleship") {
    return battleshipOrientation;
  }
  if (ship == "destroyer") {
    return destroyerOrientation;
  }
  if (ship == "submarine") {
    return submarineOrientation;
  }
  if (ship == "patrolboat") {
    return patrolboatOrientation;
  }
}

function getCarrierOrientation() {
  return carrierOrientation;
}

function setCarrierOrientation(num) {
  carrierOrientation = num;
}

function setBattleshipOrientation(num) {
  battleshipOrientation = num;
}

function getBattleshipOrientation() {
  return battleshipOrientation;
}

function setDestroyerOrientation(num) {
  destroyerOrientation = num;
}

function getDestroyerOrientation() {
  return destroyerOrientation;
}

function setSubmarineOrientation(num) {
  submarineOrientation = num;
}

function getSubmarineOrientation() {
  return submarineOrientation;
}

function setPatrolboatOrientation(num) {
  patrolboatOrientation = num;
}

function getPatrolboatOrientation() {
  return patrolboatOrientation;
}




/***/ }),

/***/ "./src/displayBoard.js":
/*!*****************************!*\
  !*** ./src/displayBoard.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayBoard": () => (/* binding */ displayBoard)
/* harmony export */ });
/* harmony import */ var _computerFns_randomAttack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./computerFns/randomAttack */ "./src/computerFns/randomAttack.js");
/* harmony import */ var _currentlyPlacingShip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currentlyPlacingShip */ "./src/currentlyPlacingShip.js");
/* harmony import */ var _gameboardFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboardFactory */ "./src/gameboardFactory.js");
/* harmony import */ var _gameDifficulty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameDifficulty */ "./src/gameDifficulty.js");
/* harmony import */ var _isLegalPlacement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isLegalPlacement */ "./src/isLegalPlacement.js");
/* harmony import */ var _buildHarbor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buildHarbor */ "./src/buildHarbor.js");
/* harmony import */ var _gameLoop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gameLoop */ "./src/gameLoop.js");
/* harmony import */ var _computerFns_shipHunt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./computerFns/shipHunt */ "./src/computerFns/shipHunt.js");
/* harmony import */ var _buildButtonBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./buildButtonBox */ "./src/buildButtonBox.js");
/* harmony import */ var _solveMisses__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./solveMisses */ "./src/solveMisses.js");
/* harmony import */ var _isLegalMove__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./isLegalMove */ "./src/isLegalMove.js");
/* harmony import */ var _icons_target_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./icons/target.svg */ "./src/icons/target.svg");














const target = new Image();
target.src = _icons_target_svg__WEBPACK_IMPORTED_MODULE_11__;

function displayBoard(player, computer) {
  let isSettingUp = true;
  createPlayerBoard();
  updatePlayerBoard(player);

  function createPlayerBoard() {
    let board = document.getElementById("boardOne");
    for (let i = 0; i < 10; i++) {
      let row = document.createElement("div");
      row.id = "row" + i;
      row.className = "row";
      for (let j = 0; j < 10; j++) {
        let box = document.createElement("div");
        box.id = "playerbox" + i + "" + j;
        box.className = "box";
        box.style.backgroundColor = "white";
        //dragging into boxes display
        box.addEventListener("dragover", function (event) {
          event.preventDefault();
          let boxArr = [i, j];
          let boxRow = boxArr[0];
          let boxColumn = boxArr[1];

          if (typeof player.coordinates[i][j] !== "object") {
            if (
              (0,_isLegalPlacement__WEBPACK_IMPORTED_MODULE_4__.isLegalPlacement)(
                boxRow,
                boxColumn,
                (0,_currentlyPlacingShip__WEBPACK_IMPORTED_MODULE_1__.getCurrentlyPlacingShip)(),
                (0,_currentlyPlacingShip__WEBPACK_IMPORTED_MODULE_1__.getCurrentlyPlacingOrientation)((0,_currentlyPlacingShip__WEBPACK_IMPORTED_MODULE_1__.getCurrentlyPlacingShip)()),
                player
              )
            ) {
              box.style.backgroundColor = "#90EE90"; //make green if legal
            } else if (
              !(0,_isLegalPlacement__WEBPACK_IMPORTED_MODULE_4__.isLegalPlacement)(
                boxRow,
                boxColumn,
                (0,_currentlyPlacingShip__WEBPACK_IMPORTED_MODULE_1__.getCurrentlyPlacingShip)(),
                (0,_currentlyPlacingShip__WEBPACK_IMPORTED_MODULE_1__.getCurrentlyPlacingOrientation)((0,_currentlyPlacingShip__WEBPACK_IMPORTED_MODULE_1__.getCurrentlyPlacingShip)()),
                player
              )
            ) {
              box.style.backgroundColor = "#ffcccb"; //make red is illegal
            }
          }
        });
        //dragging away from boxes display
        box.addEventListener("dragleave", function () {
          if (typeof player.coordinates[i][j] !== "object") {
            box.style.backgroundColor = "white";
          }
        });
        //dropping into boxes display
        box.addEventListener("drop", function () {
          let boxArr = [i, j];
          let boxRow = boxArr[0];
          let boxColumn = boxArr[1];
          if (
            (0,_isLegalPlacement__WEBPACK_IMPORTED_MODULE_4__.isLegalPlacement)(
              boxRow,
              boxColumn,
              (0,_currentlyPlacingShip__WEBPACK_IMPORTED_MODULE_1__.getCurrentlyPlacingShip)(),
              (0,_currentlyPlacingShip__WEBPACK_IMPORTED_MODULE_1__.getCurrentlyPlacingOrientation)((0,_currentlyPlacingShip__WEBPACK_IMPORTED_MODULE_1__.getCurrentlyPlacingShip)()),
              player
            )
          ) {
            player.placeShip(
              boxRow,
              boxColumn,
              (0,_currentlyPlacingShip__WEBPACK_IMPORTED_MODULE_1__.getCurrentlyPlacingLength)(),
              (0,_currentlyPlacingShip__WEBPACK_IMPORTED_MODULE_1__.getCurrentlyPlacingShip)(),
              (0,_currentlyPlacingShip__WEBPACK_IMPORTED_MODULE_1__.getCurrentlyPlacingOrientation)((0,_currentlyPlacingShip__WEBPACK_IMPORTED_MODULE_1__.getCurrentlyPlacingShip)())
            );
            let deleteShip = document.getElementById(
              "segmented__" + (0,_currentlyPlacingShip__WEBPACK_IMPORTED_MODULE_1__.getCurrentlyPlacingShip)()
            );
            deleteShip.remove();
            (0,_currentlyPlacingShip__WEBPACK_IMPORTED_MODULE_1__.increasePlaceCount)();
            if ((0,_currentlyPlacingShip__WEBPACK_IMPORTED_MODULE_1__.getIsAllPlaced)()) {
              (0,_buildButtonBox__WEBPACK_IMPORTED_MODULE_8__.buildButtonBox)();

              console.log("all placed");

              let harbor = document.getElementById("harbor");
              harbor.remove();

              const commander = document.createElement("button");
              commander.innerHTML =
                "Commander <br /><br /> (A.I will fire randomly)";
              commander.id = "commander";
              commander.addEventListener("click", function () {
                let buttonBox = document.getElementById("buttonBox");
                let instructions = document.getElementById("instructions");
                let header = document.getElementById("header");
                harbor.remove();
                buttonBox.remove();
                instructions.innerText = "";
                header.innerText = "";
                createComputerBoard();
              });
              const admiral = document.createElement("button");
              admiral.innerHTML =
                "Fleet Admiral <br /><br /> (A.I will hunt ships on hit)";
              admiral.id = "admiral";
              admiral.addEventListener("click", function () {
                let buttonBox = document.getElementById("buttonBox");
                let instructions = document.getElementById("instructions");
                let header = document.getElementById("header");
                harbor.remove();
                buttonBox.remove();
                instructions.innerText = "";
                header.innerText = "";
                // while (buttonBox.firstChild) {
                //   buttonBox.removeChild(buttonBox.firstChild);
                // }
                (0,_gameDifficulty__WEBPACK_IMPORTED_MODULE_3__.setDifficulty)("hard");
                createComputerBoard();
              });
              const replaceShips = document.createElement("button");
              replaceShips.innerText = "I wish to reassign my ships!";
              replaceShips.id = "replaceShips";
              replaceShips.addEventListener("click", function () {
                let buttonBox = document.getElementById("buttonBox");
                harbor.remove();
                buttonBox.remove();
                let boardOne = document.getElementById("boardOne");
                while (boardOne.firstChild) {
                  boardOne.removeChild(boardOne.firstChild);
                }
                (0,_buildHarbor__WEBPACK_IMPORTED_MODULE_5__.buildHarbor)();
                (0,_currentlyPlacingShip__WEBPACK_IMPORTED_MODULE_1__.resetAll)();
                (0,_gameLoop__WEBPACK_IMPORTED_MODULE_6__.gameLoop)();
              });
              let buttonBoxTop = document.getElementById("buttonBoxTop");
              while (buttonBoxTop.firstChild) {
                buttonBoxTop.removeChild(buttonBoxTop.firstChild);
              }
              let buttonBoxBottom = document.getElementById("buttonBoxBottom");
              while (buttonBoxBottom.firstChild) {
                buttonBoxBottom.removeChild(buttonBoxBottom.firstChild);
              }
              buttonBoxTop.appendChild(commander);
              buttonBoxTop.appendChild(admiral);
              buttonBoxBottom.appendChild(replaceShips);
            }
            updatePlayerBoard(player);
          } else {
            box.style.backgroundColor = "white";
          }
        });

        row.appendChild(box);
      }
      board.appendChild(row);
    }
  }

  function updatePlayerBoard(player) {
    let playerBoard = player;
    console.table(playerBoard.coordinates);
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (typeof playerBoard.coordinates[i][j] === "object") {
          if (playerBoard.coordinates[i][j].name == "destroyer") {
            let destroyer = document.getElementById("playerbox" + i + "" + j);
            destroyer.style.backgroundColor = "#1d3557";

            if (
              playerBoard.coordinates[i][j].shipLocation[
                JSON.stringify([i, j])
              ] == true
            ) {
              destroyer.style.backgroundColor = "red";
            }
          } else if (playerBoard.coordinates[i][j].name == "submarine") {
            let submarine = document.getElementById("playerbox" + i + "" + j);
            submarine.style.backgroundColor = "#8338ec";

            if (
              playerBoard.coordinates[i][j].shipLocation[
                JSON.stringify([i, j])
              ] == true
            ) {
              submarine.style.backgroundColor = "red";
            }
          } else if (playerBoard.coordinates[i][j].name == "carrier") {
            let carrier = document.getElementById("playerbox" + i + "" + j);
            carrier.style.backgroundColor = "#ffbe0b";

            if (
              playerBoard.coordinates[i][j].shipLocation[
                JSON.stringify([i, j])
              ] == true
            ) {
              carrier.style.backgroundColor = "red";
            }
          } else if (playerBoard.coordinates[i][j].name == "battleship") {
            let battleship = document.getElementById("playerbox" + i + "" + j);
            battleship.style.backgroundColor = "#bc6c25";

            if (
              playerBoard.coordinates[i][j].shipLocation[
                JSON.stringify([i, j])
              ] == true
            ) {
              battleship.style.backgroundColor = "red";
            }
          } else if (playerBoard.coordinates[i][j].name == "patrolboat") {
            let patrolboat = document.getElementById("playerbox" + i + "" + j);
            patrolboat.style.backgroundColor = "#8ac926";

            if (
              playerBoard.coordinates[i][j].shipLocation[
                JSON.stringify([i, j])
              ] == true
            ) {
              patrolboat.style.backgroundColor = "red";
            }
          }
        } else if (playerBoard.coordinates[i][j] == "miss") {
          let miss = document.getElementById("playerbox" + i + "" + j);
          miss.style.backgroundColor = "#ADD8E6";
        }
      }
    }
  }

  function createComputerBoard() {
    let board = document.getElementById("boardTwo");
    for (let i = 0; i < 10; i++) {
      let row = document.createElement("div");
      row.id = "row" + i;
      row.className = "row";
      for (let j = 0; j < 10; j++) {
        let box = document.createElement("div");
        box.id = JSON.stringify([i, j]);
        box.className = "box";
        box.style.backgroundColor = "white";
        box.addEventListener("click", function () {
          let arr = JSON.parse(box.id);
          let arrRow = arr[0];
          let arrColumn = arr[1];
          //turn id into coordinates
          if (
            computer.isOver() != true &&
            (0,_isLegalMove__WEBPACK_IMPORTED_MODULE_10__.isLegalMove)(computer, arrRow, arrColumn)
          ) {
            computer.receiveAttack(arrRow, arrColumn);
            if (typeof computer.coordinates[arrRow][arrColumn] === "object") {
              if (computer.coordinates[arrRow][arrColumn].isSunk()) {
                console.log("is sunk!");
                (0,_solveMisses__WEBPACK_IMPORTED_MODULE_9__.solveMisses)(computer, arrRow, arrColumn);
                if (computer.isOver()) {
                  let left = document.getElementById("left");
                  let header = document.getElementById("header");
                  header.innerText = "Captain, you've won!";
                  let playAgain = document.createElement("button");
                  playAgain.id = "playAgain";
                  playAgain.innerText = "Play Again?";
                  playAgain.addEventListener("click", function () {
                    let boardOne = document.getElementById("boardOne");
                    while (boardOne.firstChild) {
                      boardOne.removeChild(boardOne.firstChild);
                    }
                    let boardTwo = document.getElementById("boardTwo");
                    while (boardTwo.firstChild) {
                      boardTwo.removeChild(boardTwo.firstChild);
                    }
                    playAgain.remove();
                    header.innerHTML =
                      "You know the drill, Captain. Good luck!";
                    (0,_buildHarbor__WEBPACK_IMPORTED_MODULE_5__.buildHarbor)();
                    (0,_currentlyPlacingShip__WEBPACK_IMPORTED_MODULE_1__.resetAll)();
                    (0,_gameLoop__WEBPACK_IMPORTED_MODULE_6__.gameLoop)();
                  });
                  left.appendChild(playAgain);
                }
              }
            }
            updateComputerBoard(computer);
            if ((0,_gameDifficulty__WEBPACK_IMPORTED_MODULE_3__.getDifficulty)() == "easy") {
              if (player.isOver() != true && computer.isOver() != true) {
                (0,_computerFns_randomAttack__WEBPACK_IMPORTED_MODULE_0__.randomAttack)(player);
                updatePlayerBoard(player);
                if (player.isOver()) {
                  let left = document.getElementById("left");
                  let header = document.getElementById("header");
                  header.innerText =
                    "Captain, we've lost the battle, but not the war!";
                  let playAgain = document.createElement("button");
                  playAgain.id = "playAgain";
                  playAgain.innerText = "Play Again?";
                  playAgain.addEventListener("click", function () {
                    let boardOne = document.getElementById("boardOne");
                    while (boardOne.firstChild) {
                      boardOne.removeChild(boardOne.firstChild);
                    }
                    let boardTwo = document.getElementById("boardTwo");
                    while (boardTwo.firstChild) {
                      boardTwo.removeChild(boardTwo.firstChild);
                    }
                    playAgain.remove();
                    header.innerHTML =
                      "You know the drill, Captain. Good luck!";
                    (0,_buildHarbor__WEBPACK_IMPORTED_MODULE_5__.buildHarbor)();
                    (0,_currentlyPlacingShip__WEBPACK_IMPORTED_MODULE_1__.resetAll)();
                    (0,_gameLoop__WEBPACK_IMPORTED_MODULE_6__.gameLoop)();
                  });
                  left.appendChild(playAgain);
                }
              }
            } else if ((0,_gameDifficulty__WEBPACK_IMPORTED_MODULE_3__.getDifficulty)() == "hard") {
              if (player.isOver() != true && computer.isOver() != true) {
                (0,_computerFns_shipHunt__WEBPACK_IMPORTED_MODULE_7__.shipHunt)(player);
                updatePlayerBoard(player);
                if (player.isOver()) {
                  let left = document.getElementById("left");
                  let header = document.getElementById("header");
                  header.innerText =
                    "Captain, we've lost the battle, but not the war!";
                  let playAgain = document.createElement("button");
                  playAgain.id = "playAgain";
                  playAgain.innerText = "Play Again?";
                  playAgain.addEventListener("click", function () {
                    let boardOne = document.getElementById("boardOne");
                    while (boardOne.firstChild) {
                      boardOne.removeChild(boardOne.firstChild);
                    }
                    let boardTwo = document.getElementById("boardTwo");
                    while (boardTwo.firstChild) {
                      boardTwo.removeChild(boardTwo.firstChild);
                    }
                    playAgain.remove();
                    header.innerHTML =
                      "You know the drill, Captain. Good luck!";
                    (0,_buildHarbor__WEBPACK_IMPORTED_MODULE_5__.buildHarbor)();
                    (0,_currentlyPlacingShip__WEBPACK_IMPORTED_MODULE_1__.resetAll)();
                    (0,_gameLoop__WEBPACK_IMPORTED_MODULE_6__.gameLoop)();
                  });
                  left.appendChild(playAgain);
                }
              }
            }
          }
        });
        box.addEventListener("mouseover", function () {
          let arr = JSON.parse(box.id);
          let arrRow = arr[0];
          let arrColumn = arr[1];
          if (
            computer.isOver() != true &&
            (0,_isLegalMove__WEBPACK_IMPORTED_MODULE_10__.isLegalMove)(computer, arrRow, arrColumn)
          ) {
            box.style.backgroundImage = "url(" + target.src + ")";
            console.log("mousing over");
          }
        });
        box.addEventListener("mouseout", function () {
          box.style.backgroundImage = "none";
        });
        box.addEventListener("click", function () {
          box.style.backgroundImage = "none";
        });
        row.appendChild(box);
      }
      board.appendChild(row);
    }
  }
  function updateComputerBoard(computer) {
    let computerBoard = computer;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (typeof computerBoard.coordinates[i][j] === "object") {
          if (
            computerBoard.coordinates[i][j].shipLocation[
              JSON.stringify([i, j])
            ] == true
          ) {
            let hitBox = document.getElementById(JSON.stringify([i, j]));
            hitBox.style.backgroundColor = "red";
          }
        } else if (computerBoard.coordinates[i][j] == "miss") {
          let missBox = document.getElementById(JSON.stringify([i, j]));
          missBox.style.backgroundColor = "#ADD8E6";
        }
      }
    }
  }
}



/***/ }),

/***/ "./src/gameDifficulty.js":
/*!*******************************!*\
  !*** ./src/gameDifficulty.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDifficulty": () => (/* binding */ getDifficulty),
/* harmony export */   "setDifficulty": () => (/* binding */ setDifficulty)
/* harmony export */ });
let gameDifficulty = "easy";

function setDifficulty(difficulty) {
  gameDifficulty = difficulty;
}

function getDifficulty() {
  return gameDifficulty;
}



/***/ }),

/***/ "./src/gameLoop.js":
/*!*************************!*\
  !*** ./src/gameLoop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameLoop": () => (/* binding */ gameLoop)
/* harmony export */ });
/* harmony import */ var _computerFns_computerPlaceShip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./computerFns/computerPlaceShip */ "./src/computerFns/computerPlaceShip.js");
/* harmony import */ var _computerFns_placeBattleship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./computerFns/placeBattleship */ "./src/computerFns/placeBattleship.js");
/* harmony import */ var _computerFns_placeCarrier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computerFns/placeCarrier */ "./src/computerFns/placeCarrier.js");
/* harmony import */ var _computerFns_placeDestroyer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./computerFns/placeDestroyer */ "./src/computerFns/placeDestroyer.js");
/* harmony import */ var _computerFns_placePatrolboat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./computerFns/placePatrolboat */ "./src/computerFns/placePatrolboat.js");
/* harmony import */ var _computerFns_placeSubmarine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./computerFns/placeSubmarine */ "./src/computerFns/placeSubmarine.js");
/* harmony import */ var _computerFns_randomAttack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./computerFns/randomAttack */ "./src/computerFns/randomAttack.js");
/* harmony import */ var _displayBoard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./displayBoard */ "./src/displayBoard.js");
/* harmony import */ var _gameboardFactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gameboardFactory */ "./src/gameboardFactory.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./player */ "./src/player.js");











function gameLoop() {
  let playerBoard = (0,_gameboardFactory__WEBPACK_IMPORTED_MODULE_8__.gameboardFactory)();
  let computerBoard = (0,_gameboardFactory__WEBPACK_IMPORTED_MODULE_8__.gameboardFactory)();
  (0,_computerFns_computerPlaceShip__WEBPACK_IMPORTED_MODULE_0__.computerPlaceShips)(computerBoard);

  // while (playerBoard.isOver() == false && computerBoard.isOver == false) {
  //   //play game
  // }
  // for (let i = 0; i < 25; i++) {
  //   randomAttack(playerBoard);
  // }

  (0,_displayBoard__WEBPACK_IMPORTED_MODULE_7__.displayBoard)(playerBoard, computerBoard);
}



/***/ }),

/***/ "./src/gameboardFactory.js":
/*!*********************************!*\
  !*** ./src/gameboardFactory.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameboardFactory": () => (/* binding */ gameboardFactory)
/* harmony export */ });
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory */ "./src/shipFactory.js");


function gameboardFactory() {
  let coordinates = [
    ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10"],
    ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10"],
    ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10"],
    ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10"],
    ["E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9", "E10"],
    ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10"],
    ["G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8", "G9", "G10"],
    ["H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9", "H10"],
    ["I1", "I2", "I3", "I4", "I5", "I6", "I7", "I8", "I9", "I10"],
    ["J1", "J2", "J3", "J4", "J5", "J6", "J7", "J8", "J9", "J10"],
  ];

  function placeShip(row, column, length, name, orientation) {
    let ship = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(length, name, orientation, row, column);

    if (orientation == 0) {
      //horizontal placement
      console.table(coordinates);
      console.log(length, name, orientation, row, column);
      for (let i = 0; i < length; i++) {
        coordinates[row][column + i] = ship;
      }
    } else if (orientation == 1) {
      //vertical placement
      for (let i = 0; i < length; i++) {
        coordinates[row + i][column] = ship;
      }
    }
  }

  function receiveAttack(row, column) {
    if (typeof coordinates[row][column] === "object") {
      coordinates[row][column].hit([row, column]);
      return coordinates[row][column].isSunk();
    } else {
      coordinates[row][column] = "miss";
      return false;
    }
  }

  function isOver() {
    let isOver = true;
    for (let row = 0; row < 10; row++) {
      for (let column = 0; column < 10; column++) {
        if (typeof coordinates[row][column] === "object") {
          if (coordinates[row][column].isSunk() == false) {
            isOver = false;
          }
        }
      }
    }
    return isOver;
  }

  return { coordinates, placeShip, receiveAttack, isOver };
}


// let arr = [
//   ["A1", "A2", "A3"],
//   ["B1", "B2", "B3"],
// ];
// //first value is the row, second value is the column
// console.log(arr[0][0]);

// //first parameter is the index (of the array) within coordinate array
// //second parameter is the index (of the value) within the index (of the array)

// console.log(arr[0][0]); //horizontal placement
// console.log(arr[0][0]);
// console.log(arr[0][1]);
// console.log(arr[0][2]);
// console.log(arr[0][3]);
// console.log(arr[0][4]);
// //increase value of second array up to ship's length to place horizontal


/***/ }),

/***/ "./src/isLegalMove.js":
/*!****************************!*\
  !*** ./src/isLegalMove.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isLegalMove": () => (/* binding */ isLegalMove)
/* harmony export */ });
function isLegalMove(board, row, column) {
  let isLegal = true;
  if (board.coordinates[row][column] == "miss") {
    isLegal = false;
  } else if (typeof board.coordinates[row][column] === "object") {
    if (
      board.coordinates[row][column].shipLocation[
        JSON.stringify([row, column])
      ] == true
    ) {
      isLegal = false;
    }
  }
  return isLegal;
}



/***/ }),

/***/ "./src/isLegalPlacement.js":
/*!*********************************!*\
  !*** ./src/isLegalPlacement.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isLegalPlacement": () => (/* binding */ isLegalPlacement)
/* harmony export */ });
function isLegalPlacement(row, column, ship, orientation, board) {
  let isLegal = true;
  if (ship == "carrier") {
    if (orientation == 0) {
      for (let i = 0; i < 5; i++) {
        if (typeof board.coordinates[row][column + i] === "object") {
          isLegal = false;
        } else if (row == 0) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isLegal = false;
          }
        } else if (row == 1) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isLegal = false;
          }

          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isLegal = false;
          }
        } else if (row >= 2 && row <= 7) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isLegal = false;
          }

          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isLegal = false;
          }
        } else if (row == 8) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isLegal = false;
          }
        } else if (row == 9) {
          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isLegal = false;
          }
        }
        if (column == 0) {
          if (typeof board.coordinates[row][column + 1 + i] === "object") {
            isLegal = false;
          }
        } else if (column == 1) {
          if (typeof board.coordinates[row][column + 1 + i] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row][column - 1] === "object") {
            isLegal = false;
          }
        } else if (column >= 2 && column < 5) {
          if (typeof board.coordinates[row][column + 1 + i] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row][column - 1] === "object") {
            isLegal = false;
          }
        } else if (column == 5) {
          if (typeof board.coordinates[row][column + i] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row][column - 1] === "object") {
            isLegal = false;
          }
        } else if (column > 5) {
          isLegal = false;
        } //column will never be greater than length (5 for carrier)
      }
    }
    if (orientation == 1) {
      for (let i = 0; i < 5; i++) {
        if (typeof board.coordinates[row + i][column] === "object") {
          isLegal = false;
        }
        if (column == 0) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isLegal = false;
          }
        } else if (column == 1) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isLegal = false;
          }

          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isLegal = false;
          }
        } else if (column >= 2 && column <= 7) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isLegal = false;
          }

          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isLegal = false;
          }
        } else if (column == 8) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isLegal = false;
          }
        } else if (column == 9) {
          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isLegal = false;
          }
        }
        if (row == 0) {
          if (typeof board.coordinates[row + 1 + i][column] === "object") {
            isLegal = false;
          }
        } else if (row == 1) {
          if (typeof board.coordinates[row + i + 1][column] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row - 1][column] === "object") {
            isLegal = false;
          }
        } else if (row >= 2 && row < 5) {
          if (typeof board.coordinates[row + i + 1][column] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row - 1][column] === "object") {
            isLegal = false;
          }
        } else if (row == 5) {
          if (typeof board.coordinates[row + i][column] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row - 1][column] === "object") {
            isLegal = false;
          }
        } else if (row > 5) {
          isLegal = false;
        } //row will never be greater than length (5 for carrier)
      }
    }

    return isLegal;
  }
  if (ship == "battleship") {
    if (orientation == 0) {
      for (let i = 0; i < 4; i++) {
        if (typeof board.coordinates[row][column + i] === "object") {
          isLegal = false;
        } else if (row == 0) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isLegal = false;
          }
        } else if (row == 1) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isLegal = false;
          }

          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isLegal = false;
          }
        } else if (row >= 2 && row <= 7) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isLegal = false;
          }

          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isLegal = false;
          }
        } else if (row == 8) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isLegal = false;
          }
        } else if (row == 9) {
          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isLegal = false;
          }
        }
        if (column == 0) {
          if (typeof board.coordinates[row][column + 1 + i] === "object") {
            isLegal = false;
          }
        } else if (column == 1) {
          if (typeof board.coordinates[row][column + 1 + i] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row][column - 1] === "object") {
            isLegal = false;
          }
        } else if (column >= 2 && column < 6) {
          if (typeof board.coordinates[row][column + 1 + i] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row][column - 1] === "object") {
            isLegal = false;
          }
        } else if (column == 6) {
          if (typeof board.coordinates[row][column + i] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row][column - 1] === "object") {
            isLegal = false;
          }
        } else if (column > 6) {
          isLegal = false;
        } //column will never be greater than length (5 for carrier)
      }
    }
    if (orientation == 1) {
      for (let i = 0; i < 4; i++) {
        if (typeof board.coordinates[row + i][column] === "object") {
          isLegal = false;
        }
        if (column == 0) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isLegal = false;
          }
        } else if (column == 1) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isLegal = false;
          }

          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isLegal = false;
          }
        } else if (column >= 2 && column <= 7) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isLegal = false;
          }

          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isLegal = false;
          }
        } else if (column == 8) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isLegal = false;
          }
        } else if (column == 9) {
          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isLegal = false;
          }
        }
        if (row == 0) {
          if (typeof board.coordinates[row + 1 + i][column] === "object") {
            isLegal = false;
          }
        } else if (row == 1) {
          if (typeof board.coordinates[row + i + 1][column] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row - 1][column] === "object") {
            isLegal = false;
          }
        } else if (row >= 2 && row < 6) {
          if (typeof board.coordinates[row + i + 1][column] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row - 1][column] === "object") {
            isLegal = false;
          }
        } else if (row == 6) {
          if (typeof board.coordinates[row + i][column] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row - 1][column] === "object") {
            isLegal = false;
          }
        } else if (row > 6) {
          isLegal = false;
        } //row will never be greater than length (5 for carrier)
      }
    }
    return isLegal;
  }
  if (ship == "destroyer") {
    if (orientation == 0) {
      for (let i = 0; i < 3; i++) {
        if (typeof board.coordinates[row][column + i] === "object") {
          isLegal = false;
        } else if (row == 0) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isLegal = false;
          }
        } else if (row == 1) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isLegal = false;
          }

          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isLegal = false;
          }
        } else if (row >= 2 && row <= 7) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isLegal = false;
          }

          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isLegal = false;
          }
        } else if (row == 8) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isLegal = false;
          }
        } else if (row == 9) {
          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isLegal = false;
          }
        }
        if (column == 0) {
          if (typeof board.coordinates[row][column + 1 + i] === "object") {
            isLegal = false;
          }
        } else if (column == 1) {
          if (typeof board.coordinates[row][column + 1 + i] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row][column - 1] === "object") {
            isLegal = false;
          }
        } else if (column >= 2 && column < 7) {
          if (typeof board.coordinates[row][column + 1 + i] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row][column - 1] === "object") {
            isLegal = false;
          }
        } else if (column == 7) {
          if (typeof board.coordinates[row][column + i] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row][column - 1] === "object") {
            isLegal = false;
          }
        } else if (column > 7) {
          isLegal = false;
        } //column will never be greater than length (5 for carrier)
      }
    }
    if (orientation == 1) {
      for (let i = 0; i < 3; i++) {
        if (typeof board.coordinates[row + i][column] === "object") {
          isLegal = false;
        }
        if (column == 0) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isLegal = false;
          }
        } else if (column == 1) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isLegal = false;
          }

          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isLegal = false;
          }
        } else if (column >= 2 && column <= 7) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isLegal = false;
          }

          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isLegal = false;
          }
        } else if (column == 8) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isLegal = false;
          }
        } else if (column == 9) {
          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isLegal = false;
          }
        }
        if (row == 0) {
          if (typeof board.coordinates[row + 1 + i][column] === "object") {
            isLegal = false;
          }
        } else if (row == 1) {
          if (typeof board.coordinates[row + i + 1][column] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row - 1][column] === "object") {
            isLegal = false;
          }
        } else if (row >= 2 && row < 7) {
          if (typeof board.coordinates[row + i + 1][column] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row - 1][column] === "object") {
            isLegal = false;
          }
        } else if (row == 7) {
          if (typeof board.coordinates[row + i][column] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row - 1][column] === "object") {
            isLegal = false;
          }
        } else if (row > 7) {
          isLegal = false;
        } //row will never be greater than length (5 for carrier)
      }
    }
    return isLegal;
  }

  if (ship == "submarine") {
    if (orientation == 0) {
      for (let i = 0; i < 3; i++) {
        if (typeof board.coordinates[row][column + i] === "object") {
          isLegal = false;
        } else if (row == 0) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isLegal = false;
          }
        } else if (row == 1) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isLegal = false;
          }

          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isLegal = false;
          }
        } else if (row >= 2 && row <= 7) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isLegal = false;
          }

          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isLegal = false;
          }
        } else if (row == 8) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isLegal = false;
          }
        } else if (row == 9) {
          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isLegal = false;
          }
        }
        if (column == 0) {
          if (typeof board.coordinates[row][column + 1 + i] === "object") {
            isLegal = false;
          }
        } else if (column == 1) {
          if (typeof board.coordinates[row][column + 1 + i] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row][column - 1] === "object") {
            isLegal = false;
          }
        } else if (column >= 2 && column < 7) {
          if (typeof board.coordinates[row][column + 1 + i] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row][column - 1] === "object") {
            isLegal = false;
          }
        } else if (column == 7) {
          if (typeof board.coordinates[row][column + i] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row][column - 1] === "object") {
            isLegal = false;
          }
        } else if (column > 7) {
          isLegal = false;
        } //column will never be greater than length (5 for carrier)
      }
    }
    if (orientation == 1) {
      for (let i = 0; i < 3; i++) {
        if (typeof board.coordinates[row + i][column] === "object") {
          isLegal = false;
        }
        if (column == 0) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isLegal = false;
          }
        } else if (column == 1) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isLegal = false;
          }

          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isLegal = false;
          }
        } else if (column >= 2 && column <= 7) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isLegal = false;
          }

          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isLegal = false;
          }
        } else if (column == 8) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isLegal = false;
          }
        } else if (column == 9) {
          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isLegal = false;
          }
        }
        if (row == 0) {
          if (typeof board.coordinates[row + 1 + i][column] === "object") {
            isLegal = false;
          }
        } else if (row == 1) {
          if (typeof board.coordinates[row + i + 1][column] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row - 1][column] === "object") {
            isLegal = false;
          }
        } else if (row >= 2 && row < 7) {
          if (typeof board.coordinates[row + i + 1][column] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row - 1][column] === "object") {
            isLegal = false;
          }
        } else if (row == 7) {
          if (typeof board.coordinates[row + i][column] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row - 1][column] === "object") {
            isLegal = false;
          }
        } else if (row > 7) {
          isLegal = false;
        } //row will never be greater than length (5 for carrier)
      }
    }
    return isLegal;
  }

  if (ship == "patrolboat") {
    if (orientation == 0) {
      for (let i = 0; i < 2; i++) {
        if (typeof board.coordinates[row][column + i] === "object") {
          isLegal = false;
        } else if (row == 0) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isLegal = false;
          }
        } else if (row == 1) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isLegal = false;
          }

          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isLegal = false;
          }
        } else if (row >= 2 && row <= 7) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isLegal = false;
          }

          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isLegal = false;
          }
        } else if (row == 8) {
          if (typeof board.coordinates[row + 1][column + i] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isLegal = false;
          }
        } else if (row == 9) {
          if (typeof board.coordinates[row - 1][column + i] === "object") {
            isLegal = false;
          }
        }
        if (column == 0) {
          if (typeof board.coordinates[row][column + 1 + i] === "object") {
            isLegal = false;
          }
        } else if (column == 1) {
          if (typeof board.coordinates[row][column + 1 + i] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row][column - 1] === "object") {
            isLegal = false;
          }
        } else if (column >= 2 && column < 8) {
          if (typeof board.coordinates[row][column + 1 + i] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row][column - 1] === "object") {
            isLegal = false;
          }
        } else if (column == 8) {
          if (typeof board.coordinates[row][column + i] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row][column - 1] === "object") {
            isLegal = false;
          }
        } else if (column > 8) {
          isLegal = false;
        } //column will never be greater than length (5 for carrier)
      }
    }
    if (orientation == 1) {
      for (let i = 0; i < 2; i++) {
        if (typeof board.coordinates[row + i][column] === "object") {
          isLegal = false;
        }
        if (column == 0) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isLegal = false;
          }
        } else if (column == 1) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isLegal = false;
          }

          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isLegal = false;
          }
        } else if (column >= 2 && column <= 7) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isLegal = false;
          }

          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isLegal = false;
          }
        } else if (column == 8) {
          if (typeof board.coordinates[row + i][column + 1] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isLegal = false;
          }
        } else if (column == 9) {
          if (typeof board.coordinates[row + i][column - 1] === "object") {
            isLegal = false;
          }
        }
        if (row == 0) {
          if (typeof board.coordinates[row + 1 + i][column] === "object") {
            isLegal = false;
          }
        } else if (row == 1) {
          if (typeof board.coordinates[row + i + 1][column] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row - 1][column] === "object") {
            isLegal = false;
          }
        } else if (row >= 2 && row < 8) {
          if (typeof board.coordinates[row + i + 1][column] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row - 1][column] === "object") {
            isLegal = false;
          }
        } else if (row == 8) {
          if (typeof board.coordinates[row + i][column] === "object") {
            isLegal = false;
          }
          if (typeof board.coordinates[row - 1][column] === "object") {
            isLegal = false;
          }
        } else if (row > 8) {
          isLegal = false;
        } //row will never be greater than length (5 for carrier)
      }
    }
    return isLegal;
  }
}



/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "player": () => (/* binding */ player)
/* harmony export */ });
/* harmony import */ var _gameboardFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboardFactory */ "./src/gameboardFactory.js");


function player() {
  return (0,_gameboardFactory__WEBPACK_IMPORTED_MODULE_0__.gameboardFactory)();
}



/***/ }),

/***/ "./src/shipFactory.js":
/*!****************************!*\
  !*** ./src/shipFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shipFactory": () => (/* binding */ shipFactory)
/* harmony export */ });
function shipFactory(length, name, orientation, row, column) {
  let shipLocation = {};

  if (orientation == 0) {
    for (let i = 0; i < length; i++) {
      shipLocation[JSON.stringify([row, column + i])] = false;
    }
  } else if (orientation == 1) {
    for (let i = 0; i < length; i++) {
      shipLocation[JSON.stringify([row + i, column])] = false;
    }
  }

  function hit(coordArray) {
    for (const property in shipLocation) {
      if (JSON.stringify(coordArray) == property) {
        shipLocation[property] = true;
      }
    }
  }

  function isSunk() {
    let sunk = true;
    for (const property in shipLocation) {
      if (shipLocation[property] == false) {
        sunk = false;
      }
    }
    return sunk;
  }
  return { length, shipLocation, hit, isSunk, name, orientation };
}



/***/ }),

/***/ "./src/solveMisses.js":
/*!****************************!*\
  !*** ./src/solveMisses.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "solveMisses": () => (/* binding */ solveMisses)
/* harmony export */ });
function solveMisses(board, foundRow, foundColumn) {
  let shipLocationArr = board.coordinates[foundRow][foundColumn].shipLocation;
  let locationArray = [];
  for (const property in shipLocationArr) {
    locationArray.push(JSON.parse(property));
  }
  let locationOrientation =
    board.coordinates[foundRow][foundColumn].orientation;

  for (let i = 0; i < locationArray.length; i++) {
    let arr = locationArray[i];
    let r = arr[0];
    let c = arr[1];
    console.log(arr, r, c, locationOrientation);

    if (locationOrientation == 0) {
      if (r == 0) {
        board.coordinates[r + 1][c] = "miss";
      } else if (r > 0 && r < 9) {
        board.coordinates[r + 1][c] = "miss";
        board.coordinates[r - 1][c] = "miss";
      } else if (r == 9) {
        board.coordinates[r - 1][c] = "miss";
      }
      if (c == 0) {
        if (typeof board.coordinates[r][c + 1] !== "object") {
          board.coordinates[r][c + 1] = "miss";
        }
      } else if (c > 0 && c < 9) {
        if (typeof board.coordinates[r][c + 1] !== "object") {
          board.coordinates[r][c + 1] = "miss";
        }
        if (typeof board.coordinates[r][c - 1] !== "object") {
          board.coordinates[r][c - 1] = "miss";
        }
      } else if (c == 9) {
        if (typeof board.coordinates[r][c - 1] !== "object") {
          board.coordinates[r][c - 1] = "miss";
        }
      }
    }
    if (locationOrientation == 1) {
      if (c == 0) {
        board.coordinates[r][c + 1] = "miss";
      } else if (c > 0 && c < 9) {
        board.coordinates[r][c + 1] = "miss";
        board.coordinates[r][c - 1] = "miss";
      } else if (c == 9) {
        board.coordinates[r][c - 1] = "miss";
      }
      if (r == 0) {
        if (typeof board.coordinates[r + 1][c] !== "object") {
          board.coordinates[r + 1][c] = "miss";
        }
      } else if (r > 0 && r < 9) {
        if (typeof board.coordinates[r + 1][c] !== "object") {
          board.coordinates[r + 1][c] = "miss";
        }
        if (typeof board.coordinates[r - 1][c] !== "object") {
          board.coordinates[r - 1][c] = "miss";
        }
      } else if (r == 9) {
        if (typeof board.coordinates[r - 1][c] !== "object") {
          board.coordinates[r - 1][c] = "miss";
        }
      }
    }
  }
}




/***/ }),

/***/ "./src/icons/target.svg":
/*!******************************!*\
  !*** ./src/icons/target.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5caa5a9299ad169d64a4.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _computerFns_placeBattleship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./computerFns/placeBattleship */ "./src/computerFns/placeBattleship.js");
/* harmony import */ var _computerFns_placeCarrier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./computerFns/placeCarrier */ "./src/computerFns/placeCarrier.js");
/* harmony import */ var _computerFns_placeDestroyer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computerFns/placeDestroyer */ "./src/computerFns/placeDestroyer.js");
/* harmony import */ var _computerFns_placePatrolboat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./computerFns/placePatrolboat */ "./src/computerFns/placePatrolboat.js");
/* harmony import */ var _computerFns_placeSubmarine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./computerFns/placeSubmarine */ "./src/computerFns/placeSubmarine.js");
/* harmony import */ var _gameboardFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gameboardFactory */ "./src/gameboardFactory.js");
/* harmony import */ var _gameLoop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gameLoop */ "./src/gameLoop.js");
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shipFactory */ "./src/shipFactory.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _computerFns_randomAttack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./computerFns/randomAttack */ "./src/computerFns/randomAttack.js");
/* harmony import */ var _currentlyPlacingShip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./currentlyPlacingShip */ "./src/currentlyPlacingShip.js");
/* harmony import */ var _buildHarbor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./buildHarbor */ "./src/buildHarbor.js");













let isSettingUp = true;

// const draggables = document.querySelectorAll(".draggable");

// draggables.forEach((draggable) => {
//   draggable.addEventListener("dragstart", () => {
//     console.log("drag start");
//     draggable.classList.add("dragging");
//   });
//   draggable.addEventListener("dragend", () => {
//     draggable.classList.remove("dragging");
//   });
// });

// const segmented__carrier = document.getElementById("segmented__carrier");
// segmented__carrier.style.flexDirection = "row";
// segmented__carrier.addEventListener("dblclick", function () {
//   if (segmented__carrier.style.flexDirection == "row") {
//     segmented__carrier.style.flexDirection = "column";
//     setCarrierOrientation(1);
//     console.log(getCarrierOrientation());
//   } else if (segmented__carrier.style.flexDirection == "column") {
//     segmented__carrier.style.flexDirection = "row";
//     setCarrierOrientation(0);
//     console.log(getCarrierOrientation());
//   }
// });
// segmented__carrier.addEventListener("dragstart", function () {
//   setCurrentlyPlacingShip("carrier");
//   console.log(getCurrentlyPlacingShip());
// });
// const segmented__battleship = document.getElementById("segmented__battleship");
// segmented__battleship.style.flexDirection = "row";
// segmented__battleship.addEventListener("dblclick", function () {
//   if (segmented__battleship.style.flexDirection == "row") {
//     segmented__battleship.style.flexDirection = "column";
//     setCarrierOrientation(1);
//     console.log(getCarrierOrientation());
//   } else if (segmented__battleship.style.flexDirection == "column") {
//     segmented__battleship.style.flexDirection = "row";
//     setCarrierOrientation(0);
//     console.log(getCarrierOrientation());
//   }
// });
// segmented__battleship.addEventListener("dragstart", function () {
//   setCurrentlyPlacingShip("battleship");
//   console.log(getCurrentlyPlacingShip());
// });
// const segmented__destroyer = document.getElementById("segmented__destroyer");
// segmented__destroyer.style.flexDirection = "row";
// segmented__destroyer.addEventListener("dblclick", function () {
//   if (segmented__destroyer.style.flexDirection == "row") {
//     segmented__destroyer.style.flexDirection = "column";
//     setDestroyerOrientation(1);
//   } else if (segmented__destroyer.style.flexDirection == "column") {
//     segmented__destroyer.style.flexDirection = "row";
//     setDestroyerOrientation(0);
//   }
// });
// segmented__destroyer.addEventListener("dragstart", function () {
//   setCurrentlyPlacingShip("destroyer");
//   console.log(getCurrentlyPlacingShip());
// });
// const segmented__submarine = document.getElementById("segmented__submarine");
// segmented__submarine.style.flexDirection = "row";
// segmented__submarine.addEventListener("dblclick", function () {
//   if (segmented__submarine.style.flexDirection == "row") {
//     segmented__submarine.style.flexDirection = "column";
//     setSubmarineOrientation(1);
//   } else if (segmented__submarine.style.flexDirection == "column") {
//     segmented__submarine.style.flexDirection = "row";
//     setSubmarineOrientation(0);
//   }
// });
// segmented__submarine.addEventListener("dragstart", function () {
//   setCurrentlyPlacingShip("submarine");
//   console.log(getCurrentlyPlacingShip());
// });
// const segmented__patrolboat = document.getElementById("segmented__patrolboat");
// segmented__patrolboat.style.flexDirection = "row";
// segmented__patrolboat.addEventListener("dblclick", function () {
//   if (segmented__patrolboat.style.flexDirection == "row") {
//     segmented__patrolboat.style.flexDirection = "column";
//     setPatrolboatOrientation(1);
//   } else if (segmented__patrolboat.style.flexDirection == "column") {
//     segmented__patrolboat.style.flexDirection = "row";
//     setPatrolboatOrientation(0);
//   }
// });
// segmented__patrolboat.addEventListener("dragstart", function () {
//   setCurrentlyPlacingShip("patrolboat");
//   console.log(getCurrentlyPlacingShip());
// });
// carrier.addEventListener("dblclick", function () {
//   // carrier.style.transform = "rotate(90deg)";
// });

//first value is the row, second value is the column

// let gameboard = gameboardFactory();
// console.table(gameboard);
// gameboard.placeShip(0, 0, 5, "destroyer");
// gameboard.receiveAttack(0, 0);
// gameboard.receiveAttack(0, 1);
// gameboard.receiveAttack(0, 2);
// gameboard.receiveAttack(0, 3);
// gameboard.receiveAttack(0, 4);

//first parameter is the index (of the array) within coordinate array
//second parameter is the index (of the value) within the index (of the array)
(0,_buildHarbor__WEBPACK_IMPORTED_MODULE_11__.buildHarbor)();
(0,_gameLoop__WEBPACK_IMPORTED_MODULE_6__.gameLoop)();

// let board = gameboardFactory();

// for (let i = 0; i < 10; i++) {
//   randomAttack(board);
// }
// console.table(board.coordinates);

// placeCarrier(computerBoard);
// placeCarrier(computerBoard);
// placeCarrier(computerBoard);
// placeCarrier(computerBoard);

// gameLoop();
// let board = gameboardFactory();
// board.placeShip(0, 0, 5, "destroyer");
// board.receiveAttack(0, 0);
// board.receiveAttack(0, 1);
// board.receiveAttack(0, 2);
// board.receiveAttack(0, 3);
// board.receiveAttack(0, 4);
// console.log(board.isOver());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLHdCQUF3QixXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLE9BQU8sT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLHdCQUF3QixXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssd0JBQXdCLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyx3QkFBd0IsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLHdCQUF3QixXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssd0JBQXdCLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsb0RBQW9ELDJCQUEyQixHQUFHLFVBQVUsa0JBQWtCLDJCQUEy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QVk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsWUFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzJCOzs7Ozs7Ozs7Ozs7Ozs7O0FDeko0Qjs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsWUFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDd0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SitCOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsWUFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFlBQVk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQzBCOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEo2Qjs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFlBQVk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsWUFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDMkI7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SjRCOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsWUFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixZQUFZO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMEI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeko2QjtBQUNWOztBQUU3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQVc7QUFDbkI7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDd0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNxQjtBQUNDOztBQUU5QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSx5REFBVztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHlEQUFXO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUseURBQVc7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUseURBQVc7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNEJBQTRCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBOztBQUVvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsU3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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QUFDaEMsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUM0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3VCOzs7Ozs7Ozs7Ozs7Ozs7QUNmdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixPQUFPO0FBQzdCO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixPQUFPO0FBQzdCO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixPQUFPO0FBQzdCO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFD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QUNBZ0U7QUFDTjtBQUNJO0FBQ0U7QUFDRjtBQUNSO0FBQ2hCO0FBQ007QUFDdkI7QUFDcUM7QUFTMUI7QUFDWTs7QUFFNUM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTixJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7O0FBRUo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMERBQVc7QUFDWCxtREFBUTs7QUFFUjs7QUFFQSxtQkFBbUIsUUFBUTtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGhvZW5peC1yaXNpbmcvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Bob2VuaXgtcmlzaW5nLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9waG9lbml4LXJpc2luZy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Bob2VuaXgtcmlzaW5nLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Bob2VuaXgtcmlzaW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Bob2VuaXgtcmlzaW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9waG9lbml4LXJpc2luZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9waG9lbml4LXJpc2luZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9waG9lbml4LXJpc2luZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Bob2VuaXgtcmlzaW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcGhvZW5peC1yaXNpbmcvLi9zcmMvYnVpbGRCdXR0b25Cb3guanMiLCJ3ZWJwYWNrOi8vcGhvZW5peC1yaXNpbmcvLi9zcmMvYnVpbGRIYXJib3IuanMiLCJ3ZWJwYWNrOi8vcGhvZW5peC1yaXNpbmcvLi9zcmMvY29tcHV0ZXJGbnMvY29tcHV0ZXJQbGFjZVNoaXAuanMiLCJ3ZWJwYWNrOi8vcGhvZW5peC1yaXNpbmcvLi9zcmMvY29tcHV0ZXJGbnMvcGxhY2VCYXR0bGVzaGlwLmpzIiwid2VicGFjazovL3Bob2VuaXgtcmlzaW5nLy4vc3JjL2NvbXB1dGVyRm5zL3BsYWNlQ2Fycmllci5qcyIsIndlYnBhY2s6Ly9waG9lbml4LXJpc2luZy8uL3NyYy9jb21wdXRlckZucy9wbGFjZURlc3Ryb3llci5qcyIsIndlYnBhY2s6Ly9waG9lbml4LXJpc2luZy8uL3NyYy9jb21wdXRlckZucy9wbGFjZVBhdHJvbGJvYXQuanMiLCJ3ZWJwYWNrOi8vcGhvZW5peC1yaXNpbmcvLi9zcmMvY29tcHV0ZXJGbnMvcGxhY2VTdWJtYXJpbmUuanMiLCJ3ZWJwYWNrOi8vcGhvZW5peC1yaXNpbmcvLi9zcmMvY29tcHV0ZXJGbnMvcmFuZG9tQXR0YWNrLmpzIiwid2VicGFjazovL3Bob2VuaXgtcmlzaW5nLy4vc3JjL2NvbXB1dGVyRm5zL3NoaXBIdW50LmpzIiwid2VicGFjazovL3Bob2VuaXgtcmlzaW5nLy4vc3JjL2N1cnJlbnRseVBsYWNpbmdTaGlwLmpzIiwid2VicGFjazovL3Bob2VuaXgtcmlzaW5nLy4vc3JjL2Rpc3BsYXlCb2FyZC5qcyIsIndlYnBhY2s6Ly9waG9lbml4LXJpc2luZy8uL3NyYy9nYW1lRGlmZmljdWx0eS5qcyIsIndlYnBhY2s6Ly9waG9lbml4LXJpc2luZy8uL3NyYy9nYW1lTG9vcC5qcyIsIndlYnBhY2s6Ly9waG9lbml4LXJpc2luZy8uL3NyYy9nYW1lYm9hcmRGYWN0b3J5LmpzIiwid2VicGFjazovL3Bob2VuaXgtcmlzaW5nLy4vc3JjL2lzTGVnYWxNb3ZlLmpzIiwid2VicGFjazovL3Bob2VuaXgtcmlzaW5nLy4vc3JjL2lzTGVnYWxQbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcGhvZW5peC1yaXNpbmcvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL3Bob2VuaXgtcmlzaW5nLy4vc3JjL3NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL3Bob2VuaXgtcmlzaW5nLy4vc3JjL3NvbHZlTWlzc2VzLmpzIiwid2VicGFjazovL3Bob2VuaXgtcmlzaW5nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Bob2VuaXgtcmlzaW5nL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Bob2VuaXgtcmlzaW5nL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9waG9lbml4LXJpc2luZy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Bob2VuaXgtcmlzaW5nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGhvZW5peC1yaXNpbmcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9waG9lbml4LXJpc2luZy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9waG9lbml4LXJpc2luZy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcGhvZW5peC1yaXNpbmcvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcbn1cXG5cXG4udGV4dCB7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbmgyIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4taW5saW5lOiAycmVtO1xcbn1cXG5cXG5oMyB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbWFyZ2luLWlubGluZTogM3JlbTtcXG59XFxuXFxuI2JvYXJkT25lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgb3JkZXI6IC0xO1xcbn1cXG5cXG4ucm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgbWFyZ2luLXRvcDogLTFweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xcbn1cXG4ucm93IC5ib3gge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkOyAvKiB1c2UgaW5zdGVhZCBvZiBib3JkZXIgKi9cXG4gIG1hcmdpbi10b3A6IDFweDtcXG4gIG1hcmdpbi1sZWZ0OiAxcHg7XFxufVxcblxcbi5ib3gge1xcbiAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNTBweDtcXG59XFxuXFxuLmNhcnJpZXIge1xcbiAgaGVpZ2h0OiAxMzBweDtcXG4gIHdpZHRoOiAxMzBweDtcXG59XFxuLmJhdHRsZXNoaXAge1xcbiAgaGVpZ2h0OiAxMDVweDtcXG4gIHdpZHRoOiAxMDVweDtcXG59XFxuLmRlc3Ryb3llciB7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB3aWR0aDogODBweDtcXG59XFxuLnN1Ym1hcmluZSB7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB3aWR0aDogODBweDtcXG59XFxuLnBhdHJvbGJvYXQge1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgd2lkdGg6IDgwcHg7XFxufVxcblxcbiNwbGFjZV9jYXJyaWVyIHtcXG4gIHdpZHRoOiAxMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmJlMGI7XFxuXFxuICBjdXJzb3I6IG1vdmU7XFxufVxcbiNwbGFjZV9iYXR0bGVzaGlwIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYjU2MDc7XFxuXFxuICBjdXJzb3I6IG1vdmU7XFxufVxcbiNwbGFjZV9kZXN0cm95ZXIge1xcbiAgd2lkdGg6IDc1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcblxcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG4jcGxhY2Vfc3VibWFyaW5lIHtcXG4gIHdpZHRoOiA3NXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xcblxcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG4jcGxhY2VfcGF0cm9sYm9hdCB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwNmU7XFxuXFxuICBjdXJzb3I6IG1vdmU7XFxufVxcblxcbi5kcmFnZ2FibGUuZHJhZ2dpbmcge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4uYm9hdEJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5ib2F0Um93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuI2hhcmJvciB7XFxuICBvcmRlcjogLTE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gIGJvcmRlcjogYmxhY2sgMTBweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uc2VnbWVudCB7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jc2VnbWVudGVkX19jYXJyaWVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgLyogbWFyZ2luLXRvcDogLTFweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMXB4OyAqL1xcbn1cXG5cXG4jc2VnbWVudGVkX19jYXJyaWVyOmhvdmVyIHtcXG4gIGN1cnNvcjogZ3JhYjtcXG59XFxuXFxuI3NlZ21lbnRlZF9fY2FycmllciAuc2VnbWVudCB7XFxuICBvdXRsaW5lOiAxcHggc29saWQ7IC8qIHVzZSBpbnN0ZWFkIG9mIGJvcmRlciAqL1xcbiAgbWFyZ2luLXRvcDogMXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmJlMGI7XFxufVxcblxcbiNib2F0Qm94X19jYXJyaWVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICovXFxuICBoZWlnaHQ6IDEzMHB4O1xcbiAgd2lkdGg6IDEzMHB4O1xcbn1cXG5cXG4jc2VnbWVudGVkX19iYXR0bGVzaGlwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgbWFyZ2luLXRvcDogLTFweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xcbn1cXG5cXG4jc2VnbWVudGVkX19iYXR0bGVzaGlwOmhvdmVyIHtcXG4gIGN1cnNvcjogZ3JhYjtcXG59XFxuXFxuI3NlZ21lbnRlZF9fYmF0dGxlc2hpcCAuc2VnbWVudCB7XFxuICBvdXRsaW5lOiAxcHggc29saWQ7IC8qIHVzZSBpbnN0ZWFkIG9mIGJvcmRlciAqL1xcbiAgbWFyZ2luLXRvcDogMXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYzZjMjU7XFxufVxcblxcbiNib2F0Qm94X19iYXR0bGVzaGlwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICovXFxuICBoZWlnaHQ6IDEwNXB4O1xcbiAgd2lkdGg6IDEwNXB4O1xcbn1cXG5cXG4jc2VnbWVudGVkX19kZXN0cm95ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBtYXJnaW4tdG9wOiAtMXB4O1xcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XFxufVxcblxcbiNzZWdtZW50ZWRfX2Rlc3Ryb3llcjpob3ZlciB7XFxuICBjdXJzb3I6IGdyYWI7XFxufVxcblxcbiNzZWdtZW50ZWRfX2Rlc3Ryb3llciAuc2VnbWVudCB7XFxuICBvdXRsaW5lOiAxcHggc29saWQ7IC8qIHVzZSBpbnN0ZWFkIG9mIGJvcmRlciAqL1xcbiAgbWFyZ2luLXRvcDogMXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDM1NTc7XFxufVxcblxcbiNib2F0Qm94X19kZXN0cm95ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgKi9cXG4gIGhlaWdodDogODBweDtcXG4gIHdpZHRoOiA4MHB4O1xcbn1cXG5cXG4jc2VnbWVudGVkX19zdWJtYXJpbmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBtYXJnaW4tdG9wOiAtMXB4O1xcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XFxufVxcblxcbiNzZWdtZW50ZWRfX3N1Ym1hcmluZTpob3ZlciB7XFxuICBjdXJzb3I6IGdyYWI7XFxufVxcblxcbiNzZWdtZW50ZWRfX3N1Ym1hcmluZSAuc2VnbWVudCB7XFxuICBvdXRsaW5lOiAxcHggc29saWQ7IC8qIHVzZSBpbnN0ZWFkIG9mIGJvcmRlciAqL1xcbiAgbWFyZ2luLXRvcDogMXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MzM4ZWM7XFxufVxcblxcbiNib2F0Qm94X19zdWJtYXJpbmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgKi9cXG4gIGhlaWdodDogODBweDtcXG4gIHdpZHRoOiA4MHB4O1xcbn1cXG5cXG4jc2VnbWVudGVkX19wYXRyb2xib2F0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgbWFyZ2luLXRvcDogLTFweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xcbn1cXG5cXG4jc2VnbWVudGVkX19wYXRyb2xib2F0OmhvdmVyIHtcXG4gIGN1cnNvcjogZ3JhYjtcXG59XFxuXFxuI3NlZ21lbnRlZF9fcGF0cm9sYm9hdCAuc2VnbWVudCB7XFxuICBvdXRsaW5lOiAxcHggc29saWQ7IC8qIHVzZSBpbnN0ZWFkIG9mIGJvcmRlciAqL1xcbiAgbWFyZ2luLXRvcDogMXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YWM5MjY7XFxufVxcblxcbiNib2F0Qm94X19wYXRyb2xib2F0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICovXFxuICBoZWlnaHQ6IDU1cHg7XFxuICB3aWR0aDogNTVweDtcXG59XFxuXFxuI2NvbW1hbmRlcixcXG4jYWRtaXJhbCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxcmVtIDFyZW07XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGNvbG9yOiAjMGMwOTBhO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMjUwbXMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAxNTBtcyBlYXNlO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4jY29tbWFuZGVyOmhvdmVyLFxcbiNjb21tYW5kZXI6Zm9jdXMge1xcbiAgYmFja2dyb3VuZDogI2RhZjdhNjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbiNjb21tYW5kZXI6Zm9jdXMge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIHJnYigwLCAwLCAwKTtcXG4gIG91dGxpbmUtb2Zmc2V0OiAtNHB4O1xcbn1cXG5cXG4jY29tbWFuZGVyOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbn1cXG5cXG4jYWRtaXJhbDpob3ZlcixcXG4jYWRtaXJhbDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiAjZmZjY2NiO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuI2FkbWlyYWw6Zm9jdXMge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIHJnYigwLCAwLCAwKTtcXG4gIG91dGxpbmUtb2Zmc2V0OiAtNHB4O1xcbn1cXG5cXG4jYWRtaXJhbDphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuXFxuI3JlcGxhY2VTaGlwczpob3ZlcixcXG4jcmVwbGFjZVNoaXBzOmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuI3JlcGxhY2VTaGlwczpmb2N1cyB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgcmdiKDAsIDAsIDApO1xcbiAgb3V0bGluZS1vZmZzZXQ6IC00cHg7XFxufVxcblxcbiNyZXBsYWNlU2hpcHM6YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxufVxcblxcbiNidXR0b25Cb3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDI1cHg7XFxufVxcblxcbiNidXR0b25Cb3hUb3Age1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDI1cHg7XFxufVxcblxcbiNidXR0b25Cb3hCb3R0b20ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3JlcGxhY2VTaGlwcyB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxcmVtIDFyZW07XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGNvbG9yOiAjMGMwOTBhO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMjUwbXMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAxNTBtcyBlYXNlO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4jcGxheUFnYWluIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDFyZW0gMXJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGNvbG9yOiAjMGMwOTBhO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMjUwbXMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAxNTBtcyBlYXNlO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4jcGxheUFnYWluOmhvdmVyLFxcbiNwbGF5QWdhaW46Zm9jdXMge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4jcGxheUFnYWluOmZvY3VzIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxuICBvdXRsaW5lLW9mZnNldDogLTRweDtcXG59XFxuXFxuI3BsYXlBZ2FpbjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuXFxuI2xlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCwyQkFBMkI7RUFDM0IsdUJBQXVCO0VB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LFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcbn1cXG5cXG4udGV4dCB7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbmgyIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4taW5saW5lOiAycmVtO1xcbn1cXG5cXG5oMyB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbWFyZ2luLWlubGluZTogM3JlbTtcXG59XFxuXFxuI2JvYXJkT25lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgb3JkZXI6IC0xO1xcbn1cXG5cXG4ucm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgbWFyZ2luLXRvcDogLTFweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xcbn1cXG4ucm93IC5ib3gge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkOyAvKiB1c2UgaW5zdGVhZCBvZiBib3JkZXIgKi9cXG4gIG1hcmdpbi10b3A6IDFweDtcXG4gIG1hcmdpbi1sZWZ0OiAxcHg7XFxufVxcblxcbi5ib3gge1xcbiAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNTBweDtcXG59XFxuXFxuLmNhcnJpZXIge1xcbiAgaGVpZ2h0OiAxMzBweDtcXG4gIHdpZHRoOiAxMzBweDtcXG59XFxuLmJhdHRsZXNoaXAge1xcbiAgaGVpZ2h0OiAxMDVweDtcXG4gIHdpZHRoOiAxMDVweDtcXG59XFxuLmRlc3Ryb3llciB7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB3aWR0aDogODBweDtcXG59XFxuLnN1Ym1hcmluZSB7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB3aWR0aDogODBweDtcXG59XFxuLnBhdHJvbGJvYXQge1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgd2lkdGg6IDgwcHg7XFxufVxcblxcbiNwbGFjZV9jYXJyaWVyIHtcXG4gIHdpZHRoOiAxMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmJlMGI7XFxuXFxuICBjdXJzb3I6IG1vdmU7XFxufVxcbiNwbGFjZV9iYXR0bGVzaGlwIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYjU2MDc7XFxuXFxuICBjdXJzb3I6IG1vdmU7XFxufVxcbiNwbGFjZV9kZXN0cm95ZXIge1xcbiAgd2lkdGg6IDc1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcblxcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG4jcGxhY2Vfc3VibWFyaW5lIHtcXG4gIHdpZHRoOiA3NXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xcblxcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG4jcGxhY2VfcGF0cm9sYm9hdCB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwNmU7XFxuXFxuICBjdXJzb3I6IG1vdmU7XFxufVxcblxcbi5kcmFnZ2FibGUuZHJhZ2dpbmcge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4uYm9hdEJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5ib2F0Um93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuI2hhcmJvciB7XFxuICBvcmRlcjogLTE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gIGJvcmRlcjogYmxhY2sgMTBweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uc2VnbWVudCB7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jc2VnbWVudGVkX19jYXJyaWVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgLyogbWFyZ2luLXRvcDogLTFweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMXB4OyAqL1xcbn1cXG5cXG4jc2VnbWVudGVkX19jYXJyaWVyOmhvdmVyIHtcXG4gIGN1cnNvcjogZ3JhYjtcXG59XFxuXFxuI3NlZ21lbnRlZF9fY2FycmllciAuc2VnbWVudCB7XFxuICBvdXRsaW5lOiAxcHggc29saWQ7IC8qIHVzZSBpbnN0ZWFkIG9mIGJvcmRlciAqL1xcbiAgbWFyZ2luLXRvcDogMXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmJlMGI7XFxufVxcblxcbiNib2F0Qm94X19jYXJyaWVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICovXFxuICBoZWlnaHQ6IDEzMHB4O1xcbiAgd2lkdGg6IDEzMHB4O1xcbn1cXG5cXG4jc2VnbWVudGVkX19iYXR0bGVzaGlwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgbWFyZ2luLXRvcDogLTFweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xcbn1cXG5cXG4jc2VnbWVudGVkX19iYXR0bGVzaGlwOmhvdmVyIHtcXG4gIGN1cnNvcjogZ3JhYjtcXG59XFxuXFxuI3NlZ21lbnRlZF9fYmF0dGxlc2hpcCAuc2VnbWVudCB7XFxuICBvdXRsaW5lOiAxcHggc29saWQ7IC8qIHVzZSBpbnN0ZWFkIG9mIGJvcmRlciAqL1xcbiAgbWFyZ2luLXRvcDogMXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYzZjMjU7XFxufVxcblxcbiNib2F0Qm94X19iYXR0bGVzaGlwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICovXFxuICBoZWlnaHQ6IDEwNXB4O1xcbiAgd2lkdGg6IDEwNXB4O1xcbn1cXG5cXG4jc2VnbWVudGVkX19kZXN0cm95ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBtYXJnaW4tdG9wOiAtMXB4O1xcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XFxufVxcblxcbiNzZWdtZW50ZWRfX2Rlc3Ryb3llcjpob3ZlciB7XFxuICBjdXJzb3I6IGdyYWI7XFxufVxcblxcbiNzZWdtZW50ZWRfX2Rlc3Ryb3llciAuc2VnbWVudCB7XFxuICBvdXRsaW5lOiAxcHggc29saWQ7IC8qIHVzZSBpbnN0ZWFkIG9mIGJvcmRlciAqL1xcbiAgbWFyZ2luLXRvcDogMXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDM1NTc7XFxufVxcblxcbiNib2F0Qm94X19kZXN0cm95ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgKi9cXG4gIGhlaWdodDogODBweDtcXG4gIHdpZHRoOiA4MHB4O1xcbn1cXG5cXG4jc2VnbWVudGVkX19zdWJtYXJpbmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBtYXJnaW4tdG9wOiAtMXB4O1xcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XFxufVxcblxcbiNzZWdtZW50ZWRfX3N1Ym1hcmluZTpob3ZlciB7XFxuICBjdXJzb3I6IGdyYWI7XFxufVxcblxcbiNzZWdtZW50ZWRfX3N1Ym1hcmluZSAuc2VnbWVudCB7XFxuICBvdXRsaW5lOiAxcHggc29saWQ7IC8qIHVzZSBpbnN0ZWFkIG9mIGJvcmRlciAqL1xcbiAgbWFyZ2luLXRvcDogMXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MzM4ZWM7XFxufVxcblxcbiNib2F0Qm94X19zdWJtYXJpbmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgKi9cXG4gIGhlaWdodDogODBweDtcXG4gIHdpZHRoOiA4MHB4O1xcbn1cXG5cXG4jc2VnbWVudGVkX19wYXRyb2xib2F0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgbWFyZ2luLXRvcDogLTFweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xcbn1cXG5cXG4jc2VnbWVudGVkX19wYXRyb2xib2F0OmhvdmVyIHtcXG4gIGN1cnNvcjogZ3JhYjtcXG59XFxuXFxuI3NlZ21lbnRlZF9fcGF0cm9sYm9hdCAuc2VnbWVudCB7XFxuICBvdXRsaW5lOiAxcHggc29saWQ7IC8qIHVzZSBpbnN0ZWFkIG9mIGJvcmRlciAqL1xcbiAgbWFyZ2luLXRvcDogMXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YWM5MjY7XFxufVxcblxcbiNib2F0Qm94X19wYXRyb2xib2F0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICovXFxuICBoZWlnaHQ6IDU1cHg7XFxuICB3aWR0aDogNTVweDtcXG59XFxuXFxuI2NvbW1hbmRlcixcXG4jYWRtaXJhbCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxcmVtIDFyZW07XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGNvbG9yOiAjMGMwOTBhO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMjUwbXMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAxNTBtcyBlYXNlO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4jY29tbWFuZGVyOmhvdmVyLFxcbiNjb21tYW5kZXI6Zm9jdXMge1xcbiAgYmFja2dyb3VuZDogI2RhZjdhNjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbiNjb21tYW5kZXI6Zm9jdXMge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIHJnYigwLCAwLCAwKTtcXG4gIG91dGxpbmUtb2Zmc2V0OiAtNHB4O1xcbn1cXG5cXG4jY29tbWFuZGVyOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbn1cXG5cXG4jYWRtaXJhbDpob3ZlcixcXG4jYWRtaXJhbDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiAjZmZjY2NiO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuI2FkbWlyYWw6Zm9jdXMge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIHJnYigwLCAwLCAwKTtcXG4gIG91dGxpbmUtb2Zmc2V0OiAtNHB4O1xcbn1cXG5cXG4jYWRtaXJhbDphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuXFxuI3JlcGxhY2VTaGlwczpob3ZlcixcXG4jcmVwbGFjZVNoaXBzOmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuI3JlcGxhY2VTaGlwczpmb2N1cyB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgcmdiKDAsIDAsIDApO1xcbiAgb3V0bGluZS1vZmZzZXQ6IC00cHg7XFxufVxcblxcbiNyZXBsYWNlU2hpcHM6YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxufVxcblxcbiNidXR0b25Cb3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDI1cHg7XFxufVxcblxcbiNidXR0b25Cb3hUb3Age1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDI1cHg7XFxufVxcblxcbiNidXR0b25Cb3hCb3R0b20ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3JlcGxhY2VTaGlwcyB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxcmVtIDFyZW07XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGNvbG9yOiAjMGMwOTBhO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMjUwbXMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAxNTBtcyBlYXNlO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4jcGxheUFnYWluIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDFyZW0gMXJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGNvbG9yOiAjMGMwOTBhO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMjUwbXMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAxNTBtcyBlYXNlO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4jcGxheUFnYWluOmhvdmVyLFxcbiNwbGF5QWdhaW46Zm9jdXMge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4jcGxheUFnYWluOmZvY3VzIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxuICBvdXRsaW5lLW9mZnNldDogLTRweDtcXG59XFxuXFxuI3BsYXlBZ2FpbjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuXFxuI2xlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5sZXQgYnV0dG9uQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmJ1dHRvbkJveC5pZCA9IFwiYnV0dG9uQm94XCI7XG5sZXQgYnV0dG9uQm94VG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmJ1dHRvbkJveFRvcC5pZCA9IFwiYnV0dG9uQm94VG9wXCI7XG5sZXQgYnV0dG9uQm94Qm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmJ1dHRvbkJveEJvdHRvbS5pZCA9IFwiYnV0dG9uQm94Qm90dG9tXCI7XG5cbmZ1bmN0aW9uIGJ1aWxkQnV0dG9uQm94KCkge1xuICBidXR0b25Cb3guYXBwZW5kQ2hpbGQoYnV0dG9uQm94VG9wKTtcbiAgYnV0dG9uQm94LmFwcGVuZENoaWxkKGJ1dHRvbkJveEJvdHRvbSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uQm94KTtcbn1cbmV4cG9ydCB7IGJ1aWxkQnV0dG9uQm94IH07XG4iLCJpbXBvcnQge1xuICBnZXRDYXJyaWVyT3JpZW50YXRpb24sXG4gIGdldEN1cnJlbnRseVBsYWNpbmdTaGlwLFxuICBzZXRCYXR0bGVzaGlwT3JpZW50YXRpb24sXG4gIGdldEJhdHRsZXNoaXBPcmllbnRhdGlvbixcbiAgc2V0Q2Fycmllck9yaWVudGF0aW9uLFxuICBzZXRDdXJyZW50bHlQbGFjaW5nU2hpcCxcbiAgc2V0RGVzdHJveWVyT3JpZW50YXRpb24sXG4gIHNldFBhdHJvbGJvYXRPcmllbnRhdGlvbixcbiAgc2V0U3VibWFyaW5lT3JpZW50YXRpb24sXG59IGZyb20gXCIuL2N1cnJlbnRseVBsYWNpbmdTaGlwXCI7XG5cbmZ1bmN0aW9uIGJ1aWxkSGFyYm9yKCkge1xuICAvL2VsZW1lbnQgaW5zdGFudGlhdGlvblxuICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgbGV0IGhhcmJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhhcmJvci5pZCA9IFwiaGFyYm9yXCI7XG4gIGxldCBib2F0Um93MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJvYXRSb3cxLmNsYXNzTmFtZSA9IFwiYm9hdFJvd1wiO1xuICBsZXQgYm9hdFJvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBib2F0Um93Mi5jbGFzc05hbWUgPSBcImJvYXRSb3dcIjtcbiAgbGV0IGJvYXRCb3hfX2NhcnJpZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBib2F0Qm94X19jYXJyaWVyLmlkID0gXCJib2F0Qm94X19jYXJyaWVyXCI7XG4gIGxldCBzZWdtZW50ZWRfX2NhcnJpZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWdtZW50ZWRfX2NhcnJpZXIuaWQgPSBcInNlZ21lbnRlZF9fY2FycmllclwiO1xuICBzZWdtZW50ZWRfX2NhcnJpZXIuZHJhZ2dhYmxlID0gXCJ0cnVlXCI7XG4gIHNlZ21lbnRlZF9fY2Fycmllci50aXRsZSA9IFwiQ2FycmllclwiO1xuICBsZXQgYm9hdEJveF9fYmF0dGxlc2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJvYXRCb3hfX2JhdHRsZXNoaXAuaWQgPSBcImJvYXRCb3hfX2JhdHRsZXNoaXBcIjtcbiAgbGV0IHNlZ21lbnRlZF9fYmF0dGxlc2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNlZ21lbnRlZF9fYmF0dGxlc2hpcC5pZCA9IFwic2VnbWVudGVkX19iYXR0bGVzaGlwXCI7XG4gIHNlZ21lbnRlZF9fYmF0dGxlc2hpcC5kcmFnZ2FibGUgPSBcInRydWVcIjtcbiAgc2VnbWVudGVkX19iYXR0bGVzaGlwLnRpdGxlID0gXCJCYXR0bGVzaGlwXCI7XG4gIGxldCBib2F0Qm94X19kZXN0cm95ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBib2F0Qm94X19kZXN0cm95ZXIuaWQgPSBcImJvYXRCb3hfX2Rlc3Ryb3llclwiO1xuICBsZXQgc2VnbWVudGVkX19kZXN0cm95ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWdtZW50ZWRfX2Rlc3Ryb3llci5pZCA9IFwic2VnbWVudGVkX19kZXN0cm95ZXJcIjtcbiAgc2VnbWVudGVkX19kZXN0cm95ZXIuZHJhZ2dhYmxlID0gXCJ0cnVlXCI7XG4gIHNlZ21lbnRlZF9fZGVzdHJveWVyLnRpdGxlID0gXCJEZXN0cm95ZXJcIjtcbiAgbGV0IGJvYXRCb3hfX3N1Ym1hcmluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJvYXRCb3hfX3N1Ym1hcmluZS5pZCA9IFwiYm9hdEJveF9fc3VibWFyaW5lXCI7XG4gIGxldCBzZWdtZW50ZWRfX3N1Ym1hcmluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNlZ21lbnRlZF9fc3VibWFyaW5lLmlkID0gXCJzZWdtZW50ZWRfX3N1Ym1hcmluZVwiO1xuICBzZWdtZW50ZWRfX3N1Ym1hcmluZS5kcmFnZ2FibGUgPSBcInRydWVcIjtcbiAgc2VnbWVudGVkX19zdWJtYXJpbmUudGl0bGUgPSBcIlN1Ym1hcmluZVwiO1xuICBsZXQgYm9hdEJveF9fcGF0cm9sYm9hdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJvYXRCb3hfX3BhdHJvbGJvYXQuaWQgPSBcImJvYXRCb3hfX3BhdHJvbGJvYXRcIjtcbiAgbGV0IHNlZ21lbnRlZF9fcGF0cm9sYm9hdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNlZ21lbnRlZF9fcGF0cm9sYm9hdC5pZCA9IFwic2VnbWVudGVkX19wYXRyb2xib2F0XCI7XG4gIHNlZ21lbnRlZF9fcGF0cm9sYm9hdC5kcmFnZ2FibGUgPSBcInRydWVcIjtcbiAgc2VnbWVudGVkX19wYXRyb2xib2F0LnRpdGxlID0gXCJQYXRyb2wgQm9hdFwiO1xuICAvL2VsZW1lbnQgaW5zdGFudGlhdGlvblxuICAvL2RyYWdnYWJsZXNcbiAgY29uc3QgZHJhZ2dhYmxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHJhZ2dhYmxlXCIpO1xuXG4gIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgZHJhZ2dhYmxlLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgKCkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLmNsYXNzTGlzdC5hZGQoXCJkcmFnZ2luZ1wiKTtcbiAgICB9KTtcbiAgICBkcmFnZ2FibGUuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbmRcIiwgKCkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLmNsYXNzTGlzdC5yZW1vdmUoXCJkcmFnZ2luZ1wiKTtcbiAgICB9KTtcbiAgfSk7XG4gIC8vZHJhZ2dhYmxlc1xuICAvL2V2ZW50IGxpc3RlbmVyc1xuICBzZWdtZW50ZWRfX2NhcnJpZXIuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XG4gIHNlZ21lbnRlZF9fY2Fycmllci5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChzZWdtZW50ZWRfX2NhcnJpZXIuc3R5bGUuZmxleERpcmVjdGlvbiA9PSBcInJvd1wiKSB7XG4gICAgICBzZWdtZW50ZWRfX2NhcnJpZXIuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XG4gICAgICBzZXRDYXJyaWVyT3JpZW50YXRpb24oMSk7XG4gICAgfSBlbHNlIGlmIChzZWdtZW50ZWRfX2NhcnJpZXIuc3R5bGUuZmxleERpcmVjdGlvbiA9PSBcImNvbHVtblwiKSB7XG4gICAgICBzZWdtZW50ZWRfX2NhcnJpZXIuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XG4gICAgICBzZXRDYXJyaWVyT3JpZW50YXRpb24oMCk7XG4gICAgfVxuICB9KTtcbiAgc2VnbWVudGVkX19jYXJyaWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZnVuY3Rpb24gKCkge1xuICAgIHNldEN1cnJlbnRseVBsYWNpbmdTaGlwKFwiY2FycmllclwiKTtcbiAgfSk7XG4gIHNlZ21lbnRlZF9fYmF0dGxlc2hpcC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcbiAgc2VnbWVudGVkX19iYXR0bGVzaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNlZ21lbnRlZF9fYmF0dGxlc2hpcC5zdHlsZS5mbGV4RGlyZWN0aW9uID09IFwicm93XCIpIHtcbiAgICAgIHNlZ21lbnRlZF9fYmF0dGxlc2hpcC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcbiAgICAgIHNldEJhdHRsZXNoaXBPcmllbnRhdGlvbigxKTtcbiAgICB9IGVsc2UgaWYgKHNlZ21lbnRlZF9fYmF0dGxlc2hpcC5zdHlsZS5mbGV4RGlyZWN0aW9uID09IFwiY29sdW1uXCIpIHtcbiAgICAgIHNlZ21lbnRlZF9fYmF0dGxlc2hpcC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcbiAgICAgIHNldEJhdHRsZXNoaXBPcmllbnRhdGlvbigwKTtcbiAgICB9XG4gIH0pO1xuICBzZWdtZW50ZWRfX2JhdHRsZXNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgc2V0Q3VycmVudGx5UGxhY2luZ1NoaXAoXCJiYXR0bGVzaGlwXCIpO1xuICB9KTtcblxuICBzZWdtZW50ZWRfX2Rlc3Ryb3llci5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcbiAgc2VnbWVudGVkX19kZXN0cm95ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc2VnbWVudGVkX19kZXN0cm95ZXIuc3R5bGUuZmxleERpcmVjdGlvbiA9PSBcInJvd1wiKSB7XG4gICAgICBzZWdtZW50ZWRfX2Rlc3Ryb3llci5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcbiAgICAgIHNldERlc3Ryb3llck9yaWVudGF0aW9uKDEpO1xuICAgIH0gZWxzZSBpZiAoc2VnbWVudGVkX19kZXN0cm95ZXIuc3R5bGUuZmxleERpcmVjdGlvbiA9PSBcImNvbHVtblwiKSB7XG4gICAgICBzZWdtZW50ZWRfX2Rlc3Ryb3llci5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcbiAgICAgIHNldERlc3Ryb3llck9yaWVudGF0aW9uKDApO1xuICAgIH1cbiAgfSk7XG4gIHNlZ21lbnRlZF9fZGVzdHJveWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZnVuY3Rpb24gKCkge1xuICAgIHNldEN1cnJlbnRseVBsYWNpbmdTaGlwKFwiZGVzdHJveWVyXCIpO1xuICB9KTtcblxuICBzZWdtZW50ZWRfX3N1Ym1hcmluZS5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcbiAgc2VnbWVudGVkX19zdWJtYXJpbmUuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc2VnbWVudGVkX19zdWJtYXJpbmUuc3R5bGUuZmxleERpcmVjdGlvbiA9PSBcInJvd1wiKSB7XG4gICAgICBzZWdtZW50ZWRfX3N1Ym1hcmluZS5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcbiAgICAgIHNldFN1Ym1hcmluZU9yaWVudGF0aW9uKDEpO1xuICAgIH0gZWxzZSBpZiAoc2VnbWVudGVkX19zdWJtYXJpbmUuc3R5bGUuZmxleERpcmVjdGlvbiA9PSBcImNvbHVtblwiKSB7XG4gICAgICBzZWdtZW50ZWRfX3N1Ym1hcmluZS5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcbiAgICAgIHNldFN1Ym1hcmluZU9yaWVudGF0aW9uKDApO1xuICAgIH1cbiAgfSk7XG4gIHNlZ21lbnRlZF9fc3VibWFyaW5lLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZnVuY3Rpb24gKCkge1xuICAgIHNldEN1cnJlbnRseVBsYWNpbmdTaGlwKFwic3VibWFyaW5lXCIpO1xuICB9KTtcblxuICBzZWdtZW50ZWRfX3BhdHJvbGJvYXQuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XG4gIHNlZ21lbnRlZF9fcGF0cm9sYm9hdC5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChzZWdtZW50ZWRfX3BhdHJvbGJvYXQuc3R5bGUuZmxleERpcmVjdGlvbiA9PSBcInJvd1wiKSB7XG4gICAgICBzZWdtZW50ZWRfX3BhdHJvbGJvYXQuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XG4gICAgICBzZXRQYXRyb2xib2F0T3JpZW50YXRpb24oMSk7XG4gICAgfSBlbHNlIGlmIChzZWdtZW50ZWRfX3BhdHJvbGJvYXQuc3R5bGUuZmxleERpcmVjdGlvbiA9PSBcImNvbHVtblwiKSB7XG4gICAgICBzZWdtZW50ZWRfX3BhdHJvbGJvYXQuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XG4gICAgICBzZXRQYXRyb2xib2F0T3JpZW50YXRpb24oMCk7XG4gICAgfVxuICB9KTtcbiAgc2VnbWVudGVkX19wYXRyb2xib2F0LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZnVuY3Rpb24gKCkge1xuICAgIHNldEN1cnJlbnRseVBsYWNpbmdTaGlwKFwicGF0cm9sYm9hdFwiKTtcbiAgfSk7XG4gIC8vZXZlbnQgbGlzdGVuZXJzXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICBsZXQgc2VnbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VnbWVudC5jbGFzc05hbWUgPSBcInNlZ21lbnRcIjtcbiAgICBzZWdtZW50ZWRfX2NhcnJpZXIuYXBwZW5kQ2hpbGQoc2VnbWVudCk7XG4gIH1cbiAgYm9hdEJveF9fY2Fycmllci5hcHBlbmRDaGlsZChzZWdtZW50ZWRfX2NhcnJpZXIpO1xuICAvL1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgIGxldCBzZWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWdtZW50LmNsYXNzTmFtZSA9IFwic2VnbWVudFwiO1xuICAgIHNlZ21lbnRlZF9fYmF0dGxlc2hpcC5hcHBlbmRDaGlsZChzZWdtZW50KTtcbiAgfVxuICBib2F0Qm94X19iYXR0bGVzaGlwLmFwcGVuZENoaWxkKHNlZ21lbnRlZF9fYmF0dGxlc2hpcCk7XG4gIC8vXG4gIGJvYXRSb3cxLmFwcGVuZENoaWxkKGJvYXRCb3hfX2NhcnJpZXIpO1xuICBib2F0Um93MS5hcHBlbmRDaGlsZChib2F0Qm94X19iYXR0bGVzaGlwKTtcbiAgLy9cbiAgaGFyYm9yLmFwcGVuZENoaWxkKGJvYXRSb3cxKTtcbiAgLy9cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICBsZXQgc2VnbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VnbWVudC5jbGFzc05hbWUgPSBcInNlZ21lbnRcIjtcbiAgICBzZWdtZW50ZWRfX2Rlc3Ryb3llci5hcHBlbmRDaGlsZChzZWdtZW50KTtcbiAgfVxuICBib2F0Qm94X19kZXN0cm95ZXIuYXBwZW5kQ2hpbGQoc2VnbWVudGVkX19kZXN0cm95ZXIpO1xuICAvL1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgIGxldCBzZWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWdtZW50LmNsYXNzTmFtZSA9IFwic2VnbWVudFwiO1xuICAgIHNlZ21lbnRlZF9fc3VibWFyaW5lLmFwcGVuZENoaWxkKHNlZ21lbnQpO1xuICB9XG4gIGJvYXRCb3hfX3N1Ym1hcmluZS5hcHBlbmRDaGlsZChzZWdtZW50ZWRfX3N1Ym1hcmluZSk7XG4gIC8vXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgbGV0IHNlZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNlZ21lbnQuY2xhc3NOYW1lID0gXCJzZWdtZW50XCI7XG4gICAgc2VnbWVudGVkX19wYXRyb2xib2F0LmFwcGVuZENoaWxkKHNlZ21lbnQpO1xuICB9XG4gIGJvYXRCb3hfX3BhdHJvbGJvYXQuYXBwZW5kQ2hpbGQoc2VnbWVudGVkX19wYXRyb2xib2F0KTtcbiAgLy9cbiAgYm9hdFJvdzIuYXBwZW5kQ2hpbGQoYm9hdEJveF9fZGVzdHJveWVyKTtcbiAgYm9hdFJvdzIuYXBwZW5kQ2hpbGQoYm9hdEJveF9fc3VibWFyaW5lKTtcbiAgYm9hdFJvdzIuYXBwZW5kQ2hpbGQoYm9hdEJveF9fcGF0cm9sYm9hdCk7XG4gIC8vXG4gIGhhcmJvci5hcHBlbmRDaGlsZChib2F0Um93Mik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGFyYm9yKTtcbn1cbmV4cG9ydCB7IGJ1aWxkSGFyYm9yIH07XG4iLCJpbXBvcnQgeyBwbGFjZUJhdHRsZXNoaXAgfSBmcm9tIFwiLi9wbGFjZUJhdHRsZXNoaXBcIjtcbmltcG9ydCB7IHBsYWNlQ2FycmllciB9IGZyb20gXCIuL3BsYWNlQ2FycmllclwiO1xuaW1wb3J0IHsgcGxhY2VEZXN0cm95ZXIgfSBmcm9tIFwiLi9wbGFjZURlc3Ryb3llclwiO1xuaW1wb3J0IHsgcGxhY2VQYXRyb2xib2F0IH0gZnJvbSBcIi4vcGxhY2VQYXRyb2xib2F0XCI7XG5pbXBvcnQgeyBwbGFjZVN1Ym1hcmluZSB9IGZyb20gXCIuL3BsYWNlU3VibWFyaW5lXCI7XG5cbmZ1bmN0aW9uIGNvbXB1dGVyUGxhY2VTaGlwcyhjb21wdXRlckJvYXJkKSB7XG4gIHBsYWNlQ2Fycmllcihjb21wdXRlckJvYXJkKTtcbiAgcGxhY2VCYXR0bGVzaGlwKGNvbXB1dGVyQm9hcmQpO1xuICBwbGFjZURlc3Ryb3llcihjb21wdXRlckJvYXJkKTtcbiAgcGxhY2VTdWJtYXJpbmUoY29tcHV0ZXJCb2FyZCk7XG4gIHBsYWNlUGF0cm9sYm9hdChjb21wdXRlckJvYXJkKTtcbn1cbmV4cG9ydCB7IGNvbXB1dGVyUGxhY2VTaGlwcyB9O1xuIiwiaW1wb3J0IHsgZ2FtZWJvYXJkRmFjdG9yeSB9IGZyb20gXCIuLi9nYW1lYm9hcmRGYWN0b3J5XCI7XG5cbmZ1bmN0aW9uIHBsYWNlQmF0dGxlc2hpcChib2FyZCkge1xuICBsZXQgbGVuZ3RoID0gNDtcbiAgbGV0IGlzRm91bmQgPSBmYWxzZTtcbiAgbGV0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgbGV0IGNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgbGV0IG9yaWVudGF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG5cbiAgd2hpbGUgKGlzRm91bmQgPT0gZmFsc2UpIHtcbiAgICBvcmllbnRhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgIHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBjb2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgaXNGb3VuZCA9IHRydWU7XG5cbiAgICAvL2hvcml6b250YWxcbiAgICBpZiAob3JpZW50YXRpb24gPT0gMCkge1xuICAgICAgY29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocm93ID09IDApIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA9PSAxKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID49IDIgJiYgcm93IDw9IDcpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPT0gOCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPT0gOSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbHVtbiA9PSAwKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiArIDEgKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPT0gMSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gKyAxICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA+PSAyICYmIGNvbHVtbiA8IDYpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uICsgMSArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPT0gNikge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy9jb2x1bW4gd2lsbCBuZXZlciBiZSBncmVhdGVyIHRoYW4gbGVuZ3RoICg1IGZvciBjYXJyaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAob3JpZW50YXRpb24gPT0gMSkge1xuICAgICAgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNyk7XG4gICAgICBjb2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sdW1uID09IDApIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiArIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA9PSAxKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gKyAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID49IDIgJiYgY29sdW1uIDw9IDcpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiArIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPT0gOCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uICsgMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPT0gOSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdyA9PSAwKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyAxICsgaV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPT0gMSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaSArIDFdW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA+PSAyICYmIHJvdyA8IDYpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGkgKyAxXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPT0gNikge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy9yb3cgd2lsbCBuZXZlciBiZSBncmVhdGVyIHRoYW4gbGVuZ3RoICg1IGZvciBjYXJyaWVyKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zb2xlLmxvZyhyb3csIGNvbHVtbiwgb3JpZW50YXRpb24sIFwiYmF0dGxlc2hpcFwiKTtcbiAgYm9hcmQucGxhY2VTaGlwKHJvdywgY29sdW1uLCBsZW5ndGgsIFwiYmF0dGxlc2hpcFwiLCBvcmllbnRhdGlvbik7XG59XG5leHBvcnQgeyBwbGFjZUJhdHRsZXNoaXAgfTtcbiIsImltcG9ydCB7IGdhbWVib2FyZEZhY3RvcnkgfSBmcm9tIFwiLi4vZ2FtZWJvYXJkRmFjdG9yeVwiO1xuXG5mdW5jdGlvbiBwbGFjZUNhcnJpZXIoYm9hcmQpIHtcbiAgbGV0IGxlbmd0aCA9IDU7XG4gIGxldCBpc0ZvdW5kID0gZmFsc2U7XG4gIGxldCByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIGxldCBjb2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIGxldCBvcmllbnRhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuXG4gIHdoaWxlIChpc0ZvdW5kID09IGZhbHNlKSB7XG4gICAgb3JpZW50YXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgY29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGlzRm91bmQgPSB0cnVlO1xuXG4gICAgLy9ob3Jpem9udGFsXG4gICAgaWYgKG9yaWVudGF0aW9uID09IDApIHtcbiAgICAgIGNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyb3cgPT0gMCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID09IDEpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPj0gMiAmJiByb3cgPD0gNykge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA9PSA4KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA9PSA5KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sdW1uID09IDApIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uICsgMSArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA9PSAxKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiArIDEgKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID49IDIgJiYgY29sdW1uIDwgNSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gKyAxICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA9PSA1KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvL2NvbHVtbiB3aWxsIG5ldmVyIGJlIGdyZWF0ZXIgdGhhbiBsZW5ndGggKDUgZm9yIGNhcnJpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvcmllbnRhdGlvbiA9PSAxKSB7XG4gICAgICByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KTtcbiAgICAgIGNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2x1bW4gPT0gMCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uICsgMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID09IDEpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiArIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPj0gMiAmJiBjb2x1bW4gPD0gNykge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uICsgMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA9PSA4KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gKyAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA9PSA5KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocm93ID09IDApIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIDEgKyBpXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA9PSAxKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpICsgMV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID49IDIgJiYgcm93IDwgNSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaSArIDFdW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA9PSA1KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvL3JvdyB3aWxsIG5ldmVyIGJlIGdyZWF0ZXIgdGhhbiBsZW5ndGggKDUgZm9yIGNhcnJpZXIpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYm9hcmQucGxhY2VTaGlwKHJvdywgY29sdW1uLCBsZW5ndGgsIFwiY2FycmllclwiLCBvcmllbnRhdGlvbik7XG59XG5leHBvcnQgeyBwbGFjZUNhcnJpZXIgfTtcbiIsImltcG9ydCB7IGdhbWVib2FyZEZhY3RvcnkgfSBmcm9tIFwiLi4vZ2FtZWJvYXJkRmFjdG9yeVwiO1xuXG5mdW5jdGlvbiBwbGFjZURlc3Ryb3llcihib2FyZCkge1xuICBsZXQgbGVuZ3RoID0gMztcbiAgbGV0IGlzRm91bmQgPSBmYWxzZTtcbiAgbGV0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgbGV0IGNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgbGV0IG9yaWVudGF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG5cbiAgd2hpbGUgKGlzRm91bmQgPT0gZmFsc2UpIHtcbiAgICBvcmllbnRhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgIHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBjb2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgaXNGb3VuZCA9IHRydWU7XG5cbiAgICAvL2hvcml6b250YWxcbiAgICBpZiAob3JpZW50YXRpb24gPT0gMCkge1xuICAgICAgY29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocm93ID09IDApIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA9PSAxKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID49IDIgJiYgcm93IDw9IDcpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID09IDgpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID09IDkpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb2x1bW4gPT0gMCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gKyAxICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID09IDEpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uICsgMSArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPj0gMiAmJiBjb2x1bW4gPCA3KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiArIDEgKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID09IDcpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vY29sdW1uIHdpbGwgbmV2ZXIgYmUgZ3JlYXRlciB0aGFuIGxlbmd0aCAoNSBmb3IgY2FycmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9yaWVudGF0aW9uID09IDEpIHtcbiAgICAgIHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDgpO1xuICAgICAgY29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbHVtbiA9PSAwKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gKyAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPT0gMSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uICsgMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA+PSAyICYmIGNvbHVtbiA8PSA3KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gKyAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID09IDgpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiArIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID09IDkpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyb3cgPT0gMCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgMSArIGldW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID09IDEpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGkgKyAxXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPj0gMiAmJiByb3cgPCA3KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpICsgMV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID09IDcpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vcm93IHdpbGwgbmV2ZXIgYmUgZ3JlYXRlciB0aGFuIGxlbmd0aCAoNSBmb3IgY2FycmllcilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBib2FyZC5wbGFjZVNoaXAocm93LCBjb2x1bW4sIGxlbmd0aCwgXCJkZXN0cm95ZXJcIiwgb3JpZW50YXRpb24pO1xufVxuZXhwb3J0IHsgcGxhY2VEZXN0cm95ZXIgfTtcbiIsImltcG9ydCB7IGdhbWVib2FyZEZhY3RvcnkgfSBmcm9tIFwiLi4vZ2FtZWJvYXJkRmFjdG9yeVwiO1xuXG5mdW5jdGlvbiBwbGFjZVBhdHJvbGJvYXQoYm9hcmQpIHtcbiAgbGV0IGxlbmd0aCA9IDI7XG4gIGxldCBpc0ZvdW5kID0gZmFsc2U7XG4gIGxldCByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIGxldCBjb2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIGxldCBvcmllbnRhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuXG4gIHdoaWxlIChpc0ZvdW5kID09IGZhbHNlKSB7XG4gICAgb3JpZW50YXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgY29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGlzRm91bmQgPSB0cnVlO1xuXG4gICAgLy9ob3Jpem9udGFsXG4gICAgaWYgKG9yaWVudGF0aW9uID09IDApIHtcbiAgICAgIGNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdyA9PSAwKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPT0gMSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA+PSAyICYmIHJvdyA8PSA3KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID09IDgpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID09IDkpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb2x1bW4gPT0gMCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gKyAxICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID09IDEpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uICsgMSArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPj0gMiAmJiBjb2x1bW4gPCA4KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiArIDEgKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID09IDgpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vY29sdW1uIHdpbGwgbmV2ZXIgYmUgZ3JlYXRlciB0aGFuIGxlbmd0aCAoNSBmb3IgY2FycmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9yaWVudGF0aW9uID09IDEpIHtcbiAgICAgIHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgICAgY29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbHVtbiA9PSAwKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gKyAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPT0gMSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uICsgMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA+PSAyICYmIGNvbHVtbiA8PSA3KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gKyAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID09IDgpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiArIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID09IDkpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyb3cgPT0gMCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgMSArIGldW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID09IDEpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGkgKyAxXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPj0gMiAmJiByb3cgPCA4KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpICsgMV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID09IDgpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vcm93IHdpbGwgbmV2ZXIgYmUgZ3JlYXRlciB0aGFuIGxlbmd0aCAoNSBmb3IgY2FycmllcilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBib2FyZC5wbGFjZVNoaXAocm93LCBjb2x1bW4sIGxlbmd0aCwgXCJwYXRyb2xib2F0XCIsIG9yaWVudGF0aW9uKTtcbn1cbmV4cG9ydCB7IHBsYWNlUGF0cm9sYm9hdCB9O1xuIiwiaW1wb3J0IHsgZ2FtZWJvYXJkRmFjdG9yeSB9IGZyb20gXCIuLi9nYW1lYm9hcmRGYWN0b3J5XCI7XG5cbmZ1bmN0aW9uIHBsYWNlU3VibWFyaW5lKGJvYXJkKSB7XG4gIGxldCBsZW5ndGggPSAzO1xuICBsZXQgaXNGb3VuZCA9IGZhbHNlO1xuICBsZXQgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICBsZXQgY29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICBsZXQgb3JpZW50YXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcblxuICB3aGlsZSAoaXNGb3VuZCA9PSBmYWxzZSkge1xuICAgIG9yaWVudGF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBpc0ZvdW5kID0gdHJ1ZTtcblxuICAgIC8vaG9yaXpvbnRhbFxuICAgIGlmIChvcmllbnRhdGlvbiA9PSAwKSB7XG4gICAgICBjb2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyb3cgPT0gMCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID09IDEpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPj0gMiAmJiByb3cgPD0gNykge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA9PSA4KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA9PSA5KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sdW1uID09IDApIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uICsgMSArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA9PSAxKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiArIDEgKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID49IDIgJiYgY29sdW1uIDwgNykge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gKyAxICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA9PSA3KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvL2NvbHVtbiB3aWxsIG5ldmVyIGJlIGdyZWF0ZXIgdGhhbiBsZW5ndGggKDUgZm9yIGNhcnJpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvcmllbnRhdGlvbiA9PSAxKSB7XG4gICAgICByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4KTtcbiAgICAgIGNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2x1bW4gPT0gMCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uICsgMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID09IDEpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiArIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPj0gMiAmJiBjb2x1bW4gPD0gNykge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uICsgMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA9PSA4KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gKyAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA9PSA5KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocm93ID09IDApIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIDEgKyBpXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA9PSAxKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpICsgMV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID49IDIgJiYgcm93IDwgNykge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaSArIDFdW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA9PSA3KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvL3JvdyB3aWxsIG5ldmVyIGJlIGdyZWF0ZXIgdGhhbiBsZW5ndGggKDUgZm9yIGNhcnJpZXIpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbnNvbGUubG9nKHJvdywgY29sdW1uLCBvcmllbnRhdGlvbiwgXCJzdWJtYXJpbmVcIik7XG4gIGJvYXJkLnBsYWNlU2hpcChyb3csIGNvbHVtbiwgbGVuZ3RoLCBcInN1Ym1hcmluZVwiLCBvcmllbnRhdGlvbik7XG59XG5leHBvcnQgeyBwbGFjZVN1Ym1hcmluZSB9O1xuIiwiaW1wb3J0IHsgZ2FtZWJvYXJkRmFjdG9yeSB9IGZyb20gXCIuLi9nYW1lYm9hcmRGYWN0b3J5XCI7XG5pbXBvcnQgeyBzb2x2ZU1pc3NlcyB9IGZyb20gXCIuLi9zb2x2ZU1pc3Nlc1wiO1xuXG4vLyhib2FyZCwgcm93LCBjb2x1bW4pXG5mdW5jdGlvbiByYW5kb21BdHRhY2soYm9hcmQpIHtcbiAgbGV0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgbGV0IGNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICBpZiAoaXNMZWdhbChyb3csIGNvbHVtbikpIHtcbiAgICBib2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sdW1uKTtcbiAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgaWYgKGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uXS5pc1N1bmsoKSA9PSB0cnVlKSB7XG4gICAgICAgIHNvbHZlTWlzc2VzKGJvYXJkLCByb3csIGNvbHVtbik7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJhbmRvbUF0dGFjayhib2FyZCk7XG4gIH1cblxuICAvL2Vsc2UsIHJlcGVhdCBmdW5jdGlvblxuXG4gIGZ1bmN0aW9uIGlzTGVnYWwocm93LCBjb2x1bW4pIHtcbiAgICBsZXQgaXNMZWdhbCA9IHRydWU7XG4gICAgaWYgKGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uXSA9PSBcIm1pc3NcIikge1xuICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgaWYgKFxuICAgICAgICBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbl0uc2hpcExvY2F0aW9uW1xuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KFtyb3csIGNvbHVtbl0pXG4gICAgICAgIF0gPT0gdHJ1ZVxuICAgICAgKSB7XG4gICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGlzTGVnYWw7XG4gIH1cbn1cbmV4cG9ydCB7IHJhbmRvbUF0dGFjayB9O1xuIiwiaW1wb3J0IHsgc29sdmVNaXNzZXMgfSBmcm9tIFwiLi4vc29sdmVNaXNzZXNcIjtcbmltcG9ydCB7IHJhbmRvbUF0dGFjayB9IGZyb20gXCIuL3JhbmRvbUF0dGFja1wiO1xuXG5sZXQgaXNPcmllbnRpbmcgPSBmYWxzZTtcbmxldCBpbml0aWFsQ2hlY2sgPSBmYWxzZTtcblxuLy8gbGV0IGZvdW5kQ29vcmRpbmF0ZSA9IHtcbi8vICAgcm93OiAwLFxuLy8gICBjb2x1bW46IDAsXG4vLyAgIGlzTGVmdDogdHJ1ZSxcbi8vICAgaXNVcDogdHJ1ZSxcbi8vICAgaXNSaWdodDogdHJ1ZSxcbi8vICAgaXNEb3duOiB0cnVlLFxuLy8gICBsZWZ0Q29vcmRpbmF0ZXM6IFtdLFxuLy8gICByaWdodENvb3JkaW5hdGVzOiBbXSxcbi8vICAgdXBDb29yZGluYXRlczogW10sXG4vLyAgIGRvd25Db29yZGluYXRlczogW10sXG4vLyB9O1xuXG5mdW5jdGlvbiBmb3VuZENvb3JkaW5hdGVGYWN0b3J5KHIsIGMpIHtcbiAgbGV0IHJvdyA9IHI7XG4gIGxldCBjb2x1bW4gPSBjO1xuICBsZXQgaXNMZWZ0ID0gdHJ1ZTtcbiAgbGV0IGlzVXAgPSB0cnVlO1xuICBsZXQgaXNSaWdodCA9IHRydWU7XG4gIGxldCBpc0Rvd24gPSB0cnVlO1xuICBsZXQgbmV4dFJvdyA9IHI7XG4gIGxldCBuZXh0Q29sdW1uID0gYztcbiAgbGV0IGxlZnRDb29yZGluYXRlcyA9IFtdO1xuICBsZXQgcmlnaHRDb29yZGluYXRlcyA9IFtdO1xuICBsZXQgdXBDb29yZGluYXRlcyA9IFtdO1xuICBsZXQgZG93bkNvb3JkaW5hdGVzID0gW107XG4gIHJldHVybiB7XG4gICAgcm93LFxuICAgIGNvbHVtbixcbiAgICBpc0xlZnQsXG4gICAgaXNVcCxcbiAgICBpc1JpZ2h0LFxuICAgIGlzRG93bixcbiAgICBsZWZ0Q29vcmRpbmF0ZXMsXG4gICAgcmlnaHRDb29yZGluYXRlcyxcbiAgICB1cENvb3JkaW5hdGVzLFxuICAgIGRvd25Db29yZGluYXRlcyxcbiAgICBuZXh0Um93LFxuICAgIG5leHRDb2x1bW4sXG4gIH07XG59XG5sZXQgZm91bmRDb29yZGluYXRlO1xuXG5mdW5jdGlvbiBzaGlwSHVudChib2FyZCkge1xuICBpZiAoIWlzT3JpZW50aW5nKSB7XG4gICAgY29uc29sZS5sb2coXCJyYW5kb21seSBhdHRhY2tpbmcgdG8gZ2V0IGluaXRpYWwgaGl0XCIpO1xuICAgIGxldCByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgbGV0IGNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBmdW5jdGlvbiBpc0xlZ2FsKHJvdywgY29sdW1uKSB7XG4gICAgICBsZXQgaXNMZWdhbCA9IHRydWU7XG4gICAgICBpZiAoYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW5dID09IFwibWlzc1wiKSB7XG4gICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW5dLnNoaXBMb2NhdGlvbltcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KFtyb3csIGNvbHVtbl0pXG4gICAgICAgICAgXSA9PSB0cnVlXG4gICAgICAgICkge1xuICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGlzTGVnYWw7XG4gICAgfVxuXG4gICAgaWYgKCFpc0xlZ2FsKHJvdywgY29sdW1uKSkge1xuICAgICAgLy9pZiB0aGUgbW92ZSBpc24ndCBsZWdhbCwgZ2V0IG5ldyBjb29yZGluYXRlc1xuICAgICAgc2hpcEh1bnQoYm9hcmQpO1xuICAgIH1cbiAgICBpZiAoaXNMZWdhbChyb3csIGNvbHVtbikpIHtcbiAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGZvdW5kQ29vcmRpbmF0ZSA9IGZvdW5kQ29vcmRpbmF0ZUZhY3Rvcnkocm93LCBjb2x1bW4pO1xuICAgICAgICBpc09yaWVudGluZyA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2hpcEh1bnQgZm91bmQgYW4gb2JqZWN0XCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInNoaXBIdW50IHJlY29yZGVkIG9iamVjdCBjb29yZGluYXRlIGF0IFwiKTtcbiAgICAgICAgY29uc29sZS50YWJsZShmb3VuZENvb3JkaW5hdGUpO1xuICAgICAgICBib2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sdW1uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJvYXJkLnJlY2VpdmVBdHRhY2socm93LCBjb2x1bW4pO1xuICAgICAgICBjb25zb2xlLmxvZyhcInNoaXBIdW50IGF0dGFja2VkIGFuIGVtcHR5IHNwb3QgYXRcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHJvdywgY29sdW1uKTtcbiAgICAgICAgY29uc29sZS5sb2codHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uXSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzT3JpZW50aW5nKSB7XG4gICAgY29uc29sZS5sb2coXCJoYXZlIGluaXRpYWwgaGl0OyBzZWFyY2hpbmcgbW9yZSBjbG9zZWx5XCIpO1xuICAgIC8vb2ZmIHRoZSBiYXQgY2hlY2sgdG8gc2VlIHdoYXQgZGlyZWN0aW9ucyB3ZSBjYW4gZWxpbWluYXRlIChhZGRlZCBiZW5lZml0IG9mIGNoZWNraW5nIHN1YnNlcXVlbnQgbWlzc2VzKVxuICAgIC8vcm93IGNoZWNrc1xuICAgIGlmICghaW5pdGlhbENoZWNrKSB7XG4gICAgICBpZiAoZm91bmRDb29yZGluYXRlLnJvdyA9PSAwKSB7XG4gICAgICAgIGZvdW5kQ29vcmRpbmF0ZS5pc1VwID0gZmFsc2U7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBib2FyZC5jb29yZGluYXRlc1tmb3VuZENvb3JkaW5hdGUucm93ICsgMV1bZm91bmRDb29yZGluYXRlLmNvbHVtbl0gPT1cbiAgICAgICAgICBcIm1pc3NcIlxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImZvdW5kQ29vcmRpbmF0ZS5pc0Rvd24gbWFya2VkIGZhbHNlXCIpO1xuICAgICAgICAgIGZvdW5kQ29vcmRpbmF0ZS5pc0Rvd24gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGZvdW5kQ29vcmRpbmF0ZS5yb3cgPT0gOSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImZvdW5kQ29vcmRpbmF0ZS5pc0Rvd24gbWFya2VkIGZhbHNlXCIpO1xuICAgICAgICBmb3VuZENvb3JkaW5hdGUuaXNEb3duID0gZmFsc2U7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBib2FyZC5jb29yZGluYXRlc1tmb3VuZENvb3JkaW5hdGUucm93IC0gMV1bZm91bmRDb29yZGluYXRlLmNvbHVtbl0gPT1cbiAgICAgICAgICBcIm1pc3NcIlxuICAgICAgICApIHtcbiAgICAgICAgICBmb3VuZENvb3JkaW5hdGUuaXNVcCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZm91bmRDb29yZGluYXRlLnJvdyA+IDAgJiYgZm91bmRDb29yZGluYXRlLnJvdyA8IDkpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGJvYXJkLmNvb3JkaW5hdGVzW2ZvdW5kQ29vcmRpbmF0ZS5yb3cgKyAxXVtmb3VuZENvb3JkaW5hdGUuY29sdW1uXSA9PVxuICAgICAgICAgIFwibWlzc1wiXG4gICAgICAgICkge1xuICAgICAgICAgIGZvdW5kQ29vcmRpbmF0ZS5pc1VwID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgIGJvYXJkLmNvb3JkaW5hdGVzW2ZvdW5kQ29vcmRpbmF0ZS5yb3cgLSAxXVtmb3VuZENvb3JkaW5hdGUuY29sdW1uXSA9PVxuICAgICAgICAgIFwibWlzc1wiXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZm91bmRDb29yZGluYXRlLmlzRG93biBtYXJrZWQgZmFsc2VcIik7XG4gICAgICAgICAgZm91bmRDb29yZGluYXRlLmlzRG93biA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvL2NvbHVtbiBjaGVja3NcbiAgICAgIGlmIChmb3VuZENvb3JkaW5hdGUuY29sdW1uID09IDApIHtcbiAgICAgICAgZm91bmRDb29yZGluYXRlLmlzTGVmdCA9IGZhbHNlO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgYm9hcmQuY29vcmRpbmF0ZXNbZm91bmRDb29yZGluYXRlLnJvd11bZm91bmRDb29yZGluYXRlLmNvbHVtbiArIDFdID09XG4gICAgICAgICAgXCJtaXNzXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgZm91bmRDb29yZGluYXRlLmlzUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGZvdW5kQ29vcmRpbmF0ZS5jb2x1bW4gPT0gOSkge1xuICAgICAgICBmb3VuZENvb3JkaW5hdGUuaXNSaWdodCA9IGZhbHNlO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgYm9hcmQuY29vcmRpbmF0ZXNbZm91bmRDb29yZGluYXRlLnJvd11bZm91bmRDb29yZGluYXRlLmNvbHVtbiAtIDFdID09XG4gICAgICAgICAgXCJtaXNzXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgZm91bmRDb29yZGluYXRlLmlzTGVmdCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZm91bmRDb29yZGluYXRlLmNvbHVtbiA+IDAgJiYgZm91bmRDb29yZGluYXRlLmNvbHVtbiA8IDkpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGJvYXJkLmNvb3JkaW5hdGVzW2ZvdW5kQ29vcmRpbmF0ZS5yb3ddW2ZvdW5kQ29vcmRpbmF0ZS5jb2x1bW4gLSAxXSA9PVxuICAgICAgICAgIFwibWlzc1wiXG4gICAgICAgICkge1xuICAgICAgICAgIGZvdW5kQ29vcmRpbmF0ZS5pc0xlZnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgYm9hcmQuY29vcmRpbmF0ZXNbZm91bmRDb29yZGluYXRlLnJvd11bZm91bmRDb29yZGluYXRlLmNvbHVtbiArIDFdID09XG4gICAgICAgICAgXCJtaXNzXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgZm91bmRDb29yZGluYXRlLmlzUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpbml0aWFsQ2hlY2sgPSB0cnVlO1xuICAgIC8vZmluaXNoZWQgaW5pdGlhbCBjaGVja3NcbiAgICBjb25zb2xlLnRhYmxlKGZvdW5kQ29vcmRpbmF0ZSk7XG4gICAgaWYgKGZvdW5kQ29vcmRpbmF0ZS5pc1VwID09IHRydWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZW50ZXJlZCBpc1VwID09IHRydWUgbG9naWNcIik7XG4gICAgICBmb3VuZENvb3JkaW5hdGUubmV4dFJvdy0tO1xuICAgICAgYm9hcmQucmVjZWl2ZUF0dGFjayhmb3VuZENvb3JkaW5hdGUubmV4dFJvdywgZm91bmRDb29yZGluYXRlLmNvbHVtbik7XG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tmb3VuZENvb3JkaW5hdGUubmV4dFJvd11bXG4gICAgICAgICAgZm91bmRDb29yZGluYXRlLmNvbHVtblxuICAgICAgICBdID09PSBcIm9iamVjdFwiXG4gICAgICApIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGJvYXJkLmNvb3JkaW5hdGVzW2ZvdW5kQ29vcmRpbmF0ZS5uZXh0Um93XVtcbiAgICAgICAgICAgIGZvdW5kQ29vcmRpbmF0ZS5jb2x1bW5cbiAgICAgICAgICBdLmlzU3VuaygpXG4gICAgICAgICkge1xuICAgICAgICAgIHNvbHZlTWlzc2VzKGJvYXJkLCBmb3VuZENvb3JkaW5hdGUubmV4dFJvdywgZm91bmRDb29yZGluYXRlLmNvbHVtbik7XG4gICAgICAgICAgcmVzZXRIdW50KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW2ZvdW5kQ29vcmRpbmF0ZS5uZXh0Um93XVtcbiAgICAgICAgICBmb3VuZENvb3JkaW5hdGUuY29sdW1uXG4gICAgICAgIF0gIT09IFwib2JqZWN0XCJcbiAgICAgICkge1xuICAgICAgICBmb3VuZENvb3JkaW5hdGUuaXNVcCA9IGZhbHNlO1xuICAgICAgICBmb3VuZENvb3JkaW5hdGUubmV4dFJvdyA9IGZvdW5kQ29vcmRpbmF0ZS5yb3c7XG4gICAgICAgIGNvbnNvbGUudGFibGUoZm91bmRDb29yZGluYXRlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZvdW5kQ29vcmRpbmF0ZS5pc0Rvd24gPT0gdHJ1ZSkge1xuICAgICAgY29uc29sZS5sb2coXCJlbnRlcmVkIGlzRG93biA9PSB0cnVlIGxvZ2ljXCIpO1xuICAgICAgZm91bmRDb29yZGluYXRlLm5leHRSb3crKztcbiAgICAgIGJvYXJkLnJlY2VpdmVBdHRhY2soZm91bmRDb29yZGluYXRlLm5leHRSb3csIGZvdW5kQ29vcmRpbmF0ZS5jb2x1bW4pO1xuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbZm91bmRDb29yZGluYXRlLm5leHRSb3ddW1xuICAgICAgICAgIGZvdW5kQ29vcmRpbmF0ZS5jb2x1bW5cbiAgICAgICAgXSA9PT0gXCJvYmplY3RcIlxuICAgICAgKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBib2FyZC5jb29yZGluYXRlc1tmb3VuZENvb3JkaW5hdGUubmV4dFJvd11bXG4gICAgICAgICAgICBmb3VuZENvb3JkaW5hdGUuY29sdW1uXG4gICAgICAgICAgXS5pc1N1bmsoKVxuICAgICAgICApIHtcbiAgICAgICAgICBzb2x2ZU1pc3Nlcyhib2FyZCwgZm91bmRDb29yZGluYXRlLm5leHRSb3csIGZvdW5kQ29vcmRpbmF0ZS5jb2x1bW4pO1xuICAgICAgICAgIHJlc2V0SHVudCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tmb3VuZENvb3JkaW5hdGUubmV4dFJvd11bXG4gICAgICAgICAgZm91bmRDb29yZGluYXRlLmNvbHVtblxuICAgICAgICBdICE9PSBcIm9iamVjdFwiXG4gICAgICApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJmb3VuZENvb3JkaW5hdGUuaXNEb3duIG1hcmtlZCBmYWxzZVwiKTtcbiAgICAgICAgZm91bmRDb29yZGluYXRlLmlzRG93biA9IGZhbHNlO1xuICAgICAgICBmb3VuZENvb3JkaW5hdGUubmV4dFJvdyA9IGZvdW5kQ29vcmRpbmF0ZS5yb3c7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChmb3VuZENvb3JkaW5hdGUuaXNSaWdodCA9PSB0cnVlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImVudGVyZWQgaXNSaWdodCA9PSB0cnVlIGxvZ2ljXCIpO1xuICAgICAgZm91bmRDb29yZGluYXRlLm5leHRDb2x1bW4rKztcbiAgICAgIGJvYXJkLnJlY2VpdmVBdHRhY2soZm91bmRDb29yZGluYXRlLnJvdywgZm91bmRDb29yZGluYXRlLm5leHRDb2x1bW4pO1xuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbZm91bmRDb29yZGluYXRlLnJvd11bXG4gICAgICAgICAgZm91bmRDb29yZGluYXRlLm5leHRDb2x1bW5cbiAgICAgICAgXSA9PT0gXCJvYmplY3RcIlxuICAgICAgKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBib2FyZC5jb29yZGluYXRlc1tmb3VuZENvb3JkaW5hdGUucm93XVtcbiAgICAgICAgICAgIGZvdW5kQ29vcmRpbmF0ZS5uZXh0Q29sdW1uXG4gICAgICAgICAgXS5pc1N1bmsoKVxuICAgICAgICApIHtcbiAgICAgICAgICBzb2x2ZU1pc3Nlcyhib2FyZCwgZm91bmRDb29yZGluYXRlLnJvdywgZm91bmRDb29yZGluYXRlLm5leHRDb2x1bW4pO1xuICAgICAgICAgIHJlc2V0SHVudCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tmb3VuZENvb3JkaW5hdGUucm93XVtcbiAgICAgICAgICBmb3VuZENvb3JkaW5hdGUubmV4dENvbHVtblxuICAgICAgICBdICE9PSBcIm9iamVjdFwiXG4gICAgICApIHtcbiAgICAgICAgZm91bmRDb29yZGluYXRlLmlzUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgZm91bmRDb29yZGluYXRlLm5leHRDb2x1bW4gPSBmb3VuZENvb3JkaW5hdGUuY29sdW1uO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZm91bmRDb29yZGluYXRlLmlzTGVmdCA9PSB0cnVlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImVudGVyZWQgaXNMZWZ0ID09IHRydWUgbG9naWNcIik7XG4gICAgICBmb3VuZENvb3JkaW5hdGUubmV4dENvbHVtbi0tO1xuICAgICAgYm9hcmQucmVjZWl2ZUF0dGFjayhmb3VuZENvb3JkaW5hdGUucm93LCBmb3VuZENvb3JkaW5hdGUubmV4dENvbHVtbik7XG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tmb3VuZENvb3JkaW5hdGUucm93XVtcbiAgICAgICAgICBmb3VuZENvb3JkaW5hdGUubmV4dENvbHVtblxuICAgICAgICBdID09PSBcIm9iamVjdFwiXG4gICAgICApIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGJvYXJkLmNvb3JkaW5hdGVzW2ZvdW5kQ29vcmRpbmF0ZS5yb3ddW1xuICAgICAgICAgICAgZm91bmRDb29yZGluYXRlLm5leHRDb2x1bW5cbiAgICAgICAgICBdLmlzU3VuaygpXG4gICAgICAgICkge1xuICAgICAgICAgIHNvbHZlTWlzc2VzKGJvYXJkLCBmb3VuZENvb3JkaW5hdGUucm93LCBmb3VuZENvb3JkaW5hdGUubmV4dENvbHVtbik7XG4gICAgICAgICAgcmVzZXRIdW50KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW2ZvdW5kQ29vcmRpbmF0ZS5yb3ddW1xuICAgICAgICAgIGZvdW5kQ29vcmRpbmF0ZS5uZXh0Q29sdW1uXG4gICAgICAgIF0gIT09IFwib2JqZWN0XCJcbiAgICAgICkge1xuICAgICAgICBmb3VuZENvb3JkaW5hdGUuaXNMZWZ0ID0gZmFsc2U7XG4gICAgICAgIGZvdW5kQ29vcmRpbmF0ZS5uZXh0Q29sdW1uID0gZm91bmRDb29yZGluYXRlLmNvbHVtbjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzZXRIdW50KCkge1xuICBpc09yaWVudGluZyA9IGZhbHNlO1xuICBpbml0aWFsQ2hlY2sgPSBmYWxzZTtcbn1cblxuLy8gZnVuY3Rpb24gcG9wdWxhdGVDb29yZGluYXRlcyhyb3csIGNvbHVtbikge1xuLy8gICBpZiAocm93ID09IDApIHtcbi8vICAgICBpZiAoY29sdW1uID09IDApIHtcbi8vICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm91bmRDb29yZGluYXRlLmxlbmd0aDsgaSsrKVxuLy8gICAgICAgICBmb3VuZENvb3JkaW5hdGUucmlnaHRDb29yZGluYXRlcy5wdXNoKFtyb3csIGNvbHVtbiArIGldKTtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuZXhwb3J0IHsgc2hpcEh1bnQgfTtcbiIsImxldCBjdXJyZW50U2hpcCA9IFwiY2FycmllclwiO1xubGV0IG9yaWVudGF0aW9uID0gMDtcbmxldCBjYXJyaWVyT3JpZW50YXRpb24gPSAwO1xubGV0IGJhdHRsZXNoaXBPcmllbnRhdGlvbiA9IDA7XG5sZXQgZGVzdHJveWVyT3JpZW50YXRpb24gPSAwO1xubGV0IHN1Ym1hcmluZU9yaWVudGF0aW9uID0gMDtcbmxldCBwYXRyb2xib2F0T3JpZW50YXRpb24gPSAwO1xubGV0IHBsYWNlQ291bnQgPSAwO1xubGV0IGlzQWxsUGxhY2VkID0gZmFsc2U7XG5cbmZ1bmN0aW9uIHJlc2V0QWxsKCkge1xuICBjYXJyaWVyT3JpZW50YXRpb24gPSAwO1xuICBiYXR0bGVzaGlwT3JpZW50YXRpb24gPSAwO1xuICBkZXN0cm95ZXJPcmllbnRhdGlvbiA9IDA7XG4gIHN1Ym1hcmluZU9yaWVudGF0aW9uID0gMDtcbiAgcGF0cm9sYm9hdE9yaWVudGF0aW9uID0gMDtcbiAgcGxhY2VDb3VudCA9IDA7XG4gIGlzQWxsUGxhY2VkID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGluY3JlYXNlUGxhY2VDb3VudCgpIHtcbiAgcGxhY2VDb3VudCsrO1xufVxuXG5mdW5jdGlvbiBnZXRJc0FsbFBsYWNlZCgpIHtcbiAgaWYgKHBsYWNlQ291bnQgPT0gNSkge1xuICAgIGlzQWxsUGxhY2VkID0gdHJ1ZTtcbiAgICByZXR1cm4gaXNBbGxQbGFjZWQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzZXRQbGFjZW1lbnQoKSB7XG4gIHBsYWNlQ291bnQgPSAwO1xuICBpc0FsbFBsYWNlZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlQbGFjaW5nU2hpcChzaGlwKSB7XG4gIGN1cnJlbnRTaGlwID0gc2hpcDtcbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudGx5UGxhY2luZ1NoaXAoKSB7XG4gIHJldHVybiBjdXJyZW50U2hpcDtcbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudGx5UGxhY2luZ0xlbmd0aCgpIHtcbiAgaWYgKGN1cnJlbnRTaGlwID09IFwiY2FycmllclwiKSB7XG4gICAgcmV0dXJuIDU7XG4gIH0gZWxzZSBpZiAoY3VycmVudFNoaXAgPT0gXCJiYXR0bGVzaGlwXCIpIHtcbiAgICByZXR1cm4gNDtcbiAgfSBlbHNlIGlmIChjdXJyZW50U2hpcCA9PSBcImRlc3Ryb3llclwiKSB7XG4gICAgcmV0dXJuIDM7XG4gIH0gZWxzZSBpZiAoY3VycmVudFNoaXAgPT0gXCJzdWJtYXJpbmVcIikge1xuICAgIHJldHVybiAzO1xuICB9IGVsc2UgaWYgKGN1cnJlbnRTaGlwID09IFwicGF0cm9sYm9hdFwiKSB7XG4gICAgcmV0dXJuIDI7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudGx5UGxhY2luZ09yaWVudGF0aW9uKHNoaXApIHtcbiAgaWYgKHNoaXAgPT0gXCJjYXJyaWVyXCIpIHtcbiAgICByZXR1cm4gY2Fycmllck9yaWVudGF0aW9uO1xuICB9XG4gIGlmIChzaGlwID09IFwiYmF0dGxlc2hpcFwiKSB7XG4gICAgcmV0dXJuIGJhdHRsZXNoaXBPcmllbnRhdGlvbjtcbiAgfVxuICBpZiAoc2hpcCA9PSBcImRlc3Ryb3llclwiKSB7XG4gICAgcmV0dXJuIGRlc3Ryb3llck9yaWVudGF0aW9uO1xuICB9XG4gIGlmIChzaGlwID09IFwic3VibWFyaW5lXCIpIHtcbiAgICByZXR1cm4gc3VibWFyaW5lT3JpZW50YXRpb247XG4gIH1cbiAgaWYgKHNoaXAgPT0gXCJwYXRyb2xib2F0XCIpIHtcbiAgICByZXR1cm4gcGF0cm9sYm9hdE9yaWVudGF0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldENhcnJpZXJPcmllbnRhdGlvbigpIHtcbiAgcmV0dXJuIGNhcnJpZXJPcmllbnRhdGlvbjtcbn1cblxuZnVuY3Rpb24gc2V0Q2Fycmllck9yaWVudGF0aW9uKG51bSkge1xuICBjYXJyaWVyT3JpZW50YXRpb24gPSBudW07XG59XG5cbmZ1bmN0aW9uIHNldEJhdHRsZXNoaXBPcmllbnRhdGlvbihudW0pIHtcbiAgYmF0dGxlc2hpcE9yaWVudGF0aW9uID0gbnVtO1xufVxuXG5mdW5jdGlvbiBnZXRCYXR0bGVzaGlwT3JpZW50YXRpb24oKSB7XG4gIHJldHVybiBiYXR0bGVzaGlwT3JpZW50YXRpb247XG59XG5cbmZ1bmN0aW9uIHNldERlc3Ryb3llck9yaWVudGF0aW9uKG51bSkge1xuICBkZXN0cm95ZXJPcmllbnRhdGlvbiA9IG51bTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVzdHJveWVyT3JpZW50YXRpb24oKSB7XG4gIHJldHVybiBkZXN0cm95ZXJPcmllbnRhdGlvbjtcbn1cblxuZnVuY3Rpb24gc2V0U3VibWFyaW5lT3JpZW50YXRpb24obnVtKSB7XG4gIHN1Ym1hcmluZU9yaWVudGF0aW9uID0gbnVtO1xufVxuXG5mdW5jdGlvbiBnZXRTdWJtYXJpbmVPcmllbnRhdGlvbigpIHtcbiAgcmV0dXJuIHN1Ym1hcmluZU9yaWVudGF0aW9uO1xufVxuXG5mdW5jdGlvbiBzZXRQYXRyb2xib2F0T3JpZW50YXRpb24obnVtKSB7XG4gIHBhdHJvbGJvYXRPcmllbnRhdGlvbiA9IG51bTtcbn1cblxuZnVuY3Rpb24gZ2V0UGF0cm9sYm9hdE9yaWVudGF0aW9uKCkge1xuICByZXR1cm4gcGF0cm9sYm9hdE9yaWVudGF0aW9uO1xufVxuXG5leHBvcnQge1xuICBzZXRDdXJyZW50bHlQbGFjaW5nU2hpcCxcbiAgZ2V0Q3VycmVudGx5UGxhY2luZ1NoaXAsXG4gIGdldEN1cnJlbnRseVBsYWNpbmdPcmllbnRhdGlvbixcbiAgZ2V0Q3VycmVudGx5UGxhY2luZ0xlbmd0aCxcbiAgc2V0Q2Fycmllck9yaWVudGF0aW9uLFxuICBnZXRDYXJyaWVyT3JpZW50YXRpb24sXG4gIHNldEJhdHRsZXNoaXBPcmllbnRhdGlvbixcbiAgZ2V0QmF0dGxlc2hpcE9yaWVudGF0aW9uLFxuICBzZXREZXN0cm95ZXJPcmllbnRhdGlvbixcbiAgZ2V0RGVzdHJveWVyT3JpZW50YXRpb24sXG4gIHNldFN1Ym1hcmluZU9yaWVudGF0aW9uLFxuICBnZXRTdWJtYXJpbmVPcmllbnRhdGlvbixcbiAgc2V0UGF0cm9sYm9hdE9yaWVudGF0aW9uLFxuICBnZXRQYXRyb2xib2F0T3JpZW50YXRpb24sXG4gIGluY3JlYXNlUGxhY2VDb3VudCxcbiAgZ2V0SXNBbGxQbGFjZWQsXG4gIHJlc2V0UGxhY2VtZW50LFxuICByZXNldEFsbCxcbn07XG4iLCJpbXBvcnQgeyByYW5kb21BdHRhY2sgfSBmcm9tIFwiLi9jb21wdXRlckZucy9yYW5kb21BdHRhY2tcIjtcbmltcG9ydCB7XG4gIGdldEN1cnJlbnRseVBsYWNpbmdMZW5ndGgsXG4gIGdldEN1cnJlbnRseVBsYWNpbmdPcmllbnRhdGlvbixcbiAgZ2V0Q3VycmVudGx5UGxhY2luZ1NoaXAsXG4gIGdldElzQWxsUGxhY2VkLFxuICBpbmNyZWFzZVBsYWNlQ291bnQsXG4gIHJlc2V0QWxsLFxufSBmcm9tIFwiLi9jdXJyZW50bHlQbGFjaW5nU2hpcFwiO1xuaW1wb3J0IHsgZ2FtZWJvYXJkRmFjdG9yeSB9IGZyb20gXCIuL2dhbWVib2FyZEZhY3RvcnlcIjtcbmltcG9ydCB7IGdldERpZmZpY3VsdHksIHNldERpZmZpY3VsdHkgfSBmcm9tIFwiLi9nYW1lRGlmZmljdWx0eVwiO1xuaW1wb3J0IHsgaXNMZWdhbFBsYWNlbWVudCB9IGZyb20gXCIuL2lzTGVnYWxQbGFjZW1lbnRcIjtcbmltcG9ydCB7IGJ1aWxkSGFyYm9yIH0gZnJvbSBcIi4vYnVpbGRIYXJib3JcIjtcbmltcG9ydCB7IGdhbWVMb29wIH0gZnJvbSBcIi4vZ2FtZUxvb3BcIjtcbmltcG9ydCB7IHNoaXBIdW50IH0gZnJvbSBcIi4vY29tcHV0ZXJGbnMvc2hpcEh1bnRcIjtcbmltcG9ydCB7IGJ1aWxkQnV0dG9uQm94IH0gZnJvbSBcIi4vYnVpbGRCdXR0b25Cb3hcIjtcbmltcG9ydCB7IHNvbHZlTWlzc2VzIH0gZnJvbSBcIi4vc29sdmVNaXNzZXNcIjtcbmltcG9ydCB7IGlzTGVnYWxNb3ZlIH0gZnJvbSBcIi4vaXNMZWdhbE1vdmVcIjtcblxuaW1wb3J0IEljb24gZnJvbSBcIi4vaWNvbnMvdGFyZ2V0LnN2Z1wiO1xuXG5jb25zdCB0YXJnZXQgPSBuZXcgSW1hZ2UoKTtcbnRhcmdldC5zcmMgPSBJY29uO1xuXG5mdW5jdGlvbiBkaXNwbGF5Qm9hcmQocGxheWVyLCBjb21wdXRlcikge1xuICBsZXQgaXNTZXR0aW5nVXAgPSB0cnVlO1xuICBjcmVhdGVQbGF5ZXJCb2FyZCgpO1xuICB1cGRhdGVQbGF5ZXJCb2FyZChwbGF5ZXIpO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZVBsYXllckJvYXJkKCkge1xuICAgIGxldCBib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9hcmRPbmVcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHJvdy5pZCA9IFwicm93XCIgKyBpO1xuICAgICAgcm93LmNsYXNzTmFtZSA9IFwicm93XCI7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgbGV0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJveC5pZCA9IFwicGxheWVyYm94XCIgKyBpICsgXCJcIiArIGo7XG4gICAgICAgIGJveC5jbGFzc05hbWUgPSBcImJveFwiO1xuICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICAvL2RyYWdnaW5nIGludG8gYm94ZXMgZGlzcGxheVxuICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgbGV0IGJveEFyciA9IFtpLCBqXTtcbiAgICAgICAgICBsZXQgYm94Um93ID0gYm94QXJyWzBdO1xuICAgICAgICAgIGxldCBib3hDb2x1bW4gPSBib3hBcnJbMV07XG5cbiAgICAgICAgICBpZiAodHlwZW9mIHBsYXllci5jb29yZGluYXRlc1tpXVtqXSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBpc0xlZ2FsUGxhY2VtZW50KFxuICAgICAgICAgICAgICAgIGJveFJvdyxcbiAgICAgICAgICAgICAgICBib3hDb2x1bW4sXG4gICAgICAgICAgICAgICAgZ2V0Q3VycmVudGx5UGxhY2luZ1NoaXAoKSxcbiAgICAgICAgICAgICAgICBnZXRDdXJyZW50bHlQbGFjaW5nT3JpZW50YXRpb24oZ2V0Q3VycmVudGx5UGxhY2luZ1NoaXAoKSksXG4gICAgICAgICAgICAgICAgcGxheWVyXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjOTBFRTkwXCI7IC8vbWFrZSBncmVlbiBpZiBsZWdhbFxuICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgIWlzTGVnYWxQbGFjZW1lbnQoXG4gICAgICAgICAgICAgICAgYm94Um93LFxuICAgICAgICAgICAgICAgIGJveENvbHVtbixcbiAgICAgICAgICAgICAgICBnZXRDdXJyZW50bHlQbGFjaW5nU2hpcCgpLFxuICAgICAgICAgICAgICAgIGdldEN1cnJlbnRseVBsYWNpbmdPcmllbnRhdGlvbihnZXRDdXJyZW50bHlQbGFjaW5nU2hpcCgpKSxcbiAgICAgICAgICAgICAgICBwbGF5ZXJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmNjY2JcIjsgLy9tYWtlIHJlZCBpcyBpbGxlZ2FsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy9kcmFnZ2luZyBhd2F5IGZyb20gYm94ZXMgZGlzcGxheVxuICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdsZWF2ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBwbGF5ZXIuY29vcmRpbmF0ZXNbaV1bal0gIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy9kcm9wcGluZyBpbnRvIGJveGVzIGRpc3BsYXlcbiAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBsZXQgYm94QXJyID0gW2ksIGpdO1xuICAgICAgICAgIGxldCBib3hSb3cgPSBib3hBcnJbMF07XG4gICAgICAgICAgbGV0IGJveENvbHVtbiA9IGJveEFyclsxXTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBpc0xlZ2FsUGxhY2VtZW50KFxuICAgICAgICAgICAgICBib3hSb3csXG4gICAgICAgICAgICAgIGJveENvbHVtbixcbiAgICAgICAgICAgICAgZ2V0Q3VycmVudGx5UGxhY2luZ1NoaXAoKSxcbiAgICAgICAgICAgICAgZ2V0Q3VycmVudGx5UGxhY2luZ09yaWVudGF0aW9uKGdldEN1cnJlbnRseVBsYWNpbmdTaGlwKCkpLFxuICAgICAgICAgICAgICBwbGF5ZXJcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHBsYXllci5wbGFjZVNoaXAoXG4gICAgICAgICAgICAgIGJveFJvdyxcbiAgICAgICAgICAgICAgYm94Q29sdW1uLFxuICAgICAgICAgICAgICBnZXRDdXJyZW50bHlQbGFjaW5nTGVuZ3RoKCksXG4gICAgICAgICAgICAgIGdldEN1cnJlbnRseVBsYWNpbmdTaGlwKCksXG4gICAgICAgICAgICAgIGdldEN1cnJlbnRseVBsYWNpbmdPcmllbnRhdGlvbihnZXRDdXJyZW50bHlQbGFjaW5nU2hpcCgpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGxldCBkZWxldGVTaGlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgICAgIFwic2VnbWVudGVkX19cIiArIGdldEN1cnJlbnRseVBsYWNpbmdTaGlwKClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBkZWxldGVTaGlwLnJlbW92ZSgpO1xuICAgICAgICAgICAgaW5jcmVhc2VQbGFjZUNvdW50KCk7XG4gICAgICAgICAgICBpZiAoZ2V0SXNBbGxQbGFjZWQoKSkge1xuICAgICAgICAgICAgICBidWlsZEJ1dHRvbkJveCgpO1xuXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWxsIHBsYWNlZFwiKTtcblxuICAgICAgICAgICAgICBsZXQgaGFyYm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoYXJib3JcIik7XG4gICAgICAgICAgICAgIGhhcmJvci5yZW1vdmUoKTtcblxuICAgICAgICAgICAgICBjb25zdCBjb21tYW5kZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgICBjb21tYW5kZXIuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICBcIkNvbW1hbmRlciA8YnIgLz48YnIgLz4gKEEuSSB3aWxsIGZpcmUgcmFuZG9tbHkpXCI7XG4gICAgICAgICAgICAgIGNvbW1hbmRlci5pZCA9IFwiY29tbWFuZGVyXCI7XG4gICAgICAgICAgICAgIGNvbW1hbmRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGxldCBidXR0b25Cb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbkJveFwiKTtcbiAgICAgICAgICAgICAgICBsZXQgaW5zdHJ1Y3Rpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnN0cnVjdGlvbnNcIik7XG4gICAgICAgICAgICAgICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpO1xuICAgICAgICAgICAgICAgIGhhcmJvci5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBidXR0b25Cb3gucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb25zLmlubmVyVGV4dCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgaGVhZGVyLmlubmVyVGV4dCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgY3JlYXRlQ29tcHV0ZXJCb2FyZCgpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgY29uc3QgYWRtaXJhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICAgIGFkbWlyYWwuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICBcIkZsZWV0IEFkbWlyYWwgPGJyIC8+PGJyIC8+IChBLkkgd2lsbCBodW50IHNoaXBzIG9uIGhpdClcIjtcbiAgICAgICAgICAgICAgYWRtaXJhbC5pZCA9IFwiYWRtaXJhbFwiO1xuICAgICAgICAgICAgICBhZG1pcmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGJ1dHRvbkJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uQm94XCIpO1xuICAgICAgICAgICAgICAgIGxldCBpbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3RydWN0aW9uc1wiKTtcbiAgICAgICAgICAgICAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIik7XG4gICAgICAgICAgICAgICAgaGFyYm9yLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbkJveC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbnMuaW5uZXJUZXh0ID0gXCJcIjtcbiAgICAgICAgICAgICAgICBoZWFkZXIuaW5uZXJUZXh0ID0gXCJcIjtcbiAgICAgICAgICAgICAgICAvLyB3aGlsZSAoYnV0dG9uQm94LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAvLyAgIGJ1dHRvbkJveC5yZW1vdmVDaGlsZChidXR0b25Cb3guZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIHNldERpZmZpY3VsdHkoXCJoYXJkXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZUNvbXB1dGVyQm9hcmQoKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGNvbnN0IHJlcGxhY2VTaGlwcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICAgIHJlcGxhY2VTaGlwcy5pbm5lclRleHQgPSBcIkkgd2lzaCB0byByZWFzc2lnbiBteSBzaGlwcyFcIjtcbiAgICAgICAgICAgICAgcmVwbGFjZVNoaXBzLmlkID0gXCJyZXBsYWNlU2hpcHNcIjtcbiAgICAgICAgICAgICAgcmVwbGFjZVNoaXBzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGJ1dHRvbkJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uQm94XCIpO1xuICAgICAgICAgICAgICAgIGhhcmJvci5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBidXR0b25Cb3gucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgbGV0IGJvYXJkT25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2FyZE9uZVwiKTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoYm9hcmRPbmUuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgYm9hcmRPbmUucmVtb3ZlQ2hpbGQoYm9hcmRPbmUuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJ1aWxkSGFyYm9yKCk7XG4gICAgICAgICAgICAgICAgcmVzZXRBbGwoKTtcbiAgICAgICAgICAgICAgICBnYW1lTG9vcCgpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgbGV0IGJ1dHRvbkJveFRvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uQm94VG9wXCIpO1xuICAgICAgICAgICAgICB3aGlsZSAoYnV0dG9uQm94VG9wLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBidXR0b25Cb3hUb3AucmVtb3ZlQ2hpbGQoYnV0dG9uQm94VG9wLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxldCBidXR0b25Cb3hCb3R0b20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbkJveEJvdHRvbVwiKTtcbiAgICAgICAgICAgICAgd2hpbGUgKGJ1dHRvbkJveEJvdHRvbS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uQm94Qm90dG9tLnJlbW92ZUNoaWxkKGJ1dHRvbkJveEJvdHRvbS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBidXR0b25Cb3hUb3AuYXBwZW5kQ2hpbGQoY29tbWFuZGVyKTtcbiAgICAgICAgICAgICAgYnV0dG9uQm94VG9wLmFwcGVuZENoaWxkKGFkbWlyYWwpO1xuICAgICAgICAgICAgICBidXR0b25Cb3hCb3R0b20uYXBwZW5kQ2hpbGQocmVwbGFjZVNoaXBzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVwZGF0ZVBsYXllckJvYXJkKHBsYXllcik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoYm94KTtcbiAgICAgIH1cbiAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlUGxheWVyQm9hcmQocGxheWVyKSB7XG4gICAgbGV0IHBsYXllckJvYXJkID0gcGxheWVyO1xuICAgIGNvbnNvbGUudGFibGUocGxheWVyQm9hcmQuY29vcmRpbmF0ZXMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcGxheWVyQm9hcmQuY29vcmRpbmF0ZXNbaV1bal0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICBpZiAocGxheWVyQm9hcmQuY29vcmRpbmF0ZXNbaV1bal0ubmFtZSA9PSBcImRlc3Ryb3llclwiKSB7XG4gICAgICAgICAgICBsZXQgZGVzdHJveWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXJib3hcIiArIGkgKyBcIlwiICsgaik7XG4gICAgICAgICAgICBkZXN0cm95ZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMWQzNTU3XCI7XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgcGxheWVyQm9hcmQuY29vcmRpbmF0ZXNbaV1bal0uc2hpcExvY2F0aW9uW1xuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KFtpLCBqXSlcbiAgICAgICAgICAgICAgXSA9PSB0cnVlXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgZGVzdHJveWVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXJCb2FyZC5jb29yZGluYXRlc1tpXVtqXS5uYW1lID09IFwic3VibWFyaW5lXCIpIHtcbiAgICAgICAgICAgIGxldCBzdWJtYXJpbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllcmJveFwiICsgaSArIFwiXCIgKyBqKTtcbiAgICAgICAgICAgIHN1Ym1hcmluZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM4MzM4ZWNcIjtcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBwbGF5ZXJCb2FyZC5jb29yZGluYXRlc1tpXVtqXS5zaGlwTG9jYXRpb25bXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoW2ksIGpdKVxuICAgICAgICAgICAgICBdID09IHRydWVcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBzdWJtYXJpbmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHBsYXllckJvYXJkLmNvb3JkaW5hdGVzW2ldW2pdLm5hbWUgPT0gXCJjYXJyaWVyXCIpIHtcbiAgICAgICAgICAgIGxldCBjYXJyaWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXJib3hcIiArIGkgKyBcIlwiICsgaik7XG4gICAgICAgICAgICBjYXJyaWVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmYmUwYlwiO1xuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHBsYXllckJvYXJkLmNvb3JkaW5hdGVzW2ldW2pdLnNoaXBMb2NhdGlvbltcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShbaSwgal0pXG4gICAgICAgICAgICAgIF0gPT0gdHJ1ZVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGNhcnJpZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHBsYXllckJvYXJkLmNvb3JkaW5hdGVzW2ldW2pdLm5hbWUgPT0gXCJiYXR0bGVzaGlwXCIpIHtcbiAgICAgICAgICAgIGxldCBiYXR0bGVzaGlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXJib3hcIiArIGkgKyBcIlwiICsgaik7XG4gICAgICAgICAgICBiYXR0bGVzaGlwLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2JjNmMyNVwiO1xuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHBsYXllckJvYXJkLmNvb3JkaW5hdGVzW2ldW2pdLnNoaXBMb2NhdGlvbltcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShbaSwgal0pXG4gICAgICAgICAgICAgIF0gPT0gdHJ1ZVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGJhdHRsZXNoaXAuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHBsYXllckJvYXJkLmNvb3JkaW5hdGVzW2ldW2pdLm5hbWUgPT0gXCJwYXRyb2xib2F0XCIpIHtcbiAgICAgICAgICAgIGxldCBwYXRyb2xib2F0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXJib3hcIiArIGkgKyBcIlwiICsgaik7XG4gICAgICAgICAgICBwYXRyb2xib2F0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzhhYzkyNlwiO1xuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHBsYXllckJvYXJkLmNvb3JkaW5hdGVzW2ldW2pdLnNoaXBMb2NhdGlvbltcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShbaSwgal0pXG4gICAgICAgICAgICAgIF0gPT0gdHJ1ZVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHBhdHJvbGJvYXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocGxheWVyQm9hcmQuY29vcmRpbmF0ZXNbaV1bal0gPT0gXCJtaXNzXCIpIHtcbiAgICAgICAgICBsZXQgbWlzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyYm94XCIgKyBpICsgXCJcIiArIGopO1xuICAgICAgICAgIG1pc3Muc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjQUREOEU2XCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVDb21wdXRlckJvYXJkKCkge1xuICAgIGxldCBib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9hcmRUd29cIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHJvdy5pZCA9IFwicm93XCIgKyBpO1xuICAgICAgcm93LmNsYXNzTmFtZSA9IFwicm93XCI7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgbGV0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJveC5pZCA9IEpTT04uc3RyaW5naWZ5KFtpLCBqXSk7XG4gICAgICAgIGJveC5jbGFzc05hbWUgPSBcImJveFwiO1xuICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBsZXQgYXJyID0gSlNPTi5wYXJzZShib3guaWQpO1xuICAgICAgICAgIGxldCBhcnJSb3cgPSBhcnJbMF07XG4gICAgICAgICAgbGV0IGFyckNvbHVtbiA9IGFyclsxXTtcbiAgICAgICAgICAvL3R1cm4gaWQgaW50byBjb29yZGluYXRlc1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGNvbXB1dGVyLmlzT3ZlcigpICE9IHRydWUgJiZcbiAgICAgICAgICAgIGlzTGVnYWxNb3ZlKGNvbXB1dGVyLCBhcnJSb3csIGFyckNvbHVtbilcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbXB1dGVyLnJlY2VpdmVBdHRhY2soYXJyUm93LCBhcnJDb2x1bW4pO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb21wdXRlci5jb29yZGluYXRlc1thcnJSb3ddW2FyckNvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgaWYgKGNvbXB1dGVyLmNvb3JkaW5hdGVzW2FyclJvd11bYXJyQ29sdW1uXS5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXMgc3VuayFcIik7XG4gICAgICAgICAgICAgICAgc29sdmVNaXNzZXMoY29tcHV0ZXIsIGFyclJvdywgYXJyQ29sdW1uKTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcHV0ZXIuaXNPdmVyKCkpIHtcbiAgICAgICAgICAgICAgICAgIGxldCBsZWZ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0XCIpO1xuICAgICAgICAgICAgICAgICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpO1xuICAgICAgICAgICAgICAgICAgaGVhZGVyLmlubmVyVGV4dCA9IFwiQ2FwdGFpbiwgeW91J3ZlIHdvbiFcIjtcbiAgICAgICAgICAgICAgICAgIGxldCBwbGF5QWdhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgICAgICAgcGxheUFnYWluLmlkID0gXCJwbGF5QWdhaW5cIjtcbiAgICAgICAgICAgICAgICAgIHBsYXlBZ2Fpbi5pbm5lclRleHQgPSBcIlBsYXkgQWdhaW4/XCI7XG4gICAgICAgICAgICAgICAgICBwbGF5QWdhaW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJvYXJkT25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2FyZE9uZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGJvYXJkT25lLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBib2FyZE9uZS5yZW1vdmVDaGlsZChib2FyZE9uZS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgYm9hcmRUd28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvYXJkVHdvXCIpO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoYm9hcmRUd28uZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgIGJvYXJkVHdvLnJlbW92ZUNoaWxkKGJvYXJkVHdvLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBsYXlBZ2Fpbi5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyLmlubmVySFRNTCA9XG4gICAgICAgICAgICAgICAgICAgICAgXCJZb3Uga25vdyB0aGUgZHJpbGwsIENhcHRhaW4uIEdvb2QgbHVjayFcIjtcbiAgICAgICAgICAgICAgICAgICAgYnVpbGRIYXJib3IoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzZXRBbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUxvb3AoKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgbGVmdC5hcHBlbmRDaGlsZChwbGF5QWdhaW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXBkYXRlQ29tcHV0ZXJCb2FyZChjb21wdXRlcik7XG4gICAgICAgICAgICBpZiAoZ2V0RGlmZmljdWx0eSgpID09IFwiZWFzeVwiKSB7XG4gICAgICAgICAgICAgIGlmIChwbGF5ZXIuaXNPdmVyKCkgIT0gdHJ1ZSAmJiBjb21wdXRlci5pc092ZXIoKSAhPSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmFuZG9tQXR0YWNrKHBsYXllcik7XG4gICAgICAgICAgICAgICAgdXBkYXRlUGxheWVyQm9hcmQocGxheWVyKTtcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyLmlzT3ZlcigpKSB7XG4gICAgICAgICAgICAgICAgICBsZXQgbGVmdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdFwiKTtcbiAgICAgICAgICAgICAgICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKTtcbiAgICAgICAgICAgICAgICAgIGhlYWRlci5pbm5lclRleHQgPVxuICAgICAgICAgICAgICAgICAgICBcIkNhcHRhaW4sIHdlJ3ZlIGxvc3QgdGhlIGJhdHRsZSwgYnV0IG5vdCB0aGUgd2FyIVwiO1xuICAgICAgICAgICAgICAgICAgbGV0IHBsYXlBZ2FpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICAgICAgICBwbGF5QWdhaW4uaWQgPSBcInBsYXlBZ2FpblwiO1xuICAgICAgICAgICAgICAgICAgcGxheUFnYWluLmlubmVyVGV4dCA9IFwiUGxheSBBZ2Fpbj9cIjtcbiAgICAgICAgICAgICAgICAgIHBsYXlBZ2Fpbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYm9hcmRPbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvYXJkT25lXCIpO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoYm9hcmRPbmUuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgIGJvYXJkT25lLnJlbW92ZUNoaWxkKGJvYXJkT25lLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBib2FyZFR3byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9hcmRUd29cIik7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChib2FyZFR3by5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgYm9hcmRUd28ucmVtb3ZlQ2hpbGQoYm9hcmRUd28uZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGxheUFnYWluLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXIuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICAgICAgICBcIllvdSBrbm93IHRoZSBkcmlsbCwgQ2FwdGFpbi4gR29vZCBsdWNrIVwiO1xuICAgICAgICAgICAgICAgICAgICBidWlsZEhhcmJvcigpO1xuICAgICAgICAgICAgICAgICAgICByZXNldEFsbCgpO1xuICAgICAgICAgICAgICAgICAgICBnYW1lTG9vcCgpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICBsZWZ0LmFwcGVuZENoaWxkKHBsYXlBZ2Fpbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGdldERpZmZpY3VsdHkoKSA9PSBcImhhcmRcIikge1xuICAgICAgICAgICAgICBpZiAocGxheWVyLmlzT3ZlcigpICE9IHRydWUgJiYgY29tcHV0ZXIuaXNPdmVyKCkgIT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHNoaXBIdW50KHBsYXllcik7XG4gICAgICAgICAgICAgICAgdXBkYXRlUGxheWVyQm9hcmQocGxheWVyKTtcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyLmlzT3ZlcigpKSB7XG4gICAgICAgICAgICAgICAgICBsZXQgbGVmdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdFwiKTtcbiAgICAgICAgICAgICAgICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKTtcbiAgICAgICAgICAgICAgICAgIGhlYWRlci5pbm5lclRleHQgPVxuICAgICAgICAgICAgICAgICAgICBcIkNhcHRhaW4sIHdlJ3ZlIGxvc3QgdGhlIGJhdHRsZSwgYnV0IG5vdCB0aGUgd2FyIVwiO1xuICAgICAgICAgICAgICAgICAgbGV0IHBsYXlBZ2FpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICAgICAgICBwbGF5QWdhaW4uaWQgPSBcInBsYXlBZ2FpblwiO1xuICAgICAgICAgICAgICAgICAgcGxheUFnYWluLmlubmVyVGV4dCA9IFwiUGxheSBBZ2Fpbj9cIjtcbiAgICAgICAgICAgICAgICAgIHBsYXlBZ2Fpbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYm9hcmRPbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvYXJkT25lXCIpO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoYm9hcmRPbmUuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgIGJvYXJkT25lLnJlbW92ZUNoaWxkKGJvYXJkT25lLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBib2FyZFR3byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9hcmRUd29cIik7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChib2FyZFR3by5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgYm9hcmRUd28ucmVtb3ZlQ2hpbGQoYm9hcmRUd28uZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGxheUFnYWluLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXIuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICAgICAgICBcIllvdSBrbm93IHRoZSBkcmlsbCwgQ2FwdGFpbi4gR29vZCBsdWNrIVwiO1xuICAgICAgICAgICAgICAgICAgICBidWlsZEhhcmJvcigpO1xuICAgICAgICAgICAgICAgICAgICByZXNldEFsbCgpO1xuICAgICAgICAgICAgICAgICAgICBnYW1lTG9vcCgpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICBsZWZ0LmFwcGVuZENoaWxkKHBsYXlBZ2Fpbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGxldCBhcnIgPSBKU09OLnBhcnNlKGJveC5pZCk7XG4gICAgICAgICAgbGV0IGFyclJvdyA9IGFyclswXTtcbiAgICAgICAgICBsZXQgYXJyQ29sdW1uID0gYXJyWzFdO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGNvbXB1dGVyLmlzT3ZlcigpICE9IHRydWUgJiZcbiAgICAgICAgICAgIGlzTGVnYWxNb3ZlKGNvbXB1dGVyLCBhcnJSb3csIGFyckNvbHVtbilcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybChcIiArIHRhcmdldC5zcmMgKyBcIilcIjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibW91c2luZyBvdmVyXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcIm5vbmVcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcIm5vbmVcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChib3gpO1xuICAgICAgfVxuICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdXBkYXRlQ29tcHV0ZXJCb2FyZChjb21wdXRlcikge1xuICAgIGxldCBjb21wdXRlckJvYXJkID0gY29tcHV0ZXI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjb21wdXRlckJvYXJkLmNvb3JkaW5hdGVzW2ldW2pdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgY29tcHV0ZXJCb2FyZC5jb29yZGluYXRlc1tpXVtqXS5zaGlwTG9jYXRpb25bXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KFtpLCBqXSlcbiAgICAgICAgICAgIF0gPT0gdHJ1ZVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgbGV0IGhpdEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKEpTT04uc3RyaW5naWZ5KFtpLCBqXSkpO1xuICAgICAgICAgICAgaGl0Qm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbXB1dGVyQm9hcmQuY29vcmRpbmF0ZXNbaV1bal0gPT0gXCJtaXNzXCIpIHtcbiAgICAgICAgICBsZXQgbWlzc0JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKEpTT04uc3RyaW5naWZ5KFtpLCBqXSkpO1xuICAgICAgICAgIG1pc3NCb3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjQUREOEU2XCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmV4cG9ydCB7IGRpc3BsYXlCb2FyZCB9O1xuIiwibGV0IGdhbWVEaWZmaWN1bHR5ID0gXCJlYXN5XCI7XG5cbmZ1bmN0aW9uIHNldERpZmZpY3VsdHkoZGlmZmljdWx0eSkge1xuICBnYW1lRGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XG59XG5cbmZ1bmN0aW9uIGdldERpZmZpY3VsdHkoKSB7XG4gIHJldHVybiBnYW1lRGlmZmljdWx0eTtcbn1cbmV4cG9ydCB7IHNldERpZmZpY3VsdHksIGdldERpZmZpY3VsdHkgfTtcbiIsImltcG9ydCB7IGNvbXB1dGVyUGxhY2VTaGlwcyB9IGZyb20gXCIuL2NvbXB1dGVyRm5zL2NvbXB1dGVyUGxhY2VTaGlwXCI7XG5pbXBvcnQgeyBwbGFjZUJhdHRsZXNoaXAgfSBmcm9tIFwiLi9jb21wdXRlckZucy9wbGFjZUJhdHRsZXNoaXBcIjtcbmltcG9ydCB7IHBsYWNlQ2FycmllciB9IGZyb20gXCIuL2NvbXB1dGVyRm5zL3BsYWNlQ2FycmllclwiO1xuaW1wb3J0IHsgcGxhY2VEZXN0cm95ZXIgfSBmcm9tIFwiLi9jb21wdXRlckZucy9wbGFjZURlc3Ryb3llclwiO1xuaW1wb3J0IHsgcGxhY2VQYXRyb2xib2F0IH0gZnJvbSBcIi4vY29tcHV0ZXJGbnMvcGxhY2VQYXRyb2xib2F0XCI7XG5pbXBvcnQgeyBwbGFjZVN1Ym1hcmluZSB9IGZyb20gXCIuL2NvbXB1dGVyRm5zL3BsYWNlU3VibWFyaW5lXCI7XG5pbXBvcnQgeyByYW5kb21BdHRhY2sgfSBmcm9tIFwiLi9jb21wdXRlckZucy9yYW5kb21BdHRhY2tcIjtcbmltcG9ydCB7IGRpc3BsYXlCb2FyZCB9IGZyb20gXCIuL2Rpc3BsYXlCb2FyZFwiO1xuaW1wb3J0IHsgZ2FtZWJvYXJkRmFjdG9yeSB9IGZyb20gXCIuL2dhbWVib2FyZEZhY3RvcnlcIjtcbmltcG9ydCB7IHBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuXG5mdW5jdGlvbiBnYW1lTG9vcCgpIHtcbiAgbGV0IHBsYXllckJvYXJkID0gZ2FtZWJvYXJkRmFjdG9yeSgpO1xuICBsZXQgY29tcHV0ZXJCb2FyZCA9IGdhbWVib2FyZEZhY3RvcnkoKTtcbiAgY29tcHV0ZXJQbGFjZVNoaXBzKGNvbXB1dGVyQm9hcmQpO1xuXG4gIC8vIHdoaWxlIChwbGF5ZXJCb2FyZC5pc092ZXIoKSA9PSBmYWxzZSAmJiBjb21wdXRlckJvYXJkLmlzT3ZlciA9PSBmYWxzZSkge1xuICAvLyAgIC8vcGxheSBnYW1lXG4gIC8vIH1cbiAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCAyNTsgaSsrKSB7XG4gIC8vICAgcmFuZG9tQXR0YWNrKHBsYXllckJvYXJkKTtcbiAgLy8gfVxuXG4gIGRpc3BsYXlCb2FyZChwbGF5ZXJCb2FyZCwgY29tcHV0ZXJCb2FyZCk7XG59XG5leHBvcnQgeyBnYW1lTG9vcCB9O1xuIiwiaW1wb3J0IHsgc2hpcEZhY3RvcnkgfSBmcm9tIFwiLi9zaGlwRmFjdG9yeVwiO1xuXG5mdW5jdGlvbiBnYW1lYm9hcmRGYWN0b3J5KCkge1xuICBsZXQgY29vcmRpbmF0ZXMgPSBbXG4gICAgW1wiQTFcIiwgXCJBMlwiLCBcIkEzXCIsIFwiQTRcIiwgXCJBNVwiLCBcIkE2XCIsIFwiQTdcIiwgXCJBOFwiLCBcIkE5XCIsIFwiQTEwXCJdLFxuICAgIFtcIkIxXCIsIFwiQjJcIiwgXCJCM1wiLCBcIkI0XCIsIFwiQjVcIiwgXCJCNlwiLCBcIkI3XCIsIFwiQjhcIiwgXCJCOVwiLCBcIkIxMFwiXSxcbiAgICBbXCJDMVwiLCBcIkMyXCIsIFwiQzNcIiwgXCJDNFwiLCBcIkM1XCIsIFwiQzZcIiwgXCJDN1wiLCBcIkM4XCIsIFwiQzlcIiwgXCJDMTBcIl0sXG4gICAgW1wiRDFcIiwgXCJEMlwiLCBcIkQzXCIsIFwiRDRcIiwgXCJENVwiLCBcIkQ2XCIsIFwiRDdcIiwgXCJEOFwiLCBcIkQ5XCIsIFwiRDEwXCJdLFxuICAgIFtcIkUxXCIsIFwiRTJcIiwgXCJFM1wiLCBcIkU0XCIsIFwiRTVcIiwgXCJFNlwiLCBcIkU3XCIsIFwiRThcIiwgXCJFOVwiLCBcIkUxMFwiXSxcbiAgICBbXCJGMVwiLCBcIkYyXCIsIFwiRjNcIiwgXCJGNFwiLCBcIkY1XCIsIFwiRjZcIiwgXCJGN1wiLCBcIkY4XCIsIFwiRjlcIiwgXCJGMTBcIl0sXG4gICAgW1wiRzFcIiwgXCJHMlwiLCBcIkczXCIsIFwiRzRcIiwgXCJHNVwiLCBcIkc2XCIsIFwiRzdcIiwgXCJHOFwiLCBcIkc5XCIsIFwiRzEwXCJdLFxuICAgIFtcIkgxXCIsIFwiSDJcIiwgXCJIM1wiLCBcIkg0XCIsIFwiSDVcIiwgXCJINlwiLCBcIkg3XCIsIFwiSDhcIiwgXCJIOVwiLCBcIkgxMFwiXSxcbiAgICBbXCJJMVwiLCBcIkkyXCIsIFwiSTNcIiwgXCJJNFwiLCBcIkk1XCIsIFwiSTZcIiwgXCJJN1wiLCBcIkk4XCIsIFwiSTlcIiwgXCJJMTBcIl0sXG4gICAgW1wiSjFcIiwgXCJKMlwiLCBcIkozXCIsIFwiSjRcIiwgXCJKNVwiLCBcIko2XCIsIFwiSjdcIiwgXCJKOFwiLCBcIko5XCIsIFwiSjEwXCJdLFxuICBdO1xuXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcChyb3csIGNvbHVtbiwgbGVuZ3RoLCBuYW1lLCBvcmllbnRhdGlvbikge1xuICAgIGxldCBzaGlwID0gc2hpcEZhY3RvcnkobGVuZ3RoLCBuYW1lLCBvcmllbnRhdGlvbiwgcm93LCBjb2x1bW4pO1xuXG4gICAgaWYgKG9yaWVudGF0aW9uID09IDApIHtcbiAgICAgIC8vaG9yaXpvbnRhbCBwbGFjZW1lbnRcbiAgICAgIGNvbnNvbGUudGFibGUoY29vcmRpbmF0ZXMpO1xuICAgICAgY29uc29sZS5sb2cobGVuZ3RoLCBuYW1lLCBvcmllbnRhdGlvbiwgcm93LCBjb2x1bW4pO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb29yZGluYXRlc1tyb3ddW2NvbHVtbiArIGldID0gc2hpcDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09IDEpIHtcbiAgICAgIC8vdmVydGljYWwgcGxhY2VtZW50XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbl0gPSBzaGlwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2socm93LCBjb2x1bW4pIHtcbiAgICBpZiAodHlwZW9mIGNvb3JkaW5hdGVzW3Jvd11bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgY29vcmRpbmF0ZXNbcm93XVtjb2x1bW5dLmhpdChbcm93LCBjb2x1bW5dKTtcbiAgICAgIHJldHVybiBjb29yZGluYXRlc1tyb3ddW2NvbHVtbl0uaXNTdW5rKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvb3JkaW5hdGVzW3Jvd11bY29sdW1uXSA9IFwibWlzc1wiO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzT3ZlcigpIHtcbiAgICBsZXQgaXNPdmVyID0gdHJ1ZTtcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IDEwOyBjb2x1bW4rKykge1xuICAgICAgICBpZiAodHlwZW9mIGNvb3JkaW5hdGVzW3Jvd11bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIGlmIChjb29yZGluYXRlc1tyb3ddW2NvbHVtbl0uaXNTdW5rKCkgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlzT3ZlciA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXNPdmVyO1xuICB9XG5cbiAgcmV0dXJuIHsgY29vcmRpbmF0ZXMsIHBsYWNlU2hpcCwgcmVjZWl2ZUF0dGFjaywgaXNPdmVyIH07XG59XG5leHBvcnQgeyBnYW1lYm9hcmRGYWN0b3J5IH07XG5cbi8vIGxldCBhcnIgPSBbXG4vLyAgIFtcIkExXCIsIFwiQTJcIiwgXCJBM1wiXSxcbi8vICAgW1wiQjFcIiwgXCJCMlwiLCBcIkIzXCJdLFxuLy8gXTtcbi8vIC8vZmlyc3QgdmFsdWUgaXMgdGhlIHJvdywgc2Vjb25kIHZhbHVlIGlzIHRoZSBjb2x1bW5cbi8vIGNvbnNvbGUubG9nKGFyclswXVswXSk7XG5cbi8vIC8vZmlyc3QgcGFyYW1ldGVyIGlzIHRoZSBpbmRleCAob2YgdGhlIGFycmF5KSB3aXRoaW4gY29vcmRpbmF0ZSBhcnJheVxuLy8gLy9zZWNvbmQgcGFyYW1ldGVyIGlzIHRoZSBpbmRleCAob2YgdGhlIHZhbHVlKSB3aXRoaW4gdGhlIGluZGV4IChvZiB0aGUgYXJyYXkpXG5cbi8vIGNvbnNvbGUubG9nKGFyclswXVswXSk7IC8vaG9yaXpvbnRhbCBwbGFjZW1lbnRcbi8vIGNvbnNvbGUubG9nKGFyclswXVswXSk7XG4vLyBjb25zb2xlLmxvZyhhcnJbMF1bMV0pO1xuLy8gY29uc29sZS5sb2coYXJyWzBdWzJdKTtcbi8vIGNvbnNvbGUubG9nKGFyclswXVszXSk7XG4vLyBjb25zb2xlLmxvZyhhcnJbMF1bNF0pO1xuLy8gLy9pbmNyZWFzZSB2YWx1ZSBvZiBzZWNvbmQgYXJyYXkgdXAgdG8gc2hpcCdzIGxlbmd0aCB0byBwbGFjZSBob3Jpem9udGFsXG4iLCJmdW5jdGlvbiBpc0xlZ2FsTW92ZShib2FyZCwgcm93LCBjb2x1bW4pIHtcbiAgbGV0IGlzTGVnYWwgPSB0cnVlO1xuICBpZiAoYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW5dID09IFwibWlzc1wiKSB7XG4gICAgaXNMZWdhbCA9IGZhbHNlO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICBpZiAoXG4gICAgICBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbl0uc2hpcExvY2F0aW9uW1xuICAgICAgICBKU09OLnN0cmluZ2lmeShbcm93LCBjb2x1bW5dKVxuICAgICAgXSA9PSB0cnVlXG4gICAgKSB7XG4gICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiBpc0xlZ2FsO1xufVxuZXhwb3J0IHsgaXNMZWdhbE1vdmUgfTtcbiIsImZ1bmN0aW9uIGlzTGVnYWxQbGFjZW1lbnQocm93LCBjb2x1bW4sIHNoaXAsIG9yaWVudGF0aW9uLCBib2FyZCkge1xuICBsZXQgaXNMZWdhbCA9IHRydWU7XG4gIGlmIChzaGlwID09IFwiY2FycmllclwiKSB7XG4gICAgaWYgKG9yaWVudGF0aW9uID09IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPT0gMCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID09IDEpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPj0gMiAmJiByb3cgPD0gNykge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA9PSA4KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA9PSA5KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sdW1uID09IDApIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uICsgMSArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA9PSAxKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiArIDEgKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID49IDIgJiYgY29sdW1uIDwgNSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gKyAxICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA9PSA1KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPiA1KSB7XG4gICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICB9IC8vY29sdW1uIHdpbGwgbmV2ZXIgYmUgZ3JlYXRlciB0aGFuIGxlbmd0aCAoNSBmb3IgY2FycmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9yaWVudGF0aW9uID09IDEpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sdW1uID09IDApIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiArIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA9PSAxKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gKyAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID49IDIgJiYgY29sdW1uIDw9IDcpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiArIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPT0gOCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uICsgMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPT0gOSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdyA9PSAwKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyAxICsgaV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPT0gMSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaSArIDFdW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA+PSAyICYmIHJvdyA8IDUpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGkgKyAxXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPT0gNSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID4gNSkge1xuICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgfSAvL3JvdyB3aWxsIG5ldmVyIGJlIGdyZWF0ZXIgdGhhbiBsZW5ndGggKDUgZm9yIGNhcnJpZXIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzTGVnYWw7XG4gIH1cbiAgaWYgKHNoaXAgPT0gXCJiYXR0bGVzaGlwXCIpIHtcbiAgICBpZiAob3JpZW50YXRpb24gPT0gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHJvdyA9PSAwKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPT0gMSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA+PSAyICYmIHJvdyA8PSA3KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID09IDgpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID09IDkpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb2x1bW4gPT0gMCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gKyAxICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID09IDEpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uICsgMSArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPj0gMiAmJiBjb2x1bW4gPCA2KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiArIDEgKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID09IDYpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA+IDYpIHtcbiAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgIH0gLy9jb2x1bW4gd2lsbCBuZXZlciBiZSBncmVhdGVyIHRoYW4gbGVuZ3RoICg1IGZvciBjYXJyaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAob3JpZW50YXRpb24gPT0gMSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2x1bW4gPT0gMCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uICsgMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID09IDEpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiArIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPj0gMiAmJiBjb2x1bW4gPD0gNykge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uICsgMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA9PSA4KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gKyAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA9PSA5KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocm93ID09IDApIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIDEgKyBpXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA9PSAxKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpICsgMV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID49IDIgJiYgcm93IDwgNikge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaSArIDFdW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA9PSA2KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPiA2KSB7XG4gICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICB9IC8vcm93IHdpbGwgbmV2ZXIgYmUgZ3JlYXRlciB0aGFuIGxlbmd0aCAoNSBmb3IgY2FycmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGlzTGVnYWw7XG4gIH1cbiAgaWYgKHNoaXAgPT0gXCJkZXN0cm95ZXJcIikge1xuICAgIGlmIChvcmllbnRhdGlvbiA9PSAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID09IDApIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA9PSAxKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID49IDIgJiYgcm93IDw9IDcpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPT0gOCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPT0gOSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbHVtbiA9PSAwKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiArIDEgKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPT0gMSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gKyAxICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA+PSAyICYmIGNvbHVtbiA8IDcpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uICsgMSArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPT0gNykge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID4gNykge1xuICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgfSAvL2NvbHVtbiB3aWxsIG5ldmVyIGJlIGdyZWF0ZXIgdGhhbiBsZW5ndGggKDUgZm9yIGNhcnJpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvcmllbnRhdGlvbiA9PSAxKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbHVtbiA9PSAwKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gKyAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPT0gMSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uICsgMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA+PSAyICYmIGNvbHVtbiA8PSA3KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gKyAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID09IDgpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiArIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID09IDkpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyb3cgPT0gMCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgMSArIGldW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID09IDEpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGkgKyAxXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPj0gMiAmJiByb3cgPCA3KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpICsgMV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID09IDcpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA+IDcpIHtcbiAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgIH0gLy9yb3cgd2lsbCBuZXZlciBiZSBncmVhdGVyIHRoYW4gbGVuZ3RoICg1IGZvciBjYXJyaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXNMZWdhbDtcbiAgfVxuXG4gIGlmIChzaGlwID09IFwic3VibWFyaW5lXCIpIHtcbiAgICBpZiAob3JpZW50YXRpb24gPT0gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHJvdyA9PSAwKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPT0gMSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA+PSAyICYmIHJvdyA8PSA3KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID09IDgpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID09IDkpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb2x1bW4gPT0gMCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gKyAxICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID09IDEpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uICsgMSArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPj0gMiAmJiBjb2x1bW4gPCA3KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiArIDEgKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID09IDcpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA+IDcpIHtcbiAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgIH0gLy9jb2x1bW4gd2lsbCBuZXZlciBiZSBncmVhdGVyIHRoYW4gbGVuZ3RoICg1IGZvciBjYXJyaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAob3JpZW50YXRpb24gPT0gMSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2x1bW4gPT0gMCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uICsgMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID09IDEpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiArIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPj0gMiAmJiBjb2x1bW4gPD0gNykge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uICsgMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA9PSA4KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gKyAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA9PSA5KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocm93ID09IDApIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIDEgKyBpXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA9PSAxKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpICsgMV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID49IDIgJiYgcm93IDwgNykge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaSArIDFdW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA9PSA3KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPiA3KSB7XG4gICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICB9IC8vcm93IHdpbGwgbmV2ZXIgYmUgZ3JlYXRlciB0aGFuIGxlbmd0aCAoNSBmb3IgY2FycmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGlzTGVnYWw7XG4gIH1cblxuICBpZiAoc2hpcCA9PSBcInBhdHJvbGJvYXRcIikge1xuICAgIGlmIChvcmllbnRhdGlvbiA9PSAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID09IDApIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA9PSAxKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID49IDIgJiYgcm93IDw9IDcpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPT0gOCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPT0gOSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbHVtbiA9PSAwKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiArIDEgKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPT0gMSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gKyAxICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA+PSAyICYmIGNvbHVtbiA8IDgpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uICsgMSArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPT0gOCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID4gOCkge1xuICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgfSAvL2NvbHVtbiB3aWxsIG5ldmVyIGJlIGdyZWF0ZXIgdGhhbiBsZW5ndGggKDUgZm9yIGNhcnJpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvcmllbnRhdGlvbiA9PSAxKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbHVtbiA9PSAwKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gKyAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPT0gMSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uICsgMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA+PSAyICYmIGNvbHVtbiA8PSA3KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gKyAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID09IDgpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiArIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID09IDkpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyb3cgPT0gMCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgMSArIGldW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID09IDEpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGkgKyAxXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPj0gMiAmJiByb3cgPCA4KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpICsgMV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID09IDgpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA+IDgpIHtcbiAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgIH0gLy9yb3cgd2lsbCBuZXZlciBiZSBncmVhdGVyIHRoYW4gbGVuZ3RoICg1IGZvciBjYXJyaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXNMZWdhbDtcbiAgfVxufVxuZXhwb3J0IHsgaXNMZWdhbFBsYWNlbWVudCB9O1xuIiwiaW1wb3J0IHsgZ2FtZWJvYXJkRmFjdG9yeSB9IGZyb20gXCIuL2dhbWVib2FyZEZhY3RvcnlcIjtcblxuZnVuY3Rpb24gcGxheWVyKCkge1xuICByZXR1cm4gZ2FtZWJvYXJkRmFjdG9yeSgpO1xufVxuZXhwb3J0IHsgcGxheWVyIH07XG4iLCJmdW5jdGlvbiBzaGlwRmFjdG9yeShsZW5ndGgsIG5hbWUsIG9yaWVudGF0aW9uLCByb3csIGNvbHVtbikge1xuICBsZXQgc2hpcExvY2F0aW9uID0ge307XG5cbiAgaWYgKG9yaWVudGF0aW9uID09IDApIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBzaGlwTG9jYXRpb25bSlNPTi5zdHJpbmdpZnkoW3JvdywgY29sdW1uICsgaV0pXSA9IGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PSAxKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgc2hpcExvY2F0aW9uW0pTT04uc3RyaW5naWZ5KFtyb3cgKyBpLCBjb2x1bW5dKV0gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoaXQoY29vcmRBcnJheSkge1xuICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gc2hpcExvY2F0aW9uKSB7XG4gICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoY29vcmRBcnJheSkgPT0gcHJvcGVydHkpIHtcbiAgICAgICAgc2hpcExvY2F0aW9uW3Byb3BlcnR5XSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgIGxldCBzdW5rID0gdHJ1ZTtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIHNoaXBMb2NhdGlvbikge1xuICAgICAgaWYgKHNoaXBMb2NhdGlvbltwcm9wZXJ0eV0gPT0gZmFsc2UpIHtcbiAgICAgICAgc3VuayA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3VuaztcbiAgfVxuICByZXR1cm4geyBsZW5ndGgsIHNoaXBMb2NhdGlvbiwgaGl0LCBpc1N1bmssIG5hbWUsIG9yaWVudGF0aW9uIH07XG59XG5leHBvcnQgeyBzaGlwRmFjdG9yeSB9O1xuIiwiZnVuY3Rpb24gc29sdmVNaXNzZXMoYm9hcmQsIGZvdW5kUm93LCBmb3VuZENvbHVtbikge1xuICBsZXQgc2hpcExvY2F0aW9uQXJyID0gYm9hcmQuY29vcmRpbmF0ZXNbZm91bmRSb3ddW2ZvdW5kQ29sdW1uXS5zaGlwTG9jYXRpb247XG4gIGxldCBsb2NhdGlvbkFycmF5ID0gW107XG4gIGZvciAoY29uc3QgcHJvcGVydHkgaW4gc2hpcExvY2F0aW9uQXJyKSB7XG4gICAgbG9jYXRpb25BcnJheS5wdXNoKEpTT04ucGFyc2UocHJvcGVydHkpKTtcbiAgfVxuICBsZXQgbG9jYXRpb25PcmllbnRhdGlvbiA9XG4gICAgYm9hcmQuY29vcmRpbmF0ZXNbZm91bmRSb3ddW2ZvdW5kQ29sdW1uXS5vcmllbnRhdGlvbjtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2F0aW9uQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgYXJyID0gbG9jYXRpb25BcnJheVtpXTtcbiAgICBsZXQgciA9IGFyclswXTtcbiAgICBsZXQgYyA9IGFyclsxXTtcbiAgICBjb25zb2xlLmxvZyhhcnIsIHIsIGMsIGxvY2F0aW9uT3JpZW50YXRpb24pO1xuXG4gICAgaWYgKGxvY2F0aW9uT3JpZW50YXRpb24gPT0gMCkge1xuICAgICAgaWYgKHIgPT0gMCkge1xuICAgICAgICBib2FyZC5jb29yZGluYXRlc1tyICsgMV1bY10gPSBcIm1pc3NcIjtcbiAgICAgIH0gZWxzZSBpZiAociA+IDAgJiYgciA8IDkpIHtcbiAgICAgICAgYm9hcmQuY29vcmRpbmF0ZXNbciArIDFdW2NdID0gXCJtaXNzXCI7XG4gICAgICAgIGJvYXJkLmNvb3JkaW5hdGVzW3IgLSAxXVtjXSA9IFwibWlzc1wiO1xuICAgICAgfSBlbHNlIGlmIChyID09IDkpIHtcbiAgICAgICAgYm9hcmQuY29vcmRpbmF0ZXNbciAtIDFdW2NdID0gXCJtaXNzXCI7XG4gICAgICB9XG4gICAgICBpZiAoYyA9PSAwKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcl1bYyArIDFdICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgYm9hcmQuY29vcmRpbmF0ZXNbcl1bYyArIDFdID0gXCJtaXNzXCI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoYyA+IDAgJiYgYyA8IDkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyXVtjICsgMV0gIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICBib2FyZC5jb29yZGluYXRlc1tyXVtjICsgMV0gPSBcIm1pc3NcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JdW2MgLSAxXSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIGJvYXJkLmNvb3JkaW5hdGVzW3JdW2MgLSAxXSA9IFwibWlzc1wiO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGMgPT0gOSkge1xuICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JdW2MgLSAxXSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIGJvYXJkLmNvb3JkaW5hdGVzW3JdW2MgLSAxXSA9IFwibWlzc1wiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChsb2NhdGlvbk9yaWVudGF0aW9uID09IDEpIHtcbiAgICAgIGlmIChjID09IDApIHtcbiAgICAgICAgYm9hcmQuY29vcmRpbmF0ZXNbcl1bYyArIDFdID0gXCJtaXNzXCI7XG4gICAgICB9IGVsc2UgaWYgKGMgPiAwICYmIGMgPCA5KSB7XG4gICAgICAgIGJvYXJkLmNvb3JkaW5hdGVzW3JdW2MgKyAxXSA9IFwibWlzc1wiO1xuICAgICAgICBib2FyZC5jb29yZGluYXRlc1tyXVtjIC0gMV0gPSBcIm1pc3NcIjtcbiAgICAgIH0gZWxzZSBpZiAoYyA9PSA5KSB7XG4gICAgICAgIGJvYXJkLmNvb3JkaW5hdGVzW3JdW2MgLSAxXSA9IFwibWlzc1wiO1xuICAgICAgfVxuICAgICAgaWYgKHIgPT0gMCkge1xuICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3IgKyAxXVtjXSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIGJvYXJkLmNvb3JkaW5hdGVzW3IgKyAxXVtjXSA9IFwibWlzc1wiO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHIgPiAwICYmIHIgPCA5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbciArIDFdW2NdICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgYm9hcmQuY29vcmRpbmF0ZXNbciArIDFdW2NdID0gXCJtaXNzXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyIC0gMV1bY10gIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICBib2FyZC5jb29yZGluYXRlc1tyIC0gMV1bY10gPSBcIm1pc3NcIjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChyID09IDkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyIC0gMV1bY10gIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICBib2FyZC5jb29yZGluYXRlc1tyIC0gMV1bY10gPSBcIm1pc3NcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBzb2x2ZU1pc3NlcyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IHBsYWNlQmF0dGxlc2hpcCB9IGZyb20gXCIuL2NvbXB1dGVyRm5zL3BsYWNlQmF0dGxlc2hpcFwiO1xuaW1wb3J0IHsgcGxhY2VDYXJyaWVyIH0gZnJvbSBcIi4vY29tcHV0ZXJGbnMvcGxhY2VDYXJyaWVyXCI7XG5pbXBvcnQgeyBwbGFjZURlc3Ryb3llciB9IGZyb20gXCIuL2NvbXB1dGVyRm5zL3BsYWNlRGVzdHJveWVyXCI7XG5pbXBvcnQgeyBwbGFjZVBhdHJvbGJvYXQgfSBmcm9tIFwiLi9jb21wdXRlckZucy9wbGFjZVBhdHJvbGJvYXRcIjtcbmltcG9ydCB7IHBsYWNlU3VibWFyaW5lIH0gZnJvbSBcIi4vY29tcHV0ZXJGbnMvcGxhY2VTdWJtYXJpbmVcIjtcbmltcG9ydCB7IGdhbWVib2FyZEZhY3RvcnkgfSBmcm9tIFwiLi9nYW1lYm9hcmRGYWN0b3J5XCI7XG5pbXBvcnQgeyBnYW1lTG9vcCB9IGZyb20gXCIuL2dhbWVMb29wXCI7XG5pbXBvcnQgeyBzaGlwRmFjdG9yeSB9IGZyb20gXCIuL3NoaXBGYWN0b3J5XCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgcmFuZG9tQXR0YWNrIH0gZnJvbSBcIi4vY29tcHV0ZXJGbnMvcmFuZG9tQXR0YWNrXCI7XG5pbXBvcnQge1xuICBnZXRDYXJyaWVyT3JpZW50YXRpb24sXG4gIGdldEN1cnJlbnRseVBsYWNpbmdTaGlwLFxuICBzZXRDYXJyaWVyT3JpZW50YXRpb24sXG4gIHNldEN1cnJlbnRseVBsYWNpbmdTaGlwLFxuICBzZXREZXN0cm95ZXJPcmllbnRhdGlvbixcbiAgc2V0UGF0cm9sYm9hdE9yaWVudGF0aW9uLFxuICBzZXRTdWJtYXJpbmVPcmllbnRhdGlvbixcbn0gZnJvbSBcIi4vY3VycmVudGx5UGxhY2luZ1NoaXBcIjtcbmltcG9ydCB7IGJ1aWxkSGFyYm9yIH0gZnJvbSBcIi4vYnVpbGRIYXJib3JcIjtcblxubGV0IGlzU2V0dGluZ1VwID0gdHJ1ZTtcblxuLy8gY29uc3QgZHJhZ2dhYmxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHJhZ2dhYmxlXCIpO1xuXG4vLyBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuLy8gICBkcmFnZ2FibGUuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCAoKSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coXCJkcmFnIHN0YXJ0XCIpO1xuLy8gICAgIGRyYWdnYWJsZS5jbGFzc0xpc3QuYWRkKFwiZHJhZ2dpbmdcIik7XG4vLyAgIH0pO1xuLy8gICBkcmFnZ2FibGUuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbmRcIiwgKCkgPT4ge1xuLy8gICAgIGRyYWdnYWJsZS5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZ2dpbmdcIik7XG4vLyAgIH0pO1xuLy8gfSk7XG5cbi8vIGNvbnN0IHNlZ21lbnRlZF9fY2FycmllciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VnbWVudGVkX19jYXJyaWVyXCIpO1xuLy8gc2VnbWVudGVkX19jYXJyaWVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xuLy8gc2VnbWVudGVkX19jYXJyaWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4vLyAgIGlmIChzZWdtZW50ZWRfX2NhcnJpZXIuc3R5bGUuZmxleERpcmVjdGlvbiA9PSBcInJvd1wiKSB7XG4vLyAgICAgc2VnbWVudGVkX19jYXJyaWVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xuLy8gICAgIHNldENhcnJpZXJPcmllbnRhdGlvbigxKTtcbi8vICAgICBjb25zb2xlLmxvZyhnZXRDYXJyaWVyT3JpZW50YXRpb24oKSk7XG4vLyAgIH0gZWxzZSBpZiAoc2VnbWVudGVkX19jYXJyaWVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPT0gXCJjb2x1bW5cIikge1xuLy8gICAgIHNlZ21lbnRlZF9fY2Fycmllci5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcbi8vICAgICBzZXRDYXJyaWVyT3JpZW50YXRpb24oMCk7XG4vLyAgICAgY29uc29sZS5sb2coZ2V0Q2Fycmllck9yaWVudGF0aW9uKCkpO1xuLy8gICB9XG4vLyB9KTtcbi8vIHNlZ21lbnRlZF9fY2Fycmllci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGZ1bmN0aW9uICgpIHtcbi8vICAgc2V0Q3VycmVudGx5UGxhY2luZ1NoaXAoXCJjYXJyaWVyXCIpO1xuLy8gICBjb25zb2xlLmxvZyhnZXRDdXJyZW50bHlQbGFjaW5nU2hpcCgpKTtcbi8vIH0pO1xuLy8gY29uc3Qgc2VnbWVudGVkX19iYXR0bGVzaGlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWdtZW50ZWRfX2JhdHRsZXNoaXBcIik7XG4vLyBzZWdtZW50ZWRfX2JhdHRsZXNoaXAuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XG4vLyBzZWdtZW50ZWRfX2JhdHRsZXNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbi8vICAgaWYgKHNlZ21lbnRlZF9fYmF0dGxlc2hpcC5zdHlsZS5mbGV4RGlyZWN0aW9uID09IFwicm93XCIpIHtcbi8vICAgICBzZWdtZW50ZWRfX2JhdHRsZXNoaXAuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XG4vLyAgICAgc2V0Q2Fycmllck9yaWVudGF0aW9uKDEpO1xuLy8gICAgIGNvbnNvbGUubG9nKGdldENhcnJpZXJPcmllbnRhdGlvbigpKTtcbi8vICAgfSBlbHNlIGlmIChzZWdtZW50ZWRfX2JhdHRsZXNoaXAuc3R5bGUuZmxleERpcmVjdGlvbiA9PSBcImNvbHVtblwiKSB7XG4vLyAgICAgc2VnbWVudGVkX19iYXR0bGVzaGlwLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xuLy8gICAgIHNldENhcnJpZXJPcmllbnRhdGlvbigwKTtcbi8vICAgICBjb25zb2xlLmxvZyhnZXRDYXJyaWVyT3JpZW50YXRpb24oKSk7XG4vLyAgIH1cbi8vIH0pO1xuLy8gc2VnbWVudGVkX19iYXR0bGVzaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZnVuY3Rpb24gKCkge1xuLy8gICBzZXRDdXJyZW50bHlQbGFjaW5nU2hpcChcImJhdHRsZXNoaXBcIik7XG4vLyAgIGNvbnNvbGUubG9nKGdldEN1cnJlbnRseVBsYWNpbmdTaGlwKCkpO1xuLy8gfSk7XG4vLyBjb25zdCBzZWdtZW50ZWRfX2Rlc3Ryb3llciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VnbWVudGVkX19kZXN0cm95ZXJcIik7XG4vLyBzZWdtZW50ZWRfX2Rlc3Ryb3llci5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcbi8vIHNlZ21lbnRlZF9fZGVzdHJveWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4vLyAgIGlmIChzZWdtZW50ZWRfX2Rlc3Ryb3llci5zdHlsZS5mbGV4RGlyZWN0aW9uID09IFwicm93XCIpIHtcbi8vICAgICBzZWdtZW50ZWRfX2Rlc3Ryb3llci5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcbi8vICAgICBzZXREZXN0cm95ZXJPcmllbnRhdGlvbigxKTtcbi8vICAgfSBlbHNlIGlmIChzZWdtZW50ZWRfX2Rlc3Ryb3llci5zdHlsZS5mbGV4RGlyZWN0aW9uID09IFwiY29sdW1uXCIpIHtcbi8vICAgICBzZWdtZW50ZWRfX2Rlc3Ryb3llci5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcbi8vICAgICBzZXREZXN0cm95ZXJPcmllbnRhdGlvbigwKTtcbi8vICAgfVxuLy8gfSk7XG4vLyBzZWdtZW50ZWRfX2Rlc3Ryb3llci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGZ1bmN0aW9uICgpIHtcbi8vICAgc2V0Q3VycmVudGx5UGxhY2luZ1NoaXAoXCJkZXN0cm95ZXJcIik7XG4vLyAgIGNvbnNvbGUubG9nKGdldEN1cnJlbnRseVBsYWNpbmdTaGlwKCkpO1xuLy8gfSk7XG4vLyBjb25zdCBzZWdtZW50ZWRfX3N1Ym1hcmluZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VnbWVudGVkX19zdWJtYXJpbmVcIik7XG4vLyBzZWdtZW50ZWRfX3N1Ym1hcmluZS5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcbi8vIHNlZ21lbnRlZF9fc3VibWFyaW5lLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4vLyAgIGlmIChzZWdtZW50ZWRfX3N1Ym1hcmluZS5zdHlsZS5mbGV4RGlyZWN0aW9uID09IFwicm93XCIpIHtcbi8vICAgICBzZWdtZW50ZWRfX3N1Ym1hcmluZS5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcbi8vICAgICBzZXRTdWJtYXJpbmVPcmllbnRhdGlvbigxKTtcbi8vICAgfSBlbHNlIGlmIChzZWdtZW50ZWRfX3N1Ym1hcmluZS5zdHlsZS5mbGV4RGlyZWN0aW9uID09IFwiY29sdW1uXCIpIHtcbi8vICAgICBzZWdtZW50ZWRfX3N1Ym1hcmluZS5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcbi8vICAgICBzZXRTdWJtYXJpbmVPcmllbnRhdGlvbigwKTtcbi8vICAgfVxuLy8gfSk7XG4vLyBzZWdtZW50ZWRfX3N1Ym1hcmluZS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGZ1bmN0aW9uICgpIHtcbi8vICAgc2V0Q3VycmVudGx5UGxhY2luZ1NoaXAoXCJzdWJtYXJpbmVcIik7XG4vLyAgIGNvbnNvbGUubG9nKGdldEN1cnJlbnRseVBsYWNpbmdTaGlwKCkpO1xuLy8gfSk7XG4vLyBjb25zdCBzZWdtZW50ZWRfX3BhdHJvbGJvYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlZ21lbnRlZF9fcGF0cm9sYm9hdFwiKTtcbi8vIHNlZ21lbnRlZF9fcGF0cm9sYm9hdC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcbi8vIHNlZ21lbnRlZF9fcGF0cm9sYm9hdC5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuLy8gICBpZiAoc2VnbWVudGVkX19wYXRyb2xib2F0LnN0eWxlLmZsZXhEaXJlY3Rpb24gPT0gXCJyb3dcIikge1xuLy8gICAgIHNlZ21lbnRlZF9fcGF0cm9sYm9hdC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcbi8vICAgICBzZXRQYXRyb2xib2F0T3JpZW50YXRpb24oMSk7XG4vLyAgIH0gZWxzZSBpZiAoc2VnbWVudGVkX19wYXRyb2xib2F0LnN0eWxlLmZsZXhEaXJlY3Rpb24gPT0gXCJjb2x1bW5cIikge1xuLy8gICAgIHNlZ21lbnRlZF9fcGF0cm9sYm9hdC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcbi8vICAgICBzZXRQYXRyb2xib2F0T3JpZW50YXRpb24oMCk7XG4vLyAgIH1cbi8vIH0pO1xuLy8gc2VnbWVudGVkX19wYXRyb2xib2F0LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZnVuY3Rpb24gKCkge1xuLy8gICBzZXRDdXJyZW50bHlQbGFjaW5nU2hpcChcInBhdHJvbGJvYXRcIik7XG4vLyAgIGNvbnNvbGUubG9nKGdldEN1cnJlbnRseVBsYWNpbmdTaGlwKCkpO1xuLy8gfSk7XG4vLyBjYXJyaWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4vLyAgIC8vIGNhcnJpZXIuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoOTBkZWcpXCI7XG4vLyB9KTtcblxuLy9maXJzdCB2YWx1ZSBpcyB0aGUgcm93LCBzZWNvbmQgdmFsdWUgaXMgdGhlIGNvbHVtblxuXG4vLyBsZXQgZ2FtZWJvYXJkID0gZ2FtZWJvYXJkRmFjdG9yeSgpO1xuLy8gY29uc29sZS50YWJsZShnYW1lYm9hcmQpO1xuLy8gZ2FtZWJvYXJkLnBsYWNlU2hpcCgwLCAwLCA1LCBcImRlc3Ryb3llclwiKTtcbi8vIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKDAsIDApO1xuLy8gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soMCwgMSk7XG4vLyBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjaygwLCAyKTtcbi8vIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKDAsIDMpO1xuLy8gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soMCwgNCk7XG5cbi8vZmlyc3QgcGFyYW1ldGVyIGlzIHRoZSBpbmRleCAob2YgdGhlIGFycmF5KSB3aXRoaW4gY29vcmRpbmF0ZSBhcnJheVxuLy9zZWNvbmQgcGFyYW1ldGVyIGlzIHRoZSBpbmRleCAob2YgdGhlIHZhbHVlKSB3aXRoaW4gdGhlIGluZGV4IChvZiB0aGUgYXJyYXkpXG5idWlsZEhhcmJvcigpO1xuZ2FtZUxvb3AoKTtcblxuLy8gbGV0IGJvYXJkID0gZ2FtZWJvYXJkRmFjdG9yeSgpO1xuXG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbi8vICAgcmFuZG9tQXR0YWNrKGJvYXJkKTtcbi8vIH1cbi8vIGNvbnNvbGUudGFibGUoYm9hcmQuY29vcmRpbmF0ZXMpO1xuXG4vLyBwbGFjZUNhcnJpZXIoY29tcHV0ZXJCb2FyZCk7XG4vLyBwbGFjZUNhcnJpZXIoY29tcHV0ZXJCb2FyZCk7XG4vLyBwbGFjZUNhcnJpZXIoY29tcHV0ZXJCb2FyZCk7XG4vLyBwbGFjZUNhcnJpZXIoY29tcHV0ZXJCb2FyZCk7XG5cbi8vIGdhbWVMb29wKCk7XG4vLyBsZXQgYm9hcmQgPSBnYW1lYm9hcmRGYWN0b3J5KCk7XG4vLyBib2FyZC5wbGFjZVNoaXAoMCwgMCwgNSwgXCJkZXN0cm95ZXJcIik7XG4vLyBib2FyZC5yZWNlaXZlQXR0YWNrKDAsIDApO1xuLy8gYm9hcmQucmVjZWl2ZUF0dGFjaygwLCAxKTtcbi8vIGJvYXJkLnJlY2VpdmVBdHRhY2soMCwgMik7XG4vLyBib2FyZC5yZWNlaXZlQXR0YWNrKDAsIDMpO1xuLy8gYm9hcmQucmVjZWl2ZUF0dGFjaygwLCA0KTtcbi8vIGNvbnNvbGUubG9nKGJvYXJkLmlzT3ZlcigpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==