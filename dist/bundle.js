/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Attribute/index.js":
/*!*******************************************!*\
  !*** ./src/components/Attribute/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-pdf/renderer */ "@react-pdf/renderer");
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CommonStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CommonStyles */ "./src/components/CommonStyles.js");




var Attribute = function Attribute(_ref) {
  var label = _ref.label,
    value = _ref.value;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.View, {
    style: _CommonStyles__WEBPACK_IMPORTED_MODULE_3__.styles.attributeContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.View, {
    style: _CommonStyles__WEBPACK_IMPORTED_MODULE_3__.styles.attributeLabelContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
    style: _CommonStyles__WEBPACK_IMPORTED_MODULE_3__.styles.attributeLabel
  }, label)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.View, {
    style: _CommonStyles__WEBPACK_IMPORTED_MODULE_3__.styles.attributeValueContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__.Text, {
    style: _CommonStyles__WEBPACK_IMPORTED_MODULE_3__.styles.attributeValue
  }, value)));
};
Attribute.propTypes = {
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().isRequired),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Attribute);

/***/ }),

/***/ "./src/components/CommonStyles.js":
/*!****************************************!*\
  !*** ./src/components/CommonStyles.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles)
/* harmony export */ });
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-pdf/renderer */ "@react-pdf/renderer");
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Constants */ "./src/components/Constants.js");


var styles = _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_0__.StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: _Constants__WEBPACK_IMPORTED_MODULE_1__.MAIN_COLOR,
    width: '2.5in',
    height: '3.5in'
  },
  mainContent: {
    margin: 10,
    padding: 10,
    backgroundColor: _Constants__WEBPACK_IMPORTED_MODULE_1__.WHITE,
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
    borderRadius: 0.4,
    border: 0.4
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  header: {
    padding: 3,
    backgroundColor: _Constants__WEBPACK_IMPORTED_MODULE_1__.MAIN_COLOR,
    color: _Constants__WEBPACK_IMPORTED_MODULE_1__.WHITE,
    borderRadius: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    width: 150
  },
  titleText: {
    fontSize: '11px',
    fontFamily: 'Medium'
  },
  nameText: {
    fontSize: '13px',
    fontFamily: 'Bold'
  },
  rulesText: {
    fontSize: '7.5px',
    fontFamily: 'Regular'
  },
  rulesTextBold: {
    fontSize: '7.5px',
    fontFamily: 'Bold'
  },
  rulesTextSM: {
    fontSize: '6.25px',
    fontFamily: 'Regular'
  },
  typeText: {
    fontSize: '8px',
    fontFamily: 'Bold',
    flex: 4
  },
  costText: {
    fontSize: '8px',
    fontFamily: 'Bold',
    flex: 1
  },
  iconContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    height: 40,
    zIndex: -1
  },
  icon: {
    opacity: 0.5,
    alignSelf: 'center'
  },
  dataSlateContentContainer: {
    flex: 7,
    flexDirection: 'row'
  },
  attributesContainer: {
    marginLeft: -15,
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 50
  },
  attributeContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  attributeLabelContainer: {
    height: 25,
    width: 25,
    borderRadius: '50%',
    backgroundColor: _Constants__WEBPACK_IMPORTED_MODULE_1__.SECONDARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center'
  },
  attributeLabel: {
    color: _Constants__WEBPACK_IMPORTED_MODULE_1__.WHITE,
    fontSize: '11px',
    fontFamily: 'Medium'
  },
  attributeValueContainer: {
    zIndex: -0.5,
    marginLeft: -10,
    paddingLeft: 5,
    height: 20,
    width: 30,
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
    backgroundColor: _Constants__WEBPACK_IMPORTED_MODULE_1__.WHITE,
    borderColor: _Constants__WEBPACK_IMPORTED_MODULE_1__.MAIN_COLOR,
    border: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  attributeValue: {
    color: _Constants__WEBPACK_IMPORTED_MODULE_1__.MAIN_COLOR,
    fontSize: '9px',
    fontFamily: 'Medium'
  },
  abilitiesContainer: {
    flexDirection: 'column',
    flex: 2.25,
    marginRight: -7.5
  }
});

/***/ }),

/***/ "./src/components/Constants.js":
/*!*************************************!*\
  !*** ./src/components/Constants.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GREY": () => (/* binding */ GREY),
/* harmony export */   "KILL_TEAM_NAME": () => (/* binding */ KILL_TEAM_NAME),
/* harmony export */   "MAIN_COLOR": () => (/* binding */ MAIN_COLOR),
/* harmony export */   "SECONDARY_COLOR": () => (/* binding */ SECONDARY_COLOR),
/* harmony export */   "SPLIT_ONE": () => (/* binding */ SPLIT_ONE),
/* harmony export */   "SPLIT_TWO": () => (/* binding */ SPLIT_TWO),
/* harmony export */   "WHITE": () => (/* binding */ WHITE),
/* harmony export */   "dataSlateAttributeKeys": () => (/* binding */ dataSlateAttributeKeys),
/* harmony export */   "weaponProfileAttributeKeys": () => (/* binding */ weaponProfileAttributeKeys)
/* harmony export */ });
var KILL_TEAM_NAME = 'void-dancer-troupe';
var MAIN_COLOR = '#3e669d';
var SECONDARY_COLOR = '#ad271a';
var SPLIT_ONE = '#21C4B9';
var SPLIT_TWO = '#2162C4';
var WHITE = '#fff';
var GREY = '#111';
var dataSlateAttributeKeys = ['m', 'apl', 'ga', 'df', 'sv'];
var weaponProfileAttributeKeys = ['a', 'bs', 'd'];

