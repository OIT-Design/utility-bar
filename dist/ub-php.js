/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UtilityBar__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var loadUb = function () {
    function loadUb() {
        _classCallCheck(this, loadUb);

        this.ubScriptSrc = this.scriptSrc;
        this.options = {};
        this.validProps = ['googleCustomSearchCode', 'color', 'maxWidth', 'placeholder', 'showBrick'];

        if (this.ubScriptSrc.length > 0) {
            this.loadOptionsFromScript();
        }

        window._ub = new __WEBPACK_IMPORTED_MODULE_0__UtilityBar__["a" /* default */](this.options);
        window.addEventListener('DOMContentLoaded', function () {

            console.log('0');

            var targetNode = document.body;

            if (targetNode) {

                console.log('1');

                var config = {
                    childList: true,
                    subtree: true
                };

                var obsCallback = function obsCallback(mutationsList) {

                    console.log('2');

                    var myBarPlaceholder = document.getElementById('ncstate-utility-bar');

                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = mutationsList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var mutation = _step.value;


                            console.log('3');

                            if (myBarPlaceholder && !document.getElementsByClassName('ncstate-utility-bar-tools')) {
                                console.log('4');

                                window._ub.render();
                            } else {
                                console.log('5');

                                // Stop observing, we did what we needed
                                observer.disconnect();
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                };
                console.log('6');

                // Create a new observer
                var observer = new MutationObserver(obsCallback);

                // Start observing
                observer.observe(targetNode, config);
            }

            console.log('7');
        }, false);
    }

    _createClass(loadUb, [{
        key: 'loadOptionsFromScript',
        value: function loadOptionsFromScript() {
            var _this = this;

            this.validProps.forEach(function (field) {
                if (_this.getQueryString(field) !== false) {
                    _this.options[field] = _this.getQueryString(field);
                }
            });
        }
    }, {
        key: 'getQueryString',
        value: function getQueryString(field) {
            var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
            var string = reg.exec(this.ubScriptSrc);
            return string ? string[1] : false;
        }
    }, {
        key: 'scriptSrc',
        get: function get() {
            var php = document.querySelector('script[src*="ub.php"]');
            var js = document.querySelector('script[src*="ub-php.js"]');

            return php ? php.getAttribute('src') : js.getAttribute('src');
        }
    }]);

    return loadUb;
}();

new loadUb();

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BarFactory__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_scss__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_es6_object_assign_auto__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_es6_object_assign_auto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_es6_object_assign_auto__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var UtilityBar = function () {
    function UtilityBar(options) {
        _classCallCheck(this, UtilityBar);

        this.options = this.mergeOptions(options);
        this.bar = new __WEBPACK_IMPORTED_MODULE_0__BarFactory__["a" /* default */](this.options);
    }

    _createClass(UtilityBar, [{
        key: 'mergeOptions',
        value: function mergeOptions(options) {
            if (!options || !(typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
                return this.defaults;
            }

            options = this.validate(options);

            return Object.assign(this.defaults, options);
        }
    }, {
        key: 'validate',
        value: function validate(options) {
            var validColors = { "red": true, "black": true, "gray": true };

            if (options.hasOwnProperty('color')) {
                options.color = validColors[options.color] === true ? options.color : 'gray';
            }

            if (options.hasOwnProperty('maxWidth') && isNaN(options.maxWidth)) {
                delete options.maxWidth;
            }

            if (options.hasOwnProperty('showBrick') && parseInt(options.showBrick) !== 0) {
                options.showBrick = 1;
            }

            if (options.hasOwnProperty('placeholder')) {
                // Javascript doesn't convert + to space, so we do it manually.
                options.placeholder = decodeURIComponent(options.placeholder.replace(/\+/g, ' '));
                // Strip illegal characters
                options.placeholder = options.placeholder.replace(/[\"\'\`\<\>]/g, '');

                if (options.placeholder.length < 1) {
                    delete options.placeholder;
                }
            }

            if (options.hasOwnProperty('googleCustomSearchCode')) {
                // Strip illegal characters
                options.googleCustomSearchCode = options.googleCustomSearchCode.replace(/[\"\'\`\<\>]/g, '');

                if (options.googleCustomSearchCode.length < 1) {
                    delete options.googleCustomSearchCode;
                }
            }

            return options;
        }
    }, {
        key: 'render',
        value: function render() {
            this.insertCss();

            var barPlaceholder,
                barContainer = document.getElementById('header-contents');

            if ((barPlaceholder = document.getElementById('ncstate-utility-bar')) && barPlaceholder.parentNode == barContainer) {
                barContainer.replaceChild(this.bar, barPlaceholder);
            } else {
                barContainer.insertBefore(this.bar, barContainer.firstChild);
            }

            this.initBarControls();
        }
    }, {
        key: 'insertCss',
        value: function insertCss() {
            if (this.options.maxWidth !== null) {
                var barcss = document.createElement('style');
                var text = '.ncstate-utility-bar .ncstate-utility-bar-wrapper{ width: 100% !important; max-width: ' + this.options.maxWidth + 'px !important; }';
                barcss.type = 'text/css';

                if (!!(window.attachEvent && !window.opera)) {
                    barcss.styleSheet.cssText = text;
                } else {
                    var styleText = document.createTextNode(text);
                    barcss.appendChild(styleText);
                }

                document.head.appendChild(barcss);
            }
        }
    }, {
        key: 'initBarControls',
        value: function initBarControls() {
            this.toggleBtn = document.getElementById('ncstate-utility-bar-toggle-link'), this.linksPanel = document.getElementsByClassName('ncstate-utility-bar-links')[0], this.firstLink = document.getElementById('ncstate-utility-bar-first-link'), this.hiddenClassPattern = /\bis-hidden\b/g, this.toggleState = 'hidden';

            this.toggleBtn.addEventListener('click', this.handleToggleButton, false);
            this.toggleBtn.addEventListener('keydown', this.handleTabbedNavigation, false);
            this.linksPanel.addEventListener('transitionend', this.handleTransitionEnd, false);
        }
    }, {
        key: 'toggleLinksPanel',
        value: function toggleLinksPanel() {
            var _this = this;

            if (this.toggleState === 'hidden') {
                this.linksPanel.style.display = "block";
                this.toggleBtn.nextElementSibling.style.display = "block";
                setTimeout(function () {
                    _this.linksPanel.className = _this.linksPanel.className.replace(_this.hiddenClassPattern, '');
                }, 10);
                this.toggleState = 'visible';
            } else {
                this.toggleBtn.nextElementSibling.style.display = "none";
                this.linksPanel.className = this.linksPanel.className + 'is-hidden';
                this.toggleState = 'hidden';
            }
        }
    }, {
        key: 'handleToggleButton',
        value: function handleToggleButton(e) {
            e.preventDefault();
            window._ub.toggleLinksPanel();
        }
    }, {
        key: 'handleTabbedNavigation',
        value: function handleTabbedNavigation(e) {
            var key = e.which || e.keyCode;

            if (key === 13) {
                e.preventDefault();
                window._ub.toggleLinksPanel();
            }

            if (window._ub.toggleState === 'visible') {
                e.preventDefault();
                window._ub.firstLink.focus();
            } else {
                window._ub.toggleBtn.focus();
            }
        }
    }, {
        key: 'handleTransitionEnd',
        value: function handleTransitionEnd() {
            if (window._ub.toggleState === 'hidden') {
                window._ub.linksPanel.style.display = "none";
            }
        }
    }, {
        key: 'defaults',
        get: function get() {
            return {
                googleCustomSearchCode: null,
                color: 'gray',
                maxWidth: null,
                placeholder: 'search ncsu.edu',
                showBrick: 0
            };
        }
    }]);

    return UtilityBar;
}();

/* harmony default export */ __webpack_exports__["a"] = (UtilityBar);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__template_html__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__template_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__template_html__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var BarFactory = function () {
    function BarFactory(options) {
        var _this = this;

        _classCallCheck(this, BarFactory);

        this.options = options;
        this.classes = [this.options.color];

        var temp = document.createElement('div');
        temp.innerHTML = this.markup;
        this.bar = temp.firstChild;

        // Add custom search if needed
        if (this.options.googleCustomSearchCode !== null) {
            var searchForm = this.bar.querySelector('.ncstate-utility-bar-search-form');
            var div = document.createElement('div');
            div.innerHTML = '<input id="navcx" name="cx" type="hidden" value="' + this.options.googleCustomSearchCode + '">';
            var field = div.firstChild;

            searchForm.appendChild(field);
        }

        if (this.options.showBrick === 1) {
            this.classes.push('show-brick');
        }

        this.classes.forEach(function (classname) {
            _this.bar.className += ' ' + classname;
        });

        return this.bar;
    }

    _createClass(BarFactory, [{
        key: 'markup',
        get: function get() {
            var markup = __WEBPACK_IMPORTED_MODULE_0__template_html___default.a;
            var regex = /\${(this\.options\.([\w\.]+))?}/g;
            var match = [];

            // Sub any option tokens in the form of ${this.options.XXXX}
            while (match = regex.exec(__WEBPACK_IMPORTED_MODULE_0__template_html___default.a)) {
                markup = markup.replace(match[0], this.options[match[2]]);
            }

            return markup;
        }
    }]);

    return BarFactory;
}();

/* harmony default export */ __webpack_exports__["a"] = (BarFactory);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "<div id=\"ncstate-utility-bar\" class=\"ncstate-utility-bar\" role=\"navigation\" aria-label=\"NC State Brand Utility Bar\">\n    <div class=\"ncstate-utility-bar-tools\">\n        <div class=\"ncstate-utility-bar-wrapper ncstate-utility-bar-wrapper-primary\" id=\"ncstate-utility-bar-wrapper-primary\">\n            <div class=\"ncstate-utility-bar-home\"><a href=\"https://www.ncsu.edu\">NC State Home</a></div>\n            <div class=\"ncstate-utility-bar-options\">\n                <div class=\"ncstate-utility-bar-toggle\"><a id=\"ncstate-utility-bar-toggle-link\" aria-label=\"Toggle resources\" href=\"#\">Resources</a>\n                    <div class=\"indicator\"></div>\n                </div>\n                <div class=\"ncstate-utility-bar-search\" role=\"search\" aria-label=\"${this.options.placeholder}\">\n                    <form action=\"https://www.ncsu.edu/search\" name=\"navsearchform\" class=\"ncstate-utility-bar-search-form\">\n                        <input class=\"ncstate-utility-bar-search-field\" id=\"search-input\" name=\"q\" type=\"search\" placeholder=\"${this.options.placeholder}\" aria-label=\"${this.options.placeholder}\">\n                        <input type=\"submit\" id=\"search-submit\" name=\"search-submit\" value=\"search\" class=\"ncstate-utility-bar-search-submit\">\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"ncstate-utility-bar-links is-hidden\">\n        <div class=\"ncstate-utility-bar-wrapper\">\n            <ul class=\"ncstate-utility-bar-primary-util\">\n                <li class=\"ncstate-utility-bar-primary-util ncstate-utility-bar-directory\"><a href=\"https://projects.ncsu.edu/directory\" id=\"ncstate-utility-bar-first-link\">Campus Directory</a></li>\n                <li class=\"ncstate-utility-bar-primary-util ncstate-utility-bar-mypack\"><a href=\"https://mypack.ncsu.edu/\">MyPack Portal</a></li>\n                <li class=\"ncstate-utility-bar-primary-util ncstate-utility-bar-map\"><a href=\"https://maps.ncsu.edu/\">Campus Map</a></li>\n                <li class=\"ncstate-utility-bar-primary-util ncstate-utility-bar-libraries\"><a href=\"https://www.lib.ncsu.edu/\">Libraries</a></li>\n            </ul>\n            <div class=\"ncstate-utility-bar-sec-util\">\n                <dl>\n                    <dt>Campus Resources</dt>\n                    <dd>\n                        <ul>\n                            <li><a href=\"https://housing.ncsu.edu/\">University Housing</a></li>\n                            <li><a href=\"https://dining.ncsu.edu/\">NC State Dining</a></li>\n                            <li><a href=\"http://shop.bookstore.ncsu.edu/\">Bookstores</a></li>\n                            <li><a href=\"https://ncsu.transloc.com/\">Wolfline Buses</a></li>\n                            <li><a href=\"https://www.ncsu.edu/calendars\">Calendar</a></li>\n                            <li><a href=\"https://www.ncsu.edu/diversity/\">Diversity</a></li>\n                        </ul>\n                    </dd>\n                </dl>\n                <dl>\n                    <dt>Academic Resources</dt>\n                    <dd>\n                        <ul>\n                            <li><a href=\"https://admissions.ncsu.edu/\">Undergraduate Admissions</a></li>\n                            <li><a href=\"https://www.ncsu.edu/academics/departments-a-z/\">Academic Departments</a></li>\n                            <li><a href=\"https://wolfware.ncsu.edu/\">WolfWare/Moodle</a></li>\n                            <li><a href=\"https://global.ncsu.edu/\">Global Engagement</a></li>\n                            <li><a href=\"https://online-distance.ncsu.edu/\">Distance Education</a></li>\n                            <li><a href=\"https://studentservices.ncsu.edu/calendars/academic/\">Academic Calendar</a></li>\n                        </ul>\n                    </dd>\n                </dl>\n                <dl>\n                    <dt>Other Resources</dt>\n                    <dd>\n                        <ul>\n                            <li><a href=\"https://studentservices.ncsu.edu/\">Student Services Center</a></li>\n                            <li><a href=\"https://treasurer.ofb.ncsu.edu/cashier/\">Cashier's Office</a></li>\n                            <li><a href=\"https://registrar.ncsu.edu/\">Registration and Records</a></li>\n                            <li><a href=\"https://studentservices.ncsu.edu/your-money/financial-aid/\">Scholarships and Financial Aid</a></li>\n                            <li><a href=\"https://careers.dasa.ncsu.edu/\">Career Development Center</a></li>\n                            <li><a href=\"https://help.oit.ncsu.edu/\">NC State Help Desk</a></li>\n                        </ul>\n                    </dd>\n                </dl>\n                <dl>\n                    <dt>&nbsp;</dt>\n                    <dd>\n                        <ul>\n                            <li><a href=\"https://oe.ncsu.edu/\">Outreach and Engagement</a></li>\n                            <li><a href=\"https://campaign.ncsu.edu/\">Giving</a></li>\n                            <li><a href=\"https://news.ncsu.edu/\">NC State News</a></li>\n                            <li><a href=\"https://grad.ncsu.edu/\">Graduate School</a></li>\n                            <li><a href=\"https://gmail.ncsu.edu/\">Gmail Access</a></li>\n                            <li><a href=\"https://social.ncsu.edu/\">NC State Social Media</a></li>\n                        </ul>\n                    </dd>\n                </dl>\n            </div>\n        </div>\n    </div>\n</div>";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(8)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./main.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./main.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "html {\n  margin-top: 30px !important; }\n\n* html body {\n  margin-top: 30px !important; }\n\n#ncstate-utility-bar {\n  overflow: hidden;\n  *zoom: 1;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  width: 100%;\n  height: 30px;\n  font-family: UniversRoman, arial, sans-serif;\n  font-size: 14px;\n  line-height: 1;\n  z-index: 99997 !important;\n  overflow: visible; }\n  #ncstate-utility-bar html, #ncstate-utility-bar body, #ncstate-utility-bar div, #ncstate-utility-bar span, #ncstate-utility-bar applet, #ncstate-utility-bar object, #ncstate-utility-bar iframe,\n  #ncstate-utility-bar h1, #ncstate-utility-bar h2, #ncstate-utility-bar h3, #ncstate-utility-bar h4, #ncstate-utility-bar h5, #ncstate-utility-bar h6, #ncstate-utility-bar p, #ncstate-utility-bar blockquote, #ncstate-utility-bar pre,\n  #ncstate-utility-bar a, #ncstate-utility-bar abbr, #ncstate-utility-bar acronym, #ncstate-utility-bar address, #ncstate-utility-bar big, #ncstate-utility-bar cite, #ncstate-utility-bar code,\n  #ncstate-utility-bar del, #ncstate-utility-bar dfn, #ncstate-utility-bar em, #ncstate-utility-bar img, #ncstate-utility-bar ins, #ncstate-utility-bar kbd, #ncstate-utility-bar q, #ncstate-utility-bar s, #ncstate-utility-bar samp,\n  #ncstate-utility-bar small, #ncstate-utility-bar strike, #ncstate-utility-bar strong, #ncstate-utility-bar sub, #ncstate-utility-bar sup, #ncstate-utility-bar tt, #ncstate-utility-bar var,\n  #ncstate-utility-bar b, #ncstate-utility-bar u, #ncstate-utility-bar i, #ncstate-utility-bar center,\n  #ncstate-utility-bar dl, #ncstate-utility-bar dt, #ncstate-utility-bar dd, #ncstate-utility-bar ol, #ncstate-utility-bar ul, #ncstate-utility-bar li,\n  #ncstate-utility-bar fieldset, #ncstate-utility-bar form, #ncstate-utility-bar label, #ncstate-utility-bar legend,\n  #ncstate-utility-bar table, #ncstate-utility-bar caption, #ncstate-utility-bar tbody, #ncstate-utility-bar tfoot, #ncstate-utility-bar thead, #ncstate-utility-bar tr, #ncstate-utility-bar th, #ncstate-utility-bar td,\n  #ncstate-utility-bar article, #ncstate-utility-bar aside, #ncstate-utility-bar canvas, #ncstate-utility-bar details, #ncstate-utility-bar embed,\n  #ncstate-utility-bar figure, #ncstate-utility-bar figcaption, #ncstate-utility-bar footer, #ncstate-utility-bar header, #ncstate-utility-bar hgroup,\n  #ncstate-utility-bar menu, #ncstate-utility-bar nav, #ncstate-utility-bar output, #ncstate-utility-bar ruby, #ncstate-utility-bar section, #ncstate-utility-bar summary,\n  #ncstate-utility-bar time, #ncstate-utility-bar mark, #ncstate-utility-bar audio, #ncstate-utility-bar video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font: inherit;\n    font-size: 100%;\n    vertical-align: baseline; }\n  #ncstate-utility-bar html {\n    line-height: 1; }\n  #ncstate-utility-bar ol, #ncstate-utility-bar ul {\n    list-style: none; }\n  #ncstate-utility-bar table {\n    border-collapse: collapse;\n    border-spacing: 0; }\n  #ncstate-utility-bar caption, #ncstate-utility-bar th, #ncstate-utility-bar td {\n    text-align: left;\n    font-weight: normal;\n    vertical-align: middle; }\n  #ncstate-utility-bar q, #ncstate-utility-bar blockquote {\n    quotes: none; }\n    #ncstate-utility-bar q:before, #ncstate-utility-bar q:after, #ncstate-utility-bar blockquote:before, #ncstate-utility-bar blockquote:after {\n      content: \"\";\n      content: none; }\n  #ncstate-utility-bar a img {\n    border: none; }\n  #ncstate-utility-bar elements-of-type(html5-block) {\n    display: block; }\n  #ncstate-utility-bar input,\n  #ncstate-utility-bar button {\n    font-family: inherit;\n    font-size: inherit;\n    line-height: inherit; }\n  #ncstate-utility-bar *, #ncstate-utility-bar *:before, #ncstate-utility-bar *:after {\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  #ncstate-utility-bar a {\n    color: #ffffff;\n    text-decoration: none; }\n  #ncstate-utility-bar ul li {\n    list-style: none;\n    list-style-type: none; }\n  #ncstate-utility-bar .ncstate-utility-bar-tools {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    width: 100%;\n    height: 30px;\n    z-index: 99999;\n    background: #000; }\n  #ncstate-utility-bar .ncstate-utility-bar-wrapper {\n    margin-right: auto;\n    margin-left: auto;\n    padding-left: 15px;\n    padding-right: 15px; }\n    #ncstate-utility-bar .ncstate-utility-bar-wrapper:before, #ncstate-utility-bar .ncstate-utility-bar-wrapper:after {\n      content: \" \";\n      display: table; }\n    #ncstate-utility-bar .ncstate-utility-bar-wrapper:after {\n      clear: both; }\n    @media (min-width: 768px) {\n      #ncstate-utility-bar .ncstate-utility-bar-wrapper {\n        width: 750px; } }\n    @media (min-width: 992px) {\n      #ncstate-utility-bar .ncstate-utility-bar-wrapper {\n        width: 970px; } }\n    @media (min-width: 1200px) {\n      #ncstate-utility-bar .ncstate-utility-bar-wrapper {\n        width: 1170px; } }\n  #ncstate-utility-bar .ncstate-utility-bar-wrapper-primary {\n    height: 30px;\n    position: relative; }\n  #ncstate-utility-bar .ncstate-utility-bar-links {\n    letter-spacing: 0.02em;\n    background: #333;\n    padding: 0 10px;\n    overflow: auto;\n    transition-property: all;\n    transition-duration: .5s;\n    transform: translate(0, 0);\n    z-index: 99998;\n    position: relative;\n    top: 30px;\n    display: none; }\n    #ncstate-utility-bar .ncstate-utility-bar-links.is-hidden {\n      transform: translate(0, -100%); }\n    #ncstate-utility-bar .ncstate-utility-bar-links ul.ncstate-utility-bar-primary-util li {\n      display: inline-block;\n      padding-top: 2em;\n      padding-bottom: 1em;\n      width: 100%; }\n      #ncstate-utility-bar .ncstate-utility-bar-links ul.ncstate-utility-bar-primary-util li a:hover {\n        text-decoration: underline; }\n      #ncstate-utility-bar .ncstate-utility-bar-links ul.ncstate-utility-bar-primary-util li:before {\n        display: none; }\n      #ncstate-utility-bar .ncstate-utility-bar-links ul.ncstate-utility-bar-primary-util li.ncstate-utility-bar-directory {\n        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDRweCIgaGVpZ2h0PSIxNDRweCIgdmlld0JveD0iMCAwIDE0NCAxNDQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE0NCAxNDQiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIHN0eWxlPSJmaWxsOiAjZmZmOyIgIGQ9Ik03MS44NTcsODEuNjcyYzEyLjk0MSwwLDIzLjQzNS0xMi41MzcsMjMuNDM1LTI4LjAwMmMwLTE1LjQ2Ny0xMC40OTMtMjguMDAzLTIzLjQzNS0yOC4wMDNTNDguNDIzLDM4LjIwMyw0OC40MjMsNTMuNjcKCQlDNDguNDIzLDY5LjEzNSw1OC45MTYsODEuNjcyLDcxLjg1Nyw4MS42NzJ6IE04Ny4yMTUsODYuODA1Yy00LjU4OCwyLjc2OS05LjgxMiw0LjM0Ni0xNS4zNTcsNC4zNDYKCQljLTUuNjc0LDAtMTEuMDE4LTEuNjQ0LTE1LjY4My00LjUzNWwtMzcuMjU2LDEwLjQ3djE5LjcyMmgxMDUuODc3Vjk3LjA4NUw4Ny4yMTUsODYuODA1eiIvPgo8L2c+Cjwvc3ZnPgo=);\n        background-repeat: no-repeat;\n        background-position: left 20px;\n        background-size: 2em;\n        padding-left: 2.75em; }\n      #ncstate-utility-bar .ncstate-utility-bar-links ul.ncstate-utility-bar-primary-util li.ncstate-utility-bar-mypack {\n        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDRweCIgaGVpZ2h0PSIxNDRweCIgdmlld0JveD0iMCAwIDE0NCAxNDQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE0NCAxNDQiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnPgoJCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiAjZmZmOyIgcG9pbnRzPSIxMjUuMDgxLDQ3Ljg0NCAxMjUuMDgxLDI1LjkxNSA3OC4wNDEsMjUuOTE1IDc4LjA0MSwzNS42NjcgODQuODg1LDQ3Ljg0NCAJCSIvPgoJCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiAjZmZmOyIgcG9pbnRzPSI2Ny43NTUsNDMuMTEgMTguOTE5LDQzLjExIDE4LjkxOSwxMTcuMDg1IDEyNS4wODEsMTE3LjA4NSAxMjUuMDgxLDYwLjQ1NyA3Ny41MDUsNjAuNDU3IAkJIi8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==);\n        background-repeat: no-repeat;\n        background-position: left 20px;\n        background-size: 2em;\n        padding-left: 2.75em; }\n      #ncstate-utility-bar .ncstate-utility-bar-links ul.ncstate-utility-bar-primary-util li.ncstate-utility-bar-map {\n        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDRweCIgaGVpZ2h0PSIxNDRweCIgdmlld0JveD0iMCAwIDE0NCAxNDQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE0NCAxNDQiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwb2x5Z29uIHBvaW50cz0iOTAuODIxLDg1LjE5OSA5MC44MjEsNjcuNTUyIDc3Ljg4MSw4NS4xOTkgCSIvPgo8L2c+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6ICNmZmY7IiAgZD0iTTczLjQ4NCwxMTkuMDg1YzAsMCwyOS44MTItNDAuNTM3LDI5LjgxMi02NC40NzRjMC04LjIyNy0zLjIwMi0xNS45NTktOS4wMTktMjEuNzc1CgkJQzg4LjQ2LDI3LjAyLDgwLjcyNywyMy44MTQsNzIuNSwyMy44MTVjLTguMjI2LTAuMDAxLTE1Ljk2LDMuMjAzLTIxLjc3NSw5LjAyMWMtNS44MTcsNS44MTYtOS4wMjEsMTMuNTQ5LTkuMDIxLDIxLjc3NQoJCWMwLDI3LjIsMjkuODExLDY0LjQ3NCwyOS44MTEsNjQuNDc0SDczLjQ4NHogTTU1LjQ1OSw1NC42MTJjMC00LjU1MiwxLjc3Mi04LjgzMyw0Ljk5My0xMi4wNTIKCQljMy4yMTktMy4yMjEsNy40OTctNC45OTQsMTIuMDQ4LTQuOTk0YzQuNTUzLDAsOC44MzIsMS43NzEsMTIuMDUsNC45OTJjMy4yMTgsMy4yMTgsNC45ODksNy40OTgsNC45OTEsMTIuMDUxCgkJYzAsNC41NTQtMS43NzIsOC44MzMtNC45OTMsMTIuMDUzYy0zLjIxOCwzLjIyMS03LjQ5Nyw0Ljk5NC0xMi4wNDksNC45OTRjLTQuNTUzLDAtOC44MzEtMS43NzEtMTIuMDQ5LTQuOTkxCgkJQzU3LjIyOSw2My40NDcsNTUuNDU5LDU5LjE2Niw1NS40NTksNTQuNjEyeiIvPgo8L2c+Cjwvc3ZnPgo=);\n        background-repeat: no-repeat;\n        background-position: left 20px;\n        background-size: 2em;\n        padding-left: 2.75em; }\n      #ncstate-utility-bar .ncstate-utility-bar-links ul.ncstate-utility-bar-primary-util li.ncstate-utility-bar-libraries {\n        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIxNDRweCINCgkgaGVpZ2h0PSIxNDRweCIgdmlld0JveD0iMCAwIDE0NCAxNDQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE0NCAxNDQiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGw9IiNmZmZmZmYiPg0KPGcgaWQ9IkxheWVyXzEiIGRpc3BsYXk9Im5vbmUiPg0KCTxwYXRoIGRpc3BsYXk9ImlubGluZSIgZD0iTTEwMi43NjcsMjguNzE0bC0wLjAwNy0wLjAzYy0yLjU4NiwwLjYyNy02LjYxOSwxLjIzNS05LjM3NS0wLjA4di03Ljc4MWgtMC4wMDRsLTAuODE5LTEuODI5DQoJCWMwLDAtMC40My0wLjY1Mi0xLjM1Ny0wLjc1OWMtMC45MjktMC4xMDctMS43ODMsMC40ODEtMS43ODMsMC40ODFMMzUuMjM0LDQyLjk2OWwwLjAyOSwwLjA2M2wtMC4wMjktMC4wMDV2NzUuMTg1DQoJCWMwLDAsMi45MjIsNC42NDMsNy4xMTUsNi4wMTljNC4xOTMsMS4zNzYsMTEuOTEsMS41NDcsMTEuOTEsMS41NDdWNDguMTEzbC0xMi45OC0zLjk1Nkw5MS4xMzcsMjEuODRWMjlMNTEuOTM5LDQ0Ljk3N2w1LjMsMS45NDgNCgkJdjc3LjI0OGw1MS4wODUtMjAuMzgzVjI2LjU0TDEwMi43NjcsMjguNzE0eiIvPg0KPC9nPg0KPGcgaWQ9IkxheWVyXzIiPg0KCTxnPg0KCQk8cmVjdCB4PSI0OS4yNTIiIHk9Ijk1LjYzMyIgd2lkdGg9IjExLjY3NyIgaGVpZ2h0PSIyNS4yNzkiLz4NCgkJPHBhdGggZD0iTTk1Ljk1OCwxMDQuNjIxSDY0LjYxOXYzLjY5MWgyOS40MjdoMy4zODVoNS44MTVjMS4xMTQsMCwyLjAxOS0wLjkwOCwyLjAxOS0yLjAxOGMwLTEuMTE3LTAuOTA0LTIuMDE4LTIuMDE5LTIuMDE4DQoJCQloLTEuMDM4Vjg5LjgzYzAuMDQxLDAuMDEsMC4wNywwLjAzNywwLjEwOSwwLjAzN2MxLjE3LDAsMi4xMTUtMC45MzYsMi4xMTUtMi4wODhWMjYuNjEzYzAtMS4xNTItMC44NTYtMi4yMzgtMi4wMjYtMi4yMzgNCgkJCWMtMC44OTEsMC0wLjg5MSwwLTIuMDQ4LDAuMDE3SDUxLjU0OGMwLDAtMTAuMDg3LTEuMTUyLTE0LjIxNSwyLjY5MWMtNC4xMjcsMy44NDQtMy41MTUsMTEuNzU3LTMuNTE1LDExLjc1N2wwLjA0OSw1Ny4yDQoJCQljLTAuMDEsMC4xOTctMC4wNTksMC4zODUtMC4wNTksMC41OTJjMCwwLjIwMywwLjA0OCwwLjM5OCwwLjA1OSwwLjZ2MC42bDAuMDUtMC4xMDljMC41NjQsNS45MjQsNS41MDYsMTAuNTkyLDExLjU3MiwxMC41OTINCgkJCWgwLjA3NnYtMy42OTFoLTAuMDc2Yy00LjQwOSwwLTcuOTkzLTMuNTg2LTcuOTkzLTcuOTljMC00LjE5NywzLjI1Ni03LjYwNSw3LjM2OS03LjkzaDUwLjg1TDk1Ljk1OCwxMDQuNjIxeiIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K);\n        background-position: left 20px;\n        background-repeat: no-repeat;\n        background-position: left 23px;\n        background-size: 2em;\n        padding-left: 2.75em; }\n    #ncstate-utility-bar .ncstate-utility-bar-links .ncstate-utility-bar-sec-util {\n      padding: 1.5em 0;\n      padding-bottom: 0.5em; }\n      #ncstate-utility-bar .ncstate-utility-bar-links .ncstate-utility-bar-sec-util dl:last-child {\n        padding-top: 0; }\n        #ncstate-utility-bar .ncstate-utility-bar-links .ncstate-utility-bar-sec-util dl:last-child dt {\n          display: none; }\n      #ncstate-utility-bar .ncstate-utility-bar-links .ncstate-utility-bar-sec-util dl:nth-child(3) {\n        padding-bottom: 0; }\n    #ncstate-utility-bar .ncstate-utility-bar-links dl {\n      line-height: 1.6em;\n      padding: 1.5em; }\n      #ncstate-utility-bar .ncstate-utility-bar-links dl dt {\n        color: #ffffff;\n        padding-bottom: .5em;\n        text-transform: uppercase; }\n        #ncstate-utility-bar .ncstate-utility-bar-links dl dt ul li:before {\n          display: none; }\n        #ncstate-utility-bar .ncstate-utility-bar-links dl dt.ncstate-utility-bar-primary-util {\n          margin-bottom: 1.5em;\n          text-transform: none; }\n      #ncstate-utility-bar .ncstate-utility-bar-links dl dd {\n        font-weight: lighter; }\n        #ncstate-utility-bar .ncstate-utility-bar-links dl dd a {\n          color: #AAA; }\n        #ncstate-utility-bar .ncstate-utility-bar-links dl dd a:hover {\n          text-decoration: underline; }\n        #ncstate-utility-bar .ncstate-utility-bar-links dl dd ul li:before {\n          display: none; }\n  #ncstate-utility-bar .ncstate-utility-bar-home {\n    float: left; }\n    #ncstate-utility-bar .ncstate-utility-bar-home a {\n      display: block;\n      padding: 8px 14px 8px 28px;\n      line-height: 14px;\n      background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDRweCIgaGVpZ2h0PSIxNDRweCIgdmlld0JveD0iMCAwIDE0NCAxNDQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE0NCAxNDQiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cG9seWdvbiBzdHlsZT0iZmlsbDogI2ZmZjsiIHBvaW50cz0iNDkuNDc3LDg1LjY3NiA5MC41MDgsMTI2LjcwOSAxMDQuMTg2LDExMy4wMyA2My4xNTMsNzEuOTk4IDEwNC4xODYsMzAuOTY2IDkwLjUwOCwxNy4yOSAzNS43OTksNzEuOTk4ICIvPgo8L3N2Zz4K);\n      background-repeat: no-repeat;\n      background-position: left;\n      background-size: 1.2em; }\n      #ncstate-utility-bar .ncstate-utility-bar-home a:hover {\n        background-color: #333; }\n  #ncstate-utility-bar .ncstate-utility-bar-options {\n    height: 30px;\n    position: absolute;\n    top: 0px;\n    right: 0px; }\n  #ncstate-utility-bar .ncstate-utility-bar-toggle {\n    float: left; }\n    #ncstate-utility-bar .ncstate-utility-bar-toggle a {\n      display: block;\n      background-color: #c00;\n      background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDRweCIgaGVpZ2h0PSIxNDRweCIgdmlld0JveD0iMCAwIDE0NCAxNDQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE0NCAxNDQiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBzdHlsZT0iZmlsbDogI2ZmZjsiIGQ9Ik0yOC4zMjIsMjguNDM3VjQ1LjdoODcuMzU3VjI4LjQzN0gyOC4zMjJ6IE0yOC4zMjIsMTE1LjU2NGg4Ny4zNTdWOTguMzAySDI4LjMyMlYxMTUuNTY0eiBNMjguMzIyLDgwLjYzM2g4Ny4zNTdWNjMuMzY5CglIMjguMzIyVjgwLjYzM3oiLz4KPC9zdmc+Cg==);\n      background-repeat: no-repeat;\n      background-position: 90% 50%;\n      background-size: 1.78572em;\n      width: 120px;\n      height: 30px;\n      text-transform: uppercase;\n      font-size: 0.8em;\n      line-height: 14px;\n      letter-spacing: 0.02em;\n      padding: 8px 13px; }\n      #ncstate-utility-bar .ncstate-utility-bar-toggle a:hover {\n        background-color: #990000; }\n        #ncstate-utility-bar .ncstate-utility-bar-toggle a:hover + .indicator {\n          border-top: 8px solid #990000; }\n    #ncstate-utility-bar .ncstate-utility-bar-toggle .indicator {\n      width: 0;\n      height: 0;\n      border-left: 8px solid transparent;\n      border-right: 8px solid transparent;\n      border-top: 8px solid #c00;\n      margin: 0 auto -0.5em;\n      display: none; }\n  #ncstate-utility-bar .ncstate-utility-bar-search {\n    overflow: hidden;\n    *zoom: 1;\n    float: left;\n    background: #333; }\n  #ncstate-utility-bar .ncstate-utility-bar-search-submit {\n    float: left;\n    background-color: #333;\n    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDRweCIgaGVpZ2h0PSIxNDRweCIgdmlld0JveD0iMCAwIDE0NCAxNDQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE0NCAxNDQiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBzdHlsZT0iZmlsbDogI2ZmZjsiIGQ9Ik0xMjUuNDA5LDExMi4zODFMOTMuMjk2LDgwLjI2OWM0LjE4MS02LjQ5Myw2LjQzMS0xNC4wNTEsNi40My0yMS45NTVjMC4wMDEtMTAuODY0LTQuMjMtMjEuMDc5LTExLjkxNC0yOC43NgoJQzgwLjEzLDIxLjg3LDY5LjkxNywxNy42NCw1OS4wNTIsMTcuNjRzLTIxLjA3OSw0LjIzLTI4Ljc2MSwxMS45MTRjLTcuNjgzLDcuNjgxLTExLjkxNCwxNy44OTYtMTEuOTEzLDI4Ljc2CgljLTAuMDAxLDEwLjg2NCw0LjIzLDIxLjA3OCwxMS45MTMsMjguNzYxYzcuNjgyLDcuNjgzLDE3Ljg5NywxMS45MTMsMjguNzYxLDExLjkxM2M3LjkwNiwwLDE1LjQ2LTIuMjUsMjEuOTUzLTYuNDMxbDMyLjExMywzMi4xMTUKCUwxMjUuNDA5LDExMi4zODF6IE0zOS45OTQsNzcuMzcxYy01LjA5LTUuMDkxLTcuODk0LTExLjg1OS03Ljg5NC0xOS4wNThjMC03LjIsMi44MDQtMTMuOTY3LDcuODk0LTE5LjA1NwoJYzUuMDkxLTUuMDksMTEuODU4LTcuODk1LDE5LjA1OC03Ljg5NWM3LjE5OCwwLDEzLjk2NSwyLjgwNSwxOS4wNTcsNy44OTVjNS4wOTEsNS4wOSw3Ljg5NCwxMS44NTcsNy44OTQsMTkuMDU3CgljMCw3LjE5OS0yLjgwMywxMy45NjctNy44OTQsMTkuMDU4Yy01LjA5MSw1LjA5LTExLjg1OCw3Ljg5NS0xOS4wNTcsNy44OTVDNTEuODUzLDg1LjI2Niw0NS4wODUsODIuNDYxLDM5Ljk5NCw3Ny4zNzF6Ii8+Cjwvc3ZnPgo=);\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 1.3em;\n    border: none;\n    width: 30px;\n    height: 30px;\n    padding: 0px;\n    border-radius: 0px;\n    /* Make corners not round */\n    -webkit-appearance: none;\n    /* Make corners not round */\n    text-indent: 200%;\n    overflow: hidden;\n    white-space: nowrap; }\n    #ncstate-utility-bar .ncstate-utility-bar-search-submit:hover {\n      cursor: pointer;\n      background-color: #1a1a1a; }\n  #ncstate-utility-bar .ncstate-utility-bar-search-field {\n    float: left;\n    border-radius: 0px;\n    /* Make corners not round */\n    -webkit-appearance: none;\n    /* Make corners not round */\n    background-color: #333;\n    border: none;\n    color: #ffffff;\n    font-size: 13px;\n    width: 150px;\n    padding: 6px;\n    text-align: center;\n    height: 30px;\n    box-sizing: border-box;\n    /* Make form hidden dropdown in mobile */\n    display: none;\n    position: absolute;\n    top: 30px;\n    right: 0; }\n    #ncstate-utility-bar .ncstate-utility-bar-search-field::-webkit-input-placeholder {\n      color: #ffffff;\n      font-size: 13px; }\n    #ncstate-utility-bar .ncstate-utility-bar-search-field:-moz-placeholder {\n      color: #ffffff;\n      font-size: 13px; }\n    #ncstate-utility-bar .ncstate-utility-bar-search-field::-moz-placeholder {\n      color: #ffffff;\n      font-size: 13px; }\n    #ncstate-utility-bar .ncstate-utility-bar-search-field:-ms-input-placeholder {\n      color: #ffffff;\n      font-size: 13px; }\n    #ncstate-utility-bar .ncstate-utility-bar-search-field:focus {\n      background-color: #1a1a1a; }\n      #ncstate-utility-bar .ncstate-utility-bar-search-field:focus::-webkit-input-placeholder {\n        transition: opacity 0.5s ease;\n        opacity: 0; }\n      #ncstate-utility-bar .ncstate-utility-bar-search-field:focus:-moz-placeholder {\n        transition: opacity 0.5s ease;\n        opacity: 0; }\n      #ncstate-utility-bar .ncstate-utility-bar-search-field:focus::-moz-placeholder {\n        transition: opacity 0.5s ease;\n        opacity: 0; }\n      #ncstate-utility-bar .ncstate-utility-bar-search-field:focus:-ms-input-placeholder {\n        transition: opacity 0.5s ease;\n        opacity: 0; }\n\n@media screen and (min-width: 500px) {\n  #ncstate-utility-bar .ncstate-utility-bar-links {\n    overflow: auto;\n    transition-duration: .4s; }\n    #ncstate-utility-bar .ncstate-utility-bar-links dl {\n      width: 50%;\n      display: inline-block; }\n      #ncstate-utility-bar .ncstate-utility-bar-links dl:nth-child(3) {\n        clear: both; }\n      #ncstate-utility-bar .ncstate-utility-bar-links dl dd, #ncstate-utility-bar .ncstate-utility-bar-links dl dt {\n        padding-right: 3%; }\n    #ncstate-utility-bar .ncstate-utility-bar-links ul.ncstate-utility-bar-primary-util {\n      padding-bottom: 1.5em;\n      width: 100%; }\n      #ncstate-utility-bar .ncstate-utility-bar-links ul.ncstate-utility-bar-primary-util li {\n        width: 50%;\n        padding-right: 3%; }\n    #ncstate-utility-bar .ncstate-utility-bar-links .ncstate-utility-bar-sec-util dl:last-child {\n      padding-top: 1.5em; }\n      #ncstate-utility-bar .ncstate-utility-bar-links .ncstate-utility-bar-sec-util dl:last-child dt {\n        display: block; }\n    #ncstate-utility-bar .ncstate-utility-bar-links .ncstate-utility-bar-sec-util dl:nth-child(3) {\n      padding-bottom: 1.5em; }\n  #ncstate-utility-bar .ncstate-utility-bar-search-field {\n    display: block;\n    position: static;\n    top: auto;\n    right: auto; } }\n\n@media screen and (min-width: 800px) {\n  #ncstate-utility-bar .ncstate-utility-bar-links {\n    transition-duration: .3s; }\n    #ncstate-utility-bar .ncstate-utility-bar-links dl {\n      width: 25%;\n      display: inline-block;\n      padding: 0 1.5em;\n      vertical-align: top; }\n      #ncstate-utility-bar .ncstate-utility-bar-links dl:nth-child(3) {\n        clear: none; }\n    #ncstate-utility-bar .ncstate-utility-bar-links ul.ncstate-utility-bar-primary-util {\n      padding-bottom: 0; }\n      #ncstate-utility-bar .ncstate-utility-bar-links ul.ncstate-utility-bar-primary-util li {\n        width: 25%;\n        padding-right: 3%; }\n    #ncstate-utility-bar .ncstate-utility-bar-links .ncstate-utility-bar-sec-util {\n      padding-bottom: 2em; }\n      #ncstate-utility-bar .ncstate-utility-bar-links .ncstate-utility-bar-sec-util dl:last-child {\n        padding-top: 0; }\n      #ncstate-utility-bar .ncstate-utility-bar-links .ncstate-utility-bar-sec-util dl:nth-child(3) {\n        padding-bottom: 0; } }\n\n#ncstate-utility-bar.gray .ncstate-utility-bar-tools {\n  background: #333; }\n\n#ncstate-utility-bar.gray .ncstate-utility-bar-links {\n  background: #1a1a1a; }\n\n#ncstate-utility-bar.gray .ncstate-utility-bar-toggle a {\n  background-color: #c00; }\n  #ncstate-utility-bar.gray .ncstate-utility-bar-toggle a:hover {\n    background-color: #990000; }\n    #ncstate-utility-bar.gray .ncstate-utility-bar-toggle a:hover + .indicator {\n      border-top: 8px solid #990000; }\n\n#ncstate-utility-bar.gray .ncstate-utility-bar-toggle .indicator {\n  border-top: 8px solid #c00; }\n\n#ncstate-utility-bar.gray .ncstate-utility-bar-search {\n  background: #1a1a1a; }\n\n#ncstate-utility-bar.gray .ncstate-utility-bar-search-submit {\n  background-color: #1a1a1a; }\n  #ncstate-utility-bar.gray .ncstate-utility-bar-search-submit:hover {\n    background-color: #2b2b2b; }\n\n#ncstate-utility-bar.gray .ncstate-utility-bar-search-field {\n  background-color: #1a1a1a; }\n  #ncstate-utility-bar.gray .ncstate-utility-bar-search-field:focus {\n    background-color: #2b2b2b; }\n\n#ncstate-utility-bar.gray:not(.show-brick) .ncstate-utility-bar-home a:hover {\n  background-color: #1a1a1a; }\n\n#ncstate-utility-bar.red .ncstate-utility-bar-tools {\n  background: #c00; }\n\n#ncstate-utility-bar.red .ncstate-utility-bar-links {\n  background: #900; }\n  #ncstate-utility-bar.red .ncstate-utility-bar-links dl dd a {\n    color: #ccc; }\n\n#ncstate-utility-bar.red .ncstate-utility-bar-toggle a {\n  background-color: #333; }\n  #ncstate-utility-bar.red .ncstate-utility-bar-toggle a:hover {\n    background-color: #1a1a1a; }\n    #ncstate-utility-bar.red .ncstate-utility-bar-toggle a:hover + .indicator {\n      border-top: 8px solid #1a1a1a; }\n\n#ncstate-utility-bar.red .ncstate-utility-bar-toggle .indicator {\n  border-top: 8px solid #333; }\n\n#ncstate-utility-bar.red .ncstate-utility-bar-search {\n  background: #900; }\n\n#ncstate-utility-bar.red .ncstate-utility-bar-search-submit {\n  background-color: #900; }\n  #ncstate-utility-bar.red .ncstate-utility-bar-search-submit:hover {\n    background-color: #bd0000; }\n\n#ncstate-utility-bar.red .ncstate-utility-bar-search-field {\n  background-color: #900; }\n  #ncstate-utility-bar.red .ncstate-utility-bar-search-field:focus {\n    background-color: #bd0000; }\n\n#ncstate-utility-bar.red:not(.show-brick) .ncstate-utility-bar-home a:hover {\n  background-color: #900; }\n\n#ncstate-utility-bar.show-brick .ncstate-utility-bar-home a {\n  background-image: url(\"https://cdn.ncsu.edu/brand-assets/utility-bar/img/ncstate-brick-2x2-red.jpg\");\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 60px;\n  color: transparent;\n  height: 60px; }\n  #ncstate-utility-bar.show-brick .ncstate-utility-bar-home a:hover {\n    background-color: transparent; }\n\n#ncstate-utility-bar.show-brick ul.ncstate-utility-bar-primary-util {\n  padding-top: 30px; }\n", ""]);

// exports


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(9);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(11).polyfill();


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Code refactored from Mozilla Developer Network:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */



function assign(target, firstSource) {
  if (target === undefined || target === null) {
    throw new TypeError('Cannot convert first argument to object');
  }

  var to = Object(target);
  for (var i = 1; i < arguments.length; i++) {
    var nextSource = arguments[i];
    if (nextSource === undefined || nextSource === null) {
      continue;
    }

    var keysArray = Object.keys(Object(nextSource));
    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
      var nextKey = keysArray[nextIndex];
      var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
      if (desc !== undefined && desc.enumerable) {
        to[nextKey] = nextSource[nextKey];
      }
    }
  }
  return to;
}

function polyfill() {
  if (!Object.assign) {
    Object.defineProperty(Object, 'assign', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: assign
    });
  }
}

module.exports = {
  assign: assign,
  polyfill: polyfill
};


/***/ })
/******/ ]);