webpackJsonp([0],{

/***/ "63wf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getHints;
function getHints(selectedBlock) {
  var hints = [];
  if (selectedBlock != null) {
    if (selectedBlock.name === 'p') {
      console.log('hi');
      // 「テキスト」を表示
      hints.push({
        type: 'endTag',
        name: '>',
        comment: '閉じる'
      });
    } else if (selectedBlock.name === 'a') {
      console.log('hi');
      // 「テキスト」を表示
      hints.push({
        type: 'attribute',
        name: 'href',
        comment: 'URLを入力'
      });
    } else if (selectedBlock.name === 'HTML') {
      console.log('html');
      // 「テキスト」を表示
      hints.push({
        type: 'tag',
        name: 'a',
        comment: 'リンク'
      });
      hints.push({
        type: 'tag',
        name: 'p',
        comment: '文字'
      });
      hints.push({
        type: 'tag',
        name: 'img',
        comment: '画像'
      });
      hints.push({
        type: 'tag',
        name: 'input',
        comment: 'ボタン'
      });
      hints.push({
        type: 'tag',
        name: 'hr',
        comment: '線'
      });
      hints.push({
        type: 'tag',
        name: 'h1',
        comment: '題名'
      });
    } else if (selectedBlock.name === 'href') {
      console.log('hi');
      // 「テキスト」を表示
      hints.push({
        type: 'value',
        value: '画像'
      });
    } else if (selectedBlock.type === 'text') {
      console.log('hi');
      // 「テキスト」を表示
      hints.push({
        type: 'endTag',
        name: '>',
        comment: '閉じる'
      });
      hints.push({
        type: 'tag',
        name: 'br',
        comment: '文字を改行'
      });
      hints.push({
        type: 'closeTag',
        name: '/p',
        comment: 'pタグを閉じる'
      });
      hints.push({
        type: 'closeTag',
        name: '/a',
        comment: 'aタグを閉じる'
      });
    } else if (selectedBlock.type === 'value') {
      console.log('hi');
      // 「テキスト」を表示
      hints.push({
        type: 'endTag',
        name: '>',
        comment: '閉じる'
      });
    } else if (selectedBlock.name === 'br') {
      console.log('hi');
      // 「テキスト」を表示
      hints.push({
        type: 'endTag',
        name: '>',
        comment: '閉じる'
      });
    } else if (selectedBlock.name === '>') {
      console.log('hi');
      // 「テキスト」を表示
      hints.push({
        type: 'text',
        content: 'テキスト',
        comment: '文字を入力'
      });
    } else if (selectedBlock.type === 'newLine') {
      console.log('hi');
      // 「テキスト」を表示
      hints.push({
        type: 'tag',
        name: 'a',
        comment: 'リンク'
      });
      hints.push({
        type: 'tag',
        name: 'p',
        comment: '文字'
      });
      hints.push({
        type: 'tag',
        name: 'img',
        comment: '画像'
      });
      hints.push({
        type: 'tag',
        name: 'input',
        comment: 'ボタン'
      });
      hints.push({
        type: 'tag',
        name: 'hr',
        comment: '線'
      });
      hints.push({
        type: 'tag',
        name: 'h1',
        comment: '題名'
      });
    } else if (selectedBlock.name === 'img') {
      console.log('hi');
      // 「テキスト」を表示
      hints.push({
        type: 'attribute',
        name: 'src',
        comment: '画像を指定'
      });
    } else if (selectedBlock.name === 'src') {
      console.log('hi');
      // 「テキスト」を表示
      hints.push({
        type: 'value',
        value: '画像',
        comment: '画像の名前'
      });
    } else if (selectedBlock.name === 'input') {
      console.log('hi');
      // 「テキスト」を表示
      hints.push({
        type: 'attribute',
        name: 'type',
        comment: '種類を指定'
      });
    } else if (selectedBlock.name === 'type') {
      console.log('hi');
      // 「テキスト」を表示
      hints.push({
        type: 'value',
        value: 'button',
        comment: 'ボタンを作る'
      });
      hints.push({
        type: 'value',
        value: 'text',
        comment: 'フォーム'
      });
    } else if (selectedBlock.name === 'button') {
      console.log('hi');
      // 「テキスト」を表示
      hints.push({
        type: 'attribute',
        name: 'onclick',
        comment: 'ボタンが押されたら'
      });
    } else if (selectedBlock.name === 'onclick') {
      console.log('hi');
      // 「テキスト」を表示
      hints.push({
        type: 'value',
        value: 'https;//www.google.com',
        comment: 'URLを入力'
      });
    } else if (selectedBlock.name === '') {
      console.log('hi');
      // 「テキスト」を表示
      hints.push({
        type: '',
        name: '',
        comment: ''
      });
    }

    console.log(hints);
    return hints;
  } else {
    return [];
  }
}

/***/ }),