/***/ }),

/***/ "./src/components/DataSlate/index.js":
/*!*******************************************!*\
  !*** ./src/components/DataSlate/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-pdf/renderer */ "@react-pdf/renderer");
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Constants.js */ "./src/components/Constants.js");
/* harmony import */ var _Attribute_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Attribute/index.js */ "./src/components/Attribute/index.js");
/* harmony import */ var _CommonStyles_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CommonStyles.js */ "./src/components/CommonStyles.js");
/* eslint-disable react/jsx-key */






var DataSlate = function DataSlate(_ref) {
  var dataSlate = _ref.dataSlate;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Page, {
    size: {
      width: '2.5in',
      height: '3.5in'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.View, {
    style: _CommonStyles_js__WEBPACK_IMPORTED_MODULE_5__.styles.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.View, {
    style: _CommonStyles_js__WEBPACK_IMPORTED_MODULE_5__.styles.mainContent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Text, {
    style: [_CommonStyles_js__WEBPACK_IMPORTED_MODULE_5__.styles.nameText, {
      flex: 0.75
    }]
  }, dataSlate.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.View, {
    style: _CommonStyles_js__WEBPACK_IMPORTED_MODULE_5__.styles.dataSlateContentContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.View, {
    style: _CommonStyles_js__WEBPACK_IMPORTED_MODULE_5__.styles.attributesContainer
  }, _Constants_js__WEBPACK_IMPORTED_MODULE_3__.dataSlateAttributeKeys.map(function (key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Attribute_index_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: key.toUpperCase(),
      value: dataSlate[key]
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.View, {
    style: _CommonStyles_js__WEBPACK_IMPORTED_MODULE_5__.styles.abilitiesContainer
  }, dataSlate.abilities.map(function (ability) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.View, {
      key: ability
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Text, {
      style: _CommonStyles_js__WEBPACK_IMPORTED_MODULE_5__.styles.rulesTextBold
    }, ability.split(': ')[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Text, {
      style: _CommonStyles_js__WEBPACK_IMPORTED_MODULE_5__.styles.rulesTextSM
    }, ability.split(': ')[1]));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.View, {
    style: _CommonStyles_js__WEBPACK_IMPORTED_MODULE_5__.styles.iconContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Image, {
    style: _CommonStyles_js__WEBPACK_IMPORTED_MODULE_5__.styles.icon,
    src: "https://www.warhammer-community.com/wp-content/uploads/2018/05/40kHarlequins-May14-Header7jg.jpg",
    allowDangerousPaths: true
  })))));
};
DataSlate.propTypes = {
  dataSlate: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    name: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
    m: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
    apl: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
    ga: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
    df: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
    sv: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
    abilities: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)).isRequired
  }).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataSlate);

/***/ }),

/***/ "./src/components/Equipment/index.js":
/*!*******************************************!*\
  !*** ./src/components/Equipment/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-pdf/renderer */ "@react-pdf/renderer");
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CommonStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CommonStyles */ "./src/components/CommonStyles.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);




var Equipment = function Equipment(_ref) {
  var equipment = _ref.equipment;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Page, {
    size: {
      width: '2.5in',
      height: '3.5in'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.View, {
    style: _CommonStyles__WEBPACK_IMPORTED_MODULE_2__.styles.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.View, {
    style: _CommonStyles__WEBPACK_IMPORTED_MODULE_2__.styles.mainContent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Text, {
    style: [_CommonStyles__WEBPACK_IMPORTED_MODULE_2__.styles.titleText, {
      flex: 1
    }]
  }, equipment.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.View, {
    style: _CommonStyles__WEBPACK_IMPORTED_MODULE_2__.styles.headerContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.View, {
    style: _CommonStyles__WEBPACK_IMPORTED_MODULE_2__.styles.header
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Text, {
    style: _CommonStyles__WEBPACK_IMPORTED_MODULE_2__.styles.typeText
  }, equipment.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Text, {
    style: _CommonStyles__WEBPACK_IMPORTED_MODULE_2__.styles.costText
  }, equipment.cost))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Text, {
    style: [_CommonStyles__WEBPACK_IMPORTED_MODULE_2__.styles.rulesText, {
      flex: 5
    }]
  }, equipment.body), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.View, {
    style: _CommonStyles__WEBPACK_IMPORTED_MODULE_2__.styles.iconContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Image, {
    style: _CommonStyles__WEBPACK_IMPORTED_MODULE_2__.styles.icon,
    src: "https://www.warhammer-community.com/wp-content/uploads/2018/05/40kHarlequins-May14-Header7jg.jpg",
    allowDangerousPaths: true
  })))));
};
Equipment.propTypes = {
  equipment: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    title: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
    type: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
    cost: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
    body: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired)
  }).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Equipment);

/***/ }),

/***/ "./src/components/WeaponProfile/index.js":
/*!***********************************************!*\
  !*** ./src/components/WeaponProfile/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-pdf/renderer */ "@react-pdf/renderer");
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Attribute_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Attribute/index.js */ "./src/components/Attribute/index.js");
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Constants.js */ "./src/components/Constants.js");
/* harmony import */ var _CommonStyles_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CommonStyles.js */ "./src/components/CommonStyles.js");
/* eslint-disable react/jsx-key */






