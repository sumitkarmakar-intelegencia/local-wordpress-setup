/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */



/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */



function Edit(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const alignment = ["start", "center", "end"]; // this array set the alignment of heading and paragraph
  const target = ["_blank", "_self"]; // this array set the target on button click

  const [fontFamiliesInThemeOption, setFontFamiliesInThemeOption] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
  const [fontWeightsInThemeOption, setFontWeightsInThemeOption] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)(new Set([]));
  const handleButtonClassOnChange = newValue => {
    setAttributes({
      iconClass: newValue
    });
  };
  let fontWeightsLabels = [{
    label: "Thin",
    value: "100"
  }, {
    label: "ExtraLight",
    value: "200"
  }, {
    label: "Light",
    value: "300"
  }, {
    label: "Regular",
    value: "400"
  }, {
    label: "Medium",
    value: "500"
  }, {
    label: "SemiBold",
    value: "600"
  }, {
    label: "Bold",
    value: "700"
  }, {
    label: "ExtraBold",
    value: "800"
  }, {
    label: "Black",
    value: "900"
  }, {
    label: "ExtraBlack",
    value: "950"
  }];
  const btnStyle = {
    "--btn-text-color": attributes.btntextColor,
    "--btn-outline-color": attributes.btnoutlineColor,
    "--border-radius": attributes.borderRadius + "rem",
    "--border-width": attributes.borderWidth + "rem",
    "--btn-background-color": attributes.btnbackgroundColor,
    "--btn-hover-color": attributes.btnHoverColor,
    "--btn-hover-text-color": attributes.btnHoverTextColor,
    "--btn-padding-left": attributes.bttnPaddingX + "rem",
    "--btn-padding-right": attributes.bttnPaddingX + "rem",
    "--btn-padding-top": attributes.bttnPaddingY + "rem",
    "--btn-padding-bottom": attributes.bttnPaddingY + "rem"
  };
  const btnIconStyle = {
    "--btn-outline-icon-color": attributes.btnoutlineIconColor,
    "--btn-icon-color": attributes.btnIconColor,
    "--border-icon-width": attributes.borderIconWidth + "rem",
    "--btn-icon-background-color": attributes.btnIconbackgroundColor,
    "--btn-icon-margin-left": attributes.btnIconMarginLeft + "rem",
    "--border-icon-radius": attributes.borderIconRadius + "rem",
    "--btn-padding-icon-left": attributes.bttnIconPaddingX + "rem",
    "--btn-padding-icon-right": attributes.bttnIconPaddingX + "rem",
    "--btn-padding-icon-top": attributes.bttnIconPaddingY + "rem",
    "--btn-padding-icon-bottom": attributes.bttnIconPaddingY + "rem",
    "--btn-icon-hover-color": attributes.btnIconHoverColor,
    "--btn-icon-hover-background-color": attributes.btnIconHoverbackgroundColor
  };
  async function fetchThemeData() {
    try {
      let childThemeName = await fetchWpData();
      const response = await fetch(`/wp-content/themes/${childThemeName}/theme.json`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    } catch (error) {
      console.error("There was a problem fetching the theme data:", error);
    }
  }
  async function fetchWpData() {
    try {
      let response = await fetch("/wp-json/v2/active-theme");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      response = await response.json();
      let themeURL = await response.theme_url;
      let segment = themeURL.split('/');
      let themeIndex = segment.indexOf('themes');
      return segment[themeIndex + 1];
    } catch (error) {
      console.error("There was a problem fetching the theme data:", error);
    }
  }
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    async function getThemeData() {
      let theme = await fetchThemeData();
      let fontFamilies = theme.settings.typography.fontFamilies;
      let fontfamilies = fontFamilies.map(font => {
        return {
          label: font.name,
          value: font.fontFamily
        };
      });
      setFontFamiliesInThemeOption([...fontFamiliesInThemeOption, ...fontfamilies]);
      const newFontWeights = new Set();
      fontFamilies.forEach(font => {
        font.fontFace.forEach(face => {
          if (face.fontWeight) {
            newFontWeights.add(face.fontWeight);
          }
        });
      });
      let Fontweights = fontWeightsLabels.filter(weight => {
        return Array.from(newFontWeights).includes(weight.value);
      });
      setFontWeightsInThemeOption([...fontWeightsInThemeOption, ...Fontweights]);
    }
    getThemeData();
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Button Settings", "input-text-wp"),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: "Button text",
    onChange: btntext => setAttributes({
      btntext
    }),
    value: attributes.btntext
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: "Button Color",
    className: "p-0 mb-4 border-0",
    colorSettings: [{
      label: "Button Text Color",
      value: attributes.btntextColor,
      onChange: newColor => setAttributes({
        btntextColor: newColor
      })
    }, {
      label: "Background Color",
      value: attributes.btnbackgroundColor,
      onChange: newColor => setAttributes({
        btnbackgroundColor: newColor
      })
    }]
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings // this will set the paragraph text and background color
  , {
    title: " Border",
    className: "p-0 mb-4 border-0",
    colorSettings: [{
      label: "Border Color",
      value: attributes.btnoutlineColor,
      onChange: newColor => setAttributes({
        btnoutlineColor: newColor
      })
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: "Padding-X (rem)",
    value: attributes.bttnPaddingX,
    onChange: newPadding => setAttributes({
      bttnPaddingX: newPadding
    }),
    min: 0,
    max: 10,
    step: 0.01
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: "Padding-Y (rem)",
    value: attributes.bttnPaddingY,
    onChange: newPadding => setAttributes({
      bttnPaddingY: newPadding
    }),
    min: 0,
    max: 10,
    step: 0.01
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: "Border Radius(rem)",
    value: attributes.borderRadius,
    onChange: newborderRadius => setAttributes({
      borderRadius: newborderRadius
    }),
    min: 0,
    max: 10,
    step: 0.01
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: "Border Width (rem)",
    value: attributes.borderWidth,
    onChange: newborderWidth => setAttributes({
      borderWidth: newborderWidth
    }),
    min: 0,
    max: 10,
    step: 0.01
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: "Button Hover",
    className: "p-0 mb-4 border-0",
    colorSettings: [{
      label: "Background Color",
      value: attributes.btnHoverColor,
      onChange: newColor => setAttributes({
        btnHoverColor: newColor
      })
    }, {
      label: "Text Color",
      value: attributes.btnHoverTextColor,
      onChange: newColor => setAttributes({
        btnHoverTextColor: newColor
      })
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "mb-3"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Button Alignment")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "btn-group mb-4"
  }, alignment.map(value => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    key: value,
    onClick: () => setAttributes({
      btnAlign: value
    }),
    className: `btn btn-sm text-black btn-outline-primary ${attributes.btnAlign === value ? "btn-primary" : ""}`
  }, value))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: "Button URL",
    onChange: btnurl => setAttributes({
      btnurl
    }),
    value: attributes.btnurl,
    help: "Click this button to open the modal window.# (hash) will be added to the URL to indicate the modal's active state."
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "mb-3"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Button target link")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "btn-group"
  }, target.map(value => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    key: value,
    onClick: () => setAttributes({
      btnlinkTarget: value
    }),
    className: `btn btn-sm text-black btn-outline-primary ${attributes.btnlinkTarget === value ? "btn-primary" : ""}`
  }, value)))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Button Icon Settings", "input-text-wp"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    className: "mt-3",
    label: "Show Button Icon",
    checked: attributes.showButtonIcon,
    onChange: newValue => {
      setAttributes({
        showButtonIcon: newValue
      });
    }
  }), attributes.showButtonIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: "Button Icon Color",
    className: "p-0 mb-4 border-0",
    colorSettings: [{
      label: "Icon Color",
      value: attributes.btnIconColor,
      onChange: newColor => setAttributes({
        btnIconColor: newColor
      })
    }, {
      label: "Icon Background Color",
      value: attributes.btnIconbackgroundColor,
      onChange: newColor => setAttributes({
        btnIconbackgroundColor: newColor
      })
    }]
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: "Button Icon Hover Color",
    className: "p-0 mb-4 border-0",
    colorSettings: [{
      label: "Icon Hover Color",
      value: attributes.btnIconHoverColor,
      onChange: newColor => setAttributes({
        btnIconHoverColor: newColor
      })
    }, {
      label: "Icon Hover Background Color",
      value: attributes.btnIconHoverbackgroundColor,
      onChange: newColor => setAttributes({
        btnIconHoverbackgroundColor: newColor
      })
    }]
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings // this will set the paragraph text and background color
  , {
    title: "Border Icon Outline",
    className: "p-0 mb-4 border-0",
    colorSettings: [{
      label: " Border Icon Outline Color",
      value: attributes.btnoutlineIconColor,
      onChange: newColor => setAttributes({
        btnoutlineIconColor: newColor
      })
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: "Padding-X (rem)",
    value: attributes.bttnIconPaddingX,
    onChange: newPadding => setAttributes({
      bttnIconPaddingX: newPadding
    }),
    min: 0,
    max: 10,
    step: 0.01
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: "Padding-Y (rem)",
    value: attributes.bttnIconPaddingY,
    onChange: newPadding => setAttributes({
      bttnIconPaddingY: newPadding
    }),
    min: 0,
    max: 10,
    step: 0.01
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: "Border Radius(rem)",
    value: attributes.borderIconRadius,
    onChange: newborderRadius => setAttributes({
      borderIconRadius: newborderRadius
    }),
    min: 0,
    max: 10,
    step: 0.01
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: "Border Width (rem)",
    value: attributes.borderIconWidth,
    onChange: newborderWidth => setAttributes({
      borderIconWidth: newborderWidth
    }),
    min: 0,
    max: 10,
    step: 0.01
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: "Margin Left (rem)",
    value: attributes.btnIconMarginLeft,
    onChange: newborderWidth => setAttributes({
      btnIconMarginLeft: newborderWidth
    }),
    min: 0,
    max: 10,
    step: 0.01
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: "Custom Settings",
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Icon Class', 'icons'),
    value: attributes.iconClass,
    options: [{
      label: 'Default',
      value: 'default'
    }, {
      label: 'With Icon',
      value: 'cta-with-icon'
    }],
    onChange: handleButtonClassOnChange
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `d-flex justify-content-${attributes.btnAlign}`,
    style: btnStyle
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: `${attributes.btnurl}`,
    target: `${attributes.btnlinkTarget}`,
    rel: "noopener",
    className: "d-flex justify-content-center btn-arrow-together richtext-button"
  }, attributes.btntext ? `${attributes.btntext}` : "Add text...", attributes.showButtonIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: `richtext-arrow d-flex `,
    style: btnIconStyle
  })))));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
