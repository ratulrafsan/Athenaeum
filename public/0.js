(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/addAuthor.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/addAuthor.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/action-types */ "./resources/js/store/action-types.js");
/* harmony import */ var _store_mutation_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/mutation-types */ "./resources/js/store/mutation-types.js");
/* harmony import */ var _store_module_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/module-types */ "./resources/js/store/module-types.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "addAuthor",
  props: {
    closeCallback: {
      type: Function
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapState"])(_store_module_types__WEBPACK_IMPORTED_MODULE_2__["default"].AUTHOR, ['newAuthorProcessing', 'newAuthorError', 'newAuthorSuccess'])), {}, {
    displaySuccessToast: {
      get: function get() {
        return this['newAuthorSuccess'];
      },
      set: function set(value) {
        this.$store.commit("".concat(_store_module_types__WEBPACK_IMPORTED_MODULE_2__["default"].AUTHOR, "/").concat(_store_mutation_types__WEBPACK_IMPORTED_MODULE_1__["default"].AUTHOR_NEW_SUCCESS), value);
      }
    },
    displayErrorToast: {
      get: function get() {
        return this['newAuthorError'];
      },
      set: function set(value) {
        this.$store.commit("".concat(_store_module_types__WEBPACK_IMPORTED_MODULE_2__["default"].AUTHOR, "/").concat(_store_mutation_types__WEBPACK_IMPORTED_MODULE_1__["default"].AUTHOR_NEW_ERROR), value);
      }
    }
  }),
  watch: {
    displaySuccessToast: function displaySuccessToast(newValue, oldValue) {
      if (newValue) this.closeCallback();
    }
  },
  data: function data() {
    return {
      name: undefined
    };
  },
  methods: {
    createAuthor: function createAuthor() {
      this.$store.dispatch(_store_action_types__WEBPACK_IMPORTED_MODULE_0__["default"].add_author, this.name);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/addCategory.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/addCategory.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/action-types */ "./resources/js/store/action-types.js");
/* harmony import */ var _store_mutation_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/mutation-types */ "./resources/js/store/mutation-types.js");
/* harmony import */ var _store_module_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/module-types */ "./resources/js/store/module-types.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "addCategory",
  props: {
    closeCallback: {
      type: Function
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapState"])(_store_module_types__WEBPACK_IMPORTED_MODULE_2__["default"].CATEGORY, ['newCategoryProcessing', 'newCategoryError', 'newCategorySuccess'])), {}, {
    displaySuccessToast: {
      get: function get() {
        return this['newCategorySuccess'];
      },
      set: function set(value) {
        this.$store.commit("".concat(_store_module_types__WEBPACK_IMPORTED_MODULE_2__["default"].CATEGORY, "/").concat(_store_mutation_types__WEBPACK_IMPORTED_MODULE_1__["default"].CATEGORY_NEW_SUCCESS), value);
      }
    },
    displayErrorToast: {
      get: function get() {
        return this['newCategoryError'];
      },
      set: function set(value) {
        this.$store.commit("".concat(_store_module_types__WEBPACK_IMPORTED_MODULE_2__["default"].CATEGORY, "/").concat(_store_mutation_types__WEBPACK_IMPORTED_MODULE_1__["default"].CATEGORY_NEW_ERROR), value);
      }
    }
  }),
  watch: {
    displaySuccessToast: function displaySuccessToast(newValue, oldValue) {
      if (newValue) this.closeCallback();
    }
  },
  data: function data() {
    return {
      name: undefined
    };
  },
  methods: {
    createCategory: function createCategory() {
      this.$store.dispatch(_store_action_types__WEBPACK_IMPORTED_MODULE_0__["default"].add_category, this.name);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AddBook.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/AddBook.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _store_getter_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/getter-types */ "./resources/js/store/getter-types.js");
/* harmony import */ var _store_getter_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_store_getter_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_module_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/module-types */ "./resources/js/store/module-types.js");
/* harmony import */ var _store_action_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/action-types */ "./resources/js/store/action-types.js");
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/auth */ "./resources/js/store/auth.js");
/* harmony import */ var _components_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/toolbar */ "./resources/js/components/toolbar.vue");
/* harmony import */ var _components_addAuthor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/addAuthor */ "./resources/js/components/addAuthor.vue");
/* harmony import */ var _components_addCategory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/addCategory */ "./resources/js/components/addCategory.vue");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AddBook",
  components: {
    AddCategory: _components_addCategory__WEBPACK_IMPORTED_MODULE_7__["default"],
    AddAuthor: _components_addAuthor__WEBPACK_IMPORTED_MODULE_6__["default"],
    Toolbar: _components_toolbar__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  props: {
    book: undefined
  },
  created: function created() {
    // If book property is set then load the book info in payload
    if (this.book) {
      this.loadPayloadFromProp();
    }

    this.$store.dispatch(_store_action_types__WEBPACK_IMPORTED_MODULE_3__["default"].load_authors);
    this.$store.dispatch(_store_action_types__WEBPACK_IMPORTED_MODULE_3__["default"].load_categories);
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(_store_module_types__WEBPACK_IMPORTED_MODULE_2__["default"].AUTHOR, [_store_getter_types__WEBPACK_IMPORTED_MODULE_1___default.a.AUTHOR_DATA_PROCESSING, _store_getter_types__WEBPACK_IMPORTED_MODULE_1___default.a.AUTHOR_DATA])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(_store_module_types__WEBPACK_IMPORTED_MODULE_2__["default"].CATEGORY, [_store_getter_types__WEBPACK_IMPORTED_MODULE_1___default.a.CATEGORY_DATA_PROCESSING, _store_getter_types__WEBPACK_IMPORTED_MODULE_1___default.a.CATEGORY_DATA])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(_store_module_types__WEBPACK_IMPORTED_MODULE_2__["default"].BOOK, [_store_getter_types__WEBPACK_IMPORTED_MODULE_1___default.a.BOOK_UPDATE_SUCCESS, _store_getter_types__WEBPACK_IMPORTED_MODULE_1___default.a.BOOK_UPDATE_PROCESSING, _store_getter_types__WEBPACK_IMPORTED_MODULE_1___default.a.BOOK_NEW_SUCCESS, _store_getter_types__WEBPACK_IMPORTED_MODULE_1___default.a.BOOK_NEW_PROCESSING, _store_getter_types__WEBPACK_IMPORTED_MODULE_1___default.a.BOOK_NEW_ERROR, _store_getter_types__WEBPACK_IMPORTED_MODULE_1___default.a.BOOK_UPDATE_ERROR])), {}, {
    getters: function getters() {
      return __webpack_require__(/*! ../store/getter-types */ "./resources/js/store/getter-types.js");
    },
    displaySuccessSnackbar: {
      get: function get() {
        return this[_store_getter_types__WEBPACK_IMPORTED_MODULE_1___default.a.BOOK_NEW_SUCCESS] || this[_store_getter_types__WEBPACK_IMPORTED_MODULE_1___default.a.BOOK_UPDATE_SUCCESS];
      },
      set: function set(val) {// nothing
      }
    },
    displayErrorSnackbar: {
      get: function get() {
        return this[_store_getter_types__WEBPACK_IMPORTED_MODULE_1___default.a.BOOK_NEW_ERROR] || this[_store_getter_types__WEBPACK_IMPORTED_MODULE_1___default.a.BOOK_UPDATE_ERROR];
      },
      set: function set(val) {//nothing
      }
    }
  }),
  data: function data() {
    return {
      payload: {
        id: undefined,
        title: undefined,
        author: undefined,
        publisher: undefined,
        isbn: undefined,
        location: undefined,
        category: undefined,
        language: undefined
      },
      authors: [],
      categories: [],
      shelf: undefined,
      row: undefined,
      drawer: null,
      showAddAuthor: false,
      showAddCategory: false
    };
  },
  methods: {
    resetForm: function resetForm() {
      this.payload = {
        id: undefined,
        title: undefined,
        author: undefined,
        publisher: undefined,
        isbn: undefined,
        location: undefined,
        category: undefined,
        language: undefined
      };
      this.authors = [];
      this.categories = [];
      this.shelf = undefined;
      this.row = undefined;
    },
    loadPayloadFromProp: function loadPayloadFromProp() {
      this.payload = {
        id: this.book.id,
        title: this.book.title,
        author: this.book.author,
        category: this.book.category,
        publisher: this.book.publisher,
        isbn: this.book.isbn,
        location: this.book.location,
        language: this.book.language
      }; // Extract author & category ID

      this.authors = this.book.author.map(function (e) {
        return e.id;
      });
      this.categories = this.book.category.map(function (e) {
        return e.id;
      });

      var _this$book$location$s = this.book.location.split(',').map(function (e) {
        return e.split(':')[1].trim();
      });

      var _this$book$location$s2 = _slicedToArray(_this$book$location$s, 2);

      this.shelf = _this$book$location$s2[0];
      this.row = _this$book$location$s2[1];
    },
    removeAuthorFromSelection: function removeAuthorFromSelection(author) {
      var index = this.authors.indexOf(author.id);
      if (index >= 0) this.authors.splice(index, 1);
    },
    removeCategoryFromSelection: function removeCategoryFromSelection(category) {
      var index = this.categories.indexOf(category.id);
      if (index >= 0) this.categories.splice(index, 1);
    },
    submitBook: function submitBook() {
      this.payload.location = "Shelf: ".concat(this.shelf, ", Row: ").concat(this.row);
      this.payload.author = this.authors;
      this.payload.category = this.categories;

      if (!this.book) {
        this.$store.dispatch(_store_action_types__WEBPACK_IMPORTED_MODULE_3__["default"].add_book, this.payload);
      } else {
        this.$store.dispatch(_store_action_types__WEBPACK_IMPORTED_MODULE_3__["default"].update_book, this.payload);
      }
    },
    closeAddAuthorDialogue: function closeAddAuthorDialogue() {
      this.showAddAuthor = !this.showAddAuthor;
    },
    closeAddCategoryDialogue: function closeAddCategoryDialogue() {
      this.showAddCategory = !this.showAddCategory;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AddBook.vue?vue&type=style&index=0&id=588bde5b&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/AddBook.vue?vue&type=style&index=0&id=588bde5b&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.custom-bg-color-gray[data-v-588bde5b] {\n    background-color: #F2F5F8\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AddBook.vue?vue&type=style&index=0&id=588bde5b&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/AddBook.vue?vue&type=style&index=0&id=588bde5b&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./AddBook.vue?vue&type=style&index=0&id=588bde5b&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AddBook.vue?vue&type=style&index=0&id=588bde5b&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/addAuthor.vue?vue&type=template&id=b45ec45e&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/addAuthor.vue?vue&type=template&id=b45ec45e&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-card",
        [
          _c("v-card-title", [_vm._v(" Add New Author ")]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c("v-text-field", {
                attrs: { label: "Author Name" },
                model: {
                  value: _vm.name,
                  callback: function($$v) {
                    _vm.name = $$v
                  },
                  expression: "name"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-actions",
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "primary" },
                  on: { click: _vm.createAuthor }
                },
                [_vm._v(" Add ")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "warning" },
                  on: { click: _vm.closeCallback }
                },
                [_vm._v(" Cancel ")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: {
            color: "primary",
            right: "",
            timeout: _vm.$store.state.author.notificationTimeout
          },
          model: {
            value: _vm.displaySuccessToast,
            callback: function($$v) {
              _vm.displaySuccessToast = $$v
            },
            expression: "displaySuccessToast"
          }
        },
        [_vm._v("\n        Operation completed successfully\n    ")]
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: {
            color: "red",
            right: "",
            timeout: _vm.$store.state.author.notificationTimeout
          },
          model: {
            value: _vm.displayErrorToast,
            callback: function($$v) {
              _vm.displayErrorToast = $$v
            },
            expression: "displayErrorToast"
          }
        },
        [_vm._v("\n        Operation failed..\n    ")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/addCategory.vue?vue&type=template&id=899f9778&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/addCategory.vue?vue&type=template&id=899f9778&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-card",
        [
          _c("v-card-title", [_vm._v(" Add New Category ")]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c("v-text-field", {
                attrs: { label: "Category Name" },
                model: {
                  value: _vm.name,
                  callback: function($$v) {
                    _vm.name = $$v
                  },
                  expression: "name"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-actions",
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "primary" },
                  on: { click: _vm.createCategory }
                },
                [_vm._v(" Add ")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "warning" },
                  on: { click: _vm.closeCallback }
                },
                [_vm._v(" Cancel ")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: {
            color: "primary",
            right: "",
            timeout: _vm.$store.state.category.notificationTimeout
          },
          model: {
            value: _vm.displaySuccessToast,
            callback: function($$v) {
              _vm.displaySuccessToast = $$v
            },
            expression: "displaySuccessToast"
          }
        },
        [_vm._v("\n        Operation completed successfully\n    ")]
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: {
            color: "red",
            right: "",
            timeout: _vm.$store.state.category.notificationTimeout
          },
          model: {
            value: _vm.displayErrorToast,
            callback: function($$v) {
              _vm.displayErrorToast = $$v
            },
            expression: "displayErrorToast"
          }
        },
        [_vm._v("\n        Operation failed..\n    ")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AddBook.vue?vue&type=template&id=588bde5b&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/AddBook.vue?vue&type=template&id=588bde5b&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-main",
    { staticClass: "custom-bg-color-gray fill-height" },
    [
      _c("toolbar"),
      _vm._v(" "),
      _c(
        "v-container",
        [
          _c(
            "v-card",
            { staticClass: "mt-10 mx-md-12", attrs: { elevation: "1" } },
            [
              _c("v-card-title", [
                _vm._v(" " + _vm._s(_vm.book ? "Edit" : "Add") + " Book ")
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-form",
                    {
                      staticClass: "mx-8",
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.submitBook($event)
                        }
                      }
                    },
                    [
                      _c(
                        "v-row",
                        { staticClass: "mx-1" },
                        [
                          _c("v-text-field", {
                            attrs: { label: "Book Title" },
                            model: {
                              value: _vm.payload.title,
                              callback: function($$v) {
                                _vm.$set(_vm.payload, "title", $$v)
                              },
                              expression: "payload.title"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: { label: "Publisher" },
                                model: {
                                  value: _vm.payload.publisher,
                                  callback: function($$v) {
                                    _vm.$set(_vm.payload, "publisher", $$v)
                                  },
                                  expression: "payload.publisher"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: { label: "ISBN" },
                                model: {
                                  value: _vm.payload.isbn,
                                  callback: function($$v) {
                                    _vm.$set(_vm.payload, "isbn", $$v)
                                  },
                                  expression: "payload.isbn"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "11" } },
                            [
                              _c("v-autocomplete", {
                                attrs: {
                                  disabled: this[
                                    _vm.getters.AUTHOR_DATA_PROCESSING
                                  ],
                                  items: this[_vm.getters.AUTHOR_DATA],
                                  chips: "",
                                  "item-text": "author",
                                  "item-value": "id",
                                  multiple: "",
                                  label: "Authors"
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "selection",
                                    fn: function(data) {
                                      return [
                                        _c(
                                          "v-chip",
                                          _vm._b(
                                            {
                                              attrs: {
                                                "input-value": data.selected,
                                                close: ""
                                              },
                                              on: {
                                                click: data.select,
                                                "click:close": function(
                                                  $event
                                                ) {
                                                  return _vm.removeAuthorFromSelection(
                                                    data.item
                                                  )
                                                }
                                              }
                                            },
                                            "v-chip",
                                            data.attrs,
                                            false
                                          ),
                                          [
                                            _vm._v(
                                              "\n                                        " +
                                                _vm._s(data.item.author) +
                                                "\n                                    "
                                            )
                                          ]
                                        )
                                      ]
                                    }
                                  }
                                ]),
                                model: {
                                  value: _vm.authors,
                                  callback: function($$v) {
                                    _vm.authors = $$v
                                  },
                                  expression: "authors"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "1" } },
                            [
                              _c(
                                "v-tooltip",
                                {
                                  attrs: { bottom: "" },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "activator",
                                      fn: function(ref) {
                                        var on = ref.on
                                        var attrs = ref.attrs
                                        return [
                                          _c(
                                            "v-btn",
                                            _vm._g(
                                              _vm._b(
                                                {
                                                  attrs: { icon: "" },
                                                  on: {
                                                    click: function($event) {
                                                      _vm.showAddAuthor = !_vm.showAddAuthor
                                                    }
                                                  }
                                                },
                                                "v-btn",
                                                attrs,
                                                false
                                              ),
                                              on
                                            ),
                                            [
                                              _c("v-icon", [
                                                _vm._v("mdi-plus-circle")
                                              ])
                                            ],
                                            1
                                          )
                                        ]
                                      }
                                    }
                                  ])
                                },
                                [
                                  _vm._v(" "),
                                  _c("span", [_vm._v(" Add Author")])
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "11" } },
                            [
                              _c("v-autocomplete", {
                                attrs: {
                                  disabled: this[
                                    _vm.getters.CATEGORY_DATA_PROCESSING
                                  ],
                                  items: this[_vm.getters.CATEGORY_DATA],
                                  chips: "",
                                  "item-text": "category",
                                  "item-value": "id",
                                  multiple: "",
                                  label: "Categories"
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "selection",
                                    fn: function(data) {
                                      return [
                                        _c(
                                          "v-chip",
                                          _vm._b(
                                            {
                                              attrs: {
                                                "input-value": data.selected,
                                                close: ""
                                              },
                                              on: {
                                                click: data.select,
                                                "click:close": function(
                                                  $event
                                                ) {
                                                  return _vm.removeCategoryFromSelection(
                                                    data.item
                                                  )
                                                }
                                              }
                                            },
                                            "v-chip",
                                            data.attrs,
                                            false
                                          ),
                                          [
                                            _vm._v(
                                              "\n                                        " +
                                                _vm._s(data.item.category) +
                                                "\n                                    "
                                            )
                                          ]
                                        )
                                      ]
                                    }
                                  }
                                ]),
                                model: {
                                  value: _vm.categories,
                                  callback: function($$v) {
                                    _vm.categories = $$v
                                  },
                                  expression: "categories"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { staticClass: "1" },
                            [
                              _c(
                                "v-tooltip",
                                {
                                  attrs: { bottom: "" },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "activator",
                                      fn: function(ref) {
                                        var on = ref.on
                                        var attrs = ref.attrs
                                        return [
                                          _c(
                                            "v-btn",
                                            _vm._g(
                                              _vm._b(
                                                {
                                                  attrs: { icon: "" },
                                                  on: {
                                                    click: function($event) {
                                                      _vm.showAddCategory = !_vm.showAddCategory
                                                    }
                                                  }
                                                },
                                                "v-btn",
                                                attrs,
                                                false
                                              ),
                                              on
                                            ),
                                            [
                                              _c("v-icon", [
                                                _vm._v("mdi-plus-circle")
                                              ])
                                            ],
                                            1
                                          )
                                        ]
                                      }
                                    }
                                  ])
                                },
                                [
                                  _vm._v(" "),
                                  _c("span", [_vm._v(" Add Category")])
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "4" } },
                            [
                              _c("v-text-field", {
                                attrs: { label: "Shelf Number" },
                                model: {
                                  value: _vm.shelf,
                                  callback: function($$v) {
                                    _vm.shelf = $$v
                                  },
                                  expression: "shelf"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "4" } },
                            [
                              _c("v-text-field", {
                                attrs: { label: "Row Number" },
                                model: {
                                  value: _vm.row,
                                  callback: function($$v) {
                                    _vm.row = $$v
                                  },
                                  expression: "row"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "4" } },
                            [
                              _c("v-text-field", {
                                attrs: { label: "Language" },
                                model: {
                                  value: _vm.payload.language,
                                  callback: function($$v) {
                                    _vm.$set(_vm.payload, "language", $$v)
                                  },
                                  expression: "payload.language"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                color: "primary",
                                type: "submit",
                                loading:
                                  this[_vm.getters.BOOK_NEW_PROCESSING] ||
                                  this[_vm.getters.BOOK_UPDATE_PROCESSING]
                              },
                              on: { click: _vm.submitBook }
                            },
                            [
                              _vm._v(
                                "\n                            Submit\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "warning" },
                              on: { click: _vm.resetForm }
                            },
                            [
                              _vm._v(
                                "\n                            Reset Form\n                        "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { width: "300" },
          model: {
            value: _vm.showAddAuthor,
            callback: function($$v) {
              _vm.showAddAuthor = $$v
            },
            expression: "showAddAuthor"
          }
        },
        [
          _c("AddAuthor", {
            attrs: { "close-callback": _vm.closeAddAuthorDialogue }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { width: "300" },
          model: {
            value: _vm.showAddCategory,
            callback: function($$v) {
              _vm.showAddCategory = $$v
            },
            expression: "showAddCategory"
          }
        },
        [
          _c("AddCategory", {
            attrs: { "close-callback": _vm.closeAddCategoryDialogue }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: {
            color: "primary",
            right: "",
            timeout: _vm.$store.state.book.notificationTimeout
          },
          model: {
            value: _vm.displaySuccessSnackbar,
            callback: function($$v) {
              _vm.displaySuccessSnackbar = $$v
            },
            expression: "displaySuccessSnackbar"
          }
        },
        [_vm._v("\n        Operation completed successfully\n    ")]
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: {
            color: "red",
            right: "",
            timeout: _vm.$store.state.book.notificationTimeout
          },
          model: {
            value: _vm.displayErrorSnackbar,
            callback: function($$v) {
              _vm.displayErrorSnackbar = $$v
            },
            expression: "displayErrorSnackbar"
          }
        },
        [_vm._v("\n        Operation failed..\n    ")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/addAuthor.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/addAuthor.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addAuthor_vue_vue_type_template_id_b45ec45e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addAuthor.vue?vue&type=template&id=b45ec45e&scoped=true& */ "./resources/js/components/addAuthor.vue?vue&type=template&id=b45ec45e&scoped=true&");
/* harmony import */ var _addAuthor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addAuthor.vue?vue&type=script&lang=js& */ "./resources/js/components/addAuthor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _addAuthor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addAuthor_vue_vue_type_template_id_b45ec45e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _addAuthor_vue_vue_type_template_id_b45ec45e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b45ec45e",
  null
  
)

/* vuetify-loader */









_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_6__["VSnackbar"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/addAuthor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/addAuthor.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/addAuthor.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addAuthor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./addAuthor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/addAuthor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addAuthor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/addAuthor.vue?vue&type=template&id=b45ec45e&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/addAuthor.vue?vue&type=template&id=b45ec45e&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addAuthor_vue_vue_type_template_id_b45ec45e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./addAuthor.vue?vue&type=template&id=b45ec45e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/addAuthor.vue?vue&type=template&id=b45ec45e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addAuthor_vue_vue_type_template_id_b45ec45e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addAuthor_vue_vue_type_template_id_b45ec45e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/addCategory.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/addCategory.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addCategory_vue_vue_type_template_id_899f9778_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addCategory.vue?vue&type=template&id=899f9778&scoped=true& */ "./resources/js/components/addCategory.vue?vue&type=template&id=899f9778&scoped=true&");
/* harmony import */ var _addCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addCategory.vue?vue&type=script&lang=js& */ "./resources/js/components/addCategory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _addCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addCategory_vue_vue_type_template_id_899f9778_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _addCategory_vue_vue_type_template_id_899f9778_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "899f9778",
  null
  
)

/* vuetify-loader */









_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_6__["VSnackbar"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/addCategory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/addCategory.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/addCategory.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./addCategory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/addCategory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/addCategory.vue?vue&type=template&id=899f9778&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/addCategory.vue?vue&type=template&id=899f9778&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addCategory_vue_vue_type_template_id_899f9778_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./addCategory.vue?vue&type=template&id=899f9778&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/addCategory.vue?vue&type=template&id=899f9778&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addCategory_vue_vue_type_template_id_899f9778_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addCategory_vue_vue_type_template_id_899f9778_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/AddBook.vue":
/*!****************************************!*\
  !*** ./resources/js/views/AddBook.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddBook_vue_vue_type_template_id_588bde5b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddBook.vue?vue&type=template&id=588bde5b&scoped=true& */ "./resources/js/views/AddBook.vue?vue&type=template&id=588bde5b&scoped=true&");
/* harmony import */ var _AddBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddBook.vue?vue&type=script&lang=js& */ "./resources/js/views/AddBook.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AddBook_vue_vue_type_style_index_0_id_588bde5b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddBook.vue?vue&type=style&index=0&id=588bde5b&scoped=true&lang=css& */ "./resources/js/views/AddBook.vue?vue&type=style&index=0&id=588bde5b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VAutocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VAutocomplete */ "./node_modules/vuetify/lib/components/VAutocomplete/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VMain */ "./node_modules/vuetify/lib/components/VMain/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuetify/lib/components/VTooltip */ "./node_modules/vuetify/lib/components/VTooltip/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AddBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddBook_vue_vue_type_template_id_588bde5b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddBook_vue_vue_type_template_id_588bde5b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "588bde5b",
  null
  
)

/* vuetify-loader */



















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VAutocomplete: vuetify_lib_components_VAutocomplete__WEBPACK_IMPORTED_MODULE_5__["VAutocomplete"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__["VCardTitle"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_8__["VChip"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VContainer"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_10__["VDialog"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_11__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__["VIcon"],VMain: vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_13__["VMain"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VRow"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_14__["VSnackbar"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_15__["VTextField"],VTooltip: vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_16__["VTooltip"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/AddBook.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/AddBook.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/AddBook.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AddBook.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AddBook.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/AddBook.vue?vue&type=style&index=0&id=588bde5b&scoped=true&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/AddBook.vue?vue&type=style&index=0&id=588bde5b&scoped=true&lang=css& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBook_vue_vue_type_style_index_0_id_588bde5b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./AddBook.vue?vue&type=style&index=0&id=588bde5b&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AddBook.vue?vue&type=style&index=0&id=588bde5b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBook_vue_vue_type_style_index_0_id_588bde5b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBook_vue_vue_type_style_index_0_id_588bde5b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBook_vue_vue_type_style_index_0_id_588bde5b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBook_vue_vue_type_style_index_0_id_588bde5b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBook_vue_vue_type_style_index_0_id_588bde5b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/AddBook.vue?vue&type=template&id=588bde5b&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/AddBook.vue?vue&type=template&id=588bde5b&scoped=true& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBook_vue_vue_type_template_id_588bde5b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AddBook.vue?vue&type=template&id=588bde5b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AddBook.vue?vue&type=template&id=588bde5b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBook_vue_vue_type_template_id_588bde5b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBook_vue_vue_type_template_id_588bde5b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);