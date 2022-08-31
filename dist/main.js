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
                harbor.remove();
                buttonBox.remove();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLHdCQUF3QixXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLE9BQU8sT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLHdCQUF3QixXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssd0JBQXdCLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyx3QkFBd0IsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLHdCQUF3QixXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssd0JBQXdCLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsb0RBQW9ELDJCQUEyQixHQUFHLFVBQVUsa0JBQWtCLDJCQUEyQixjQUFjLGdDQUFnQyw0QkFBNEIsd0JBQXdCLDRCQUE0QixHQUFHLFdBQVcscUJBQXFCLEdBQUcsUUFBUSxvQkFBb0IsdUJBQXVCLHFCQUFxQiwrQkFBK0IsR0FBRyxRQUFRLGNBQWMsb0JBQW9CLHFCQUFxQix1QkFBdUIsd0JBQXdCLEdBQUcsUUFBUSxjQUFjLHFCQUFxQix3QkFBd0IsR0FBRyxlQUFlLGtCQUFrQiwyQkFBMkIsY0FBYyxHQUFHLFVBQVUsa0JBQWtCLHdCQUF3QixxQkFBcUIsc0JBQXNCLEdBQUcsYUFBYSx3QkFBd0IsK0NBQStDLHFCQUFxQixHQUFHLFVBQVUsNEJBQTRCLGdCQUFnQixpQkFBaUIsR0FBRyxjQUFjLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGNBQWMsR0FBRyxjQUFjLGtCQUFrQixpQkFBaUIsR0FBRyxlQUFlLGtCQUFrQixpQkFBaUIsR0FBRyxjQUFjLGlCQUFpQixnQkFBZ0IsR0FBRyxjQUFjLGlCQUFpQixnQkFBZ0IsR0FBRyxlQUFlLGlCQUFpQixnQkFBZ0IsR0FBRyxvQkFBb0IsaUJBQWlCLGlCQUFpQiw4QkFBOEIsbUJBQW1CLEdBQUcscUJBQXFCLGlCQUFpQixpQkFBaUIsOEJBQThCLG1CQUFtQixHQUFHLG9CQUFvQixnQkFBZ0IsaUJBQWlCLDJCQUEyQixtQkFBbUIsR0FBRyxvQkFBb0IsZ0JBQWdCLGlCQUFpQixnQ0FBZ0MsbUJBQW1CLEdBQUcscUJBQXFCLGdCQUFnQixpQkFBaUIsOEJBQThCLG1CQUFtQixHQUFHLHlCQUF5QixpQkFBaUIsR0FBRyxjQUFjLGtCQUFrQiw0QkFBNEIsd0JBQXdCLDRCQUE0QixHQUFHLGNBQWMsa0JBQWtCLHdCQUF3Qix3QkFBd0IsY0FBYyxHQUFHLGFBQWEsY0FBYyxrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0IsZ0NBQWdDLDZCQUE2Qix3QkFBd0IsY0FBYyxrQkFBa0IsR0FBRyxjQUFjLGdCQUFnQixpQkFBaUIsNEJBQTRCLEdBQUcseUJBQXlCLGtCQUFrQix3QkFBd0Isd0JBQXdCLHVCQUF1QixLQUFLLCtCQUErQixpQkFBaUIsR0FBRyxrQ0FBa0Msd0JBQXdCLCtDQUErQyxxQkFBcUIsOEJBQThCLEdBQUcsdUJBQXVCLGtCQUFrQix3QkFBd0IsNEJBQTRCLHdCQUF3QixnQ0FBZ0Msb0JBQW9CLGlCQUFpQixHQUFHLDRCQUE0QixrQkFBa0Isd0JBQXdCLHFCQUFxQixzQkFBc0IsR0FBRyxrQ0FBa0MsaUJBQWlCLEdBQUcscUNBQXFDLHdCQUF3QiwrQ0FBK0MscUJBQXFCLDhCQUE4QixHQUFHLDBCQUEwQixrQkFBa0Isd0JBQXdCLDRCQUE0Qix3QkFBd0IsZ0NBQWdDLG9CQUFvQixpQkFBaUIsR0FBRywyQkFBMkIsa0JBQWtCLHdCQUF3QixxQkFBcUIsc0JBQXNCLEdBQUcsaUNBQWlDLGlCQUFpQixHQUFHLG9DQUFvQyx3QkFBd0IsK0NBQStDLHFCQUFxQiw4QkFBOEIsR0FBRyx5QkFBeUIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsd0JBQXdCLGdDQUFnQyxtQkFBbUIsZ0JBQWdCLEdBQUcsMkJBQTJCLGtCQUFrQix3QkFBd0IscUJBQXFCLHNCQUFzQixHQUFHLGlDQUFpQyxpQkFBaUIsR0FBRyxvQ0FBb0Msd0JBQXdCLCtDQUErQyxxQkFBcUIsOEJBQThCLEdBQUcseUJBQXlCLGtCQUFrQix3QkFBd0IsNEJBQTRCLHdCQUF3QixnQ0FBZ0MsbUJBQW1CLGdCQUFnQixHQUFHLDRCQUE0QixrQkFBa0Isd0JBQXdCLHFCQUFxQixzQkFBc0IsR0FBRyxrQ0FBa0MsaUJBQWlCLEdBQUcscUNBQXFDLHdCQUF3QiwrQ0FBK0MscUJBQXFCLDhCQUE4QixHQUFHLDBCQUEwQixrQkFBa0Isd0JBQXdCLDRCQUE0Qix3QkFBd0IsZ0NBQWdDLG1CQUFtQixnQkFBZ0IsR0FBRywyQkFBMkIsdUJBQXVCLGlCQUFpQix1QkFBdUIsY0FBYywwQkFBMEIsc0JBQXNCLG1CQUFtQix1QkFBdUIsb0JBQW9CLHFCQUFxQixvQkFBb0IsdUJBQXVCLG1FQUFtRSw2QkFBNkIsMEJBQTBCLEdBQUcseUNBQXlDLHdCQUF3QiwyQkFBMkIsR0FBRyxzQkFBc0Isb0NBQW9DLHlCQUF5QixHQUFHLHVCQUF1QiwyQkFBMkIsR0FBRyxxQ0FBcUMsd0JBQXdCLDJCQUEyQixHQUFHLG9CQUFvQixvQ0FBb0MseUJBQXlCLEdBQUcscUJBQXFCLDJCQUEyQixHQUFHLCtDQUErQyxzQkFBc0IsMkJBQTJCLEdBQUcseUJBQXlCLG9DQUFvQyx5QkFBeUIsR0FBRywwQkFBMEIsMkJBQTJCLEdBQUcsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsY0FBYyxHQUFHLG1CQUFtQixrQkFBa0Isd0JBQXdCLGNBQWMsR0FBRyxzQkFBc0Isa0JBQWtCLHdCQUF3Qiw0QkFBNEIsR0FBRyxtQkFBbUIsdUJBQXVCLGlCQUFpQix1QkFBdUIsY0FBYywwQkFBMEIsc0JBQXNCLG1CQUFtQix1QkFBdUIsb0JBQW9CLHFCQUFxQixvQkFBb0IsdUJBQXVCLG1FQUFtRSw2QkFBNkIsMEJBQTBCLEdBQUcsZ0JBQWdCLHVCQUF1QixpQkFBaUIsdUJBQXVCLHFCQUFxQiwwQkFBMEIsc0JBQXNCLG1CQUFtQix1QkFBdUIsb0JBQW9CLHFCQUFxQixvQkFBb0IsdUJBQXVCLG1FQUFtRSw2QkFBNkIsMEJBQTBCLEdBQUcseUNBQXlDLHNCQUFzQiwyQkFBMkIsR0FBRyxzQkFBc0Isb0NBQW9DLHlCQUF5QixHQUFHLHVCQUF1QiwyQkFBMkIsR0FBRyxXQUFXLGtCQUFrQiwyQkFBMkIsd0JBQXdCLEdBQUcscUJBQXFCO0FBQ3owa0I7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNmQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMwQjs7Ozs7Ozs7Ozs7Ozs7OztBQ0pNOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNEVBQXFCO0FBQzNCLE1BQU07QUFDTjtBQUNBLE1BQU0sNEVBQXFCO0FBQzNCO0FBQ0EsR0FBRztBQUNIO0FBQ0EsSUFBSSw4RUFBdUI7QUFDM0IsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwrRUFBd0I7QUFDOUIsTUFBTTtBQUNOO0FBQ0EsTUFBTSwrRUFBd0I7QUFDOUI7QUFDQSxHQUFHO0FBQ0g7QUFDQSxJQUFJLDhFQUF1QjtBQUMzQixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw4RUFBdUI7QUFDN0IsTUFBTTtBQUNOO0FBQ0EsTUFBTSw4RUFBdUI7QUFDN0I7QUFDQSxHQUFHO0FBQ0g7QUFDQSxJQUFJLDhFQUF1QjtBQUMzQixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw4RUFBdUI7QUFDN0IsTUFBTTtBQUNOO0FBQ0EsTUFBTSw4RUFBdUI7QUFDN0I7QUFDQSxHQUFHO0FBQ0g7QUFDQSxJQUFJLDhFQUF1QjtBQUMzQixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwrRUFBd0I7QUFDOUIsTUFBTTtBQUNOO0FBQ0EsTUFBTSwrRUFBd0I7QUFDOUI7QUFDQSxHQUFHO0FBQ0g7QUFDQSxJQUFJLDhFQUF1QjtBQUMzQixHQUFHO0FBQ0g7O0FBRUEsa0JBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3VCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RMNkI7QUFDTjtBQUNJO0FBQ0U7QUFDRjs7QUFFbEQ7QUFDQSxFQUFFLDJEQUFZO0FBQ2QsRUFBRSxpRUFBZTtBQUNqQixFQUFFLCtEQUFjO0FBQ2hCLEVBQUUsK0RBQWM7QUFDaEIsRUFBRSxpRUFBZTtBQUNqQjtBQUM4Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ2J5Qjs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFlBQVk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsWUFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzJCOzs7Ozs7Ozs7Ozs7Ozs7O0FDeko0Qjs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsWUFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDd0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SitCOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsWUFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFlBQVk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQzBCOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEo2Qjs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFlBQVk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsWUFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDMkI7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SjRCOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsWUFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixZQUFZO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMEI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeko2QjtBQUNWOztBQUU3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQVc7QUFDbkI7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDd0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNxQjtBQUNDOztBQUU5QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSx5REFBVztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHlEQUFXO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUseURBQVc7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUseURBQVc7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNEJBQTRCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBOztBQUVvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsU3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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QUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0I7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixPQUFPO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5cUIwQjs7QUFFdEQ7QUFDQSxTQUFTLG1FQUFnQjtBQUN6QjtBQUNrQjs7Ozs7Ozs7Ozs7Ozs7O0FDTGxCO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0EsSUFBSTtBQUNKLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDdUI7Ozs7Ozs7Ozs7Ozs7OztBQ2hDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsMEJBQTBCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXVCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RFdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWdFO0FBQ047QUFDSTtBQUNFO0FBQ0Y7QUFDUjtBQUNoQjtBQUNNO0FBQ3ZCO0FBQ3FDO0FBUzFCO0FBQ1k7O0FBRTVDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ04sSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBEQUFXO0FBQ1gsbURBQVE7O0FBRVI7O0FBRUEsbUJBQW1CLFFBQVE7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Bob2VuaXgtcmlzaW5nLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9waG9lbml4LXJpc2luZy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcGhvZW5peC1yaXNpbmcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9waG9lbml4LXJpc2luZy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9waG9lbml4LXJpc2luZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9waG9lbml4LXJpc2luZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcGhvZW5peC1yaXNpbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcGhvZW5peC1yaXNpbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcGhvZW5peC1yaXNpbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9waG9lbml4LXJpc2luZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Bob2VuaXgtcmlzaW5nLy4vc3JjL2J1aWxkQnV0dG9uQm94LmpzIiwid2VicGFjazovL3Bob2VuaXgtcmlzaW5nLy4vc3JjL2J1aWxkSGFyYm9yLmpzIiwid2VicGFjazovL3Bob2VuaXgtcmlzaW5nLy4vc3JjL2NvbXB1dGVyRm5zL2NvbXB1dGVyUGxhY2VTaGlwLmpzIiwid2VicGFjazovL3Bob2VuaXgtcmlzaW5nLy4vc3JjL2NvbXB1dGVyRm5zL3BsYWNlQmF0dGxlc2hpcC5qcyIsIndlYnBhY2s6Ly9waG9lbml4LXJpc2luZy8uL3NyYy9jb21wdXRlckZucy9wbGFjZUNhcnJpZXIuanMiLCJ3ZWJwYWNrOi8vcGhvZW5peC1yaXNpbmcvLi9zcmMvY29tcHV0ZXJGbnMvcGxhY2VEZXN0cm95ZXIuanMiLCJ3ZWJwYWNrOi8vcGhvZW5peC1yaXNpbmcvLi9zcmMvY29tcHV0ZXJGbnMvcGxhY2VQYXRyb2xib2F0LmpzIiwid2VicGFjazovL3Bob2VuaXgtcmlzaW5nLy4vc3JjL2NvbXB1dGVyRm5zL3BsYWNlU3VibWFyaW5lLmpzIiwid2VicGFjazovL3Bob2VuaXgtcmlzaW5nLy4vc3JjL2NvbXB1dGVyRm5zL3JhbmRvbUF0dGFjay5qcyIsIndlYnBhY2s6Ly9waG9lbml4LXJpc2luZy8uL3NyYy9jb21wdXRlckZucy9zaGlwSHVudC5qcyIsIndlYnBhY2s6Ly9waG9lbml4LXJpc2luZy8uL3NyYy9jdXJyZW50bHlQbGFjaW5nU2hpcC5qcyIsIndlYnBhY2s6Ly9waG9lbml4LXJpc2luZy8uL3NyYy9kaXNwbGF5Qm9hcmQuanMiLCJ3ZWJwYWNrOi8vcGhvZW5peC1yaXNpbmcvLi9zcmMvZ2FtZURpZmZpY3VsdHkuanMiLCJ3ZWJwYWNrOi8vcGhvZW5peC1yaXNpbmcvLi9zcmMvZ2FtZUxvb3AuanMiLCJ3ZWJwYWNrOi8vcGhvZW5peC1yaXNpbmcvLi9zcmMvZ2FtZWJvYXJkRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9waG9lbml4LXJpc2luZy8uL3NyYy9pc0xlZ2FsTW92ZS5qcyIsIndlYnBhY2s6Ly9waG9lbml4LXJpc2luZy8uL3NyYy9pc0xlZ2FsUGxhY2VtZW50LmpzIiwid2VicGFjazovL3Bob2VuaXgtcmlzaW5nLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9waG9lbml4LXJpc2luZy8uL3NyYy9zaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9waG9lbml4LXJpc2luZy8uL3NyYy9zb2x2ZU1pc3Nlcy5qcyIsIndlYnBhY2s6Ly9waG9lbml4LXJpc2luZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9waG9lbml4LXJpc2luZy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9waG9lbml4LXJpc2luZy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGhvZW5peC1yaXNpbmcvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9waG9lbml4LXJpc2luZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Bob2VuaXgtcmlzaW5nL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGhvZW5peC1yaXNpbmcvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcGhvZW5peC1yaXNpbmcvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Bob2VuaXgtcmlzaW5nLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG59XFxuXFxuLnRleHQge1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5oMiB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWlubGluZTogMnJlbTtcXG59XFxuXFxuaDMge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIG1hcmdpbi1pbmxpbmU6IDNyZW07XFxufVxcblxcbiNib2FyZE9uZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG9yZGVyOiAtMTtcXG59XFxuXFxuLnJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIG1hcmdpbi10b3A6IC0xcHg7XFxuICBtYXJnaW4tbGVmdDogLTFweDtcXG59XFxuLnJvdyAuYm94IHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZDsgLyogdXNlIGluc3RlYWQgb2YgYm9yZGVyICovXFxuICBtYXJnaW4tdG9wOiAxcHg7XFxuICBtYXJnaW4tbGVmdDogMXB4O1xcbn1cXG5cXG4uYm94IHtcXG4gIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDUwcHg7XFxufVxcblxcbi5jYXJyaWVyIHtcXG4gIGhlaWdodDogMTMwcHg7XFxuICB3aWR0aDogMTMwcHg7XFxufVxcbi5iYXR0bGVzaGlwIHtcXG4gIGhlaWdodDogMTA1cHg7XFxuICB3aWR0aDogMTA1cHg7XFxufVxcbi5kZXN0cm95ZXIge1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgd2lkdGg6IDgwcHg7XFxufVxcbi5zdWJtYXJpbmUge1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgd2lkdGg6IDgwcHg7XFxufVxcbi5wYXRyb2xib2F0IHtcXG4gIGhlaWdodDogODBweDtcXG4gIHdpZHRoOiA4MHB4O1xcbn1cXG5cXG4jcGxhY2VfY2FycmllciB7XFxuICB3aWR0aDogMTI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiZTBiO1xcblxcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG4jcGxhY2VfYmF0dGxlc2hpcCB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmI1NjA3O1xcblxcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG4jcGxhY2VfZGVzdHJveWVyIHtcXG4gIHdpZHRoOiA3NXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcXG5cXG4gIGN1cnNvcjogbW92ZTtcXG59XFxuI3BsYWNlX3N1Ym1hcmluZSB7XFxuICB3aWR0aDogNzVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcXG5cXG4gIGN1cnNvcjogbW92ZTtcXG59XFxuI3BsYWNlX3BhdHJvbGJvYXQge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDZlO1xcblxcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG5cXG4uZHJhZ2dhYmxlLmRyYWdnaW5nIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLmJvYXRCb3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uYm9hdFJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbiNoYXJib3Ige1xcbiAgb3JkZXI6IC0xO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICBib3JkZXI6IGJsYWNrIDEwcHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAzMnB4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnNlZ21lbnQge1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI3NlZ21lbnRlZF9fY2FycmllciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIC8qIG1hcmdpbi10b3A6IC0xcHg7XFxuICBtYXJnaW4tbGVmdDogLTFweDsgKi9cXG59XFxuXFxuI3NlZ21lbnRlZF9fY2Fycmllcjpob3ZlciB7XFxuICBjdXJzb3I6IGdyYWI7XFxufVxcblxcbiNzZWdtZW50ZWRfX2NhcnJpZXIgLnNlZ21lbnQge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkOyAvKiB1c2UgaW5zdGVhZCBvZiBib3JkZXIgKi9cXG4gIG1hcmdpbi10b3A6IDFweDtcXG4gIG1hcmdpbi1sZWZ0OiAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiZTBiO1xcbn1cXG5cXG4jYm9hdEJveF9fY2FycmllciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrOyAqL1xcbiAgaGVpZ2h0OiAxMzBweDtcXG4gIHdpZHRoOiAxMzBweDtcXG59XFxuXFxuI3NlZ21lbnRlZF9fYmF0dGxlc2hpcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIG1hcmdpbi10b3A6IC0xcHg7XFxuICBtYXJnaW4tbGVmdDogLTFweDtcXG59XFxuXFxuI3NlZ21lbnRlZF9fYmF0dGxlc2hpcDpob3ZlciB7XFxuICBjdXJzb3I6IGdyYWI7XFxufVxcblxcbiNzZWdtZW50ZWRfX2JhdHRsZXNoaXAgLnNlZ21lbnQge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkOyAvKiB1c2UgaW5zdGVhZCBvZiBib3JkZXIgKi9cXG4gIG1hcmdpbi10b3A6IDFweDtcXG4gIG1hcmdpbi1sZWZ0OiAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmM2YzI1O1xcbn1cXG5cXG4jYm9hdEJveF9fYmF0dGxlc2hpcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrOyAqL1xcbiAgaGVpZ2h0OiAxMDVweDtcXG4gIHdpZHRoOiAxMDVweDtcXG59XFxuXFxuI3NlZ21lbnRlZF9fZGVzdHJveWVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgbWFyZ2luLXRvcDogLTFweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xcbn1cXG5cXG4jc2VnbWVudGVkX19kZXN0cm95ZXI6aG92ZXIge1xcbiAgY3Vyc29yOiBncmFiO1xcbn1cXG5cXG4jc2VnbWVudGVkX19kZXN0cm95ZXIgLnNlZ21lbnQge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkOyAvKiB1c2UgaW5zdGVhZCBvZiBib3JkZXIgKi9cXG4gIG1hcmdpbi10b3A6IDFweDtcXG4gIG1hcmdpbi1sZWZ0OiAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQzNTU3O1xcbn1cXG5cXG4jYm9hdEJveF9fZGVzdHJveWVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICovXFxuICBoZWlnaHQ6IDgwcHg7XFxuICB3aWR0aDogODBweDtcXG59XFxuXFxuI3NlZ21lbnRlZF9fc3VibWFyaW5lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgbWFyZ2luLXRvcDogLTFweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xcbn1cXG5cXG4jc2VnbWVudGVkX19zdWJtYXJpbmU6aG92ZXIge1xcbiAgY3Vyc29yOiBncmFiO1xcbn1cXG5cXG4jc2VnbWVudGVkX19zdWJtYXJpbmUgLnNlZ21lbnQge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkOyAvKiB1c2UgaW5zdGVhZCBvZiBib3JkZXIgKi9cXG4gIG1hcmdpbi10b3A6IDFweDtcXG4gIG1hcmdpbi1sZWZ0OiAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODMzOGVjO1xcbn1cXG5cXG4jYm9hdEJveF9fc3VibWFyaW5lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICovXFxuICBoZWlnaHQ6IDgwcHg7XFxuICB3aWR0aDogODBweDtcXG59XFxuXFxuI3NlZ21lbnRlZF9fcGF0cm9sYm9hdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIG1hcmdpbi10b3A6IC0xcHg7XFxuICBtYXJnaW4tbGVmdDogLTFweDtcXG59XFxuXFxuI3NlZ21lbnRlZF9fcGF0cm9sYm9hdDpob3ZlciB7XFxuICBjdXJzb3I6IGdyYWI7XFxufVxcblxcbiNzZWdtZW50ZWRfX3BhdHJvbGJvYXQgLnNlZ21lbnQge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkOyAvKiB1c2UgaW5zdGVhZCBvZiBib3JkZXIgKi9cXG4gIG1hcmdpbi10b3A6IDFweDtcXG4gIG1hcmdpbi1sZWZ0OiAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGFjOTI2O1xcbn1cXG5cXG4jYm9hdEJveF9fcGF0cm9sYm9hdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrOyAqL1xcbiAgaGVpZ2h0OiA1NXB4O1xcbiAgd2lkdGg6IDU1cHg7XFxufVxcblxcbiNjb21tYW5kZXIsXFxuI2FkbWlyYWwge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBjb2xvcjogIzBjMDkwYTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDI1MG1zIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMTUwbXMgZWFzZTtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuI2NvbW1hbmRlcjpob3ZlcixcXG4jY29tbWFuZGVyOmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6ICNkYWY3YTY7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4jY29tbWFuZGVyOmZvY3VzIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxuICBvdXRsaW5lLW9mZnNldDogLTRweDtcXG59XFxuXFxuI2NvbW1hbmRlcjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuXFxuI2FkbWlyYWw6aG92ZXIsXFxuI2FkbWlyYWw6Zm9jdXMge1xcbiAgYmFja2dyb3VuZDogI2ZmY2NjYjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbiNhZG1pcmFsOmZvY3VzIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxuICBvdXRsaW5lLW9mZnNldDogLTRweDtcXG59XFxuXFxuI2FkbWlyYWw6YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxufVxcblxcbiNyZXBsYWNlU2hpcHM6aG92ZXIsXFxuI3JlcGxhY2VTaGlwczpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbiNyZXBsYWNlU2hpcHM6Zm9jdXMge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIHJnYigwLCAwLCAwKTtcXG4gIG91dGxpbmUtb2Zmc2V0OiAtNHB4O1xcbn1cXG5cXG4jcmVwbGFjZVNoaXBzOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbn1cXG5cXG4jYnV0dG9uQm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyNXB4O1xcbn1cXG5cXG4jYnV0dG9uQm94VG9wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiAyNXB4O1xcbn1cXG5cXG4jYnV0dG9uQm94Qm90dG9tIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNyZXBsYWNlU2hpcHMge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBjb2xvcjogIzBjMDkwYTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDI1MG1zIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMTUwbXMgZWFzZTtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuI3BsYXlBZ2FpbiB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxcmVtIDFyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBjb2xvcjogIzBjMDkwYTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDI1MG1zIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMTUwbXMgZWFzZTtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuI3BsYXlBZ2Fpbjpob3ZlcixcXG4jcGxheUFnYWluOmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuI3BsYXlBZ2Fpbjpmb2N1cyB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgcmdiKDAsIDAsIDApO1xcbiAgb3V0bGluZS1vZmZzZXQ6IC00cHg7XFxufVxcblxcbiNwbGF5QWdhaW46YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxufVxcblxcbiNsZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIscUJB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W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG59XFxuXFxuLnRleHQge1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5oMiB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWlubGluZTogMnJlbTtcXG59XFxuXFxuaDMge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIG1hcmdpbi1pbmxpbmU6IDNyZW07XFxufVxcblxcbiNib2FyZE9uZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG9yZGVyOiAtMTtcXG59XFxuXFxuLnJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIG1hcmdpbi10b3A6IC0xcHg7XFxuICBtYXJnaW4tbGVmdDogLTFweDtcXG59XFxuLnJvdyAuYm94IHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZDsgLyogdXNlIGluc3RlYWQgb2YgYm9yZGVyICovXFxuICBtYXJnaW4tdG9wOiAxcHg7XFxuICBtYXJnaW4tbGVmdDogMXB4O1xcbn1cXG5cXG4uYm94IHtcXG4gIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDUwcHg7XFxufVxcblxcbi5jYXJyaWVyIHtcXG4gIGhlaWdodDogMTMwcHg7XFxuICB3aWR0aDogMTMwcHg7XFxufVxcbi5iYXR0bGVzaGlwIHtcXG4gIGhlaWdodDogMTA1cHg7XFxuICB3aWR0aDogMTA1cHg7XFxufVxcbi5kZXN0cm95ZXIge1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgd2lkdGg6IDgwcHg7XFxufVxcbi5zdWJtYXJpbmUge1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgd2lkdGg6IDgwcHg7XFxufVxcbi5wYXRyb2xib2F0IHtcXG4gIGhlaWdodDogODBweDtcXG4gIHdpZHRoOiA4MHB4O1xcbn1cXG5cXG4jcGxhY2VfY2FycmllciB7XFxuICB3aWR0aDogMTI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiZTBiO1xcblxcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG4jcGxhY2VfYmF0dGxlc2hpcCB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmI1NjA3O1xcblxcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG4jcGxhY2VfZGVzdHJveWVyIHtcXG4gIHdpZHRoOiA3NXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcXG5cXG4gIGN1cnNvcjogbW92ZTtcXG59XFxuI3BsYWNlX3N1Ym1hcmluZSB7XFxuICB3aWR0aDogNzVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcXG5cXG4gIGN1cnNvcjogbW92ZTtcXG59XFxuI3BsYWNlX3BhdHJvbGJvYXQge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDZlO1xcblxcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG5cXG4uZHJhZ2dhYmxlLmRyYWdnaW5nIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLmJvYXRCb3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uYm9hdFJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbiNoYXJib3Ige1xcbiAgb3JkZXI6IC0xO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICBib3JkZXI6IGJsYWNrIDEwcHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAzMnB4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnNlZ21lbnQge1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI3NlZ21lbnRlZF9fY2FycmllciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIC8qIG1hcmdpbi10b3A6IC0xcHg7XFxuICBtYXJnaW4tbGVmdDogLTFweDsgKi9cXG59XFxuXFxuI3NlZ21lbnRlZF9fY2Fycmllcjpob3ZlciB7XFxuICBjdXJzb3I6IGdyYWI7XFxufVxcblxcbiNzZWdtZW50ZWRfX2NhcnJpZXIgLnNlZ21lbnQge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkOyAvKiB1c2UgaW5zdGVhZCBvZiBib3JkZXIgKi9cXG4gIG1hcmdpbi10b3A6IDFweDtcXG4gIG1hcmdpbi1sZWZ0OiAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiZTBiO1xcbn1cXG5cXG4jYm9hdEJveF9fY2FycmllciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrOyAqL1xcbiAgaGVpZ2h0OiAxMzBweDtcXG4gIHdpZHRoOiAxMzBweDtcXG59XFxuXFxuI3NlZ21lbnRlZF9fYmF0dGxlc2hpcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIG1hcmdpbi10b3A6IC0xcHg7XFxuICBtYXJnaW4tbGVmdDogLTFweDtcXG59XFxuXFxuI3NlZ21lbnRlZF9fYmF0dGxlc2hpcDpob3ZlciB7XFxuICBjdXJzb3I6IGdyYWI7XFxufVxcblxcbiNzZWdtZW50ZWRfX2JhdHRsZXNoaXAgLnNlZ21lbnQge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkOyAvKiB1c2UgaW5zdGVhZCBvZiBib3JkZXIgKi9cXG4gIG1hcmdpbi10b3A6IDFweDtcXG4gIG1hcmdpbi1sZWZ0OiAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmM2YzI1O1xcbn1cXG5cXG4jYm9hdEJveF9fYmF0dGxlc2hpcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrOyAqL1xcbiAgaGVpZ2h0OiAxMDVweDtcXG4gIHdpZHRoOiAxMDVweDtcXG59XFxuXFxuI3NlZ21lbnRlZF9fZGVzdHJveWVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgbWFyZ2luLXRvcDogLTFweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xcbn1cXG5cXG4jc2VnbWVudGVkX19kZXN0cm95ZXI6aG92ZXIge1xcbiAgY3Vyc29yOiBncmFiO1xcbn1cXG5cXG4jc2VnbWVudGVkX19kZXN0cm95ZXIgLnNlZ21lbnQge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkOyAvKiB1c2UgaW5zdGVhZCBvZiBib3JkZXIgKi9cXG4gIG1hcmdpbi10b3A6IDFweDtcXG4gIG1hcmdpbi1sZWZ0OiAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQzNTU3O1xcbn1cXG5cXG4jYm9hdEJveF9fZGVzdHJveWVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICovXFxuICBoZWlnaHQ6IDgwcHg7XFxuICB3aWR0aDogODBweDtcXG59XFxuXFxuI3NlZ21lbnRlZF9fc3VibWFyaW5lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgbWFyZ2luLXRvcDogLTFweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xcbn1cXG5cXG4jc2VnbWVudGVkX19zdWJtYXJpbmU6aG92ZXIge1xcbiAgY3Vyc29yOiBncmFiO1xcbn1cXG5cXG4jc2VnbWVudGVkX19zdWJtYXJpbmUgLnNlZ21lbnQge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkOyAvKiB1c2UgaW5zdGVhZCBvZiBib3JkZXIgKi9cXG4gIG1hcmdpbi10b3A6IDFweDtcXG4gIG1hcmdpbi1sZWZ0OiAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODMzOGVjO1xcbn1cXG5cXG4jYm9hdEJveF9fc3VibWFyaW5lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICovXFxuICBoZWlnaHQ6IDgwcHg7XFxuICB3aWR0aDogODBweDtcXG59XFxuXFxuI3NlZ21lbnRlZF9fcGF0cm9sYm9hdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIG1hcmdpbi10b3A6IC0xcHg7XFxuICBtYXJnaW4tbGVmdDogLTFweDtcXG59XFxuXFxuI3NlZ21lbnRlZF9fcGF0cm9sYm9hdDpob3ZlciB7XFxuICBjdXJzb3I6IGdyYWI7XFxufVxcblxcbiNzZWdtZW50ZWRfX3BhdHJvbGJvYXQgLnNlZ21lbnQge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkOyAvKiB1c2UgaW5zdGVhZCBvZiBib3JkZXIgKi9cXG4gIG1hcmdpbi10b3A6IDFweDtcXG4gIG1hcmdpbi1sZWZ0OiAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGFjOTI2O1xcbn1cXG5cXG4jYm9hdEJveF9fcGF0cm9sYm9hdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrOyAqL1xcbiAgaGVpZ2h0OiA1NXB4O1xcbiAgd2lkdGg6IDU1cHg7XFxufVxcblxcbiNjb21tYW5kZXIsXFxuI2FkbWlyYWwge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBjb2xvcjogIzBjMDkwYTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDI1MG1zIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMTUwbXMgZWFzZTtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuI2NvbW1hbmRlcjpob3ZlcixcXG4jY29tbWFuZGVyOmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6ICNkYWY3YTY7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4jY29tbWFuZGVyOmZvY3VzIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxuICBvdXRsaW5lLW9mZnNldDogLTRweDtcXG59XFxuXFxuI2NvbW1hbmRlcjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuXFxuI2FkbWlyYWw6aG92ZXIsXFxuI2FkbWlyYWw6Zm9jdXMge1xcbiAgYmFja2dyb3VuZDogI2ZmY2NjYjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbiNhZG1pcmFsOmZvY3VzIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxuICBvdXRsaW5lLW9mZnNldDogLTRweDtcXG59XFxuXFxuI2FkbWlyYWw6YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxufVxcblxcbiNyZXBsYWNlU2hpcHM6aG92ZXIsXFxuI3JlcGxhY2VTaGlwczpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbiNyZXBsYWNlU2hpcHM6Zm9jdXMge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIHJnYigwLCAwLCAwKTtcXG4gIG91dGxpbmUtb2Zmc2V0OiAtNHB4O1xcbn1cXG5cXG4jcmVwbGFjZVNoaXBzOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbn1cXG5cXG4jYnV0dG9uQm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyNXB4O1xcbn1cXG5cXG4jYnV0dG9uQm94VG9wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiAyNXB4O1xcbn1cXG5cXG4jYnV0dG9uQm94Qm90dG9tIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNyZXBsYWNlU2hpcHMge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBjb2xvcjogIzBjMDkwYTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDI1MG1zIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMTUwbXMgZWFzZTtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuI3BsYXlBZ2FpbiB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxcmVtIDFyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBjb2xvcjogIzBjMDkwYTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDI1MG1zIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMTUwbXMgZWFzZTtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuI3BsYXlBZ2Fpbjpob3ZlcixcXG4jcGxheUFnYWluOmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuI3BsYXlBZ2Fpbjpmb2N1cyB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgcmdiKDAsIDAsIDApO1xcbiAgb3V0bGluZS1vZmZzZXQ6IC00cHg7XFxufVxcblxcbiNwbGF5QWdhaW46YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxufVxcblxcbiNsZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxubGV0IGJ1dHRvbkJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5idXR0b25Cb3guaWQgPSBcImJ1dHRvbkJveFwiO1xubGV0IGJ1dHRvbkJveFRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5idXR0b25Cb3hUb3AuaWQgPSBcImJ1dHRvbkJveFRvcFwiO1xubGV0IGJ1dHRvbkJveEJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5idXR0b25Cb3hCb3R0b20uaWQgPSBcImJ1dHRvbkJveEJvdHRvbVwiO1xuXG5mdW5jdGlvbiBidWlsZEJ1dHRvbkJveCgpIHtcbiAgYnV0dG9uQm94LmFwcGVuZENoaWxkKGJ1dHRvbkJveFRvcCk7XG4gIGJ1dHRvbkJveC5hcHBlbmRDaGlsZChidXR0b25Cb3hCb3R0b20pO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGJ1dHRvbkJveCk7XG59XG5leHBvcnQgeyBidWlsZEJ1dHRvbkJveCB9O1xuIiwiaW1wb3J0IHtcbiAgZ2V0Q2Fycmllck9yaWVudGF0aW9uLFxuICBnZXRDdXJyZW50bHlQbGFjaW5nU2hpcCxcbiAgc2V0QmF0dGxlc2hpcE9yaWVudGF0aW9uLFxuICBnZXRCYXR0bGVzaGlwT3JpZW50YXRpb24sXG4gIHNldENhcnJpZXJPcmllbnRhdGlvbixcbiAgc2V0Q3VycmVudGx5UGxhY2luZ1NoaXAsXG4gIHNldERlc3Ryb3llck9yaWVudGF0aW9uLFxuICBzZXRQYXRyb2xib2F0T3JpZW50YXRpb24sXG4gIHNldFN1Ym1hcmluZU9yaWVudGF0aW9uLFxufSBmcm9tIFwiLi9jdXJyZW50bHlQbGFjaW5nU2hpcFwiO1xuXG5mdW5jdGlvbiBidWlsZEhhcmJvcigpIHtcbiAgLy9lbGVtZW50IGluc3RhbnRpYXRpb25cbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGxldCBoYXJib3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoYXJib3IuaWQgPSBcImhhcmJvclwiO1xuICBsZXQgYm9hdFJvdzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBib2F0Um93MS5jbGFzc05hbWUgPSBcImJvYXRSb3dcIjtcbiAgbGV0IGJvYXRSb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYm9hdFJvdzIuY2xhc3NOYW1lID0gXCJib2F0Um93XCI7XG4gIGxldCBib2F0Qm94X19jYXJyaWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYm9hdEJveF9fY2Fycmllci5pZCA9IFwiYm9hdEJveF9fY2FycmllclwiO1xuICBsZXQgc2VnbWVudGVkX19jYXJyaWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2VnbWVudGVkX19jYXJyaWVyLmlkID0gXCJzZWdtZW50ZWRfX2NhcnJpZXJcIjtcbiAgc2VnbWVudGVkX19jYXJyaWVyLmRyYWdnYWJsZSA9IFwidHJ1ZVwiO1xuICBzZWdtZW50ZWRfX2NhcnJpZXIudGl0bGUgPSBcIkNhcnJpZXJcIjtcbiAgbGV0IGJvYXRCb3hfX2JhdHRsZXNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBib2F0Qm94X19iYXR0bGVzaGlwLmlkID0gXCJib2F0Qm94X19iYXR0bGVzaGlwXCI7XG4gIGxldCBzZWdtZW50ZWRfX2JhdHRsZXNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWdtZW50ZWRfX2JhdHRsZXNoaXAuaWQgPSBcInNlZ21lbnRlZF9fYmF0dGxlc2hpcFwiO1xuICBzZWdtZW50ZWRfX2JhdHRsZXNoaXAuZHJhZ2dhYmxlID0gXCJ0cnVlXCI7XG4gIHNlZ21lbnRlZF9fYmF0dGxlc2hpcC50aXRsZSA9IFwiQmF0dGxlc2hpcFwiO1xuICBsZXQgYm9hdEJveF9fZGVzdHJveWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYm9hdEJveF9fZGVzdHJveWVyLmlkID0gXCJib2F0Qm94X19kZXN0cm95ZXJcIjtcbiAgbGV0IHNlZ21lbnRlZF9fZGVzdHJveWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2VnbWVudGVkX19kZXN0cm95ZXIuaWQgPSBcInNlZ21lbnRlZF9fZGVzdHJveWVyXCI7XG4gIHNlZ21lbnRlZF9fZGVzdHJveWVyLmRyYWdnYWJsZSA9IFwidHJ1ZVwiO1xuICBzZWdtZW50ZWRfX2Rlc3Ryb3llci50aXRsZSA9IFwiRGVzdHJveWVyXCI7XG4gIGxldCBib2F0Qm94X19zdWJtYXJpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBib2F0Qm94X19zdWJtYXJpbmUuaWQgPSBcImJvYXRCb3hfX3N1Ym1hcmluZVwiO1xuICBsZXQgc2VnbWVudGVkX19zdWJtYXJpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWdtZW50ZWRfX3N1Ym1hcmluZS5pZCA9IFwic2VnbWVudGVkX19zdWJtYXJpbmVcIjtcbiAgc2VnbWVudGVkX19zdWJtYXJpbmUuZHJhZ2dhYmxlID0gXCJ0cnVlXCI7XG4gIHNlZ21lbnRlZF9fc3VibWFyaW5lLnRpdGxlID0gXCJTdWJtYXJpbmVcIjtcbiAgbGV0IGJvYXRCb3hfX3BhdHJvbGJvYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBib2F0Qm94X19wYXRyb2xib2F0LmlkID0gXCJib2F0Qm94X19wYXRyb2xib2F0XCI7XG4gIGxldCBzZWdtZW50ZWRfX3BhdHJvbGJvYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWdtZW50ZWRfX3BhdHJvbGJvYXQuaWQgPSBcInNlZ21lbnRlZF9fcGF0cm9sYm9hdFwiO1xuICBzZWdtZW50ZWRfX3BhdHJvbGJvYXQuZHJhZ2dhYmxlID0gXCJ0cnVlXCI7XG4gIHNlZ21lbnRlZF9fcGF0cm9sYm9hdC50aXRsZSA9IFwiUGF0cm9sIEJvYXRcIjtcbiAgLy9lbGVtZW50IGluc3RhbnRpYXRpb25cbiAgLy9kcmFnZ2FibGVzXG4gIGNvbnN0IGRyYWdnYWJsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRyYWdnYWJsZVwiKTtcblxuICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgIGRyYWdnYWJsZS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsICgpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5jbGFzc0xpc3QuYWRkKFwiZHJhZ2dpbmdcIik7XG4gICAgfSk7XG4gICAgZHJhZ2dhYmxlLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW5kXCIsICgpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZ2dpbmdcIik7XG4gICAgfSk7XG4gIH0pO1xuICAvL2RyYWdnYWJsZXNcbiAgLy9ldmVudCBsaXN0ZW5lcnNcbiAgc2VnbWVudGVkX19jYXJyaWVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xuICBzZWdtZW50ZWRfX2NhcnJpZXIuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc2VnbWVudGVkX19jYXJyaWVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPT0gXCJyb3dcIikge1xuICAgICAgc2VnbWVudGVkX19jYXJyaWVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xuICAgICAgc2V0Q2Fycmllck9yaWVudGF0aW9uKDEpO1xuICAgIH0gZWxzZSBpZiAoc2VnbWVudGVkX19jYXJyaWVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPT0gXCJjb2x1bW5cIikge1xuICAgICAgc2VnbWVudGVkX19jYXJyaWVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xuICAgICAgc2V0Q2Fycmllck9yaWVudGF0aW9uKDApO1xuICAgIH1cbiAgfSk7XG4gIHNlZ21lbnRlZF9fY2Fycmllci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICBzZXRDdXJyZW50bHlQbGFjaW5nU2hpcChcImNhcnJpZXJcIik7XG4gIH0pO1xuICBzZWdtZW50ZWRfX2JhdHRsZXNoaXAuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XG4gIHNlZ21lbnRlZF9fYmF0dGxlc2hpcC5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChzZWdtZW50ZWRfX2JhdHRsZXNoaXAuc3R5bGUuZmxleERpcmVjdGlvbiA9PSBcInJvd1wiKSB7XG4gICAgICBzZWdtZW50ZWRfX2JhdHRsZXNoaXAuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XG4gICAgICBzZXRCYXR0bGVzaGlwT3JpZW50YXRpb24oMSk7XG4gICAgfSBlbHNlIGlmIChzZWdtZW50ZWRfX2JhdHRsZXNoaXAuc3R5bGUuZmxleERpcmVjdGlvbiA9PSBcImNvbHVtblwiKSB7XG4gICAgICBzZWdtZW50ZWRfX2JhdHRsZXNoaXAuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XG4gICAgICBzZXRCYXR0bGVzaGlwT3JpZW50YXRpb24oMCk7XG4gICAgfVxuICB9KTtcbiAgc2VnbWVudGVkX19iYXR0bGVzaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZnVuY3Rpb24gKCkge1xuICAgIHNldEN1cnJlbnRseVBsYWNpbmdTaGlwKFwiYmF0dGxlc2hpcFwiKTtcbiAgfSk7XG5cbiAgc2VnbWVudGVkX19kZXN0cm95ZXIuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XG4gIHNlZ21lbnRlZF9fZGVzdHJveWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNlZ21lbnRlZF9fZGVzdHJveWVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPT0gXCJyb3dcIikge1xuICAgICAgc2VnbWVudGVkX19kZXN0cm95ZXIuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XG4gICAgICBzZXREZXN0cm95ZXJPcmllbnRhdGlvbigxKTtcbiAgICB9IGVsc2UgaWYgKHNlZ21lbnRlZF9fZGVzdHJveWVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPT0gXCJjb2x1bW5cIikge1xuICAgICAgc2VnbWVudGVkX19kZXN0cm95ZXIuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XG4gICAgICBzZXREZXN0cm95ZXJPcmllbnRhdGlvbigwKTtcbiAgICB9XG4gIH0pO1xuICBzZWdtZW50ZWRfX2Rlc3Ryb3llci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICBzZXRDdXJyZW50bHlQbGFjaW5nU2hpcChcImRlc3Ryb3llclwiKTtcbiAgfSk7XG5cbiAgc2VnbWVudGVkX19zdWJtYXJpbmUuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XG4gIHNlZ21lbnRlZF9fc3VibWFyaW5lLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNlZ21lbnRlZF9fc3VibWFyaW5lLnN0eWxlLmZsZXhEaXJlY3Rpb24gPT0gXCJyb3dcIikge1xuICAgICAgc2VnbWVudGVkX19zdWJtYXJpbmUuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XG4gICAgICBzZXRTdWJtYXJpbmVPcmllbnRhdGlvbigxKTtcbiAgICB9IGVsc2UgaWYgKHNlZ21lbnRlZF9fc3VibWFyaW5lLnN0eWxlLmZsZXhEaXJlY3Rpb24gPT0gXCJjb2x1bW5cIikge1xuICAgICAgc2VnbWVudGVkX19zdWJtYXJpbmUuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XG4gICAgICBzZXRTdWJtYXJpbmVPcmllbnRhdGlvbigwKTtcbiAgICB9XG4gIH0pO1xuICBzZWdtZW50ZWRfX3N1Ym1hcmluZS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICBzZXRDdXJyZW50bHlQbGFjaW5nU2hpcChcInN1Ym1hcmluZVwiKTtcbiAgfSk7XG5cbiAgc2VnbWVudGVkX19wYXRyb2xib2F0LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xuICBzZWdtZW50ZWRfX3BhdHJvbGJvYXQuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc2VnbWVudGVkX19wYXRyb2xib2F0LnN0eWxlLmZsZXhEaXJlY3Rpb24gPT0gXCJyb3dcIikge1xuICAgICAgc2VnbWVudGVkX19wYXRyb2xib2F0LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xuICAgICAgc2V0UGF0cm9sYm9hdE9yaWVudGF0aW9uKDEpO1xuICAgIH0gZWxzZSBpZiAoc2VnbWVudGVkX19wYXRyb2xib2F0LnN0eWxlLmZsZXhEaXJlY3Rpb24gPT0gXCJjb2x1bW5cIikge1xuICAgICAgc2VnbWVudGVkX19wYXRyb2xib2F0LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xuICAgICAgc2V0UGF0cm9sYm9hdE9yaWVudGF0aW9uKDApO1xuICAgIH1cbiAgfSk7XG4gIHNlZ21lbnRlZF9fcGF0cm9sYm9hdC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICBzZXRDdXJyZW50bHlQbGFjaW5nU2hpcChcInBhdHJvbGJvYXRcIik7XG4gIH0pO1xuICAvL2V2ZW50IGxpc3RlbmVyc1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgbGV0IHNlZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNlZ21lbnQuY2xhc3NOYW1lID0gXCJzZWdtZW50XCI7XG4gICAgc2VnbWVudGVkX19jYXJyaWVyLmFwcGVuZENoaWxkKHNlZ21lbnQpO1xuICB9XG4gIGJvYXRCb3hfX2NhcnJpZXIuYXBwZW5kQ2hpbGQoc2VnbWVudGVkX19jYXJyaWVyKTtcbiAgLy9cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICBsZXQgc2VnbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VnbWVudC5jbGFzc05hbWUgPSBcInNlZ21lbnRcIjtcbiAgICBzZWdtZW50ZWRfX2JhdHRsZXNoaXAuYXBwZW5kQ2hpbGQoc2VnbWVudCk7XG4gIH1cbiAgYm9hdEJveF9fYmF0dGxlc2hpcC5hcHBlbmRDaGlsZChzZWdtZW50ZWRfX2JhdHRsZXNoaXApO1xuICAvL1xuICBib2F0Um93MS5hcHBlbmRDaGlsZChib2F0Qm94X19jYXJyaWVyKTtcbiAgYm9hdFJvdzEuYXBwZW5kQ2hpbGQoYm9hdEJveF9fYmF0dGxlc2hpcCk7XG4gIC8vXG4gIGhhcmJvci5hcHBlbmRDaGlsZChib2F0Um93MSk7XG4gIC8vXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgbGV0IHNlZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNlZ21lbnQuY2xhc3NOYW1lID0gXCJzZWdtZW50XCI7XG4gICAgc2VnbWVudGVkX19kZXN0cm95ZXIuYXBwZW5kQ2hpbGQoc2VnbWVudCk7XG4gIH1cbiAgYm9hdEJveF9fZGVzdHJveWVyLmFwcGVuZENoaWxkKHNlZ21lbnRlZF9fZGVzdHJveWVyKTtcbiAgLy9cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICBsZXQgc2VnbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VnbWVudC5jbGFzc05hbWUgPSBcInNlZ21lbnRcIjtcbiAgICBzZWdtZW50ZWRfX3N1Ym1hcmluZS5hcHBlbmRDaGlsZChzZWdtZW50KTtcbiAgfVxuICBib2F0Qm94X19zdWJtYXJpbmUuYXBwZW5kQ2hpbGQoc2VnbWVudGVkX19zdWJtYXJpbmUpO1xuICAvL1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgIGxldCBzZWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWdtZW50LmNsYXNzTmFtZSA9IFwic2VnbWVudFwiO1xuICAgIHNlZ21lbnRlZF9fcGF0cm9sYm9hdC5hcHBlbmRDaGlsZChzZWdtZW50KTtcbiAgfVxuICBib2F0Qm94X19wYXRyb2xib2F0LmFwcGVuZENoaWxkKHNlZ21lbnRlZF9fcGF0cm9sYm9hdCk7XG4gIC8vXG4gIGJvYXRSb3cyLmFwcGVuZENoaWxkKGJvYXRCb3hfX2Rlc3Ryb3llcik7XG4gIGJvYXRSb3cyLmFwcGVuZENoaWxkKGJvYXRCb3hfX3N1Ym1hcmluZSk7XG4gIGJvYXRSb3cyLmFwcGVuZENoaWxkKGJvYXRCb3hfX3BhdHJvbGJvYXQpO1xuICAvL1xuICBoYXJib3IuYXBwZW5kQ2hpbGQoYm9hdFJvdzIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhhcmJvcik7XG59XG5leHBvcnQgeyBidWlsZEhhcmJvciB9O1xuIiwiaW1wb3J0IHsgcGxhY2VCYXR0bGVzaGlwIH0gZnJvbSBcIi4vcGxhY2VCYXR0bGVzaGlwXCI7XG5pbXBvcnQgeyBwbGFjZUNhcnJpZXIgfSBmcm9tIFwiLi9wbGFjZUNhcnJpZXJcIjtcbmltcG9ydCB7IHBsYWNlRGVzdHJveWVyIH0gZnJvbSBcIi4vcGxhY2VEZXN0cm95ZXJcIjtcbmltcG9ydCB7IHBsYWNlUGF0cm9sYm9hdCB9IGZyb20gXCIuL3BsYWNlUGF0cm9sYm9hdFwiO1xuaW1wb3J0IHsgcGxhY2VTdWJtYXJpbmUgfSBmcm9tIFwiLi9wbGFjZVN1Ym1hcmluZVwiO1xuXG5mdW5jdGlvbiBjb21wdXRlclBsYWNlU2hpcHMoY29tcHV0ZXJCb2FyZCkge1xuICBwbGFjZUNhcnJpZXIoY29tcHV0ZXJCb2FyZCk7XG4gIHBsYWNlQmF0dGxlc2hpcChjb21wdXRlckJvYXJkKTtcbiAgcGxhY2VEZXN0cm95ZXIoY29tcHV0ZXJCb2FyZCk7XG4gIHBsYWNlU3VibWFyaW5lKGNvbXB1dGVyQm9hcmQpO1xuICBwbGFjZVBhdHJvbGJvYXQoY29tcHV0ZXJCb2FyZCk7XG59XG5leHBvcnQgeyBjb21wdXRlclBsYWNlU2hpcHMgfTtcbiIsImltcG9ydCB7IGdhbWVib2FyZEZhY3RvcnkgfSBmcm9tIFwiLi4vZ2FtZWJvYXJkRmFjdG9yeVwiO1xuXG5mdW5jdGlvbiBwbGFjZUJhdHRsZXNoaXAoYm9hcmQpIHtcbiAgbGV0IGxlbmd0aCA9IDQ7XG4gIGxldCBpc0ZvdW5kID0gZmFsc2U7XG4gIGxldCByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIGxldCBjb2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIGxldCBvcmllbnRhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuXG4gIHdoaWxlIChpc0ZvdW5kID09IGZhbHNlKSB7XG4gICAgb3JpZW50YXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgY29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGlzRm91bmQgPSB0cnVlO1xuXG4gICAgLy9ob3Jpem9udGFsXG4gICAgaWYgKG9yaWVudGF0aW9uID09IDApIHtcbiAgICAgIGNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDcpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdyA9PSAwKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPT0gMSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA+PSAyICYmIHJvdyA8PSA3KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID09IDgpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID09IDkpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb2x1bW4gPT0gMCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gKyAxICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID09IDEpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uICsgMSArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPj0gMiAmJiBjb2x1bW4gPCA2KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiArIDEgKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID09IDYpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vY29sdW1uIHdpbGwgbmV2ZXIgYmUgZ3JlYXRlciB0aGFuIGxlbmd0aCAoNSBmb3IgY2FycmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9yaWVudGF0aW9uID09IDEpIHtcbiAgICAgIHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDcpO1xuICAgICAgY29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbHVtbiA9PSAwKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gKyAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPT0gMSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uICsgMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA+PSAyICYmIGNvbHVtbiA8PSA3KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gKyAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID09IDgpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiArIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID09IDkpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyb3cgPT0gMCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgMSArIGldW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID09IDEpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGkgKyAxXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPj0gMiAmJiByb3cgPCA2KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpICsgMV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID09IDYpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vcm93IHdpbGwgbmV2ZXIgYmUgZ3JlYXRlciB0aGFuIGxlbmd0aCAoNSBmb3IgY2FycmllcilcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc29sZS5sb2cocm93LCBjb2x1bW4sIG9yaWVudGF0aW9uLCBcImJhdHRsZXNoaXBcIik7XG4gIGJvYXJkLnBsYWNlU2hpcChyb3csIGNvbHVtbiwgbGVuZ3RoLCBcImJhdHRsZXNoaXBcIiwgb3JpZW50YXRpb24pO1xufVxuZXhwb3J0IHsgcGxhY2VCYXR0bGVzaGlwIH07XG4iLCJpbXBvcnQgeyBnYW1lYm9hcmRGYWN0b3J5IH0gZnJvbSBcIi4uL2dhbWVib2FyZEZhY3RvcnlcIjtcblxuZnVuY3Rpb24gcGxhY2VDYXJyaWVyKGJvYXJkKSB7XG4gIGxldCBsZW5ndGggPSA1O1xuICBsZXQgaXNGb3VuZCA9IGZhbHNlO1xuICBsZXQgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICBsZXQgY29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICBsZXQgb3JpZW50YXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcblxuICB3aGlsZSAoaXNGb3VuZCA9PSBmYWxzZSkge1xuICAgIG9yaWVudGF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBpc0ZvdW5kID0gdHJ1ZTtcblxuICAgIC8vaG9yaXpvbnRhbFxuICAgIGlmIChvcmllbnRhdGlvbiA9PSAwKSB7XG4gICAgICBjb2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocm93ID09IDApIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA9PSAxKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID49IDIgJiYgcm93IDw9IDcpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPT0gOCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPT0gOSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbHVtbiA9PSAwKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiArIDEgKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPT0gMSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gKyAxICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA+PSAyICYmIGNvbHVtbiA8IDUpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uICsgMSArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPT0gNSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy9jb2x1bW4gd2lsbCBuZXZlciBiZSBncmVhdGVyIHRoYW4gbGVuZ3RoICg1IGZvciBjYXJyaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAob3JpZW50YXRpb24gPT0gMSkge1xuICAgICAgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNik7XG4gICAgICBjb2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sdW1uID09IDApIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiArIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA9PSAxKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gKyAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID49IDIgJiYgY29sdW1uIDw9IDcpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiArIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPT0gOCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uICsgMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPT0gOSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdyA9PSAwKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyAxICsgaV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPT0gMSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaSArIDFdW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA+PSAyICYmIHJvdyA8IDUpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGkgKyAxXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPT0gNSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy9yb3cgd2lsbCBuZXZlciBiZSBncmVhdGVyIHRoYW4gbGVuZ3RoICg1IGZvciBjYXJyaWVyKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGJvYXJkLnBsYWNlU2hpcChyb3csIGNvbHVtbiwgbGVuZ3RoLCBcImNhcnJpZXJcIiwgb3JpZW50YXRpb24pO1xufVxuZXhwb3J0IHsgcGxhY2VDYXJyaWVyIH07XG4iLCJpbXBvcnQgeyBnYW1lYm9hcmRGYWN0b3J5IH0gZnJvbSBcIi4uL2dhbWVib2FyZEZhY3RvcnlcIjtcblxuZnVuY3Rpb24gcGxhY2VEZXN0cm95ZXIoYm9hcmQpIHtcbiAgbGV0IGxlbmd0aCA9IDM7XG4gIGxldCBpc0ZvdW5kID0gZmFsc2U7XG4gIGxldCByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIGxldCBjb2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIGxldCBvcmllbnRhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuXG4gIHdoaWxlIChpc0ZvdW5kID09IGZhbHNlKSB7XG4gICAgb3JpZW50YXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgY29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGlzRm91bmQgPSB0cnVlO1xuXG4gICAgLy9ob3Jpem9udGFsXG4gICAgaWYgKG9yaWVudGF0aW9uID09IDApIHtcbiAgICAgIGNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDgpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdyA9PSAwKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPT0gMSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA+PSAyICYmIHJvdyA8PSA3KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA9PSA4KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA9PSA5KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sdW1uID09IDApIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uICsgMSArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA9PSAxKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiArIDEgKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID49IDIgJiYgY29sdW1uIDwgNykge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gKyAxICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA9PSA3KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvL2NvbHVtbiB3aWxsIG5ldmVyIGJlIGdyZWF0ZXIgdGhhbiBsZW5ndGggKDUgZm9yIGNhcnJpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvcmllbnRhdGlvbiA9PSAxKSB7XG4gICAgICByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4KTtcbiAgICAgIGNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2x1bW4gPT0gMCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uICsgMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID09IDEpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiArIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPj0gMiAmJiBjb2x1bW4gPD0gNykge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uICsgMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA9PSA4KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gKyAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA9PSA5KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocm93ID09IDApIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIDEgKyBpXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA9PSAxKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpICsgMV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID49IDIgJiYgcm93IDwgNykge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaSArIDFdW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA9PSA3KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvL3JvdyB3aWxsIG5ldmVyIGJlIGdyZWF0ZXIgdGhhbiBsZW5ndGggKDUgZm9yIGNhcnJpZXIpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYm9hcmQucGxhY2VTaGlwKHJvdywgY29sdW1uLCBsZW5ndGgsIFwiZGVzdHJveWVyXCIsIG9yaWVudGF0aW9uKTtcbn1cbmV4cG9ydCB7IHBsYWNlRGVzdHJveWVyIH07XG4iLCJpbXBvcnQgeyBnYW1lYm9hcmRGYWN0b3J5IH0gZnJvbSBcIi4uL2dhbWVib2FyZEZhY3RvcnlcIjtcblxuZnVuY3Rpb24gcGxhY2VQYXRyb2xib2F0KGJvYXJkKSB7XG4gIGxldCBsZW5ndGggPSAyO1xuICBsZXQgaXNGb3VuZCA9IGZhbHNlO1xuICBsZXQgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICBsZXQgY29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICBsZXQgb3JpZW50YXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcblxuICB3aGlsZSAoaXNGb3VuZCA9PSBmYWxzZSkge1xuICAgIG9yaWVudGF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBpc0ZvdW5kID0gdHJ1ZTtcblxuICAgIC8vaG9yaXpvbnRhbFxuICAgIGlmIChvcmllbnRhdGlvbiA9PSAwKSB7XG4gICAgICBjb2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyb3cgPT0gMCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID09IDEpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPj0gMiAmJiByb3cgPD0gNykge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA9PSA4KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA9PSA5KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sdW1uID09IDApIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uICsgMSArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA9PSAxKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiArIDEgKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID49IDIgJiYgY29sdW1uIDwgOCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gKyAxICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA9PSA4KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvL2NvbHVtbiB3aWxsIG5ldmVyIGJlIGdyZWF0ZXIgdGhhbiBsZW5ndGggKDUgZm9yIGNhcnJpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvcmllbnRhdGlvbiA9PSAxKSB7XG4gICAgICByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICAgIGNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2x1bW4gPT0gMCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uICsgMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID09IDEpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiArIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPj0gMiAmJiBjb2x1bW4gPD0gNykge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uICsgMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA9PSA4KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gKyAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA9PSA5KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocm93ID09IDApIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIDEgKyBpXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA9PSAxKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpICsgMV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID49IDIgJiYgcm93IDwgOCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaSArIDFdW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA9PSA4KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvL3JvdyB3aWxsIG5ldmVyIGJlIGdyZWF0ZXIgdGhhbiBsZW5ndGggKDUgZm9yIGNhcnJpZXIpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYm9hcmQucGxhY2VTaGlwKHJvdywgY29sdW1uLCBsZW5ndGgsIFwicGF0cm9sYm9hdFwiLCBvcmllbnRhdGlvbik7XG59XG5leHBvcnQgeyBwbGFjZVBhdHJvbGJvYXQgfTtcbiIsImltcG9ydCB7IGdhbWVib2FyZEZhY3RvcnkgfSBmcm9tIFwiLi4vZ2FtZWJvYXJkRmFjdG9yeVwiO1xuXG5mdW5jdGlvbiBwbGFjZVN1Ym1hcmluZShib2FyZCkge1xuICBsZXQgbGVuZ3RoID0gMztcbiAgbGV0IGlzRm91bmQgPSBmYWxzZTtcbiAgbGV0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgbGV0IGNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgbGV0IG9yaWVudGF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG5cbiAgd2hpbGUgKGlzRm91bmQgPT0gZmFsc2UpIHtcbiAgICBvcmllbnRhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgIHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBjb2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgaXNGb3VuZCA9IHRydWU7XG5cbiAgICAvL2hvcml6b250YWxcbiAgICBpZiAob3JpZW50YXRpb24gPT0gMCkge1xuICAgICAgY29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocm93ID09IDApIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA9PSAxKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID49IDIgJiYgcm93IDw9IDcpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPT0gOCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPT0gOSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbHVtbiA9PSAwKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiArIDEgKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPT0gMSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gKyAxICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA+PSAyICYmIGNvbHVtbiA8IDcpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uICsgMSArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPT0gNykge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy9jb2x1bW4gd2lsbCBuZXZlciBiZSBncmVhdGVyIHRoYW4gbGVuZ3RoICg1IGZvciBjYXJyaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAob3JpZW50YXRpb24gPT0gMSkge1xuICAgICAgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOCk7XG4gICAgICBjb2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sdW1uID09IDApIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiArIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA9PSAxKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gKyAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID49IDIgJiYgY29sdW1uIDw9IDcpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiArIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPT0gOCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uICsgMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPT0gOSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdyA9PSAwKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyAxICsgaV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPT0gMSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaSArIDFdW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA+PSAyICYmIHJvdyA8IDcpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGkgKyAxXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPT0gNykge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy9yb3cgd2lsbCBuZXZlciBiZSBncmVhdGVyIHRoYW4gbGVuZ3RoICg1IGZvciBjYXJyaWVyKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zb2xlLmxvZyhyb3csIGNvbHVtbiwgb3JpZW50YXRpb24sIFwic3VibWFyaW5lXCIpO1xuICBib2FyZC5wbGFjZVNoaXAocm93LCBjb2x1bW4sIGxlbmd0aCwgXCJzdWJtYXJpbmVcIiwgb3JpZW50YXRpb24pO1xufVxuZXhwb3J0IHsgcGxhY2VTdWJtYXJpbmUgfTtcbiIsImltcG9ydCB7IGdhbWVib2FyZEZhY3RvcnkgfSBmcm9tIFwiLi4vZ2FtZWJvYXJkRmFjdG9yeVwiO1xuaW1wb3J0IHsgc29sdmVNaXNzZXMgfSBmcm9tIFwiLi4vc29sdmVNaXNzZXNcIjtcblxuLy8oYm9hcmQsIHJvdywgY29sdW1uKVxuZnVuY3Rpb24gcmFuZG9tQXR0YWNrKGJvYXJkKSB7XG4gIGxldCByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIGxldCBjb2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgaWYgKGlzTGVnYWwocm93LCBjb2x1bW4pKSB7XG4gICAgYm9hcmQucmVjZWl2ZUF0dGFjayhyb3csIGNvbHVtbik7XG4gICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGlmIChib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbl0uaXNTdW5rKCkgPT0gdHJ1ZSkge1xuICAgICAgICBzb2x2ZU1pc3Nlcyhib2FyZCwgcm93LCBjb2x1bW4pO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByYW5kb21BdHRhY2soYm9hcmQpO1xuICB9XG5cbiAgLy9lbHNlLCByZXBlYXQgZnVuY3Rpb25cblxuICBmdW5jdGlvbiBpc0xlZ2FsKHJvdywgY29sdW1uKSB7XG4gICAgbGV0IGlzTGVnYWwgPSB0cnVlO1xuICAgIGlmIChib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbl0gPT0gXCJtaXNzXCIpIHtcbiAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGlmIChcbiAgICAgICAgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW5dLnNoaXBMb2NhdGlvbltcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeShbcm93LCBjb2x1bW5dKVxuICAgICAgICBdID09IHRydWVcbiAgICAgICkge1xuICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpc0xlZ2FsO1xuICB9XG59XG5leHBvcnQgeyByYW5kb21BdHRhY2sgfTtcbiIsImltcG9ydCB7IHNvbHZlTWlzc2VzIH0gZnJvbSBcIi4uL3NvbHZlTWlzc2VzXCI7XG5pbXBvcnQgeyByYW5kb21BdHRhY2sgfSBmcm9tIFwiLi9yYW5kb21BdHRhY2tcIjtcblxubGV0IGlzT3JpZW50aW5nID0gZmFsc2U7XG5sZXQgaW5pdGlhbENoZWNrID0gZmFsc2U7XG5cbi8vIGxldCBmb3VuZENvb3JkaW5hdGUgPSB7XG4vLyAgIHJvdzogMCxcbi8vICAgY29sdW1uOiAwLFxuLy8gICBpc0xlZnQ6IHRydWUsXG4vLyAgIGlzVXA6IHRydWUsXG4vLyAgIGlzUmlnaHQ6IHRydWUsXG4vLyAgIGlzRG93bjogdHJ1ZSxcbi8vICAgbGVmdENvb3JkaW5hdGVzOiBbXSxcbi8vICAgcmlnaHRDb29yZGluYXRlczogW10sXG4vLyAgIHVwQ29vcmRpbmF0ZXM6IFtdLFxuLy8gICBkb3duQ29vcmRpbmF0ZXM6IFtdLFxuLy8gfTtcblxuZnVuY3Rpb24gZm91bmRDb29yZGluYXRlRmFjdG9yeShyLCBjKSB7XG4gIGxldCByb3cgPSByO1xuICBsZXQgY29sdW1uID0gYztcbiAgbGV0IGlzTGVmdCA9IHRydWU7XG4gIGxldCBpc1VwID0gdHJ1ZTtcbiAgbGV0IGlzUmlnaHQgPSB0cnVlO1xuICBsZXQgaXNEb3duID0gdHJ1ZTtcbiAgbGV0IG5leHRSb3cgPSByO1xuICBsZXQgbmV4dENvbHVtbiA9IGM7XG4gIGxldCBsZWZ0Q29vcmRpbmF0ZXMgPSBbXTtcbiAgbGV0IHJpZ2h0Q29vcmRpbmF0ZXMgPSBbXTtcbiAgbGV0IHVwQ29vcmRpbmF0ZXMgPSBbXTtcbiAgbGV0IGRvd25Db29yZGluYXRlcyA9IFtdO1xuICByZXR1cm4ge1xuICAgIHJvdyxcbiAgICBjb2x1bW4sXG4gICAgaXNMZWZ0LFxuICAgIGlzVXAsXG4gICAgaXNSaWdodCxcbiAgICBpc0Rvd24sXG4gICAgbGVmdENvb3JkaW5hdGVzLFxuICAgIHJpZ2h0Q29vcmRpbmF0ZXMsXG4gICAgdXBDb29yZGluYXRlcyxcbiAgICBkb3duQ29vcmRpbmF0ZXMsXG4gICAgbmV4dFJvdyxcbiAgICBuZXh0Q29sdW1uLFxuICB9O1xufVxubGV0IGZvdW5kQ29vcmRpbmF0ZTtcblxuZnVuY3Rpb24gc2hpcEh1bnQoYm9hcmQpIHtcbiAgaWYgKCFpc09yaWVudGluZykge1xuICAgIGNvbnNvbGUubG9nKFwicmFuZG9tbHkgYXR0YWNraW5nIHRvIGdldCBpbml0aWFsIGhpdFwiKTtcbiAgICBsZXQgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGxldCBjb2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgZnVuY3Rpb24gaXNMZWdhbChyb3csIGNvbHVtbikge1xuICAgICAgbGV0IGlzTGVnYWwgPSB0cnVlO1xuICAgICAgaWYgKGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uXSA9PSBcIm1pc3NcIikge1xuICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uXS5zaGlwTG9jYXRpb25bXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShbcm93LCBjb2x1bW5dKVxuICAgICAgICAgIF0gPT0gdHJ1ZVxuICAgICAgICApIHtcbiAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBpc0xlZ2FsO1xuICAgIH1cblxuICAgIGlmICghaXNMZWdhbChyb3csIGNvbHVtbikpIHtcbiAgICAgIC8vaWYgdGhlIG1vdmUgaXNuJ3QgbGVnYWwsIGdldCBuZXcgY29vcmRpbmF0ZXNcbiAgICAgIHNoaXBIdW50KGJvYXJkKTtcbiAgICB9XG4gICAgaWYgKGlzTGVnYWwocm93LCBjb2x1bW4pKSB7XG4gICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBmb3VuZENvb3JkaW5hdGUgPSBmb3VuZENvb3JkaW5hdGVGYWN0b3J5KHJvdywgY29sdW1uKTtcbiAgICAgICAgaXNPcmllbnRpbmcgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZyhcInNoaXBIdW50IGZvdW5kIGFuIG9iamVjdFwiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJzaGlwSHVudCByZWNvcmRlZCBvYmplY3QgY29vcmRpbmF0ZSBhdCBcIik7XG4gICAgICAgIGNvbnNvbGUudGFibGUoZm91bmRDb29yZGluYXRlKTtcbiAgICAgICAgYm9hcmQucmVjZWl2ZUF0dGFjayhyb3csIGNvbHVtbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBib2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sdW1uKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJzaGlwSHVudCBhdHRhY2tlZCBhbiBlbXB0eSBzcG90IGF0XCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhyb3csIGNvbHVtbik7XG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbl0pO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc09yaWVudGluZykge1xuICAgIGNvbnNvbGUubG9nKFwiaGF2ZSBpbml0aWFsIGhpdDsgc2VhcmNoaW5nIG1vcmUgY2xvc2VseVwiKTtcbiAgICAvL29mZiB0aGUgYmF0IGNoZWNrIHRvIHNlZSB3aGF0IGRpcmVjdGlvbnMgd2UgY2FuIGVsaW1pbmF0ZSAoYWRkZWQgYmVuZWZpdCBvZiBjaGVja2luZyBzdWJzZXF1ZW50IG1pc3NlcylcbiAgICAvL3JvdyBjaGVja3NcbiAgICBpZiAoIWluaXRpYWxDaGVjaykge1xuICAgICAgaWYgKGZvdW5kQ29vcmRpbmF0ZS5yb3cgPT0gMCkge1xuICAgICAgICBmb3VuZENvb3JkaW5hdGUuaXNVcCA9IGZhbHNlO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgYm9hcmQuY29vcmRpbmF0ZXNbZm91bmRDb29yZGluYXRlLnJvdyArIDFdW2ZvdW5kQ29vcmRpbmF0ZS5jb2x1bW5dID09XG4gICAgICAgICAgXCJtaXNzXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJmb3VuZENvb3JkaW5hdGUuaXNEb3duIG1hcmtlZCBmYWxzZVwiKTtcbiAgICAgICAgICBmb3VuZENvb3JkaW5hdGUuaXNEb3duID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChmb3VuZENvb3JkaW5hdGUucm93ID09IDkpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJmb3VuZENvb3JkaW5hdGUuaXNEb3duIG1hcmtlZCBmYWxzZVwiKTtcbiAgICAgICAgZm91bmRDb29yZGluYXRlLmlzRG93biA9IGZhbHNlO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgYm9hcmQuY29vcmRpbmF0ZXNbZm91bmRDb29yZGluYXRlLnJvdyAtIDFdW2ZvdW5kQ29vcmRpbmF0ZS5jb2x1bW5dID09XG4gICAgICAgICAgXCJtaXNzXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgZm91bmRDb29yZGluYXRlLmlzVXAgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGZvdW5kQ29vcmRpbmF0ZS5yb3cgPiAwICYmIGZvdW5kQ29vcmRpbmF0ZS5yb3cgPCA5KSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBib2FyZC5jb29yZGluYXRlc1tmb3VuZENvb3JkaW5hdGUucm93ICsgMV1bZm91bmRDb29yZGluYXRlLmNvbHVtbl0gPT1cbiAgICAgICAgICBcIm1pc3NcIlxuICAgICAgICApIHtcbiAgICAgICAgICBmb3VuZENvb3JkaW5hdGUuaXNVcCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChcbiAgICAgICAgICBib2FyZC5jb29yZGluYXRlc1tmb3VuZENvb3JkaW5hdGUucm93IC0gMV1bZm91bmRDb29yZGluYXRlLmNvbHVtbl0gPT1cbiAgICAgICAgICBcIm1pc3NcIlxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImZvdW5kQ29vcmRpbmF0ZS5pc0Rvd24gbWFya2VkIGZhbHNlXCIpO1xuICAgICAgICAgIGZvdW5kQ29vcmRpbmF0ZS5pc0Rvd24gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy9jb2x1bW4gY2hlY2tzXG4gICAgICBpZiAoZm91bmRDb29yZGluYXRlLmNvbHVtbiA9PSAwKSB7XG4gICAgICAgIGZvdW5kQ29vcmRpbmF0ZS5pc0xlZnQgPSBmYWxzZTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGJvYXJkLmNvb3JkaW5hdGVzW2ZvdW5kQ29vcmRpbmF0ZS5yb3ddW2ZvdW5kQ29vcmRpbmF0ZS5jb2x1bW4gKyAxXSA9PVxuICAgICAgICAgIFwibWlzc1wiXG4gICAgICAgICkge1xuICAgICAgICAgIGZvdW5kQ29vcmRpbmF0ZS5pc1JpZ2h0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChmb3VuZENvb3JkaW5hdGUuY29sdW1uID09IDkpIHtcbiAgICAgICAgZm91bmRDb29yZGluYXRlLmlzUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGJvYXJkLmNvb3JkaW5hdGVzW2ZvdW5kQ29vcmRpbmF0ZS5yb3ddW2ZvdW5kQ29vcmRpbmF0ZS5jb2x1bW4gLSAxXSA9PVxuICAgICAgICAgIFwibWlzc1wiXG4gICAgICAgICkge1xuICAgICAgICAgIGZvdW5kQ29vcmRpbmF0ZS5pc0xlZnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGZvdW5kQ29vcmRpbmF0ZS5jb2x1bW4gPiAwICYmIGZvdW5kQ29vcmRpbmF0ZS5jb2x1bW4gPCA5KSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBib2FyZC5jb29yZGluYXRlc1tmb3VuZENvb3JkaW5hdGUucm93XVtmb3VuZENvb3JkaW5hdGUuY29sdW1uIC0gMV0gPT1cbiAgICAgICAgICBcIm1pc3NcIlxuICAgICAgICApIHtcbiAgICAgICAgICBmb3VuZENvb3JkaW5hdGUuaXNMZWZ0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgIGJvYXJkLmNvb3JkaW5hdGVzW2ZvdW5kQ29vcmRpbmF0ZS5yb3ddW2ZvdW5kQ29vcmRpbmF0ZS5jb2x1bW4gKyAxXSA9PVxuICAgICAgICAgIFwibWlzc1wiXG4gICAgICAgICkge1xuICAgICAgICAgIGZvdW5kQ29vcmRpbmF0ZS5pc1JpZ2h0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaW5pdGlhbENoZWNrID0gdHJ1ZTtcbiAgICAvL2ZpbmlzaGVkIGluaXRpYWwgY2hlY2tzXG4gICAgY29uc29sZS50YWJsZShmb3VuZENvb3JkaW5hdGUpO1xuICAgIGlmIChmb3VuZENvb3JkaW5hdGUuaXNVcCA9PSB0cnVlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImVudGVyZWQgaXNVcCA9PSB0cnVlIGxvZ2ljXCIpO1xuICAgICAgZm91bmRDb29yZGluYXRlLm5leHRSb3ctLTtcbiAgICAgIGJvYXJkLnJlY2VpdmVBdHRhY2soZm91bmRDb29yZGluYXRlLm5leHRSb3csIGZvdW5kQ29vcmRpbmF0ZS5jb2x1bW4pO1xuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbZm91bmRDb29yZGluYXRlLm5leHRSb3ddW1xuICAgICAgICAgIGZvdW5kQ29vcmRpbmF0ZS5jb2x1bW5cbiAgICAgICAgXSA9PT0gXCJvYmplY3RcIlxuICAgICAgKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBib2FyZC5jb29yZGluYXRlc1tmb3VuZENvb3JkaW5hdGUubmV4dFJvd11bXG4gICAgICAgICAgICBmb3VuZENvb3JkaW5hdGUuY29sdW1uXG4gICAgICAgICAgXS5pc1N1bmsoKVxuICAgICAgICApIHtcbiAgICAgICAgICBzb2x2ZU1pc3Nlcyhib2FyZCwgZm91bmRDb29yZGluYXRlLm5leHRSb3csIGZvdW5kQ29vcmRpbmF0ZS5jb2x1bW4pO1xuICAgICAgICAgIHJlc2V0SHVudCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tmb3VuZENvb3JkaW5hdGUubmV4dFJvd11bXG4gICAgICAgICAgZm91bmRDb29yZGluYXRlLmNvbHVtblxuICAgICAgICBdICE9PSBcIm9iamVjdFwiXG4gICAgICApIHtcbiAgICAgICAgZm91bmRDb29yZGluYXRlLmlzVXAgPSBmYWxzZTtcbiAgICAgICAgZm91bmRDb29yZGluYXRlLm5leHRSb3cgPSBmb3VuZENvb3JkaW5hdGUucm93O1xuICAgICAgICBjb25zb2xlLnRhYmxlKGZvdW5kQ29vcmRpbmF0ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChmb3VuZENvb3JkaW5hdGUuaXNEb3duID09IHRydWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZW50ZXJlZCBpc0Rvd24gPT0gdHJ1ZSBsb2dpY1wiKTtcbiAgICAgIGZvdW5kQ29vcmRpbmF0ZS5uZXh0Um93Kys7XG4gICAgICBib2FyZC5yZWNlaXZlQXR0YWNrKGZvdW5kQ29vcmRpbmF0ZS5uZXh0Um93LCBmb3VuZENvb3JkaW5hdGUuY29sdW1uKTtcbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW2ZvdW5kQ29vcmRpbmF0ZS5uZXh0Um93XVtcbiAgICAgICAgICBmb3VuZENvb3JkaW5hdGUuY29sdW1uXG4gICAgICAgIF0gPT09IFwib2JqZWN0XCJcbiAgICAgICkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgYm9hcmQuY29vcmRpbmF0ZXNbZm91bmRDb29yZGluYXRlLm5leHRSb3ddW1xuICAgICAgICAgICAgZm91bmRDb29yZGluYXRlLmNvbHVtblxuICAgICAgICAgIF0uaXNTdW5rKClcbiAgICAgICAgKSB7XG4gICAgICAgICAgc29sdmVNaXNzZXMoYm9hcmQsIGZvdW5kQ29vcmRpbmF0ZS5uZXh0Um93LCBmb3VuZENvb3JkaW5hdGUuY29sdW1uKTtcbiAgICAgICAgICByZXNldEh1bnQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbZm91bmRDb29yZGluYXRlLm5leHRSb3ddW1xuICAgICAgICAgIGZvdW5kQ29vcmRpbmF0ZS5jb2x1bW5cbiAgICAgICAgXSAhPT0gXCJvYmplY3RcIlxuICAgICAgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZm91bmRDb29yZGluYXRlLmlzRG93biBtYXJrZWQgZmFsc2VcIik7XG4gICAgICAgIGZvdW5kQ29vcmRpbmF0ZS5pc0Rvd24gPSBmYWxzZTtcbiAgICAgICAgZm91bmRDb29yZGluYXRlLm5leHRSb3cgPSBmb3VuZENvb3JkaW5hdGUucm93O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZm91bmRDb29yZGluYXRlLmlzUmlnaHQgPT0gdHJ1ZSkge1xuICAgICAgY29uc29sZS5sb2coXCJlbnRlcmVkIGlzUmlnaHQgPT0gdHJ1ZSBsb2dpY1wiKTtcbiAgICAgIGZvdW5kQ29vcmRpbmF0ZS5uZXh0Q29sdW1uKys7XG4gICAgICBib2FyZC5yZWNlaXZlQXR0YWNrKGZvdW5kQ29vcmRpbmF0ZS5yb3csIGZvdW5kQ29vcmRpbmF0ZS5uZXh0Q29sdW1uKTtcbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW2ZvdW5kQ29vcmRpbmF0ZS5yb3ddW1xuICAgICAgICAgIGZvdW5kQ29vcmRpbmF0ZS5uZXh0Q29sdW1uXG4gICAgICAgIF0gPT09IFwib2JqZWN0XCJcbiAgICAgICkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgYm9hcmQuY29vcmRpbmF0ZXNbZm91bmRDb29yZGluYXRlLnJvd11bXG4gICAgICAgICAgICBmb3VuZENvb3JkaW5hdGUubmV4dENvbHVtblxuICAgICAgICAgIF0uaXNTdW5rKClcbiAgICAgICAgKSB7XG4gICAgICAgICAgc29sdmVNaXNzZXMoYm9hcmQsIGZvdW5kQ29vcmRpbmF0ZS5yb3csIGZvdW5kQ29vcmRpbmF0ZS5uZXh0Q29sdW1uKTtcbiAgICAgICAgICByZXNldEh1bnQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbZm91bmRDb29yZGluYXRlLnJvd11bXG4gICAgICAgICAgZm91bmRDb29yZGluYXRlLm5leHRDb2x1bW5cbiAgICAgICAgXSAhPT0gXCJvYmplY3RcIlxuICAgICAgKSB7XG4gICAgICAgIGZvdW5kQ29vcmRpbmF0ZS5pc1JpZ2h0ID0gZmFsc2U7XG4gICAgICAgIGZvdW5kQ29vcmRpbmF0ZS5uZXh0Q29sdW1uID0gZm91bmRDb29yZGluYXRlLmNvbHVtbjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZvdW5kQ29vcmRpbmF0ZS5pc0xlZnQgPT0gdHJ1ZSkge1xuICAgICAgY29uc29sZS5sb2coXCJlbnRlcmVkIGlzTGVmdCA9PSB0cnVlIGxvZ2ljXCIpO1xuICAgICAgZm91bmRDb29yZGluYXRlLm5leHRDb2x1bW4tLTtcbiAgICAgIGJvYXJkLnJlY2VpdmVBdHRhY2soZm91bmRDb29yZGluYXRlLnJvdywgZm91bmRDb29yZGluYXRlLm5leHRDb2x1bW4pO1xuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbZm91bmRDb29yZGluYXRlLnJvd11bXG4gICAgICAgICAgZm91bmRDb29yZGluYXRlLm5leHRDb2x1bW5cbiAgICAgICAgXSA9PT0gXCJvYmplY3RcIlxuICAgICAgKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBib2FyZC5jb29yZGluYXRlc1tmb3VuZENvb3JkaW5hdGUucm93XVtcbiAgICAgICAgICAgIGZvdW5kQ29vcmRpbmF0ZS5uZXh0Q29sdW1uXG4gICAgICAgICAgXS5pc1N1bmsoKVxuICAgICAgICApIHtcbiAgICAgICAgICBzb2x2ZU1pc3Nlcyhib2FyZCwgZm91bmRDb29yZGluYXRlLnJvdywgZm91bmRDb29yZGluYXRlLm5leHRDb2x1bW4pO1xuICAgICAgICAgIHJlc2V0SHVudCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tmb3VuZENvb3JkaW5hdGUucm93XVtcbiAgICAgICAgICBmb3VuZENvb3JkaW5hdGUubmV4dENvbHVtblxuICAgICAgICBdICE9PSBcIm9iamVjdFwiXG4gICAgICApIHtcbiAgICAgICAgZm91bmRDb29yZGluYXRlLmlzTGVmdCA9IGZhbHNlO1xuICAgICAgICBmb3VuZENvb3JkaW5hdGUubmV4dENvbHVtbiA9IGZvdW5kQ29vcmRpbmF0ZS5jb2x1bW47XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlc2V0SHVudCgpIHtcbiAgaXNPcmllbnRpbmcgPSBmYWxzZTtcbiAgaW5pdGlhbENoZWNrID0gZmFsc2U7XG59XG5cbi8vIGZ1bmN0aW9uIHBvcHVsYXRlQ29vcmRpbmF0ZXMocm93LCBjb2x1bW4pIHtcbi8vICAgaWYgKHJvdyA9PSAwKSB7XG4vLyAgICAgaWYgKGNvbHVtbiA9PSAwKSB7XG4vLyAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvdW5kQ29vcmRpbmF0ZS5sZW5ndGg7IGkrKylcbi8vICAgICAgICAgZm91bmRDb29yZGluYXRlLnJpZ2h0Q29vcmRpbmF0ZXMucHVzaChbcm93LCBjb2x1bW4gKyBpXSk7XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbmV4cG9ydCB7IHNoaXBIdW50IH07XG4iLCJsZXQgY3VycmVudFNoaXAgPSBcImNhcnJpZXJcIjtcbmxldCBvcmllbnRhdGlvbiA9IDA7XG5sZXQgY2Fycmllck9yaWVudGF0aW9uID0gMDtcbmxldCBiYXR0bGVzaGlwT3JpZW50YXRpb24gPSAwO1xubGV0IGRlc3Ryb3llck9yaWVudGF0aW9uID0gMDtcbmxldCBzdWJtYXJpbmVPcmllbnRhdGlvbiA9IDA7XG5sZXQgcGF0cm9sYm9hdE9yaWVudGF0aW9uID0gMDtcbmxldCBwbGFjZUNvdW50ID0gMDtcbmxldCBpc0FsbFBsYWNlZCA9IGZhbHNlO1xuXG5mdW5jdGlvbiByZXNldEFsbCgpIHtcbiAgY2Fycmllck9yaWVudGF0aW9uID0gMDtcbiAgYmF0dGxlc2hpcE9yaWVudGF0aW9uID0gMDtcbiAgZGVzdHJveWVyT3JpZW50YXRpb24gPSAwO1xuICBzdWJtYXJpbmVPcmllbnRhdGlvbiA9IDA7XG4gIHBhdHJvbGJvYXRPcmllbnRhdGlvbiA9IDA7XG4gIHBsYWNlQ291bnQgPSAwO1xuICBpc0FsbFBsYWNlZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBpbmNyZWFzZVBsYWNlQ291bnQoKSB7XG4gIHBsYWNlQ291bnQrKztcbn1cblxuZnVuY3Rpb24gZ2V0SXNBbGxQbGFjZWQoKSB7XG4gIGlmIChwbGFjZUNvdW50ID09IDUpIHtcbiAgICBpc0FsbFBsYWNlZCA9IHRydWU7XG4gICAgcmV0dXJuIGlzQWxsUGxhY2VkO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc2V0UGxhY2VtZW50KCkge1xuICBwbGFjZUNvdW50ID0gMDtcbiAgaXNBbGxQbGFjZWQgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5UGxhY2luZ1NoaXAoc2hpcCkge1xuICBjdXJyZW50U2hpcCA9IHNoaXA7XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRseVBsYWNpbmdTaGlwKCkge1xuICByZXR1cm4gY3VycmVudFNoaXA7XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRseVBsYWNpbmdMZW5ndGgoKSB7XG4gIGlmIChjdXJyZW50U2hpcCA9PSBcImNhcnJpZXJcIikge1xuICAgIHJldHVybiA1O1xuICB9IGVsc2UgaWYgKGN1cnJlbnRTaGlwID09IFwiYmF0dGxlc2hpcFwiKSB7XG4gICAgcmV0dXJuIDQ7XG4gIH0gZWxzZSBpZiAoY3VycmVudFNoaXAgPT0gXCJkZXN0cm95ZXJcIikge1xuICAgIHJldHVybiAzO1xuICB9IGVsc2UgaWYgKGN1cnJlbnRTaGlwID09IFwic3VibWFyaW5lXCIpIHtcbiAgICByZXR1cm4gMztcbiAgfSBlbHNlIGlmIChjdXJyZW50U2hpcCA9PSBcInBhdHJvbGJvYXRcIikge1xuICAgIHJldHVybiAyO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRseVBsYWNpbmdPcmllbnRhdGlvbihzaGlwKSB7XG4gIGlmIChzaGlwID09IFwiY2FycmllclwiKSB7XG4gICAgcmV0dXJuIGNhcnJpZXJPcmllbnRhdGlvbjtcbiAgfVxuICBpZiAoc2hpcCA9PSBcImJhdHRsZXNoaXBcIikge1xuICAgIHJldHVybiBiYXR0bGVzaGlwT3JpZW50YXRpb247XG4gIH1cbiAgaWYgKHNoaXAgPT0gXCJkZXN0cm95ZXJcIikge1xuICAgIHJldHVybiBkZXN0cm95ZXJPcmllbnRhdGlvbjtcbiAgfVxuICBpZiAoc2hpcCA9PSBcInN1Ym1hcmluZVwiKSB7XG4gICAgcmV0dXJuIHN1Ym1hcmluZU9yaWVudGF0aW9uO1xuICB9XG4gIGlmIChzaGlwID09IFwicGF0cm9sYm9hdFwiKSB7XG4gICAgcmV0dXJuIHBhdHJvbGJvYXRPcmllbnRhdGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRDYXJyaWVyT3JpZW50YXRpb24oKSB7XG4gIHJldHVybiBjYXJyaWVyT3JpZW50YXRpb247XG59XG5cbmZ1bmN0aW9uIHNldENhcnJpZXJPcmllbnRhdGlvbihudW0pIHtcbiAgY2Fycmllck9yaWVudGF0aW9uID0gbnVtO1xufVxuXG5mdW5jdGlvbiBzZXRCYXR0bGVzaGlwT3JpZW50YXRpb24obnVtKSB7XG4gIGJhdHRsZXNoaXBPcmllbnRhdGlvbiA9IG51bTtcbn1cblxuZnVuY3Rpb24gZ2V0QmF0dGxlc2hpcE9yaWVudGF0aW9uKCkge1xuICByZXR1cm4gYmF0dGxlc2hpcE9yaWVudGF0aW9uO1xufVxuXG5mdW5jdGlvbiBzZXREZXN0cm95ZXJPcmllbnRhdGlvbihudW0pIHtcbiAgZGVzdHJveWVyT3JpZW50YXRpb24gPSBudW07XG59XG5cbmZ1bmN0aW9uIGdldERlc3Ryb3llck9yaWVudGF0aW9uKCkge1xuICByZXR1cm4gZGVzdHJveWVyT3JpZW50YXRpb247XG59XG5cbmZ1bmN0aW9uIHNldFN1Ym1hcmluZU9yaWVudGF0aW9uKG51bSkge1xuICBzdWJtYXJpbmVPcmllbnRhdGlvbiA9IG51bTtcbn1cblxuZnVuY3Rpb24gZ2V0U3VibWFyaW5lT3JpZW50YXRpb24oKSB7XG4gIHJldHVybiBzdWJtYXJpbmVPcmllbnRhdGlvbjtcbn1cblxuZnVuY3Rpb24gc2V0UGF0cm9sYm9hdE9yaWVudGF0aW9uKG51bSkge1xuICBwYXRyb2xib2F0T3JpZW50YXRpb24gPSBudW07XG59XG5cbmZ1bmN0aW9uIGdldFBhdHJvbGJvYXRPcmllbnRhdGlvbigpIHtcbiAgcmV0dXJuIHBhdHJvbGJvYXRPcmllbnRhdGlvbjtcbn1cblxuZXhwb3J0IHtcbiAgc2V0Q3VycmVudGx5UGxhY2luZ1NoaXAsXG4gIGdldEN1cnJlbnRseVBsYWNpbmdTaGlwLFxuICBnZXRDdXJyZW50bHlQbGFjaW5nT3JpZW50YXRpb24sXG4gIGdldEN1cnJlbnRseVBsYWNpbmdMZW5ndGgsXG4gIHNldENhcnJpZXJPcmllbnRhdGlvbixcbiAgZ2V0Q2Fycmllck9yaWVudGF0aW9uLFxuICBzZXRCYXR0bGVzaGlwT3JpZW50YXRpb24sXG4gIGdldEJhdHRsZXNoaXBPcmllbnRhdGlvbixcbiAgc2V0RGVzdHJveWVyT3JpZW50YXRpb24sXG4gIGdldERlc3Ryb3llck9yaWVudGF0aW9uLFxuICBzZXRTdWJtYXJpbmVPcmllbnRhdGlvbixcbiAgZ2V0U3VibWFyaW5lT3JpZW50YXRpb24sXG4gIHNldFBhdHJvbGJvYXRPcmllbnRhdGlvbixcbiAgZ2V0UGF0cm9sYm9hdE9yaWVudGF0aW9uLFxuICBpbmNyZWFzZVBsYWNlQ291bnQsXG4gIGdldElzQWxsUGxhY2VkLFxuICByZXNldFBsYWNlbWVudCxcbiAgcmVzZXRBbGwsXG59O1xuIiwiaW1wb3J0IHsgcmFuZG9tQXR0YWNrIH0gZnJvbSBcIi4vY29tcHV0ZXJGbnMvcmFuZG9tQXR0YWNrXCI7XG5pbXBvcnQge1xuICBnZXRDdXJyZW50bHlQbGFjaW5nTGVuZ3RoLFxuICBnZXRDdXJyZW50bHlQbGFjaW5nT3JpZW50YXRpb24sXG4gIGdldEN1cnJlbnRseVBsYWNpbmdTaGlwLFxuICBnZXRJc0FsbFBsYWNlZCxcbiAgaW5jcmVhc2VQbGFjZUNvdW50LFxuICByZXNldEFsbCxcbn0gZnJvbSBcIi4vY3VycmVudGx5UGxhY2luZ1NoaXBcIjtcbmltcG9ydCB7IGdhbWVib2FyZEZhY3RvcnkgfSBmcm9tIFwiLi9nYW1lYm9hcmRGYWN0b3J5XCI7XG5pbXBvcnQgeyBnZXREaWZmaWN1bHR5LCBzZXREaWZmaWN1bHR5IH0gZnJvbSBcIi4vZ2FtZURpZmZpY3VsdHlcIjtcbmltcG9ydCB7IGlzTGVnYWxQbGFjZW1lbnQgfSBmcm9tIFwiLi9pc0xlZ2FsUGxhY2VtZW50XCI7XG5pbXBvcnQgeyBidWlsZEhhcmJvciB9IGZyb20gXCIuL2J1aWxkSGFyYm9yXCI7XG5pbXBvcnQgeyBnYW1lTG9vcCB9IGZyb20gXCIuL2dhbWVMb29wXCI7XG5pbXBvcnQgeyBzaGlwSHVudCB9IGZyb20gXCIuL2NvbXB1dGVyRm5zL3NoaXBIdW50XCI7XG5pbXBvcnQgeyBidWlsZEJ1dHRvbkJveCB9IGZyb20gXCIuL2J1aWxkQnV0dG9uQm94XCI7XG5pbXBvcnQgeyBzb2x2ZU1pc3NlcyB9IGZyb20gXCIuL3NvbHZlTWlzc2VzXCI7XG5pbXBvcnQgeyBpc0xlZ2FsTW92ZSB9IGZyb20gXCIuL2lzTGVnYWxNb3ZlXCI7XG5cbmltcG9ydCBJY29uIGZyb20gXCIuL2ljb25zL3RhcmdldC5zdmdcIjtcblxuY29uc3QgdGFyZ2V0ID0gbmV3IEltYWdlKCk7XG50YXJnZXQuc3JjID0gSWNvbjtcblxuZnVuY3Rpb24gZGlzcGxheUJvYXJkKHBsYXllciwgY29tcHV0ZXIpIHtcbiAgbGV0IGlzU2V0dGluZ1VwID0gdHJ1ZTtcbiAgY3JlYXRlUGxheWVyQm9hcmQoKTtcbiAgdXBkYXRlUGxheWVyQm9hcmQocGxheWVyKTtcblxuICBmdW5jdGlvbiBjcmVhdGVQbGF5ZXJCb2FyZCgpIHtcbiAgICBsZXQgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvYXJkT25lXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICByb3cuaWQgPSBcInJvd1wiICsgaTtcbiAgICAgIHJvdy5jbGFzc05hbWUgPSBcInJvd1wiO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGxldCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBib3guaWQgPSBcInBsYXllcmJveFwiICsgaSArIFwiXCIgKyBqO1xuICAgICAgICBib3guY2xhc3NOYW1lID0gXCJib3hcIjtcbiAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgLy9kcmFnZ2luZyBpbnRvIGJveGVzIGRpc3BsYXlcbiAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGxldCBib3hBcnIgPSBbaSwgal07XG4gICAgICAgICAgbGV0IGJveFJvdyA9IGJveEFyclswXTtcbiAgICAgICAgICBsZXQgYm94Q29sdW1uID0gYm94QXJyWzFdO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiBwbGF5ZXIuY29vcmRpbmF0ZXNbaV1bal0gIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgaXNMZWdhbFBsYWNlbWVudChcbiAgICAgICAgICAgICAgICBib3hSb3csXG4gICAgICAgICAgICAgICAgYm94Q29sdW1uLFxuICAgICAgICAgICAgICAgIGdldEN1cnJlbnRseVBsYWNpbmdTaGlwKCksXG4gICAgICAgICAgICAgICAgZ2V0Q3VycmVudGx5UGxhY2luZ09yaWVudGF0aW9uKGdldEN1cnJlbnRseVBsYWNpbmdTaGlwKCkpLFxuICAgICAgICAgICAgICAgIHBsYXllclxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzkwRUU5MFwiOyAvL21ha2UgZ3JlZW4gaWYgbGVnYWxcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICFpc0xlZ2FsUGxhY2VtZW50KFxuICAgICAgICAgICAgICAgIGJveFJvdyxcbiAgICAgICAgICAgICAgICBib3hDb2x1bW4sXG4gICAgICAgICAgICAgICAgZ2V0Q3VycmVudGx5UGxhY2luZ1NoaXAoKSxcbiAgICAgICAgICAgICAgICBnZXRDdXJyZW50bHlQbGFjaW5nT3JpZW50YXRpb24oZ2V0Q3VycmVudGx5UGxhY2luZ1NoaXAoKSksXG4gICAgICAgICAgICAgICAgcGxheWVyXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZjY2NiXCI7IC8vbWFrZSByZWQgaXMgaWxsZWdhbFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vZHJhZ2dpbmcgYXdheSBmcm9tIGJveGVzIGRpc3BsYXlcbiAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnbGVhdmVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgcGxheWVyLmNvb3JkaW5hdGVzW2ldW2pdICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vZHJvcHBpbmcgaW50byBib3hlcyBkaXNwbGF5XG4gICAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbGV0IGJveEFyciA9IFtpLCBqXTtcbiAgICAgICAgICBsZXQgYm94Um93ID0gYm94QXJyWzBdO1xuICAgICAgICAgIGxldCBib3hDb2x1bW4gPSBib3hBcnJbMV07XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgaXNMZWdhbFBsYWNlbWVudChcbiAgICAgICAgICAgICAgYm94Um93LFxuICAgICAgICAgICAgICBib3hDb2x1bW4sXG4gICAgICAgICAgICAgIGdldEN1cnJlbnRseVBsYWNpbmdTaGlwKCksXG4gICAgICAgICAgICAgIGdldEN1cnJlbnRseVBsYWNpbmdPcmllbnRhdGlvbihnZXRDdXJyZW50bHlQbGFjaW5nU2hpcCgpKSxcbiAgICAgICAgICAgICAgcGxheWVyXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBwbGF5ZXIucGxhY2VTaGlwKFxuICAgICAgICAgICAgICBib3hSb3csXG4gICAgICAgICAgICAgIGJveENvbHVtbixcbiAgICAgICAgICAgICAgZ2V0Q3VycmVudGx5UGxhY2luZ0xlbmd0aCgpLFxuICAgICAgICAgICAgICBnZXRDdXJyZW50bHlQbGFjaW5nU2hpcCgpLFxuICAgICAgICAgICAgICBnZXRDdXJyZW50bHlQbGFjaW5nT3JpZW50YXRpb24oZ2V0Q3VycmVudGx5UGxhY2luZ1NoaXAoKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsZXQgZGVsZXRlU2hpcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgICAgICBcInNlZ21lbnRlZF9fXCIgKyBnZXRDdXJyZW50bHlQbGFjaW5nU2hpcCgpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZGVsZXRlU2hpcC5yZW1vdmUoKTtcbiAgICAgICAgICAgIGluY3JlYXNlUGxhY2VDb3VudCgpO1xuICAgICAgICAgICAgaWYgKGdldElzQWxsUGxhY2VkKCkpIHtcbiAgICAgICAgICAgICAgYnVpbGRCdXR0b25Cb3goKTtcblxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFsbCBwbGFjZWRcIik7XG5cbiAgICAgICAgICAgICAgbGV0IGhhcmJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGFyYm9yXCIpO1xuICAgICAgICAgICAgICBoYXJib3IucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgICAgY29uc3QgY29tbWFuZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgICAgY29tbWFuZGVyLmlubmVySFRNTCA9XG4gICAgICAgICAgICAgICAgXCJDb21tYW5kZXIgPGJyIC8+PGJyIC8+IChBLkkgd2lsbCBmaXJlIHJhbmRvbWx5KVwiO1xuICAgICAgICAgICAgICBjb21tYW5kZXIuaWQgPSBcImNvbW1hbmRlclwiO1xuICAgICAgICAgICAgICBjb21tYW5kZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgYnV0dG9uQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b25Cb3hcIik7XG4gICAgICAgICAgICAgICAgaGFyYm9yLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbkJveC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVDb21wdXRlckJvYXJkKCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBjb25zdCBhZG1pcmFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgICAgYWRtaXJhbC5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgIFwiRmxlZXQgQWRtaXJhbCA8YnIgLz48YnIgLz4gKEEuSSB3aWxsIGh1bnQgc2hpcHMgb24gaGl0KVwiO1xuICAgICAgICAgICAgICBhZG1pcmFsLmlkID0gXCJhZG1pcmFsXCI7XG4gICAgICAgICAgICAgIGFkbWlyYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgYnV0dG9uQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b25Cb3hcIik7XG4gICAgICAgICAgICAgICAgbGV0IGluc3RydWN0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zdHJ1Y3Rpb25zXCIpO1xuICAgICAgICAgICAgICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKTtcbiAgICAgICAgICAgICAgICBoYXJib3IucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgYnV0dG9uQm94LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGluc3RydWN0aW9ucy5pbm5lclRleHQgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGhlYWRlci5pbm5lclRleHQgPSBcIlwiO1xuICAgICAgICAgICAgICAgIC8vIHdoaWxlIChidXR0b25Cb3guZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIC8vICAgYnV0dG9uQm94LnJlbW92ZUNoaWxkKGJ1dHRvbkJveC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgc2V0RGlmZmljdWx0eShcImhhcmRcIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlQ29tcHV0ZXJCb2FyZCgpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgY29uc3QgcmVwbGFjZVNoaXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgICAgcmVwbGFjZVNoaXBzLmlubmVyVGV4dCA9IFwiSSB3aXNoIHRvIHJlYXNzaWduIG15IHNoaXBzIVwiO1xuICAgICAgICAgICAgICByZXBsYWNlU2hpcHMuaWQgPSBcInJlcGxhY2VTaGlwc1wiO1xuICAgICAgICAgICAgICByZXBsYWNlU2hpcHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgYnV0dG9uQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b25Cb3hcIik7XG4gICAgICAgICAgICAgICAgaGFyYm9yLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbkJveC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBsZXQgYm9hcmRPbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvYXJkT25lXCIpO1xuICAgICAgICAgICAgICAgIHdoaWxlIChib2FyZE9uZS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICBib2FyZE9uZS5yZW1vdmVDaGlsZChib2FyZE9uZS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnVpbGRIYXJib3IoKTtcbiAgICAgICAgICAgICAgICByZXNldEFsbCgpO1xuICAgICAgICAgICAgICAgIGdhbWVMb29wKCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBsZXQgYnV0dG9uQm94VG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b25Cb3hUb3BcIik7XG4gICAgICAgICAgICAgIHdoaWxlIChidXR0b25Cb3hUb3AuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIGJ1dHRvbkJveFRvcC5yZW1vdmVDaGlsZChidXR0b25Cb3hUb3AuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbGV0IGJ1dHRvbkJveEJvdHRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uQm94Qm90dG9tXCIpO1xuICAgICAgICAgICAgICB3aGlsZSAoYnV0dG9uQm94Qm90dG9tLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBidXR0b25Cb3hCb3R0b20ucmVtb3ZlQ2hpbGQoYnV0dG9uQm94Qm90dG9tLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJ1dHRvbkJveFRvcC5hcHBlbmRDaGlsZChjb21tYW5kZXIpO1xuICAgICAgICAgICAgICBidXR0b25Cb3hUb3AuYXBwZW5kQ2hpbGQoYWRtaXJhbCk7XG4gICAgICAgICAgICAgIGJ1dHRvbkJveEJvdHRvbS5hcHBlbmRDaGlsZChyZXBsYWNlU2hpcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXBkYXRlUGxheWVyQm9hcmQocGxheWVyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChib3gpO1xuICAgICAgfVxuICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVQbGF5ZXJCb2FyZChwbGF5ZXIpIHtcbiAgICBsZXQgcGxheWVyQm9hcmQgPSBwbGF5ZXI7XG4gICAgY29uc29sZS50YWJsZShwbGF5ZXJCb2FyZC5jb29yZGluYXRlcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwbGF5ZXJCb2FyZC5jb29yZGluYXRlc1tpXVtqXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIGlmIChwbGF5ZXJCb2FyZC5jb29yZGluYXRlc1tpXVtqXS5uYW1lID09IFwiZGVzdHJveWVyXCIpIHtcbiAgICAgICAgICAgIGxldCBkZXN0cm95ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllcmJveFwiICsgaSArIFwiXCIgKyBqKTtcbiAgICAgICAgICAgIGRlc3Ryb3llci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMxZDM1NTdcIjtcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBwbGF5ZXJCb2FyZC5jb29yZGluYXRlc1tpXVtqXS5zaGlwTG9jYXRpb25bXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoW2ksIGpdKVxuICAgICAgICAgICAgICBdID09IHRydWVcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBkZXN0cm95ZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHBsYXllckJvYXJkLmNvb3JkaW5hdGVzW2ldW2pdLm5hbWUgPT0gXCJzdWJtYXJpbmVcIikge1xuICAgICAgICAgICAgbGV0IHN1Ym1hcmluZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyYm94XCIgKyBpICsgXCJcIiArIGopO1xuICAgICAgICAgICAgc3VibWFyaW5lLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzgzMzhlY1wiO1xuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHBsYXllckJvYXJkLmNvb3JkaW5hdGVzW2ldW2pdLnNoaXBMb2NhdGlvbltcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShbaSwgal0pXG4gICAgICAgICAgICAgIF0gPT0gdHJ1ZVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHN1Ym1hcmluZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAocGxheWVyQm9hcmQuY29vcmRpbmF0ZXNbaV1bal0ubmFtZSA9PSBcImNhcnJpZXJcIikge1xuICAgICAgICAgICAgbGV0IGNhcnJpZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllcmJveFwiICsgaSArIFwiXCIgKyBqKTtcbiAgICAgICAgICAgIGNhcnJpZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZiZTBiXCI7XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgcGxheWVyQm9hcmQuY29vcmRpbmF0ZXNbaV1bal0uc2hpcExvY2F0aW9uW1xuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KFtpLCBqXSlcbiAgICAgICAgICAgICAgXSA9PSB0cnVlXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgY2Fycmllci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAocGxheWVyQm9hcmQuY29vcmRpbmF0ZXNbaV1bal0ubmFtZSA9PSBcImJhdHRsZXNoaXBcIikge1xuICAgICAgICAgICAgbGV0IGJhdHRsZXNoaXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllcmJveFwiICsgaSArIFwiXCIgKyBqKTtcbiAgICAgICAgICAgIGJhdHRsZXNoaXAuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjYmM2YzI1XCI7XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgcGxheWVyQm9hcmQuY29vcmRpbmF0ZXNbaV1bal0uc2hpcExvY2F0aW9uW1xuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KFtpLCBqXSlcbiAgICAgICAgICAgICAgXSA9PSB0cnVlXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgYmF0dGxlc2hpcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAocGxheWVyQm9hcmQuY29vcmRpbmF0ZXNbaV1bal0ubmFtZSA9PSBcInBhdHJvbGJvYXRcIikge1xuICAgICAgICAgICAgbGV0IHBhdHJvbGJvYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllcmJveFwiICsgaSArIFwiXCIgKyBqKTtcbiAgICAgICAgICAgIHBhdHJvbGJvYXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjOGFjOTI2XCI7XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgcGxheWVyQm9hcmQuY29vcmRpbmF0ZXNbaV1bal0uc2hpcExvY2F0aW9uW1xuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KFtpLCBqXSlcbiAgICAgICAgICAgICAgXSA9PSB0cnVlXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcGF0cm9sYm9hdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXJCb2FyZC5jb29yZGluYXRlc1tpXVtqXSA9PSBcIm1pc3NcIikge1xuICAgICAgICAgIGxldCBtaXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXJib3hcIiArIGkgKyBcIlwiICsgaik7XG4gICAgICAgICAgbWlzcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNBREQ4RTZcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNvbXB1dGVyQm9hcmQoKSB7XG4gICAgbGV0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2FyZFR3b1wiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcm93LmlkID0gXCJyb3dcIiArIGk7XG4gICAgICByb3cuY2xhc3NOYW1lID0gXCJyb3dcIjtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBsZXQgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYm94LmlkID0gSlNPTi5zdHJpbmdpZnkoW2ksIGpdKTtcbiAgICAgICAgYm94LmNsYXNzTmFtZSA9IFwiYm94XCI7XG4gICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGxldCBhcnIgPSBKU09OLnBhcnNlKGJveC5pZCk7XG4gICAgICAgICAgbGV0IGFyclJvdyA9IGFyclswXTtcbiAgICAgICAgICBsZXQgYXJyQ29sdW1uID0gYXJyWzFdO1xuICAgICAgICAgIC8vdHVybiBpZCBpbnRvIGNvb3JkaW5hdGVzXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgY29tcHV0ZXIuaXNPdmVyKCkgIT0gdHJ1ZSAmJlxuICAgICAgICAgICAgaXNMZWdhbE1vdmUoY29tcHV0ZXIsIGFyclJvdywgYXJyQ29sdW1uKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29tcHV0ZXIucmVjZWl2ZUF0dGFjayhhcnJSb3csIGFyckNvbHVtbik7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbXB1dGVyLmNvb3JkaW5hdGVzW2FyclJvd11bYXJyQ29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICBpZiAoY29tcHV0ZXIuY29vcmRpbmF0ZXNbYXJyUm93XVthcnJDb2x1bW5dLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpcyBzdW5rIVwiKTtcbiAgICAgICAgICAgICAgICBzb2x2ZU1pc3Nlcyhjb21wdXRlciwgYXJyUm93LCBhcnJDb2x1bW4pO1xuICAgICAgICAgICAgICAgIGlmIChjb21wdXRlci5pc092ZXIoKSkge1xuICAgICAgICAgICAgICAgICAgbGV0IGxlZnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRcIik7XG4gICAgICAgICAgICAgICAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIik7XG4gICAgICAgICAgICAgICAgICBoZWFkZXIuaW5uZXJUZXh0ID0gXCJDYXB0YWluLCB5b3UndmUgd29uIVwiO1xuICAgICAgICAgICAgICAgICAgbGV0IHBsYXlBZ2FpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICAgICAgICBwbGF5QWdhaW4uaWQgPSBcInBsYXlBZ2FpblwiO1xuICAgICAgICAgICAgICAgICAgcGxheUFnYWluLmlubmVyVGV4dCA9IFwiUGxheSBBZ2Fpbj9cIjtcbiAgICAgICAgICAgICAgICAgIHBsYXlBZ2Fpbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYm9hcmRPbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvYXJkT25lXCIpO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoYm9hcmRPbmUuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgIGJvYXJkT25lLnJlbW92ZUNoaWxkKGJvYXJkT25lLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBib2FyZFR3byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9hcmRUd29cIik7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChib2FyZFR3by5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgYm9hcmRUd28ucmVtb3ZlQ2hpbGQoYm9hcmRUd28uZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGxheUFnYWluLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXIuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICAgICAgICBcIllvdSBrbm93IHRoZSBkcmlsbCwgQ2FwdGFpbi4gR29vZCBsdWNrIVwiO1xuICAgICAgICAgICAgICAgICAgICBidWlsZEhhcmJvcigpO1xuICAgICAgICAgICAgICAgICAgICByZXNldEFsbCgpO1xuICAgICAgICAgICAgICAgICAgICBnYW1lTG9vcCgpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICBsZWZ0LmFwcGVuZENoaWxkKHBsYXlBZ2Fpbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVDb21wdXRlckJvYXJkKGNvbXB1dGVyKTtcbiAgICAgICAgICAgIGlmIChnZXREaWZmaWN1bHR5KCkgPT0gXCJlYXN5XCIpIHtcbiAgICAgICAgICAgICAgaWYgKHBsYXllci5pc092ZXIoKSAhPSB0cnVlICYmIGNvbXB1dGVyLmlzT3ZlcigpICE9IHRydWUpIHtcbiAgICAgICAgICAgICAgICByYW5kb21BdHRhY2socGxheWVyKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVQbGF5ZXJCb2FyZChwbGF5ZXIpO1xuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIuaXNPdmVyKCkpIHtcbiAgICAgICAgICAgICAgICAgIGxldCBsZWZ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0XCIpO1xuICAgICAgICAgICAgICAgICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpO1xuICAgICAgICAgICAgICAgICAgaGVhZGVyLmlubmVyVGV4dCA9XG4gICAgICAgICAgICAgICAgICAgIFwiQ2FwdGFpbiwgd2UndmUgbG9zdCB0aGUgYmF0dGxlLCBidXQgbm90IHRoZSB3YXIhXCI7XG4gICAgICAgICAgICAgICAgICBsZXQgcGxheUFnYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgICAgICAgIHBsYXlBZ2Fpbi5pZCA9IFwicGxheUFnYWluXCI7XG4gICAgICAgICAgICAgICAgICBwbGF5QWdhaW4uaW5uZXJUZXh0ID0gXCJQbGF5IEFnYWluP1wiO1xuICAgICAgICAgICAgICAgICAgcGxheUFnYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBib2FyZE9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9hcmRPbmVcIik7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChib2FyZE9uZS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgYm9hcmRPbmUucmVtb3ZlQ2hpbGQoYm9hcmRPbmUuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IGJvYXJkVHdvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2FyZFR3b1wiKTtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGJvYXJkVHdvLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBib2FyZFR3by5yZW1vdmVDaGlsZChib2FyZFR3by5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwbGF5QWdhaW4ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlci5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgICAgICAgIFwiWW91IGtub3cgdGhlIGRyaWxsLCBDYXB0YWluLiBHb29kIGx1Y2shXCI7XG4gICAgICAgICAgICAgICAgICAgIGJ1aWxkSGFyYm9yKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc2V0QWxsKCk7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVMb29wKCk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIGxlZnQuYXBwZW5kQ2hpbGQocGxheUFnYWluKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2V0RGlmZmljdWx0eSgpID09IFwiaGFyZFwiKSB7XG4gICAgICAgICAgICAgIGlmIChwbGF5ZXIuaXNPdmVyKCkgIT0gdHJ1ZSAmJiBjb21wdXRlci5pc092ZXIoKSAhPSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgc2hpcEh1bnQocGxheWVyKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVQbGF5ZXJCb2FyZChwbGF5ZXIpO1xuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIuaXNPdmVyKCkpIHtcbiAgICAgICAgICAgICAgICAgIGxldCBsZWZ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0XCIpO1xuICAgICAgICAgICAgICAgICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpO1xuICAgICAgICAgICAgICAgICAgaGVhZGVyLmlubmVyVGV4dCA9XG4gICAgICAgICAgICAgICAgICAgIFwiQ2FwdGFpbiwgd2UndmUgbG9zdCB0aGUgYmF0dGxlLCBidXQgbm90IHRoZSB3YXIhXCI7XG4gICAgICAgICAgICAgICAgICBsZXQgcGxheUFnYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgICAgICAgIHBsYXlBZ2Fpbi5pZCA9IFwicGxheUFnYWluXCI7XG4gICAgICAgICAgICAgICAgICBwbGF5QWdhaW4uaW5uZXJUZXh0ID0gXCJQbGF5IEFnYWluP1wiO1xuICAgICAgICAgICAgICAgICAgcGxheUFnYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBib2FyZE9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9hcmRPbmVcIik7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChib2FyZE9uZS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgYm9hcmRPbmUucmVtb3ZlQ2hpbGQoYm9hcmRPbmUuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IGJvYXJkVHdvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2FyZFR3b1wiKTtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGJvYXJkVHdvLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBib2FyZFR3by5yZW1vdmVDaGlsZChib2FyZFR3by5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwbGF5QWdhaW4ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlci5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgICAgICAgIFwiWW91IGtub3cgdGhlIGRyaWxsLCBDYXB0YWluLiBHb29kIGx1Y2shXCI7XG4gICAgICAgICAgICAgICAgICAgIGJ1aWxkSGFyYm9yKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc2V0QWxsKCk7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVMb29wKCk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIGxlZnQuYXBwZW5kQ2hpbGQocGxheUFnYWluKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbGV0IGFyciA9IEpTT04ucGFyc2UoYm94LmlkKTtcbiAgICAgICAgICBsZXQgYXJyUm93ID0gYXJyWzBdO1xuICAgICAgICAgIGxldCBhcnJDb2x1bW4gPSBhcnJbMV07XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgY29tcHV0ZXIuaXNPdmVyKCkgIT0gdHJ1ZSAmJlxuICAgICAgICAgICAgaXNMZWdhbE1vdmUoY29tcHV0ZXIsIGFyclJvdywgYXJyQ29sdW1uKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKFwiICsgdGFyZ2V0LnNyYyArIFwiKVwiO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJtb3VzaW5nIG92ZXJcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwibm9uZVwiO1xuICAgICAgICB9KTtcbiAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwibm9uZVwiO1xuICAgICAgICB9KTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGJveCk7XG4gICAgICB9XG4gICAgICBib2FyZC5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB1cGRhdGVDb21wdXRlckJvYXJkKGNvbXB1dGVyKSB7XG4gICAgbGV0IGNvbXB1dGVyQm9hcmQgPSBjb21wdXRlcjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBpZiAodHlwZW9mIGNvbXB1dGVyQm9hcmQuY29vcmRpbmF0ZXNbaV1bal0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBjb21wdXRlckJvYXJkLmNvb3JkaW5hdGVzW2ldW2pdLnNoaXBMb2NhdGlvbltcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoW2ksIGpdKVxuICAgICAgICAgICAgXSA9PSB0cnVlXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBsZXQgaGl0Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoSlNPTi5zdHJpbmdpZnkoW2ksIGpdKSk7XG4gICAgICAgICAgICBoaXRCb3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29tcHV0ZXJCb2FyZC5jb29yZGluYXRlc1tpXVtqXSA9PSBcIm1pc3NcIikge1xuICAgICAgICAgIGxldCBtaXNzQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoSlNPTi5zdHJpbmdpZnkoW2ksIGpdKSk7XG4gICAgICAgICAgbWlzc0JveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNBREQ4RTZcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuZXhwb3J0IHsgZGlzcGxheUJvYXJkIH07XG4iLCJsZXQgZ2FtZURpZmZpY3VsdHkgPSBcImVhc3lcIjtcblxuZnVuY3Rpb24gc2V0RGlmZmljdWx0eShkaWZmaWN1bHR5KSB7XG4gIGdhbWVEaWZmaWN1bHR5ID0gZGlmZmljdWx0eTtcbn1cblxuZnVuY3Rpb24gZ2V0RGlmZmljdWx0eSgpIHtcbiAgcmV0dXJuIGdhbWVEaWZmaWN1bHR5O1xufVxuZXhwb3J0IHsgc2V0RGlmZmljdWx0eSwgZ2V0RGlmZmljdWx0eSB9O1xuIiwiaW1wb3J0IHsgY29tcHV0ZXJQbGFjZVNoaXBzIH0gZnJvbSBcIi4vY29tcHV0ZXJGbnMvY29tcHV0ZXJQbGFjZVNoaXBcIjtcbmltcG9ydCB7IHBsYWNlQmF0dGxlc2hpcCB9IGZyb20gXCIuL2NvbXB1dGVyRm5zL3BsYWNlQmF0dGxlc2hpcFwiO1xuaW1wb3J0IHsgcGxhY2VDYXJyaWVyIH0gZnJvbSBcIi4vY29tcHV0ZXJGbnMvcGxhY2VDYXJyaWVyXCI7XG5pbXBvcnQgeyBwbGFjZURlc3Ryb3llciB9IGZyb20gXCIuL2NvbXB1dGVyRm5zL3BsYWNlRGVzdHJveWVyXCI7XG5pbXBvcnQgeyBwbGFjZVBhdHJvbGJvYXQgfSBmcm9tIFwiLi9jb21wdXRlckZucy9wbGFjZVBhdHJvbGJvYXRcIjtcbmltcG9ydCB7IHBsYWNlU3VibWFyaW5lIH0gZnJvbSBcIi4vY29tcHV0ZXJGbnMvcGxhY2VTdWJtYXJpbmVcIjtcbmltcG9ydCB7IHJhbmRvbUF0dGFjayB9IGZyb20gXCIuL2NvbXB1dGVyRm5zL3JhbmRvbUF0dGFja1wiO1xuaW1wb3J0IHsgZGlzcGxheUJvYXJkIH0gZnJvbSBcIi4vZGlzcGxheUJvYXJkXCI7XG5pbXBvcnQgeyBnYW1lYm9hcmRGYWN0b3J5IH0gZnJvbSBcIi4vZ2FtZWJvYXJkRmFjdG9yeVwiO1xuaW1wb3J0IHsgcGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5cbmZ1bmN0aW9uIGdhbWVMb29wKCkge1xuICBsZXQgcGxheWVyQm9hcmQgPSBnYW1lYm9hcmRGYWN0b3J5KCk7XG4gIGxldCBjb21wdXRlckJvYXJkID0gZ2FtZWJvYXJkRmFjdG9yeSgpO1xuICBjb21wdXRlclBsYWNlU2hpcHMoY29tcHV0ZXJCb2FyZCk7XG5cbiAgLy8gd2hpbGUgKHBsYXllckJvYXJkLmlzT3ZlcigpID09IGZhbHNlICYmIGNvbXB1dGVyQm9hcmQuaXNPdmVyID09IGZhbHNlKSB7XG4gIC8vICAgLy9wbGF5IGdhbWVcbiAgLy8gfVxuICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IDI1OyBpKyspIHtcbiAgLy8gICByYW5kb21BdHRhY2socGxheWVyQm9hcmQpO1xuICAvLyB9XG5cbiAgZGlzcGxheUJvYXJkKHBsYXllckJvYXJkLCBjb21wdXRlckJvYXJkKTtcbn1cbmV4cG9ydCB7IGdhbWVMb29wIH07XG4iLCJpbXBvcnQgeyBzaGlwRmFjdG9yeSB9IGZyb20gXCIuL3NoaXBGYWN0b3J5XCI7XG5cbmZ1bmN0aW9uIGdhbWVib2FyZEZhY3RvcnkoKSB7XG4gIGxldCBjb29yZGluYXRlcyA9IFtcbiAgICBbXCJBMVwiLCBcIkEyXCIsIFwiQTNcIiwgXCJBNFwiLCBcIkE1XCIsIFwiQTZcIiwgXCJBN1wiLCBcIkE4XCIsIFwiQTlcIiwgXCJBMTBcIl0sXG4gICAgW1wiQjFcIiwgXCJCMlwiLCBcIkIzXCIsIFwiQjRcIiwgXCJCNVwiLCBcIkI2XCIsIFwiQjdcIiwgXCJCOFwiLCBcIkI5XCIsIFwiQjEwXCJdLFxuICAgIFtcIkMxXCIsIFwiQzJcIiwgXCJDM1wiLCBcIkM0XCIsIFwiQzVcIiwgXCJDNlwiLCBcIkM3XCIsIFwiQzhcIiwgXCJDOVwiLCBcIkMxMFwiXSxcbiAgICBbXCJEMVwiLCBcIkQyXCIsIFwiRDNcIiwgXCJENFwiLCBcIkQ1XCIsIFwiRDZcIiwgXCJEN1wiLCBcIkQ4XCIsIFwiRDlcIiwgXCJEMTBcIl0sXG4gICAgW1wiRTFcIiwgXCJFMlwiLCBcIkUzXCIsIFwiRTRcIiwgXCJFNVwiLCBcIkU2XCIsIFwiRTdcIiwgXCJFOFwiLCBcIkU5XCIsIFwiRTEwXCJdLFxuICAgIFtcIkYxXCIsIFwiRjJcIiwgXCJGM1wiLCBcIkY0XCIsIFwiRjVcIiwgXCJGNlwiLCBcIkY3XCIsIFwiRjhcIiwgXCJGOVwiLCBcIkYxMFwiXSxcbiAgICBbXCJHMVwiLCBcIkcyXCIsIFwiRzNcIiwgXCJHNFwiLCBcIkc1XCIsIFwiRzZcIiwgXCJHN1wiLCBcIkc4XCIsIFwiRzlcIiwgXCJHMTBcIl0sXG4gICAgW1wiSDFcIiwgXCJIMlwiLCBcIkgzXCIsIFwiSDRcIiwgXCJINVwiLCBcIkg2XCIsIFwiSDdcIiwgXCJIOFwiLCBcIkg5XCIsIFwiSDEwXCJdLFxuICAgIFtcIkkxXCIsIFwiSTJcIiwgXCJJM1wiLCBcIkk0XCIsIFwiSTVcIiwgXCJJNlwiLCBcIkk3XCIsIFwiSThcIiwgXCJJOVwiLCBcIkkxMFwiXSxcbiAgICBbXCJKMVwiLCBcIkoyXCIsIFwiSjNcIiwgXCJKNFwiLCBcIko1XCIsIFwiSjZcIiwgXCJKN1wiLCBcIko4XCIsIFwiSjlcIiwgXCJKMTBcIl0sXG4gIF07XG5cbiAgZnVuY3Rpb24gcGxhY2VTaGlwKHJvdywgY29sdW1uLCBsZW5ndGgsIG5hbWUsIG9yaWVudGF0aW9uKSB7XG4gICAgbGV0IHNoaXAgPSBzaGlwRmFjdG9yeShsZW5ndGgsIG5hbWUsIG9yaWVudGF0aW9uLCByb3csIGNvbHVtbik7XG5cbiAgICBpZiAob3JpZW50YXRpb24gPT0gMCkge1xuICAgICAgLy9ob3Jpem9udGFsIHBsYWNlbWVudFxuICAgICAgY29uc29sZS50YWJsZShjb29yZGluYXRlcyk7XG4gICAgICBjb25zb2xlLmxvZyhsZW5ndGgsIG5hbWUsIG9yaWVudGF0aW9uLCByb3csIGNvbHVtbik7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvb3JkaW5hdGVzW3Jvd11bY29sdW1uICsgaV0gPSBzaGlwO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT0gMSkge1xuICAgICAgLy92ZXJ0aWNhbCBwbGFjZW1lbnRcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uXSA9IHNoaXA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhyb3csIGNvbHVtbikge1xuICAgIGlmICh0eXBlb2YgY29vcmRpbmF0ZXNbcm93XVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBjb29yZGluYXRlc1tyb3ddW2NvbHVtbl0uaGl0KFtyb3csIGNvbHVtbl0pO1xuICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzW3Jvd11bY29sdW1uXS5pc1N1bmsoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29vcmRpbmF0ZXNbcm93XVtjb2x1bW5dID0gXCJtaXNzXCI7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNPdmVyKCkge1xuICAgIGxldCBpc092ZXIgPSB0cnVlO1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgMTA7IGNvbHVtbisrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY29vcmRpbmF0ZXNbcm93XVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgaWYgKGNvb3JkaW5hdGVzW3Jvd11bY29sdW1uXS5pc1N1bmsoKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgaXNPdmVyID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpc092ZXI7XG4gIH1cblxuICByZXR1cm4geyBjb29yZGluYXRlcywgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCBpc092ZXIgfTtcbn1cbmV4cG9ydCB7IGdhbWVib2FyZEZhY3RvcnkgfTtcblxuLy8gbGV0IGFyciA9IFtcbi8vICAgW1wiQTFcIiwgXCJBMlwiLCBcIkEzXCJdLFxuLy8gICBbXCJCMVwiLCBcIkIyXCIsIFwiQjNcIl0sXG4vLyBdO1xuLy8gLy9maXJzdCB2YWx1ZSBpcyB0aGUgcm93LCBzZWNvbmQgdmFsdWUgaXMgdGhlIGNvbHVtblxuLy8gY29uc29sZS5sb2coYXJyWzBdWzBdKTtcblxuLy8gLy9maXJzdCBwYXJhbWV0ZXIgaXMgdGhlIGluZGV4IChvZiB0aGUgYXJyYXkpIHdpdGhpbiBjb29yZGluYXRlIGFycmF5XG4vLyAvL3NlY29uZCBwYXJhbWV0ZXIgaXMgdGhlIGluZGV4IChvZiB0aGUgdmFsdWUpIHdpdGhpbiB0aGUgaW5kZXggKG9mIHRoZSBhcnJheSlcblxuLy8gY29uc29sZS5sb2coYXJyWzBdWzBdKTsgLy9ob3Jpem9udGFsIHBsYWNlbWVudFxuLy8gY29uc29sZS5sb2coYXJyWzBdWzBdKTtcbi8vIGNvbnNvbGUubG9nKGFyclswXVsxXSk7XG4vLyBjb25zb2xlLmxvZyhhcnJbMF1bMl0pO1xuLy8gY29uc29sZS5sb2coYXJyWzBdWzNdKTtcbi8vIGNvbnNvbGUubG9nKGFyclswXVs0XSk7XG4vLyAvL2luY3JlYXNlIHZhbHVlIG9mIHNlY29uZCBhcnJheSB1cCB0byBzaGlwJ3MgbGVuZ3RoIHRvIHBsYWNlIGhvcml6b250YWxcbiIsImZ1bmN0aW9uIGlzTGVnYWxNb3ZlKGJvYXJkLCByb3csIGNvbHVtbikge1xuICBsZXQgaXNMZWdhbCA9IHRydWU7XG4gIGlmIChib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbl0gPT0gXCJtaXNzXCIpIHtcbiAgICBpc0xlZ2FsID0gZmFsc2U7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgIGlmIChcbiAgICAgIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uXS5zaGlwTG9jYXRpb25bXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KFtyb3csIGNvbHVtbl0pXG4gICAgICBdID09IHRydWVcbiAgICApIHtcbiAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGlzTGVnYWw7XG59XG5leHBvcnQgeyBpc0xlZ2FsTW92ZSB9O1xuIiwiZnVuY3Rpb24gaXNMZWdhbFBsYWNlbWVudChyb3csIGNvbHVtbiwgc2hpcCwgb3JpZW50YXRpb24sIGJvYXJkKSB7XG4gIGxldCBpc0xlZ2FsID0gdHJ1ZTtcbiAgaWYgKHNoaXAgPT0gXCJjYXJyaWVyXCIpIHtcbiAgICBpZiAob3JpZW50YXRpb24gPT0gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHJvdyA9PSAwKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPT0gMSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA+PSAyICYmIHJvdyA8PSA3KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID09IDgpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID09IDkpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb2x1bW4gPT0gMCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gKyAxICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID09IDEpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uICsgMSArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPj0gMiAmJiBjb2x1bW4gPCA1KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiArIDEgKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID09IDUpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA+IDUpIHtcbiAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgIH0gLy9jb2x1bW4gd2lsbCBuZXZlciBiZSBncmVhdGVyIHRoYW4gbGVuZ3RoICg1IGZvciBjYXJyaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAob3JpZW50YXRpb24gPT0gMSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2x1bW4gPT0gMCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uICsgMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID09IDEpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiArIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPj0gMiAmJiBjb2x1bW4gPD0gNykge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uICsgMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA9PSA4KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gKyAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA9PSA5KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocm93ID09IDApIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIDEgKyBpXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA9PSAxKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpICsgMV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID49IDIgJiYgcm93IDwgNSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaSArIDFdW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA9PSA1KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPiA1KSB7XG4gICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICB9IC8vcm93IHdpbGwgbmV2ZXIgYmUgZ3JlYXRlciB0aGFuIGxlbmd0aCAoNSBmb3IgY2FycmllcilcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaXNMZWdhbDtcbiAgfVxuICBpZiAoc2hpcCA9PSBcImJhdHRsZXNoaXBcIikge1xuICAgIGlmIChvcmllbnRhdGlvbiA9PSAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID09IDApIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA9PSAxKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID49IDIgJiYgcm93IDw9IDcpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPT0gOCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPT0gOSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbHVtbiA9PSAwKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiArIDEgKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPT0gMSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gKyAxICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA+PSAyICYmIGNvbHVtbiA8IDYpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uICsgMSArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPT0gNikge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID4gNikge1xuICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgfSAvL2NvbHVtbiB3aWxsIG5ldmVyIGJlIGdyZWF0ZXIgdGhhbiBsZW5ndGggKDUgZm9yIGNhcnJpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvcmllbnRhdGlvbiA9PSAxKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbHVtbiA9PSAwKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gKyAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPT0gMSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uICsgMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA+PSAyICYmIGNvbHVtbiA8PSA3KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gKyAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID09IDgpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiArIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID09IDkpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyb3cgPT0gMCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgMSArIGldW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID09IDEpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGkgKyAxXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPj0gMiAmJiByb3cgPCA2KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpICsgMV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID09IDYpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA+IDYpIHtcbiAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgIH0gLy9yb3cgd2lsbCBuZXZlciBiZSBncmVhdGVyIHRoYW4gbGVuZ3RoICg1IGZvciBjYXJyaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXNMZWdhbDtcbiAgfVxuICBpZiAoc2hpcCA9PSBcImRlc3Ryb3llclwiKSB7XG4gICAgaWYgKG9yaWVudGF0aW9uID09IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPT0gMCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID09IDEpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPj0gMiAmJiByb3cgPD0gNykge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA9PSA4KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA9PSA5KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sdW1uID09IDApIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uICsgMSArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA9PSAxKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiArIDEgKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID49IDIgJiYgY29sdW1uIDwgNykge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gKyAxICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA9PSA3KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPiA3KSB7XG4gICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICB9IC8vY29sdW1uIHdpbGwgbmV2ZXIgYmUgZ3JlYXRlciB0aGFuIGxlbmd0aCAoNSBmb3IgY2FycmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9yaWVudGF0aW9uID09IDEpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sdW1uID09IDApIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiArIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA9PSAxKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gKyAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID49IDIgJiYgY29sdW1uIDw9IDcpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiArIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPT0gOCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uICsgMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPT0gOSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdyA9PSAwKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyAxICsgaV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPT0gMSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaSArIDFdW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA+PSAyICYmIHJvdyA8IDcpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGkgKyAxXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPT0gNykge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID4gNykge1xuICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgfSAvL3JvdyB3aWxsIG5ldmVyIGJlIGdyZWF0ZXIgdGhhbiBsZW5ndGggKDUgZm9yIGNhcnJpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpc0xlZ2FsO1xuICB9XG5cbiAgaWYgKHNoaXAgPT0gXCJzdWJtYXJpbmVcIikge1xuICAgIGlmIChvcmllbnRhdGlvbiA9PSAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID09IDApIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA9PSAxKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID49IDIgJiYgcm93IDw9IDcpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPT0gOCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPT0gOSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbHVtbiA9PSAwKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiArIDEgKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPT0gMSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gKyAxICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA+PSAyICYmIGNvbHVtbiA8IDcpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uICsgMSArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPT0gNykge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID4gNykge1xuICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgfSAvL2NvbHVtbiB3aWxsIG5ldmVyIGJlIGdyZWF0ZXIgdGhhbiBsZW5ndGggKDUgZm9yIGNhcnJpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvcmllbnRhdGlvbiA9PSAxKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbHVtbiA9PSAwKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gKyAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPT0gMSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uICsgMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA+PSAyICYmIGNvbHVtbiA8PSA3KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gKyAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID09IDgpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiArIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID09IDkpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyb3cgPT0gMCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgMSArIGldW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID09IDEpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGkgKyAxXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPj0gMiAmJiByb3cgPCA3KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpICsgMV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID09IDcpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA+IDcpIHtcbiAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgIH0gLy9yb3cgd2lsbCBuZXZlciBiZSBncmVhdGVyIHRoYW4gbGVuZ3RoICg1IGZvciBjYXJyaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXNMZWdhbDtcbiAgfVxuXG4gIGlmIChzaGlwID09IFwicGF0cm9sYm9hdFwiKSB7XG4gICAgaWYgKG9yaWVudGF0aW9uID09IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPT0gMCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID09IDEpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPj0gMiAmJiByb3cgPD0gNykge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgMV1bY29sdW1uICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA9PSA4KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA9PSA5KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW4gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sdW1uID09IDApIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uICsgMSArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA9PSAxKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiArIDEgKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3Jvd11bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID49IDIgJiYgY29sdW1uIDwgOCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gKyAxICsgaV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiAtIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA9PSA4KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3ddW2NvbHVtbiArIGldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93XVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPiA4KSB7XG4gICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICB9IC8vY29sdW1uIHdpbGwgbmV2ZXIgYmUgZ3JlYXRlciB0aGFuIGxlbmd0aCAoNSBmb3IgY2FycmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9yaWVudGF0aW9uID09IDEpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sdW1uID09IDApIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiArIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbiA9PSAxKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gKyAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID49IDIgJiYgY29sdW1uIDw9IDcpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGldW2NvbHVtbiArIDFdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPT0gOCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uICsgMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyBpXVtjb2x1bW4gLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPT0gOSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdyA9PSAwKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgKyAxICsgaV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPT0gMSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaSArIDFdW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyb3cgLSAxXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdyA+PSAyICYmIHJvdyA8IDgpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyArIGkgKyAxXVtjb2x1bW5dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpc0xlZ2FsID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93IC0gMV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3cgPT0gOCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcm93ICsgaV1bY29sdW1uXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaXNMZWdhbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JvdyAtIDFdW2NvbHVtbl0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm93ID4gOCkge1xuICAgICAgICAgIGlzTGVnYWwgPSBmYWxzZTtcbiAgICAgICAgfSAvL3JvdyB3aWxsIG5ldmVyIGJlIGdyZWF0ZXIgdGhhbiBsZW5ndGggKDUgZm9yIGNhcnJpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpc0xlZ2FsO1xuICB9XG59XG5leHBvcnQgeyBpc0xlZ2FsUGxhY2VtZW50IH07XG4iLCJpbXBvcnQgeyBnYW1lYm9hcmRGYWN0b3J5IH0gZnJvbSBcIi4vZ2FtZWJvYXJkRmFjdG9yeVwiO1xuXG5mdW5jdGlvbiBwbGF5ZXIoKSB7XG4gIHJldHVybiBnYW1lYm9hcmRGYWN0b3J5KCk7XG59XG5leHBvcnQgeyBwbGF5ZXIgfTtcbiIsImZ1bmN0aW9uIHNoaXBGYWN0b3J5KGxlbmd0aCwgbmFtZSwgb3JpZW50YXRpb24sIHJvdywgY29sdW1uKSB7XG4gIGxldCBzaGlwTG9jYXRpb24gPSB7fTtcblxuICBpZiAob3JpZW50YXRpb24gPT0gMCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHNoaXBMb2NhdGlvbltKU09OLnN0cmluZ2lmeShbcm93LCBjb2x1bW4gKyBpXSldID0gZmFsc2U7XG4gICAgfVxuICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09IDEpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBzaGlwTG9jYXRpb25bSlNPTi5zdHJpbmdpZnkoW3JvdyArIGksIGNvbHVtbl0pXSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhpdChjb29yZEFycmF5KSB7XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBzaGlwTG9jYXRpb24pIHtcbiAgICAgIGlmIChKU09OLnN0cmluZ2lmeShjb29yZEFycmF5KSA9PSBwcm9wZXJ0eSkge1xuICAgICAgICBzaGlwTG9jYXRpb25bcHJvcGVydHldID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N1bmsoKSB7XG4gICAgbGV0IHN1bmsgPSB0cnVlO1xuICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gc2hpcExvY2F0aW9uKSB7XG4gICAgICBpZiAoc2hpcExvY2F0aW9uW3Byb3BlcnR5XSA9PSBmYWxzZSkge1xuICAgICAgICBzdW5rID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdW5rO1xuICB9XG4gIHJldHVybiB7IGxlbmd0aCwgc2hpcExvY2F0aW9uLCBoaXQsIGlzU3VuaywgbmFtZSwgb3JpZW50YXRpb24gfTtcbn1cbmV4cG9ydCB7IHNoaXBGYWN0b3J5IH07XG4iLCJmdW5jdGlvbiBzb2x2ZU1pc3Nlcyhib2FyZCwgZm91bmRSb3csIGZvdW5kQ29sdW1uKSB7XG4gIGxldCBzaGlwTG9jYXRpb25BcnIgPSBib2FyZC5jb29yZGluYXRlc1tmb3VuZFJvd11bZm91bmRDb2x1bW5dLnNoaXBMb2NhdGlvbjtcbiAgbGV0IGxvY2F0aW9uQXJyYXkgPSBbXTtcbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBzaGlwTG9jYXRpb25BcnIpIHtcbiAgICBsb2NhdGlvbkFycmF5LnB1c2goSlNPTi5wYXJzZShwcm9wZXJ0eSkpO1xuICB9XG4gIGxldCBsb2NhdGlvbk9yaWVudGF0aW9uID1cbiAgICBib2FyZC5jb29yZGluYXRlc1tmb3VuZFJvd11bZm91bmRDb2x1bW5dLm9yaWVudGF0aW9uO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYXRpb25BcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBhcnIgPSBsb2NhdGlvbkFycmF5W2ldO1xuICAgIGxldCByID0gYXJyWzBdO1xuICAgIGxldCBjID0gYXJyWzFdO1xuICAgIGNvbnNvbGUubG9nKGFyciwgciwgYywgbG9jYXRpb25PcmllbnRhdGlvbik7XG5cbiAgICBpZiAobG9jYXRpb25PcmllbnRhdGlvbiA9PSAwKSB7XG4gICAgICBpZiAociA9PSAwKSB7XG4gICAgICAgIGJvYXJkLmNvb3JkaW5hdGVzW3IgKyAxXVtjXSA9IFwibWlzc1wiO1xuICAgICAgfSBlbHNlIGlmIChyID4gMCAmJiByIDwgOSkge1xuICAgICAgICBib2FyZC5jb29yZGluYXRlc1tyICsgMV1bY10gPSBcIm1pc3NcIjtcbiAgICAgICAgYm9hcmQuY29vcmRpbmF0ZXNbciAtIDFdW2NdID0gXCJtaXNzXCI7XG4gICAgICB9IGVsc2UgaWYgKHIgPT0gOSkge1xuICAgICAgICBib2FyZC5jb29yZGluYXRlc1tyIC0gMV1bY10gPSBcIm1pc3NcIjtcbiAgICAgIH1cbiAgICAgIGlmIChjID09IDApIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyXVtjICsgMV0gIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICBib2FyZC5jb29yZGluYXRlc1tyXVtjICsgMV0gPSBcIm1pc3NcIjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjID4gMCAmJiBjIDwgOSkge1xuICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3JdW2MgKyAxXSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIGJvYXJkLmNvb3JkaW5hdGVzW3JdW2MgKyAxXSA9IFwibWlzc1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcl1bYyAtIDFdICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgYm9hcmQuY29vcmRpbmF0ZXNbcl1bYyAtIDFdID0gXCJtaXNzXCI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoYyA9PSA5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbcl1bYyAtIDFdICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgYm9hcmQuY29vcmRpbmF0ZXNbcl1bYyAtIDFdID0gXCJtaXNzXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGxvY2F0aW9uT3JpZW50YXRpb24gPT0gMSkge1xuICAgICAgaWYgKGMgPT0gMCkge1xuICAgICAgICBib2FyZC5jb29yZGluYXRlc1tyXVtjICsgMV0gPSBcIm1pc3NcIjtcbiAgICAgIH0gZWxzZSBpZiAoYyA+IDAgJiYgYyA8IDkpIHtcbiAgICAgICAgYm9hcmQuY29vcmRpbmF0ZXNbcl1bYyArIDFdID0gXCJtaXNzXCI7XG4gICAgICAgIGJvYXJkLmNvb3JkaW5hdGVzW3JdW2MgLSAxXSA9IFwibWlzc1wiO1xuICAgICAgfSBlbHNlIGlmIChjID09IDkpIHtcbiAgICAgICAgYm9hcmQuY29vcmRpbmF0ZXNbcl1bYyAtIDFdID0gXCJtaXNzXCI7XG4gICAgICB9XG4gICAgICBpZiAociA9PSAwKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9hcmQuY29vcmRpbmF0ZXNbciArIDFdW2NdICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgYm9hcmQuY29vcmRpbmF0ZXNbciArIDFdW2NdID0gXCJtaXNzXCI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAociA+IDAgJiYgciA8IDkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2FyZC5jb29yZGluYXRlc1tyICsgMV1bY10gIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICBib2FyZC5jb29yZGluYXRlc1tyICsgMV1bY10gPSBcIm1pc3NcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3IgLSAxXVtjXSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIGJvYXJkLmNvb3JkaW5hdGVzW3IgLSAxXVtjXSA9IFwibWlzc1wiO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHIgPT0gOSkge1xuICAgICAgICBpZiAodHlwZW9mIGJvYXJkLmNvb3JkaW5hdGVzW3IgLSAxXVtjXSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIGJvYXJkLmNvb3JkaW5hdGVzW3IgLSAxXVtjXSA9IFwibWlzc1wiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IHNvbHZlTWlzc2VzIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgcGxhY2VCYXR0bGVzaGlwIH0gZnJvbSBcIi4vY29tcHV0ZXJGbnMvcGxhY2VCYXR0bGVzaGlwXCI7XG5pbXBvcnQgeyBwbGFjZUNhcnJpZXIgfSBmcm9tIFwiLi9jb21wdXRlckZucy9wbGFjZUNhcnJpZXJcIjtcbmltcG9ydCB7IHBsYWNlRGVzdHJveWVyIH0gZnJvbSBcIi4vY29tcHV0ZXJGbnMvcGxhY2VEZXN0cm95ZXJcIjtcbmltcG9ydCB7IHBsYWNlUGF0cm9sYm9hdCB9IGZyb20gXCIuL2NvbXB1dGVyRm5zL3BsYWNlUGF0cm9sYm9hdFwiO1xuaW1wb3J0IHsgcGxhY2VTdWJtYXJpbmUgfSBmcm9tIFwiLi9jb21wdXRlckZucy9wbGFjZVN1Ym1hcmluZVwiO1xuaW1wb3J0IHsgZ2FtZWJvYXJkRmFjdG9yeSB9IGZyb20gXCIuL2dhbWVib2FyZEZhY3RvcnlcIjtcbmltcG9ydCB7IGdhbWVMb29wIH0gZnJvbSBcIi4vZ2FtZUxvb3BcIjtcbmltcG9ydCB7IHNoaXBGYWN0b3J5IH0gZnJvbSBcIi4vc2hpcEZhY3RvcnlcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyByYW5kb21BdHRhY2sgfSBmcm9tIFwiLi9jb21wdXRlckZucy9yYW5kb21BdHRhY2tcIjtcbmltcG9ydCB7XG4gIGdldENhcnJpZXJPcmllbnRhdGlvbixcbiAgZ2V0Q3VycmVudGx5UGxhY2luZ1NoaXAsXG4gIHNldENhcnJpZXJPcmllbnRhdGlvbixcbiAgc2V0Q3VycmVudGx5UGxhY2luZ1NoaXAsXG4gIHNldERlc3Ryb3llck9yaWVudGF0aW9uLFxuICBzZXRQYXRyb2xib2F0T3JpZW50YXRpb24sXG4gIHNldFN1Ym1hcmluZU9yaWVudGF0aW9uLFxufSBmcm9tIFwiLi9jdXJyZW50bHlQbGFjaW5nU2hpcFwiO1xuaW1wb3J0IHsgYnVpbGRIYXJib3IgfSBmcm9tIFwiLi9idWlsZEhhcmJvclwiO1xuXG5sZXQgaXNTZXR0aW5nVXAgPSB0cnVlO1xuXG4vLyBjb25zdCBkcmFnZ2FibGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kcmFnZ2FibGVcIik7XG5cbi8vIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4vLyAgIGRyYWdnYWJsZS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsICgpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhcImRyYWcgc3RhcnRcIik7XG4vLyAgICAgZHJhZ2dhYmxlLmNsYXNzTGlzdC5hZGQoXCJkcmFnZ2luZ1wiKTtcbi8vICAgfSk7XG4vLyAgIGRyYWdnYWJsZS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCAoKSA9PiB7XG4vLyAgICAgZHJhZ2dhYmxlLmNsYXNzTGlzdC5yZW1vdmUoXCJkcmFnZ2luZ1wiKTtcbi8vICAgfSk7XG4vLyB9KTtcblxuLy8gY29uc3Qgc2VnbWVudGVkX19jYXJyaWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWdtZW50ZWRfX2NhcnJpZXJcIik7XG4vLyBzZWdtZW50ZWRfX2NhcnJpZXIuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XG4vLyBzZWdtZW50ZWRfX2NhcnJpZXIuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbi8vICAgaWYgKHNlZ21lbnRlZF9fY2Fycmllci5zdHlsZS5mbGV4RGlyZWN0aW9uID09IFwicm93XCIpIHtcbi8vICAgICBzZWdtZW50ZWRfX2NhcnJpZXIuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XG4vLyAgICAgc2V0Q2Fycmllck9yaWVudGF0aW9uKDEpO1xuLy8gICAgIGNvbnNvbGUubG9nKGdldENhcnJpZXJPcmllbnRhdGlvbigpKTtcbi8vICAgfSBlbHNlIGlmIChzZWdtZW50ZWRfX2NhcnJpZXIuc3R5bGUuZmxleERpcmVjdGlvbiA9PSBcImNvbHVtblwiKSB7XG4vLyAgICAgc2VnbWVudGVkX19jYXJyaWVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xuLy8gICAgIHNldENhcnJpZXJPcmllbnRhdGlvbigwKTtcbi8vICAgICBjb25zb2xlLmxvZyhnZXRDYXJyaWVyT3JpZW50YXRpb24oKSk7XG4vLyAgIH1cbi8vIH0pO1xuLy8gc2VnbWVudGVkX19jYXJyaWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZnVuY3Rpb24gKCkge1xuLy8gICBzZXRDdXJyZW50bHlQbGFjaW5nU2hpcChcImNhcnJpZXJcIik7XG4vLyAgIGNvbnNvbGUubG9nKGdldEN1cnJlbnRseVBsYWNpbmdTaGlwKCkpO1xuLy8gfSk7XG4vLyBjb25zdCBzZWdtZW50ZWRfX2JhdHRsZXNoaXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlZ21lbnRlZF9fYmF0dGxlc2hpcFwiKTtcbi8vIHNlZ21lbnRlZF9fYmF0dGxlc2hpcC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcbi8vIHNlZ21lbnRlZF9fYmF0dGxlc2hpcC5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuLy8gICBpZiAoc2VnbWVudGVkX19iYXR0bGVzaGlwLnN0eWxlLmZsZXhEaXJlY3Rpb24gPT0gXCJyb3dcIikge1xuLy8gICAgIHNlZ21lbnRlZF9fYmF0dGxlc2hpcC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcbi8vICAgICBzZXRDYXJyaWVyT3JpZW50YXRpb24oMSk7XG4vLyAgICAgY29uc29sZS5sb2coZ2V0Q2Fycmllck9yaWVudGF0aW9uKCkpO1xuLy8gICB9IGVsc2UgaWYgKHNlZ21lbnRlZF9fYmF0dGxlc2hpcC5zdHlsZS5mbGV4RGlyZWN0aW9uID09IFwiY29sdW1uXCIpIHtcbi8vICAgICBzZWdtZW50ZWRfX2JhdHRsZXNoaXAuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XG4vLyAgICAgc2V0Q2Fycmllck9yaWVudGF0aW9uKDApO1xuLy8gICAgIGNvbnNvbGUubG9nKGdldENhcnJpZXJPcmllbnRhdGlvbigpKTtcbi8vICAgfVxuLy8gfSk7XG4vLyBzZWdtZW50ZWRfX2JhdHRsZXNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBmdW5jdGlvbiAoKSB7XG4vLyAgIHNldEN1cnJlbnRseVBsYWNpbmdTaGlwKFwiYmF0dGxlc2hpcFwiKTtcbi8vICAgY29uc29sZS5sb2coZ2V0Q3VycmVudGx5UGxhY2luZ1NoaXAoKSk7XG4vLyB9KTtcbi8vIGNvbnN0IHNlZ21lbnRlZF9fZGVzdHJveWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWdtZW50ZWRfX2Rlc3Ryb3llclwiKTtcbi8vIHNlZ21lbnRlZF9fZGVzdHJveWVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xuLy8gc2VnbWVudGVkX19kZXN0cm95ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbi8vICAgaWYgKHNlZ21lbnRlZF9fZGVzdHJveWVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPT0gXCJyb3dcIikge1xuLy8gICAgIHNlZ21lbnRlZF9fZGVzdHJveWVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xuLy8gICAgIHNldERlc3Ryb3llck9yaWVudGF0aW9uKDEpO1xuLy8gICB9IGVsc2UgaWYgKHNlZ21lbnRlZF9fZGVzdHJveWVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPT0gXCJjb2x1bW5cIikge1xuLy8gICAgIHNlZ21lbnRlZF9fZGVzdHJveWVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xuLy8gICAgIHNldERlc3Ryb3llck9yaWVudGF0aW9uKDApO1xuLy8gICB9XG4vLyB9KTtcbi8vIHNlZ21lbnRlZF9fZGVzdHJveWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZnVuY3Rpb24gKCkge1xuLy8gICBzZXRDdXJyZW50bHlQbGFjaW5nU2hpcChcImRlc3Ryb3llclwiKTtcbi8vICAgY29uc29sZS5sb2coZ2V0Q3VycmVudGx5UGxhY2luZ1NoaXAoKSk7XG4vLyB9KTtcbi8vIGNvbnN0IHNlZ21lbnRlZF9fc3VibWFyaW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWdtZW50ZWRfX3N1Ym1hcmluZVwiKTtcbi8vIHNlZ21lbnRlZF9fc3VibWFyaW5lLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xuLy8gc2VnbWVudGVkX19zdWJtYXJpbmUuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbi8vICAgaWYgKHNlZ21lbnRlZF9fc3VibWFyaW5lLnN0eWxlLmZsZXhEaXJlY3Rpb24gPT0gXCJyb3dcIikge1xuLy8gICAgIHNlZ21lbnRlZF9fc3VibWFyaW5lLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xuLy8gICAgIHNldFN1Ym1hcmluZU9yaWVudGF0aW9uKDEpO1xuLy8gICB9IGVsc2UgaWYgKHNlZ21lbnRlZF9fc3VibWFyaW5lLnN0eWxlLmZsZXhEaXJlY3Rpb24gPT0gXCJjb2x1bW5cIikge1xuLy8gICAgIHNlZ21lbnRlZF9fc3VibWFyaW5lLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xuLy8gICAgIHNldFN1Ym1hcmluZU9yaWVudGF0aW9uKDApO1xuLy8gICB9XG4vLyB9KTtcbi8vIHNlZ21lbnRlZF9fc3VibWFyaW5lLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZnVuY3Rpb24gKCkge1xuLy8gICBzZXRDdXJyZW50bHlQbGFjaW5nU2hpcChcInN1Ym1hcmluZVwiKTtcbi8vICAgY29uc29sZS5sb2coZ2V0Q3VycmVudGx5UGxhY2luZ1NoaXAoKSk7XG4vLyB9KTtcbi8vIGNvbnN0IHNlZ21lbnRlZF9fcGF0cm9sYm9hdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VnbWVudGVkX19wYXRyb2xib2F0XCIpO1xuLy8gc2VnbWVudGVkX19wYXRyb2xib2F0LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xuLy8gc2VnbWVudGVkX19wYXRyb2xib2F0LmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4vLyAgIGlmIChzZWdtZW50ZWRfX3BhdHJvbGJvYXQuc3R5bGUuZmxleERpcmVjdGlvbiA9PSBcInJvd1wiKSB7XG4vLyAgICAgc2VnbWVudGVkX19wYXRyb2xib2F0LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xuLy8gICAgIHNldFBhdHJvbGJvYXRPcmllbnRhdGlvbigxKTtcbi8vICAgfSBlbHNlIGlmIChzZWdtZW50ZWRfX3BhdHJvbGJvYXQuc3R5bGUuZmxleERpcmVjdGlvbiA9PSBcImNvbHVtblwiKSB7XG4vLyAgICAgc2VnbWVudGVkX19wYXRyb2xib2F0LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xuLy8gICAgIHNldFBhdHJvbGJvYXRPcmllbnRhdGlvbigwKTtcbi8vICAgfVxuLy8gfSk7XG4vLyBzZWdtZW50ZWRfX3BhdHJvbGJvYXQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBmdW5jdGlvbiAoKSB7XG4vLyAgIHNldEN1cnJlbnRseVBsYWNpbmdTaGlwKFwicGF0cm9sYm9hdFwiKTtcbi8vICAgY29uc29sZS5sb2coZ2V0Q3VycmVudGx5UGxhY2luZ1NoaXAoKSk7XG4vLyB9KTtcbi8vIGNhcnJpZXIuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbi8vICAgLy8gY2Fycmllci5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSg5MGRlZylcIjtcbi8vIH0pO1xuXG4vL2ZpcnN0IHZhbHVlIGlzIHRoZSByb3csIHNlY29uZCB2YWx1ZSBpcyB0aGUgY29sdW1uXG5cbi8vIGxldCBnYW1lYm9hcmQgPSBnYW1lYm9hcmRGYWN0b3J5KCk7XG4vLyBjb25zb2xlLnRhYmxlKGdhbWVib2FyZCk7XG4vLyBnYW1lYm9hcmQucGxhY2VTaGlwKDAsIDAsIDUsIFwiZGVzdHJveWVyXCIpO1xuLy8gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soMCwgMCk7XG4vLyBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjaygwLCAxKTtcbi8vIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKDAsIDIpO1xuLy8gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soMCwgMyk7XG4vLyBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjaygwLCA0KTtcblxuLy9maXJzdCBwYXJhbWV0ZXIgaXMgdGhlIGluZGV4IChvZiB0aGUgYXJyYXkpIHdpdGhpbiBjb29yZGluYXRlIGFycmF5XG4vL3NlY29uZCBwYXJhbWV0ZXIgaXMgdGhlIGluZGV4IChvZiB0aGUgdmFsdWUpIHdpdGhpbiB0aGUgaW5kZXggKG9mIHRoZSBhcnJheSlcbmJ1aWxkSGFyYm9yKCk7XG5nYW1lTG9vcCgpO1xuXG4vLyBsZXQgYm9hcmQgPSBnYW1lYm9hcmRGYWN0b3J5KCk7XG5cbi8vIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuLy8gICByYW5kb21BdHRhY2soYm9hcmQpO1xuLy8gfVxuLy8gY29uc29sZS50YWJsZShib2FyZC5jb29yZGluYXRlcyk7XG5cbi8vIHBsYWNlQ2Fycmllcihjb21wdXRlckJvYXJkKTtcbi8vIHBsYWNlQ2Fycmllcihjb21wdXRlckJvYXJkKTtcbi8vIHBsYWNlQ2Fycmllcihjb21wdXRlckJvYXJkKTtcbi8vIHBsYWNlQ2Fycmllcihjb21wdXRlckJvYXJkKTtcblxuLy8gZ2FtZUxvb3AoKTtcbi8vIGxldCBib2FyZCA9IGdhbWVib2FyZEZhY3RvcnkoKTtcbi8vIGJvYXJkLnBsYWNlU2hpcCgwLCAwLCA1LCBcImRlc3Ryb3llclwiKTtcbi8vIGJvYXJkLnJlY2VpdmVBdHRhY2soMCwgMCk7XG4vLyBib2FyZC5yZWNlaXZlQXR0YWNrKDAsIDEpO1xuLy8gYm9hcmQucmVjZWl2ZUF0dGFjaygwLCAyKTtcbi8vIGJvYXJkLnJlY2VpdmVBdHRhY2soMCwgMyk7XG4vLyBib2FyZC5yZWNlaXZlQXR0YWNrKDAsIDQpO1xuLy8gY29uc29sZS5sb2coYm9hcmQuaXNPdmVyKCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9