function save(props) {
  const {
    attributes
  } = props;
  const btnStyle = {
    "--btn-text-color": attributes.btntextColor,
    "--btn-outline-color": attributes.btnoutlineColor,
    "--border-radius": attributes.borderRadius + "rem",
    "--border-width": attributes.borderWidth + "rem",
    "--btn-background-color": attributes.btnbackgroundColor,
    "--btn-hover-color": attributes.btnHoverColor,
    "--btn-hover-text-color": attributes.btnHoverTextColor,
    "--btn-padding-left": attributes.bttnPaddingX + "rem",
    "--btn-padding-right": attributes.bttnPaddingX + "rem",
    "--btn-padding-top": attributes.bttnPaddingY + "rem",
    "--btn-padding-bottom": attributes.bttnPaddingY + "rem"
  };
  const btnIconStyle = {
    "--btn-outline-icon-color": attributes.btnoutlineIconColor,
    "--btn-icon-color": attributes.btnIconColor,
    "--border-icon-width": attributes.borderIconWidth + "rem",
    "--btn-icon-background-color": attributes.btnIconbackgroundColor,
    "--btn-icon-margin-left": attributes.btnIconMarginLeft + "rem",
    "--border-icon-radius": attributes.borderIconRadius + "rem",
    "--btn-padding-icon-left": attributes.bttnIconPaddingX + "rem",
    "--btn-padding-icon-right": attributes.bttnIconPaddingX + "rem",
    "--btn-padding-icon-top": attributes.bttnIconPaddingY + "rem",
    "--btn-padding-icon-bottom": attributes.bttnIconPaddingY + "rem",
    "--btn-icon-hover-color": attributes.btnIconHoverColor,
    "--btn-icon-hover-background-color": attributes.btnIconHoverbackgroundColor
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `border-0 d-flex justify-content-${attributes.btnAlign}`,
    style: btnStyle
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: `${attributes.btnurl}`,
    target: `${attributes.btnlinkTarget}`,
    rel: "noopener",
    className: `d-flex justify-content-center btn-arrow-together richtext-button ${attributes.iconClass}`
  }, attributes.btntext ? `${attributes.btntext}` : "Add text...", attributes.showButtonIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: `richtext-arrow d-flex `,
    style: btnIconStyle
  }))));
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/gus-button","version":"0.1.0","title":"Gus Button","category":"gus-blocks","icon":"button","description":"Add any button.","example":{},"supports":{"html":false,"align":["wide","full"],"spacing":{"margin":true,"padding":true},"className":true},"attributes":{"btntext":{"type":"string"},"btntextAlign":{"type":"string"},"btnurl":{"type":"string","default":""},"btnlinkTarget":{"type":"string","default":"_self"},"btnbackgroundColor":{"type":"string","default":"#ffffff"},"btnoutlineColor":{"type":"string","default":"#000"},"bttnPaddingX":{"type":"number","default":1},"bttnPaddingY":{"type":"number","default":0.1},"borderWidth":{"type":"number","default":0.1},"borderRadius":{"type":"number","default":0},"btntextColor":{"type":"string","default":"#000"},"btnHoverColor":{"type":"string","default":"#ffffff"},"btnHoverTextColor":{"type":"string","default":"#000"},"btnAlign":{"type":"string","default":"start"},"iconClass":{"type":"string","default":"default"},"showButtonIcon":{"type":"boolean","default":false},"btnIconColor":{"type":"string","default":"#ffffff"},"btnIconbackgroundColor":{"type":"string","default":"#000000"},"btnIconHoverColor":{"type":"string","default":"#ffffff"},"btnIconHoverbackgroundColor":{"type":"string","default":"#000000"},"btnoutlineIconColor":{"type":"string","default":"#000"},"bttnIconPaddingX":{"type":"number","default":1},"bttnIconPaddingY":{"type":"number","default":0.1},"borderIconRadius":{"type":"number","default":0.1},"borderIconWidth":{"type":"number","default":0.1},"btnIconMarginLeft":{"type":"number","default":0}},"textdomain":"gus-button","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkgus_button"] = globalThis["webpackChunkgus_button"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map