var WeaponProfile = function WeaponProfile(_ref) {
  var weaponProfile = _ref.weaponProfile;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Page, {
    size: {
      width: '2.5in',
      height: '3.5in'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.View, {
    style: _CommonStyles_js__WEBPACK_IMPORTED_MODULE_5__.styles.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.View, {
    style: _CommonStyles_js__WEBPACK_IMPORTED_MODULE_5__.styles.mainContent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Text, {
    style: [_CommonStyles_js__WEBPACK_IMPORTED_MODULE_5__.styles.nameText, {
      flex: 0.75
    }]
  }, weaponProfile.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.View, {
    style: _CommonStyles_js__WEBPACK_IMPORTED_MODULE_5__.styles.dataSlateContentContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.View, {
    style: _CommonStyles_js__WEBPACK_IMPORTED_MODULE_5__.styles.attributesContainer
  }, _Constants_js__WEBPACK_IMPORTED_MODULE_4__.weaponProfileAttributeKeys.map(function (key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Attribute_index_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: key.toUpperCase(),
      value: weaponProfile[key]
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.View, {
    style: _CommonStyles_js__WEBPACK_IMPORTED_MODULE_5__.styles.iconContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Image, {
    style: _CommonStyles_js__WEBPACK_IMPORTED_MODULE_5__.styles.icon,
    src: "https://www.warhammer-community.com/wp-content/uploads/2018/05/40kHarlequins-May14-Header7jg.jpg",
    allowDangerousPaths: true
  })))));
};
WeaponProfile.propTypes = {
  weaponProfile: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    name: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
    a: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
    bs: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
    d: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)
  }).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeaponProfile);

/***/ }),

/***/ "@react-pdf/renderer":
/*!**************************************!*\
  !*** external "@react-pdf/renderer" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@react-pdf/renderer");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-pdf/renderer */ "@react-pdf/renderer");
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Equipment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Equipment */ "./src/components/Equipment/index.js");
/* harmony import */ var _components_DataSlate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/DataSlate */ "./src/components/DataSlate/index.js");
/* harmony import */ var _components_WeaponProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/WeaponProfile */ "./src/components/WeaponProfile/index.js");
/* eslint-disable react/jsx-key */