/***/ "LdZW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('md-toolbar', [_c('md-button', {
    staticClass: "md-icon-button",
    on: {
      "click": _vm.toggleLeftSidenav
    }
  }, [_c('md-icon', [_vm._v("menu")])], 1), _vm._v(" "), _c('h2', {
    staticClass: "md-title",
    staticStyle: {
      "flex": "1"
    }
  }, [_vm._v("DrawCode")]), _vm._v(" "), _c('md-button', {
    staticClass: "md-raised"
  }, [_vm._v("保存")]), _vm._v(" "), _c('md-button', {
    staticClass: "md-raised"
  }, [_vm._v("プレビュー")]), _vm._v(" "), _c('md-button', {
    staticClass: "md-raised md-warn"
  }, [_vm._v("公開")])], 1), _vm._v(" "), _c('md-sidenav', {
    ref: "leftSidenav",
    staticClass: "md-left"
  }, [_c('md-toolbar', {
    staticClass: "md-large"
  }, [_c('div', {
    staticClass: "md-toolbar-container"
  }, [_c('h3', {
    staticClass: "md-title"
  }, [_vm._v("メニュー")])])]), _vm._v(" "), _c('md-button', {
    staticClass: "pageButton",
    attrs: {
      "href": "#/home"
    }
  }, [_vm._v("ホーム")]), _vm._v(" "), _c('md-button', {
    staticClass: "pageButton",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("コード作成")]), _vm._v(" "), _c('md-button', {
    staticClass: "pageButton",
    attrs: {
      "href": "#/code"
    }
  }, [_vm._v("みんなのコード")])], 1), _vm._v(" "), _c('router-view')], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_505767f4_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("LdZW");
function injectStyle (ssrContext) {
  __webpack_require__("hLvJ")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_505767f4_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__("M93x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__("YaEn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_material__ = __webpack_require__("Lgyv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_material___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_material__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_material_dist_vue_material_css__ = __webpack_require__("tzNG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_material_dist_vue_material_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue_material_dist_vue_material_css__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.






__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_vue_material___default.a);

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] }
});

/***/ }),

/***/ "Nlvr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hello"
  }, _vm._l((_vm.blocksArray), function(blocks) {
    return _c('div', {
      staticClass: "blocks"
    }, _vm._l((blocks), function(block) {
      return _c('md-menu', {
        attrs: {
          "md-align-trigger": "",
          "md-offset-y": "12",
          "md-direction": "bottom right"
        },
        on: {
          "open": function($event) {
            _vm.selectedBlock = block
          }
        }
      }, [(block.type == 'tag') ? _c('md-button', {
        staticClass: "md-raised md-primary block",
        attrs: {
          "md-menu-trigger": ""
        }
      }, [_vm._v(_vm._s("<" + block.name))]) : _vm._e(), _vm._v(" "), (block.type == 'text') ? _c('md-button', {
        staticClass: "md-raised md-primary block",
        attrs: {
          "md-menu-trigger": ""
        }
      }, [_vm._v(_vm._s(block.content)), _c('i', {
        staticClass: "material-icons editButton",
        on: {
          "click": function($event) {
            _vm.editBlock(block, "text")
          }
        }
      }, [_vm._v("edit")])]) : _vm._e(), _vm._v(" "), (block.type == 'attribute') ? _c('md-button', {
        staticClass: "md-raised md-primary block",
        attrs: {
          "md-menu-trigger": ""
        }
      }, [_vm._v(_vm._s(block.name))]) : _vm._e(), _vm._v(" "), (block.type == 'value') ? _c('md-button', {
        staticClass: "md-raised md-primary block",
        attrs: {
          "md-menu-trigger": ""
        }
      }, [_vm._v(_vm._s(block.value)), (block.value != 'button') ? _c('i', {
        staticClass: "material-icons editButton",
        on: {
          "click": function($event) {
            _vm.editBlock(block, "value", block.value)
          }
        }
      }, [_vm._v("edit")]) : _vm._e()]) : _vm._e(), _vm._v(" "), (block.type == 'endTag') ? _c('md-button', {
        staticClass: "md-raised md-primary block",
        attrs: {
          "md-menu-trigger": ""
        }
      }, [_vm._v(_vm._s(block.name))]) : _vm._e(), _vm._v(" "), (block.type == 'closeTag') ? _c('md-button', {
        staticClass: "md-raised md-primary block",
        attrs: {
          "md-menu-trigger": ""
        }
      }, [_vm._v(_vm._s("<" + block.name + '>'))]) : _vm._e(), _vm._v(" "), (block.type == 'root') ? _c('md-button', {
        staticClass: "md-raised md-primary block",
        attrs: {
          "md-menu-trigger": ""
        }
      }, [_vm._v(_vm._s(block.name))]) : _vm._e(), _vm._v(" "), (block.type == 'newLine') ? _c('md-button', {
        staticClass: "md-raised md-primary block",
        attrs: {
          "md-menu-trigger": ""
        }
      }, [_vm._v("↩︎")]) : _vm._e(), _vm._v(" "), (block.type == 'newLine') ? _c('br') : _vm._e(), _vm._v(" "), _c('md-menu-content', {
        staticStyle: {
          "width": "300px"
        }
      }, [_c('div', {
        staticClass: "hint-container"
      }, _vm._l((_vm.hints), function(hint) {
        return _c('md-menu-item', {
          on: {
            "selected": function($event) {
              _vm.addBlock(hint)
            }
          }
        }, [(hint.type == 'tag') ? _c('span', [_vm._v(_vm._s("<" + hint.name))]) : _vm._e(), _vm._v(" "), (hint.type == 'text') ? _c('span', [_vm._v(_vm._s(hint.content))]) : _vm._e(), _vm._v(" "), (hint.type == 'attribute') ? _c('span', [_vm._v(_vm._s(hint.name))]) : _vm._e(), _vm._v(" "), (hint.type == 'value') ? _c('span', [_vm._v(_vm._s(hint.value))]) : _vm._e(), _vm._v(" "), (hint.type == 'endTag') ? _c('span', [_vm._v(_vm._s(hint.name))]) : _vm._e(), _vm._v(" "), (hint.type == 'closeTag') ? _c('span', [_vm._v(_vm._s("<" + hint.name + '>'))]) : _vm._e(), _vm._v(" "), (hint.type == 'root') ? _c('span', [_vm._v(_vm._s(hint.name))]) : _vm._e(), _vm._v(" "), _c('span', {
          staticClass: "comment"
        }, [_vm._v(_vm._s(hint.comment))]), _vm._v(" "), (hint.type == 'newLine') ? _c('span', [_vm._v(_vm._s(hint.name))]) : _vm._e()])
      })), _vm._v(" "), (block.type != 'root') ? _c('md-button', {
        staticClass: "md-raised md-primary",
        on: {
          "click": function($event) {
            _vm.removeBlock(block)
          }
        }
      }, [_c('span', [_vm._v("削除")])]) : _vm._e(), _vm._v(" "), _c('md-menu-item', {
        on: {
          "selected": function($event) {
            _vm.newLine()
          }
        }
      }, [_c('span', [_vm._v("新しく書く")])])], 1)], 1)
    }))
  }))
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "YaEn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("/ocq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Hello__ = __webpack_require__("qSdX");




__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'Hello',
    component: __WEBPACK_IMPORTED_MODULE_2__components_Hello__["a" /* default */]
  }]
}));

/***/ }),

/***/ "Yba4":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "hLvJ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "pMZz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getHints__ = __webpack_require__("63wf");
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



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'hello',
  data() {
    return {
      blocks: [{
        type: 'root',
        name: 'HTML'
      }],
      selectedBlock: null
    };
  },
  methods: {
    showHitns() {
      this.$refs.menu.open();
    },
    addBlock(block) {
      console.log(this, block);

      var index = this.blocks.indexOf(this.selectedBlock);
      if (index >= 0) {
        this.blocks.splice(index + 1, 0, block);
      }

      // this.blocks.push(block)
    },
    removeBlock(block) {
      console.log(block);

      var index = this.blocks.indexOf(block);
      if (index >= 0) {
        this.blocks.splice(index, 1);
      }
    },
    newLine() {
      console.log('アイウエオ', this.blocks);
      var index = this.blocks.indexOf(this.selectedBlock);
      if (index >= 0) {
        this.blocks.splice(index + 1, 0, { type: 'newLine' });
      }

      // var blocksArray = [
      //   [{ type: 'tag', name: 'p' }, { type: 'endTag', name: '>' }],
      //   [{ type: 'tag', name: 'a' }, { type: 'endTag', name: '>' }]
      // ]
      //
      // blocksArray.push([{ type: 'tag', name: 'center' }])
      console.log(this.blocks);
    },
    editBlock(block, type, value) {
      console.log('faefa', block);
      var userText = window.prompt('変更したいテキストを入力してください');
      // var index = block.indexOf("{type:'text',content:")
      // block.splice(index + 1, index + 1, 'afejaofj')
      if (type === 'text') {
        block.content = userText;
      } else {
        block.value = userText;
      }
    },
    preview() {
      // console.log(this.blocks.toString())
      // if (this.blocks.type == {type:}) {
      // var encodeCode =
      // console.log('ハローハロー')
      // }
    }
  },
  computed: {
    hints() {
      console.log(this.selectedBlock);
      var hints = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getHints__["a" /* default */])(this.selectedBlock);
      return hints;
    },
    blocksArray() {
      const blocksArray = [[]];
      let index = 0;
      for (let block of this.blocks) {
        blocksArray[index].push(block);
        if (block.type === 'newLine') {
          index++;
          blocksArray[index] = [];
        }
      }
      return blocksArray;
    }
  }
});

/***/ }),

/***/ "qSdX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Hello_vue__ = __webpack_require__("pMZz");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2940c078_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Hello_vue__ = __webpack_require__("Nlvr");
function injectStyle (ssrContext) {
  __webpack_require__("Yba4")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2940c078"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Hello_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2940c078_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Hello_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "tzNG":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "xJD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app',
  methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    }
  }
});

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.ee794656be72895917af.js.map