_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Font.register({
  family: 'Regular',
  src: 'C:/kill-team-cards/assets/Roboto-Regular.ttf'
});
_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Font.register({
  family: 'Bold',
  src: 'C:/kill-team-cards/assets/Roboto-Bold.ttf'
});
_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Font.register({
  family: 'Light',
  src: 'C:/kill-team-cards/assets/Roboto-Light.ttf'
});
_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Font.register({
  family: 'Medium',
  src: 'C:/kill-team-cards/assets/Roboto-Medium.ttf'
});
_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Font.register({
  family: 'mcBold',
  src: 'C:/kill-team-cards/assets/Minion-Cyrillic-Bold.ttf'
});
var killTeamJson = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_2__.readFileSync("C:/kill-team-cards/data/".concat('void-dancer-troupe', ".json")));
var KillTeam = function KillTeam() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Document, null, killTeamJson.dataSlates.reduce(function (weaponProfiles, dataSlate) {
    return weaponProfiles.concat(dataSlate.weaponProfiles);
  }, []).map(function (weaponProfile) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_WeaponProfile__WEBPACK_IMPORTED_MODULE_5__["default"], {
      weaponProfile: weaponProfile
    });
  }), killTeamJson.dataSlates.map(function (dataSlate) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_DataSlate__WEBPACK_IMPORTED_MODULE_4__["default"], {
      dataSlate: dataSlate
    });
  }), killTeamJson.equipment.map(function (equipment) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Equipment__WEBPACK_IMPORTED_MODULE_3__["default"], {
      equipment: equipment
    });
  }), killTeamJson.rareEquipment.map(function (equipment) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Equipment__WEBPACK_IMPORTED_MODULE_3__["default"], {
      equipment: equipment
    });
  }));
};
_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1___default().render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(KillTeam, null), './output/killTeam.pdf', function () {
  return console.log('DONE');
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUUsQ0FDSCxDQUFDdkMsR0FBRyxDQUFDLFVBQUFxQixhQUFhO0lBQUEsb0JBQUksMkRBQUMsaUVBQWE7TUFBQyxhQUFhLEVBQUVBO0lBQWMsRUFBRTtFQUFBLEVBQUMsRUFDckVXLFlBQVksQ0FBQ0ssVUFBVSxDQUFDckMsR0FBRyxDQUFDLFVBQUFGLFNBQVM7SUFBQSxvQkFBSSwyREFBQyw2REFBUztNQUFDLFNBQVMsRUFBRUE7SUFBVSxFQUFFO0VBQUEsRUFBQyxFQUM1RWtDLFlBQVksQ0FBQ2pCLFNBQVMsQ0FBQ2YsR0FBRyxDQUFDLFVBQUFlLFNBQVM7SUFBQSxvQkFBSSwyREFBQyw2REFBUztNQUFDLFNBQVMsRUFBRUE7SUFBVSxFQUFFO0VBQUEsRUFBQyxFQUMzRWlCLFlBQVksQ0FBQ1MsYUFBYSxDQUFDekMsR0FBRyxDQUFDLFVBQUFlLFNBQVM7SUFBQSxvQkFBSSwyREFBQyw2REFBUztNQUFDLFNBQVMsRUFBRUE7SUFBVSxFQUFFO0VBQUEsRUFBQyxDQUN6RTtBQUFBLENBQ1o7QUFFRFUsaUVBQWUsZUFBQywyREFBQyxRQUFRLE9BQUcsRUFBRSx1QkFBdUIsRUFBRTtFQUFBLE9BQU1rQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raWxsdGVhbS8uL3NyYy9jb21wb25lbnRzL0F0dHJpYnV0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9raWxsdGVhbS8uL3NyYy9jb21wb25lbnRzL0NvbW1vblN0eWxlcy5qcyIsIndlYnBhY2s6Ly9raWxsdGVhbS8uL3NyYy9jb21wb25lbnRzL0NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9raWxsdGVhbS8uL3NyYy9jb21wb25lbnRzL0RhdGFTbGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9raWxsdGVhbS8uL3NyYy9jb21wb25lbnRzL0VxdWlwbWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly9raWxsdGVhbS8uL3NyYy9jb21wb25lbnRzL1dlYXBvblByb2ZpbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8va2lsbHRlYW0vZXh0ZXJuYWwgY29tbW9uanMgXCJAcmVhY3QtcGRmL3JlbmRlcmVyXCIiLCJ3ZWJwYWNrOi8va2lsbHRlYW0vZXh0ZXJuYWwgY29tbW9uanMgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8va2lsbHRlYW0vZXh0ZXJuYWwgY29tbW9uanMgXCJyZWFjdFwiIiwid2VicGFjazovL2tpbGx0ZWFtL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJmc1wiIiwid2VicGFjazovL2tpbGx0ZWFtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2tpbGx0ZWFtL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2tpbGx0ZWFtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9raWxsdGVhbS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2tpbGx0ZWFtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8va2lsbHRlYW0vLi9zcmMvcmVuZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgeyBUZXh0LCBWaWV3IH0gZnJvbSAnQHJlYWN0LXBkZi9yZW5kZXJlcidcclxuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi4vQ29tbW9uU3R5bGVzJ1xyXG5cclxuY29uc3QgQXR0cmlidXRlID0gKHsgbGFiZWwsIHZhbHVlIH0pID0+IDxWaWV3IHN0eWxlPXtzdHlsZXMuYXR0cmlidXRlQ29udGFpbmVyfT5cclxuICA8VmlldyBzdHlsZT17c3R5bGVzLmF0dHJpYnV0ZUxhYmVsQ29udGFpbmVyfT5cclxuICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuYXR0cmlidXRlTGFiZWx9PntsYWJlbH08L1RleHQ+XHJcbiAgPC9WaWV3PlxyXG4gIDxWaWV3IHN0eWxlPXtzdHlsZXMuYXR0cmlidXRlVmFsdWVDb250YWluZXJ9PlxyXG4gICAgPFRleHQgc3R5bGU9e3N0eWxlcy5hdHRyaWJ1dGVWYWx1ZX0+e3ZhbHVlfTwvVGV4dD5cclxuICA8L1ZpZXc+XHJcbjwvVmlldz5cclxuXHJcbkF0dHJpYnV0ZS5wcm9wVHlwZXMgPSB7XHJcbiAgbGFiZWw6IFByb3BUeXBlcy5pc1JlcXVpcmVkLFxyXG4gIHZhbHVlOiBQcm9wVHlwZXMuaXNSZXF1aXJlZFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdHRyaWJ1dGVcclxuIiwiaW1wb3J0IHsgU3R5bGVTaGVldCB9IGZyb20gJ0ByZWFjdC1wZGYvcmVuZGVyZXInXHJcbmltcG9ydCB7IE1BSU5fQ09MT1IsIFNFQ09OREFSWV9DT0xPUiwgV0hJVEUgfSBmcm9tICcuL0NvbnN0YW50cydcclxuXHJcbmV4cG9ydCBjb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogTUFJTl9DT0xPUixcclxuICAgIHdpZHRoOiAnMi41aW4nLFxyXG4gICAgaGVpZ2h0OiAnMy41aW4nXHJcbiAgfSxcclxuICBtYWluQ29udGVudDoge1xyXG4gICAgbWFyZ2luOiAxMCxcclxuICAgIHBhZGRpbmc6IDEwLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBXSElURSxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgZmxleDogMSxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBib3JkZXJSYWRpdXM6IDAuNCxcclxuICAgIGJvcmRlcjogMC40XHJcbiAgfSxcclxuICBoZWFkZXJDb250YWluZXI6IHtcclxuICAgIGZsZXg6IDEsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcidcclxuICB9LFxyXG4gIGhlYWRlcjoge1xyXG4gICAgcGFkZGluZzogMyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogTUFJTl9DT0xPUixcclxuICAgIGNvbG9yOiBXSElURSxcclxuICAgIGJvcmRlclJhZGl1czogMC41LFxyXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcclxuICAgIHdpZHRoOiAxNTBcclxuXHJcbiAgfSxcclxuICB0aXRsZVRleHQ6IHtcclxuICAgIGZvbnRTaXplOiAnMTFweCcsXHJcbiAgICBmb250RmFtaWx5OiAnTWVkaXVtJ1xyXG4gIH0sXHJcbiAgbmFtZVRleHQ6IHtcclxuICAgIGZvbnRTaXplOiAnMTNweCcsXHJcbiAgICBmb250RmFtaWx5OiAnQm9sZCdcclxuICB9LFxyXG4gIHJ1bGVzVGV4dDoge1xyXG4gICAgZm9udFNpemU6ICc3LjVweCcsXHJcbiAgICBmb250RmFtaWx5OiAnUmVndWxhcidcclxuICB9LFxyXG4gIHJ1bGVzVGV4dEJvbGQ6IHtcclxuICAgIGZvbnRTaXplOiAnNy41cHgnLFxyXG4gICAgZm9udEZhbWlseTogJ0JvbGQnXHJcbiAgfSxcclxuICBydWxlc1RleHRTTToge1xyXG4gICAgZm9udFNpemU6ICc2LjI1cHgnLFxyXG4gICAgZm9udEZhbWlseTogJ1JlZ3VsYXInXHJcbiAgfSxcclxuICB0eXBlVGV4dDoge1xyXG4gICAgZm9udFNpemU6ICc4cHgnLFxyXG4gICAgZm9udEZhbWlseTogJ0JvbGQnLFxyXG4gICAgZmxleDogNFxyXG5cclxuICB9LFxyXG4gIGNvc3RUZXh0OiB7XHJcbiAgICBmb250U2l6ZTogJzhweCcsXHJcbiAgICBmb250RmFtaWx5OiAnQm9sZCcsXHJcbiAgICBmbGV4OiAxXHJcblxyXG4gIH0sXHJcbiAgaWNvbkNvbnRhaW5lcjoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBib3R0b206IDEwLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHJpZ2h0OiAwLFxyXG4gICAgaGVpZ2h0OiA0MCxcclxuICAgIHpJbmRleDogLTFcclxuICB9LFxyXG4gIGljb246IHtcclxuICAgIG9wYWNpdHk6IDAuNSxcclxuICAgIGFsaWduU2VsZjogJ2NlbnRlcidcclxuICB9LFxyXG4gIGRhdGFTbGF0ZUNvbnRlbnRDb250YWluZXI6IHtcclxuICAgIGZsZXg6IDcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93J1xyXG4gIH0sXHJcbiAgYXR0cmlidXRlc0NvbnRhaW5lcjoge1xyXG4gICAgbWFyZ2luTGVmdDogLTE1LFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBmbGV4OiAxLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIHBhZGRpbmdCb3R0b206IDUwXHJcbiAgfSxcclxuICBhdHRyaWJ1dGVDb250YWluZXI6IHtcclxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcidcclxuICB9LFxyXG4gIGF0dHJpYnV0ZUxhYmVsQ29udGFpbmVyOiB7XHJcbiAgICBoZWlnaHQ6IDI1LFxyXG4gICAgd2lkdGg6IDI1LFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogU0VDT05EQVJZX0NPTE9SLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcidcclxuXHJcbiAgfSxcclxuICBhdHRyaWJ1dGVMYWJlbDoge1xyXG4gICAgY29sb3I6IFdISVRFLFxyXG4gICAgZm9udFNpemU6ICcxMXB4JyxcclxuICAgIGZvbnRGYW1pbHk6ICdNZWRpdW0nXHJcbiAgfSxcclxuICBhdHRyaWJ1dGVWYWx1ZUNvbnRhaW5lcjoge1xyXG4gICAgekluZGV4OiAtMC41LFxyXG4gICAgbWFyZ2luTGVmdDogLTEwLFxyXG4gICAgcGFkZGluZ0xlZnQ6IDUsXHJcbiAgICBoZWlnaHQ6IDIwLFxyXG4gICAgd2lkdGg6IDMwLFxyXG4gICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6ICc1MCUnLFxyXG4gICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6ICc1MCUnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBXSElURSxcclxuICAgIGJvcmRlckNvbG9yOiBNQUlOX0NPTE9SLFxyXG4gICAgYm9yZGVyOiAxLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcidcclxuICB9LFxyXG4gIGF0dHJpYnV0ZVZhbHVlOiB7XHJcbiAgICBjb2xvcjogTUFJTl9DT0xPUixcclxuICAgIGZvbnRTaXplOiAnOXB4JyxcclxuICAgIGZvbnRGYW1pbHk6ICdNZWRpdW0nXHJcbiAgfSxcclxuICBhYmlsaXRpZXNDb250YWluZXI6IHtcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgZmxleDogMi4yNSxcclxuICAgIG1hcmdpblJpZ2h0OiAtNy41XHJcbiAgfVxyXG59KVxyXG4iLCJleHBvcnQgY29uc3QgS0lMTF9URUFNX05BTUUgPSAndm9pZC1kYW5jZXItdHJvdXBlJ1xyXG5leHBvcnQgY29uc3QgTUFJTl9DT0xPUiA9ICcjM2U2NjlkJ1xyXG5leHBvcnQgY29uc3QgU0VDT05EQVJZX0NPTE9SID0gJyNhZDI3MWEnXHJcbmV4cG9ydCBjb25zdCBTUExJVF9PTkUgPSAnIzIxQzRCOSdcclxuZXhwb3J0IGNvbnN0IFNQTElUX1RXTyA9ICcjMjE2MkM0J1xyXG5leHBvcnQgY29uc3QgV0hJVEUgPSAnI2ZmZidcclxuZXhwb3J0IGNvbnN0IEdSRVkgPSAnIzExMSdcclxuZXhwb3J0IGNvbnN0IGRhdGFTbGF0ZUF0dHJpYnV0ZUtleXMgPSBbJ20nLFxyXG4gICdhcGwnLFxyXG4gICdnYScsXHJcbiAgJ2RmJyxcclxuICAnc3YnXVxyXG5leHBvcnQgY29uc3Qgd2VhcG9uUHJvZmlsZUF0dHJpYnV0ZUtleXMgPSBbXHJcbiAgJ2EnLFxyXG4gICdicycsXHJcbiAgJ2QnXHJcbl1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWtleSAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFBhZ2UsIFRleHQsIFZpZXcsIEltYWdlIH0gZnJvbSAnQHJlYWN0LXBkZi9yZW5kZXJlcidcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5cclxuaW1wb3J0IHsgZGF0YVNsYXRlQXR0cmlidXRlS2V5cyB9IGZyb20gJy4uL0NvbnN0YW50cy5qcydcclxuaW1wb3J0IEF0dHJpYnV0ZSBmcm9tICcuLi9BdHRyaWJ1dGUvaW5kZXguanMnXHJcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4uL0NvbW1vblN0eWxlcy5qcydcclxuXHJcbmNvbnN0IERhdGFTbGF0ZSA9ICh7IGRhdGFTbGF0ZSB9KSA9PlxyXG48UGFnZSBzaXplPXt7XHJcbiAgd2lkdGg6ICcyLjVpbicsXHJcbiAgaGVpZ2h0OiAnMy41aW4nXHJcbn19PlxyXG4gIDxWaWV3IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMubWFpbkNvbnRlbnR9PlxyXG4gICAgICA8VGV4dCBzdHlsZT17W3N0eWxlcy5uYW1lVGV4dCwgeyBmbGV4OiAwLjc1IH1dfT57ZGF0YVNsYXRlLm5hbWV9PC9UZXh0PlxyXG4gICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmRhdGFTbGF0ZUNvbnRlbnRDb250YWluZXJ9PlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuYXR0cmlidXRlc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICB7ZGF0YVNsYXRlQXR0cmlidXRlS2V5cy5tYXAoa2V5ID0+XHJcbiAgICAgICAgICAgIDxBdHRyaWJ1dGVcclxuICAgICAgICAgICAgICAgIGxhYmVsPXtrZXkudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhU2xhdGVba2V5XX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuYWJpbGl0aWVzQ29udGFpbmVyfT5cclxuICAgICAgICAgIHtkYXRhU2xhdGUuYWJpbGl0aWVzLm1hcChhYmlsaXR5ID0+IDxWaWV3IGtleT17YWJpbGl0eX0+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMucnVsZXNUZXh0Qm9sZH0+XHJcbiAgICAgICAgICAgICAge2FiaWxpdHkuc3BsaXQoJzogJylbMF19XHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5ydWxlc1RleHRTTX0+XHJcbiAgICAgICAgICAgIHthYmlsaXR5LnNwbGl0KCc6ICcpWzFdfVxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgIDwvVmlldz5cclxuICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5pY29uQ29udGFpbmVyfT5cclxuICAgICAgIDxJbWFnZSBzdHlsZT17c3R5bGVzLmljb259IHNyYz0naHR0cHM6Ly93d3cud2FyaGFtbWVyLWNvbW11bml0eS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDUvNDBrSGFybGVxdWlucy1NYXkxNC1IZWFkZXI3amcuanBnJyBhbGxvd0Rhbmdlcm91c1BhdGhzLz5cclxuICAgICAgPC9WaWV3PlxyXG4gICAgPC9WaWV3PlxyXG4gIDwvVmlldz5cclxuPC9QYWdlPlxyXG5cclxuRGF0YVNsYXRlLnByb3BUeXBlcyA9IHtcclxuICBkYXRhU2xhdGU6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBtOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBhcGw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGdhOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBkZjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgc3Y6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGFiaWxpdGllczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZykuaXNSZXF1aXJlZFxyXG4gIH0pLmlzUmVxdWlyZWRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YVNsYXRlXHJcbiIsIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFBhZ2UsIFRleHQsIFZpZXcsIEltYWdlIH0gZnJvbSAnQHJlYWN0LXBkZi9yZW5kZXJlcidcclxuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi4vQ29tbW9uU3R5bGVzJ1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcblxyXG5jb25zdCBFcXVpcG1lbnQgPSAoeyBlcXVpcG1lbnQgfSkgPT5cclxuPFBhZ2Ugc2l6ZT17e1xyXG4gIHdpZHRoOiAnMi41aW4nLFxyXG4gIGhlaWdodDogJzMuNWluJ1xyXG59fT5cclxuICA8VmlldyBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICA8VmlldyBzdHlsZT17c3R5bGVzLm1haW5Db250ZW50fT5cclxuICAgICAgPFRleHQgc3R5bGU9e1tzdHlsZXMudGl0bGVUZXh0LCB7IGZsZXg6IDEgfV19PntlcXVpcG1lbnQudGl0bGV9PC9UZXh0PlxyXG4gICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmhlYWRlckNvbnRhaW5lcn0+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy50eXBlVGV4dH0+e2VxdWlwbWVudC50eXBlfTwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuY29zdFRleHR9PntlcXVpcG1lbnQuY29zdH08L1RleHQ+XHJcbiAgICAgICAgPC9WaWV3PlxyXG4gICAgICA8L1ZpZXc+XHJcbiAgICAgIDxUZXh0IHN0eWxlPXtbc3R5bGVzLnJ1bGVzVGV4dCwgeyBmbGV4OiA1IH1dfT57ZXF1aXBtZW50LmJvZHl9PC9UZXh0PlxyXG4gICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmljb25Db250YWluZXJ9PlxyXG4gICAgPEltYWdlIHN0eWxlPXtzdHlsZXMuaWNvbn0gc3JjPSdodHRwczovL3d3dy53YXJoYW1tZXItY29tbXVuaXR5LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wNS80MGtIYXJsZXF1aW5zLU1heTE0LUhlYWRlcjdqZy5qcGcnIGFsbG93RGFuZ2Vyb3VzUGF0aHMvPlxyXG4gIDwvVmlldz5cclxuICAgIDwvVmlldz5cclxuICA8L1ZpZXc+XHJcbjwvUGFnZT5cclxuXHJcbkVxdWlwbWVudC5wcm9wVHlwZXMgPSB7XHJcbiAgZXF1aXBtZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGNvc3Q6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGJvZHk6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxyXG4gIH0pLmlzUmVxdWlyZWRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXF1aXBtZW50XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1rZXkgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBQYWdlLCBUZXh0LCBWaWV3LCBJbWFnZSB9IGZyb20gJ0ByZWFjdC1wZGYvcmVuZGVyZXInXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IEF0dHJpYnV0ZSBmcm9tICcuLi9BdHRyaWJ1dGUvaW5kZXguanMnXHJcbmltcG9ydCB7IHdlYXBvblByb2ZpbGVBdHRyaWJ1dGVLZXlzIH0gZnJvbSAnLi4vQ29uc3RhbnRzLmpzJ1xyXG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tICcuLi9Db21tb25TdHlsZXMuanMnXHJcblxyXG5jb25zdCBXZWFwb25Qcm9maWxlID0gKHsgd2VhcG9uUHJvZmlsZSB9KSA9PlxyXG4gICAgPFBhZ2Ugc2l6ZT17e1xyXG4gICAgICB3aWR0aDogJzIuNWluJyxcclxuICAgICAgaGVpZ2h0OiAnMy41aW4nXHJcbiAgICB9fT5cclxuICA8VmlldyBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICA8VmlldyBzdHlsZT17c3R5bGVzLm1haW5Db250ZW50fT5cclxuICAgIDxUZXh0IHN0eWxlPXtbc3R5bGVzLm5hbWVUZXh0LCB7IGZsZXg6IDAuNzUgfV19Pnt3ZWFwb25Qcm9maWxlLm5hbWV9PC9UZXh0PlxyXG4gICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmRhdGFTbGF0ZUNvbnRlbnRDb250YWluZXJ9PlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuYXR0cmlidXRlc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICB7d2VhcG9uUHJvZmlsZUF0dHJpYnV0ZUtleXMubWFwKGtleSA9PlxyXG4gICAgICAgICAgICA8QXR0cmlidXRlXHJcbiAgICAgICAgICAgICAgICBsYWJlbD17a2V5LnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17d2VhcG9uUHJvZmlsZVtrZXldfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgPC9WaWV3PlxyXG4gICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmljb25Db250YWluZXJ9PlxyXG4gICAgICAgPEltYWdlIHN0eWxlPXtzdHlsZXMuaWNvbn0gc3JjPSdodHRwczovL3d3dy53YXJoYW1tZXItY29tbXVuaXR5LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wNS80MGtIYXJsZXF1aW5zLU1heTE0LUhlYWRlcjdqZy5qcGcnIGFsbG93RGFuZ2Vyb3VzUGF0aHMvPlxyXG4gICAgICA8L1ZpZXc+XHJcbiAgICA8L1ZpZXc+XHJcbiAgPC9WaWV3PlxyXG48L1BhZ2U+XHJcblxyXG5XZWFwb25Qcm9maWxlLnByb3BUeXBlcyA9IHtcclxuICB3ZWFwb25Qcm9maWxlOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgYTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgYnM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxyXG4gIH0pLmlzUmVxdWlyZWRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2VhcG9uUHJvZmlsZVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVhY3QtcGRmL3JlbmRlcmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1rZXkgKi9cclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJlYWN0UERGLCB7IERvY3VtZW50LCBGb250IH0gZnJvbSAnQHJlYWN0LXBkZi9yZW5kZXJlcidcclxuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnXHJcbmltcG9ydCBFcXVpcG1lbnQgZnJvbSAnLi9jb21wb25lbnRzL0VxdWlwbWVudCdcclxuaW1wb3J0IERhdGFTbGF0ZSBmcm9tICcuL2NvbXBvbmVudHMvRGF0YVNsYXRlJ1xyXG5pbXBvcnQgV2VhcG9uUHJvZmlsZSBmcm9tICcuL2NvbXBvbmVudHMvV2VhcG9uUHJvZmlsZSdcclxuXHJcbkZvbnQucmVnaXN0ZXIoeyBmYW1pbHk6ICdSZWd1bGFyJywgc3JjOiAnQzova2lsbC10ZWFtLWNhcmRzL2Fzc2V0cy9Sb2JvdG8tUmVndWxhci50dGYnIH0pXHJcbkZvbnQucmVnaXN0ZXIoeyBmYW1pbHk6ICdCb2xkJywgc3JjOiAnQzova2lsbC10ZWFtLWNhcmRzL2Fzc2V0cy9Sb2JvdG8tQm9sZC50dGYnIH0pXHJcbkZvbnQucmVnaXN0ZXIoeyBmYW1pbHk6ICdMaWdodCcsIHNyYzogJ0M6L2tpbGwtdGVhbS1jYXJkcy9hc3NldHMvUm9ib3RvLUxpZ2h0LnR0ZicgfSlcclxuRm9udC5yZWdpc3Rlcih7IGZhbWlseTogJ01lZGl1bScsIHNyYzogJ0M6L2tpbGwtdGVhbS1jYXJkcy9hc3NldHMvUm9ib3RvLU1lZGl1bS50dGYnIH0pXHJcbkZvbnQucmVnaXN0ZXIoeyBmYW1pbHk6ICdtY0JvbGQnLCBzcmM6ICdDOi9raWxsLXRlYW0tY2FyZHMvYXNzZXRzL01pbmlvbi1DeXJpbGxpYy1Cb2xkLnR0ZicgfSlcclxuXHJcbmNvbnN0IGtpbGxUZWFtSnNvbiA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGBDOi9raWxsLXRlYW0tY2FyZHMvZGF0YS8keyd2b2lkLWRhbmNlci10cm91cGUnfS5qc29uYCkpXHJcblxyXG5jb25zdCBLaWxsVGVhbSA9ICgpID0+IChcclxuICA8RG9jdW1lbnQ+XHJcbiAgICAgIHtraWxsVGVhbUpzb24uZGF0YVNsYXRlcy5yZWR1Y2UoXHJcbiAgICAgICAgKHdlYXBvblByb2ZpbGVzLCBkYXRhU2xhdGUpID0+IHdlYXBvblByb2ZpbGVzLmNvbmNhdChkYXRhU2xhdGUud2VhcG9uUHJvZmlsZXMpLFxyXG4gICAgICAgIFtdXHJcbiAgICAgICkubWFwKHdlYXBvblByb2ZpbGUgPT4gPFdlYXBvblByb2ZpbGUgd2VhcG9uUHJvZmlsZT17d2VhcG9uUHJvZmlsZX0vPil9XHJcbiAgICAgIHtraWxsVGVhbUpzb24uZGF0YVNsYXRlcy5tYXAoZGF0YVNsYXRlID0+IDxEYXRhU2xhdGUgZGF0YVNsYXRlPXtkYXRhU2xhdGV9Lz4pfVxyXG4gICAgICB7a2lsbFRlYW1Kc29uLmVxdWlwbWVudC5tYXAoZXF1aXBtZW50ID0+IDxFcXVpcG1lbnQgZXF1aXBtZW50PXtlcXVpcG1lbnR9Lz4pfVxyXG4gICAgICB7a2lsbFRlYW1Kc29uLnJhcmVFcXVpcG1lbnQubWFwKGVxdWlwbWVudCA9PiA8RXF1aXBtZW50IGVxdWlwbWVudD17ZXF1aXBtZW50fS8+KX1cclxuICA8L0RvY3VtZW50PlxyXG4pXHJcblxyXG5SZWFjdFBERi5yZW5kZXIoPEtpbGxUZWFtIC8+LCAnLi9vdXRwdXQva2lsbFRlYW0ucGRmJywgKCkgPT4gY29uc29sZS5sb2coJ0RPTkUnKSlcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiVGV4dCIsIlZpZXciLCJzdHlsZXMiLCJBdHRyaWJ1dGUiLCJsYWJlbCIsInZhbHVlIiwiYXR0cmlidXRlQ29udGFpbmVyIiwiYXR0cmlidXRlTGFiZWxDb250YWluZXIiLCJhdHRyaWJ1dGVMYWJlbCIsImF0dHJpYnV0ZVZhbHVlQ29udGFpbmVyIiwiYXR0cmlidXRlVmFsdWUiLCJwcm9wVHlwZXMiLCJpc1JlcXVpcmVkIiwiU3R5bGVTaGVldCIsIk1BSU5fQ09MT1IiLCJTRUNPTkRBUllfQ09MT1IiLCJXSElURSIsImNyZWF0ZSIsImNvbnRhaW5lciIsImZsZXhEaXJlY3Rpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJ3aWR0aCIsImhlaWdodCIsIm1haW5Db250ZW50IiwibWFyZ2luIiwicGFkZGluZyIsImZsZXgiLCJqdXN0aWZ5Q29udGVudCIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImhlYWRlckNvbnRhaW5lciIsImFsaWduSXRlbXMiLCJoZWFkZXIiLCJjb2xvciIsImFsaWduQ29udGVudCIsInRpdGxlVGV4dCIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsIm5hbWVUZXh0IiwicnVsZXNUZXh0IiwicnVsZXNUZXh0Qm9sZCIsInJ1bGVzVGV4dFNNIiwidHlwZVRleHQiLCJjb3N0VGV4dCIsImljb25Db250YWluZXIiLCJwb3NpdGlvbiIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsInpJbmRleCIsImljb24iLCJvcGFjaXR5IiwiYWxpZ25TZWxmIiwiZGF0YVNsYXRlQ29udGVudENvbnRhaW5lciIsImF0dHJpYnV0ZXNDb250YWluZXIiLCJtYXJnaW5MZWZ0IiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdMZWZ0IiwiYm9yZGVyVG9wUmlnaHRSYWRpdXMiLCJib3JkZXJCb3R0b21SaWdodFJhZGl1cyIsImJvcmRlckNvbG9yIiwiYWJpbGl0aWVzQ29udGFpbmVyIiwibWFyZ2luUmlnaHQiLCJLSUxMX1RFQU1fTkFNRSIsIlNQTElUX09ORSIsIlNQTElUX1RXTyIsIkdSRVkiLCJkYXRhU2xhdGVBdHRyaWJ1dGVLZXlzIiwid2VhcG9uUHJvZmlsZUF0dHJpYnV0ZUtleXMiLCJQYWdlIiwiSW1hZ2UiLCJEYXRhU2xhdGUiLCJkYXRhU2xhdGUiLCJuYW1lIiwibWFwIiwia2V5IiwidG9VcHBlckNhc2UiLCJhYmlsaXRpZXMiLCJhYmlsaXR5Iiwic3BsaXQiLCJzaGFwZSIsInN0cmluZyIsIm0iLCJhcGwiLCJnYSIsImRmIiwic3YiLCJhcnJheU9mIiwiRXF1aXBtZW50IiwiZXF1aXBtZW50IiwidGl0bGUiLCJ0eXBlIiwiY29zdCIsImJvZHkiLCJXZWFwb25Qcm9maWxlIiwid2VhcG9uUHJvZmlsZSIsImEiLCJicyIsImQiLCJSZWFjdFBERiIsIkRvY3VtZW50IiwiRm9udCIsImZzIiwicmVnaXN0ZXIiLCJmYW1pbHkiLCJzcmMiLCJraWxsVGVhbUpzb24iLCJKU09OIiwicGFyc2UiLCJyZWFkRmlsZVN5bmMiLCJLaWxsVGVhbSIsImRhdGFTbGF0ZXMiLCJyZWR1Y2UiLCJ3ZWFwb25Qcm9maWxlcyIsImNvbmNhdCIsInJhcmVFcXVpcG1lbnQiLCJyZW5kZXIiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==