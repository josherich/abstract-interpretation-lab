(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var out_of_memory = /* tuple */[
  "Out_of_memory",
  0
];

var sys_error = /* tuple */[
  "Sys_error",
  -1
];

var failure = /* tuple */[
  "Failure",
  -2
];

var invalid_argument = /* tuple */[
  "Invalid_argument",
  -3
];

var end_of_file = /* tuple */[
  "End_of_file",
  -4
];

var division_by_zero = /* tuple */[
  "Division_by_zero",
  -5
];

var not_found = /* tuple */[
  "Not_found",
  -6
];

var match_failure = /* tuple */[
  "Match_failure",
  -7
];

var stack_overflow = /* tuple */[
  "Stack_overflow",
  -8
];

var sys_blocked_io = /* tuple */[
  "Sys_blocked_io",
  -9
];

var assert_failure = /* tuple */[
  "Assert_failure",
  -10
];

var undefined_recursive_module = /* tuple */[
  "Undefined_recursive_module",
  -11
];

out_of_memory.tag = 248;

sys_error.tag = 248;

failure.tag = 248;

invalid_argument.tag = 248;

end_of_file.tag = 248;

division_by_zero.tag = 248;

not_found.tag = 248;

match_failure.tag = 248;

stack_overflow.tag = 248;

sys_blocked_io.tag = 248;

assert_failure.tag = 248;

undefined_recursive_module.tag = 248;

exports.out_of_memory = out_of_memory;
exports.sys_error = sys_error;
exports.failure = failure;
exports.invalid_argument = invalid_argument;
exports.end_of_file = end_of_file;
exports.division_by_zero = division_by_zero;
exports.not_found = not_found;
exports.match_failure = match_failure;
exports.stack_overflow = stack_overflow;
exports.sys_blocked_io = sys_blocked_io;
exports.assert_failure = assert_failure;
exports.undefined_recursive_module = undefined_recursive_module;
/*  Not a pure module */


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Caml_array = __webpack_require__(16);

function app(_f, _args) {
  while(true) {
    var args = _args;
    var f = _f;
    var init_arity = f.length;
    var arity = init_arity === 0 ? 1 : init_arity;
    var len = args.length;
    var d = arity - len | 0;
    if (d === 0) {
      return f.apply(null, args);
    } else if (d < 0) {
      _args = Caml_array.caml_array_sub(args, arity, -d | 0);
      _f = f.apply(null, Caml_array.caml_array_sub(args, 0, arity));
      continue ;
    } else {
      return (function(f,args){
      return function (x) {
        return app(f, args.concat(/* array */[x]));
      }
      }(f,args));
    }
  };
}

function curry_1(o, a0, arity) {
  switch (arity) {
    case 1 : 
        return o(a0);
    case 2 : 
        return (function (param) {
            return o(a0, param);
          });
    case 3 : 
        return (function (param, param$1) {
            return o(a0, param, param$1);
          });
    case 4 : 
        return (function (param, param$1, param$2) {
            return o(a0, param, param$1, param$2);
          });
    case 5 : 
        return (function (param, param$1, param$2, param$3) {
            return o(a0, param, param$1, param$2, param$3);
          });
    case 6 : 
        return (function (param, param$1, param$2, param$3, param$4) {
            return o(a0, param, param$1, param$2, param$3, param$4);
          });
    case 7 : 
        return (function (param, param$1, param$2, param$3, param$4, param$5) {
            return o(a0, param, param$1, param$2, param$3, param$4, param$5);
          });
    default:
      return app(o, /* array */[a0]);
  }
}

function _1(o, a0) {
  var arity = o.length;
  if (arity === 1) {
    return o(a0);
  } else {
    return curry_1(o, a0, arity);
  }
}

function __1(o) {
  var arity = o.length;
  if (arity === 1) {
    return o;
  } else {
    return (function (a0) {
        return _1(o, a0);
      });
  }
}

function curry_2(o, a0, a1, arity) {
  switch (arity) {
    case 1 : 
        return app(o(a0), /* array */[a1]);
    case 2 : 
        return o(a0, a1);
    case 3 : 
        return (function (param) {
            return o(a0, a1, param);
          });
    case 4 : 
        return (function (param, param$1) {
            return o(a0, a1, param, param$1);
          });
    case 5 : 
        return (function (param, param$1, param$2) {
            return o(a0, a1, param, param$1, param$2);
          });
    case 6 : 
        return (function (param, param$1, param$2, param$3) {
            return o(a0, a1, param, param$1, param$2, param$3);
          });
    case 7 : 
        return (function (param, param$1, param$2, param$3, param$4) {
            return o(a0, a1, param, param$1, param$2, param$3, param$4);
          });
    default:
      return app(o, /* array */[
                  a0,
                  a1
                ]);
  }
}

function _2(o, a0, a1) {
  var arity = o.length;
  if (arity === 2) {
    return o(a0, a1);
  } else {
    return curry_2(o, a0, a1, arity);
  }
}

function __2(o) {
  var arity = o.length;
  if (arity === 2) {
    return o;
  } else {
    return (function (a0, a1) {
        return _2(o, a0, a1);
      });
  }
}

function curry_3(o, a0, a1, a2, arity) {
  switch (arity) {
    case 1 : 
        return app(o(a0), /* array */[
                    a1,
                    a2
                  ]);
    case 2 : 
        return app(o(a0, a1), /* array */[a2]);
    case 3 : 
        return o(a0, a1, a2);
    case 4 : 
        return (function (param) {
            return o(a0, a1, a2, param);
          });
    case 5 : 
        return (function (param, param$1) {
            return o(a0, a1, a2, param, param$1);
          });
    case 6 : 
        return (function (param, param$1, param$2) {
            return o(a0, a1, a2, param, param$1, param$2);
          });
    case 7 : 
        return (function (param, param$1, param$2, param$3) {
            return o(a0, a1, a2, param, param$1, param$2, param$3);
          });
    default:
      return app(o, /* array */[
                  a0,
                  a1,
                  a2
                ]);
  }
}

function _3(o, a0, a1, a2) {
  var arity = o.length;
  if (arity === 3) {
    return o(a0, a1, a2);
  } else {
    return curry_3(o, a0, a1, a2, arity);
  }
}

function __3(o) {
  var arity = o.length;
  if (arity === 3) {
    return o;
  } else {
    return (function (a0, a1, a2) {
        return _3(o, a0, a1, a2);
      });
  }
}

function curry_4(o, a0, a1, a2, a3, arity) {
  switch (arity) {
    case 1 : 
        return app(o(a0), /* array */[
                    a1,
                    a2,
                    a3
                  ]);
    case 2 : 
        return app(o(a0, a1), /* array */[
                    a2,
                    a3
                  ]);
    case 3 : 
        return app(o(a0, a1, a2), /* array */[a3]);
    case 4 : 
        return o(a0, a1, a2, a3);
    case 5 : 
        return (function (param) {
            return o(a0, a1, a2, a3, param);
          });
    case 6 : 
        return (function (param, param$1) {
            return o(a0, a1, a2, a3, param, param$1);
          });
    case 7 : 
        return (function (param, param$1, param$2) {
            return o(a0, a1, a2, a3, param, param$1, param$2);
          });
    default:
      return app(o, /* array */[
                  a0,
                  a1,
                  a2,
                  a3
                ]);
  }
}

function _4(o, a0, a1, a2, a3) {
  var arity = o.length;
  if (arity === 4) {
    return o(a0, a1, a2, a3);
  } else {
    return curry_4(o, a0, a1, a2, a3, arity);
  }
}

function __4(o) {
  var arity = o.length;
  if (arity === 4) {
    return o;
  } else {
    return (function (a0, a1, a2, a3) {
        return _4(o, a0, a1, a2, a3);
      });
  }
}

function curry_5(o, a0, a1, a2, a3, a4, arity) {
  switch (arity) {
    case 1 : 
        return app(o(a0), /* array */[
                    a1,
                    a2,
                    a3,
                    a4
                  ]);
    case 2 : 
        return app(o(a0, a1), /* array */[
                    a2,
                    a3,
                    a4
                  ]);
    case 3 : 
        return app(o(a0, a1, a2), /* array */[
                    a3,
                    a4
                  ]);
    case 4 : 
        return app(o(a0, a1, a2, a3), /* array */[a4]);
    case 5 : 
        return o(a0, a1, a2, a3, a4);
    case 6 : 
        return (function (param) {
            return o(a0, a1, a2, a3, a4, param);
          });
    case 7 : 
        return (function (param, param$1) {
            return o(a0, a1, a2, a3, a4, param, param$1);
          });
    default:
      return app(o, /* array */[
                  a0,
                  a1,
                  a2,
                  a3,
                  a4
                ]);
  }
}

function _5(o, a0, a1, a2, a3, a4) {
  var arity = o.length;
  if (arity === 5) {
    return o(a0, a1, a2, a3, a4);
  } else {
    return curry_5(o, a0, a1, a2, a3, a4, arity);
  }
}

function __5(o) {
  var arity = o.length;
  if (arity === 5) {
    return o;
  } else {
    return (function (a0, a1, a2, a3, a4) {
        return _5(o, a0, a1, a2, a3, a4);
      });
  }
}

function curry_6(o, a0, a1, a2, a3, a4, a5, arity) {
  switch (arity) {
    case 1 : 
        return app(o(a0), /* array */[
                    a1,
                    a2,
                    a3,
                    a4,
                    a5
                  ]);
    case 2 : 
        return app(o(a0, a1), /* array */[
                    a2,
                    a3,
                    a4,
                    a5
                  ]);
    case 3 : 
        return app(o(a0, a1, a2), /* array */[
                    a3,
                    a4,
                    a5
                  ]);
    case 4 : 
        return app(o(a0, a1, a2, a3), /* array */[
                    a4,
                    a5
                  ]);
    case 5 : 
        return app(o(a0, a1, a2, a3, a4), /* array */[a5]);
    case 6 : 
        return o(a0, a1, a2, a3, a4, a5);
    case 7 : 
        return (function (param) {
            return o(a0, a1, a2, a3, a4, a5, param);
          });
    default:
      return app(o, /* array */[
                  a0,
                  a1,
                  a2,
                  a3,
                  a4,
                  a5
                ]);
  }
}

function _6(o, a0, a1, a2, a3, a4, a5) {
  var arity = o.length;
  if (arity === 6) {
    return o(a0, a1, a2, a3, a4, a5);
  } else {
    return curry_6(o, a0, a1, a2, a3, a4, a5, arity);
  }
}

function __6(o) {
  var arity = o.length;
  if (arity === 6) {
    return o;
  } else {
    return (function (a0, a1, a2, a3, a4, a5) {
        return _6(o, a0, a1, a2, a3, a4, a5);
      });
  }
}

function curry_7(o, a0, a1, a2, a3, a4, a5, a6, arity) {
  switch (arity) {
    case 1 : 
        return app(o(a0), /* array */[
                    a1,
                    a2,
                    a3,
                    a4,
                    a5,
                    a6
                  ]);
    case 2 : 
        return app(o(a0, a1), /* array */[
                    a2,
                    a3,
                    a4,
                    a5,
                    a6
                  ]);
    case 3 : 
        return app(o(a0, a1, a2), /* array */[
                    a3,
                    a4,
                    a5,
                    a6
                  ]);
    case 4 : 
        return app(o(a0, a1, a2, a3), /* array */[
                    a4,
                    a5,
                    a6
                  ]);
    case 5 : 
        return app(o(a0, a1, a2, a3, a4), /* array */[
                    a5,
                    a6
                  ]);
    case 6 : 
        return app(o(a0, a1, a2, a3, a4, a5), /* array */[a6]);
    case 7 : 
        return o(a0, a1, a2, a3, a4, a5, a6);
    default:
      return app(o, /* array */[
                  a0,
                  a1,
                  a2,
                  a3,
                  a4,
                  a5,
                  a6
                ]);
  }
}

function _7(o, a0, a1, a2, a3, a4, a5, a6) {
  var arity = o.length;
  if (arity === 7) {
    return o(a0, a1, a2, a3, a4, a5, a6);
  } else {
    return curry_7(o, a0, a1, a2, a3, a4, a5, a6, arity);
  }
}

function __7(o) {
  var arity = o.length;
  if (arity === 7) {
    return o;
  } else {
    return (function (a0, a1, a2, a3, a4, a5, a6) {
        return _7(o, a0, a1, a2, a3, a4, a5, a6);
      });
  }
}

function curry_8(o, a0, a1, a2, a3, a4, a5, a6, a7, arity) {
  switch (arity) {
    case 1 : 
        return app(o(a0), /* array */[
                    a1,
                    a2,
                    a3,
                    a4,
                    a5,
                    a6,
                    a7
                  ]);
    case 2 : 
        return app(o(a0, a1), /* array */[
                    a2,
                    a3,
                    a4,
                    a5,
                    a6,
                    a7
                  ]);
    case 3 : 
        return app(o(a0, a1, a2), /* array */[
                    a3,
                    a4,
                    a5,
                    a6,
                    a7
                  ]);
    case 4 : 
        return app(o(a0, a1, a2, a3), /* array */[
                    a4,
                    a5,
                    a6,
                    a7
                  ]);
    case 5 : 
        return app(o(a0, a1, a2, a3, a4), /* array */[
                    a5,
                    a6,
                    a7
                  ]);
    case 6 : 
        return app(o(a0, a1, a2, a3, a4, a5), /* array */[
                    a6,
                    a7
                  ]);
    case 7 : 
        return app(o(a0, a1, a2, a3, a4, a5, a6), /* array */[a7]);
    default:
      return app(o, /* array */[
                  a0,
                  a1,
                  a2,
                  a3,
                  a4,
                  a5,
                  a6,
                  a7
                ]);
  }
}

function _8(o, a0, a1, a2, a3, a4, a5, a6, a7) {
  var arity = o.length;
  if (arity === 8) {
    return o(a0, a1, a2, a3, a4, a5, a6, a7);
  } else {
    return curry_8(o, a0, a1, a2, a3, a4, a5, a6, a7, arity);
  }
}

function __8(o) {
  var arity = o.length;
  if (arity === 8) {
    return o;
  } else {
    return (function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return _8(o, a0, a1, a2, a3, a4, a5, a6, a7);
      });
  }
}

exports.app = app;
exports.curry_1 = curry_1;
exports._1 = _1;
exports.__1 = __1;
exports.curry_2 = curry_2;
exports._2 = _2;
exports.__2 = __2;
exports.curry_3 = curry_3;
exports._3 = _3;
exports.__3 = __3;
exports.curry_4 = curry_4;
exports._4 = _4;
exports.__4 = __4;
exports.curry_5 = curry_5;
exports._5 = _5;
exports.__5 = __5;
exports.curry_6 = curry_6;
exports._6 = _6;
exports.__6 = __6;
exports.curry_7 = curry_7;
exports._7 = _7;
exports.__7 = __7;
exports.curry_8 = curry_8;
exports._8 = _8;
exports.__8 = __8;
/* No side effect */


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Curry = __webpack_require__(1);
var Caml_io = __webpack_require__(17);
var Caml_sys = __webpack_require__(28);
var Caml_bytes = __webpack_require__(3);
var Caml_format = __webpack_require__(12);
var Caml_string = __webpack_require__(13);
var Caml_exceptions = __webpack_require__(8);
var Caml_missing_polyfill = __webpack_require__(30);
var Caml_builtin_exceptions = __webpack_require__(0);
var CamlinternalFormatBasics = __webpack_require__(20);

function failwith(s) {
  throw [
        Caml_builtin_exceptions.failure,
        s
      ];
}

function invalid_arg(s) {
  throw [
        Caml_builtin_exceptions.invalid_argument,
        s
      ];
}

var Exit = Caml_exceptions.create("Pervasives.Exit");

function abs(x) {
  if (x >= 0) {
    return x;
  } else {
    return -x | 0;
  }
}

function lnot(x) {
  return x ^ -1;
}

var min_int = -2147483648;

function classify_float(x) {
  if (isFinite(x)) {
    if (Math.abs(x) >= 2.2250738585072014e-308) {
      return /* FP_normal */0;
    } else if (x !== 0) {
      return /* FP_subnormal */1;
    } else {
      return /* FP_zero */2;
    }
  } else if (isNaN(x)) {
    return /* FP_nan */4;
  } else {
    return /* FP_infinite */3;
  }
}

function char_of_int(n) {
  if (n < 0 || n > 255) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "char_of_int"
        ];
  } else {
    return n;
  }
}

function string_of_bool(b) {
  if (b) {
    return "true";
  } else {
    return "false";
  }
}

function bool_of_string(param) {
  switch (param) {
    case "false" : 
        return false;
    case "true" : 
        return true;
    default:
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "bool_of_string"
          ];
  }
}

function valid_float_lexem(s) {
  var l = s.length;
  var _i = 0;
  while(true) {
    var i = _i;
    if (i >= l) {
      return s + ".";
    } else {
      var match = Caml_string.get(s, i);
      if (match >= 48) {
        if (match >= 58) {
          return s;
        } else {
          _i = i + 1 | 0;
          continue ;
        }
      } else if (match !== 45) {
        return s;
      } else {
        _i = i + 1 | 0;
        continue ;
      }
    }
  };
}

function string_of_float(f) {
  return valid_float_lexem(Caml_format.caml_format_float("%.12g", f));
}

function $at(l1, l2) {
  if (l1) {
    return /* :: */[
            l1[0],
            $at(l1[1], l2)
          ];
  } else {
    return l2;
  }
}

var stdin = Caml_io.stdin;

var stdout = Caml_io.stdout;

var stderr = Caml_io.stderr;

function open_out_gen(mode, perm, name) {
  return Caml_missing_polyfill.not_implemented("caml_ml_open_descriptor_out");
}

function open_out(name) {
  return open_out_gen(/* :: */[
              /* Open_wronly */1,
              /* :: */[
                /* Open_creat */3,
                /* :: */[
                  /* Open_trunc */4,
                  /* :: */[
                    /* Open_text */7,
                    /* [] */0
                  ]
                ]
              ]
            ], 438, name);
}

function open_out_bin(name) {
  return open_out_gen(/* :: */[
              /* Open_wronly */1,
              /* :: */[
                /* Open_creat */3,
                /* :: */[
                  /* Open_trunc */4,
                  /* :: */[
                    /* Open_binary */6,
                    /* [] */0
                  ]
                ]
              ]
            ], 438, name);
}

function flush_all(param) {
  var _param = Caml_io.caml_ml_out_channels_list(/* () */0);
  while(true) {
    var param$1 = _param;
    if (param$1) {
      try {
        Caml_io.caml_ml_flush(param$1[0]);
      }
      catch (exn){
        
      }
      _param = param$1[1];
      continue ;
    } else {
      return /* () */0;
    }
  };
}

function output_bytes(oc, s) {
  return Caml_io.caml_ml_output(oc, s, 0, s.length);
}

function output_string(oc, s) {
  return Caml_io.caml_ml_output(oc, s, 0, s.length);
}

function output(oc, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "output"
        ];
  } else {
    return Caml_io.caml_ml_output(oc, s, ofs, len);
  }
}

function output_substring(oc, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "output_substring"
        ];
  } else {
    return Caml_io.caml_ml_output(oc, s, ofs, len);
  }
}

function output_value(chan, v) {
  return Caml_missing_polyfill.not_implemented("caml_output_value");
}

function close_out(oc) {
  Caml_io.caml_ml_flush(oc);
  return Caml_missing_polyfill.not_implemented("caml_ml_close_channel");
}

function close_out_noerr(oc) {
  try {
    Caml_io.caml_ml_flush(oc);
  }
  catch (exn){
    
  }
  try {
    return Caml_missing_polyfill.not_implemented("caml_ml_close_channel");
  }
  catch (exn$1){
    return /* () */0;
  }
}

function open_in_gen(mode, perm, name) {
  return Caml_missing_polyfill.not_implemented("caml_ml_open_descriptor_in");
}

function open_in(name) {
  return open_in_gen(/* :: */[
              /* Open_rdonly */0,
              /* :: */[
                /* Open_text */7,
                /* [] */0
              ]
            ], 0, name);
}

function open_in_bin(name) {
  return open_in_gen(/* :: */[
              /* Open_rdonly */0,
              /* :: */[
                /* Open_binary */6,
                /* [] */0
              ]
            ], 0, name);
}

function input(ic, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "input"
        ];
  } else {
    return Caml_missing_polyfill.not_implemented("caml_ml_input");
  }
}

function unsafe_really_input(ic, s, _ofs, _len) {
  while(true) {
    var len = _len;
    var ofs = _ofs;
    if (len <= 0) {
      return /* () */0;
    } else {
      var r = Caml_missing_polyfill.not_implemented("caml_ml_input");
      if (r === 0) {
        throw Caml_builtin_exceptions.end_of_file;
      } else {
        _len = len - r | 0;
        _ofs = ofs + r | 0;
        continue ;
      }
    }
  };
}

function really_input(ic, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "really_input"
        ];
  } else {
    return unsafe_really_input(ic, s, ofs, len);
  }
}

function really_input_string(ic, len) {
  var s = Caml_bytes.caml_create_bytes(len);
  really_input(ic, s, 0, len);
  return Caml_bytes.bytes_to_string(s);
}

function input_line(chan) {
  var build_result = function (buf, _pos, _param) {
    while(true) {
      var param = _param;
      var pos = _pos;
      if (param) {
        var hd = param[0];
        var len = hd.length;
        Caml_bytes.caml_blit_bytes(hd, 0, buf, pos - len | 0, len);
        _param = param[1];
        _pos = pos - len | 0;
        continue ;
      } else {
        return buf;
      }
    };
  };
  var scan = function (_accu, _len) {
    while(true) {
      var len = _len;
      var accu = _accu;
      var n = Caml_missing_polyfill.not_implemented("caml_ml_input_scan_line");
      if (n === 0) {
        if (accu) {
          return build_result(Caml_bytes.caml_create_bytes(len), len, accu);
        } else {
          throw Caml_builtin_exceptions.end_of_file;
        }
      } else if (n > 0) {
        var res = Caml_bytes.caml_create_bytes(n - 1 | 0);
        Caml_missing_polyfill.not_implemented("caml_ml_input");
        Caml_missing_polyfill.not_implemented("caml_ml_input_char");
        if (accu) {
          var len$1 = (len + n | 0) - 1 | 0;
          return build_result(Caml_bytes.caml_create_bytes(len$1), len$1, /* :: */[
                      res,
                      accu
                    ]);
        } else {
          return res;
        }
      } else {
        var beg = Caml_bytes.caml_create_bytes(-n | 0);
        Caml_missing_polyfill.not_implemented("caml_ml_input");
        _len = len - n | 0;
        _accu = /* :: */[
          beg,
          accu
        ];
        continue ;
      }
    };
  };
  return Caml_bytes.bytes_to_string(scan(/* [] */0, 0));
}

function close_in_noerr(ic) {
  try {
    return Caml_missing_polyfill.not_implemented("caml_ml_close_channel");
  }
  catch (exn){
    return /* () */0;
  }
}

function print_char(c) {
  return Caml_io.caml_ml_output_char(stdout, c);
}

function print_string(s) {
  return output_string(stdout, s);
}

function print_bytes(s) {
  return output_bytes(stdout, s);
}

function print_int(i) {
  return output_string(stdout, String(i));
}

function print_float(f) {
  return output_string(stdout, valid_float_lexem(Caml_format.caml_format_float("%.12g", f)));
}

function print_newline(param) {
  Caml_io.caml_ml_output_char(stdout, /* "\n" */10);
  return Caml_io.caml_ml_flush(stdout);
}

function prerr_char(c) {
  return Caml_io.caml_ml_output_char(stderr, c);
}

function prerr_string(s) {
  return output_string(stderr, s);
}

function prerr_bytes(s) {
  return output_bytes(stderr, s);
}

function prerr_int(i) {
  return output_string(stderr, String(i));
}

function prerr_float(f) {
  return output_string(stderr, valid_float_lexem(Caml_format.caml_format_float("%.12g", f)));
}

function prerr_newline(param) {
  Caml_io.caml_ml_output_char(stderr, /* "\n" */10);
  return Caml_io.caml_ml_flush(stderr);
}

function read_line(param) {
  Caml_io.caml_ml_flush(stdout);
  return input_line(stdin);
}

function read_int(param) {
  return Caml_format.caml_int_of_string((Caml_io.caml_ml_flush(stdout), input_line(stdin)));
}

function read_float(param) {
  return Caml_format.caml_float_of_string((Caml_io.caml_ml_flush(stdout), input_line(stdin)));
}

function string_of_format(param) {
  return param[1];
}

function $caret$caret(param, param$1) {
  return /* Format */[
          CamlinternalFormatBasics.concat_fmt(param[0], param$1[0]),
          param[1] + ("%," + param$1[1])
        ];
}

var exit_function = /* record */[/* contents */flush_all];

function at_exit(f) {
  var g = exit_function[0];
  exit_function[0] = (function (param) {
      Curry._1(f, /* () */0);
      return Curry._1(g, /* () */0);
    });
  return /* () */0;
}

function do_at_exit(param) {
  return Curry._1(exit_function[0], /* () */0);
}

function exit(retcode) {
  do_at_exit(/* () */0);
  return Caml_sys.caml_sys_exit(retcode);
}

var max_int = 2147483647;

var epsilon_float = 2.220446049250313e-16;

var flush = Caml_io.caml_ml_flush;

var output_char = Caml_io.caml_ml_output_char;

var output_byte = Caml_io.caml_ml_output_char;

function output_binary_int(prim, prim$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_output_int");
}

function seek_out(prim, prim$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_seek_out");
}

function pos_out(prim) {
  return Caml_missing_polyfill.not_implemented("caml_ml_pos_out");
}

function out_channel_length(prim) {
  return Caml_missing_polyfill.not_implemented("caml_ml_channel_size");
}

function set_binary_mode_out(prim, prim$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_set_binary_mode");
}

function input_char(prim) {
  return Caml_missing_polyfill.not_implemented("caml_ml_input_char");
}

function input_byte(prim) {
  return Caml_missing_polyfill.not_implemented("caml_ml_input_char");
}

function input_binary_int(prim) {
  return Caml_missing_polyfill.not_implemented("caml_ml_input_int");
}

function input_value(prim) {
  return Caml_missing_polyfill.not_implemented("caml_input_value");
}

function seek_in(prim, prim$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_seek_in");
}

function pos_in(prim) {
  return Caml_missing_polyfill.not_implemented("caml_ml_pos_in");
}

function in_channel_length(prim) {
  return Caml_missing_polyfill.not_implemented("caml_ml_channel_size");
}

function close_in(prim) {
  return Caml_missing_polyfill.not_implemented("caml_ml_close_channel");
}

function set_binary_mode_in(prim, prim$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_set_binary_mode");
}

function LargeFile_000(prim, prim$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_seek_out_64");
}

function LargeFile_001(prim) {
  return Caml_missing_polyfill.not_implemented("caml_ml_pos_out_64");
}

function LargeFile_002(prim) {
  return Caml_missing_polyfill.not_implemented("caml_ml_channel_size_64");
}

function LargeFile_003(prim, prim$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_seek_in_64");
}

function LargeFile_004(prim) {
  return Caml_missing_polyfill.not_implemented("caml_ml_pos_in_64");
}

function LargeFile_005(prim) {
  return Caml_missing_polyfill.not_implemented("caml_ml_channel_size_64");
}

var LargeFile = [
  LargeFile_000,
  LargeFile_001,
  LargeFile_002,
  LargeFile_003,
  LargeFile_004,
  LargeFile_005
];

exports.invalid_arg = invalid_arg;
exports.failwith = failwith;
exports.Exit = Exit;
exports.abs = abs;
exports.max_int = max_int;
exports.min_int = min_int;
exports.lnot = lnot;
exports.epsilon_float = epsilon_float;
exports.classify_float = classify_float;
exports.char_of_int = char_of_int;
exports.string_of_bool = string_of_bool;
exports.bool_of_string = bool_of_string;
exports.string_of_float = string_of_float;
exports.$at = $at;
exports.stdin = stdin;
exports.stdout = stdout;
exports.stderr = stderr;
exports.print_char = print_char;
exports.print_string = print_string;
exports.print_bytes = print_bytes;
exports.print_int = print_int;
exports.print_float = print_float;
exports.print_newline = print_newline;
exports.prerr_char = prerr_char;
exports.prerr_string = prerr_string;
exports.prerr_bytes = prerr_bytes;
exports.prerr_int = prerr_int;
exports.prerr_float = prerr_float;
exports.prerr_newline = prerr_newline;
exports.read_line = read_line;
exports.read_int = read_int;
exports.read_float = read_float;
exports.open_out = open_out;
exports.open_out_bin = open_out_bin;
exports.open_out_gen = open_out_gen;
exports.flush = flush;
exports.flush_all = flush_all;
exports.output_char = output_char;
exports.output_string = output_string;
exports.output_bytes = output_bytes;
exports.output = output;
exports.output_substring = output_substring;
exports.output_byte = output_byte;
exports.output_binary_int = output_binary_int;
exports.output_value = output_value;
exports.seek_out = seek_out;
exports.pos_out = pos_out;
exports.out_channel_length = out_channel_length;
exports.close_out = close_out;
exports.close_out_noerr = close_out_noerr;
exports.set_binary_mode_out = set_binary_mode_out;
exports.open_in = open_in;
exports.open_in_bin = open_in_bin;
exports.open_in_gen = open_in_gen;
exports.input_char = input_char;
exports.input_line = input_line;
exports.input = input;
exports.really_input = really_input;
exports.really_input_string = really_input_string;
exports.input_byte = input_byte;
exports.input_binary_int = input_binary_int;
exports.input_value = input_value;
exports.seek_in = seek_in;
exports.pos_in = pos_in;
exports.in_channel_length = in_channel_length;
exports.close_in = close_in;
exports.close_in_noerr = close_in_noerr;
exports.set_binary_mode_in = set_binary_mode_in;
exports.LargeFile = LargeFile;
exports.string_of_format = string_of_format;
exports.$caret$caret = $caret$caret;
exports.exit = exit;
exports.at_exit = at_exit;
exports.valid_float_lexem = valid_float_lexem;
exports.unsafe_really_input = unsafe_really_input;
exports.do_at_exit = do_at_exit;
/* No side effect */


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Caml_builtin_exceptions = __webpack_require__(0);

function get(s, i) {
  if (i < 0 || i >= s.length) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "index out of bounds"
        ];
  } else {
    return s[i];
  }
}

function caml_fill_bytes(s, i, l, c) {
  if (l > 0) {
    for(var k = i ,k_finish = (l + i | 0) - 1 | 0; k <= k_finish; ++k){
      s[k] = c;
    }
    return /* () */0;
  } else {
    return 0;
  }
}

function caml_create_bytes(len) {
  if (len < 0) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "String.create"
        ];
  } else {
    var result = new Array(len);
    for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
      result[i] = /* "\000" */0;
    }
    return result;
  }
}

function caml_blit_bytes(s1, i1, s2, i2, len) {
  if (len > 0) {
    if (s1 === s2) {
      var s1$1 = s1;
      var i1$1 = i1;
      var i2$1 = i2;
      var len$1 = len;
      if (i1$1 < i2$1) {
        var range_a = (s1$1.length - i2$1 | 0) - 1 | 0;
        var range_b = len$1 - 1 | 0;
        var range = range_a > range_b ? range_b : range_a;
        for(var j = range; j >= 0; --j){
          s1$1[i2$1 + j | 0] = s1$1[i1$1 + j | 0];
        }
        return /* () */0;
      } else if (i1$1 > i2$1) {
        var range_a$1 = (s1$1.length - i1$1 | 0) - 1 | 0;
        var range_b$1 = len$1 - 1 | 0;
        var range$1 = range_a$1 > range_b$1 ? range_b$1 : range_a$1;
        for(var k = 0; k <= range$1; ++k){
          s1$1[i2$1 + k | 0] = s1$1[i1$1 + k | 0];
        }
        return /* () */0;
      } else {
        return 0;
      }
    } else {
      var off1 = s1.length - i1 | 0;
      if (len <= off1) {
        for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
          s2[i2 + i | 0] = s1[i1 + i | 0];
        }
        return /* () */0;
      } else {
        for(var i$1 = 0 ,i_finish$1 = off1 - 1 | 0; i$1 <= i_finish$1; ++i$1){
          s2[i2 + i$1 | 0] = s1[i1 + i$1 | 0];
        }
        for(var i$2 = off1 ,i_finish$2 = len - 1 | 0; i$2 <= i_finish$2; ++i$2){
          s2[i2 + i$2 | 0] = /* "\000" */0;
        }
        return /* () */0;
      }
    }
  } else {
    return 0;
  }
}

function bytes_to_string(a) {
  var bytes = a;
  var i = 0;
  var len = a.length;
  var s = "";
  var s_len = len;
  if (i === 0 && len <= 4096 && len === bytes.length) {
    return String.fromCharCode.apply(null, bytes);
  } else {
    var offset = 0;
    while(s_len > 0) {
      var next = s_len < 1024 ? s_len : 1024;
      var tmp_bytes = new Array(next);
      caml_blit_bytes(bytes, offset, tmp_bytes, 0, next);
      s = s + String.fromCharCode.apply(null, tmp_bytes);
      s_len = s_len - next | 0;
      offset = offset + next | 0;
    };
    return s;
  }
}

function caml_blit_string(s1, i1, s2, i2, len) {
  if (len > 0) {
    var off1 = s1.length - i1 | 0;
    if (len <= off1) {
      for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
        s2[i2 + i | 0] = s1.charCodeAt(i1 + i | 0);
      }
      return /* () */0;
    } else {
      for(var i$1 = 0 ,i_finish$1 = off1 - 1 | 0; i$1 <= i_finish$1; ++i$1){
        s2[i2 + i$1 | 0] = s1.charCodeAt(i1 + i$1 | 0);
      }
      for(var i$2 = off1 ,i_finish$2 = len - 1 | 0; i$2 <= i_finish$2; ++i$2){
        s2[i2 + i$2 | 0] = /* "\000" */0;
      }
      return /* () */0;
    }
  } else {
    return 0;
  }
}

function bytes_of_string(s) {
  var len = s.length;
  var res = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    res[i] = s.charCodeAt(i);
  }
  return res;
}

exports.caml_create_bytes = caml_create_bytes;
exports.caml_fill_bytes = caml_fill_bytes;
exports.get = get;
exports.bytes_to_string = bytes_to_string;
exports.caml_blit_bytes = caml_blit_bytes;
exports.caml_blit_string = caml_blit_string;
exports.bytes_of_string = bytes_of_string;
/* No side effect */


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Block = __webpack_require__(5);
var Caml_primitive = __webpack_require__(6);
var Caml_builtin_exceptions = __webpack_require__(0);

function caml_obj_block(tag, size) {
  var v = new Array(size);
  v.tag = tag;
  return v;
}

function caml_obj_dup(x) {
  var len = x.length | 0;
  var v = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    v[i] = x[i];
  }
  v.tag = x.tag | 0;
  return v;
}

function caml_obj_truncate(x, new_size) {
  var len = x.length | 0;
  if (new_size <= 0 || new_size > len) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Obj.truncate"
        ];
  } else if (len !== new_size) {
    for(var i = new_size ,i_finish = len - 1 | 0; i <= i_finish; ++i){
      x[i] = 0;
    }
    x.length = new_size;
    return /* () */0;
  } else {
    return 0;
  }
}

function caml_lazy_make_forward(x) {
  return Block.__(250, [x]);
}

function caml_update_dummy(x, y) {
  var len = y.length | 0;
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    x[i] = y[i];
  }
  var y_tag = y.tag | 0;
  if (y_tag !== 0) {
    x.tag = y_tag;
    return /* () */0;
  } else {
    return 0;
  }
}

function for_in (o,foo){
        for (var x in o) { foo(x) }
      };

function caml_compare(_a, _b) {
  while(true) {
    var b = _b;
    var a = _a;
    if (a === b) {
      return 0;
    } else {
      var a_type = typeof a;
      var b_type = typeof b;
      var exit = 0;
      switch (a_type) {
        case "boolean" : 
            if (b_type === "boolean") {
              return Caml_primitive.caml_bool_compare(a, b);
            } else {
              exit = 1;
            }
            break;
        case "function" : 
            if (b_type === "function") {
              throw [
                    Caml_builtin_exceptions.invalid_argument,
                    "compare: functional value"
                  ];
            } else {
              exit = 1;
            }
            break;
        case "number" : 
            if (b_type === "number") {
              return Caml_primitive.caml_int_compare(a, b);
            } else {
              exit = 1;
            }
            break;
        case "string" : 
            if (b_type === "string") {
              return Caml_primitive.caml_string_compare(a, b);
            } else {
              return 1;
            }
        case "undefined" : 
            return -1;
        default:
          exit = 1;
      }
      if (exit === 1) {
        switch (b_type) {
          case "string" : 
              return -1;
          case "undefined" : 
              return 1;
          default:
            if (a_type === "boolean") {
              return 1;
            } else if (b_type === "boolean") {
              return -1;
            } else if (a_type === "function") {
              return 1;
            } else if (b_type === "function") {
              return -1;
            } else if (a_type === "number") {
              if (b === null || b.tag === 256) {
                return 1;
              } else {
                return -1;
              }
            } else if (b_type === "number") {
              if (a === null || a.tag === 256) {
                return -1;
              } else {
                return 1;
              }
            } else if (a === null) {
              if (b.tag === 256) {
                return 1;
              } else {
                return -1;
              }
            } else if (b === null) {
              if (a.tag === 256) {
                return -1;
              } else {
                return 1;
              }
            } else {
              var tag_a = a.tag | 0;
              var tag_b = b.tag | 0;
              if (tag_a === 250) {
                _a = a[0];
                continue ;
              } else if (tag_b === 250) {
                _b = b[0];
                continue ;
              } else if (tag_a === 256) {
                if (tag_b === 256) {
                  return Caml_primitive.caml_int_compare(a[1], b[1]);
                } else {
                  return -1;
                }
              } else if (tag_a === 248) {
                return Caml_primitive.caml_int_compare(a[1], b[1]);
              } else if (tag_a === 251) {
                throw [
                      Caml_builtin_exceptions.invalid_argument,
                      "equal: abstract value"
                    ];
              } else if (tag_a !== tag_b) {
                if (tag_a < tag_b) {
                  return -1;
                } else {
                  return 1;
                }
              } else {
                var len_a = a.length | 0;
                var len_b = b.length | 0;
                if (len_a === len_b) {
                  if (Array.isArray(a)) {
                    var a$1 = a;
                    var b$1 = b;
                    var _i = 0;
                    var same_length = len_a;
                    while(true) {
                      var i = _i;
                      if (i === same_length) {
                        return 0;
                      } else {
                        var res = caml_compare(a$1[i], b$1[i]);
                        if (res !== 0) {
                          return res;
                        } else {
                          _i = i + 1 | 0;
                          continue ;
                        }
                      }
                    };
                  } else if ((a instanceof Date && b instanceof Date)) {
                    return (a - b);
                  } else {
                    var a$2 = a;
                    var b$2 = b;
                    var min_key_lhs = /* record */[/* contents */undefined];
                    var min_key_rhs = /* record */[/* contents */undefined];
                    var do_key = function (param, key) {
                      var min_key = param[2];
                      var b = param[1];
                      if (!b.hasOwnProperty(key) || caml_compare(param[0][key], b[key]) > 0) {
                        var match = min_key[0];
                        if (match !== undefined && key >= match) {
                          return 0;
                        } else {
                          min_key[0] = key;
                          return /* () */0;
                        }
                      } else {
                        return 0;
                      }
                    };
                    var partial_arg = /* tuple */[
                      a$2,
                      b$2,
                      min_key_rhs
                    ];
                    var do_key_a = (function(partial_arg){
                    return function do_key_a(param) {
                      return do_key(partial_arg, param);
                    }
                    }(partial_arg));
                    var partial_arg$1 = /* tuple */[
                      b$2,
                      a$2,
                      min_key_lhs
                    ];
                    var do_key_b = (function(partial_arg$1){
                    return function do_key_b(param) {
                      return do_key(partial_arg$1, param);
                    }
                    }(partial_arg$1));
                    for_in(a$2, do_key_a);
                    for_in(b$2, do_key_b);
                    var match = min_key_lhs[0];
                    var match$1 = min_key_rhs[0];
                    if (match !== undefined) {
                      if (match$1 !== undefined) {
                        return Caml_primitive.caml_string_compare(match, match$1);
                      } else {
                        return -1;
                      }
                    } else if (match$1 !== undefined) {
                      return 1;
                    } else {
                      return 0;
                    }
                  }
                } else if (len_a < len_b) {
                  var a$3 = a;
                  var b$3 = b;
                  var _i$1 = 0;
                  var short_length = len_a;
                  while(true) {
                    var i$1 = _i$1;
                    if (i$1 === short_length) {
                      return -1;
                    } else {
                      var res$1 = caml_compare(a$3[i$1], b$3[i$1]);
                      if (res$1 !== 0) {
                        return res$1;
                      } else {
                        _i$1 = i$1 + 1 | 0;
                        continue ;
                      }
                    }
                  };
                } else {
                  var a$4 = a;
                  var b$4 = b;
                  var _i$2 = 0;
                  var short_length$1 = len_b;
                  while(true) {
                    var i$2 = _i$2;
                    if (i$2 === short_length$1) {
                      return 1;
                    } else {
                      var res$2 = caml_compare(a$4[i$2], b$4[i$2]);
                      if (res$2 !== 0) {
                        return res$2;
                      } else {
                        _i$2 = i$2 + 1 | 0;
                        continue ;
                      }
                    }
                  };
                }
              }
            }
        }
      }
      
    }
  };
}

function caml_equal(_a, _b) {
  while(true) {
    var b = _b;
    var a = _a;
    if (a === b) {
      return true;
    } else {
      var a_type = typeof a;
      if (a_type === "string" || a_type === "number" || a_type === "boolean" || a_type === "undefined" || a === null) {
        return false;
      } else {
        var b_type = typeof b;
        if (a_type === "function" || b_type === "function") {
          throw [
                Caml_builtin_exceptions.invalid_argument,
                "equal: functional value"
              ];
        } else if (b_type === "number" || b_type === "undefined" || b === null) {
          return false;
        } else {
          var tag_a = a.tag | 0;
          var tag_b = b.tag | 0;
          if (tag_a === 250) {
            _a = a[0];
            continue ;
          } else if (tag_b === 250) {
            _b = b[0];
            continue ;
          } else if (tag_a === 248) {
            return a[1] === b[1];
          } else if (tag_a === 251) {
            throw [
                  Caml_builtin_exceptions.invalid_argument,
                  "equal: abstract value"
                ];
          } else if (tag_a !== tag_b) {
            return false;
          } else if (tag_a === 256) {
            return a[1] === b[1];
          } else {
            var len_a = a.length | 0;
            var len_b = b.length | 0;
            if (len_a === len_b) {
              if (Array.isArray(a)) {
                var a$1 = a;
                var b$1 = b;
                var _i = 0;
                var same_length = len_a;
                while(true) {
                  var i = _i;
                  if (i === same_length) {
                    return true;
                  } else if (caml_equal(a$1[i], b$1[i])) {
                    _i = i + 1 | 0;
                    continue ;
                  } else {
                    return false;
                  }
                };
              } else if ((a instanceof Date && b instanceof Date)) {
                return !(a > b || a < b);
              } else {
                var a$2 = a;
                var b$2 = b;
                var result = /* record */[/* contents */true];
                var do_key_a = (function(b$2,result){
                return function do_key_a(key) {
                  if (b$2.hasOwnProperty(key)) {
                    return 0;
                  } else {
                    result[0] = false;
                    return /* () */0;
                  }
                }
                }(b$2,result));
                var do_key_b = (function(a$2,b$2,result){
                return function do_key_b(key) {
                  if (!a$2.hasOwnProperty(key) || !caml_equal(b$2[key], a$2[key])) {
                    result[0] = false;
                    return /* () */0;
                  } else {
                    return 0;
                  }
                }
                }(a$2,b$2,result));
                for_in(a$2, do_key_a);
                if (result[0]) {
                  for_in(b$2, do_key_b);
                }
                return result[0];
              }
            } else {
              return false;
            }
          }
        }
      }
    }
  };
}

function caml_equal_null(x, y) {
  if (y !== null) {
    return caml_equal(x, y);
  } else {
    return x === y;
  }
}

function caml_equal_undefined(x, y) {
  if (y !== undefined) {
    return caml_equal(x, y);
  } else {
    return x === y;
  }
}

function caml_equal_nullable(x, y) {
  if (y == null) {
    return x === y;
  } else {
    return caml_equal(x, y);
  }
}

function caml_notequal(a, b) {
  return !caml_equal(a, b);
}

function caml_greaterequal(a, b) {
  return caml_compare(a, b) >= 0;
}

function caml_greaterthan(a, b) {
  return caml_compare(a, b) > 0;
}

function caml_lessequal(a, b) {
  return caml_compare(a, b) <= 0;
}

function caml_lessthan(a, b) {
  return caml_compare(a, b) < 0;
}

function caml_min(x, y) {
  if (caml_compare(x, y) <= 0) {
    return x;
  } else {
    return y;
  }
}

function caml_max(x, y) {
  if (caml_compare(x, y) >= 0) {
    return x;
  } else {
    return y;
  }
}

function caml_obj_set_tag(prim, prim$1) {
  prim.tag = prim$1;
  return /* () */0;
}

exports.caml_obj_block = caml_obj_block;
exports.caml_obj_dup = caml_obj_dup;
exports.caml_obj_truncate = caml_obj_truncate;
exports.caml_lazy_make_forward = caml_lazy_make_forward;
exports.caml_update_dummy = caml_update_dummy;
exports.caml_compare = caml_compare;
exports.caml_equal = caml_equal;
exports.caml_equal_null = caml_equal_null;
exports.caml_equal_undefined = caml_equal_undefined;
exports.caml_equal_nullable = caml_equal_nullable;
exports.caml_notequal = caml_notequal;
exports.caml_greaterequal = caml_greaterequal;
exports.caml_greaterthan = caml_greaterthan;
exports.caml_lessthan = caml_lessthan;
exports.caml_lessequal = caml_lessequal;
exports.caml_min = caml_min;
exports.caml_max = caml_max;
exports.caml_obj_set_tag = caml_obj_set_tag;
/* No side effect */


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



function __(tag, block) {
  block.tag = tag;
  return block;
}

function record(meta, xs) {
  return Object.defineProperty(xs, Symbol.for("BsRecord"), {
              value: meta
            });
}

function variant(meta, tag, xs) {
  xs.tag = tag;
  return Object.defineProperty(xs, Symbol.for("BsVariant"), {
              value: meta
            });
}

function simpleVariant(meta, xs) {
  return Object.defineProperty(xs, Symbol.for("BsVariant"), {
              value: meta
            });
}

function localModule(meta, xs) {
  return Object.defineProperty(xs, Symbol.for("BsLocalModule"), {
              value: meta
            });
}

function polyVar(meta, xs) {
  return Object.defineProperty(xs, Symbol.for("BsPolyVar"), {
              value: meta
            });
}

function spliceApply (fn,args){
  var i, argLen; 
  argLen = args.length
  var applied = []
  for(i = 0; i < argLen - 1; ++i){
    applied.push(args[i])
  }
  var lastOne = args[argLen - 1]
  for(i = 0; i < lastOne.length; ++i ){
    applied.push(lastOne[i])
  }
  return fn.apply(null,applied)
};

function spliceObjApply (obj,name,args){
  var i, argLen; 
  argLen = args.length
  var applied = []
  for(i = 0; i < argLen - 1; ++i){
    applied.push(args[i])
  }
  var lastOne = args[argLen - 1]
  for(i = 0; i < lastOne.length; ++i ){
    applied.push(lastOne[i])
  }
  return (obj[name]).apply(obj,applied)
};

exports.__ = __;
exports.record = record;
exports.variant = variant;
exports.simpleVariant = simpleVariant;
exports.localModule = localModule;
exports.polyVar = polyVar;
exports.spliceApply = spliceApply;
exports.spliceObjApply = spliceObjApply;
/* No side effect */


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



function caml_int_compare(x, y) {
  if (x < y) {
    return -1;
  } else if (x === y) {
    return 0;
  } else {
    return 1;
  }
}

function caml_bool_compare(x, y) {
  if (x) {
    if (y) {
      return 0;
    } else {
      return 1;
    }
  } else if (y) {
    return -1;
  } else {
    return 0;
  }
}

function caml_float_compare(x, y) {
  if (x === y) {
    return 0;
  } else if (x < y) {
    return -1;
  } else if (x > y || x === x) {
    return 1;
  } else if (y === y) {
    return -1;
  } else {
    return 0;
  }
}

function caml_string_compare(s1, s2) {
  if (s1 === s2) {
    return 0;
  } else if (s1 < s2) {
    return -1;
  } else {
    return 1;
  }
}

function caml_bytes_compare_aux(s1, s2, _off, len, def) {
  while(true) {
    var off = _off;
    if (off < len) {
      var a = s1[off];
      var b = s2[off];
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        _off = off + 1 | 0;
        continue ;
      }
    } else {
      return def;
    }
  };
}

function caml_bytes_compare(s1, s2) {
  var len1 = s1.length;
  var len2 = s2.length;
  if (len1 === len2) {
    return caml_bytes_compare_aux(s1, s2, 0, len1, 0);
  } else if (len1 < len2) {
    return caml_bytes_compare_aux(s1, s2, 0, len1, -1);
  } else {
    return caml_bytes_compare_aux(s1, s2, 0, len2, 1);
  }
}

function caml_bytes_equal(s1, s2) {
  var len1 = s1.length;
  var len2 = s2.length;
  if (len1 === len2) {
    var s1$1 = s1;
    var s2$1 = s2;
    var _off = 0;
    var len = len1;
    while(true) {
      var off = _off;
      if (off === len) {
        return true;
      } else {
        var a = s1$1[off];
        var b = s2$1[off];
        if (a === b) {
          _off = off + 1 | 0;
          continue ;
        } else {
          return false;
        }
      }
    };
  } else {
    return false;
  }
}

function caml_bool_min(x, y) {
  if (x) {
    return y;
  } else {
    return x;
  }
}

function caml_int_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_float_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_string_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_nativeint_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_int32_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_bool_max(x, y) {
  if (x) {
    return x;
  } else {
    return y;
  }
}

function caml_int_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function caml_float_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function caml_string_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function caml_nativeint_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function caml_int32_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

var caml_nativeint_compare = caml_int_compare;

var caml_int32_compare = caml_int_compare;

exports.caml_bytes_compare = caml_bytes_compare;
exports.caml_bytes_equal = caml_bytes_equal;
exports.caml_int_compare = caml_int_compare;
exports.caml_bool_compare = caml_bool_compare;
exports.caml_float_compare = caml_float_compare;
exports.caml_nativeint_compare = caml_nativeint_compare;
exports.caml_string_compare = caml_string_compare;
exports.caml_int32_compare = caml_int32_compare;
exports.caml_bool_min = caml_bool_min;
exports.caml_int_min = caml_int_min;
exports.caml_float_min = caml_float_min;
exports.caml_string_min = caml_string_min;
exports.caml_nativeint_min = caml_nativeint_min;
exports.caml_int32_min = caml_int32_min;
exports.caml_bool_max = caml_bool_max;
exports.caml_int_max = caml_int_max;
exports.caml_float_max = caml_float_max;
exports.caml_string_max = caml_string_max;
exports.caml_nativeint_max = caml_nativeint_max;
exports.caml_int32_max = caml_int32_max;
/* No side effect */


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Caml_builtin_exceptions = __webpack_require__(0);

function div(x, y) {
  if (y === 0) {
    throw Caml_builtin_exceptions.division_by_zero;
  } else {
    return x / y | 0;
  }
}

function mod_(x, y) {
  if (y === 0) {
    throw Caml_builtin_exceptions.division_by_zero;
  } else {
    return x % y;
  }
}

function caml_bswap16(x) {
  return ((x & 255) << 8) | ((x & 65280) >>> 8);
}

function caml_int32_bswap(x) {
  return ((x & 255) << 24) | ((x & 65280) << 8) | ((x & 16711680) >>> 8) | ((x & 4278190080) >>> 24);
}

var imul = ( Math.imul || function (x,y) {
  y |= 0; return ((((x >> 16) * y) << 16) + (x & 0xffff) * y)|0; 
}
);

var caml_nativeint_bswap = caml_int32_bswap;

exports.div = div;
exports.mod_ = mod_;
exports.caml_bswap16 = caml_bswap16;
exports.caml_int32_bswap = caml_int32_bswap;
exports.caml_nativeint_bswap = caml_nativeint_bswap;
exports.imul = imul;
/* imul Not a pure module */


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var id = /* record */[/* contents */0];

function caml_set_oo_id(b) {
  b[1] = id[0];
  id[0] += 1;
  return b;
}

function caml_fresh_oo_id(param) {
  id[0] += 1;
  return id[0];
}

function create(str) {
  var v_001 = caml_fresh_oo_id(/* () */0);
  var v = /* tuple */[
    str,
    v_001
  ];
  v.tag = 248;
  return v;
}

function caml_is_extension(e) {
  if (e === undefined) {
    return false;
  } else if (e.tag === 248) {
    return true;
  } else {
    var slot = e[0];
    if (slot !== undefined) {
      return slot.tag === 248;
    } else {
      return false;
    }
  }
}

exports.caml_set_oo_id = caml_set_oo_id;
exports.caml_fresh_oo_id = caml_fresh_oo_id;
exports.create = create;
exports.caml_is_extension = caml_is_extension;
/* No side effect */


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Char = __webpack_require__(15);
var List = __webpack_require__(10);
var Curry = __webpack_require__(1);
var Caml_obj = __webpack_require__(4);
var Caml_bytes = __webpack_require__(3);
var Caml_int32 = __webpack_require__(7);
var Caml_primitive = __webpack_require__(6);
var Caml_builtin_exceptions = __webpack_require__(0);

function make(n, c) {
  var s = Caml_bytes.caml_create_bytes(n);
  Caml_bytes.caml_fill_bytes(s, 0, n, c);
  return s;
}

function init(n, f) {
  var s = Caml_bytes.caml_create_bytes(n);
  for(var i = 0 ,i_finish = n - 1 | 0; i <= i_finish; ++i){
    s[i] = Curry._1(f, i);
  }
  return s;
}

var empty = [];

function copy(s) {
  var len = s.length;
  var r = Caml_bytes.caml_create_bytes(len);
  Caml_bytes.caml_blit_bytes(s, 0, r, 0, len);
  return r;
}

function to_string(b) {
  return Caml_bytes.bytes_to_string(copy(b));
}

function of_string(s) {
  return copy(Caml_bytes.bytes_of_string(s));
}

function sub(s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "String.sub / Bytes.sub"
        ];
  } else {
    var r = Caml_bytes.caml_create_bytes(len);
    Caml_bytes.caml_blit_bytes(s, ofs, r, 0, len);
    return r;
  }
}

function sub_string(b, ofs, len) {
  return Caml_bytes.bytes_to_string(sub(b, ofs, len));
}

function extend(s, left, right) {
  var len = (s.length + left | 0) + right | 0;
  var r = Caml_bytes.caml_create_bytes(len);
  var match = left < 0 ? /* tuple */[
      -left | 0,
      0
    ] : /* tuple */[
      0,
      left
    ];
  var dstoff = match[1];
  var srcoff = match[0];
  var cpylen = Caml_primitive.caml_int_min(s.length - srcoff | 0, len - dstoff | 0);
  if (cpylen > 0) {
    Caml_bytes.caml_blit_bytes(s, srcoff, r, dstoff, cpylen);
  }
  return r;
}

function fill(s, ofs, len, c) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "String.fill / Bytes.fill"
        ];
  } else {
    return Caml_bytes.caml_fill_bytes(s, ofs, len, c);
  }
}

function blit(s1, ofs1, s2, ofs2, len) {
  if (len < 0 || ofs1 < 0 || ofs1 > (s1.length - len | 0) || ofs2 < 0 || ofs2 > (s2.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Bytes.blit"
        ];
  } else {
    return Caml_bytes.caml_blit_bytes(s1, ofs1, s2, ofs2, len);
  }
}

function blit_string(s1, ofs1, s2, ofs2, len) {
  if (len < 0 || ofs1 < 0 || ofs1 > (s1.length - len | 0) || ofs2 < 0 || ofs2 > (s2.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "String.blit / Bytes.blit_string"
        ];
  } else {
    return Caml_bytes.caml_blit_string(s1, ofs1, s2, ofs2, len);
  }
}

function iter(f, a) {
  for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
    Curry._1(f, a[i]);
  }
  return /* () */0;
}

function iteri(f, a) {
  for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
    Curry._2(f, i, a[i]);
  }
  return /* () */0;
}

function concat(sep, l) {
  if (l) {
    var hd = l[0];
    var num = /* record */[/* contents */0];
    var len = /* record */[/* contents */0];
    List.iter((function (s) {
            num[0] = num[0] + 1 | 0;
            len[0] = len[0] + s.length | 0;
            return /* () */0;
          }), l);
    var r = Caml_bytes.caml_create_bytes(len[0] + Caml_int32.imul(sep.length, num[0] - 1 | 0) | 0);
    Caml_bytes.caml_blit_bytes(hd, 0, r, 0, hd.length);
    var pos = /* record */[/* contents */hd.length];
    List.iter((function (s) {
            Caml_bytes.caml_blit_bytes(sep, 0, r, pos[0], sep.length);
            pos[0] = pos[0] + sep.length | 0;
            Caml_bytes.caml_blit_bytes(s, 0, r, pos[0], s.length);
            pos[0] = pos[0] + s.length | 0;
            return /* () */0;
          }), l[1]);
    return r;
  } else {
    return empty;
  }
}

function cat(s1, s2) {
  var l1 = s1.length;
  var l2 = s2.length;
  var r = Caml_bytes.caml_create_bytes(l1 + l2 | 0);
  Caml_bytes.caml_blit_bytes(s1, 0, r, 0, l1);
  Caml_bytes.caml_blit_bytes(s2, 0, r, l1, l2);
  return r;
}

function is_space(param) {
  var switcher = param - 9 | 0;
  if (switcher > 4 || switcher < 0) {
    return switcher === 23;
  } else {
    return switcher !== 2;
  }
}

function trim(s) {
  var len = s.length;
  var i = 0;
  while(i < len && is_space(s[i])) {
    i = i + 1 | 0;
  };
  var j = len - 1 | 0;
  while(j >= i && is_space(s[j])) {
    j = j - 1 | 0;
  };
  if (j >= i) {
    return sub(s, i, (j - i | 0) + 1 | 0);
  } else {
    return empty;
  }
}

function escaped(s) {
  var n = 0;
  for(var i = 0 ,i_finish = s.length - 1 | 0; i <= i_finish; ++i){
    var match = s[i];
    var tmp;
    if (match >= 32) {
      var switcher = match - 34 | 0;
      tmp = switcher > 58 || switcher < 0 ? (
          switcher >= 93 ? 4 : 1
        ) : (
          switcher > 57 || switcher < 1 ? 2 : 1
        );
    } else {
      tmp = match >= 11 ? (
          match !== 13 ? 4 : 2
        ) : (
          match >= 8 ? 2 : 4
        );
    }
    n = n + tmp | 0;
  }
  if (n === s.length) {
    return copy(s);
  } else {
    var s$prime = Caml_bytes.caml_create_bytes(n);
    n = 0;
    for(var i$1 = 0 ,i_finish$1 = s.length - 1 | 0; i$1 <= i_finish$1; ++i$1){
      var c = s[i$1];
      var exit = 0;
      if (c >= 35) {
        if (c !== 92) {
          if (c >= 127) {
            exit = 1;
          } else {
            s$prime[n] = c;
          }
        } else {
          exit = 2;
        }
      } else if (c >= 32) {
        if (c >= 34) {
          exit = 2;
        } else {
          s$prime[n] = c;
        }
      } else if (c >= 14) {
        exit = 1;
      } else {
        switch (c) {
          case 8 : 
              s$prime[n] = /* "\\" */92;
              n = n + 1 | 0;
              s$prime[n] = /* "b" */98;
              break;
          case 9 : 
              s$prime[n] = /* "\\" */92;
              n = n + 1 | 0;
              s$prime[n] = /* "t" */116;
              break;
          case 10 : 
              s$prime[n] = /* "\\" */92;
              n = n + 1 | 0;
              s$prime[n] = /* "n" */110;
              break;
          case 0 : 
          case 1 : 
          case 2 : 
          case 3 : 
          case 4 : 
          case 5 : 
          case 6 : 
          case 7 : 
          case 11 : 
          case 12 : 
              exit = 1;
              break;
          case 13 : 
              s$prime[n] = /* "\\" */92;
              n = n + 1 | 0;
              s$prime[n] = /* "r" */114;
              break;
          
        }
      }
      switch (exit) {
        case 1 : 
            s$prime[n] = /* "\\" */92;
            n = n + 1 | 0;
            s$prime[n] = 48 + (c / 100 | 0) | 0;
            n = n + 1 | 0;
            s$prime[n] = 48 + (c / 10 | 0) % 10 | 0;
            n = n + 1 | 0;
            s$prime[n] = 48 + c % 10 | 0;
            break;
        case 2 : 
            s$prime[n] = /* "\\" */92;
            n = n + 1 | 0;
            s$prime[n] = c;
            break;
        
      }
      n = n + 1 | 0;
    }
    return s$prime;
  }
}

function map(f, s) {
  var l = s.length;
  if (l === 0) {
    return s;
  } else {
    var r = Caml_bytes.caml_create_bytes(l);
    for(var i = 0 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
      r[i] = Curry._1(f, s[i]);
    }
    return r;
  }
}

function mapi(f, s) {
  var l = s.length;
  if (l === 0) {
    return s;
  } else {
    var r = Caml_bytes.caml_create_bytes(l);
    for(var i = 0 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
      r[i] = Curry._2(f, i, s[i]);
    }
    return r;
  }
}

function uppercase(s) {
  return map(Char.uppercase, s);
}

function lowercase(s) {
  return map(Char.lowercase, s);
}

function apply1(f, s) {
  if (s.length === 0) {
    return s;
  } else {
    var r = copy(s);
    r[0] = Curry._1(f, s[0]);
    return r;
  }
}

function capitalize(s) {
  return apply1(Char.uppercase, s);
}

function uncapitalize(s) {
  return apply1(Char.lowercase, s);
}

function index_rec(s, lim, _i, c) {
  while(true) {
    var i = _i;
    if (i >= lim) {
      throw Caml_builtin_exceptions.not_found;
    } else if (s[i] === c) {
      return i;
    } else {
      _i = i + 1 | 0;
      continue ;
    }
  };
}

function index(s, c) {
  return index_rec(s, s.length, 0, c);
}

function index_from(s, i, c) {
  var l = s.length;
  if (i < 0 || i > l) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "String.index_from / Bytes.index_from"
        ];
  } else {
    return index_rec(s, l, i, c);
  }
}

function rindex_rec(s, _i, c) {
  while(true) {
    var i = _i;
    if (i < 0) {
      throw Caml_builtin_exceptions.not_found;
    } else if (s[i] === c) {
      return i;
    } else {
      _i = i - 1 | 0;
      continue ;
    }
  };
}

function rindex(s, c) {
  return rindex_rec(s, s.length - 1 | 0, c);
}

function rindex_from(s, i, c) {
  if (i < -1 || i >= s.length) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "String.rindex_from / Bytes.rindex_from"
        ];
  } else {
    return rindex_rec(s, i, c);
  }
}

function contains_from(s, i, c) {
  var l = s.length;
  if (i < 0 || i > l) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "String.contains_from / Bytes.contains_from"
        ];
  } else {
    try {
      index_rec(s, l, i, c);
      return true;
    }
    catch (exn){
      if (exn === Caml_builtin_exceptions.not_found) {
        return false;
      } else {
        throw exn;
      }
    }
  }
}

function contains(s, c) {
  return contains_from(s, 0, c);
}

function rcontains_from(s, i, c) {
  if (i < 0 || i >= s.length) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "String.rcontains_from / Bytes.rcontains_from"
        ];
  } else {
    try {
      rindex_rec(s, i, c);
      return true;
    }
    catch (exn){
      if (exn === Caml_builtin_exceptions.not_found) {
        return false;
      } else {
        throw exn;
      }
    }
  }
}

var compare = Caml_obj.caml_compare;

var unsafe_to_string = Caml_bytes.bytes_to_string;

var unsafe_of_string = Caml_bytes.bytes_of_string;

exports.make = make;
exports.init = init;
exports.empty = empty;
exports.copy = copy;
exports.of_string = of_string;
exports.to_string = to_string;
exports.sub = sub;
exports.sub_string = sub_string;
exports.extend = extend;
exports.fill = fill;
exports.blit = blit;
exports.blit_string = blit_string;
exports.concat = concat;
exports.cat = cat;
exports.iter = iter;
exports.iteri = iteri;
exports.map = map;
exports.mapi = mapi;
exports.trim = trim;
exports.escaped = escaped;
exports.index = index;
exports.rindex = rindex;
exports.index_from = index_from;
exports.rindex_from = rindex_from;
exports.contains = contains;
exports.contains_from = contains_from;
exports.rcontains_from = rcontains_from;
exports.uppercase = uppercase;
exports.lowercase = lowercase;
exports.capitalize = capitalize;
exports.uncapitalize = uncapitalize;
exports.compare = compare;
exports.unsafe_to_string = unsafe_to_string;
exports.unsafe_of_string = unsafe_of_string;
/* No side effect */


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Curry = __webpack_require__(1);
var Caml_obj = __webpack_require__(4);
var Pervasives = __webpack_require__(2);
var Caml_builtin_exceptions = __webpack_require__(0);

function length(l) {
  var _len = 0;
  var _param = l;
  while(true) {
    var param = _param;
    var len = _len;
    if (param) {
      _param = param[1];
      _len = len + 1 | 0;
      continue ;
    } else {
      return len;
    }
  };
}

function hd(param) {
  if (param) {
    return param[0];
  } else {
    throw [
          Caml_builtin_exceptions.failure,
          "hd"
        ];
  }
}

function tl(param) {
  if (param) {
    return param[1];
  } else {
    throw [
          Caml_builtin_exceptions.failure,
          "tl"
        ];
  }
}

function nth(l, n) {
  if (n < 0) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "List.nth"
        ];
  } else {
    var _l = l;
    var _n = n;
    while(true) {
      var n$1 = _n;
      var l$1 = _l;
      if (l$1) {
        if (n$1 === 0) {
          return l$1[0];
        } else {
          _n = n$1 - 1 | 0;
          _l = l$1[1];
          continue ;
        }
      } else {
        throw [
              Caml_builtin_exceptions.failure,
              "nth"
            ];
      }
    };
  }
}

function rev_append(_l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1) {
      _l2 = /* :: */[
        l1[0],
        l2
      ];
      _l1 = l1[1];
      continue ;
    } else {
      return l2;
    }
  };
}

function rev(l) {
  return rev_append(l, /* [] */0);
}

function flatten(param) {
  if (param) {
    return Pervasives.$at(param[0], flatten(param[1]));
  } else {
    return /* [] */0;
  }
}

function map(f, param) {
  if (param) {
    var r = Curry._1(f, param[0]);
    return /* :: */[
            r,
            map(f, param[1])
          ];
  } else {
    return /* [] */0;
  }
}

function mapi(i, f, param) {
  if (param) {
    var r = Curry._2(f, i, param[0]);
    return /* :: */[
            r,
            mapi(i + 1 | 0, f, param[1])
          ];
  } else {
    return /* [] */0;
  }
}

function mapi$1(f, l) {
  return mapi(0, f, l);
}

function rev_map(f, l) {
  var _accu = /* [] */0;
  var _param = l;
  while(true) {
    var param = _param;
    var accu = _accu;
    if (param) {
      _param = param[1];
      _accu = /* :: */[
        Curry._1(f, param[0]),
        accu
      ];
      continue ;
    } else {
      return accu;
    }
  };
}

function iter(f, _param) {
  while(true) {
    var param = _param;
    if (param) {
      Curry._1(f, param[0]);
      _param = param[1];
      continue ;
    } else {
      return /* () */0;
    }
  };
}

function iteri(f, l) {
  var _i = 0;
  var f$1 = f;
  var _param = l;
  while(true) {
    var param = _param;
    var i = _i;
    if (param) {
      Curry._2(f$1, i, param[0]);
      _param = param[1];
      _i = i + 1 | 0;
      continue ;
    } else {
      return /* () */0;
    }
  };
}

function fold_left(f, _accu, _l) {
  while(true) {
    var l = _l;
    var accu = _accu;
    if (l) {
      _l = l[1];
      _accu = Curry._2(f, accu, l[0]);
      continue ;
    } else {
      return accu;
    }
  };
}

function fold_right(f, l, accu) {
  if (l) {
    return Curry._2(f, l[0], fold_right(f, l[1], accu));
  } else {
    return accu;
  }
}

function map2(f, l1, l2) {
  if (l1) {
    if (l2) {
      var r = Curry._2(f, l1[0], l2[0]);
      return /* :: */[
              r,
              map2(f, l1[1], l2[1])
            ];
    } else {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "List.map2"
          ];
    }
  } else if (l2) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "List.map2"
        ];
  } else {
    return /* [] */0;
  }
}

function rev_map2(f, l1, l2) {
  var _accu = /* [] */0;
  var _l1 = l1;
  var _l2 = l2;
  while(true) {
    var l2$1 = _l2;
    var l1$1 = _l1;
    var accu = _accu;
    if (l1$1) {
      if (l2$1) {
        _l2 = l2$1[1];
        _l1 = l1$1[1];
        _accu = /* :: */[
          Curry._2(f, l1$1[0], l2$1[0]),
          accu
        ];
        continue ;
      } else {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "List.rev_map2"
            ];
      }
    } else if (l2$1) {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "List.rev_map2"
          ];
    } else {
      return accu;
    }
  };
}

function iter2(f, _l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1) {
      if (l2) {
        Curry._2(f, l1[0], l2[0]);
        _l2 = l2[1];
        _l1 = l1[1];
        continue ;
      } else {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "List.iter2"
            ];
      }
    } else if (l2) {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "List.iter2"
          ];
    } else {
      return /* () */0;
    }
  };
}

function fold_left2(f, _accu, _l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    var accu = _accu;
    if (l1) {
      if (l2) {
        _l2 = l2[1];
        _l1 = l1[1];
        _accu = Curry._3(f, accu, l1[0], l2[0]);
        continue ;
      } else {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "List.fold_left2"
            ];
      }
    } else if (l2) {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "List.fold_left2"
          ];
    } else {
      return accu;
    }
  };
}

function fold_right2(f, l1, l2, accu) {
  if (l1) {
    if (l2) {
      return Curry._3(f, l1[0], l2[0], fold_right2(f, l1[1], l2[1], accu));
    } else {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "List.fold_right2"
          ];
    }
  } else if (l2) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "List.fold_right2"
        ];
  } else {
    return accu;
  }
}

function for_all(p, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (Curry._1(p, param[0])) {
        _param = param[1];
        continue ;
      } else {
        return false;
      }
    } else {
      return true;
    }
  };
}

function exists(p, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (Curry._1(p, param[0])) {
        return true;
      } else {
        _param = param[1];
        continue ;
      }
    } else {
      return false;
    }
  };
}

function for_all2(p, _l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1) {
      if (l2) {
        if (Curry._2(p, l1[0], l2[0])) {
          _l2 = l2[1];
          _l1 = l1[1];
          continue ;
        } else {
          return false;
        }
      } else {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "List.for_all2"
            ];
      }
    } else if (l2) {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "List.for_all2"
          ];
    } else {
      return true;
    }
  };
}

function exists2(p, _l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1) {
      if (l2) {
        if (Curry._2(p, l1[0], l2[0])) {
          return true;
        } else {
          _l2 = l2[1];
          _l1 = l1[1];
          continue ;
        }
      } else {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "List.exists2"
            ];
      }
    } else if (l2) {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "List.exists2"
          ];
    } else {
      return false;
    }
  };
}

function mem(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (Caml_obj.caml_equal(param[0], x)) {
        return true;
      } else {
        _param = param[1];
        continue ;
      }
    } else {
      return false;
    }
  };
}

function memq(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (param[0] === x) {
        return true;
      } else {
        _param = param[1];
        continue ;
      }
    } else {
      return false;
    }
  };
}

function assoc(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      var match = param[0];
      if (Caml_obj.caml_equal(match[0], x)) {
        return match[1];
      } else {
        _param = param[1];
        continue ;
      }
    } else {
      throw Caml_builtin_exceptions.not_found;
    }
  };
}

function assq(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      var match = param[0];
      if (match[0] === x) {
        return match[1];
      } else {
        _param = param[1];
        continue ;
      }
    } else {
      throw Caml_builtin_exceptions.not_found;
    }
  };
}

function mem_assoc(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (Caml_obj.caml_equal(param[0][0], x)) {
        return true;
      } else {
        _param = param[1];
        continue ;
      }
    } else {
      return false;
    }
  };
}

function mem_assq(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (param[0][0] === x) {
        return true;
      } else {
        _param = param[1];
        continue ;
      }
    } else {
      return false;
    }
  };
}

function remove_assoc(x, param) {
  if (param) {
    var l = param[1];
    var pair = param[0];
    if (Caml_obj.caml_equal(pair[0], x)) {
      return l;
    } else {
      return /* :: */[
              pair,
              remove_assoc(x, l)
            ];
    }
  } else {
    return /* [] */0;
  }
}

function remove_assq(x, param) {
  if (param) {
    var l = param[1];
    var pair = param[0];
    if (pair[0] === x) {
      return l;
    } else {
      return /* :: */[
              pair,
              remove_assq(x, l)
            ];
    }
  } else {
    return /* [] */0;
  }
}

function find(p, _param) {
  while(true) {
    var param = _param;
    if (param) {
      var x = param[0];
      if (Curry._1(p, x)) {
        return x;
      } else {
        _param = param[1];
        continue ;
      }
    } else {
      throw Caml_builtin_exceptions.not_found;
    }
  };
}

function find_all(p) {
  return (function (param) {
      var _accu = /* [] */0;
      var _param = param;
      while(true) {
        var param$1 = _param;
        var accu = _accu;
        if (param$1) {
          var l = param$1[1];
          var x = param$1[0];
          if (Curry._1(p, x)) {
            _param = l;
            _accu = /* :: */[
              x,
              accu
            ];
            continue ;
          } else {
            _param = l;
            continue ;
          }
        } else {
          return rev_append(accu, /* [] */0);
        }
      };
    });
}

function partition(p, l) {
  var _yes = /* [] */0;
  var _no = /* [] */0;
  var _param = l;
  while(true) {
    var param = _param;
    var no = _no;
    var yes = _yes;
    if (param) {
      var l$1 = param[1];
      var x = param[0];
      if (Curry._1(p, x)) {
        _param = l$1;
        _yes = /* :: */[
          x,
          yes
        ];
        continue ;
      } else {
        _param = l$1;
        _no = /* :: */[
          x,
          no
        ];
        continue ;
      }
    } else {
      return /* tuple */[
              rev_append(yes, /* [] */0),
              rev_append(no, /* [] */0)
            ];
    }
  };
}

function split(param) {
  if (param) {
    var match = param[0];
    var match$1 = split(param[1]);
    return /* tuple */[
            /* :: */[
              match[0],
              match$1[0]
            ],
            /* :: */[
              match[1],
              match$1[1]
            ]
          ];
  } else {
    return /* tuple */[
            /* [] */0,
            /* [] */0
          ];
  }
}

function combine(l1, l2) {
  if (l1) {
    if (l2) {
      return /* :: */[
              /* tuple */[
                l1[0],
                l2[0]
              ],
              combine(l1[1], l2[1])
            ];
    } else {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "List.combine"
          ];
    }
  } else if (l2) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "List.combine"
        ];
  } else {
    return /* [] */0;
  }
}

function merge(cmp, l1, l2) {
  if (l1) {
    if (l2) {
      var h2 = l2[0];
      var h1 = l1[0];
      if (Curry._2(cmp, h1, h2) <= 0) {
        return /* :: */[
                h1,
                merge(cmp, l1[1], l2)
              ];
      } else {
        return /* :: */[
                h2,
                merge(cmp, l1, l2[1])
              ];
      }
    } else {
      return l1;
    }
  } else {
    return l2;
  }
}

function chop(_k, _l) {
  while(true) {
    var l = _l;
    var k = _k;
    if (k === 0) {
      return l;
    } else if (l) {
      _l = l[1];
      _k = k - 1 | 0;
      continue ;
    } else {
      throw [
            Caml_builtin_exceptions.assert_failure,
            /* tuple */[
              "list.ml",
              223,
              11
            ]
          ];
    }
  };
}

function stable_sort(cmp, l) {
  var sort = function (n, l) {
    var exit = 0;
    if (n !== 2) {
      if (n !== 3 || !l) {
        exit = 1;
      } else {
        var match = l[1];
        if (match) {
          var match$1 = match[1];
          if (match$1) {
            var x3 = match$1[0];
            var x2 = match[0];
            var x1 = l[0];
            if (Curry._2(cmp, x1, x2) <= 0) {
              if (Curry._2(cmp, x2, x3) <= 0) {
                return /* :: */[
                        x1,
                        /* :: */[
                          x2,
                          /* :: */[
                            x3,
                            /* [] */0
                          ]
                        ]
                      ];
              } else if (Curry._2(cmp, x1, x3) <= 0) {
                return /* :: */[
                        x1,
                        /* :: */[
                          x3,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ]
                      ];
              } else {
                return /* :: */[
                        x3,
                        /* :: */[
                          x1,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ]
                      ];
              }
            } else if (Curry._2(cmp, x1, x3) <= 0) {
              return /* :: */[
                      x2,
                      /* :: */[
                        x1,
                        /* :: */[
                          x3,
                          /* [] */0
                        ]
                      ]
                    ];
            } else if (Curry._2(cmp, x2, x3) <= 0) {
              return /* :: */[
                      x2,
                      /* :: */[
                        x3,
                        /* :: */[
                          x1,
                          /* [] */0
                        ]
                      ]
                    ];
            } else {
              return /* :: */[
                      x3,
                      /* :: */[
                        x2,
                        /* :: */[
                          x1,
                          /* [] */0
                        ]
                      ]
                    ];
            }
          } else {
            exit = 1;
          }
        } else {
          exit = 1;
        }
      }
    } else if (l) {
      var match$2 = l[1];
      if (match$2) {
        var x2$1 = match$2[0];
        var x1$1 = l[0];
        if (Curry._2(cmp, x1$1, x2$1) <= 0) {
          return /* :: */[
                  x1$1,
                  /* :: */[
                    x2$1,
                    /* [] */0
                  ]
                ];
        } else {
          return /* :: */[
                  x2$1,
                  /* :: */[
                    x1$1,
                    /* [] */0
                  ]
                ];
        }
      } else {
        exit = 1;
      }
    } else {
      exit = 1;
    }
    if (exit === 1) {
      var n1 = (n >> 1);
      var n2 = n - n1 | 0;
      var l2 = chop(n1, l);
      var s1 = rev_sort(n1, l);
      var s2 = rev_sort(n2, l2);
      var _l1 = s1;
      var _l2 = s2;
      var _accu = /* [] */0;
      while(true) {
        var accu = _accu;
        var l2$1 = _l2;
        var l1 = _l1;
        if (l1) {
          if (l2$1) {
            var h2 = l2$1[0];
            var h1 = l1[0];
            if (Curry._2(cmp, h1, h2) > 0) {
              _accu = /* :: */[
                h1,
                accu
              ];
              _l1 = l1[1];
              continue ;
            } else {
              _accu = /* :: */[
                h2,
                accu
              ];
              _l2 = l2$1[1];
              continue ;
            }
          } else {
            return rev_append(l1, accu);
          }
        } else {
          return rev_append(l2$1, accu);
        }
      };
    }
    
  };
  var rev_sort = function (n, l) {
    var exit = 0;
    if (n !== 2) {
      if (n !== 3 || !l) {
        exit = 1;
      } else {
        var match = l[1];
        if (match) {
          var match$1 = match[1];
          if (match$1) {
            var x3 = match$1[0];
            var x2 = match[0];
            var x1 = l[0];
            if (Curry._2(cmp, x1, x2) > 0) {
              if (Curry._2(cmp, x2, x3) > 0) {
                return /* :: */[
                        x1,
                        /* :: */[
                          x2,
                          /* :: */[
                            x3,
                            /* [] */0
                          ]
                        ]
                      ];
              } else if (Curry._2(cmp, x1, x3) > 0) {
                return /* :: */[
                        x1,
                        /* :: */[
                          x3,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ]
                      ];
              } else {
                return /* :: */[
                        x3,
                        /* :: */[
                          x1,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ]
                      ];
              }
            } else if (Curry._2(cmp, x1, x3) > 0) {
              return /* :: */[
                      x2,
                      /* :: */[
                        x1,
                        /* :: */[
                          x3,
                          /* [] */0
                        ]
                      ]
                    ];
            } else if (Curry._2(cmp, x2, x3) > 0) {
              return /* :: */[
                      x2,
                      /* :: */[
                        x3,
                        /* :: */[
                          x1,
                          /* [] */0
                        ]
                      ]
                    ];
            } else {
              return /* :: */[
                      x3,
                      /* :: */[
                        x2,
                        /* :: */[
                          x1,
                          /* [] */0
                        ]
                      ]
                    ];
            }
          } else {
            exit = 1;
          }
        } else {
          exit = 1;
        }
      }
    } else if (l) {
      var match$2 = l[1];
      if (match$2) {
        var x2$1 = match$2[0];
        var x1$1 = l[0];
        if (Curry._2(cmp, x1$1, x2$1) > 0) {
          return /* :: */[
                  x1$1,
                  /* :: */[
                    x2$1,
                    /* [] */0
                  ]
                ];
        } else {
          return /* :: */[
                  x2$1,
                  /* :: */[
                    x1$1,
                    /* [] */0
                  ]
                ];
        }
      } else {
        exit = 1;
      }
    } else {
      exit = 1;
    }
    if (exit === 1) {
      var n1 = (n >> 1);
      var n2 = n - n1 | 0;
      var l2 = chop(n1, l);
      var s1 = sort(n1, l);
      var s2 = sort(n2, l2);
      var _l1 = s1;
      var _l2 = s2;
      var _accu = /* [] */0;
      while(true) {
        var accu = _accu;
        var l2$1 = _l2;
        var l1 = _l1;
        if (l1) {
          if (l2$1) {
            var h2 = l2$1[0];
            var h1 = l1[0];
            if (Curry._2(cmp, h1, h2) <= 0) {
              _accu = /* :: */[
                h1,
                accu
              ];
              _l1 = l1[1];
              continue ;
            } else {
              _accu = /* :: */[
                h2,
                accu
              ];
              _l2 = l2$1[1];
              continue ;
            }
          } else {
            return rev_append(l1, accu);
          }
        } else {
          return rev_append(l2$1, accu);
        }
      };
    }
    
  };
  var len = length(l);
  if (len < 2) {
    return l;
  } else {
    return sort(len, l);
  }
}

function sort_uniq(cmp, l) {
  var sort = function (n, l) {
    var exit = 0;
    if (n !== 2) {
      if (n !== 3 || !l) {
        exit = 1;
      } else {
        var match = l[1];
        if (match) {
          var match$1 = match[1];
          if (match$1) {
            var x3 = match$1[0];
            var x2 = match[0];
            var x1 = l[0];
            var c = Curry._2(cmp, x1, x2);
            if (c === 0) {
              var c$1 = Curry._2(cmp, x2, x3);
              if (c$1 === 0) {
                return /* :: */[
                        x2,
                        /* [] */0
                      ];
              } else if (c$1 < 0) {
                return /* :: */[
                        x2,
                        /* :: */[
                          x3,
                          /* [] */0
                        ]
                      ];
              } else {
                return /* :: */[
                        x3,
                        /* :: */[
                          x2,
                          /* [] */0
                        ]
                      ];
              }
            } else if (c < 0) {
              var c$2 = Curry._2(cmp, x2, x3);
              if (c$2 === 0) {
                return /* :: */[
                        x1,
                        /* :: */[
                          x2,
                          /* [] */0
                        ]
                      ];
              } else if (c$2 < 0) {
                return /* :: */[
                        x1,
                        /* :: */[
                          x2,
                          /* :: */[
                            x3,
                            /* [] */0
                          ]
                        ]
                      ];
              } else {
                var c$3 = Curry._2(cmp, x1, x3);
                if (c$3 === 0) {
                  return /* :: */[
                          x1,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ];
                } else if (c$3 < 0) {
                  return /* :: */[
                          x1,
                          /* :: */[
                            x3,
                            /* :: */[
                              x2,
                              /* [] */0
                            ]
                          ]
                        ];
                } else {
                  return /* :: */[
                          x3,
                          /* :: */[
                            x1,
                            /* :: */[
                              x2,
                              /* [] */0
                            ]
                          ]
                        ];
                }
              }
            } else {
              var c$4 = Curry._2(cmp, x1, x3);
              if (c$4 === 0) {
                return /* :: */[
                        x2,
                        /* :: */[
                          x1,
                          /* [] */0
                        ]
                      ];
              } else if (c$4 < 0) {
                return /* :: */[
                        x2,
                        /* :: */[
                          x1,
                          /* :: */[
                            x3,
                            /* [] */0
                          ]
                        ]
                      ];
              } else {
                var c$5 = Curry._2(cmp, x2, x3);
                if (c$5 === 0) {
                  return /* :: */[
                          x2,
                          /* :: */[
                            x1,
                            /* [] */0
                          ]
                        ];
                } else if (c$5 < 0) {
                  return /* :: */[
                          x2,
                          /* :: */[
                            x3,
                            /* :: */[
                              x1,
                              /* [] */0
                            ]
                          ]
                        ];
                } else {
                  return /* :: */[
                          x3,
                          /* :: */[
                            x2,
                            /* :: */[
                              x1,
                              /* [] */0
                            ]
                          ]
                        ];
                }
              }
            }
          } else {
            exit = 1;
          }
        } else {
          exit = 1;
        }
      }
    } else if (l) {
      var match$2 = l[1];
      if (match$2) {
        var x2$1 = match$2[0];
        var x1$1 = l[0];
        var c$6 = Curry._2(cmp, x1$1, x2$1);
        if (c$6 === 0) {
          return /* :: */[
                  x1$1,
                  /* [] */0
                ];
        } else if (c$6 < 0) {
          return /* :: */[
                  x1$1,
                  /* :: */[
                    x2$1,
                    /* [] */0
                  ]
                ];
        } else {
          return /* :: */[
                  x2$1,
                  /* :: */[
                    x1$1,
                    /* [] */0
                  ]
                ];
        }
      } else {
        exit = 1;
      }
    } else {
      exit = 1;
    }
    if (exit === 1) {
      var n1 = (n >> 1);
      var n2 = n - n1 | 0;
      var l2 = chop(n1, l);
      var s1 = rev_sort(n1, l);
      var s2 = rev_sort(n2, l2);
      var _l1 = s1;
      var _l2 = s2;
      var _accu = /* [] */0;
      while(true) {
        var accu = _accu;
        var l2$1 = _l2;
        var l1 = _l1;
        if (l1) {
          if (l2$1) {
            var t2 = l2$1[1];
            var h2 = l2$1[0];
            var t1 = l1[1];
            var h1 = l1[0];
            var c$7 = Curry._2(cmp, h1, h2);
            if (c$7 === 0) {
              _accu = /* :: */[
                h1,
                accu
              ];
              _l2 = t2;
              _l1 = t1;
              continue ;
            } else if (c$7 > 0) {
              _accu = /* :: */[
                h1,
                accu
              ];
              _l1 = t1;
              continue ;
            } else {
              _accu = /* :: */[
                h2,
                accu
              ];
              _l2 = t2;
              continue ;
            }
          } else {
            return rev_append(l1, accu);
          }
        } else {
          return rev_append(l2$1, accu);
        }
      };
    }
    
  };
  var rev_sort = function (n, l) {
    var exit = 0;
    if (n !== 2) {
      if (n !== 3 || !l) {
        exit = 1;
      } else {
        var match = l[1];
        if (match) {
          var match$1 = match[1];
          if (match$1) {
            var x3 = match$1[0];
            var x2 = match[0];
            var x1 = l[0];
            var c = Curry._2(cmp, x1, x2);
            if (c === 0) {
              var c$1 = Curry._2(cmp, x2, x3);
              if (c$1 === 0) {
                return /* :: */[
                        x2,
                        /* [] */0
                      ];
              } else if (c$1 > 0) {
                return /* :: */[
                        x2,
                        /* :: */[
                          x3,
                          /* [] */0
                        ]
                      ];
              } else {
                return /* :: */[
                        x3,
                        /* :: */[
                          x2,
                          /* [] */0
                        ]
                      ];
              }
            } else if (c > 0) {
              var c$2 = Curry._2(cmp, x2, x3);
              if (c$2 === 0) {
                return /* :: */[
                        x1,
                        /* :: */[
                          x2,
                          /* [] */0
                        ]
                      ];
              } else if (c$2 > 0) {
                return /* :: */[
                        x1,
                        /* :: */[
                          x2,
                          /* :: */[
                            x3,
                            /* [] */0
                          ]
                        ]
                      ];
              } else {
                var c$3 = Curry._2(cmp, x1, x3);
                if (c$3 === 0) {
                  return /* :: */[
                          x1,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ];
                } else if (c$3 > 0) {
                  return /* :: */[
                          x1,
                          /* :: */[
                            x3,
                            /* :: */[
                              x2,
                              /* [] */0
                            ]
                          ]
                        ];
                } else {
                  return /* :: */[
                          x3,
                          /* :: */[
                            x1,
                            /* :: */[
                              x2,
                              /* [] */0
                            ]
                          ]
                        ];
                }
              }
            } else {
              var c$4 = Curry._2(cmp, x1, x3);
              if (c$4 === 0) {
                return /* :: */[
                        x2,
                        /* :: */[
                          x1,
                          /* [] */0
                        ]
                      ];
              } else if (c$4 > 0) {
                return /* :: */[
                        x2,
                        /* :: */[
                          x1,
                          /* :: */[
                            x3,
                            /* [] */0
                          ]
                        ]
                      ];
              } else {
                var c$5 = Curry._2(cmp, x2, x3);
                if (c$5 === 0) {
                  return /* :: */[
                          x2,
                          /* :: */[
                            x1,
                            /* [] */0
                          ]
                        ];
                } else if (c$5 > 0) {
                  return /* :: */[
                          x2,
                          /* :: */[
                            x3,
                            /* :: */[
                              x1,
                              /* [] */0
                            ]
                          ]
                        ];
                } else {
                  return /* :: */[
                          x3,
                          /* :: */[
                            x2,
                            /* :: */[
                              x1,
                              /* [] */0
                            ]
                          ]
                        ];
                }
              }
            }
          } else {
            exit = 1;
          }
        } else {
          exit = 1;
        }
      }
    } else if (l) {
      var match$2 = l[1];
      if (match$2) {
        var x2$1 = match$2[0];
        var x1$1 = l[0];
        var c$6 = Curry._2(cmp, x1$1, x2$1);
        if (c$6 === 0) {
          return /* :: */[
                  x1$1,
                  /* [] */0
                ];
        } else if (c$6 > 0) {
          return /* :: */[
                  x1$1,
                  /* :: */[
                    x2$1,
                    /* [] */0
                  ]
                ];
        } else {
          return /* :: */[
                  x2$1,
                  /* :: */[
                    x1$1,
                    /* [] */0
                  ]
                ];
        }
      } else {
        exit = 1;
      }
    } else {
      exit = 1;
    }
    if (exit === 1) {
      var n1 = (n >> 1);
      var n2 = n - n1 | 0;
      var l2 = chop(n1, l);
      var s1 = sort(n1, l);
      var s2 = sort(n2, l2);
      var _l1 = s1;
      var _l2 = s2;
      var _accu = /* [] */0;
      while(true) {
        var accu = _accu;
        var l2$1 = _l2;
        var l1 = _l1;
        if (l1) {
          if (l2$1) {
            var t2 = l2$1[1];
            var h2 = l2$1[0];
            var t1 = l1[1];
            var h1 = l1[0];
            var c$7 = Curry._2(cmp, h1, h2);
            if (c$7 === 0) {
              _accu = /* :: */[
                h1,
                accu
              ];
              _l2 = t2;
              _l1 = t1;
              continue ;
            } else if (c$7 < 0) {
              _accu = /* :: */[
                h1,
                accu
              ];
              _l1 = t1;
              continue ;
            } else {
              _accu = /* :: */[
                h2,
                accu
              ];
              _l2 = t2;
              continue ;
            }
          } else {
            return rev_append(l1, accu);
          }
        } else {
          return rev_append(l2$1, accu);
        }
      };
    }
    
  };
  var len = length(l);
  if (len < 2) {
    return l;
  } else {
    return sort(len, l);
  }
}

var append = Pervasives.$at;

var concat = flatten;

var filter = find_all;

var sort = stable_sort;

var fast_sort = stable_sort;

exports.length = length;
exports.hd = hd;
exports.tl = tl;
exports.nth = nth;
exports.rev = rev;
exports.append = append;
exports.rev_append = rev_append;
exports.concat = concat;
exports.flatten = flatten;
exports.iter = iter;
exports.iteri = iteri;
exports.map = map;
exports.mapi = mapi$1;
exports.rev_map = rev_map;
exports.fold_left = fold_left;
exports.fold_right = fold_right;
exports.iter2 = iter2;
exports.map2 = map2;
exports.rev_map2 = rev_map2;
exports.fold_left2 = fold_left2;
exports.fold_right2 = fold_right2;
exports.for_all = for_all;
exports.exists = exists;
exports.for_all2 = for_all2;
exports.exists2 = exists2;
exports.mem = mem;
exports.memq = memq;
exports.find = find;
exports.filter = filter;
exports.find_all = find_all;
exports.partition = partition;
exports.assoc = assoc;
exports.assq = assq;
exports.mem_assoc = mem_assoc;
exports.mem_assq = mem_assq;
exports.remove_assoc = remove_assoc;
exports.remove_assq = remove_assq;
exports.split = split;
exports.combine = combine;
exports.sort = sort;
exports.stable_sort = stable_sort;
exports.fast_sort = fast_sort;
exports.sort_uniq = sort_uniq;
exports.merge = merge;
/* No side effect */


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE


var Curry = __webpack_require__(1);
var Caml_obj = __webpack_require__(4);
var Pervasives = __webpack_require__(2);

function cleq(a1, a2) {
  var exit = 0;
  if (typeof a1 === "number" && a1 === 0) {
    return true;
  } else {
    exit = 1;
  }
  if (exit === 1) {
    if (typeof a2 === "number") {
      return a2 !== 0;
    } else if (typeof a1 === "number") {
      return false;
    } else {
      return Caml_obj.caml_equal(a1, a2);
    }
  }
  
}

function stringofconstant(a) {
  if (typeof a === "number") {
    if (a !== 0) {
      return "T";
    } else {
      return "_|_";
    }
  } else {
    return String(a[0]);
  }
}

function leq(r1, r2) {
  if (cleq(Curry._1(r1, "x"), Curry._1(r2, "x")) && cleq(Curry._1(r1, "y"), Curry._1(r2, "y"))) {
    return cleq(Curry._1(r1, "z"), Curry._1(r2, "z"));
  } else {
    return false;
  }
}

function initialize(vl) {
  return /* () */0;
}

function bot(param, x) {
  return /* BOT */0;
}

function join(r1, r2, x) {
  var a1 = Curry._1(r1, x);
  var a2 = Curry._1(r2, x);
  var exit = 0;
  if (typeof a1 === "number" && a1 === 0) {
    return a2;
  } else {
    exit = 1;
  }
  if (exit === 1) {
    if (typeof a2 === "number") {
      if (a2 !== 0) {
        return /* TOP */1;
      } else {
        return a1;
      }
    } else if (typeof a1 === "number" || !Caml_obj.caml_equal(a1, a2)) {
      return /* TOP */1;
    } else {
      return a1;
    }
  }
  
}

function initialP(param, x) {
  return /* Int */[0];
}

function evala(a, r) {
  switch (a.tag | 0) {
    case 0 : 
        return /* Int */[a[0]];
    case 1 : 
        var x = a[0];
        if (x === "x" || x === "y" || x === "z") {
          return Curry._1(r, x);
        } else {
          return Pervasives.failwith("AbstractDomainParity : undeclared variable");
        }
    case 2 : 
        var a1 = evala(a[0], r);
        var a2 = evala(a[1], r);
        var exit = 0;
        if (typeof a1 === "number") {
          if (a1 !== 0) {
            exit = 1;
          } else {
            return /* BOT */0;
          }
        } else if (typeof a2 === "number") {
          exit = 1;
        } else {
          return /* Int */[a1[0] - a2[0] | 0];
        }
        if (exit === 1) {
          if (typeof a2 === "number" && a2 === 0) {
            return /* BOT */0;
          } else {
            return /* TOP */1;
          }
        }
        case 3 : 
        var a1$1 = evala(a[0], r);
        var a2$1 = evala(a[1], r);
        var exit$1 = 0;
        if (typeof a1$1 === "number") {
          if (a1$1 !== 0) {
            exit$1 = 1;
          } else {
            return /* BOT */0;
          }
        } else if (typeof a2$1 === "number") {
          exit$1 = 1;
        } else {
          return /* Int */[a1$1[0] + a2$1[0] | 0];
        }
        if (exit$1 === 1) {
          if (typeof a2$1 === "number" && a2$1 === 0) {
            return /* BOT */0;
          } else {
            return /* TOP */1;
          }
        }
        
  }
}

function assign(x, a, r, y) {
  if (x === y && Curry._1(r, x) !== /* BOT */0) {
    return evala(a, r);
  } else {
    return Curry._1(r, y);
  }
}

function test(b, r) {
  switch (b.tag | 0) {
    case 0 : 
        var match = evala(b[0], r);
        var match$1 = evala(b[1], r);
        var exit = 0;
        if (typeof match === "number" && match === 0) {
          return (function (param) {
              return /* BOT */0;
            });
        } else {
          exit = 1;
        }
        if (exit === 1) {
          if (typeof match$1 === "number") {
            if (match$1 !== 0) {
              return r;
            } else {
              return (function (param) {
                  return /* BOT */0;
                });
            }
          } else if (typeof match === "number" || Caml_obj.caml_lessthan(match, match$1)) {
            return r;
          } else {
            return (function (param) {
                return /* BOT */0;
              });
          }
        }
        break;
    case 1 : 
        var match$2 = evala(b[0], r);
        var match$3 = evala(b[1], r);
        var exit$1 = 0;
        var exit$2 = 0;
        if (typeof match$2 === "number" && match$2 === 0) {
          return (function (param) {
              return /* BOT */0;
            });
        } else {
          exit$2 = 2;
        }
        if (exit$2 === 2) {
          if (typeof match$3 === "number" && match$3 === 0) {
            return (function (param) {
                return /* BOT */0;
              });
          } else {
            exit$1 = 1;
          }
        }
        if (exit$1 === 1) {
          if (typeof match$2 === "number") {
            return r;
          } else if (typeof match$3 === "number") {
            return (function (param) {
                return /* BOT */0;
              });
          } else if (Caml_obj.caml_greaterthan(match$2, match$3)) {
            return r;
          } else {
            return (function (param) {
                return /* BOT */0;
              });
          }
        }
        break;
    case 2 : 
        var match$4 = evala(b[0], r);
        var match$5 = evala(b[1], r);
        var exit$3 = 0;
        if (typeof match$4 === "number" && match$4 === 0) {
          return (function (param) {
              return /* BOT */0;
            });
        } else {
          exit$3 = 1;
        }
        if (exit$3 === 1) {
          if (typeof match$5 === "number") {
            if (match$5 !== 0) {
              return r;
            } else {
              return (function (param) {
                  return /* BOT */0;
                });
            }
          } else if (typeof match$4 === "number" || Caml_obj.caml_equal(match$4, match$5)) {
            return r;
          } else {
            return (function (param) {
                return /* BOT */0;
              });
          }
        }
        break;
    case 3 : 
        var match$6 = evala(b[0], r);
        var match$7 = evala(b[1], r);
        var exit$4 = 0;
        var exit$5 = 0;
        if (typeof match$6 === "number" && match$6 === 0) {
          return (function (param) {
              return /* BOT */0;
            });
        } else {
          exit$5 = 2;
        }
        if (exit$5 === 2) {
          if (typeof match$7 === "number" && match$7 === 0) {
            return (function (param) {
                return /* BOT */0;
              });
          } else {
            exit$4 = 1;
          }
        }
        if (exit$4 === 1) {
          if (match$6 !== match$7) {
            return r;
          } else {
            return (function (param) {
                return /* BOT */0;
              });
          }
        }
        break;
    case 4 : 
        return r;
    
  }
}

function nottest(b, r) {
  switch (b.tag | 0) {
    case 0 : 
        var match = evala(b[0], r);
        var match$1 = evala(b[1], r);
        var exit = 0;
        if (typeof match === "number" && match === 0) {
          return (function (param) {
              return /* BOT */0;
            });
        } else {
          exit = 1;
        }
        if (exit === 1) {
          if (typeof match$1 === "number") {
            if (match$1 !== 0) {
              return r;
            } else {
              return (function (param) {
                  return /* BOT */0;
                });
            }
          } else if (typeof match === "number" || !Caml_obj.caml_lessthan(match, match$1)) {
            return r;
          } else {
            return (function (param) {
                return /* BOT */0;
              });
          }
        }
        break;
    case 1 : 
        var match$2 = evala(b[0], r);
        var match$3 = evala(b[1], r);
        if (typeof match$2 === "number") {
          return (function (param) {
              return /* BOT */0;
            });
        } else if (typeof match$3 === "number" && match$3 === 0) {
          return (function (param) {
              return /* BOT */0;
            });
        } else {
          return r;
        }
    case 2 : 
        var match$4 = evala(b[0], r);
        var match$5 = evala(b[1], r);
        var exit$1 = 0;
        if (typeof match$4 === "number" && match$4 === 0) {
          return (function (param) {
              return /* BOT */0;
            });
        } else {
          exit$1 = 1;
        }
        if (exit$1 === 1) {
          if (typeof match$5 === "number") {
            if (match$5 !== 0) {
              return r;
            } else {
              return (function (param) {
                  return /* BOT */0;
                });
            }
          } else if (typeof match$4 === "number" || !Caml_obj.caml_equal(match$4, match$5)) {
            return r;
          } else {
            return (function (param) {
                return /* BOT */0;
              });
          }
        }
        break;
    case 3 : 
        var match$6 = evala(b[0], r);
        var match$7 = evala(b[1], r);
        var exit$2 = 0;
        if (typeof match$6 === "number" && match$6 === 0) {
          return (function (param) {
              return /* BOT */0;
            });
        } else {
          exit$2 = 1;
        }
        if (exit$2 === 1) {
          if (typeof match$7 === "number") {
            if (match$7 !== 0) {
              return r;
            } else {
              return (function (param) {
                  return /* BOT */0;
                });
            }
          } else if (typeof match$6 === "number" || match$6 === match$7) {
            return r;
          } else {
            return (function (param) {
                return /* BOT */0;
              });
          }
        }
        break;
    case 4 : 
        return r;
    
  }
}

function stringofaP(r, vl) {
  if (vl) {
    var vl$prime = vl[1];
    var v = vl[0];
    if (vl$prime) {
      return v + ("=" + (stringofconstant(Curry._1(r, v)) + ("; " + stringofaP(r, vl$prime))));
    } else {
      return v + ("=" + stringofconstant(Curry._1(r, v)));
    }
  } else {
    return ";";
  }
}

exports.initialize = initialize;
exports.leq = leq;
exports.bot = bot;
exports.join = join;
exports.initialP = initialP;
exports.assign = assign;
exports.test = test;
exports.nottest = nottest;
exports.stringofaP = stringofaP;
/* No side effect */


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Caml_int32 = __webpack_require__(7);
var Caml_int64 = __webpack_require__(29);
var Caml_utils = __webpack_require__(19);
var Caml_builtin_exceptions = __webpack_require__(0);

function parse_digit(c) {
  if (c >= 65) {
    if (c >= 97) {
      if (c >= 123) {
        return -1;
      } else {
        return c - 87 | 0;
      }
    } else if (c >= 91) {
      return -1;
    } else {
      return c - 55 | 0;
    }
  } else if (c > 57 || c < 48) {
    return -1;
  } else {
    return c - /* "0" */48 | 0;
  }
}

function int_of_string_base(param) {
  switch (param) {
    case 0 : 
        return 8;
    case 1 : 
        return 16;
    case 2 : 
        return 10;
    case 3 : 
        return 2;
    
  }
}

function parse_sign_and_base(s) {
  var sign = 1;
  var base = /* Dec */2;
  var i = 0;
  var match = s.charCodeAt(i);
  switch (match) {
    case 43 : 
        i = i + 1 | 0;
        break;
    case 44 : 
        break;
    case 45 : 
        sign = -1;
        i = i + 1 | 0;
        break;
    default:
      
  }
  if (s[i] === "0") {
    var match$1 = s.charCodeAt(i + 1 | 0);
    if (match$1 >= 89) {
      if (match$1 >= 111) {
        if (match$1 < 121) {
          switch (match$1 - 111 | 0) {
            case 0 : 
                base = /* Oct */0;
                i = i + 2 | 0;
                break;
            case 6 : 
                i = i + 2 | 0;
                break;
            case 1 : 
            case 2 : 
            case 3 : 
            case 4 : 
            case 5 : 
            case 7 : 
            case 8 : 
                break;
            case 9 : 
                base = /* Hex */1;
                i = i + 2 | 0;
                break;
            
          }
        }
        
      } else if (match$1 === 98) {
        base = /* Bin */3;
        i = i + 2 | 0;
      }
      
    } else if (match$1 !== 66) {
      if (match$1 >= 79) {
        switch (match$1 - 79 | 0) {
          case 0 : 
              base = /* Oct */0;
              i = i + 2 | 0;
              break;
          case 6 : 
              i = i + 2 | 0;
              break;
          case 1 : 
          case 2 : 
          case 3 : 
          case 4 : 
          case 5 : 
          case 7 : 
          case 8 : 
              break;
          case 9 : 
              base = /* Hex */1;
              i = i + 2 | 0;
              break;
          
        }
      }
      
    } else {
      base = /* Bin */3;
      i = i + 2 | 0;
    }
  }
  return /* tuple */[
          i,
          sign,
          base
        ];
}

function caml_int_of_string(s) {
  var match = parse_sign_and_base(s);
  var i = match[0];
  var base = int_of_string_base(match[2]);
  var threshold = 4294967295;
  var len = s.length;
  var c = i < len ? s.charCodeAt(i) : /* "\000" */0;
  var d = parse_digit(c);
  if (d < 0 || d >= base) {
    throw [
          Caml_builtin_exceptions.failure,
          "int_of_string"
        ];
  }
  var aux = function (_acc, _k) {
    while(true) {
      var k = _k;
      var acc = _acc;
      if (k === len) {
        return acc;
      } else {
        var a = s.charCodeAt(k);
        if (a === /* "_" */95) {
          _k = k + 1 | 0;
          continue ;
        } else {
          var v = parse_digit(a);
          if (v < 0 || v >= base) {
            throw [
                  Caml_builtin_exceptions.failure,
                  "int_of_string"
                ];
          } else {
            var acc$1 = base * acc + v;
            if (acc$1 > threshold) {
              throw [
                    Caml_builtin_exceptions.failure,
                    "int_of_string"
                  ];
            } else {
              _k = k + 1 | 0;
              _acc = acc$1;
              continue ;
            }
          }
        }
      }
    };
  };
  var res = match[1] * aux(d, i + 1 | 0);
  var or_res = res | 0;
  if (base === 10 && res !== or_res) {
    throw [
          Caml_builtin_exceptions.failure,
          "int_of_string"
        ];
  }
  return or_res;
}

function caml_int64_of_string(s) {
  var match = parse_sign_and_base(s);
  var hbase = match[2];
  var i = match[0];
  var base = Caml_int64.of_int32(int_of_string_base(hbase));
  var sign = Caml_int64.of_int32(match[1]);
  var threshold;
  switch (hbase) {
    case 0 : 
        threshold = /* int64 */[
          /* hi */536870911,
          /* lo */4294967295
        ];
        break;
    case 1 : 
        threshold = /* int64 */[
          /* hi */268435455,
          /* lo */4294967295
        ];
        break;
    case 2 : 
        threshold = /* int64 */[
          /* hi */429496729,
          /* lo */2576980377
        ];
        break;
    case 3 : 
        threshold = /* int64 */[
          /* hi */2147483647,
          /* lo */4294967295
        ];
        break;
    
  }
  var len = s.length;
  var c = i < len ? s.charCodeAt(i) : /* "\000" */0;
  var d = Caml_int64.of_int32(parse_digit(c));
  if (Caml_int64.lt(d, /* int64 */[
          /* hi */0,
          /* lo */0
        ]) || Caml_int64.ge(d, base)) {
    throw [
          Caml_builtin_exceptions.failure,
          "int64_of_string"
        ];
  }
  var aux = function (_acc, _k) {
    while(true) {
      var k = _k;
      var acc = _acc;
      if (k === len) {
        return acc;
      } else {
        var a = s.charCodeAt(k);
        if (a === /* "_" */95) {
          _k = k + 1 | 0;
          continue ;
        } else {
          var v = Caml_int64.of_int32(parse_digit(a));
          if (Caml_int64.lt(v, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ]) || Caml_int64.ge(v, base) || Caml_int64.gt(acc, threshold)) {
            throw [
                  Caml_builtin_exceptions.failure,
                  "int64_of_string"
                ];
          } else {
            var acc$1 = Caml_int64.add(Caml_int64.mul(base, acc), v);
            _k = k + 1 | 0;
            _acc = acc$1;
            continue ;
          }
        }
      }
    };
  };
  var res = Caml_int64.mul(sign, aux(d, i + 1 | 0));
  var or_res = Caml_int64.or_(res, /* int64 */[
        /* hi */0,
        /* lo */0
      ]);
  if (Caml_int64.eq(base, /* int64 */[
          /* hi */0,
          /* lo */10
        ]) && Caml_int64.neq(res, or_res)) {
    throw [
          Caml_builtin_exceptions.failure,
          "int64_of_string"
        ];
  }
  return or_res;
}

function int_of_base(param) {
  switch (param) {
    case 0 : 
        return 8;
    case 1 : 
        return 16;
    case 2 : 
        return 10;
    
  }
}

function lowercase(c) {
  if (c >= /* "A" */65 && c <= /* "Z" */90 || c >= /* "\192" */192 && c <= /* "\214" */214 || c >= /* "\216" */216 && c <= /* "\222" */222) {
    return c + 32 | 0;
  } else {
    return c;
  }
}

function parse_format(fmt) {
  var len = fmt.length;
  if (len > 31) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "format_int: format too long"
        ];
  }
  var f = /* record */[
    /* justify */"+",
    /* signstyle */"-",
    /* filter */" ",
    /* alternate */false,
    /* base : Dec */2,
    /* signedconv */false,
    /* width */0,
    /* uppercase */false,
    /* sign */1,
    /* prec */-1,
    /* conv */"f"
  ];
  var _i = 0;
  while(true) {
    var i = _i;
    if (i >= len) {
      return f;
    } else {
      var c = fmt.charCodeAt(i);
      var exit = 0;
      if (c >= 69) {
        if (c >= 88) {
          if (c >= 121) {
            exit = 1;
          } else {
            switch (c - 88 | 0) {
              case 0 : 
                  f[/* base */4] = /* Hex */1;
                  f[/* uppercase */7] = true;
                  _i = i + 1 | 0;
                  continue ;
              case 13 : 
              case 14 : 
              case 15 : 
                  exit = 5;
                  break;
              case 12 : 
              case 17 : 
                  exit = 4;
                  break;
              case 23 : 
                  f[/* base */4] = /* Oct */0;
                  _i = i + 1 | 0;
                  continue ;
              case 29 : 
                  f[/* base */4] = /* Dec */2;
                  _i = i + 1 | 0;
                  continue ;
              case 1 : 
              case 2 : 
              case 3 : 
              case 4 : 
              case 5 : 
              case 6 : 
              case 7 : 
              case 8 : 
              case 9 : 
              case 10 : 
              case 11 : 
              case 16 : 
              case 18 : 
              case 19 : 
              case 20 : 
              case 21 : 
              case 22 : 
              case 24 : 
              case 25 : 
              case 26 : 
              case 27 : 
              case 28 : 
              case 30 : 
              case 31 : 
                  exit = 1;
                  break;
              case 32 : 
                  f[/* base */4] = /* Hex */1;
                  _i = i + 1 | 0;
                  continue ;
              
            }
          }
        } else if (c >= 72) {
          exit = 1;
        } else {
          f[/* signedconv */5] = true;
          f[/* uppercase */7] = true;
          f[/* conv */10] = String.fromCharCode(lowercase(c));
          _i = i + 1 | 0;
          continue ;
        }
      } else {
        switch (c) {
          case 35 : 
              f[/* alternate */3] = true;
              _i = i + 1 | 0;
              continue ;
          case 32 : 
          case 43 : 
              exit = 2;
              break;
          case 45 : 
              f[/* justify */0] = "-";
              _i = i + 1 | 0;
              continue ;
          case 46 : 
              f[/* prec */9] = 0;
              var j = i + 1 | 0;
              while((function(j){
                  return function () {
                    var w = fmt.charCodeAt(j) - /* "0" */48 | 0;
                    return w >= 0 && w <= 9;
                  }
                  }(j))()) {
                f[/* prec */9] = (Caml_int32.imul(f[/* prec */9], 10) + fmt.charCodeAt(j) | 0) - /* "0" */48 | 0;
                j = j + 1 | 0;
              };
              _i = j;
              continue ;
          case 33 : 
          case 34 : 
          case 36 : 
          case 37 : 
          case 38 : 
          case 39 : 
          case 40 : 
          case 41 : 
          case 42 : 
          case 44 : 
          case 47 : 
              exit = 1;
              break;
          case 48 : 
              f[/* filter */2] = "0";
              _i = i + 1 | 0;
              continue ;
          case 49 : 
          case 50 : 
          case 51 : 
          case 52 : 
          case 53 : 
          case 54 : 
          case 55 : 
          case 56 : 
          case 57 : 
              exit = 3;
              break;
          default:
            exit = 1;
        }
      }
      switch (exit) {
        case 1 : 
            _i = i + 1 | 0;
            continue ;
        case 2 : 
            f[/* signstyle */1] = String.fromCharCode(c);
            _i = i + 1 | 0;
            continue ;
        case 3 : 
            f[/* width */6] = 0;
            var j$1 = i;
            while((function(j$1){
                return function () {
                  var w = fmt.charCodeAt(j$1) - /* "0" */48 | 0;
                  return w >= 0 && w <= 9;
                }
                }(j$1))()) {
              f[/* width */6] = (Caml_int32.imul(f[/* width */6], 10) + fmt.charCodeAt(j$1) | 0) - /* "0" */48 | 0;
              j$1 = j$1 + 1 | 0;
            };
            _i = j$1;
            continue ;
        case 4 : 
            f[/* signedconv */5] = true;
            f[/* base */4] = /* Dec */2;
            _i = i + 1 | 0;
            continue ;
        case 5 : 
            f[/* signedconv */5] = true;
            f[/* conv */10] = String.fromCharCode(c);
            _i = i + 1 | 0;
            continue ;
        
      }
    }
  };
}

function finish_formatting(config, rawbuffer) {
  var justify = config[/* justify */0];
  var signstyle = config[/* signstyle */1];
  var filter = config[/* filter */2];
  var alternate = config[/* alternate */3];
  var base = config[/* base */4];
  var signedconv = config[/* signedconv */5];
  var width = config[/* width */6];
  var uppercase = config[/* uppercase */7];
  var sign = config[/* sign */8];
  var len = rawbuffer.length;
  if (signedconv && (sign < 0 || signstyle !== "-")) {
    len = len + 1 | 0;
  }
  if (alternate) {
    if (base === /* Oct */0) {
      len = len + 1 | 0;
    } else if (base === /* Hex */1) {
      len = len + 2 | 0;
    }
    
  }
  var buffer = "";
  if (justify === "+" && filter === " ") {
    for(var i = len ,i_finish = width - 1 | 0; i <= i_finish; ++i){
      buffer = buffer + filter;
    }
  }
  if (signedconv) {
    if (sign < 0) {
      buffer = buffer + "-";
    } else if (signstyle !== "-") {
      buffer = buffer + signstyle;
    }
    
  }
  if (alternate && base === /* Oct */0) {
    buffer = buffer + "0";
  }
  if (alternate && base === /* Hex */1) {
    buffer = buffer + "0x";
  }
  if (justify === "+" && filter === "0") {
    for(var i$1 = len ,i_finish$1 = width - 1 | 0; i$1 <= i_finish$1; ++i$1){
      buffer = buffer + filter;
    }
  }
  buffer = uppercase ? buffer + rawbuffer.toUpperCase() : buffer + rawbuffer;
  if (justify === "-") {
    for(var i$2 = len ,i_finish$2 = width - 1 | 0; i$2 <= i_finish$2; ++i$2){
      buffer = buffer + " ";
    }
  }
  return buffer;
}

function caml_format_int(fmt, i) {
  if (fmt === "%d") {
    return String(i);
  } else {
    var f = parse_format(fmt);
    var f$1 = f;
    var i$1 = i;
    var i$2 = i$1 < 0 ? (
        f$1[/* signedconv */5] ? (f$1[/* sign */8] = -1, -i$1) : (i$1 >>> 0)
      ) : i$1;
    var s = i$2.toString(int_of_base(f$1[/* base */4]));
    if (f$1[/* prec */9] >= 0) {
      f$1[/* filter */2] = " ";
      var n = f$1[/* prec */9] - s.length | 0;
      if (n > 0) {
        s = Caml_utils.repeat(n, "0") + s;
      }
      
    }
    return finish_formatting(f$1, s);
  }
}

function caml_int64_format(fmt, x) {
  var f = parse_format(fmt);
  var x$1 = f[/* signedconv */5] && Caml_int64.lt(x, /* int64 */[
        /* hi */0,
        /* lo */0
      ]) ? (f[/* sign */8] = -1, Caml_int64.neg(x)) : x;
  var s = "";
  var match = f[/* base */4];
  switch (match) {
    case 0 : 
        var wbase = /* int64 */[
          /* hi */0,
          /* lo */8
        ];
        var cvtbl = "01234567";
        if (Caml_int64.lt(x$1, /* int64 */[
                /* hi */0,
                /* lo */0
              ])) {
          var y = Caml_int64.discard_sign(x$1);
          var match$1 = Caml_int64.div_mod(y, wbase);
          var quotient = Caml_int64.add(/* int64 */[
                /* hi */268435456,
                /* lo */0
              ], match$1[0]);
          var modulus = match$1[1];
          s = String.fromCharCode(cvtbl.charCodeAt(modulus[1] | 0)) + s;
          while(Caml_int64.neq(quotient, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ])) {
            var match$2 = Caml_int64.div_mod(quotient, wbase);
            quotient = match$2[0];
            modulus = match$2[1];
            s = String.fromCharCode(cvtbl.charCodeAt(modulus[1] | 0)) + s;
          };
        } else {
          var match$3 = Caml_int64.div_mod(x$1, wbase);
          var quotient$1 = match$3[0];
          var modulus$1 = match$3[1];
          s = String.fromCharCode(cvtbl.charCodeAt(modulus$1[1] | 0)) + s;
          while(Caml_int64.neq(quotient$1, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ])) {
            var match$4 = Caml_int64.div_mod(quotient$1, wbase);
            quotient$1 = match$4[0];
            modulus$1 = match$4[1];
            s = String.fromCharCode(cvtbl.charCodeAt(modulus$1[1] | 0)) + s;
          };
        }
        break;
    case 1 : 
        s = Caml_int64.to_hex(x$1) + s;
        break;
    case 2 : 
        var wbase$1 = /* int64 */[
          /* hi */0,
          /* lo */10
        ];
        var cvtbl$1 = "0123456789";
        if (Caml_int64.lt(x$1, /* int64 */[
                /* hi */0,
                /* lo */0
              ])) {
          var y$1 = Caml_int64.discard_sign(x$1);
          var match$5 = Caml_int64.div_mod(y$1, wbase$1);
          var match$6 = Caml_int64.div_mod(Caml_int64.add(/* int64 */[
                    /* hi */0,
                    /* lo */8
                  ], match$5[1]), wbase$1);
          var quotient$2 = Caml_int64.add(Caml_int64.add(/* int64 */[
                    /* hi */214748364,
                    /* lo */3435973836
                  ], match$5[0]), match$6[0]);
          var modulus$2 = match$6[1];
          s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$2[1] | 0)) + s;
          while(Caml_int64.neq(quotient$2, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ])) {
            var match$7 = Caml_int64.div_mod(quotient$2, wbase$1);
            quotient$2 = match$7[0];
            modulus$2 = match$7[1];
            s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$2[1] | 0)) + s;
          };
        } else {
          var match$8 = Caml_int64.div_mod(x$1, wbase$1);
          var quotient$3 = match$8[0];
          var modulus$3 = match$8[1];
          s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$3[1] | 0)) + s;
          while(Caml_int64.neq(quotient$3, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ])) {
            var match$9 = Caml_int64.div_mod(quotient$3, wbase$1);
            quotient$3 = match$9[0];
            modulus$3 = match$9[1];
            s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$3[1] | 0)) + s;
          };
        }
        break;
    
  }
  if (f[/* prec */9] >= 0) {
    f[/* filter */2] = " ";
    var n = f[/* prec */9] - s.length | 0;
    if (n > 0) {
      s = Caml_utils.repeat(n, "0") + s;
    }
    
  }
  return finish_formatting(f, s);
}

function caml_format_float(fmt, x) {
  var f = parse_format(fmt);
  var prec = f[/* prec */9] < 0 ? 6 : f[/* prec */9];
  var x$1 = x < 0 ? (f[/* sign */8] = -1, -x) : x;
  var s = "";
  if (isNaN(x$1)) {
    s = "nan";
    f[/* filter */2] = " ";
  } else if (isFinite(x$1)) {
    var match = f[/* conv */10];
    switch (match) {
      case "e" : 
          s = x$1.toExponential(prec);
          var i = s.length;
          if (s[i - 3 | 0] === "e") {
            s = s.slice(0, i - 1 | 0) + ("0" + s.slice(i - 1 | 0));
          }
          break;
      case "f" : 
          s = x$1.toFixed(prec);
          break;
      case "g" : 
          var prec$1 = prec !== 0 ? prec : 1;
          s = x$1.toExponential(prec$1 - 1 | 0);
          var j = s.indexOf("e");
          var exp = Number(s.slice(j + 1 | 0)) | 0;
          if (exp < -4 || x$1 >= 1e21 || x$1.toFixed().length > prec$1) {
            var i$1 = j - 1 | 0;
            while(s[i$1] === "0") {
              i$1 = i$1 - 1 | 0;
            };
            if (s[i$1] === ".") {
              i$1 = i$1 - 1 | 0;
            }
            s = s.slice(0, i$1 + 1 | 0) + s.slice(j);
            var i$2 = s.length;
            if (s[i$2 - 3 | 0] === "e") {
              s = s.slice(0, i$2 - 1 | 0) + ("0" + s.slice(i$2 - 1 | 0));
            }
            
          } else {
            var p = prec$1;
            if (exp < 0) {
              p = p - (exp + 1 | 0) | 0;
              s = x$1.toFixed(p);
            } else {
              while((function () {
                      s = x$1.toFixed(p);
                      return s.length > (prec$1 + 1 | 0);
                    })()) {
                p = p - 1 | 0;
              };
            }
            if (p !== 0) {
              var k = s.length - 1 | 0;
              while(s[k] === "0") {
                k = k - 1 | 0;
              };
              if (s[k] === ".") {
                k = k - 1 | 0;
              }
              s = s.slice(0, k + 1 | 0);
            }
            
          }
          break;
      default:
        
    }
  } else {
    s = "inf";
    f[/* filter */2] = " ";
  }
  return finish_formatting(f, s);
}

function float_of_string (s,exn){ 

    var res = +s;
    if ((s.length > 0) && (res === res))
        return res;
    s = s.replace(/_/g, "");
    res = +s;
    if (((s.length > 0) && (res === res)) || /^[+-]?nan$/i.test(s)) {
        return res;
    };
    if (/^\+?inf(inity)?$/i.test(s))
        return Infinity;
    if (/^-inf(inity)?$/i.test(s))
        return -Infinity;
    throw exn;

};

function caml_float_of_string(s) {
  return float_of_string(s, [
              Caml_builtin_exceptions.failure,
              "float_of_string"
            ]);
}

var caml_nativeint_format = caml_format_int;

var caml_int32_format = caml_format_int;

var caml_int32_of_string = caml_int_of_string;

var caml_nativeint_of_string = caml_int_of_string;

exports.caml_format_float = caml_format_float;
exports.caml_format_int = caml_format_int;
exports.caml_nativeint_format = caml_nativeint_format;
exports.caml_int32_format = caml_int32_format;
exports.caml_float_of_string = caml_float_of_string;
exports.caml_int64_format = caml_int64_format;
exports.caml_int_of_string = caml_int_of_string;
exports.caml_int32_of_string = caml_int32_of_string;
exports.caml_int64_of_string = caml_int64_of_string;
exports.caml_nativeint_of_string = caml_nativeint_of_string;
/* No side effect */


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Caml_builtin_exceptions = __webpack_require__(0);

function caml_string_get(s, i) {
  if (i >= s.length || i < 0) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "index out of bounds"
        ];
  } else {
    return s.charCodeAt(i);
  }
}

function caml_string_get16(s, i) {
  return s.charCodeAt(i) + (s.charCodeAt(i + 1 | 0) << 8) | 0;
}

function caml_string_get32(s, i) {
  return ((s.charCodeAt(i) + (s.charCodeAt(i + 1 | 0) << 8) | 0) + (s.charCodeAt(i + 2 | 0) << 16) | 0) + (s.charCodeAt(i + 3 | 0) << 24) | 0;
}

function get(s, i) {
  if (i < 0 || i >= s.length) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "index out of bounds"
        ];
  } else {
    return s.charCodeAt(i);
  }
}

exports.caml_string_get = caml_string_get;
exports.caml_string_get16 = caml_string_get16;
exports.caml_string_get32 = caml_string_get32;
exports.get = get;
/* No side effect */


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Bytes = __webpack_require__(9);
var Curry = __webpack_require__(1);
var Caml_array = __webpack_require__(16);
var Caml_bytes = __webpack_require__(3);
var Caml_lexer = __webpack_require__(31);
var Pervasives = __webpack_require__(2);
var Caml_builtin_exceptions = __webpack_require__(0);

function engine(tbl, state, buf) {
  var result = Caml_lexer.caml_lex_engine(tbl, state, buf);
  if (result >= 0) {
    buf[/* lex_start_p */10] = buf[/* lex_curr_p */11];
    var init = buf[/* lex_curr_p */11];
    buf[/* lex_curr_p */11] = /* record */[
      /* pos_fname */init[/* pos_fname */0],
      /* pos_lnum */init[/* pos_lnum */1],
      /* pos_bol */init[/* pos_bol */2],
      /* pos_cnum */buf[/* lex_abs_pos */3] + buf[/* lex_curr_pos */5] | 0
    ];
  }
  return result;
}

function new_engine(tbl, state, buf) {
  var result = Caml_lexer.caml_new_lex_engine(tbl, state, buf);
  if (result >= 0) {
    buf[/* lex_start_p */10] = buf[/* lex_curr_p */11];
    var init = buf[/* lex_curr_p */11];
    buf[/* lex_curr_p */11] = /* record */[
      /* pos_fname */init[/* pos_fname */0],
      /* pos_lnum */init[/* pos_lnum */1],
      /* pos_bol */init[/* pos_bol */2],
      /* pos_cnum */buf[/* lex_abs_pos */3] + buf[/* lex_curr_pos */5] | 0
    ];
  }
  return result;
}

var zero_pos = /* record */[
  /* pos_fname */"",
  /* pos_lnum */1,
  /* pos_bol */0,
  /* pos_cnum */0
];

function from_function(f) {
  var partial_arg = Caml_bytes.caml_create_bytes(512);
  return /* record */[
          /* refill_buff */(function (param) {
              var read_fun = f;
              var aux_buffer = partial_arg;
              var lexbuf = param;
              var read = Curry._2(read_fun, aux_buffer, aux_buffer.length);
              var n = read > 0 ? read : (lexbuf[/* lex_eof_reached */8] = true, 0);
              if ((lexbuf[/* lex_buffer_len */2] + n | 0) > lexbuf[/* lex_buffer */1].length) {
                if (((lexbuf[/* lex_buffer_len */2] - lexbuf[/* lex_start_pos */4] | 0) + n | 0) <= lexbuf[/* lex_buffer */1].length) {
                  Bytes.blit(lexbuf[/* lex_buffer */1], lexbuf[/* lex_start_pos */4], lexbuf[/* lex_buffer */1], 0, lexbuf[/* lex_buffer_len */2] - lexbuf[/* lex_start_pos */4] | 0);
                } else {
                  var newlen = (lexbuf[/* lex_buffer */1].length << 1);
                  if (((lexbuf[/* lex_buffer_len */2] - lexbuf[/* lex_start_pos */4] | 0) + n | 0) > newlen) {
                    throw [
                          Caml_builtin_exceptions.failure,
                          "Lexing.lex_refill: cannot grow buffer"
                        ];
                  }
                  var newbuf = Caml_bytes.caml_create_bytes(newlen);
                  Bytes.blit(lexbuf[/* lex_buffer */1], lexbuf[/* lex_start_pos */4], newbuf, 0, lexbuf[/* lex_buffer_len */2] - lexbuf[/* lex_start_pos */4] | 0);
                  lexbuf[/* lex_buffer */1] = newbuf;
                }
                var s = lexbuf[/* lex_start_pos */4];
                lexbuf[/* lex_abs_pos */3] = lexbuf[/* lex_abs_pos */3] + s | 0;
                lexbuf[/* lex_curr_pos */5] = lexbuf[/* lex_curr_pos */5] - s | 0;
                lexbuf[/* lex_start_pos */4] = 0;
                lexbuf[/* lex_last_pos */6] = lexbuf[/* lex_last_pos */6] - s | 0;
                lexbuf[/* lex_buffer_len */2] = lexbuf[/* lex_buffer_len */2] - s | 0;
                var t = lexbuf[/* lex_mem */9];
                for(var i = 0 ,i_finish = t.length - 1 | 0; i <= i_finish; ++i){
                  var v = Caml_array.caml_array_get(t, i);
                  if (v >= 0) {
                    Caml_array.caml_array_set(t, i, v - s | 0);
                  }
                  
                }
              }
              Bytes.blit(aux_buffer, 0, lexbuf[/* lex_buffer */1], lexbuf[/* lex_buffer_len */2], n);
              lexbuf[/* lex_buffer_len */2] = lexbuf[/* lex_buffer_len */2] + n | 0;
              return /* () */0;
            }),
          /* lex_buffer */Caml_bytes.caml_create_bytes(1024),
          /* lex_buffer_len */0,
          /* lex_abs_pos */0,
          /* lex_start_pos */0,
          /* lex_curr_pos */0,
          /* lex_last_pos */0,
          /* lex_last_action */0,
          /* lex_eof_reached */false,
          /* lex_mem : array */[],
          /* lex_start_p */zero_pos,
          /* lex_curr_p */zero_pos
        ];
}

function from_channel(ic) {
  return from_function((function (buf, n) {
                return Pervasives.input(ic, buf, 0, n);
              }));
}

function from_string(s) {
  return /* record */[
          /* refill_buff */(function (lexbuf) {
              lexbuf[/* lex_eof_reached */8] = true;
              return /* () */0;
            }),
          /* lex_buffer */Bytes.of_string(s),
          /* lex_buffer_len */s.length,
          /* lex_abs_pos */0,
          /* lex_start_pos */0,
          /* lex_curr_pos */0,
          /* lex_last_pos */0,
          /* lex_last_action */0,
          /* lex_eof_reached */true,
          /* lex_mem : array */[],
          /* lex_start_p */zero_pos,
          /* lex_curr_p */zero_pos
        ];
}

function lexeme(lexbuf) {
  var len = lexbuf[/* lex_curr_pos */5] - lexbuf[/* lex_start_pos */4] | 0;
  return Bytes.sub_string(lexbuf[/* lex_buffer */1], lexbuf[/* lex_start_pos */4], len);
}

function sub_lexeme(lexbuf, i1, i2) {
  var len = i2 - i1 | 0;
  return Bytes.sub_string(lexbuf[/* lex_buffer */1], i1, len);
}

function sub_lexeme_opt(lexbuf, i1, i2) {
  if (i1 >= 0) {
    var len = i2 - i1 | 0;
    return Bytes.sub_string(lexbuf[/* lex_buffer */1], i1, len);
  }
  
}

function sub_lexeme_char(lexbuf, i) {
  return Caml_bytes.get(lexbuf[/* lex_buffer */1], i);
}

function sub_lexeme_char_opt(lexbuf, i) {
  if (i >= 0) {
    return Caml_bytes.get(lexbuf[/* lex_buffer */1], i);
  }
  
}

function lexeme_char(lexbuf, i) {
  return Caml_bytes.get(lexbuf[/* lex_buffer */1], lexbuf[/* lex_start_pos */4] + i | 0);
}

function lexeme_start(lexbuf) {
  return lexbuf[/* lex_start_p */10][/* pos_cnum */3];
}

function lexeme_end(lexbuf) {
  return lexbuf[/* lex_curr_p */11][/* pos_cnum */3];
}

function lexeme_start_p(lexbuf) {
  return lexbuf[/* lex_start_p */10];
}

function lexeme_end_p(lexbuf) {
  return lexbuf[/* lex_curr_p */11];
}

function new_line(lexbuf) {
  var lcp = lexbuf[/* lex_curr_p */11];
  lexbuf[/* lex_curr_p */11] = /* record */[
    /* pos_fname */lcp[/* pos_fname */0],
    /* pos_lnum */lcp[/* pos_lnum */1] + 1 | 0,
    /* pos_bol */lcp[/* pos_cnum */3],
    /* pos_cnum */lcp[/* pos_cnum */3]
  ];
  return /* () */0;
}

function flush_input(lb) {
  lb[/* lex_curr_pos */5] = 0;
  lb[/* lex_abs_pos */3] = 0;
  var init = lb[/* lex_curr_p */11];
  lb[/* lex_curr_p */11] = /* record */[
    /* pos_fname */init[/* pos_fname */0],
    /* pos_lnum */init[/* pos_lnum */1],
    /* pos_bol */init[/* pos_bol */2],
    /* pos_cnum */0
  ];
  lb[/* lex_buffer_len */2] = 0;
  return /* () */0;
}

var dummy_pos = /* record */[
  /* pos_fname */"",
  /* pos_lnum */0,
  /* pos_bol */0,
  /* pos_cnum */-1
];

exports.dummy_pos = dummy_pos;
exports.from_channel = from_channel;
exports.from_string = from_string;
exports.from_function = from_function;
exports.lexeme = lexeme;
exports.lexeme_char = lexeme_char;
exports.lexeme_start = lexeme_start;
exports.lexeme_end = lexeme_end;
exports.lexeme_start_p = lexeme_start_p;
exports.lexeme_end_p = lexeme_end_p;
exports.new_line = new_line;
exports.flush_input = flush_input;
exports.sub_lexeme = sub_lexeme;
exports.sub_lexeme_opt = sub_lexeme_opt;
exports.sub_lexeme_char = sub_lexeme_char;
exports.sub_lexeme_char_opt = sub_lexeme_char_opt;
exports.engine = engine;
exports.new_engine = new_engine;
/* No side effect */


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Caml_bytes = __webpack_require__(3);
var Caml_builtin_exceptions = __webpack_require__(0);

function chr(n) {
  if (n < 0 || n > 255) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Char.chr"
        ];
  } else {
    return n;
  }
}

function escaped(c) {
  var exit = 0;
  if (c >= 40) {
    if (c !== 92) {
      exit = c >= 127 ? 1 : 2;
    } else {
      return "\\\\";
    }
  } else if (c >= 32) {
    if (c >= 39) {
      return "\\'";
    } else {
      exit = 2;
    }
  } else if (c >= 14) {
    exit = 1;
  } else {
    switch (c) {
      case 8 : 
          return "\\b";
      case 9 : 
          return "\\t";
      case 10 : 
          return "\\n";
      case 0 : 
      case 1 : 
      case 2 : 
      case 3 : 
      case 4 : 
      case 5 : 
      case 6 : 
      case 7 : 
      case 11 : 
      case 12 : 
          exit = 1;
          break;
      case 13 : 
          return "\\r";
      
    }
  }
  switch (exit) {
    case 1 : 
        var s = [
          0,
          0,
          0,
          0
        ];
        s[0] = /* "\\" */92;
        s[1] = 48 + (c / 100 | 0) | 0;
        s[2] = 48 + (c / 10 | 0) % 10 | 0;
        s[3] = 48 + c % 10 | 0;
        return Caml_bytes.bytes_to_string(s);
    case 2 : 
        var s$1 = [0];
        s$1[0] = c;
        return Caml_bytes.bytes_to_string(s$1);
    
  }
}

function lowercase(c) {
  if (c >= /* "A" */65 && c <= /* "Z" */90 || c >= /* "\192" */192 && c <= /* "\214" */214 || c >= /* "\216" */216 && c <= /* "\222" */222) {
    return c + 32 | 0;
  } else {
    return c;
  }
}

function uppercase(c) {
  if (c >= /* "a" */97 && c <= /* "z" */122 || c >= /* "\224" */224 && c <= /* "\246" */246 || c >= /* "\248" */248 && c <= /* "\254" */254) {
    return c - 32 | 0;
  } else {
    return c;
  }
}

function compare(c1, c2) {
  return c1 - c2 | 0;
}

exports.chr = chr;
exports.escaped = escaped;
exports.lowercase = lowercase;
exports.uppercase = uppercase;
exports.compare = compare;
/* No side effect */


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Caml_builtin_exceptions = __webpack_require__(0);

function caml_array_sub(x, offset, len) {
  var result = new Array(len);
  var j = 0;
  var i = offset;
  while(j < len) {
    result[j] = x[i];
    j = j + 1 | 0;
    i = i + 1 | 0;
  };
  return result;
}

function len(_acc, _l) {
  while(true) {
    var l = _l;
    var acc = _acc;
    if (l) {
      _l = l[1];
      _acc = l[0].length + acc | 0;
      continue ;
    } else {
      return acc;
    }
  };
}

function fill(arr, _i, _l) {
  while(true) {
    var l = _l;
    var i = _i;
    if (l) {
      var x = l[0];
      var l$1 = x.length;
      var k = i;
      var j = 0;
      while(j < l$1) {
        arr[k] = x[j];
        k = k + 1 | 0;
        j = j + 1 | 0;
      };
      _l = l[1];
      _i = k;
      continue ;
    } else {
      return /* () */0;
    }
  };
}

function caml_array_concat(l) {
  var v = len(0, l);
  var result = new Array(v);
  fill(result, 0, l);
  return result;
}

function caml_array_set(xs, index, newval) {
  if (index < 0 || index >= xs.length) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "index out of bounds"
        ];
  } else {
    xs[index] = newval;
    return /* () */0;
  }
}

function caml_array_get(xs, index) {
  if (index < 0 || index >= xs.length) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "index out of bounds"
        ];
  } else {
    return xs[index];
  }
}

function caml_make_vect(len, init) {
  var b = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    b[i] = init;
  }
  return b;
}

function caml_make_float_vect(len) {
  var b = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    b[i] = 0;
  }
  return b;
}

function caml_array_blit(a1, i1, a2, i2, len) {
  if (i2 <= i1) {
    for(var j = 0 ,j_finish = len - 1 | 0; j <= j_finish; ++j){
      a2[j + i2 | 0] = a1[j + i1 | 0];
    }
    return /* () */0;
  } else {
    for(var j$1 = len - 1 | 0; j$1 >= 0; --j$1){
      a2[j$1 + i2 | 0] = a1[j$1 + i1 | 0];
    }
    return /* () */0;
  }
}

function caml_array_dup(prim) {
  return prim.slice(0);
}

exports.caml_array_dup = caml_array_dup;
exports.caml_array_sub = caml_array_sub;
exports.caml_array_concat = caml_array_concat;
exports.caml_make_vect = caml_make_vect;
exports.caml_make_float_vect = caml_make_float_vect;
exports.caml_array_blit = caml_array_blit;
exports.caml_array_get = caml_array_get;
exports.caml_array_set = caml_array_set;
/* No side effect */


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var Curry = __webpack_require__(1);

var stdout = /* record */[
  /* buffer */"",
  /* output */(function (param, s) {
      var v = s.length - 1 | 0;
      if (( (typeof process !== "undefined") && process.stdout && process.stdout.write)) {
        return ( process.stdout.write )(s);
      } else if (s[v] === "\n") {
        console.log(s.slice(0, v));
        return /* () */0;
      } else {
        console.log(s);
        return /* () */0;
      }
    })
];

var stderr = /* record */[
  /* buffer */"",
  /* output */(function (param, s) {
      var v = s.length - 1 | 0;
      if (s[v] === "\n") {
        console.log(s.slice(0, v));
        return /* () */0;
      } else {
        console.log(s);
        return /* () */0;
      }
    })
];

function caml_ml_flush(oc) {
  if (oc[/* buffer */0] !== "") {
    Curry._2(oc[/* output */1], oc, oc[/* buffer */0]);
    oc[/* buffer */0] = "";
    return /* () */0;
  } else {
    return 0;
  }
}

function caml_ml_output(oc, str, offset, len) {
  var str$1 = offset === 0 && len === str.length ? str : str.slice(offset, len);
  if (( (typeof process !== "undefined") && process.stdout && process.stdout.write ) && oc === stdout) {
    return ( process.stdout.write )(str$1);
  } else {
    var id = str$1.lastIndexOf("\n");
    if (id < 0) {
      oc[/* buffer */0] = oc[/* buffer */0] + str$1;
      return /* () */0;
    } else {
      oc[/* buffer */0] = oc[/* buffer */0] + str$1.slice(0, id + 1 | 0);
      caml_ml_flush(oc);
      oc[/* buffer */0] = oc[/* buffer */0] + str$1.slice(id + 1 | 0);
      return /* () */0;
    }
  }
}

function caml_ml_output_char(oc, $$char) {
  return caml_ml_output(oc, String.fromCharCode($$char), 0, 1);
}

function caml_ml_out_channels_list(param) {
  return /* :: */[
          stdout,
          /* :: */[
            stderr,
            /* [] */0
          ]
        ];
}

var stdin = undefined;

exports.stdin = stdin;
exports.stdout = stdout;
exports.stderr = stderr;
exports.caml_ml_flush = caml_ml_flush;
exports.caml_ml_output = caml_ml_output;
exports.caml_ml_output_char = caml_ml_output_char;
exports.caml_ml_out_channels_list = caml_ml_out_channels_list;
/* No side effect */

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(18)))

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



function repeat (count,self){
    if (self.repeat){
        return self.repeat(count)
    }
    if (self.length == 0 || count == 0) {
            return '';
        }
    // Ensuring count is a 31-bit integer allows us to heavily optimize the
    // main part. But anyway, most current (August 2014) browsers can't handle
    // strings 1 << 28 chars or longer, so:
    if (self.length * count >= 1 << 28) {
            throw new RangeError('repeat count must not overflow maximum string size');
    }
    var rpt = '';
    for (;;) {
            if ((count & 1) == 1) {
                rpt += self;
            }
            count >>>= 1;
            if (count == 0) {
                break;
            }
            self += self;
    }
    return rpt;

};

exports.repeat = repeat;
/* No side effect */


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Block = __webpack_require__(5);

function erase_rel(param) {
  if (typeof param === "number") {
    return /* End_of_fmtty */0;
  } else {
    switch (param.tag | 0) {
      case 0 : 
          return /* Char_ty */Block.__(0, [erase_rel(param[0])]);
      case 1 : 
          return /* String_ty */Block.__(1, [erase_rel(param[0])]);
      case 2 : 
          return /* Int_ty */Block.__(2, [erase_rel(param[0])]);
      case 3 : 
          return /* Int32_ty */Block.__(3, [erase_rel(param[0])]);
      case 4 : 
          return /* Nativeint_ty */Block.__(4, [erase_rel(param[0])]);
      case 5 : 
          return /* Int64_ty */Block.__(5, [erase_rel(param[0])]);
      case 6 : 
          return /* Float_ty */Block.__(6, [erase_rel(param[0])]);
      case 7 : 
          return /* Bool_ty */Block.__(7, [erase_rel(param[0])]);
      case 8 : 
          return /* Format_arg_ty */Block.__(8, [
                    param[0],
                    erase_rel(param[1])
                  ]);
      case 9 : 
          var ty1 = param[0];
          return /* Format_subst_ty */Block.__(9, [
                    ty1,
                    ty1,
                    erase_rel(param[2])
                  ]);
      case 10 : 
          return /* Alpha_ty */Block.__(10, [erase_rel(param[0])]);
      case 11 : 
          return /* Theta_ty */Block.__(11, [erase_rel(param[0])]);
      case 12 : 
          return /* Any_ty */Block.__(12, [erase_rel(param[0])]);
      case 13 : 
          return /* Reader_ty */Block.__(13, [erase_rel(param[0])]);
      case 14 : 
          return /* Ignored_reader_ty */Block.__(14, [erase_rel(param[0])]);
      
    }
  }
}

function concat_fmtty(fmtty1, fmtty2) {
  if (typeof fmtty1 === "number") {
    return fmtty2;
  } else {
    switch (fmtty1.tag | 0) {
      case 0 : 
          return /* Char_ty */Block.__(0, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 1 : 
          return /* String_ty */Block.__(1, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 2 : 
          return /* Int_ty */Block.__(2, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 3 : 
          return /* Int32_ty */Block.__(3, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 4 : 
          return /* Nativeint_ty */Block.__(4, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 5 : 
          return /* Int64_ty */Block.__(5, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 6 : 
          return /* Float_ty */Block.__(6, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 7 : 
          return /* Bool_ty */Block.__(7, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 8 : 
          return /* Format_arg_ty */Block.__(8, [
                    fmtty1[0],
                    concat_fmtty(fmtty1[1], fmtty2)
                  ]);
      case 9 : 
          return /* Format_subst_ty */Block.__(9, [
                    fmtty1[0],
                    fmtty1[1],
                    concat_fmtty(fmtty1[2], fmtty2)
                  ]);
      case 10 : 
          return /* Alpha_ty */Block.__(10, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 11 : 
          return /* Theta_ty */Block.__(11, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 12 : 
          return /* Any_ty */Block.__(12, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 13 : 
          return /* Reader_ty */Block.__(13, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 14 : 
          return /* Ignored_reader_ty */Block.__(14, [concat_fmtty(fmtty1[0], fmtty2)]);
      
    }
  }
}

function concat_fmt(fmt1, fmt2) {
  if (typeof fmt1 === "number") {
    return fmt2;
  } else {
    switch (fmt1.tag | 0) {
      case 0 : 
          return /* Char */Block.__(0, [concat_fmt(fmt1[0], fmt2)]);
      case 1 : 
          return /* Caml_char */Block.__(1, [concat_fmt(fmt1[0], fmt2)]);
      case 2 : 
          return /* String */Block.__(2, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 3 : 
          return /* Caml_string */Block.__(3, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 4 : 
          return /* Int */Block.__(4, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case 5 : 
          return /* Int32 */Block.__(5, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case 6 : 
          return /* Nativeint */Block.__(6, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case 7 : 
          return /* Int64 */Block.__(7, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case 8 : 
          return /* Float */Block.__(8, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case 9 : 
          return /* Bool */Block.__(9, [concat_fmt(fmt1[0], fmt2)]);
      case 10 : 
          return /* Flush */Block.__(10, [concat_fmt(fmt1[0], fmt2)]);
      case 11 : 
          return /* String_literal */Block.__(11, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 12 : 
          return /* Char_literal */Block.__(12, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 13 : 
          return /* Format_arg */Block.__(13, [
                    fmt1[0],
                    fmt1[1],
                    concat_fmt(fmt1[2], fmt2)
                  ]);
      case 14 : 
          return /* Format_subst */Block.__(14, [
                    fmt1[0],
                    fmt1[1],
                    concat_fmt(fmt1[2], fmt2)
                  ]);
      case 15 : 
          return /* Alpha */Block.__(15, [concat_fmt(fmt1[0], fmt2)]);
      case 16 : 
          return /* Theta */Block.__(16, [concat_fmt(fmt1[0], fmt2)]);
      case 17 : 
          return /* Formatting_lit */Block.__(17, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 18 : 
          return /* Formatting_gen */Block.__(18, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 19 : 
          return /* Reader */Block.__(19, [concat_fmt(fmt1[0], fmt2)]);
      case 20 : 
          return /* Scan_char_set */Block.__(20, [
                    fmt1[0],
                    fmt1[1],
                    concat_fmt(fmt1[2], fmt2)
                  ]);
      case 21 : 
          return /* Scan_get_counter */Block.__(21, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 22 : 
          return /* Scan_next_char */Block.__(22, [concat_fmt(fmt1[0], fmt2)]);
      case 23 : 
          return /* Ignored_param */Block.__(23, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 24 : 
          return /* Custom */Block.__(24, [
                    fmt1[0],
                    fmt1[1],
                    concat_fmt(fmt1[2], fmt2)
                  ]);
      
    }
  }
}

exports.concat_fmtty = concat_fmtty;
exports.erase_rel = erase_rel;
exports.concat_fmt = concat_fmt;
/* No side effect */


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Curry = __webpack_require__(1);
var $$Buffer = __webpack_require__(22);
var Pervasives = __webpack_require__(2);
var CamlinternalFormat = __webpack_require__(33);

function kfprintf(k, o, param) {
  return CamlinternalFormat.make_printf((function (o, acc) {
                CamlinternalFormat.output_acc(o, acc);
                return Curry._1(k, o);
              }), o, /* End_of_acc */0, param[0]);
}

function kbprintf(k, b, param) {
  return CamlinternalFormat.make_printf((function (b, acc) {
                CamlinternalFormat.bufput_acc(b, acc);
                return Curry._1(k, b);
              }), b, /* End_of_acc */0, param[0]);
}

function ikfprintf(k, oc, param) {
  return CamlinternalFormat.make_printf((function (oc, param) {
                return Curry._1(k, oc);
              }), oc, /* End_of_acc */0, param[0]);
}

function fprintf(oc, fmt) {
  return kfprintf((function (prim) {
                return /* () */0;
              }), oc, fmt);
}

function bprintf(b, fmt) {
  return kbprintf((function (prim) {
                return /* () */0;
              }), b, fmt);
}

function ifprintf(oc, fmt) {
  return ikfprintf((function (prim) {
                return /* () */0;
              }), oc, fmt);
}

function printf(fmt) {
  return fprintf(Pervasives.stdout, fmt);
}

function eprintf(fmt) {
  return fprintf(Pervasives.stderr, fmt);
}

function ksprintf(k, param) {
  var k$prime = function (param, acc) {
    var buf = $$Buffer.create(64);
    CamlinternalFormat.strput_acc(buf, acc);
    return Curry._1(k, $$Buffer.contents(buf));
  };
  return CamlinternalFormat.make_printf(k$prime, /* () */0, /* End_of_acc */0, param[0]);
}

function sprintf(fmt) {
  return ksprintf((function (s) {
                return s;
              }), fmt);
}

var kprintf = ksprintf;

exports.fprintf = fprintf;
exports.printf = printf;
exports.eprintf = eprintf;
exports.sprintf = sprintf;
exports.bprintf = bprintf;
exports.ifprintf = ifprintf;
exports.kfprintf = kfprintf;
exports.ikfprintf = ikfprintf;
exports.ksprintf = ksprintf;
exports.kbprintf = kbprintf;
exports.kprintf = kprintf;
/* No side effect */


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Bytes = __webpack_require__(9);
var Curry = __webpack_require__(1);
var $$String = __webpack_require__(23);
var Caml_bytes = __webpack_require__(3);
var Pervasives = __webpack_require__(2);
var Caml_string = __webpack_require__(13);
var Caml_builtin_exceptions = __webpack_require__(0);

function create(n) {
  var n$1 = n < 1 ? 1 : n;
  var s = Caml_bytes.caml_create_bytes(n$1);
  return /* record */[
          /* buffer */s,
          /* position */0,
          /* length */n$1,
          /* initial_buffer */s
        ];
}

function contents(b) {
  return Bytes.sub_string(b[/* buffer */0], 0, b[/* position */1]);
}

function to_bytes(b) {
  return Bytes.sub(b[/* buffer */0], 0, b[/* position */1]);
}

function sub(b, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (b[/* position */1] - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Buffer.sub"
        ];
  } else {
    return Bytes.sub_string(b[/* buffer */0], ofs, len);
  }
}

function blit(src, srcoff, dst, dstoff, len) {
  if (len < 0 || srcoff < 0 || srcoff > (src[/* position */1] - len | 0) || dstoff < 0 || dstoff > (dst.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Buffer.blit"
        ];
  } else {
    return Bytes.blit(src[/* buffer */0], srcoff, dst, dstoff, len);
  }
}

function nth(b, ofs) {
  if (ofs < 0 || ofs >= b[/* position */1]) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Buffer.nth"
        ];
  } else {
    return b[/* buffer */0][ofs];
  }
}

function length(b) {
  return b[/* position */1];
}

function clear(b) {
  b[/* position */1] = 0;
  return /* () */0;
}

function reset(b) {
  b[/* position */1] = 0;
  b[/* buffer */0] = b[/* initial_buffer */3];
  b[/* length */2] = b[/* buffer */0].length;
  return /* () */0;
}

function resize(b, more) {
  var len = b[/* length */2];
  var new_len = len;
  while((b[/* position */1] + more | 0) > new_len) {
    new_len = (new_len << 1);
  };
  var new_buffer = Caml_bytes.caml_create_bytes(new_len);
  Bytes.blit(b[/* buffer */0], 0, new_buffer, 0, b[/* position */1]);
  b[/* buffer */0] = new_buffer;
  b[/* length */2] = new_len;
  return /* () */0;
}

function add_char(b, c) {
  var pos = b[/* position */1];
  if (pos >= b[/* length */2]) {
    resize(b, 1);
  }
  b[/* buffer */0][pos] = c;
  b[/* position */1] = pos + 1 | 0;
  return /* () */0;
}

function add_substring(b, s, offset, len) {
  if (offset < 0 || len < 0 || (offset + len | 0) > s.length) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Buffer.add_substring/add_subbytes"
        ];
  }
  var new_position = b[/* position */1] + len | 0;
  if (new_position > b[/* length */2]) {
    resize(b, len);
  }
  Bytes.blit_string(s, offset, b[/* buffer */0], b[/* position */1], len);
  b[/* position */1] = new_position;
  return /* () */0;
}

function add_subbytes(b, s, offset, len) {
  return add_substring(b, Caml_bytes.bytes_to_string(s), offset, len);
}

function add_string(b, s) {
  var len = s.length;
  var new_position = b[/* position */1] + len | 0;
  if (new_position > b[/* length */2]) {
    resize(b, len);
  }
  Bytes.blit_string(s, 0, b[/* buffer */0], b[/* position */1], len);
  b[/* position */1] = new_position;
  return /* () */0;
}

function add_bytes(b, s) {
  return add_string(b, Caml_bytes.bytes_to_string(s));
}

function add_buffer(b, bs) {
  return add_subbytes(b, bs[/* buffer */0], 0, bs[/* position */1]);
}

function add_channel(b, ic, len) {
  if (len < 0) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Buffer.add_channel"
        ];
  }
  if ((b[/* position */1] + len | 0) > b[/* length */2]) {
    resize(b, len);
  }
  Pervasives.really_input(ic, b[/* buffer */0], b[/* position */1], len);
  b[/* position */1] = b[/* position */1] + len | 0;
  return /* () */0;
}

function output_buffer(oc, b) {
  return Pervasives.output(oc, b[/* buffer */0], 0, b[/* position */1]);
}

function closing(param) {
  if (param !== 40) {
    if (param !== 123) {
      throw [
            Caml_builtin_exceptions.assert_failure,
            /* tuple */[
              "buffer.ml",
              126,
              9
            ]
          ];
    } else {
      return /* "}" */125;
    }
  } else {
    return /* ")" */41;
  }
}

function advance_to_closing(opening, closing, k, s, start) {
  var _k = k;
  var _i = start;
  var lim = s.length;
  while(true) {
    var i = _i;
    var k$1 = _k;
    if (i >= lim) {
      throw Caml_builtin_exceptions.not_found;
    } else if (Caml_string.get(s, i) === opening) {
      _i = i + 1 | 0;
      _k = k$1 + 1 | 0;
      continue ;
    } else if (Caml_string.get(s, i) === closing) {
      if (k$1 === 0) {
        return i;
      } else {
        _i = i + 1 | 0;
        _k = k$1 - 1 | 0;
        continue ;
      }
    } else {
      _i = i + 1 | 0;
      continue ;
    }
  };
}

function advance_to_non_alpha(s, start) {
  var _i = start;
  var lim = s.length;
  while(true) {
    var i = _i;
    if (i >= lim) {
      return lim;
    } else {
      var match = Caml_string.get(s, i);
      var exit = 0;
      if (match >= 91) {
        if (match >= 97) {
          if (match >= 123) {
            return i;
          } else {
            exit = 1;
          }
        } else if (match !== 95) {
          return i;
        } else {
          exit = 1;
        }
      } else if (match >= 58) {
        if (match >= 65) {
          exit = 1;
        } else {
          return i;
        }
      } else if (match >= 48) {
        exit = 1;
      } else {
        return i;
      }
      if (exit === 1) {
        _i = i + 1 | 0;
        continue ;
      }
      
    }
  };
}

function find_ident(s, start, lim) {
  if (start >= lim) {
    throw Caml_builtin_exceptions.not_found;
  } else {
    var c = Caml_string.get(s, start);
    var exit = 0;
    if (c !== 40 && c !== 123) {
      var stop = advance_to_non_alpha(s, start + 1 | 0);
      return /* tuple */[
              $$String.sub(s, start, stop - start | 0),
              stop
            ];
    } else {
      exit = 1;
    }
    if (exit === 1) {
      var new_start = start + 1 | 0;
      var stop$1 = advance_to_closing(c, closing(c), 0, s, new_start);
      return /* tuple */[
              $$String.sub(s, new_start, (stop$1 - start | 0) - 1 | 0),
              stop$1 + 1 | 0
            ];
    }
    
  }
}

function add_substitute(b, f, s) {
  var lim = s.length;
  var _previous = /* " " */32;
  var _i = 0;
  while(true) {
    var i = _i;
    var previous = _previous;
    if (i < lim) {
      var current = Caml_string.get(s, i);
      if (current !== 36) {
        if (previous === /* "\\" */92) {
          add_char(b, /* "\\" */92);
          add_char(b, current);
          _i = i + 1 | 0;
          _previous = /* " " */32;
          continue ;
        } else if (current !== 92) {
          add_char(b, current);
          _i = i + 1 | 0;
          _previous = current;
          continue ;
        } else {
          _i = i + 1 | 0;
          _previous = current;
          continue ;
        }
      } else if (previous === /* "\\" */92) {
        add_char(b, current);
        _i = i + 1 | 0;
        _previous = /* " " */32;
        continue ;
      } else {
        var j = i + 1 | 0;
        var match = find_ident(s, j, lim);
        add_string(b, Curry._1(f, match[0]));
        _i = match[1];
        _previous = /* " " */32;
        continue ;
      }
    } else if (previous === /* "\\" */92) {
      return add_char(b, previous);
    } else {
      return 0;
    }
  };
}

exports.create = create;
exports.contents = contents;
exports.to_bytes = to_bytes;
exports.sub = sub;
exports.blit = blit;
exports.nth = nth;
exports.length = length;
exports.clear = clear;
exports.reset = reset;
exports.add_char = add_char;
exports.add_string = add_string;
exports.add_bytes = add_bytes;
exports.add_substring = add_substring;
exports.add_subbytes = add_subbytes;
exports.add_substitute = add_substitute;
exports.add_buffer = add_buffer;
exports.add_channel = add_channel;
exports.output_buffer = output_buffer;
/* No side effect */


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var List = __webpack_require__(10);
var Bytes = __webpack_require__(9);
var Caml_bytes = __webpack_require__(3);
var Caml_int32 = __webpack_require__(7);
var Caml_primitive = __webpack_require__(6);
var Caml_builtin_exceptions = __webpack_require__(0);

function make(n, c) {
  return Caml_bytes.bytes_to_string(Bytes.make(n, c));
}

function init(n, f) {
  return Caml_bytes.bytes_to_string(Bytes.init(n, f));
}

function copy(s) {
  return Caml_bytes.bytes_to_string(Bytes.copy(Caml_bytes.bytes_of_string(s)));
}

function sub(s, ofs, len) {
  return Caml_bytes.bytes_to_string(Bytes.sub(Caml_bytes.bytes_of_string(s), ofs, len));
}

function concat(sep, l) {
  if (l) {
    var hd = l[0];
    var num = /* record */[/* contents */0];
    var len = /* record */[/* contents */0];
    List.iter((function (s) {
            num[0] = num[0] + 1 | 0;
            len[0] = len[0] + s.length | 0;
            return /* () */0;
          }), l);
    var r = Caml_bytes.caml_create_bytes(len[0] + Caml_int32.imul(sep.length, num[0] - 1 | 0) | 0);
    Caml_bytes.caml_blit_string(hd, 0, r, 0, hd.length);
    var pos = /* record */[/* contents */hd.length];
    List.iter((function (s) {
            Caml_bytes.caml_blit_string(sep, 0, r, pos[0], sep.length);
            pos[0] = pos[0] + sep.length | 0;
            Caml_bytes.caml_blit_string(s, 0, r, pos[0], s.length);
            pos[0] = pos[0] + s.length | 0;
            return /* () */0;
          }), l[1]);
    return Caml_bytes.bytes_to_string(r);
  } else {
    return "";
  }
}

function iter(f, s) {
  return Bytes.iter(f, Caml_bytes.bytes_of_string(s));
}

function iteri(f, s) {
  return Bytes.iteri(f, Caml_bytes.bytes_of_string(s));
}

function map(f, s) {
  return Caml_bytes.bytes_to_string(Bytes.map(f, Caml_bytes.bytes_of_string(s)));
}

function mapi(f, s) {
  return Caml_bytes.bytes_to_string(Bytes.mapi(f, Caml_bytes.bytes_of_string(s)));
}

function is_space(param) {
  var switcher = param - 9 | 0;
  if (switcher > 4 || switcher < 0) {
    return switcher === 23;
  } else {
    return switcher !== 2;
  }
}

function trim(s) {
  if (s === "" || !(is_space(s.charCodeAt(0)) || is_space(s.charCodeAt(s.length - 1 | 0)))) {
    return s;
  } else {
    return Caml_bytes.bytes_to_string(Bytes.trim(Caml_bytes.bytes_of_string(s)));
  }
}

function escaped(s) {
  var needs_escape = function (_i) {
    while(true) {
      var i = _i;
      if (i >= s.length) {
        return false;
      } else {
        var match = s.charCodeAt(i);
        if (match >= 32) {
          var switcher = match - 34 | 0;
          if (switcher > 58 || switcher < 0) {
            if (switcher >= 93) {
              return true;
            } else {
              _i = i + 1 | 0;
              continue ;
            }
          } else if (switcher > 57 || switcher < 1) {
            return true;
          } else {
            _i = i + 1 | 0;
            continue ;
          }
        } else {
          return true;
        }
      }
    };
  };
  if (needs_escape(0)) {
    return Caml_bytes.bytes_to_string(Bytes.escaped(Caml_bytes.bytes_of_string(s)));
  } else {
    return s;
  }
}

function index_rec(s, lim, _i, c) {
  while(true) {
    var i = _i;
    if (i >= lim) {
      throw Caml_builtin_exceptions.not_found;
    } else if (s.charCodeAt(i) === c) {
      return i;
    } else {
      _i = i + 1 | 0;
      continue ;
    }
  };
}

function index(s, c) {
  return index_rec(s, s.length, 0, c);
}

function index_from(s, i, c) {
  var l = s.length;
  if (i < 0 || i > l) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "String.index_from / Bytes.index_from"
        ];
  } else {
    return index_rec(s, l, i, c);
  }
}

function rindex_rec(s, _i, c) {
  while(true) {
    var i = _i;
    if (i < 0) {
      throw Caml_builtin_exceptions.not_found;
    } else if (s.charCodeAt(i) === c) {
      return i;
    } else {
      _i = i - 1 | 0;
      continue ;
    }
  };
}

function rindex(s, c) {
  return rindex_rec(s, s.length - 1 | 0, c);
}

function rindex_from(s, i, c) {
  if (i < -1 || i >= s.length) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "String.rindex_from / Bytes.rindex_from"
        ];
  } else {
    return rindex_rec(s, i, c);
  }
}

function contains_from(s, i, c) {
  var l = s.length;
  if (i < 0 || i > l) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "String.contains_from / Bytes.contains_from"
        ];
  } else {
    try {
      index_rec(s, l, i, c);
      return true;
    }
    catch (exn){
      if (exn === Caml_builtin_exceptions.not_found) {
        return false;
      } else {
        throw exn;
      }
    }
  }
}

function contains(s, c) {
  return contains_from(s, 0, c);
}

function rcontains_from(s, i, c) {
  if (i < 0 || i >= s.length) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "String.rcontains_from / Bytes.rcontains_from"
        ];
  } else {
    try {
      rindex_rec(s, i, c);
      return true;
    }
    catch (exn){
      if (exn === Caml_builtin_exceptions.not_found) {
        return false;
      } else {
        throw exn;
      }
    }
  }
}

function uppercase(s) {
  return Caml_bytes.bytes_to_string(Bytes.uppercase(Caml_bytes.bytes_of_string(s)));
}

function lowercase(s) {
  return Caml_bytes.bytes_to_string(Bytes.lowercase(Caml_bytes.bytes_of_string(s)));
}

function capitalize(s) {
  return Caml_bytes.bytes_to_string(Bytes.capitalize(Caml_bytes.bytes_of_string(s)));
}

function uncapitalize(s) {
  return Caml_bytes.bytes_to_string(Bytes.uncapitalize(Caml_bytes.bytes_of_string(s)));
}

var compare = Caml_primitive.caml_string_compare;

var fill = Bytes.fill;

var blit = Bytes.blit_string;

exports.make = make;
exports.init = init;
exports.copy = copy;
exports.sub = sub;
exports.fill = fill;
exports.blit = blit;
exports.concat = concat;
exports.iter = iter;
exports.iteri = iteri;
exports.map = map;
exports.mapi = mapi;
exports.trim = trim;
exports.escaped = escaped;
exports.index = index;
exports.rindex = rindex;
exports.index_from = index_from;
exports.rindex_from = rindex_from;
exports.contains = contains;
exports.contains_from = contains_from;
exports.rcontains_from = rcontains_from;
exports.uppercase = uppercase;
exports.lowercase = lowercase;
exports.capitalize = capitalize;
exports.uncapitalize = uncapitalize;
exports.compare = compare;
/* No side effect */


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Caml_option = __webpack_require__(34);
var Caml_exceptions = __webpack_require__(8);

var $$Error = Caml_exceptions.create("Caml_js_exceptions.Error");

function internalToOCamlException(e) {
  if (Caml_exceptions.caml_is_extension(e)) {
    return e;
  } else {
    return [
            $$Error,
            e
          ];
  }
}

function caml_as_js_exn(exn) {
  if (exn[0] === $$Error) {
    return Caml_option.some(exn[1]);
  }
  
}

exports.$$Error = $$Error;
exports.internalToOCamlException = internalToOCamlException;
exports.caml_as_js_exn = caml_as_js_exn;
/* No side effect */


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE


var List = __webpack_require__(10);
var Caml_obj = __webpack_require__(4);
var Pervasives = __webpack_require__(2);
var AbstractSyntaxExpressions$AiProject = __webpack_require__(37);

function vars(s) {
  var collect = function (s) {
    var exit = 0;
    switch (s.tag | 0) {
      case 1 : 
          return /* :: */[
                  s[0],
                  AbstractSyntaxExpressions$AiProject.varsa(s[1])
                ];
      case 4 : 
          return Pervasives.$at(AbstractSyntaxExpressions$AiProject.varsb(s[0]), Pervasives.$at(collect(s[1]), collect(s[2])));
      case 3 : 
      case 5 : 
          exit = 1;
          break;
      case 2 : 
      case 6 : 
          return /* [] */0;
      case 0 : 
      case 7 : 
          return collect_stmt_list(s[0]);
      
    }
    if (exit === 1) {
      return Pervasives.$at(AbstractSyntaxExpressions$AiProject.varsb(s[0]), collect(s[1]));
    }
    
  };
  var collect_stmt_list = function (sl) {
    if (sl) {
      return Pervasives.$at(collect(sl[0]), collect_stmt_list(sl[1]));
    } else {
      return /* [] */0;
    }
  };
  return List.sort_uniq(Caml_obj.caml_compare, collect(s));
}

exports.vars = vars;
/* No side effect */


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE


var Block = __webpack_require__(5);
var Caml_obj = __webpack_require__(4);
var Pervasives = __webpack_require__(2);
var AbstractTree$AiProject = __webpack_require__(25);
var AbstractDomain$AiProject = __webpack_require__(11);

function at_stmt(s) {
  switch (s.tag | 0) {
    case 4 : 
        return s[3][0];
    case 2 : 
    case 6 : 
        return s[0][0];
    case 0 : 
    case 7 : 
        return s[1][0];
    default:
      return s[2][0];
  }
}

function select_at(param) {
  return param[1];
}

function property_at(s) {
  switch (s.tag | 0) {
    case 4 : 
        return select_at(s[3]);
    case 2 : 
    case 6 : 
        return select_at(s[0]);
    case 0 : 
    case 7 : 
        return select_at(s[1]);
    default:
      return select_at(s[2]);
  }
}

function after_stmt(s) {
  switch (s.tag | 0) {
    case 4 : 
        return s[3][2];
    case 2 : 
    case 6 : 
        return s[0][2];
    case 0 : 
    case 7 : 
        return s[1][2];
    default:
      return s[2][2];
  }
}

function select_after(param) {
  return param[3];
}

function property_after(s) {
  switch (s.tag | 0) {
    case 4 : 
        return select_after(s[3]);
    case 2 : 
    case 6 : 
        return select_after(s[0]);
    case 0 : 
    case 7 : 
        return select_after(s[1]);
    default:
      return select_after(s[2]);
  }
}

function escape_stmt(s) {
  switch (s.tag | 0) {
    case 4 : 
        return s[3][4];
    case 2 : 
    case 6 : 
        return s[0][4];
    case 0 : 
    case 7 : 
        return s[1][4];
    default:
      return s[2][4];
  }
}

function break_stmt(s) {
  switch (s.tag | 0) {
    case 4 : 
        return s[3][5];
    case 2 : 
    case 6 : 
        return s[0][5];
    case 0 : 
    case 7 : 
        return s[1][5];
    default:
      return s[2][5];
  }
}

function select_break(param) {
  return param[6];
}

function property_break(s) {
  switch (s.tag | 0) {
    case 4 : 
        return select_break(s[3]);
    case 2 : 
    case 6 : 
        return select_break(s[0]);
    case 0 : 
    case 7 : 
        return select_break(s[1]);
    default:
      return select_break(s[2]);
  }
}

function is_in_stmt(l, _s) {
  while(true) {
    var s = _s;
    switch (s.tag | 0) {
      case 0 : 
          var match = s[1];
          if (Caml_obj.caml_equal(l, match[0]) || Caml_obj.caml_equal(l, match[2])) {
            return true;
          } else {
            return is_in_stmt_list(l, s[0]);
          }
      case 1 : 
          return Caml_obj.caml_equal(l, s[2][0]);
      case 4 : 
          if (Caml_obj.caml_equal(l, s[3][0]) || is_in_stmt(l, s[1])) {
            return true;
          } else {
            _s = s[2];
            continue ;
          }
      case 3 : 
      case 5 : 
          if (Caml_obj.caml_equal(l, s[2][0])) {
            return true;
          } else {
            _s = s[1];
            continue ;
          }
      case 2 : 
      case 6 : 
          return Caml_obj.caml_equal(l, s[0][0]);
      case 7 : 
          if (Caml_obj.caml_equal(l, s[1][0])) {
            return true;
          } else {
            return is_in_stmt_list(l, s[0]);
          }
      
    }
  };
}

function is_in_stmt_list(l, _sl) {
  while(true) {
    var sl = _sl;
    if (sl) {
      if (is_in_stmt(l, sl[0])) {
        return true;
      } else {
        _sl = sl[1];
        continue ;
      }
    } else {
      return false;
    }
  };
}

function void_label_tree(s) {
  var bot = function (param) {
    return AbstractDomain$AiProject.bot(/* () */0, param);
  };
  var void_labelling = /* tuple */[
    0,
    bot,
    0,
    bot,
    false,
    0,
    bot
  ];
  switch (s.tag | 0) {
    case 0 : 
        return /* Prog */Block.__(0, [
                  void_label_tree_list(s[0]),
                  void_labelling
                ]);
    case 1 : 
        return /* Assign */Block.__(1, [
                  s[0],
                  s[1],
                  void_labelling
                ]);
    case 2 : 
        return /* Emptystmt */Block.__(2, [void_labelling]);
    case 3 : 
        return /* If */Block.__(3, [
                  s[0],
                  void_label_tree(s[1]),
                  void_labelling
                ]);
    case 4 : 
        return /* Ifelse */Block.__(4, [
                  s[0],
                  void_label_tree(s[1]),
                  void_label_tree(s[2]),
                  void_labelling
                ]);
    case 5 : 
        return /* While */Block.__(5, [
                  s[0],
                  void_label_tree(s[1]),
                  void_labelling
                ]);
    case 6 : 
        return /* Break */Block.__(6, [void_labelling]);
    case 7 : 
        return /* Stmtlist */Block.__(7, [
                  void_label_tree_list(s[0]),
                  void_labelling
                ]);
    
  }
}

function void_label_tree_list(sl) {
  if (sl) {
    var sl$prime = sl[1];
    var s$prime = sl[0];
    if (sl$prime) {
      return /* :: */[
              void_label_tree(s$prime),
              void_label_tree_list(sl$prime)
            ];
    } else {
      return /* :: */[
              void_label_tree(s$prime),
              /* [] */0
            ];
    }
  } else {
    return /* [] */0;
  }
}

function set_at_tree(s, l) {
  switch (s.tag | 0) {
    case 0 : 
        var match = s[1];
        var match$1 = set_at_tree_list(s[0], l);
        return /* tuple */[
                /* Prog */Block.__(0, [
                    match$1[0],
                    /* tuple */[
                      l,
                      match[1],
                      match[2],
                      match[3],
                      match[4],
                      match[5],
                      match[6]
                    ]
                  ]),
                match$1[1]
              ];
    case 1 : 
        var match$2 = s[2];
        return /* tuple */[
                /* Assign */Block.__(1, [
                    s[0],
                    s[1],
                    /* tuple */[
                      l,
                      match$2[1],
                      match$2[2],
                      match$2[3],
                      match$2[4],
                      match$2[5],
                      match$2[6]
                    ]
                  ]),
                l + 1 | 0
              ];
    case 2 : 
        var match$3 = s[0];
        return /* tuple */[
                /* Emptystmt */Block.__(2, [/* tuple */[
                      l,
                      match$3[1],
                      match$3[2],
                      match$3[3],
                      match$3[4],
                      match$3[5],
                      match$3[6]
                    ]]),
                l + 1 | 0
              ];
    case 3 : 
        var match$4 = s[2];
        var match$5 = set_at_tree(s[1], l + 1 | 0);
        return /* tuple */[
                /* If */Block.__(3, [
                    s[0],
                    match$5[0],
                    /* tuple */[
                      l,
                      match$4[1],
                      match$4[2],
                      match$4[3],
                      match$4[4],
                      match$4[5],
                      match$4[6]
                    ]
                  ]),
                match$5[1]
              ];
    case 4 : 
        var match$6 = s[3];
        var match$7 = set_at_tree(s[1], l + 1 | 0);
        var match$8 = set_at_tree(s[2], match$7[1]);
        return /* tuple */[
                /* Ifelse */Block.__(4, [
                    s[0],
                    match$7[0],
                    match$8[0],
                    /* tuple */[
                      l,
                      match$6[1],
                      match$6[2],
                      match$6[3],
                      match$6[4],
                      match$6[5],
                      match$6[6]
                    ]
                  ]),
                match$8[1]
              ];
    case 5 : 
        var match$9 = s[2];
        var match$10 = set_at_tree(s[1], l + 1 | 0);
        return /* tuple */[
                /* While */Block.__(5, [
                    s[0],
                    match$10[0],
                    /* tuple */[
                      l,
                      match$9[1],
                      match$9[2],
                      match$9[3],
                      match$9[4],
                      match$9[5],
                      match$9[6]
                    ]
                  ]),
                match$10[1]
              ];
    case 6 : 
        var match$11 = s[0];
        return /* tuple */[
                /* Break */Block.__(6, [/* tuple */[
                      l,
                      match$11[1],
                      match$11[2],
                      match$11[3],
                      match$11[4],
                      match$11[5],
                      match$11[6]
                    ]]),
                l + 1 | 0
              ];
    case 7 : 
        var match$12 = s[1];
        var match$13 = set_at_tree_list(s[0], l);
        return /* tuple */[
                /* Stmtlist */Block.__(7, [
                    match$13[0],
                    /* tuple */[
                      l,
                      match$12[1],
                      match$12[2],
                      match$12[3],
                      match$12[4],
                      match$12[5],
                      match$12[6]
                    ]
                  ]),
                match$13[1]
              ];
    
  }
}

function set_at_tree_list(sl, l) {
  if (sl) {
    var sl$prime = sl[1];
    var s$prime = sl[0];
    if (sl$prime) {
      var match = set_at_tree_list(sl$prime, l);
      var match$1 = set_at_tree(s$prime, match[1]);
      return /* tuple */[
              /* :: */[
                match$1[0],
                match[0]
              ],
              match$1[1]
            ];
    } else {
      var match$2 = set_at_tree(s$prime, l);
      return /* tuple */[
              /* :: */[
                match$2[0],
                /* [] */0
              ],
              match$2[1]
            ];
    }
  } else {
    return /* tuple */[
            /* [] */0,
            l
          ];
  }
}

function set_labelling_tree(s, after, $$break) {
  switch (s.tag | 0) {
    case 0 : 
        var match = s[1];
        var match$1 = set_labelling_tree_list(s[0], after, $$break);
        if (match$1[1]) {
          Pervasives.print_string("Error: no break allowed out of a program\n");
        }
        return /* tuple */[
                /* Prog */Block.__(0, [
                    match$1[0],
                    /* tuple */[
                      match[0],
                      match[1],
                      after,
                      match[3],
                      false,
                      0,
                      match[6]
                    ]
                  ]),
                false
              ];
    case 1 : 
        var match$2 = s[2];
        return /* tuple */[
                /* Assign */Block.__(1, [
                    s[0],
                    s[1],
                    /* tuple */[
                      match$2[0],
                      match$2[1],
                      after,
                      match$2[3],
                      false,
                      0,
                      match$2[6]
                    ]
                  ]),
                false
              ];
    case 2 : 
        var match$3 = s[0];
        return /* tuple */[
                /* Emptystmt */Block.__(2, [/* tuple */[
                      match$3[0],
                      match$3[1],
                      after,
                      match$3[3],
                      false,
                      0,
                      match$3[6]
                    ]]),
                false
              ];
    case 3 : 
        var match$4 = s[2];
        var brP = match$4[6];
        var afP = match$4[3];
        var atP = match$4[1];
        var at = match$4[0];
        var b = s[0];
        var match$5 = set_labelling_tree(s[1], after, $$break);
        var es$prime = match$5[1];
        var st$prime = match$5[0];
        if (es$prime) {
          return /* tuple */[
                  /* If */Block.__(3, [
                      b,
                      st$prime,
                      /* tuple */[
                        at,
                        atP,
                        after,
                        afP,
                        es$prime,
                        $$break,
                        brP
                      ]
                    ]),
                  es$prime
                ];
        } else {
          return /* tuple */[
                  /* If */Block.__(3, [
                      b,
                      st$prime,
                      /* tuple */[
                        at,
                        atP,
                        after,
                        afP,
                        es$prime,
                        0,
                        brP
                      ]
                    ]),
                  es$prime
                ];
        }
    case 4 : 
        var match$6 = s[3];
        var brP$1 = match$6[6];
        var afP$1 = match$6[3];
        var atP$1 = match$6[1];
        var at$1 = match$6[0];
        var b$1 = s[0];
        var match$7 = set_labelling_tree(s[1], after, $$break);
        var st$prime$1 = match$7[0];
        var match$8 = set_labelling_tree(s[2], after, $$break);
        var se$prime = match$8[0];
        var es$prime$prime$prime = match$7[1] || match$8[1];
        if (es$prime$prime$prime) {
          return /* tuple */[
                  /* Ifelse */Block.__(4, [
                      b$1,
                      st$prime$1,
                      se$prime,
                      /* tuple */[
                        at$1,
                        atP$1,
                        after,
                        afP$1,
                        es$prime$prime$prime,
                        $$break,
                        brP$1
                      ]
                    ]),
                  es$prime$prime$prime
                ];
        } else {
          return /* tuple */[
                  /* Ifelse */Block.__(4, [
                      b$1,
                      st$prime$1,
                      se$prime,
                      /* tuple */[
                        at$1,
                        atP$1,
                        after,
                        afP$1,
                        es$prime$prime$prime,
                        0,
                        brP$1
                      ]
                    ]),
                  es$prime$prime$prime
                ];
        }
    case 5 : 
        var match$9 = s[2];
        var at$2 = match$9[0];
        var match$10 = set_labelling_tree(s[1], at$2, after);
        return /* tuple */[
                /* While */Block.__(5, [
                    s[0],
                    match$10[0],
                    /* tuple */[
                      at$2,
                      match$9[1],
                      after,
                      match$9[3],
                      false,
                      0,
                      match$9[6]
                    ]
                  ]),
                false
              ];
    case 6 : 
        var match$11 = s[0];
        return /* tuple */[
                /* Break */Block.__(6, [/* tuple */[
                      match$11[0],
                      match$11[1],
                      after,
                      match$11[3],
                      true,
                      $$break,
                      match$11[6]
                    ]]),
                true
              ];
    case 7 : 
        var match$12 = s[1];
        var brP$2 = match$12[6];
        var afP$2 = match$12[3];
        var atP$2 = match$12[1];
        var at$3 = match$12[0];
        var match$13 = set_labelling_tree_list(s[0], after, $$break);
        var es$prime$1 = match$13[1];
        var sl$prime = match$13[0];
        if (es$prime$1) {
          return /* tuple */[
                  /* Stmtlist */Block.__(7, [
                      sl$prime,
                      /* tuple */[
                        at$3,
                        atP$2,
                        after,
                        afP$2,
                        es$prime$1,
                        $$break,
                        brP$2
                      ]
                    ]),
                  es$prime$1
                ];
        } else {
          return /* tuple */[
                  /* Stmtlist */Block.__(7, [
                      sl$prime,
                      /* tuple */[
                        at$3,
                        atP$2,
                        after,
                        afP$2,
                        es$prime$1,
                        0,
                        brP$2
                      ]
                    ]),
                  es$prime$1
                ];
        }
    
  }
}

function set_labelling_tree_list(sl, after, $$break) {
  if (sl) {
    var sl$prime = sl[1];
    var s$prime = sl[0];
    if (sl$prime) {
      var match = set_labelling_tree_list(sl$prime, at_stmt(s$prime), $$break);
      var match$1 = set_labelling_tree(s$prime, after, $$break);
      var es$prime$prime$prime = match[1] || match$1[1];
      return /* tuple */[
              /* :: */[
                match$1[0],
                match[0]
              ],
              es$prime$prime$prime
            ];
    } else {
      var match$2 = set_labelling_tree(s$prime, after, $$break);
      return /* tuple */[
              /* :: */[
                match$2[0],
                /* [] */0
              ],
              match$2[1]
            ];
    }
  } else {
    return /* tuple */[
            /* [] */0,
            false
          ];
  }
}

function built_abstract_syntax(p) {
  AbstractDomain$AiProject.initialize(AbstractTree$AiProject.vars(p));
  var p$prime = void_label_tree(p);
  var match = set_at_tree(p$prime, 1);
  var next = match[1];
  return set_labelling_tree(match[0], next, next)[0];
}

var void_label = 0;

exports.at_stmt = at_stmt;
exports.select_at = select_at;
exports.property_at = property_at;
exports.after_stmt = after_stmt;
exports.select_after = select_after;
exports.property_after = property_after;
exports.escape_stmt = escape_stmt;
exports.break_stmt = break_stmt;
exports.select_break = select_break;
exports.property_break = property_break;
exports.is_in_stmt = is_in_stmt;
exports.is_in_stmt_list = is_in_stmt_list;
exports.void_label = void_label;
exports.void_label_tree = void_label_tree;
exports.void_label_tree_list = void_label_tree_list;
exports.set_at_tree = set_at_tree;
exports.set_at_tree_list = set_at_tree_list;
exports.set_labelling_tree = set_labelling_tree;
exports.set_labelling_tree_list = set_labelling_tree_list;
exports.built_abstract_syntax = built_abstract_syntax;
/* No side effect */


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE


var Lexing = __webpack_require__(14);
var Lexer$AiProject = __webpack_require__(32);
var Parser$AiProject = __webpack_require__(35);
var Printer$AiProject = __webpack_require__(36);
var Caml_js_exceptions = __webpack_require__(24);
var AbstractTree$AiProject = __webpack_require__(25);
var AbstractDomain$AiProject = __webpack_require__(11);
var AbstractSyntax$AiProject = __webpack_require__(26);
var AbstractInterpreter$AiProject = __webpack_require__(38);

function run(input) {
  var lexbuf = Lexing.from_string(input);
  try {
    var p$prime = Parser$AiProject.prog(Lexer$AiProject.token, lexbuf);
    var p$prime$prime = AbstractSyntax$AiProject.built_abstract_syntax(p$prime);
    var vl = AbstractTree$AiProject.vars(p$prime);
    var p$prime$prime$prime = AbstractInterpreter$AiProject.abstractInterpreter(p$prime$prime, (function (param) {
            return AbstractDomain$AiProject.initialP(/* () */0, param);
          }), vl);
    return Printer$AiProject.print_labelled_node(p$prime$prime$prime, 0, vl);
  }
  catch (raw_exn){
    var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn[0] === Lexer$AiProject.$$Error) {
      return "error: " + exn[1];
    } else if (exn === Parser$AiProject.$$Error) {
      return "error: At offset " + (String(Lexing.lexeme_start(lexbuf)) + ": syntax error.\n%!");
    } else {
      throw exn;
    }
  }
}

run("while (0<1){ break; x=1; }");

exports.run = run;
/*  Not a pure module */


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var Caml_builtin_exceptions = __webpack_require__(0);

function caml_sys_getenv(s) {
  if (typeof process === "undefined" || (process.env) === undefined) {
    throw Caml_builtin_exceptions.not_found;
  } else {
    var match = (process.env)[s];
    if (match !== undefined) {
      return match;
    } else {
      throw Caml_builtin_exceptions.not_found;
    }
  }
}

function caml_sys_time(param) {
  if (typeof process === "undefined" || (process.uptime) === undefined) {
    return -1;
  } else {
    return process.uptime();
  }
}

function caml_sys_random_seed(param) {
  return /* array */[((Date.now() | 0) ^ 4294967295) * Math.random() | 0];
}

function caml_sys_system_command(_cmd) {
  return 127;
}

function caml_sys_getcwd(param) {
  if (typeof process === "undefined") {
    return "/";
  } else {
    return process.cwd();
  }
}

function caml_sys_get_argv(param) {
  if (typeof process === "undefined") {
    return /* tuple */[
            "",
            /* array */[""]
          ];
  } else {
    var argv = (process.argv);
    if (argv == null) {
      return /* tuple */[
              "",
              /* array */[""]
            ];
    } else {
      return /* tuple */[
              argv[0],
              argv
            ];
    }
  }
}

function caml_sys_exit(exit_code) {
  if (typeof process !== "undefined") {
    return process.exit(exit_code);
  } else {
    return 0;
  }
}

function caml_sys_is_directory(_s) {
  throw [
        Caml_builtin_exceptions.failure,
        "caml_sys_is_directory not implemented"
      ];
}

function caml_sys_file_exists(_s) {
  throw [
        Caml_builtin_exceptions.failure,
        "caml_sys_file_exists not implemented"
      ];
}

exports.caml_sys_getenv = caml_sys_getenv;
exports.caml_sys_time = caml_sys_time;
exports.caml_sys_random_seed = caml_sys_random_seed;
exports.caml_sys_system_command = caml_sys_system_command;
exports.caml_sys_getcwd = caml_sys_getcwd;
exports.caml_sys_get_argv = caml_sys_get_argv;
exports.caml_sys_exit = caml_sys_exit;
exports.caml_sys_is_directory = caml_sys_is_directory;
exports.caml_sys_file_exists = caml_sys_file_exists;
/* No side effect */

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(18)))

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Caml_int32 = __webpack_require__(7);
var Caml_utils = __webpack_require__(19);
var Caml_primitive = __webpack_require__(6);
var Caml_builtin_exceptions = __webpack_require__(0);

var min_int = /* record */[
  /* hi */-2147483648,
  /* lo */0
];

var max_int = /* record */[
  /* hi */2147483647,
  /* lo */1
];

var one = /* record */[
  /* hi */0,
  /* lo */1
];

var zero = /* record */[
  /* hi */0,
  /* lo */0
];

var neg_one = /* record */[
  /* hi */-1,
  /* lo */4294967295
];

function neg_signed(x) {
  return (x & 2147483648) !== 0;
}

function add(param, param$1) {
  var other_low_ = param$1[/* lo */1];
  var this_low_ = param[/* lo */1];
  var lo = this_low_ + other_low_ & 4294967295;
  var overflow = neg_signed(this_low_) && (neg_signed(other_low_) || !neg_signed(lo)) || neg_signed(other_low_) && !neg_signed(lo) ? 1 : 0;
  var hi = param[/* hi */0] + param$1[/* hi */0] + overflow & 4294967295;
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

function not(param) {
  var hi = param[/* hi */0] ^ -1;
  var lo = param[/* lo */1] ^ -1;
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

function eq(x, y) {
  if (x[/* hi */0] === y[/* hi */0]) {
    return x[/* lo */1] === y[/* lo */1];
  } else {
    return false;
  }
}

function equal_null(x, y) {
  if (y !== null) {
    return eq(x, y);
  } else {
    return false;
  }
}

function equal_undefined(x, y) {
  if (y !== undefined) {
    return eq(x, y);
  } else {
    return false;
  }
}

function equal_nullable(x, y) {
  if (y == null) {
    return false;
  } else {
    return eq(x, y);
  }
}

function neg(x) {
  if (eq(x, min_int)) {
    return min_int;
  } else {
    return add(not(x), one);
  }
}

function sub(x, y) {
  return add(x, neg(y));
}

function lsl_(x, numBits) {
  if (numBits === 0) {
    return x;
  } else {
    var lo = x[/* lo */1];
    if (numBits >= 32) {
      return /* record */[
              /* hi */(lo << (numBits - 32 | 0)),
              /* lo */0
            ];
    } else {
      var hi = (lo >>> (32 - numBits | 0)) | (x[/* hi */0] << numBits);
      return /* record */[
              /* hi */hi,
              /* lo */((lo << numBits) >>> 0)
            ];
    }
  }
}

function lsr_(x, numBits) {
  if (numBits === 0) {
    return x;
  } else {
    var hi = x[/* hi */0];
    var offset = numBits - 32 | 0;
    if (offset === 0) {
      return /* record */[
              /* hi */0,
              /* lo */(hi >>> 0)
            ];
    } else if (offset > 0) {
      var lo = (hi >>> offset);
      return /* record */[
              /* hi */0,
              /* lo */(lo >>> 0)
            ];
    } else {
      var hi$1 = (hi >>> numBits);
      var lo$1 = (hi << (-offset | 0)) | (x[/* lo */1] >>> numBits);
      return /* record */[
              /* hi */hi$1,
              /* lo */(lo$1 >>> 0)
            ];
    }
  }
}

function asr_(x, numBits) {
  if (numBits === 0) {
    return x;
  } else {
    var hi = x[/* hi */0];
    if (numBits < 32) {
      var hi$1 = (hi >> numBits);
      var lo = (hi << (32 - numBits | 0)) | (x[/* lo */1] >>> numBits);
      return /* record */[
              /* hi */hi$1,
              /* lo */(lo >>> 0)
            ];
    } else {
      var lo$1 = (hi >> (numBits - 32 | 0));
      return /* record */[
              /* hi */hi >= 0 ? 0 : -1,
              /* lo */(lo$1 >>> 0)
            ];
    }
  }
}

function is_zero(param) {
  if (param[/* hi */0] !== 0 || param[/* lo */1] !== 0) {
    return false;
  } else {
    return true;
  }
}

function mul(_this, _other) {
  while(true) {
    var other = _other;
    var $$this = _this;
    var exit = 0;
    var lo;
    var this_hi = $$this[/* hi */0];
    var exit$1 = 0;
    var exit$2 = 0;
    var exit$3 = 0;
    if (this_hi !== 0 || $$this[/* lo */1] !== 0) {
      exit$3 = 4;
    } else {
      return zero;
    }
    if (exit$3 === 4) {
      if (other[/* hi */0] !== 0 || other[/* lo */1] !== 0) {
        exit$2 = 3;
      } else {
        return zero;
      }
    }
    if (exit$2 === 3) {
      if (this_hi !== -2147483648 || $$this[/* lo */1] !== 0) {
        exit$1 = 2;
      } else {
        lo = other[/* lo */1];
        exit = 1;
      }
    }
    if (exit$1 === 2) {
      var other_hi = other[/* hi */0];
      var lo$1 = $$this[/* lo */1];
      var exit$4 = 0;
      if (other_hi !== -2147483648 || other[/* lo */1] !== 0) {
        exit$4 = 3;
      } else {
        lo = lo$1;
        exit = 1;
      }
      if (exit$4 === 3) {
        var other_lo = other[/* lo */1];
        if (this_hi < 0) {
          if (other_hi < 0) {
            _other = neg(other);
            _this = neg($$this);
            continue ;
          } else {
            return neg(mul(neg($$this), other));
          }
        } else if (other_hi < 0) {
          return neg(mul($$this, neg(other)));
        } else {
          var a48 = (this_hi >>> 16);
          var a32 = this_hi & 65535;
          var a16 = (lo$1 >>> 16);
          var a00 = lo$1 & 65535;
          var b48 = (other_hi >>> 16);
          var b32 = other_hi & 65535;
          var b16 = (other_lo >>> 16);
          var b00 = other_lo & 65535;
          var c48 = 0;
          var c32 = 0;
          var c16 = 0;
          var c00 = a00 * b00;
          c16 = (c00 >>> 16) + a16 * b00;
          c32 = (c16 >>> 16);
          c16 = (c16 & 65535) + a00 * b16;
          c32 = c32 + (c16 >>> 16) + a32 * b00;
          c48 = (c32 >>> 16);
          c32 = (c32 & 65535) + a16 * b16;
          c48 += (c32 >>> 16);
          c32 = (c32 & 65535) + a00 * b32;
          c48 += (c32 >>> 16);
          c32 = c32 & 65535;
          c48 = c48 + (a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48) & 65535;
          var hi = c32 | (c48 << 16);
          var lo$2 = c00 & 65535 | ((c16 & 65535) << 16);
          return /* record */[
                  /* hi */hi,
                  /* lo */(lo$2 >>> 0)
                ];
        }
      }
      
    }
    if (exit === 1) {
      if ((lo & 1) === 0) {
        return zero;
      } else {
        return min_int;
      }
    }
    
  };
}

function swap(param) {
  var hi = Caml_int32.caml_int32_bswap(param[/* lo */1]);
  var lo = Caml_int32.caml_int32_bswap(param[/* hi */0]);
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

function xor(param, param$1) {
  return /* record */[
          /* hi */param[/* hi */0] ^ param$1[/* hi */0],
          /* lo */((param[/* lo */1] ^ param$1[/* lo */1]) >>> 0)
        ];
}

function or_(param, param$1) {
  return /* record */[
          /* hi */param[/* hi */0] | param$1[/* hi */0],
          /* lo */((param[/* lo */1] | param$1[/* lo */1]) >>> 0)
        ];
}

function and_(param, param$1) {
  return /* record */[
          /* hi */param[/* hi */0] & param$1[/* hi */0],
          /* lo */((param[/* lo */1] & param$1[/* lo */1]) >>> 0)
        ];
}

function ge(param, param$1) {
  var other_hi = param$1[/* hi */0];
  var hi = param[/* hi */0];
  if (hi > other_hi) {
    return true;
  } else if (hi < other_hi) {
    return false;
  } else {
    return param[/* lo */1] >= param$1[/* lo */1];
  }
}

function neq(x, y) {
  return !eq(x, y);
}

function lt(x, y) {
  return !ge(x, y);
}

function gt(x, y) {
  if (x[/* hi */0] > y[/* hi */0]) {
    return true;
  } else if (x[/* hi */0] < y[/* hi */0]) {
    return false;
  } else {
    return x[/* lo */1] > y[/* lo */1];
  }
}

function le(x, y) {
  return !gt(x, y);
}

function min(x, y) {
  if (ge(x, y)) {
    return y;
  } else {
    return x;
  }
}

function max(x, y) {
  if (gt(x, y)) {
    return x;
  } else {
    return y;
  }
}

function to_float(param) {
  return param[/* hi */0] * (0x100000000) + param[/* lo */1];
}

function of_float(x) {
  if (isNaN(x) || !isFinite(x)) {
    return zero;
  } else if (x <= -9.22337203685477581e+18) {
    return min_int;
  } else if (x + 1 >= 9.22337203685477581e+18) {
    return max_int;
  } else if (x < 0) {
    return neg(of_float(-x));
  } else {
    var hi = x / 4294967296 | 0;
    var lo = x % 4294967296 | 0;
    return /* record */[
            /* hi */hi,
            /* lo */(lo >>> 0)
          ];
  }
}

function div(_self, _other) {
  while(true) {
    var other = _other;
    var self = _self;
    var self_hi = self[/* hi */0];
    var exit = 0;
    var exit$1 = 0;
    if (other[/* hi */0] !== 0 || other[/* lo */1] !== 0) {
      exit$1 = 2;
    } else {
      throw Caml_builtin_exceptions.division_by_zero;
    }
    if (exit$1 === 2) {
      if (self_hi !== -2147483648) {
        if (self_hi !== 0 || self[/* lo */1] !== 0) {
          exit = 1;
        } else {
          return zero;
        }
      } else if (self[/* lo */1] !== 0) {
        exit = 1;
      } else if (eq(other, one) || eq(other, neg_one)) {
        return self;
      } else if (eq(other, min_int)) {
        return one;
      } else {
        var other_hi = other[/* hi */0];
        var half_this = asr_(self, 1);
        var approx = lsl_(div(half_this, other), 1);
        var exit$2 = 0;
        if (approx[/* hi */0] !== 0 || approx[/* lo */1] !== 0) {
          exit$2 = 3;
        } else if (other_hi < 0) {
          return one;
        } else {
          return neg(one);
        }
        if (exit$2 === 3) {
          var y = mul(other, approx);
          var rem = add(self, neg(y));
          return add(approx, div(rem, other));
        }
        
      }
    }
    if (exit === 1) {
      var other_hi$1 = other[/* hi */0];
      var exit$3 = 0;
      if (other_hi$1 !== -2147483648 || other[/* lo */1] !== 0) {
        exit$3 = 2;
      } else {
        return zero;
      }
      if (exit$3 === 2) {
        if (self_hi < 0) {
          if (other_hi$1 < 0) {
            _other = neg(other);
            _self = neg(self);
            continue ;
          } else {
            return neg(div(neg(self), other));
          }
        } else if (other_hi$1 < 0) {
          return neg(div(self, neg(other)));
        } else {
          var res = zero;
          var rem$1 = self;
          while(ge(rem$1, other)) {
            var approx$1 = Caml_primitive.caml_float_max(1, Math.floor(to_float(rem$1) / to_float(other)));
            var log2 = Math.ceil(Math.log(approx$1) / Math.LN2);
            var delta = log2 <= 48 ? 1 : Math.pow(2, log2 - 48);
            var approxRes = of_float(approx$1);
            var approxRem = mul(approxRes, other);
            while(approxRem[/* hi */0] < 0 || gt(approxRem, rem$1)) {
              approx$1 -= delta;
              approxRes = of_float(approx$1);
              approxRem = mul(approxRes, other);
            };
            if (is_zero(approxRes)) {
              approxRes = one;
            }
            res = add(res, approxRes);
            rem$1 = add(rem$1, neg(approxRem));
          };
          return res;
        }
      }
      
    }
    
  };
}

function mod_(self, other) {
  var y = mul(div(self, other), other);
  return add(self, neg(y));
}

function div_mod(self, other) {
  var quotient = div(self, other);
  var y = mul(quotient, other);
  return /* tuple */[
          quotient,
          add(self, neg(y))
        ];
}

function compare(self, other) {
  var v = Caml_primitive.caml_nativeint_compare(self[/* hi */0], other[/* hi */0]);
  if (v === 0) {
    return Caml_primitive.caml_nativeint_compare(self[/* lo */1], other[/* lo */1]);
  } else {
    return v;
  }
}

function of_int32(lo) {
  return /* record */[
          /* hi */lo < 0 ? -1 : 0,
          /* lo */(lo >>> 0)
        ];
}

function to_int32(x) {
  return x[/* lo */1] | 0;
}

function to_hex(x) {
  var x_lo = x[/* lo */1];
  var x_hi = x[/* hi */0];
  var aux = function (v) {
    return (v >>> 0).toString(16);
  };
  var exit = 0;
  if (x_hi !== 0 || x_lo !== 0) {
    exit = 1;
  } else {
    return "0";
  }
  if (exit === 1) {
    if (x_lo !== 0) {
      if (x_hi !== 0) {
        var lo = aux(x_lo);
        var pad = 8 - lo.length | 0;
        if (pad <= 0) {
          return aux(x_hi) + lo;
        } else {
          return aux(x_hi) + (Caml_utils.repeat(pad, "0") + lo);
        }
      } else {
        return aux(x_lo);
      }
    } else {
      return aux(x_hi) + "00000000";
    }
  }
  
}

function discard_sign(x) {
  return /* record */[
          /* hi */2147483647 & x[/* hi */0],
          /* lo */x[/* lo */1]
        ];
}

function float_of_bits (x){ 
  return new Float64Array(new Int32Array([x[1],x[0]]).buffer)[0]
};

function bits_of_float(x) {
  var buf = (new Int32Array(new Float64Array([x]).buffer));
  return /* record */[
          /* hi */buf[1],
          /* lo */(buf[0] >>> 0)
        ];
}

function get64(s, i) {
  var hi = (s.charCodeAt(i + 4 | 0) << 32) | (s.charCodeAt(i + 5 | 0) << 40) | (s.charCodeAt(i + 6 | 0) << 48) | (s.charCodeAt(i + 7 | 0) << 56);
  var lo = s.charCodeAt(i) | (s.charCodeAt(i + 1 | 0) << 8) | (s.charCodeAt(i + 2 | 0) << 16) | (s.charCodeAt(i + 3 | 0) << 24);
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

exports.min_int = min_int;
exports.max_int = max_int;
exports.one = one;
exports.zero = zero;
exports.not = not;
exports.of_int32 = of_int32;
exports.to_int32 = to_int32;
exports.add = add;
exports.neg = neg;
exports.sub = sub;
exports.lsl_ = lsl_;
exports.lsr_ = lsr_;
exports.asr_ = asr_;
exports.is_zero = is_zero;
exports.mul = mul;
exports.xor = xor;
exports.or_ = or_;
exports.and_ = and_;
exports.swap = swap;
exports.ge = ge;
exports.eq = eq;
exports.neq = neq;
exports.lt = lt;
exports.gt = gt;
exports.le = le;
exports.equal_null = equal_null;
exports.equal_undefined = equal_undefined;
exports.equal_nullable = equal_nullable;
exports.min = min;
exports.max = max;
exports.to_float = to_float;
exports.of_float = of_float;
exports.div = div;
exports.mod_ = mod_;
exports.compare = compare;
exports.float_of_bits = float_of_bits;
exports.bits_of_float = bits_of_float;
exports.get64 = get64;
exports.div_mod = div_mod;
exports.to_hex = to_hex;
exports.discard_sign = discard_sign;
/* Caml_int32 Not a pure module */


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



function not_implemented (s){
  throw new Error(s + " not implemented by BuckleScript yet\n")
};

exports.not_implemented = not_implemented;
/* No side effect */


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Caml_builtin_exceptions = __webpack_require__(0);

 

/***********************************************************************/
/*                                                                     */
/*                           Objective Caml                            */
/*                                                                     */
/*            Xavier Leroy, projet Cristal, INRIA Rocquencourt         */
/*                                                                     */
/*  Copyright 1996 Institut National de Recherche en Informatique et   */
/*  en Automatique.  All rights reserved.  This file is distributed    */
/*  under the terms of the GNU Library General Public License, with    */
/*  the special exception on linking described in file ../LICENSE.     */
/*                                                                     */
/***********************************************************************/

/* $Id: lexing.c 6045 2004-01-01 16:42:43Z doligez $ */

/* The table-driven automaton for lexers generated by camllex. */

function caml_lex_array(s) {
    var l = s.length / 2;
    var a = new Array(l);
    // when s.charCodeAt(2 * i + 1 ) > 128 (0x80)
    // a[i] < 0  
    // for(var i = 0 ; i <= 0xffff; ++i) { if (i << 16 >> 16 !==i){console.log(i<<16>>16, 'vs',i)}}
    // 
    for (var i = 0; i < l; i++)
        a[i] = (s.charCodeAt(2 * i) | (s.charCodeAt(2 * i + 1) << 8)) << 16 >> 16;
    return a;
}

;

function caml_lex_engine_aux (tbl,start_state,lexbuf,exn){
    // Lexing.lexbuf
    var lex_buffer = 1;
    var lex_buffer_len = 2;
    var lex_start_pos = 4;
    var lex_curr_pos = 5;
    var lex_last_pos = 6;
    var lex_last_action = 7;
    var lex_eof_reached = 8;
    // Lexing.lex_tables
    var lex_base = 0;
    var lex_backtrk = 1;
    var lex_default = 2;
    var lex_trans = 3;
    var lex_check = 4;
    if (!tbl.lex_default) {
        tbl.lex_base = caml_lex_array(tbl[lex_base]);
        tbl.lex_backtrk = caml_lex_array(tbl[lex_backtrk]);
        tbl.lex_check = caml_lex_array(tbl[lex_check]);
        tbl.lex_trans = caml_lex_array(tbl[lex_trans]);
        tbl.lex_default = caml_lex_array(tbl[lex_default]);
    }
    var c;
    var state = start_state;
    //var buffer = bytes_of_string(lexbuf[lex_buffer]);
    var buffer = lexbuf[lex_buffer];
    if (state >= 0) {
        /* First entry */
        lexbuf[lex_last_pos] = lexbuf[lex_start_pos] = lexbuf[lex_curr_pos];
        lexbuf[lex_last_action] = -1;
    }
    else {
        /* Reentry after refill */
        state = -state - 1;
    }
    for (;;) {
        /* Lookup base address or action number for current state */
        var base = tbl.lex_base[state];
        if (base < 0)
            return -base - 1;
        /* See if it's a backtrack point */
        var backtrk = tbl.lex_backtrk[state];
        if (backtrk >= 0) {
            lexbuf[lex_last_pos] = lexbuf[lex_curr_pos];
            lexbuf[lex_last_action] = backtrk;
        }
        /* See if we need a refill */
        if (lexbuf[lex_curr_pos] >= lexbuf[lex_buffer_len]) {
            if (lexbuf[lex_eof_reached] === 0)
                return -state - 1;
            else
                c = 256;
        }
        else {
            /* Read next input char */
            c = buffer[lexbuf[lex_curr_pos]];
            lexbuf[lex_curr_pos]++;
        }
        /* Determine next state */
        if (tbl.lex_check[base + c] === state) {
            state = tbl.lex_trans[base + c];
        }
        else {
            state = tbl.lex_default[state];
        }
        /* If no transition on this char, return to last backtrack point */
        if (state < 0) {
            lexbuf[lex_curr_pos] = lexbuf[lex_last_pos];
            if (lexbuf[lex_last_action] == -1)
                throw exn
            else
                return lexbuf[lex_last_action];
        }
        else {
            /* Erase the EOF condition only if the EOF pseudo-character was
             consumed by the automaton (i.e. there was no backtrack above)
             */
            if (c == 256)
                lexbuf[lex_eof_reached] = 0;
        }
    }
};

var empty_token_lit = "lexing: empty token";

function caml_lex_engine(tbls, i, buf) {
  return caml_lex_engine_aux(tbls, i, buf, [
              Caml_builtin_exceptions.failure,
              empty_token_lit
            ]);
}




/***********************************************/
/* New lexer engine, with memory of positions  */
/***********************************************/

/**
 * s -> Lexing.lex_tables.lex_code
 * mem -> Lexing.lexbuf.lex_mem (* int array *)
 */          
          
function caml_lex_run_mem(s, i, mem, curr_pos) {
    for (;;) {
        var dst = s.charCodeAt(i);
        i++;
        if (dst == 0xff)
            return;
        var src = s.charCodeAt(i);
        i++;
        if (src == 0xff)
            mem[dst] = curr_pos;
        else
            mem[dst] = mem[src];
    }
}


/**
 * s -> Lexing.lex_tables.lex_code
 * mem -> Lexing.lexbuf.lex_mem (* int array *)
 */
  
function caml_lex_run_tag(s, i, mem) {
    for (;;) {
        var dst = s.charCodeAt(i);
        i++;
        if (dst == 0xff)
            return;
        var src = s.charCodeAt(i);
        i++;
        if (src == 0xff)
            mem[dst] = -1;
        else
            mem[dst] = mem[src];
    }
}

;

function caml_new_lex_engine_aux (tbl,start_state,lexbuf,exn){
    // Lexing.lexbuf
    var lex_buffer = 1;
    var lex_buffer_len = 2;
    var lex_start_pos = 4;
    var lex_curr_pos = 5;
    var lex_last_pos = 6;
    var lex_last_action = 7;
    var lex_eof_reached = 8;
    var lex_mem = 9;
    // Lexing.lex_tables
    var lex_base = 0;
    var lex_backtrk = 1;
    var lex_default = 2;
    var lex_trans = 3;
    var lex_check = 4;
    var lex_base_code = 5;
    var lex_backtrk_code = 6;
    var lex_default_code = 7;
    var lex_trans_code = 8;
    var lex_check_code = 9;
    var lex_code = 10;
    if (!tbl.lex_default) {
        tbl.lex_base = caml_lex_array(tbl[lex_base]);
        tbl.lex_backtrk = caml_lex_array(tbl[lex_backtrk]);
        tbl.lex_check = caml_lex_array(tbl[lex_check]);
        tbl.lex_trans = caml_lex_array(tbl[lex_trans]);
        tbl.lex_default = caml_lex_array(tbl[lex_default]);
    }
    if (!tbl.lex_default_code) {
        tbl.lex_base_code = caml_lex_array(tbl[lex_base_code]);
        tbl.lex_backtrk_code = caml_lex_array(tbl[lex_backtrk_code]);
        tbl.lex_check_code = caml_lex_array(tbl[lex_check_code]);
        tbl.lex_trans_code = caml_lex_array(tbl[lex_trans_code]);
        tbl.lex_default_code = caml_lex_array(tbl[lex_default_code]);
    }
    if (tbl.lex_code == null) {
        //tbl.lex_code = caml_bytes_of_string(tbl[lex_code]);
        tbl.lex_code = (tbl[lex_code]);
    }
    var c, state = start_state;
    //var buffer = caml_bytes_of_string(lexbuf[lex_buffer]);
    var buffer = lexbuf[lex_buffer];
    if (state >= 0) {
        /* First entry */
        lexbuf[lex_last_pos] = lexbuf[lex_start_pos] = lexbuf[lex_curr_pos];
        lexbuf[lex_last_action] = -1;
    }
    else {
        /* Reentry after refill */
        state = -state - 1;
    }
    for (;;) {
        /* Lookup base address or action number for current state */
        var base = tbl.lex_base[state];
        if (base < 0) {
            var pc_off = tbl.lex_base_code[state];
            caml_lex_run_tag(tbl.lex_code, pc_off, lexbuf[lex_mem]);
            return -base - 1;
        }
        /* See if it's a backtrack point */
        var backtrk = tbl.lex_backtrk[state];
        if (backtrk >= 0) {
            var pc_off = tbl.lex_backtrk_code[state];
            caml_lex_run_tag(tbl.lex_code, pc_off, lexbuf[lex_mem]);
            lexbuf[lex_last_pos] = lexbuf[lex_curr_pos];
            lexbuf[lex_last_action] = backtrk;
        }
        /* See if we need a refill */
        if (lexbuf[lex_curr_pos] >= lexbuf[lex_buffer_len]) {
            if (lexbuf[lex_eof_reached] == 0)
                return -state - 1;
            else
                c = 256;
        }
        else {
            /* Read next input char */
            c = buffer[lexbuf[lex_curr_pos]];
            lexbuf[lex_curr_pos]++;
        }
        /* Determine next state */
        var pstate = state;
        if (tbl.lex_check[base + c] == state)
            state = tbl.lex_trans[base + c];
        else
            state = tbl.lex_default[state];
        /* If no transition on this char, return to last backtrack point */
        if (state < 0) {
            lexbuf[lex_curr_pos] = lexbuf[lex_last_pos];
            if (lexbuf[lex_last_action] == -1)
                throw exn;
            else
                return lexbuf[lex_last_action];
        }
        else {
            /* If some transition, get and perform memory moves */
            var base_code = tbl.lex_base_code[pstate], pc_off;
            if (tbl.lex_check_code[base_code + c] == pstate)
                pc_off = tbl.lex_trans_code[base_code + c];
            else
                pc_off = tbl.lex_default_code[pstate];
            if (pc_off > 0)
                caml_lex_run_mem(tbl.lex_code, pc_off, lexbuf[lex_mem], lexbuf[lex_curr_pos]);
            /* Erase the EOF condition only if the EOF pseudo-character was
             consumed by the automaton (i.e. there was no backtrack above)
             */
            if (c == 256)
                lexbuf[lex_eof_reached] = 0;
        }
    }
};

function caml_new_lex_engine(tbl, i, buf) {
  return caml_new_lex_engine_aux(tbl, i, buf, [
              Caml_builtin_exceptions.failure,
              empty_token_lit
            ]);
}

exports.caml_lex_engine = caml_lex_engine;
exports.caml_new_lex_engine = caml_new_lex_engine;
/*  Not a pure module */


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE


var Block = __webpack_require__(5);
var Curry = __webpack_require__(1);
var Lexing = __webpack_require__(14);
var Printf = __webpack_require__(21);
var Caml_format = __webpack_require__(12);
var Caml_exceptions = __webpack_require__(8);

var $$Error = Caml_exceptions.create("Lexer-AiProject.Error");

var __ocaml_lex_tables = /* record */[
  /* lex_base */"\0\0\xea\xff\xeb\xff\xec\xff\xed\xff\xee\xff\xef\xff\xf0\xff\xf2\xff\x02\0\x03\0\xf5\xff\xf6\xff\xf7\xffN\0X\0\xa3\0\xee\x009\x01\x84\x01\xcf\x01\xff\xff\x1a\x02e\x02\xb0\x02\xfb\x02F\x03\x91\x03\xdc\x03'\x04r\x04\xbd\x04\b\x05S\x05\x9e\x05\xe9\x054\x06\xf4\xff\xf3\xff",
  /* lex_backtrk */"\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x15\0\x0e\0\xff\xff\xff\xff\xff\xff\x07\0\x06\0\x06\0\x06\0\x06\0\x06\0\x06\0\xff\xff\x06\0\x06\0\x01\0\x02\0\x06\0\x06\0\x03\0\x06\0\x06\0\x06\0\x04\0\x06\0\x06\0\x06\0\x05\0\xff\xff\xff\xff",
  /* lex_default */"\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\xff\xff\0\0\0\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0",
  /* lex_trans */"\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x15\0\x15\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x15\0\t\0\0\0\0\0\0\0\0\0\0\0\0\0\x07\0\x06\0\0\0\r\0\0\0\f\0\0\0\0\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\0\0\x05\0\x0b\0\n\0\b\0&\0%\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x10\0\x0f\0\x0f\0\x12\0\x0f\0\x0f\0\x0f\0\x13\0\x0f\0\x0f\0\x0f\0\x0f\0\x14\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x11\0\x0f\0\x0f\0\x0f\0\x04\0\0\0\x03\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\x02\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0!\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x1d\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x1a\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x19\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\x16\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x17\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x18\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x1b\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x1c\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x1e\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x1f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0 \0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\"\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0#\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0$\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
  /* lex_check */"\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0\xff\xff\0\0\xff\xff\0\0\xff\xff\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\t\0\n\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\0\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x12\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x14\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff",
  /* lex_base_code */"",
  /* lex_backtrk_code */"",
  /* lex_default_code */"",
  /* lex_trans_code */"",
  /* lex_check_code */"",
  /* lex_code */""
];

function __ocaml_lex_token_rec(lexbuf, ___ocaml_lex_state) {
  while(true) {
    var __ocaml_lex_state = ___ocaml_lex_state;
    var __ocaml_lex_state$1 = Lexing.engine(__ocaml_lex_tables, __ocaml_lex_state, lexbuf);
    switch (__ocaml_lex_state$1) {
      case 0 : 
          ___ocaml_lex_state = 0;
          continue ;
      case 1 : 
          return /* NAND */6;
      case 2 : 
          return /* IF */11;
      case 3 : 
          return /* ELSE */15;
      case 4 : 
          return /* WHILE */0;
      case 5 : 
          return /* BREAK */16;
      case 6 : 
          var idt = Lexing.sub_lexeme(lexbuf, lexbuf[/* lex_start_pos */4], lexbuf[/* lex_curr_pos */5]);
          return /* IDENT */Block.__(1, [idt]);
      case 7 : 
          var num = Lexing.sub_lexeme(lexbuf, lexbuf[/* lex_start_pos */4], lexbuf[/* lex_curr_pos */5]);
          return /* NUM */Block.__(0, [Caml_format.caml_int_of_string(num)]);
      case 8 : 
          return /* PLUS */4;
      case 9 : 
          return /* MINUS */7;
      case 10 : 
          return /* LT */8;
      case 11 : 
          return /* EQ */13;
      case 12 : 
          return /* NEQ */5;
      case 13 : 
          return /* GT */12;
      case 14 : 
          return /* ASSIGN */17;
      case 15 : 
          return /* LPAREN */9;
      case 16 : 
          return /* RPAREN */2;
      case 17 : 
          return /* SEMICOLON */1;
      case 18 : 
          return /* LBRACKET */10;
      case 19 : 
          return /* RBRACKET */3;
      case 20 : 
          return /* END */14;
      case 21 : 
          throw [
                $$Error,
                Curry._1(Printf.sprintf(/* Format */[
                          /* String_literal */Block.__(11, [
                              "At offset ",
                              /* Int */Block.__(4, [
                                  /* Int_d */0,
                                  /* No_padding */0,
                                  /* No_precision */0,
                                  /* String_literal */Block.__(11, [
                                      ": unexpected character.\n",
                                      /* End_of_format */0
                                    ])
                                ])
                            ]),
                          "At offset %d: unexpected character.\n"
                        ]), Lexing.lexeme_start(lexbuf))
              ];
      default:
        Curry._1(lexbuf[/* refill_buff */0], lexbuf);
        ___ocaml_lex_state = __ocaml_lex_state$1;
        continue ;
    }
  };
}

function token(lexbuf) {
  return __ocaml_lex_token_rec(lexbuf, 0);
}

exports.$$Error = $$Error;
exports.__ocaml_lex_tables = __ocaml_lex_tables;
exports.token = token;
exports.__ocaml_lex_token_rec = __ocaml_lex_token_rec;
/* No side effect */


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Char = __webpack_require__(15);
var Block = __webpack_require__(5);
var Bytes = __webpack_require__(9);
var Curry = __webpack_require__(1);
var $$Buffer = __webpack_require__(22);
var $$String = __webpack_require__(23);
var Caml_io = __webpack_require__(17);
var Caml_obj = __webpack_require__(4);
var Caml_bytes = __webpack_require__(3);
var Caml_int32 = __webpack_require__(7);
var Pervasives = __webpack_require__(2);
var Caml_format = __webpack_require__(12);
var Caml_string = __webpack_require__(13);
var Caml_primitive = __webpack_require__(6);
var Caml_exceptions = __webpack_require__(8);
var Caml_js_exceptions = __webpack_require__(24);
var Caml_builtin_exceptions = __webpack_require__(0);
var CamlinternalFormatBasics = __webpack_require__(20);

function create_char_set(param) {
  return Bytes.make(32, /* "\000" */0);
}

function add_in_char_set(char_set, c) {
  var str_ind = (c >>> 3);
  var mask = (1 << (c & 7));
  char_set[str_ind] = Pervasives.char_of_int(Caml_bytes.get(char_set, str_ind) | mask);
  return /* () */0;
}

var freeze_char_set = Bytes.to_string;

function rev_char_set(char_set) {
  var char_set$prime = Bytes.make(32, /* "\000" */0);
  for(var i = 0; i <= 31; ++i){
    char_set$prime[i] = Pervasives.char_of_int(Caml_string.get(char_set, i) ^ 255);
  }
  return Caml_bytes.bytes_to_string(char_set$prime);
}

function is_in_char_set(char_set, c) {
  var str_ind = (c >>> 3);
  var mask = (1 << (c & 7));
  return (Caml_string.get(char_set, str_ind) & mask) !== 0;
}

function pad_of_pad_opt(pad_opt) {
  if (pad_opt !== undefined) {
    return /* Lit_padding */Block.__(0, [
              /* Right */1,
              pad_opt
            ]);
  } else {
    return /* No_padding */0;
  }
}

function prec_of_prec_opt(prec_opt) {
  if (prec_opt !== undefined) {
    return /* Lit_precision */[prec_opt];
  } else {
    return /* No_precision */0;
  }
}

function param_format_of_ignored_format(ign, fmt) {
  if (typeof ign === "number") {
    switch (ign) {
      case 0 : 
          return /* Param_format_EBB */[/* Char */Block.__(0, [fmt])];
      case 1 : 
          return /* Param_format_EBB */[/* Caml_char */Block.__(1, [fmt])];
      case 2 : 
          return /* Param_format_EBB */[/* Bool */Block.__(9, [fmt])];
      case 3 : 
          return /* Param_format_EBB */[/* Reader */Block.__(19, [fmt])];
      case 4 : 
          return /* Param_format_EBB */[/* Scan_next_char */Block.__(22, [fmt])];
      
    }
  } else {
    switch (ign.tag | 0) {
      case 0 : 
          return /* Param_format_EBB */[/* String */Block.__(2, [
                      pad_of_pad_opt(ign[0]),
                      fmt
                    ])];
      case 1 : 
          return /* Param_format_EBB */[/* Caml_string */Block.__(3, [
                      pad_of_pad_opt(ign[0]),
                      fmt
                    ])];
      case 2 : 
          return /* Param_format_EBB */[/* Int */Block.__(4, [
                      ign[0],
                      pad_of_pad_opt(ign[1]),
                      /* No_precision */0,
                      fmt
                    ])];
      case 3 : 
          return /* Param_format_EBB */[/* Int32 */Block.__(5, [
                      ign[0],
                      pad_of_pad_opt(ign[1]),
                      /* No_precision */0,
                      fmt
                    ])];
      case 4 : 
          return /* Param_format_EBB */[/* Nativeint */Block.__(6, [
                      ign[0],
                      pad_of_pad_opt(ign[1]),
                      /* No_precision */0,
                      fmt
                    ])];
      case 5 : 
          return /* Param_format_EBB */[/* Int64 */Block.__(7, [
                      ign[0],
                      pad_of_pad_opt(ign[1]),
                      /* No_precision */0,
                      fmt
                    ])];
      case 6 : 
          return /* Param_format_EBB */[/* Float */Block.__(8, [
                      /* Float_f */0,
                      pad_of_pad_opt(ign[0]),
                      prec_of_prec_opt(ign[1]),
                      fmt
                    ])];
      case 7 : 
          return /* Param_format_EBB */[/* Format_arg */Block.__(13, [
                      ign[0],
                      ign[1],
                      fmt
                    ])];
      case 8 : 
          return /* Param_format_EBB */[/* Format_subst */Block.__(14, [
                      ign[0],
                      ign[1],
                      fmt
                    ])];
      case 9 : 
          return /* Param_format_EBB */[/* Scan_char_set */Block.__(20, [
                      ign[0],
                      ign[1],
                      fmt
                    ])];
      case 10 : 
          return /* Param_format_EBB */[/* Scan_get_counter */Block.__(21, [
                      ign[0],
                      fmt
                    ])];
      
    }
  }
}

function buffer_check_size(buf, overhead) {
  var len = buf[/* bytes */1].length;
  var min_len = buf[/* ind */0] + overhead | 0;
  if (min_len > len) {
    var new_len = Caml_primitive.caml_int_max((len << 1), min_len);
    var new_str = Caml_bytes.caml_create_bytes(new_len);
    Bytes.blit(buf[/* bytes */1], 0, new_str, 0, len);
    buf[/* bytes */1] = new_str;
    return /* () */0;
  } else {
    return 0;
  }
}

function buffer_add_char(buf, c) {
  buffer_check_size(buf, 1);
  buf[/* bytes */1][buf[/* ind */0]] = c;
  buf[/* ind */0] = buf[/* ind */0] + 1 | 0;
  return /* () */0;
}

function buffer_add_string(buf, s) {
  var str_len = s.length;
  buffer_check_size(buf, str_len);
  $$String.blit(s, 0, buf[/* bytes */1], buf[/* ind */0], str_len);
  buf[/* ind */0] = buf[/* ind */0] + str_len | 0;
  return /* () */0;
}

function buffer_contents(buf) {
  return Bytes.sub_string(buf[/* bytes */1], 0, buf[/* ind */0]);
}

function char_of_iconv(iconv) {
  switch (iconv) {
    case 0 : 
    case 1 : 
    case 2 : 
        return /* "d" */100;
    case 3 : 
    case 4 : 
    case 5 : 
        return /* "i" */105;
    case 6 : 
    case 7 : 
        return /* "x" */120;
    case 8 : 
    case 9 : 
        return /* "X" */88;
    case 10 : 
    case 11 : 
        return /* "o" */111;
    case 12 : 
        return /* "u" */117;
    
  }
}

function char_of_fconv(fconv) {
  switch (fconv) {
    case 0 : 
    case 1 : 
    case 2 : 
        return /* "f" */102;
    case 3 : 
    case 4 : 
    case 5 : 
        return /* "e" */101;
    case 6 : 
    case 7 : 
    case 8 : 
        return /* "E" */69;
    case 9 : 
    case 10 : 
    case 11 : 
        return /* "g" */103;
    case 12 : 
    case 13 : 
    case 14 : 
        return /* "G" */71;
    case 15 : 
        return /* "F" */70;
    
  }
}

function char_of_counter(counter) {
  switch (counter) {
    case 0 : 
        return /* "l" */108;
    case 1 : 
        return /* "n" */110;
    case 2 : 
        return /* "N" */78;
    
  }
}

function bprint_char_set(buf, char_set) {
  var print_char = function (buf, i) {
    var c = Pervasives.char_of_int(i);
    if (c !== 37) {
      if (c !== 64) {
        return buffer_add_char(buf, c);
      } else {
        buffer_add_char(buf, /* "%" */37);
        return buffer_add_char(buf, /* "@" */64);
      }
    } else {
      buffer_add_char(buf, /* "%" */37);
      return buffer_add_char(buf, /* "%" */37);
    }
  };
  var print_out = function (set, _i) {
    while(true) {
      var i = _i;
      if (i < 256) {
        if (is_in_char_set(set, Pervasives.char_of_int(i))) {
          var set$1 = set;
          var i$1 = i;
          var match = Pervasives.char_of_int(i$1);
          var switcher = match - 45 | 0;
          if (switcher > 48 || switcher < 0) {
            if (switcher >= 210) {
              return print_char(buf, 255);
            } else {
              return print_second(set$1, i$1 + 1 | 0);
            }
          } else if (switcher > 47 || switcher < 1) {
            return print_out(set$1, i$1 + 1 | 0);
          } else {
            return print_second(set$1, i$1 + 1 | 0);
          }
        } else {
          _i = i + 1 | 0;
          continue ;
        }
      } else {
        return 0;
      }
    };
  };
  var print_second = function (set, i) {
    if (is_in_char_set(set, Pervasives.char_of_int(i))) {
      var match = Pervasives.char_of_int(i);
      var exit = 0;
      var switcher = match - 45 | 0;
      if (switcher > 48 || switcher < 0) {
        if (switcher >= 210) {
          print_char(buf, 254);
          return print_char(buf, 255);
        } else {
          exit = 1;
        }
      } else if ((switcher > 47 || switcher < 1) && !is_in_char_set(set, Pervasives.char_of_int(i + 1 | 0))) {
        print_char(buf, i - 1 | 0);
        return print_out(set, i + 1 | 0);
      } else {
        exit = 1;
      }
      if (exit === 1) {
        if (is_in_char_set(set, Pervasives.char_of_int(i + 1 | 0))) {
          var set$1 = set;
          var i$1 = i - 1 | 0;
          var _j = i + 2 | 0;
          while(true) {
            var j = _j;
            if (j === 256 || !is_in_char_set(set$1, Pervasives.char_of_int(j))) {
              print_char(buf, i$1);
              print_char(buf, /* "-" */45);
              print_char(buf, j - 1 | 0);
              if (j < 256) {
                return print_out(set$1, j + 1 | 0);
              } else {
                return 0;
              }
            } else {
              _j = j + 1 | 0;
              continue ;
            }
          };
        } else {
          print_char(buf, i - 1 | 0);
          print_char(buf, i);
          return print_out(set, i + 2 | 0);
        }
      }
      
    } else {
      print_char(buf, i - 1 | 0);
      return print_out(set, i + 1 | 0);
    }
  };
  var print_start = function (set) {
    var is_alone = function (c) {
      var before = Char.chr(c - 1 | 0);
      var after = Char.chr(c + 1 | 0);
      if (is_in_char_set(set, c)) {
        return !(is_in_char_set(set, before) && is_in_char_set(set, after));
      } else {
        return false;
      }
    };
    if (is_alone(/* "]" */93)) {
      buffer_add_char(buf, /* "]" */93);
    }
    print_out(set, 1);
    if (is_alone(/* "-" */45)) {
      return buffer_add_char(buf, /* "-" */45);
    } else {
      return 0;
    }
  };
  buffer_add_char(buf, /* "[" */91);
  print_start(is_in_char_set(char_set, /* "\000" */0) ? (buffer_add_char(buf, /* "^" */94), rev_char_set(char_set)) : char_set);
  return buffer_add_char(buf, /* "]" */93);
}

function bprint_padty(buf, padty) {
  switch (padty) {
    case 0 : 
        return buffer_add_char(buf, /* "-" */45);
    case 1 : 
        return /* () */0;
    case 2 : 
        return buffer_add_char(buf, /* "0" */48);
    
  }
}

function bprint_ignored_flag(buf, ign_flag) {
  if (ign_flag) {
    return buffer_add_char(buf, /* "_" */95);
  } else {
    return 0;
  }
}

function bprint_pad_opt(buf, pad_opt) {
  if (pad_opt !== undefined) {
    return buffer_add_string(buf, String(pad_opt));
  } else {
    return /* () */0;
  }
}

function bprint_padding(buf, pad) {
  if (typeof pad === "number") {
    return /* () */0;
  } else {
    bprint_padty(buf, pad[0]);
    if (pad.tag) {
      return buffer_add_char(buf, /* "*" */42);
    } else {
      return buffer_add_string(buf, String(pad[1]));
    }
  }
}

function bprint_precision(buf, prec) {
  if (typeof prec === "number") {
    if (prec !== 0) {
      return buffer_add_string(buf, ".*");
    } else {
      return /* () */0;
    }
  } else {
    buffer_add_char(buf, /* "." */46);
    return buffer_add_string(buf, String(prec[0]));
  }
}

function bprint_iconv_flag(buf, iconv) {
  switch (iconv) {
    case 1 : 
    case 4 : 
        return buffer_add_char(buf, /* "+" */43);
    case 2 : 
    case 5 : 
        return buffer_add_char(buf, /* " " */32);
    case 7 : 
    case 9 : 
    case 11 : 
        return buffer_add_char(buf, /* "#" */35);
    case 0 : 
    case 3 : 
    case 6 : 
    case 8 : 
    case 10 : 
    case 12 : 
        return /* () */0;
    
  }
}

function bprint_int_fmt(buf, ign_flag, iconv, pad, prec) {
  buffer_add_char(buf, /* "%" */37);
  bprint_ignored_flag(buf, ign_flag);
  bprint_iconv_flag(buf, iconv);
  bprint_padding(buf, pad);
  bprint_precision(buf, prec);
  return buffer_add_char(buf, char_of_iconv(iconv));
}

function bprint_altint_fmt(buf, ign_flag, iconv, pad, prec, c) {
  buffer_add_char(buf, /* "%" */37);
  bprint_ignored_flag(buf, ign_flag);
  bprint_iconv_flag(buf, iconv);
  bprint_padding(buf, pad);
  bprint_precision(buf, prec);
  buffer_add_char(buf, c);
  return buffer_add_char(buf, char_of_iconv(iconv));
}

function bprint_fconv_flag(buf, fconv) {
  switch (fconv) {
    case 1 : 
    case 4 : 
    case 7 : 
    case 10 : 
    case 13 : 
        return buffer_add_char(buf, /* "+" */43);
    case 2 : 
    case 5 : 
    case 8 : 
    case 11 : 
    case 14 : 
        return buffer_add_char(buf, /* " " */32);
    case 0 : 
    case 3 : 
    case 6 : 
    case 9 : 
    case 12 : 
    case 15 : 
        return /* () */0;
    
  }
}

function bprint_float_fmt(buf, ign_flag, fconv, pad, prec) {
  buffer_add_char(buf, /* "%" */37);
  bprint_ignored_flag(buf, ign_flag);
  bprint_fconv_flag(buf, fconv);
  bprint_padding(buf, pad);
  bprint_precision(buf, prec);
  return buffer_add_char(buf, char_of_fconv(fconv));
}

function string_of_formatting_lit(formatting_lit) {
  if (typeof formatting_lit === "number") {
    switch (formatting_lit) {
      case 0 : 
          return "@]";
      case 1 : 
          return "@}";
      case 2 : 
          return "@?";
      case 3 : 
          return "@\n";
      case 4 : 
          return "@.";
      case 5 : 
          return "@@";
      case 6 : 
          return "@%";
      
    }
  } else {
    switch (formatting_lit.tag | 0) {
      case 0 : 
      case 1 : 
          return formatting_lit[0];
      case 2 : 
          return "@" + Caml_bytes.bytes_to_string(Bytes.make(1, formatting_lit[0]));
      
    }
  }
}

function string_of_formatting_gen(formatting_gen) {
  return formatting_gen[0][1];
}

function bprint_char_literal(buf, chr) {
  if (chr !== 37) {
    return buffer_add_char(buf, chr);
  } else {
    return buffer_add_string(buf, "%%");
  }
}

function bprint_string_literal(buf, str) {
  for(var i = 0 ,i_finish = str.length - 1 | 0; i <= i_finish; ++i){
    bprint_char_literal(buf, Caml_string.get(str, i));
  }
  return /* () */0;
}

function bprint_fmtty(buf, _fmtty) {
  while(true) {
    var fmtty = _fmtty;
    if (typeof fmtty === "number") {
      return /* () */0;
    } else {
      switch (fmtty.tag | 0) {
        case 0 : 
            buffer_add_string(buf, "%c");
            _fmtty = fmtty[0];
            continue ;
        case 1 : 
            buffer_add_string(buf, "%s");
            _fmtty = fmtty[0];
            continue ;
        case 2 : 
            buffer_add_string(buf, "%i");
            _fmtty = fmtty[0];
            continue ;
        case 3 : 
            buffer_add_string(buf, "%li");
            _fmtty = fmtty[0];
            continue ;
        case 4 : 
            buffer_add_string(buf, "%ni");
            _fmtty = fmtty[0];
            continue ;
        case 5 : 
            buffer_add_string(buf, "%Li");
            _fmtty = fmtty[0];
            continue ;
        case 6 : 
            buffer_add_string(buf, "%f");
            _fmtty = fmtty[0];
            continue ;
        case 7 : 
            buffer_add_string(buf, "%B");
            _fmtty = fmtty[0];
            continue ;
        case 8 : 
            buffer_add_string(buf, "%{");
            bprint_fmtty(buf, fmtty[0]);
            buffer_add_string(buf, "%}");
            _fmtty = fmtty[1];
            continue ;
        case 9 : 
            buffer_add_string(buf, "%(");
            bprint_fmtty(buf, fmtty[0]);
            buffer_add_string(buf, "%)");
            _fmtty = fmtty[2];
            continue ;
        case 10 : 
            buffer_add_string(buf, "%a");
            _fmtty = fmtty[0];
            continue ;
        case 11 : 
            buffer_add_string(buf, "%t");
            _fmtty = fmtty[0];
            continue ;
        case 12 : 
            buffer_add_string(buf, "%?");
            _fmtty = fmtty[0];
            continue ;
        case 13 : 
            buffer_add_string(buf, "%r");
            _fmtty = fmtty[0];
            continue ;
        case 14 : 
            buffer_add_string(buf, "%_r");
            _fmtty = fmtty[0];
            continue ;
        
      }
    }
  };
}

function int_of_custom_arity(param) {
  if (param) {
    return 1 + int_of_custom_arity(param[0]) | 0;
  } else {
    return 0;
  }
}

function bprint_fmt(buf, fmt) {
  var _fmt = fmt;
  var _ign_flag = false;
  while(true) {
    var ign_flag = _ign_flag;
    var fmt$1 = _fmt;
    if (typeof fmt$1 === "number") {
      return /* () */0;
    } else {
      switch (fmt$1.tag | 0) {
        case 0 : 
            buffer_add_char(buf, /* "%" */37);
            bprint_ignored_flag(buf, ign_flag);
            buffer_add_char(buf, /* "c" */99);
            _ign_flag = false;
            _fmt = fmt$1[0];
            continue ;
        case 1 : 
            buffer_add_char(buf, /* "%" */37);
            bprint_ignored_flag(buf, ign_flag);
            buffer_add_char(buf, /* "C" */67);
            _ign_flag = false;
            _fmt = fmt$1[0];
            continue ;
        case 2 : 
            buffer_add_char(buf, /* "%" */37);
            bprint_ignored_flag(buf, ign_flag);
            bprint_padding(buf, fmt$1[0]);
            buffer_add_char(buf, /* "s" */115);
            _ign_flag = false;
            _fmt = fmt$1[1];
            continue ;
        case 3 : 
            buffer_add_char(buf, /* "%" */37);
            bprint_ignored_flag(buf, ign_flag);
            bprint_padding(buf, fmt$1[0]);
            buffer_add_char(buf, /* "S" */83);
            _ign_flag = false;
            _fmt = fmt$1[1];
            continue ;
        case 4 : 
            bprint_int_fmt(buf, ign_flag, fmt$1[0], fmt$1[1], fmt$1[2]);
            _ign_flag = false;
            _fmt = fmt$1[3];
            continue ;
        case 5 : 
            bprint_altint_fmt(buf, ign_flag, fmt$1[0], fmt$1[1], fmt$1[2], /* "l" */108);
            _ign_flag = false;
            _fmt = fmt$1[3];
            continue ;
        case 6 : 
            bprint_altint_fmt(buf, ign_flag, fmt$1[0], fmt$1[1], fmt$1[2], /* "n" */110);
            _ign_flag = false;
            _fmt = fmt$1[3];
            continue ;
        case 7 : 
            bprint_altint_fmt(buf, ign_flag, fmt$1[0], fmt$1[1], fmt$1[2], /* "L" */76);
            _ign_flag = false;
            _fmt = fmt$1[3];
            continue ;
        case 8 : 
            bprint_float_fmt(buf, ign_flag, fmt$1[0], fmt$1[1], fmt$1[2]);
            _ign_flag = false;
            _fmt = fmt$1[3];
            continue ;
        case 9 : 
            buffer_add_char(buf, /* "%" */37);
            bprint_ignored_flag(buf, ign_flag);
            buffer_add_char(buf, /* "B" */66);
            _ign_flag = false;
            _fmt = fmt$1[0];
            continue ;
        case 10 : 
            buffer_add_string(buf, "%!");
            _fmt = fmt$1[0];
            continue ;
        case 11 : 
            bprint_string_literal(buf, fmt$1[0]);
            _fmt = fmt$1[1];
            continue ;
        case 12 : 
            bprint_char_literal(buf, fmt$1[0]);
            _fmt = fmt$1[1];
            continue ;
        case 13 : 
            buffer_add_char(buf, /* "%" */37);
            bprint_ignored_flag(buf, ign_flag);
            bprint_pad_opt(buf, fmt$1[0]);
            buffer_add_char(buf, /* "{" */123);
            bprint_fmtty(buf, fmt$1[1]);
            buffer_add_char(buf, /* "%" */37);
            buffer_add_char(buf, /* "}" */125);
            _ign_flag = false;
            _fmt = fmt$1[2];
            continue ;
        case 14 : 
            buffer_add_char(buf, /* "%" */37);
            bprint_ignored_flag(buf, ign_flag);
            bprint_pad_opt(buf, fmt$1[0]);
            buffer_add_char(buf, /* "(" */40);
            bprint_fmtty(buf, fmt$1[1]);
            buffer_add_char(buf, /* "%" */37);
            buffer_add_char(buf, /* ")" */41);
            _ign_flag = false;
            _fmt = fmt$1[2];
            continue ;
        case 15 : 
            buffer_add_char(buf, /* "%" */37);
            bprint_ignored_flag(buf, ign_flag);
            buffer_add_char(buf, /* "a" */97);
            _ign_flag = false;
            _fmt = fmt$1[0];
            continue ;
        case 16 : 
            buffer_add_char(buf, /* "%" */37);
            bprint_ignored_flag(buf, ign_flag);
            buffer_add_char(buf, /* "t" */116);
            _ign_flag = false;
            _fmt = fmt$1[0];
            continue ;
        case 17 : 
            bprint_string_literal(buf, string_of_formatting_lit(fmt$1[0]));
            _fmt = fmt$1[1];
            continue ;
        case 18 : 
            bprint_string_literal(buf, "@{");
            bprint_string_literal(buf, string_of_formatting_gen(fmt$1[0]));
            _fmt = fmt$1[1];
            continue ;
        case 19 : 
            buffer_add_char(buf, /* "%" */37);
            bprint_ignored_flag(buf, ign_flag);
            buffer_add_char(buf, /* "r" */114);
            _ign_flag = false;
            _fmt = fmt$1[0];
            continue ;
        case 20 : 
            buffer_add_char(buf, /* "%" */37);
            bprint_ignored_flag(buf, ign_flag);
            bprint_pad_opt(buf, fmt$1[0]);
            bprint_char_set(buf, fmt$1[1]);
            _ign_flag = false;
            _fmt = fmt$1[2];
            continue ;
        case 21 : 
            buffer_add_char(buf, /* "%" */37);
            bprint_ignored_flag(buf, ign_flag);
            buffer_add_char(buf, char_of_counter(fmt$1[0]));
            _ign_flag = false;
            _fmt = fmt$1[1];
            continue ;
        case 22 : 
            buffer_add_char(buf, /* "%" */37);
            bprint_ignored_flag(buf, ign_flag);
            bprint_string_literal(buf, "0c");
            _ign_flag = false;
            _fmt = fmt$1[0];
            continue ;
        case 23 : 
            var match = param_format_of_ignored_format(fmt$1[0], fmt$1[1]);
            _ign_flag = true;
            _fmt = match[0];
            continue ;
        case 24 : 
            for(var _i = 1 ,_i_finish = int_of_custom_arity(fmt$1[0]); _i <= _i_finish; ++_i){
              buffer_add_char(buf, /* "%" */37);
              bprint_ignored_flag(buf, ign_flag);
              buffer_add_char(buf, /* "?" */63);
            }
            _ign_flag = false;
            _fmt = fmt$1[2];
            continue ;
        
      }
    }
  };
}

function string_of_fmt(fmt) {
  var buf = /* record */[
    /* ind */0,
    /* bytes */Caml_bytes.caml_create_bytes(16)
  ];
  bprint_fmt(buf, fmt);
  return buffer_contents(buf);
}

function symm(param) {
  if (typeof param === "number") {
    return /* End_of_fmtty */0;
  } else {
    switch (param.tag | 0) {
      case 0 : 
          return /* Char_ty */Block.__(0, [symm(param[0])]);
      case 1 : 
          return /* String_ty */Block.__(1, [symm(param[0])]);
      case 2 : 
          return /* Int_ty */Block.__(2, [symm(param[0])]);
      case 3 : 
          return /* Int32_ty */Block.__(3, [symm(param[0])]);
      case 4 : 
          return /* Nativeint_ty */Block.__(4, [symm(param[0])]);
      case 5 : 
          return /* Int64_ty */Block.__(5, [symm(param[0])]);
      case 6 : 
          return /* Float_ty */Block.__(6, [symm(param[0])]);
      case 7 : 
          return /* Bool_ty */Block.__(7, [symm(param[0])]);
      case 8 : 
          return /* Format_arg_ty */Block.__(8, [
                    param[0],
                    symm(param[1])
                  ]);
      case 9 : 
          return /* Format_subst_ty */Block.__(9, [
                    param[1],
                    param[0],
                    symm(param[2])
                  ]);
      case 10 : 
          return /* Alpha_ty */Block.__(10, [symm(param[0])]);
      case 11 : 
          return /* Theta_ty */Block.__(11, [symm(param[0])]);
      case 12 : 
          return /* Any_ty */Block.__(12, [symm(param[0])]);
      case 13 : 
          return /* Reader_ty */Block.__(13, [symm(param[0])]);
      case 14 : 
          return /* Ignored_reader_ty */Block.__(14, [symm(param[0])]);
      
    }
  }
}

function fmtty_rel_det(param) {
  if (typeof param === "number") {
    return /* tuple */[
            (function (param) {
                return /* Refl */0;
              }),
            (function (param) {
                return /* Refl */0;
              }),
            (function (param) {
                return /* Refl */0;
              }),
            (function (param) {
                return /* Refl */0;
              })
          ];
  } else {
    switch (param.tag | 0) {
      case 0 : 
          var match = fmtty_rel_det(param[0]);
          var af = match[1];
          var fa = match[0];
          return /* tuple */[
                  (function (param) {
                      Curry._1(fa, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      Curry._1(af, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match[2],
                  match[3]
                ];
      case 1 : 
          var match$1 = fmtty_rel_det(param[0]);
          var af$1 = match$1[1];
          var fa$1 = match$1[0];
          return /* tuple */[
                  (function (param) {
                      Curry._1(fa$1, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      Curry._1(af$1, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$1[2],
                  match$1[3]
                ];
      case 2 : 
          var match$2 = fmtty_rel_det(param[0]);
          var af$2 = match$2[1];
          var fa$2 = match$2[0];
          return /* tuple */[
                  (function (param) {
                      Curry._1(fa$2, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      Curry._1(af$2, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$2[2],
                  match$2[3]
                ];
      case 3 : 
          var match$3 = fmtty_rel_det(param[0]);
          var af$3 = match$3[1];
          var fa$3 = match$3[0];
          return /* tuple */[
                  (function (param) {
                      Curry._1(fa$3, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      Curry._1(af$3, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$3[2],
                  match$3[3]
                ];
      case 4 : 
          var match$4 = fmtty_rel_det(param[0]);
          var af$4 = match$4[1];
          var fa$4 = match$4[0];
          return /* tuple */[
                  (function (param) {
                      Curry._1(fa$4, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      Curry._1(af$4, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$4[2],
                  match$4[3]
                ];
      case 5 : 
          var match$5 = fmtty_rel_det(param[0]);
          var af$5 = match$5[1];
          var fa$5 = match$5[0];
          return /* tuple */[
                  (function (param) {
                      Curry._1(fa$5, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      Curry._1(af$5, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$5[2],
                  match$5[3]
                ];
      case 6 : 
          var match$6 = fmtty_rel_det(param[0]);
          var af$6 = match$6[1];
          var fa$6 = match$6[0];
          return /* tuple */[
                  (function (param) {
                      Curry._1(fa$6, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      Curry._1(af$6, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$6[2],
                  match$6[3]
                ];
      case 7 : 
          var match$7 = fmtty_rel_det(param[0]);
          var af$7 = match$7[1];
          var fa$7 = match$7[0];
          return /* tuple */[
                  (function (param) {
                      Curry._1(fa$7, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      Curry._1(af$7, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$7[2],
                  match$7[3]
                ];
      case 8 : 
          var match$8 = fmtty_rel_det(param[1]);
          var af$8 = match$8[1];
          var fa$8 = match$8[0];
          return /* tuple */[
                  (function (param) {
                      Curry._1(fa$8, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      Curry._1(af$8, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$8[2],
                  match$8[3]
                ];
      case 9 : 
          var match$9 = fmtty_rel_det(param[2]);
          var de = match$9[3];
          var ed = match$9[2];
          var af$9 = match$9[1];
          var fa$9 = match$9[0];
          var ty = trans(symm(param[0]), param[1]);
          var match$10 = fmtty_rel_det(ty);
          var jd = match$10[3];
          var dj = match$10[2];
          var ga = match$10[1];
          var ag = match$10[0];
          return /* tuple */[
                  (function (param) {
                      Curry._1(fa$9, /* Refl */0);
                      Curry._1(ag, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      Curry._1(ga, /* Refl */0);
                      Curry._1(af$9, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      Curry._1(ed, /* Refl */0);
                      Curry._1(dj, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      Curry._1(jd, /* Refl */0);
                      Curry._1(de, /* Refl */0);
                      return /* Refl */0;
                    })
                ];
      case 10 : 
          var match$11 = fmtty_rel_det(param[0]);
          var af$10 = match$11[1];
          var fa$10 = match$11[0];
          return /* tuple */[
                  (function (param) {
                      Curry._1(fa$10, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      Curry._1(af$10, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$11[2],
                  match$11[3]
                ];
      case 11 : 
          var match$12 = fmtty_rel_det(param[0]);
          var af$11 = match$12[1];
          var fa$11 = match$12[0];
          return /* tuple */[
                  (function (param) {
                      Curry._1(fa$11, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      Curry._1(af$11, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$12[2],
                  match$12[3]
                ];
      case 12 : 
          var match$13 = fmtty_rel_det(param[0]);
          var af$12 = match$13[1];
          var fa$12 = match$13[0];
          return /* tuple */[
                  (function (param) {
                      Curry._1(fa$12, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      Curry._1(af$12, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$13[2],
                  match$13[3]
                ];
      case 13 : 
          var match$14 = fmtty_rel_det(param[0]);
          var de$1 = match$14[3];
          var ed$1 = match$14[2];
          var af$13 = match$14[1];
          var fa$13 = match$14[0];
          return /* tuple */[
                  (function (param) {
                      Curry._1(fa$13, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      Curry._1(af$13, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      Curry._1(ed$1, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      Curry._1(de$1, /* Refl */0);
                      return /* Refl */0;
                    })
                ];
      case 14 : 
          var match$15 = fmtty_rel_det(param[0]);
          var de$2 = match$15[3];
          var ed$2 = match$15[2];
          var af$14 = match$15[1];
          var fa$14 = match$15[0];
          return /* tuple */[
                  (function (param) {
                      Curry._1(fa$14, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      Curry._1(af$14, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      Curry._1(ed$2, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function (param) {
                      Curry._1(de$2, /* Refl */0);
                      return /* Refl */0;
                    })
                ];
      
    }
  }
}

function trans(ty1, ty2) {
  var exit = 0;
  if (typeof ty1 === "number") {
    if (typeof ty2 === "number") {
      return /* End_of_fmtty */0;
    } else {
      switch (ty2.tag | 0) {
        case 8 : 
            exit = 6;
            break;
        case 9 : 
            exit = 7;
            break;
        case 10 : 
            exit = 1;
            break;
        case 11 : 
            exit = 2;
            break;
        case 12 : 
            exit = 3;
            break;
        case 13 : 
            exit = 4;
            break;
        case 14 : 
            exit = 5;
            break;
        default:
          throw [
                Caml_builtin_exceptions.assert_failure,
                /* tuple */[
                  "camlinternalFormat.ml",
                  816,
                  23
                ]
              ];
      }
    }
  } else {
    switch (ty1.tag | 0) {
      case 0 : 
          if (typeof ty2 === "number") {
            exit = 8;
          } else {
            switch (ty2.tag | 0) {
              case 0 : 
                  return /* Char_ty */Block.__(0, [trans(ty1[0], ty2[0])]);
              case 8 : 
                  exit = 6;
                  break;
              case 9 : 
                  exit = 7;
                  break;
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  exit = 2;
                  break;
              case 12 : 
                  exit = 3;
                  break;
              case 13 : 
                  exit = 4;
                  break;
              case 14 : 
                  exit = 5;
                  break;
              
            }
          }
          break;
      case 1 : 
          if (typeof ty2 === "number") {
            exit = 8;
          } else {
            switch (ty2.tag | 0) {
              case 1 : 
                  return /* String_ty */Block.__(1, [trans(ty1[0], ty2[0])]);
              case 8 : 
                  exit = 6;
                  break;
              case 9 : 
                  exit = 7;
                  break;
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  exit = 2;
                  break;
              case 12 : 
                  exit = 3;
                  break;
              case 13 : 
                  exit = 4;
                  break;
              case 14 : 
                  exit = 5;
                  break;
              
            }
          }
          break;
      case 2 : 
          if (typeof ty2 === "number") {
            exit = 8;
          } else {
            switch (ty2.tag | 0) {
              case 2 : 
                  return /* Int_ty */Block.__(2, [trans(ty1[0], ty2[0])]);
              case 8 : 
                  exit = 6;
                  break;
              case 9 : 
                  exit = 7;
                  break;
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  exit = 2;
                  break;
              case 12 : 
                  exit = 3;
                  break;
              case 13 : 
                  exit = 4;
                  break;
              case 14 : 
                  exit = 5;
                  break;
              
            }
          }
          break;
      case 3 : 
          if (typeof ty2 === "number") {
            exit = 8;
          } else {
            switch (ty2.tag | 0) {
              case 3 : 
                  return /* Int32_ty */Block.__(3, [trans(ty1[0], ty2[0])]);
              case 8 : 
                  exit = 6;
                  break;
              case 9 : 
                  exit = 7;
                  break;
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  exit = 2;
                  break;
              case 12 : 
                  exit = 3;
                  break;
              case 13 : 
                  exit = 4;
                  break;
              case 14 : 
                  exit = 5;
                  break;
              
            }
          }
          break;
      case 4 : 
          if (typeof ty2 === "number") {
            exit = 8;
          } else {
            switch (ty2.tag | 0) {
              case 4 : 
                  return /* Nativeint_ty */Block.__(4, [trans(ty1[0], ty2[0])]);
              case 8 : 
                  exit = 6;
                  break;
              case 9 : 
                  exit = 7;
                  break;
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  exit = 2;
                  break;
              case 12 : 
                  exit = 3;
                  break;
              case 13 : 
                  exit = 4;
                  break;
              case 14 : 
                  exit = 5;
                  break;
              
            }
          }
          break;
      case 5 : 
          if (typeof ty2 === "number") {
            exit = 8;
          } else {
            switch (ty2.tag | 0) {
              case 5 : 
                  return /* Int64_ty */Block.__(5, [trans(ty1[0], ty2[0])]);
              case 8 : 
                  exit = 6;
                  break;
              case 9 : 
                  exit = 7;
                  break;
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  exit = 2;
                  break;
              case 12 : 
                  exit = 3;
                  break;
              case 13 : 
                  exit = 4;
                  break;
              case 14 : 
                  exit = 5;
                  break;
              
            }
          }
          break;
      case 6 : 
          if (typeof ty2 === "number") {
            exit = 8;
          } else {
            switch (ty2.tag | 0) {
              case 6 : 
                  return /* Float_ty */Block.__(6, [trans(ty1[0], ty2[0])]);
              case 8 : 
                  exit = 6;
                  break;
              case 9 : 
                  exit = 7;
                  break;
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  exit = 2;
                  break;
              case 12 : 
                  exit = 3;
                  break;
              case 13 : 
                  exit = 4;
                  break;
              case 14 : 
                  exit = 5;
                  break;
              
            }
          }
          break;
      case 7 : 
          if (typeof ty2 === "number") {
            exit = 8;
          } else {
            switch (ty2.tag | 0) {
              case 7 : 
                  return /* Bool_ty */Block.__(7, [trans(ty1[0], ty2[0])]);
              case 8 : 
                  exit = 6;
                  break;
              case 9 : 
                  exit = 7;
                  break;
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  exit = 2;
                  break;
              case 12 : 
                  exit = 3;
                  break;
              case 13 : 
                  exit = 4;
                  break;
              case 14 : 
                  exit = 5;
                  break;
              
            }
          }
          break;
      case 8 : 
          if (typeof ty2 === "number") {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  /* tuple */[
                    "camlinternalFormat.ml",
                    802,
                    26
                  ]
                ];
          } else {
            switch (ty2.tag | 0) {
              case 8 : 
                  return /* Format_arg_ty */Block.__(8, [
                            trans(ty1[0], ty2[0]),
                            trans(ty1[1], ty2[1])
                          ]);
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  exit = 2;
                  break;
              case 12 : 
                  exit = 3;
                  break;
              case 13 : 
                  exit = 4;
                  break;
              case 14 : 
                  exit = 5;
                  break;
              default:
                throw [
                      Caml_builtin_exceptions.assert_failure,
                      /* tuple */[
                        "camlinternalFormat.ml",
                        802,
                        26
                      ]
                    ];
            }
          }
          break;
      case 9 : 
          if (typeof ty2 === "number") {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  /* tuple */[
                    "camlinternalFormat.ml",
                    812,
                    28
                  ]
                ];
          } else {
            switch (ty2.tag | 0) {
              case 8 : 
                  exit = 6;
                  break;
              case 9 : 
                  var ty = trans(symm(ty1[1]), ty2[0]);
                  var match = fmtty_rel_det(ty);
                  Curry._1(match[1], /* Refl */0);
                  Curry._1(match[3], /* Refl */0);
                  return /* Format_subst_ty */Block.__(9, [
                            ty1[0],
                            ty2[1],
                            trans(ty1[2], ty2[2])
                          ]);
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  exit = 2;
                  break;
              case 12 : 
                  exit = 3;
                  break;
              case 13 : 
                  exit = 4;
                  break;
              case 14 : 
                  exit = 5;
                  break;
              default:
                throw [
                      Caml_builtin_exceptions.assert_failure,
                      /* tuple */[
                        "camlinternalFormat.ml",
                        812,
                        28
                      ]
                    ];
            }
          }
          break;
      case 10 : 
          if (typeof ty2 === "number") {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  /* tuple */[
                    "camlinternalFormat.ml",
                    780,
                    21
                  ]
                ];
          } else if (ty2.tag === 10) {
            return /* Alpha_ty */Block.__(10, [trans(ty1[0], ty2[0])]);
          } else {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  /* tuple */[
                    "camlinternalFormat.ml",
                    780,
                    21
                  ]
                ];
          }
      case 11 : 
          if (typeof ty2 === "number") {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  /* tuple */[
                    "camlinternalFormat.ml",
                    784,
                    21
                  ]
                ];
          } else {
            switch (ty2.tag | 0) {
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  return /* Theta_ty */Block.__(11, [trans(ty1[0], ty2[0])]);
              default:
                throw [
                      Caml_builtin_exceptions.assert_failure,
                      /* tuple */[
                        "camlinternalFormat.ml",
                        784,
                        21
                      ]
                    ];
            }
          }
          break;
      case 12 : 
          if (typeof ty2 === "number") {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  /* tuple */[
                    "camlinternalFormat.ml",
                    788,
                    19
                  ]
                ];
          } else {
            switch (ty2.tag | 0) {
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  exit = 2;
                  break;
              case 12 : 
                  return /* Any_ty */Block.__(12, [trans(ty1[0], ty2[0])]);
              default:
                throw [
                      Caml_builtin_exceptions.assert_failure,
                      /* tuple */[
                        "camlinternalFormat.ml",
                        788,
                        19
                      ]
                    ];
            }
          }
          break;
      case 13 : 
          if (typeof ty2 === "number") {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  /* tuple */[
                    "camlinternalFormat.ml",
                    792,
                    22
                  ]
                ];
          } else {
            switch (ty2.tag | 0) {
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  exit = 2;
                  break;
              case 12 : 
                  exit = 3;
                  break;
              case 13 : 
                  return /* Reader_ty */Block.__(13, [trans(ty1[0], ty2[0])]);
              default:
                throw [
                      Caml_builtin_exceptions.assert_failure,
                      /* tuple */[
                        "camlinternalFormat.ml",
                        792,
                        22
                      ]
                    ];
            }
          }
          break;
      case 14 : 
          if (typeof ty2 === "number") {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  /* tuple */[
                    "camlinternalFormat.ml",
                    797,
                    30
                  ]
                ];
          } else {
            switch (ty2.tag | 0) {
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  exit = 2;
                  break;
              case 12 : 
                  exit = 3;
                  break;
              case 13 : 
                  exit = 4;
                  break;
              case 14 : 
                  return /* Ignored_reader_ty */Block.__(14, [trans(ty1[0], ty2[0])]);
              default:
                throw [
                      Caml_builtin_exceptions.assert_failure,
                      /* tuple */[
                        "camlinternalFormat.ml",
                        797,
                        30
                      ]
                    ];
            }
          }
          break;
      
    }
  }
  switch (exit) {
    case 1 : 
        throw [
              Caml_builtin_exceptions.assert_failure,
              /* tuple */[
                "camlinternalFormat.ml",
                781,
                21
              ]
            ];
    case 2 : 
        throw [
              Caml_builtin_exceptions.assert_failure,
              /* tuple */[
                "camlinternalFormat.ml",
                785,
                21
              ]
            ];
    case 3 : 
        throw [
              Caml_builtin_exceptions.assert_failure,
              /* tuple */[
                "camlinternalFormat.ml",
                789,
                19
              ]
            ];
    case 4 : 
        throw [
              Caml_builtin_exceptions.assert_failure,
              /* tuple */[
                "camlinternalFormat.ml",
                793,
                22
              ]
            ];
    case 5 : 
        throw [
              Caml_builtin_exceptions.assert_failure,
              /* tuple */[
                "camlinternalFormat.ml",
                798,
                30
              ]
            ];
    case 6 : 
        throw [
              Caml_builtin_exceptions.assert_failure,
              /* tuple */[
                "camlinternalFormat.ml",
                803,
                26
              ]
            ];
    case 7 : 
        throw [
              Caml_builtin_exceptions.assert_failure,
              /* tuple */[
                "camlinternalFormat.ml",
                813,
                28
              ]
            ];
    case 8 : 
        throw [
              Caml_builtin_exceptions.assert_failure,
              /* tuple */[
                "camlinternalFormat.ml",
                817,
                23
              ]
            ];
    
  }
}

function fmtty_of_formatting_gen(formatting_gen) {
  return fmtty_of_fmt(formatting_gen[0][0]);
}

function fmtty_of_fmt(_fmtty) {
  while(true) {
    var fmtty = _fmtty;
    var exit = 0;
    if (typeof fmtty === "number") {
      return /* End_of_fmtty */0;
    } else {
      switch (fmtty.tag | 0) {
        case 2 : 
        case 3 : 
            exit = 1;
            break;
        case 4 : 
            var ty_rest = fmtty_of_fmt(fmtty[3]);
            var prec_ty = fmtty_of_precision_fmtty(fmtty[2], /* Int_ty */Block.__(2, [ty_rest]));
            return fmtty_of_padding_fmtty(fmtty[1], prec_ty);
        case 5 : 
            var ty_rest$1 = fmtty_of_fmt(fmtty[3]);
            var prec_ty$1 = fmtty_of_precision_fmtty(fmtty[2], /* Int32_ty */Block.__(3, [ty_rest$1]));
            return fmtty_of_padding_fmtty(fmtty[1], prec_ty$1);
        case 6 : 
            var ty_rest$2 = fmtty_of_fmt(fmtty[3]);
            var prec_ty$2 = fmtty_of_precision_fmtty(fmtty[2], /* Nativeint_ty */Block.__(4, [ty_rest$2]));
            return fmtty_of_padding_fmtty(fmtty[1], prec_ty$2);
        case 7 : 
            var ty_rest$3 = fmtty_of_fmt(fmtty[3]);
            var prec_ty$3 = fmtty_of_precision_fmtty(fmtty[2], /* Int64_ty */Block.__(5, [ty_rest$3]));
            return fmtty_of_padding_fmtty(fmtty[1], prec_ty$3);
        case 8 : 
            var ty_rest$4 = fmtty_of_fmt(fmtty[3]);
            var prec_ty$4 = fmtty_of_precision_fmtty(fmtty[2], /* Float_ty */Block.__(6, [ty_rest$4]));
            return fmtty_of_padding_fmtty(fmtty[1], prec_ty$4);
        case 9 : 
            return /* Bool_ty */Block.__(7, [fmtty_of_fmt(fmtty[0])]);
        case 10 : 
            _fmtty = fmtty[0];
            continue ;
        case 13 : 
            return /* Format_arg_ty */Block.__(8, [
                      fmtty[1],
                      fmtty_of_fmt(fmtty[2])
                    ]);
        case 14 : 
            var ty = fmtty[1];
            return /* Format_subst_ty */Block.__(9, [
                      ty,
                      ty,
                      fmtty_of_fmt(fmtty[2])
                    ]);
        case 15 : 
            return /* Alpha_ty */Block.__(10, [fmtty_of_fmt(fmtty[0])]);
        case 16 : 
            return /* Theta_ty */Block.__(11, [fmtty_of_fmt(fmtty[0])]);
        case 18 : 
            return CamlinternalFormatBasics.concat_fmtty(fmtty_of_formatting_gen(fmtty[0]), fmtty_of_fmt(fmtty[1]));
        case 19 : 
            return /* Reader_ty */Block.__(13, [fmtty_of_fmt(fmtty[0])]);
        case 20 : 
            return /* String_ty */Block.__(1, [fmtty_of_fmt(fmtty[2])]);
        case 21 : 
            return /* Int_ty */Block.__(2, [fmtty_of_fmt(fmtty[1])]);
        case 0 : 
        case 1 : 
        case 22 : 
            return /* Char_ty */Block.__(0, [fmtty_of_fmt(fmtty[0])]);
        case 23 : 
            var ign = fmtty[0];
            var fmt = fmtty[1];
            if (typeof ign === "number") {
              if (ign === 3) {
                return /* Ignored_reader_ty */Block.__(14, [fmtty_of_fmt(fmt)]);
              } else {
                return fmtty_of_fmt(fmt);
              }
            } else if (ign.tag === 8) {
              return CamlinternalFormatBasics.concat_fmtty(ign[1], fmtty_of_fmt(fmt));
            } else {
              return fmtty_of_fmt(fmt);
            }
        case 24 : 
            return fmtty_of_custom(fmtty[0], fmtty_of_fmt(fmtty[2]));
        default:
          _fmtty = fmtty[1];
          continue ;
      }
    }
    if (exit === 1) {
      return fmtty_of_padding_fmtty(fmtty[0], /* String_ty */Block.__(1, [fmtty_of_fmt(fmtty[1])]));
    }
    
  };
}

function fmtty_of_custom(arity, fmtty) {
  if (arity) {
    return /* Any_ty */Block.__(12, [fmtty_of_custom(arity[0], fmtty)]);
  } else {
    return fmtty;
  }
}

function fmtty_of_padding_fmtty(pad, fmtty) {
  if (typeof pad === "number" || !pad.tag) {
    return fmtty;
  } else {
    return /* Int_ty */Block.__(2, [fmtty]);
  }
}

function fmtty_of_precision_fmtty(prec, fmtty) {
  if (typeof prec === "number" && prec !== 0) {
    return /* Int_ty */Block.__(2, [fmtty]);
  } else {
    return fmtty;
  }
}

var Type_mismatch = Caml_exceptions.create("CamlinternalFormat.Type_mismatch");

function type_padding(pad, fmtty) {
  if (typeof pad === "number") {
    return /* Padding_fmtty_EBB */[
            /* No_padding */0,
            fmtty
          ];
  } else if (pad.tag) {
    if (typeof fmtty === "number") {
      throw Type_mismatch;
    } else if (fmtty.tag === 2) {
      return /* Padding_fmtty_EBB */[
              /* Arg_padding */Block.__(1, [pad[0]]),
              fmtty[0]
            ];
    } else {
      throw Type_mismatch;
    }
  } else {
    return /* Padding_fmtty_EBB */[
            /* Lit_padding */Block.__(0, [
                pad[0],
                pad[1]
              ]),
            fmtty
          ];
  }
}

function type_padprec(pad, prec, fmtty) {
  var match = type_padding(pad, fmtty);
  if (typeof prec === "number") {
    if (prec !== 0) {
      var match$1 = match[1];
      if (typeof match$1 === "number") {
        throw Type_mismatch;
      } else if (match$1.tag === 2) {
        return /* Padprec_fmtty_EBB */[
                match[0],
                /* Arg_precision */1,
                match$1[0]
              ];
      } else {
        throw Type_mismatch;
      }
    } else {
      return /* Padprec_fmtty_EBB */[
              match[0],
              /* No_precision */0,
              match[1]
            ];
    }
  } else {
    return /* Padprec_fmtty_EBB */[
            match[0],
            /* Lit_precision */[prec[0]],
            match[1]
          ];
  }
}

function type_ignored_param_one(ign, fmt, fmtty) {
  var match = type_format_gen(fmt, fmtty);
  return /* Fmt_fmtty_EBB */[
          /* Ignored_param */Block.__(23, [
              ign,
              match[0]
            ]),
          match[1]
        ];
}

function type_format_gen(fmt, fmtty) {
  if (typeof fmt === "number") {
    return /* Fmt_fmtty_EBB */[
            /* End_of_format */0,
            fmtty
          ];
  } else {
    switch (fmt.tag | 0) {
      case 0 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag) {
            throw Type_mismatch;
          } else {
            var match = type_format_gen(fmt[0], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Char */Block.__(0, [match[0]]),
                    match[1]
                  ];
          }
      case 1 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag) {
            throw Type_mismatch;
          } else {
            var match$1 = type_format_gen(fmt[0], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Caml_char */Block.__(1, [match$1[0]]),
                    match$1[1]
                  ];
          }
      case 2 : 
          var match$2 = type_padding(fmt[0], fmtty);
          var match$3 = match$2[1];
          if (typeof match$3 === "number") {
            throw Type_mismatch;
          } else if (match$3.tag === 1) {
            var match$4 = type_format_gen(fmt[1], match$3[0]);
            return /* Fmt_fmtty_EBB */[
                    /* String */Block.__(2, [
                        match$2[0],
                        match$4[0]
                      ]),
                    match$4[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 3 : 
          var match$5 = type_padding(fmt[0], fmtty);
          var match$6 = match$5[1];
          if (typeof match$6 === "number") {
            throw Type_mismatch;
          } else if (match$6.tag === 1) {
            var match$7 = type_format_gen(fmt[1], match$6[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Caml_string */Block.__(3, [
                        match$5[0],
                        match$7[0]
                      ]),
                    match$7[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 4 : 
          var match$8 = type_padprec(fmt[1], fmt[2], fmtty);
          var match$9 = match$8[2];
          if (typeof match$9 === "number") {
            throw Type_mismatch;
          } else if (match$9.tag === 2) {
            var match$10 = type_format_gen(fmt[3], match$9[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Int */Block.__(4, [
                        fmt[0],
                        match$8[0],
                        match$8[1],
                        match$10[0]
                      ]),
                    match$10[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 5 : 
          var match$11 = type_padprec(fmt[1], fmt[2], fmtty);
          var match$12 = match$11[2];
          if (typeof match$12 === "number") {
            throw Type_mismatch;
          } else if (match$12.tag === 3) {
            var match$13 = type_format_gen(fmt[3], match$12[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Int32 */Block.__(5, [
                        fmt[0],
                        match$11[0],
                        match$11[1],
                        match$13[0]
                      ]),
                    match$13[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 6 : 
          var match$14 = type_padprec(fmt[1], fmt[2], fmtty);
          var match$15 = match$14[2];
          if (typeof match$15 === "number") {
            throw Type_mismatch;
          } else if (match$15.tag === 4) {
            var match$16 = type_format_gen(fmt[3], match$15[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Nativeint */Block.__(6, [
                        fmt[0],
                        match$14[0],
                        match$14[1],
                        match$16[0]
                      ]),
                    match$16[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 7 : 
          var match$17 = type_padprec(fmt[1], fmt[2], fmtty);
          var match$18 = match$17[2];
          if (typeof match$18 === "number") {
            throw Type_mismatch;
          } else if (match$18.tag === 5) {
            var match$19 = type_format_gen(fmt[3], match$18[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Int64 */Block.__(7, [
                        fmt[0],
                        match$17[0],
                        match$17[1],
                        match$19[0]
                      ]),
                    match$19[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 8 : 
          var match$20 = type_padprec(fmt[1], fmt[2], fmtty);
          var match$21 = match$20[2];
          if (typeof match$21 === "number") {
            throw Type_mismatch;
          } else if (match$21.tag === 6) {
            var match$22 = type_format_gen(fmt[3], match$21[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Float */Block.__(8, [
                        fmt[0],
                        match$20[0],
                        match$20[1],
                        match$22[0]
                      ]),
                    match$22[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 9 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 7) {
            var match$23 = type_format_gen(fmt[0], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Bool */Block.__(9, [match$23[0]]),
                    match$23[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 10 : 
          var match$24 = type_format_gen(fmt[0], fmtty);
          return /* Fmt_fmtty_EBB */[
                  /* Flush */Block.__(10, [match$24[0]]),
                  match$24[1]
                ];
      case 11 : 
          var match$25 = type_format_gen(fmt[1], fmtty);
          return /* Fmt_fmtty_EBB */[
                  /* String_literal */Block.__(11, [
                      fmt[0],
                      match$25[0]
                    ]),
                  match$25[1]
                ];
      case 12 : 
          var match$26 = type_format_gen(fmt[1], fmtty);
          return /* Fmt_fmtty_EBB */[
                  /* Char_literal */Block.__(12, [
                      fmt[0],
                      match$26[0]
                    ]),
                  match$26[1]
                ];
      case 13 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 8) {
            var sub_fmtty$prime = fmtty[0];
            if (Caml_obj.caml_notequal(/* Fmtty_EBB */[fmt[1]], /* Fmtty_EBB */[sub_fmtty$prime])) {
              throw Type_mismatch;
            }
            var match$27 = type_format_gen(fmt[2], fmtty[1]);
            return /* Fmt_fmtty_EBB */[
                    /* Format_arg */Block.__(13, [
                        fmt[0],
                        sub_fmtty$prime,
                        match$27[0]
                      ]),
                    match$27[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 14 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 9) {
            var sub_fmtty1 = fmtty[0];
            if (Caml_obj.caml_notequal(/* Fmtty_EBB */[CamlinternalFormatBasics.erase_rel(fmt[1])], /* Fmtty_EBB */[CamlinternalFormatBasics.erase_rel(sub_fmtty1)])) {
              throw Type_mismatch;
            }
            var match$28 = type_format_gen(fmt[2], CamlinternalFormatBasics.erase_rel(fmtty[2]));
            return /* Fmt_fmtty_EBB */[
                    /* Format_subst */Block.__(14, [
                        fmt[0],
                        sub_fmtty1,
                        match$28[0]
                      ]),
                    match$28[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 15 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 10) {
            var match$29 = type_format_gen(fmt[0], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Alpha */Block.__(15, [match$29[0]]),
                    match$29[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 16 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 11) {
            var match$30 = type_format_gen(fmt[0], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Theta */Block.__(16, [match$30[0]]),
                    match$30[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 17 : 
          var match$31 = type_format_gen(fmt[1], fmtty);
          return /* Fmt_fmtty_EBB */[
                  /* Formatting_lit */Block.__(17, [
                      fmt[0],
                      match$31[0]
                    ]),
                  match$31[1]
                ];
      case 18 : 
          var formatting_gen = fmt[0];
          var fmt0 = fmt[1];
          var fmtty0 = fmtty;
          if (formatting_gen.tag) {
            var match$32 = formatting_gen[0];
            var match$33 = type_format_gen(match$32[0], fmtty0);
            var match$34 = type_format_gen(fmt0, match$33[1]);
            return /* Fmt_fmtty_EBB */[
                    /* Formatting_gen */Block.__(18, [
                        /* Open_box */Block.__(1, [/* Format */[
                              match$33[0],
                              match$32[1]
                            ]]),
                        match$34[0]
                      ]),
                    match$34[1]
                  ];
          } else {
            var match$35 = formatting_gen[0];
            var match$36 = type_format_gen(match$35[0], fmtty0);
            var match$37 = type_format_gen(fmt0, match$36[1]);
            return /* Fmt_fmtty_EBB */[
                    /* Formatting_gen */Block.__(18, [
                        /* Open_tag */Block.__(0, [/* Format */[
                              match$36[0],
                              match$35[1]
                            ]]),
                        match$37[0]
                      ]),
                    match$37[1]
                  ];
          }
      case 19 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 13) {
            var match$38 = type_format_gen(fmt[0], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Reader */Block.__(19, [match$38[0]]),
                    match$38[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 20 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 1) {
            var match$39 = type_format_gen(fmt[2], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Scan_char_set */Block.__(20, [
                        fmt[0],
                        fmt[1],
                        match$39[0]
                      ]),
                    match$39[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 21 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 2) {
            var match$40 = type_format_gen(fmt[1], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Scan_get_counter */Block.__(21, [
                        fmt[0],
                        match$40[0]
                      ]),
                    match$40[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 23 : 
          var ign = fmt[0];
          var fmt$1 = fmt[1];
          var fmtty$1 = fmtty;
          if (typeof ign === "number") {
            if (ign === 3) {
              if (typeof fmtty$1 === "number") {
                throw Type_mismatch;
              } else if (fmtty$1.tag === 14) {
                var match$41 = type_format_gen(fmt$1, fmtty$1[0]);
                return /* Fmt_fmtty_EBB */[
                        /* Ignored_param */Block.__(23, [
                            /* Ignored_reader */3,
                            match$41[0]
                          ]),
                        match$41[1]
                      ];
              } else {
                throw Type_mismatch;
              }
            } else {
              return type_ignored_param_one(ign, fmt$1, fmtty$1);
            }
          } else {
            switch (ign.tag | 0) {
              case 7 : 
                  return type_ignored_param_one(/* Ignored_format_arg */Block.__(7, [
                                ign[0],
                                ign[1]
                              ]), fmt$1, fmtty$1);
              case 8 : 
                  var match$42 = type_ignored_format_substitution(ign[1], fmt$1, fmtty$1);
                  var match$43 = match$42[1];
                  return /* Fmt_fmtty_EBB */[
                          /* Ignored_param */Block.__(23, [
                              /* Ignored_format_subst */Block.__(8, [
                                  ign[0],
                                  match$42[0]
                                ]),
                              match$43[0]
                            ]),
                          match$43[1]
                        ];
              default:
                return type_ignored_param_one(ign, fmt$1, fmtty$1);
            }
          }
      case 22 : 
      case 24 : 
          throw Type_mismatch;
      
    }
  }
}

function type_ignored_format_substitution(sub_fmtty, fmt, fmtty) {
  if (typeof sub_fmtty === "number") {
    return /* Fmtty_fmt_EBB */[
            /* End_of_fmtty */0,
            type_format_gen(fmt, fmtty)
          ];
  } else {
    switch (sub_fmtty.tag | 0) {
      case 0 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag) {
            throw Type_mismatch;
          } else {
            var match = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Char_ty */Block.__(0, [match[0]]),
                    match[1]
                  ];
          }
      case 1 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 1) {
            var match$1 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* String_ty */Block.__(1, [match$1[0]]),
                    match$1[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 2 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 2) {
            var match$2 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Int_ty */Block.__(2, [match$2[0]]),
                    match$2[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 3 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 3) {
            var match$3 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Int32_ty */Block.__(3, [match$3[0]]),
                    match$3[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 4 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 4) {
            var match$4 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Nativeint_ty */Block.__(4, [match$4[0]]),
                    match$4[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 5 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 5) {
            var match$5 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Int64_ty */Block.__(5, [match$5[0]]),
                    match$5[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 6 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 6) {
            var match$6 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Float_ty */Block.__(6, [match$6[0]]),
                    match$6[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 7 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 7) {
            var match$7 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Bool_ty */Block.__(7, [match$7[0]]),
                    match$7[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 8 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 8) {
            var sub2_fmtty$prime = fmtty[0];
            if (Caml_obj.caml_notequal(/* Fmtty_EBB */[sub_fmtty[0]], /* Fmtty_EBB */[sub2_fmtty$prime])) {
              throw Type_mismatch;
            }
            var match$8 = type_ignored_format_substitution(sub_fmtty[1], fmt, fmtty[1]);
            return /* Fmtty_fmt_EBB */[
                    /* Format_arg_ty */Block.__(8, [
                        sub2_fmtty$prime,
                        match$8[0]
                      ]),
                    match$8[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 9 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 9) {
            var sub2_fmtty$prime$1 = fmtty[1];
            var sub1_fmtty$prime = fmtty[0];
            if (Caml_obj.caml_notequal(/* Fmtty_EBB */[CamlinternalFormatBasics.erase_rel(sub_fmtty[0])], /* Fmtty_EBB */[CamlinternalFormatBasics.erase_rel(sub1_fmtty$prime)])) {
              throw Type_mismatch;
            }
            if (Caml_obj.caml_notequal(/* Fmtty_EBB */[CamlinternalFormatBasics.erase_rel(sub_fmtty[1])], /* Fmtty_EBB */[CamlinternalFormatBasics.erase_rel(sub2_fmtty$prime$1)])) {
              throw Type_mismatch;
            }
            var sub_fmtty$prime = trans(symm(sub1_fmtty$prime), sub2_fmtty$prime$1);
            var match$9 = fmtty_rel_det(sub_fmtty$prime);
            Curry._1(match$9[1], /* Refl */0);
            Curry._1(match$9[3], /* Refl */0);
            var match$10 = type_ignored_format_substitution(CamlinternalFormatBasics.erase_rel(sub_fmtty[2]), fmt, fmtty[2]);
            return /* Fmtty_fmt_EBB */[
                    /* Format_subst_ty */Block.__(9, [
                        sub1_fmtty$prime,
                        sub2_fmtty$prime$1,
                        symm(match$10[0])
                      ]),
                    match$10[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 10 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 10) {
            var match$11 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Alpha_ty */Block.__(10, [match$11[0]]),
                    match$11[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 11 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 11) {
            var match$12 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Theta_ty */Block.__(11, [match$12[0]]),
                    match$12[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 12 : 
          throw Type_mismatch;
      case 13 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 13) {
            var match$13 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Reader_ty */Block.__(13, [match$13[0]]),
                    match$13[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 14 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 14) {
            var match$14 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Ignored_reader_ty */Block.__(14, [match$14[0]]),
                    match$14[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      
    }
  }
}

function type_format(fmt, fmtty) {
  var match = type_format_gen(fmt, fmtty);
  if (typeof match[1] === "number") {
    return match[0];
  } else {
    throw Type_mismatch;
  }
}

function recast(fmt, fmtty) {
  return type_format(fmt, CamlinternalFormatBasics.erase_rel(symm(fmtty)));
}

function fix_padding(padty, width, str) {
  var len = str.length;
  var width$1 = Pervasives.abs(width);
  var padty$1 = width < 0 ? /* Left */0 : padty;
  if (width$1 <= len) {
    return str;
  } else {
    var res = Bytes.make(width$1, padty$1 === /* Zeros */2 ? /* "0" */48 : /* " " */32);
    switch (padty$1) {
      case 0 : 
          $$String.blit(str, 0, res, 0, len);
          break;
      case 1 : 
          $$String.blit(str, 0, res, width$1 - len | 0, len);
          break;
      case 2 : 
          if (len > 0 && (Caml_string.get(str, 0) === /* "+" */43 || Caml_string.get(str, 0) === /* "-" */45 || Caml_string.get(str, 0) === /* " " */32)) {
            res[0] = Caml_string.get(str, 0);
            $$String.blit(str, 1, res, (width$1 - len | 0) + 1 | 0, len - 1 | 0);
          } else if (len > 1 && Caml_string.get(str, 0) === /* "0" */48 && (Caml_string.get(str, 1) === /* "x" */120 || Caml_string.get(str, 1) === /* "X" */88)) {
            res[1] = Caml_string.get(str, 1);
            $$String.blit(str, 2, res, (width$1 - len | 0) + 2 | 0, len - 2 | 0);
          } else {
            $$String.blit(str, 0, res, width$1 - len | 0, len);
          }
          break;
      
    }
    return Caml_bytes.bytes_to_string(res);
  }
}

function fix_int_precision(prec, str) {
  var prec$1 = Pervasives.abs(prec);
  var len = str.length;
  var c = Caml_string.get(str, 0);
  var exit = 0;
  if (c >= 58) {
    if (c >= 71) {
      if (c > 102 || c < 97) {
        return str;
      } else {
        exit = 2;
      }
    } else if (c >= 65) {
      exit = 2;
    } else {
      return str;
    }
  } else if (c !== 32) {
    if (c >= 43) {
      switch (c - 43 | 0) {
        case 0 : 
        case 2 : 
            exit = 1;
            break;
        case 1 : 
        case 3 : 
        case 4 : 
            return str;
        case 5 : 
            if ((prec$1 + 2 | 0) > len && len > 1 && (Caml_string.get(str, 1) === /* "x" */120 || Caml_string.get(str, 1) === /* "X" */88)) {
              var res = Bytes.make(prec$1 + 2 | 0, /* "0" */48);
              res[1] = Caml_string.get(str, 1);
              $$String.blit(str, 2, res, (prec$1 - len | 0) + 4 | 0, len - 2 | 0);
              return Caml_bytes.bytes_to_string(res);
            } else {
              exit = 2;
            }
            break;
        case 6 : 
        case 7 : 
        case 8 : 
        case 9 : 
        case 10 : 
        case 11 : 
        case 12 : 
        case 13 : 
        case 14 : 
            exit = 2;
            break;
        
      }
    } else {
      return str;
    }
  } else {
    exit = 1;
  }
  switch (exit) {
    case 1 : 
        if ((prec$1 + 1 | 0) > len) {
          var res$1 = Bytes.make(prec$1 + 1 | 0, /* "0" */48);
          res$1[0] = c;
          $$String.blit(str, 1, res$1, (prec$1 - len | 0) + 2 | 0, len - 1 | 0);
          return Caml_bytes.bytes_to_string(res$1);
        } else {
          return str;
        }
    case 2 : 
        if (prec$1 > len) {
          var res$2 = Bytes.make(prec$1, /* "0" */48);
          $$String.blit(str, 0, res$2, prec$1 - len | 0, len);
          return Caml_bytes.bytes_to_string(res$2);
        } else {
          return str;
        }
    
  }
}

function string_to_caml_string(str) {
  return $$String.concat($$String.escaped(str), /* :: */[
              "\"",
              /* :: */[
                "\"",
                /* [] */0
              ]
            ]);
}

function format_of_iconv(iconv) {
  switch (iconv) {
    case 0 : 
        return "%d";
    case 1 : 
        return "%+d";
    case 2 : 
        return "% d";
    case 3 : 
        return "%i";
    case 4 : 
        return "%+i";
    case 5 : 
        return "% i";
    case 6 : 
        return "%x";
    case 7 : 
        return "%#x";
    case 8 : 
        return "%X";
    case 9 : 
        return "%#X";
    case 10 : 
        return "%o";
    case 11 : 
        return "%#o";
    case 12 : 
        return "%u";
    
  }
}

function format_of_aconv(iconv, c) {
  var seps;
  switch (iconv) {
    case 0 : 
        seps = /* :: */[
          "%",
          /* :: */[
            "d",
            /* [] */0
          ]
        ];
        break;
    case 1 : 
        seps = /* :: */[
          "%+",
          /* :: */[
            "d",
            /* [] */0
          ]
        ];
        break;
    case 2 : 
        seps = /* :: */[
          "% ",
          /* :: */[
            "d",
            /* [] */0
          ]
        ];
        break;
    case 3 : 
        seps = /* :: */[
          "%",
          /* :: */[
            "i",
            /* [] */0
          ]
        ];
        break;
    case 4 : 
        seps = /* :: */[
          "%+",
          /* :: */[
            "i",
            /* [] */0
          ]
        ];
        break;
    case 5 : 
        seps = /* :: */[
          "% ",
          /* :: */[
            "i",
            /* [] */0
          ]
        ];
        break;
    case 6 : 
        seps = /* :: */[
          "%",
          /* :: */[
            "x",
            /* [] */0
          ]
        ];
        break;
    case 7 : 
        seps = /* :: */[
          "%#",
          /* :: */[
            "x",
            /* [] */0
          ]
        ];
        break;
    case 8 : 
        seps = /* :: */[
          "%",
          /* :: */[
            "X",
            /* [] */0
          ]
        ];
        break;
    case 9 : 
        seps = /* :: */[
          "%#",
          /* :: */[
            "X",
            /* [] */0
          ]
        ];
        break;
    case 10 : 
        seps = /* :: */[
          "%",
          /* :: */[
            "o",
            /* [] */0
          ]
        ];
        break;
    case 11 : 
        seps = /* :: */[
          "%#",
          /* :: */[
            "o",
            /* [] */0
          ]
        ];
        break;
    case 12 : 
        seps = /* :: */[
          "%",
          /* :: */[
            "u",
            /* [] */0
          ]
        ];
        break;
    
  }
  return $$String.concat(Caml_bytes.bytes_to_string(Bytes.make(1, c)), seps);
}

function format_of_fconv(fconv, prec) {
  if (fconv === /* Float_F */15) {
    return "%.12g";
  } else {
    var prec$1 = Pervasives.abs(prec);
    var symb = char_of_fconv(fconv);
    var buf = /* record */[
      /* ind */0,
      /* bytes */Caml_bytes.caml_create_bytes(16)
    ];
    buffer_add_char(buf, /* "%" */37);
    bprint_fconv_flag(buf, fconv);
    buffer_add_char(buf, /* "." */46);
    buffer_add_string(buf, String(prec$1));
    buffer_add_char(buf, symb);
    return buffer_contents(buf);
  }
}

function convert_int(iconv, n) {
  return Caml_format.caml_format_int(format_of_iconv(iconv), n);
}

function convert_int32(iconv, n) {
  return Caml_format.caml_int32_format(format_of_aconv(iconv, /* "l" */108), n);
}

function convert_nativeint(iconv, n) {
  return Caml_format.caml_nativeint_format(format_of_aconv(iconv, /* "n" */110), n);
}

function convert_int64(iconv, n) {
  return Caml_format.caml_int64_format(format_of_aconv(iconv, /* "L" */76), n);
}

function convert_float(fconv, prec, x) {
  var prec$1 = Pervasives.abs(prec);
  var str = Caml_format.caml_format_float(format_of_fconv(fconv, prec$1), x);
  if (fconv !== /* Float_F */15) {
    return str;
  } else {
    var len = str.length;
    var is_valid = function (_i) {
      while(true) {
        var i = _i;
        if (i === len) {
          return false;
        } else {
          var match = Caml_string.get(str, i);
          var switcher = match - 46 | 0;
          if (switcher > 23 || switcher < 0) {
            if (switcher !== 55) {
              _i = i + 1 | 0;
              continue ;
            } else {
              return true;
            }
          } else if (switcher > 22 || switcher < 1) {
            return true;
          } else {
            _i = i + 1 | 0;
            continue ;
          }
        }
      };
    };
    var match = Pervasives.classify_float(x);
    if (match !== 3) {
      if (match >= 4) {
        return "nan";
      } else if (is_valid(0)) {
        return str;
      } else {
        return str + ".";
      }
    } else if (x < 0.0) {
      return "neg_infinity";
    } else {
      return "infinity";
    }
  }
}

function format_caml_char(c) {
  return $$String.concat(Char.escaped(c), /* :: */[
              "'",
              /* :: */[
                "'",
                /* [] */0
              ]
            ]);
}

function string_of_fmtty(fmtty) {
  var buf = /* record */[
    /* ind */0,
    /* bytes */Caml_bytes.caml_create_bytes(16)
  ];
  bprint_fmtty(buf, fmtty);
  return buffer_contents(buf);
}

function make_printf(_k, o, _acc, _fmt) {
  while(true) {
    var fmt = _fmt;
    var acc = _acc;
    var k = _k;
    if (typeof fmt === "number") {
      return Curry._2(k, o, acc);
    } else {
      switch (fmt.tag | 0) {
        case 0 : 
            var rest = fmt[0];
            return (function(k,acc,rest){
            return function (c) {
              var new_acc = /* Acc_data_char */Block.__(5, [
                  acc,
                  c
                ]);
              return make_printf(k, o, new_acc, rest);
            }
            }(k,acc,rest));
        case 1 : 
            var rest$1 = fmt[0];
            return (function(k,acc,rest$1){
            return function (c) {
              var new_acc_001 = format_caml_char(c);
              var new_acc = /* Acc_data_string */Block.__(4, [
                  acc,
                  new_acc_001
                ]);
              return make_printf(k, o, new_acc, rest$1);
            }
            }(k,acc,rest$1));
        case 2 : 
            return make_string_padding(k, o, acc, fmt[1], fmt[0], (function (str) {
                          return str;
                        }));
        case 3 : 
            return make_string_padding(k, o, acc, fmt[1], fmt[0], string_to_caml_string);
        case 4 : 
            return make_int_padding_precision(k, o, acc, fmt[3], fmt[1], fmt[2], convert_int, fmt[0]);
        case 5 : 
            return make_int_padding_precision(k, o, acc, fmt[3], fmt[1], fmt[2], convert_int32, fmt[0]);
        case 6 : 
            return make_int_padding_precision(k, o, acc, fmt[3], fmt[1], fmt[2], convert_nativeint, fmt[0]);
        case 7 : 
            return make_int_padding_precision(k, o, acc, fmt[3], fmt[1], fmt[2], convert_int64, fmt[0]);
        case 8 : 
            var k$1 = k;
            var o$1 = o;
            var acc$1 = acc;
            var fmt$1 = fmt[3];
            var pad = fmt[1];
            var prec = fmt[2];
            var fconv = fmt[0];
            if (typeof pad === "number") {
              if (typeof prec === "number") {
                if (prec !== 0) {
                  return (function(k$1,o$1,acc$1,fmt$1,fconv){
                  return function (p, x) {
                    var str = convert_float(fconv, p, x);
                    return make_printf(k$1, o$1, /* Acc_data_string */Block.__(4, [
                                  acc$1,
                                  str
                                ]), fmt$1);
                  }
                  }(k$1,o$1,acc$1,fmt$1,fconv));
                } else {
                  return (function(k$1,o$1,acc$1,fmt$1,fconv){
                  return function (x) {
                    var str = convert_float(fconv, 6, x);
                    return make_printf(k$1, o$1, /* Acc_data_string */Block.__(4, [
                                  acc$1,
                                  str
                                ]), fmt$1);
                  }
                  }(k$1,o$1,acc$1,fmt$1,fconv));
                }
              } else {
                var p = prec[0];
                return (function(k$1,o$1,acc$1,fmt$1,fconv,p){
                return function (x) {
                  var str = convert_float(fconv, p, x);
                  return make_printf(k$1, o$1, /* Acc_data_string */Block.__(4, [
                                acc$1,
                                str
                              ]), fmt$1);
                }
                }(k$1,o$1,acc$1,fmt$1,fconv,p));
              }
            } else if (pad.tag) {
              var padty = pad[0];
              if (typeof prec === "number") {
                if (prec !== 0) {
                  return (function(k$1,o$1,acc$1,fmt$1,fconv,padty){
                  return function (w, p, x) {
                    var str = fix_padding(padty, w, convert_float(fconv, p, x));
                    return make_printf(k$1, o$1, /* Acc_data_string */Block.__(4, [
                                  acc$1,
                                  str
                                ]), fmt$1);
                  }
                  }(k$1,o$1,acc$1,fmt$1,fconv,padty));
                } else {
                  return (function(k$1,o$1,acc$1,fmt$1,fconv,padty){
                  return function (w, x) {
                    var str = convert_float(fconv, 6, x);
                    var str$prime = fix_padding(padty, w, str);
                    return make_printf(k$1, o$1, /* Acc_data_string */Block.__(4, [
                                  acc$1,
                                  str$prime
                                ]), fmt$1);
                  }
                  }(k$1,o$1,acc$1,fmt$1,fconv,padty));
                }
              } else {
                var p$1 = prec[0];
                return (function(k$1,o$1,acc$1,fmt$1,fconv,padty,p$1){
                return function (w, x) {
                  var str = fix_padding(padty, w, convert_float(fconv, p$1, x));
                  return make_printf(k$1, o$1, /* Acc_data_string */Block.__(4, [
                                acc$1,
                                str
                              ]), fmt$1);
                }
                }(k$1,o$1,acc$1,fmt$1,fconv,padty,p$1));
              }
            } else {
              var w = pad[1];
              var padty$1 = pad[0];
              if (typeof prec === "number") {
                if (prec !== 0) {
                  return (function(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w){
                  return function (p, x) {
                    var str = fix_padding(padty$1, w, convert_float(fconv, p, x));
                    return make_printf(k$1, o$1, /* Acc_data_string */Block.__(4, [
                                  acc$1,
                                  str
                                ]), fmt$1);
                  }
                  }(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w));
                } else {
                  return (function(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w){
                  return function (x) {
                    var str = convert_float(fconv, 6, x);
                    var str$prime = fix_padding(padty$1, w, str);
                    return make_printf(k$1, o$1, /* Acc_data_string */Block.__(4, [
                                  acc$1,
                                  str$prime
                                ]), fmt$1);
                  }
                  }(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w));
                }
              } else {
                var p$2 = prec[0];
                return (function(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w,p$2){
                return function (x) {
                  var str = fix_padding(padty$1, w, convert_float(fconv, p$2, x));
                  return make_printf(k$1, o$1, /* Acc_data_string */Block.__(4, [
                                acc$1,
                                str
                              ]), fmt$1);
                }
                }(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w,p$2));
              }
            }
        case 9 : 
            var rest$2 = fmt[0];
            return (function(k,acc,rest$2){
            return function (b) {
              return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                            acc,
                            b ? "true" : "false"
                          ]), rest$2);
            }
            }(k,acc,rest$2));
        case 10 : 
            _fmt = fmt[0];
            _acc = /* Acc_flush */Block.__(7, [acc]);
            continue ;
        case 11 : 
            _fmt = fmt[1];
            _acc = /* Acc_string_literal */Block.__(2, [
                acc,
                fmt[0]
              ]);
            continue ;
        case 12 : 
            _fmt = fmt[1];
            _acc = /* Acc_char_literal */Block.__(3, [
                acc,
                fmt[0]
              ]);
            continue ;
        case 13 : 
            var rest$3 = fmt[2];
            var ty = string_of_fmtty(fmt[1]);
            return (function(k,acc,rest$3,ty){
            return function (str) {
              return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                            acc,
                            ty
                          ]), rest$3);
            }
            }(k,acc,rest$3,ty));
        case 14 : 
            var rest$4 = fmt[2];
            var fmtty = fmt[1];
            return (function(k,acc,fmtty,rest$4){
            return function (param) {
              return make_printf(k, o, acc, CamlinternalFormatBasics.concat_fmt(recast(param[0], fmtty), rest$4));
            }
            }(k,acc,fmtty,rest$4));
        case 15 : 
            var rest$5 = fmt[0];
            return (function(k,acc,rest$5){
            return function (f, x) {
              return make_printf(k, o, /* Acc_delay */Block.__(6, [
                            acc,
                            (function (o) {
                                return Curry._2(f, o, x);
                              })
                          ]), rest$5);
            }
            }(k,acc,rest$5));
        case 16 : 
            var rest$6 = fmt[0];
            return (function(k,acc,rest$6){
            return function (f) {
              return make_printf(k, o, /* Acc_delay */Block.__(6, [
                            acc,
                            f
                          ]), rest$6);
            }
            }(k,acc,rest$6));
        case 17 : 
            _fmt = fmt[1];
            _acc = /* Acc_formatting_lit */Block.__(0, [
                acc,
                fmt[0]
              ]);
            continue ;
        case 18 : 
            var match = fmt[0];
            if (match.tag) {
              var rest$7 = fmt[1];
              var k$prime = (function(k,acc,rest$7){
              return function k$prime(koc, kacc) {
                return make_printf(k, koc, /* Acc_formatting_gen */Block.__(1, [
                              acc,
                              /* Acc_open_box */Block.__(1, [kacc])
                            ]), rest$7);
              }
              }(k,acc,rest$7));
              _fmt = match[0][0];
              _acc = /* End_of_acc */0;
              _k = k$prime;
              continue ;
            } else {
              var rest$8 = fmt[1];
              var k$prime$1 = (function(k,acc,rest$8){
              return function k$prime$1(koc, kacc) {
                return make_printf(k, koc, /* Acc_formatting_gen */Block.__(1, [
                              acc,
                              /* Acc_open_tag */Block.__(0, [kacc])
                            ]), rest$8);
              }
              }(k,acc,rest$8));
              _fmt = match[0][0];
              _acc = /* End_of_acc */0;
              _k = k$prime$1;
              continue ;
            }
        case 19 : 
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  /* tuple */[
                    "camlinternalFormat.ml",
                    1449,
                    4
                  ]
                ];
        case 20 : 
            var rest$9 = fmt[2];
            var new_acc = /* Acc_invalid_arg */Block.__(8, [
                acc,
                "Printf: bad conversion %["
              ]);
            return (function(k,rest$9,new_acc){
            return function (param) {
              return make_printf(k, o, new_acc, rest$9);
            }
            }(k,rest$9,new_acc));
        case 21 : 
            var rest$10 = fmt[1];
            return (function(k,acc,rest$10){
            return function (n) {
              var new_acc_001 = Caml_format.caml_format_int("%u", n);
              var new_acc = /* Acc_data_string */Block.__(4, [
                  acc,
                  new_acc_001
                ]);
              return make_printf(k, o, new_acc, rest$10);
            }
            }(k,acc,rest$10));
        case 22 : 
            var rest$11 = fmt[0];
            return (function(k,acc,rest$11){
            return function (c) {
              var new_acc = /* Acc_data_char */Block.__(5, [
                  acc,
                  c
                ]);
              return make_printf(k, o, new_acc, rest$11);
            }
            }(k,acc,rest$11));
        case 23 : 
            var k$2 = k;
            var o$2 = o;
            var acc$2 = acc;
            var ign = fmt[0];
            var fmt$2 = fmt[1];
            if (typeof ign === "number") {
              if (ign === 3) {
                throw [
                      Caml_builtin_exceptions.assert_failure,
                      /* tuple */[
                        "camlinternalFormat.ml",
                        1517,
                        39
                      ]
                    ];
              } else {
                return make_invalid_arg(k$2, o$2, acc$2, fmt$2);
              }
            } else if (ign.tag === 8) {
              return make_from_fmtty(k$2, o$2, acc$2, ign[1], fmt$2);
            } else {
              return make_invalid_arg(k$2, o$2, acc$2, fmt$2);
            }
        case 24 : 
            return make_custom(k, o, acc, fmt[2], fmt[0], Curry._1(fmt[1], /* () */0));
        
      }
    }
  };
}

function make_from_fmtty(k, o, acc, fmtty, fmt) {
  if (typeof fmtty === "number") {
    return make_invalid_arg(k, o, acc, fmt);
  } else {
    switch (fmtty.tag | 0) {
      case 0 : 
          var rest = fmtty[0];
          return (function (param) {
              return make_from_fmtty(k, o, acc, rest, fmt);
            });
      case 1 : 
          var rest$1 = fmtty[0];
          return (function (param) {
              return make_from_fmtty(k, o, acc, rest$1, fmt);
            });
      case 2 : 
          var rest$2 = fmtty[0];
          return (function (param) {
              return make_from_fmtty(k, o, acc, rest$2, fmt);
            });
      case 3 : 
          var rest$3 = fmtty[0];
          return (function (param) {
              return make_from_fmtty(k, o, acc, rest$3, fmt);
            });
      case 4 : 
          var rest$4 = fmtty[0];
          return (function (param) {
              return make_from_fmtty(k, o, acc, rest$4, fmt);
            });
      case 5 : 
          var rest$5 = fmtty[0];
          return (function (param) {
              return make_from_fmtty(k, o, acc, rest$5, fmt);
            });
      case 6 : 
          var rest$6 = fmtty[0];
          return (function (param) {
              return make_from_fmtty(k, o, acc, rest$6, fmt);
            });
      case 7 : 
          var rest$7 = fmtty[0];
          return (function (param) {
              return make_from_fmtty(k, o, acc, rest$7, fmt);
            });
      case 8 : 
          var rest$8 = fmtty[1];
          return (function (param) {
              return make_from_fmtty(k, o, acc, rest$8, fmt);
            });
      case 9 : 
          var rest$9 = fmtty[2];
          var ty = trans(symm(fmtty[0]), fmtty[1]);
          return (function (param) {
              return make_from_fmtty(k, o, acc, CamlinternalFormatBasics.concat_fmtty(ty, rest$9), fmt);
            });
      case 10 : 
          var rest$10 = fmtty[0];
          return (function (param, param$1) {
              return make_from_fmtty(k, o, acc, rest$10, fmt);
            });
      case 11 : 
          var rest$11 = fmtty[0];
          return (function (param) {
              return make_from_fmtty(k, o, acc, rest$11, fmt);
            });
      case 12 : 
          var rest$12 = fmtty[0];
          return (function (param) {
              return make_from_fmtty(k, o, acc, rest$12, fmt);
            });
      case 13 : 
          throw [
                Caml_builtin_exceptions.assert_failure,
                /* tuple */[
                  "camlinternalFormat.ml",
                  1540,
                  31
                ]
              ];
      case 14 : 
          throw [
                Caml_builtin_exceptions.assert_failure,
                /* tuple */[
                  "camlinternalFormat.ml",
                  1541,
                  31
                ]
              ];
      
    }
  }
}

function make_invalid_arg(k, o, acc, fmt) {
  return make_printf(k, o, /* Acc_invalid_arg */Block.__(8, [
                acc,
                "Printf: bad conversion %_"
              ]), fmt);
}

function make_string_padding(k, o, acc, fmt, pad, trans) {
  if (typeof pad === "number") {
    return (function (x) {
        var new_acc_001 = Curry._1(trans, x);
        var new_acc = /* Acc_data_string */Block.__(4, [
            acc,
            new_acc_001
          ]);
        return make_printf(k, o, new_acc, fmt);
      });
  } else if (pad.tag) {
    var padty = pad[0];
    return (function (w, x) {
        var new_acc_001 = fix_padding(padty, w, Curry._1(trans, x));
        var new_acc = /* Acc_data_string */Block.__(4, [
            acc,
            new_acc_001
          ]);
        return make_printf(k, o, new_acc, fmt);
      });
  } else {
    var width = pad[1];
    var padty$1 = pad[0];
    return (function (x) {
        var new_acc_001 = fix_padding(padty$1, width, Curry._1(trans, x));
        var new_acc = /* Acc_data_string */Block.__(4, [
            acc,
            new_acc_001
          ]);
        return make_printf(k, o, new_acc, fmt);
      });
  }
}

function make_int_padding_precision(k, o, acc, fmt, pad, prec, trans, iconv) {
  if (typeof pad === "number") {
    if (typeof prec === "number") {
      if (prec !== 0) {
        return (function (p, x) {
            var str = fix_int_precision(p, Curry._2(trans, iconv, x));
            return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                          acc,
                          str
                        ]), fmt);
          });
      } else {
        return (function (x) {
            var str = Curry._2(trans, iconv, x);
            return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                          acc,
                          str
                        ]), fmt);
          });
      }
    } else {
      var p = prec[0];
      return (function (x) {
          var str = fix_int_precision(p, Curry._2(trans, iconv, x));
          return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                        acc,
                        str
                      ]), fmt);
        });
    }
  } else if (pad.tag) {
    var padty = pad[0];
    if (typeof prec === "number") {
      if (prec !== 0) {
        return (function (w, p, x) {
            var str = fix_padding(padty, w, fix_int_precision(p, Curry._2(trans, iconv, x)));
            return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                          acc,
                          str
                        ]), fmt);
          });
      } else {
        return (function (w, x) {
            var str = fix_padding(padty, w, Curry._2(trans, iconv, x));
            return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                          acc,
                          str
                        ]), fmt);
          });
      }
    } else {
      var p$1 = prec[0];
      return (function (w, x) {
          var str = fix_padding(padty, w, fix_int_precision(p$1, Curry._2(trans, iconv, x)));
          return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                        acc,
                        str
                      ]), fmt);
        });
    }
  } else {
    var w = pad[1];
    var padty$1 = pad[0];
    if (typeof prec === "number") {
      if (prec !== 0) {
        return (function (p, x) {
            var str = fix_padding(padty$1, w, fix_int_precision(p, Curry._2(trans, iconv, x)));
            return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                          acc,
                          str
                        ]), fmt);
          });
      } else {
        return (function (x) {
            var str = fix_padding(padty$1, w, Curry._2(trans, iconv, x));
            return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                          acc,
                          str
                        ]), fmt);
          });
      }
    } else {
      var p$2 = prec[0];
      return (function (x) {
          var str = fix_padding(padty$1, w, fix_int_precision(p$2, Curry._2(trans, iconv, x)));
          return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                        acc,
                        str
                      ]), fmt);
        });
    }
  }
}

function make_custom(k, o, acc, rest, arity, f) {
  if (arity) {
    var arity$1 = arity[0];
    return (function (x) {
        return make_custom(k, o, acc, rest, arity$1, Curry._1(f, x));
      });
  } else {
    return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                  acc,
                  f
                ]), rest);
  }
}

function output_acc(o, _acc) {
  while(true) {
    var acc = _acc;
    var exit = 0;
    if (typeof acc === "number") {
      return /* () */0;
    } else {
      switch (acc.tag | 0) {
        case 0 : 
            var s = string_of_formatting_lit(acc[1]);
            output_acc(o, acc[0]);
            return Pervasives.output_string(o, s);
        case 1 : 
            var match = acc[1];
            var p = acc[0];
            output_acc(o, p);
            if (match.tag) {
              Pervasives.output_string(o, "@[");
              _acc = match[0];
              continue ;
            } else {
              Pervasives.output_string(o, "@{");
              _acc = match[0];
              continue ;
            }
        case 2 : 
        case 4 : 
            exit = 1;
            break;
        case 3 : 
        case 5 : 
            exit = 2;
            break;
        case 6 : 
            output_acc(o, acc[0]);
            return Curry._1(acc[1], o);
        case 7 : 
            output_acc(o, acc[0]);
            return Caml_io.caml_ml_flush(o);
        case 8 : 
            output_acc(o, acc[0]);
            throw [
                  Caml_builtin_exceptions.invalid_argument,
                  acc[1]
                ];
        
      }
    }
    switch (exit) {
      case 1 : 
          output_acc(o, acc[0]);
          return Pervasives.output_string(o, acc[1]);
      case 2 : 
          output_acc(o, acc[0]);
          return Caml_io.caml_ml_output_char(o, acc[1]);
      
    }
  };
}

function bufput_acc(b, _acc) {
  while(true) {
    var acc = _acc;
    var exit = 0;
    if (typeof acc === "number") {
      return /* () */0;
    } else {
      switch (acc.tag | 0) {
        case 0 : 
            var s = string_of_formatting_lit(acc[1]);
            bufput_acc(b, acc[0]);
            return $$Buffer.add_string(b, s);
        case 1 : 
            var match = acc[1];
            var p = acc[0];
            bufput_acc(b, p);
            if (match.tag) {
              $$Buffer.add_string(b, "@[");
              _acc = match[0];
              continue ;
            } else {
              $$Buffer.add_string(b, "@{");
              _acc = match[0];
              continue ;
            }
        case 2 : 
        case 4 : 
            exit = 1;
            break;
        case 3 : 
        case 5 : 
            exit = 2;
            break;
        case 6 : 
            bufput_acc(b, acc[0]);
            return Curry._1(acc[1], b);
        case 7 : 
            _acc = acc[0];
            continue ;
        case 8 : 
            bufput_acc(b, acc[0]);
            throw [
                  Caml_builtin_exceptions.invalid_argument,
                  acc[1]
                ];
        
      }
    }
    switch (exit) {
      case 1 : 
          bufput_acc(b, acc[0]);
          return $$Buffer.add_string(b, acc[1]);
      case 2 : 
          bufput_acc(b, acc[0]);
          return $$Buffer.add_char(b, acc[1]);
      
    }
  };
}

function strput_acc(b, _acc) {
  while(true) {
    var acc = _acc;
    var exit = 0;
    if (typeof acc === "number") {
      return /* () */0;
    } else {
      switch (acc.tag | 0) {
        case 0 : 
            var s = string_of_formatting_lit(acc[1]);
            strput_acc(b, acc[0]);
            return $$Buffer.add_string(b, s);
        case 1 : 
            var match = acc[1];
            var p = acc[0];
            strput_acc(b, p);
            if (match.tag) {
              $$Buffer.add_string(b, "@[");
              _acc = match[0];
              continue ;
            } else {
              $$Buffer.add_string(b, "@{");
              _acc = match[0];
              continue ;
            }
        case 2 : 
        case 4 : 
            exit = 1;
            break;
        case 3 : 
        case 5 : 
            exit = 2;
            break;
        case 6 : 
            strput_acc(b, acc[0]);
            return $$Buffer.add_string(b, Curry._1(acc[1], /* () */0));
        case 7 : 
            _acc = acc[0];
            continue ;
        case 8 : 
            strput_acc(b, acc[0]);
            throw [
                  Caml_builtin_exceptions.invalid_argument,
                  acc[1]
                ];
        
      }
    }
    switch (exit) {
      case 1 : 
          strput_acc(b, acc[0]);
          return $$Buffer.add_string(b, acc[1]);
      case 2 : 
          strput_acc(b, acc[0]);
          return $$Buffer.add_char(b, acc[1]);
      
    }
  };
}

function failwith_message(param) {
  var buf = $$Buffer.create(256);
  var k = function (param, acc) {
    strput_acc(buf, acc);
    var s = $$Buffer.contents(buf);
    throw [
          Caml_builtin_exceptions.failure,
          s
        ];
  };
  return make_printf(k, /* () */0, /* End_of_acc */0, param[0]);
}

function open_box_of_string(str) {
  if (str === "") {
    return /* tuple */[
            0,
            /* Pp_box */4
          ];
  } else {
    var len = str.length;
    var invalid_box = function (param) {
      return Curry._1(failwith_message(/* Format */[
                      /* String_literal */Block.__(11, [
                          "invalid box description ",
                          /* Caml_string */Block.__(3, [
                              /* No_padding */0,
                              /* End_of_format */0
                            ])
                        ]),
                      "invalid box description %S"
                    ]), str);
    };
    var parse_spaces = function (_i) {
      while(true) {
        var i = _i;
        if (i === len) {
          return i;
        } else {
          var match = Caml_string.get(str, i);
          if (match !== 9) {
            if (match !== 32) {
              return i;
            } else {
              _i = i + 1 | 0;
              continue ;
            }
          } else {
            _i = i + 1 | 0;
            continue ;
          }
        }
      };
    };
    var parse_lword = function (i, _j) {
      while(true) {
        var j = _j;
        if (j === len) {
          return j;
        } else {
          var match = Caml_string.get(str, j);
          if (match > 122 || match < 97) {
            return j;
          } else {
            _j = j + 1 | 0;
            continue ;
          }
        }
      };
    };
    var parse_int = function (i, _j) {
      while(true) {
        var j = _j;
        if (j === len) {
          return j;
        } else {
          var match = Caml_string.get(str, j);
          if (match >= 48) {
            if (match >= 58) {
              return j;
            } else {
              _j = j + 1 | 0;
              continue ;
            }
          } else if (match !== 45) {
            return j;
          } else {
            _j = j + 1 | 0;
            continue ;
          }
        }
      };
    };
    var wstart = parse_spaces(0);
    var wend = parse_lword(wstart, wstart);
    var box_name = $$String.sub(str, wstart, wend - wstart | 0);
    var nstart = parse_spaces(wend);
    var nend = parse_int(nstart, nstart);
    var indent;
    if (nstart === nend) {
      indent = 0;
    } else {
      try {
        indent = Caml_format.caml_int_of_string($$String.sub(str, nstart, nend - nstart | 0));
      }
      catch (raw_exn){
        var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
        if (exn[0] === Caml_builtin_exceptions.failure) {
          indent = invalid_box(/* () */0);
        } else {
          throw exn;
        }
      }
    }
    var exp_end = parse_spaces(nend);
    if (exp_end !== len) {
      invalid_box(/* () */0);
    }
    var box_type;
    switch (box_name) {
      case "" : 
      case "b" : 
          box_type = /* Pp_box */4;
          break;
      case "h" : 
          box_type = /* Pp_hbox */0;
          break;
      case "hov" : 
          box_type = /* Pp_hovbox */3;
          break;
      case "hv" : 
          box_type = /* Pp_hvbox */2;
          break;
      case "v" : 
          box_type = /* Pp_vbox */1;
          break;
      default:
        box_type = invalid_box(/* () */0);
    }
    return /* tuple */[
            indent,
            box_type
          ];
  }
}

function make_padding_fmt_ebb(pad, fmt) {
  if (typeof pad === "number") {
    return /* Padding_fmt_EBB */[
            /* No_padding */0,
            fmt
          ];
  } else if (pad.tag) {
    return /* Padding_fmt_EBB */[
            /* Arg_padding */Block.__(1, [pad[0]]),
            fmt
          ];
  } else {
    return /* Padding_fmt_EBB */[
            /* Lit_padding */Block.__(0, [
                pad[0],
                pad[1]
              ]),
            fmt
          ];
  }
}

function make_precision_fmt_ebb(prec, fmt) {
  if (typeof prec === "number") {
    if (prec !== 0) {
      return /* Precision_fmt_EBB */[
              /* Arg_precision */1,
              fmt
            ];
    } else {
      return /* Precision_fmt_EBB */[
              /* No_precision */0,
              fmt
            ];
    }
  } else {
    return /* Precision_fmt_EBB */[
            /* Lit_precision */[prec[0]],
            fmt
          ];
  }
}

function make_padprec_fmt_ebb(pad, prec, fmt) {
  var match = make_precision_fmt_ebb(prec, fmt);
  var fmt$prime = match[1];
  var prec$1 = match[0];
  if (typeof pad === "number") {
    return /* Padprec_fmt_EBB */[
            /* No_padding */0,
            prec$1,
            fmt$prime
          ];
  } else if (pad.tag) {
    return /* Padprec_fmt_EBB */[
            /* Arg_padding */Block.__(1, [pad[0]]),
            prec$1,
            fmt$prime
          ];
  } else {
    return /* Padprec_fmt_EBB */[
            /* Lit_padding */Block.__(0, [
                pad[0],
                pad[1]
              ]),
            prec$1,
            fmt$prime
          ];
  }
}

function fmt_ebb_of_string(legacy_behavior, str) {
  var legacy_behavior$1 = legacy_behavior !== undefined ? legacy_behavior : true;
  var invalid_format_message = function (str_ind, msg) {
    return Curry._3(failwith_message(/* Format */[
                    /* String_literal */Block.__(11, [
                        "invalid format ",
                        /* Caml_string */Block.__(3, [
                            /* No_padding */0,
                            /* String_literal */Block.__(11, [
                                ": at character number ",
                                /* Int */Block.__(4, [
                                    /* Int_d */0,
                                    /* No_padding */0,
                                    /* No_precision */0,
                                    /* String_literal */Block.__(11, [
                                        ", ",
                                        /* String */Block.__(2, [
                                            /* No_padding */0,
                                            /* End_of_format */0
                                          ])
                                      ])
                                  ])
                              ])
                          ])
                      ]),
                    "invalid format %S: at character number %d, %s"
                  ]), str, str_ind, msg);
  };
  var invalid_format_without = function (str_ind, c, s) {
    return Curry._4(failwith_message(/* Format */[
                    /* String_literal */Block.__(11, [
                        "invalid format ",
                        /* Caml_string */Block.__(3, [
                            /* No_padding */0,
                            /* String_literal */Block.__(11, [
                                ": at character number ",
                                /* Int */Block.__(4, [
                                    /* Int_d */0,
                                    /* No_padding */0,
                                    /* No_precision */0,
                                    /* String_literal */Block.__(11, [
                                        ", '",
                                        /* Char */Block.__(0, [/* String_literal */Block.__(11, [
                                                "' without ",
                                                /* String */Block.__(2, [
                                                    /* No_padding */0,
                                                    /* End_of_format */0
                                                  ])
                                              ])])
                                      ])
                                  ])
                              ])
                          ])
                      ]),
                    "invalid format %S: at character number %d, '%c' without %s"
                  ]), str, str_ind, c, s);
  };
  var expected_character = function (str_ind, expected, read) {
    return Curry._4(failwith_message(/* Format */[
                    /* String_literal */Block.__(11, [
                        "invalid format ",
                        /* Caml_string */Block.__(3, [
                            /* No_padding */0,
                            /* String_literal */Block.__(11, [
                                ": at character number ",
                                /* Int */Block.__(4, [
                                    /* Int_d */0,
                                    /* No_padding */0,
                                    /* No_precision */0,
                                    /* String_literal */Block.__(11, [
                                        ", ",
                                        /* String */Block.__(2, [
                                            /* No_padding */0,
                                            /* String_literal */Block.__(11, [
                                                " expected, read ",
                                                /* Caml_char */Block.__(1, [/* End_of_format */0])
                                              ])
                                          ])
                                      ])
                                  ])
                              ])
                          ])
                      ]),
                    "invalid format %S: at character number %d, %s expected, read %C"
                  ]), str, str_ind, expected, read);
  };
  var compute_int_conv = function (pct_ind, str_ind, _plus, _sharp, _space, symb) {
    while(true) {
      var space = _space;
      var sharp = _sharp;
      var plus = _plus;
      var exit = 0;
      var exit$1 = 0;
      if (plus) {
        if (sharp) {
          exit$1 = 2;
        } else if (space) {
          exit = 1;
        } else if (symb !== 100) {
          if (symb !== 105) {
            exit = 1;
          } else {
            return /* Int_pi */4;
          }
        } else {
          return /* Int_pd */1;
        }
      } else if (sharp) {
        if (space) {
          exit$1 = 2;
        } else if (symb !== 88) {
          if (symb !== 111) {
            if (symb !== 120) {
              exit$1 = 2;
            } else {
              return /* Int_Cx */7;
            }
          } else {
            return /* Int_Co */11;
          }
        } else {
          return /* Int_CX */9;
        }
      } else if (space) {
        if (symb !== 100) {
          if (symb !== 105) {
            exit = 1;
          } else {
            return /* Int_si */5;
          }
        } else {
          return /* Int_sd */2;
        }
      } else {
        switch (symb) {
          case 88 : 
              return /* Int_X */8;
          case 100 : 
              return /* Int_d */0;
          case 105 : 
              return /* Int_i */3;
          case 111 : 
              return /* Int_o */10;
          case 117 : 
              return /* Int_u */12;
          case 89 : 
          case 90 : 
          case 91 : 
          case 92 : 
          case 93 : 
          case 94 : 
          case 95 : 
          case 96 : 
          case 97 : 
          case 98 : 
          case 99 : 
          case 101 : 
          case 102 : 
          case 103 : 
          case 104 : 
          case 106 : 
          case 107 : 
          case 108 : 
          case 109 : 
          case 110 : 
          case 112 : 
          case 113 : 
          case 114 : 
          case 115 : 
          case 116 : 
          case 118 : 
          case 119 : 
              exit = 1;
              break;
          case 120 : 
              return /* Int_x */6;
          default:
            exit = 1;
        }
      }
      if (exit$1 === 2) {
        var exit$2 = 0;
        switch (symb) {
          case 88 : 
              if (legacy_behavior$1) {
                return /* Int_CX */9;
              } else {
                exit = 1;
              }
              break;
          case 111 : 
              if (legacy_behavior$1) {
                return /* Int_Co */11;
              } else {
                exit = 1;
              }
              break;
          case 100 : 
          case 105 : 
          case 117 : 
              exit$2 = 3;
              break;
          case 89 : 
          case 90 : 
          case 91 : 
          case 92 : 
          case 93 : 
          case 94 : 
          case 95 : 
          case 96 : 
          case 97 : 
          case 98 : 
          case 99 : 
          case 101 : 
          case 102 : 
          case 103 : 
          case 104 : 
          case 106 : 
          case 107 : 
          case 108 : 
          case 109 : 
          case 110 : 
          case 112 : 
          case 113 : 
          case 114 : 
          case 115 : 
          case 116 : 
          case 118 : 
          case 119 : 
              exit = 1;
              break;
          case 120 : 
              if (legacy_behavior$1) {
                return /* Int_Cx */7;
              } else {
                exit = 1;
              }
              break;
          default:
            exit = 1;
        }
        if (exit$2 === 3) {
          if (legacy_behavior$1) {
            _sharp = false;
            continue ;
          } else {
            return incompatible_flag(pct_ind, str_ind, symb, "'#'");
          }
        }
        
      }
      if (exit === 1) {
        if (plus) {
          if (space) {
            if (legacy_behavior$1) {
              _space = false;
              continue ;
            } else {
              return incompatible_flag(pct_ind, str_ind, /* " " */32, "'+'");
            }
          } else if (legacy_behavior$1) {
            _plus = false;
            continue ;
          } else {
            return incompatible_flag(pct_ind, str_ind, symb, "'+'");
          }
        } else if (space) {
          if (legacy_behavior$1) {
            _space = false;
            continue ;
          } else {
            return incompatible_flag(pct_ind, str_ind, symb, "' '");
          }
        } else {
          throw [
                Caml_builtin_exceptions.assert_failure,
                /* tuple */[
                  "camlinternalFormat.ml",
                  2719,
                  28
                ]
              ];
        }
      }
      
    };
  };
  var incompatible_flag = function (pct_ind, str_ind, symb, option) {
    var subfmt = $$String.sub(str, pct_ind, str_ind - pct_ind | 0);
    return Curry._5(failwith_message(/* Format */[
                    /* String_literal */Block.__(11, [
                        "invalid format ",
                        /* Caml_string */Block.__(3, [
                            /* No_padding */0,
                            /* String_literal */Block.__(11, [
                                ": at character number ",
                                /* Int */Block.__(4, [
                                    /* Int_d */0,
                                    /* No_padding */0,
                                    /* No_precision */0,
                                    /* String_literal */Block.__(11, [
                                        ", ",
                                        /* String */Block.__(2, [
                                            /* No_padding */0,
                                            /* String_literal */Block.__(11, [
                                                " is incompatible with '",
                                                /* Char */Block.__(0, [/* String_literal */Block.__(11, [
                                                        "' in sub-format ",
                                                        /* Caml_string */Block.__(3, [
                                                            /* No_padding */0,
                                                            /* End_of_format */0
                                                          ])
                                                      ])])
                                              ])
                                          ])
                                      ])
                                  ])
                              ])
                          ])
                      ]),
                    "invalid format %S: at character number %d, %s is incompatible with '%c' in sub-format %S"
                  ]), str, pct_ind, option, symb, subfmt);
  };
  var parse_positive = function (_str_ind, end_ind, _acc) {
    while(true) {
      var acc = _acc;
      var str_ind = _str_ind;
      if (str_ind === end_ind) {
        invalid_format_message(end_ind, "unexpected end of format");
      }
      var c = Caml_string.get(str, str_ind);
      if (c > 57 || c < 48) {
        return /* tuple */[
                str_ind,
                acc
              ];
      } else {
        var new_acc = Caml_int32.imul(acc, 10) + (c - /* "0" */48 | 0) | 0;
        _acc = new_acc;
        _str_ind = str_ind + 1 | 0;
        continue ;
      }
    };
  };
  var parse_after_precision = function (pct_ind, str_ind, end_ind, minus, plus, sharp, space, ign, pad, prec) {
    if (str_ind === end_ind) {
      invalid_format_message(end_ind, "unexpected end of format");
    }
    var parse_conv = function (padprec) {
      return parse_conversion(pct_ind, str_ind + 1 | 0, end_ind, plus, sharp, space, ign, pad, prec, padprec, Caml_string.get(str, str_ind));
    };
    if (typeof pad === "number") {
      var exit = 0;
      if (typeof prec === "number" && prec === 0) {
        return parse_conv(/* No_padding */0);
      } else {
        exit = 1;
      }
      if (exit === 1) {
        if (minus) {
          if (typeof prec === "number") {
            return parse_conv(/* Arg_padding */Block.__(1, [/* Left */0]));
          } else {
            return parse_conv(/* Lit_padding */Block.__(0, [
                          /* Left */0,
                          prec[0]
                        ]));
          }
        } else if (typeof prec === "number") {
          return parse_conv(/* Arg_padding */Block.__(1, [/* Right */1]));
        } else {
          return parse_conv(/* Lit_padding */Block.__(0, [
                        /* Right */1,
                        prec[0]
                      ]));
        }
      }
      
    } else {
      return parse_conv(pad);
    }
  };
  var parse_after_padding = function (pct_ind, str_ind, end_ind, minus, plus, sharp, space, ign, pad) {
    if (str_ind === end_ind) {
      invalid_format_message(end_ind, "unexpected end of format");
    }
    var symb = Caml_string.get(str, str_ind);
    if (symb !== 46) {
      return parse_conversion(pct_ind, str_ind + 1 | 0, end_ind, plus, sharp, space, ign, pad, /* No_precision */0, pad, symb);
    } else {
      var pct_ind$1 = pct_ind;
      var str_ind$1 = str_ind + 1 | 0;
      var end_ind$1 = end_ind;
      var minus$1 = minus;
      var plus$1 = plus;
      var sharp$1 = sharp;
      var space$1 = space;
      var ign$1 = ign;
      var pad$1 = pad;
      if (str_ind$1 === end_ind$1) {
        invalid_format_message(end_ind$1, "unexpected end of format");
      }
      var parse_literal = function (minus, str_ind) {
        var match = parse_positive(str_ind, end_ind$1, 0);
        return parse_after_precision(pct_ind$1, match[0], end_ind$1, minus, plus$1, sharp$1, space$1, ign$1, pad$1, /* Lit_precision */[match[1]]);
      };
      var symb$1 = Caml_string.get(str, str_ind$1);
      var exit = 0;
      var exit$1 = 0;
      if (symb$1 >= 48) {
        if (symb$1 >= 58) {
          exit = 1;
        } else {
          return parse_literal(minus$1, str_ind$1);
        }
      } else if (symb$1 >= 42) {
        switch (symb$1 - 42 | 0) {
          case 0 : 
              return parse_after_precision(pct_ind$1, str_ind$1 + 1 | 0, end_ind$1, minus$1, plus$1, sharp$1, space$1, ign$1, pad$1, /* Arg_precision */1);
          case 1 : 
          case 3 : 
              exit$1 = 2;
              break;
          case 2 : 
          case 4 : 
          case 5 : 
              exit = 1;
              break;
          
        }
      } else {
        exit = 1;
      }
      if (exit$1 === 2) {
        if (legacy_behavior$1) {
          return parse_literal(minus$1 || symb$1 === /* "-" */45, str_ind$1 + 1 | 0);
        } else {
          exit = 1;
        }
      }
      if (exit === 1) {
        if (legacy_behavior$1) {
          return parse_after_precision(pct_ind$1, str_ind$1, end_ind$1, minus$1, plus$1, sharp$1, space$1, ign$1, pad$1, /* Lit_precision */[0]);
        } else {
          return invalid_format_without(str_ind$1 - 1 | 0, /* "." */46, "precision");
        }
      }
      
    }
  };
  var parse_literal = function (lit_start, _str_ind, end_ind) {
    while(true) {
      var str_ind = _str_ind;
      if (str_ind === end_ind) {
        return add_literal(lit_start, str_ind, /* End_of_format */0);
      } else {
        var match = Caml_string.get(str, str_ind);
        if (match !== 37) {
          if (match !== 64) {
            _str_ind = str_ind + 1 | 0;
            continue ;
          } else {
            var match$1 = parse_after_at(str_ind + 1 | 0, end_ind);
            return add_literal(lit_start, str_ind, match$1[0]);
          }
        } else {
          var match$2 = parse_format(str_ind, end_ind);
          return add_literal(lit_start, str_ind, match$2[0]);
        }
      }
    };
  };
  var parse_format = function (pct_ind, end_ind) {
    var pct_ind$1 = pct_ind;
    var str_ind = pct_ind + 1 | 0;
    var end_ind$1 = end_ind;
    if (str_ind === end_ind$1) {
      invalid_format_message(end_ind$1, "unexpected end of format");
    }
    var match = Caml_string.get(str, str_ind);
    if (match !== 95) {
      return parse_flags(pct_ind$1, str_ind, end_ind$1, false);
    } else {
      return parse_flags(pct_ind$1, str_ind + 1 | 0, end_ind$1, true);
    }
  };
  var parse_after_at = function (str_ind, end_ind) {
    if (str_ind === end_ind) {
      return /* Fmt_EBB */[/* Char_literal */Block.__(12, [
                  /* "@" */64,
                  /* End_of_format */0
                ])];
    } else {
      var c = Caml_string.get(str, str_ind);
      var exit = 0;
      if (c >= 65) {
        if (c >= 94) {
          switch (c) {
            case 123 : 
                return parse_tag(true, str_ind + 1 | 0, end_ind);
            case 124 : 
                exit = 1;
                break;
            case 125 : 
                var beg_ind = str_ind + 1 | 0;
                var match = parse_literal(beg_ind, beg_ind, end_ind);
                return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                            /* Close_tag */1,
                            match[0]
                          ])];
            default:
              exit = 1;
          }
        } else if (c >= 91) {
          switch (c - 91 | 0) {
            case 0 : 
                return parse_tag(false, str_ind + 1 | 0, end_ind);
            case 1 : 
                exit = 1;
                break;
            case 2 : 
                var beg_ind$1 = str_ind + 1 | 0;
                var match$1 = parse_literal(beg_ind$1, beg_ind$1, end_ind);
                return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                            /* Close_box */0,
                            match$1[0]
                          ])];
            
          }
        } else {
          exit = 1;
        }
      } else if (c !== 10) {
        if (c >= 32) {
          switch (c - 32 | 0) {
            case 0 : 
                var beg_ind$2 = str_ind + 1 | 0;
                var match$2 = parse_literal(beg_ind$2, beg_ind$2, end_ind);
                return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                            /* Break */Block.__(0, [
                                "@ ",
                                1,
                                0
                              ]),
                            match$2[0]
                          ])];
            case 5 : 
                if ((str_ind + 1 | 0) < end_ind && Caml_string.get(str, str_ind + 1 | 0) === /* "%" */37) {
                  var beg_ind$3 = str_ind + 2 | 0;
                  var match$3 = parse_literal(beg_ind$3, beg_ind$3, end_ind);
                  return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                              /* Escaped_percent */6,
                              match$3[0]
                            ])];
                } else {
                  var match$4 = parse_literal(str_ind, str_ind, end_ind);
                  return /* Fmt_EBB */[/* Char_literal */Block.__(12, [
                              /* "@" */64,
                              match$4[0]
                            ])];
                }
            case 12 : 
                var beg_ind$4 = str_ind + 1 | 0;
                var match$5 = parse_literal(beg_ind$4, beg_ind$4, end_ind);
                return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                            /* Break */Block.__(0, [
                                "@,",
                                0,
                                0
                              ]),
                            match$5[0]
                          ])];
            case 14 : 
                var beg_ind$5 = str_ind + 1 | 0;
                var match$6 = parse_literal(beg_ind$5, beg_ind$5, end_ind);
                return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                            /* Flush_newline */4,
                            match$6[0]
                          ])];
            case 27 : 
                var str_ind$1 = str_ind + 1 | 0;
                var end_ind$1 = end_ind;
                var match$7;
                try {
                  if (str_ind$1 === end_ind$1 || Caml_string.get(str, str_ind$1) !== /* "<" */60) {
                    throw Caml_builtin_exceptions.not_found;
                  }
                  var str_ind_1 = parse_spaces(str_ind$1 + 1 | 0, end_ind$1);
                  var match$8 = Caml_string.get(str, str_ind_1);
                  var exit$1 = 0;
                  if (match$8 >= 48) {
                    if (match$8 >= 58) {
                      throw Caml_builtin_exceptions.not_found;
                    } else {
                      exit$1 = 1;
                    }
                  } else if (match$8 !== 45) {
                    throw Caml_builtin_exceptions.not_found;
                  } else {
                    exit$1 = 1;
                  }
                  if (exit$1 === 1) {
                    var match$9 = parse_integer(str_ind_1, end_ind$1);
                    var width = match$9[1];
                    var str_ind_3 = parse_spaces(match$9[0], end_ind$1);
                    var match$10 = Caml_string.get(str, str_ind_3);
                    var switcher = match$10 - 45 | 0;
                    if (switcher > 12 || switcher < 0) {
                      if (switcher !== 17) {
                        throw Caml_builtin_exceptions.not_found;
                      } else {
                        var s = $$String.sub(str, str_ind$1 - 2 | 0, (str_ind_3 - str_ind$1 | 0) + 3 | 0);
                        match$7 = /* tuple */[
                          str_ind_3 + 1 | 0,
                          /* Break */Block.__(0, [
                              s,
                              width,
                              0
                            ])
                        ];
                      }
                    } else if (switcher === 2 || switcher === 1) {
                      throw Caml_builtin_exceptions.not_found;
                    } else {
                      var match$11 = parse_integer(str_ind_3, end_ind$1);
                      var str_ind_5 = parse_spaces(match$11[0], end_ind$1);
                      if (Caml_string.get(str, str_ind_5) !== /* ">" */62) {
                        throw Caml_builtin_exceptions.not_found;
                      }
                      var s$1 = $$String.sub(str, str_ind$1 - 2 | 0, (str_ind_5 - str_ind$1 | 0) + 3 | 0);
                      match$7 = /* tuple */[
                        str_ind_5 + 1 | 0,
                        /* Break */Block.__(0, [
                            s$1,
                            width,
                            match$11[1]
                          ])
                      ];
                    }
                  }
                  
                }
                catch (raw_exn){
                  var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
                  if (exn === Caml_builtin_exceptions.not_found || exn[0] === Caml_builtin_exceptions.failure) {
                    match$7 = /* tuple */[
                      str_ind$1,
                      /* Break */Block.__(0, [
                          "@;",
                          1,
                          0
                        ])
                    ];
                  } else {
                    throw exn;
                  }
                }
                var next_ind = match$7[0];
                var match$12 = parse_literal(next_ind, next_ind, end_ind$1);
                return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                            match$7[1],
                            match$12[0]
                          ])];
            case 28 : 
                var str_ind$2 = str_ind + 1 | 0;
                var end_ind$2 = end_ind;
                var match$13;
                try {
                  var str_ind_1$1 = parse_spaces(str_ind$2, end_ind$2);
                  var match$14 = Caml_string.get(str, str_ind_1$1);
                  var exit$2 = 0;
                  if (match$14 >= 48) {
                    if (match$14 >= 58) {
                      match$13 = undefined;
                    } else {
                      exit$2 = 1;
                    }
                  } else if (match$14 !== 45) {
                    match$13 = undefined;
                  } else {
                    exit$2 = 1;
                  }
                  if (exit$2 === 1) {
                    var match$15 = parse_integer(str_ind_1$1, end_ind$2);
                    var str_ind_3$1 = parse_spaces(match$15[0], end_ind$2);
                    if (Caml_string.get(str, str_ind_3$1) !== /* ">" */62) {
                      throw Caml_builtin_exceptions.not_found;
                    }
                    var s$2 = $$String.sub(str, str_ind$2 - 2 | 0, (str_ind_3$1 - str_ind$2 | 0) + 3 | 0);
                    match$13 = /* tuple */[
                      str_ind_3$1 + 1 | 0,
                      /* Magic_size */Block.__(1, [
                          s$2,
                          match$15[1]
                        ])
                    ];
                  }
                  
                }
                catch (raw_exn$1){
                  var exn$1 = Caml_js_exceptions.internalToOCamlException(raw_exn$1);
                  if (exn$1 === Caml_builtin_exceptions.not_found || exn$1[0] === Caml_builtin_exceptions.failure) {
                    match$13 = undefined;
                  } else {
                    throw exn$1;
                  }
                }
                if (match$13 !== undefined) {
                  var match$16 = match$13;
                  var next_ind$1 = match$16[0];
                  var match$17 = parse_literal(next_ind$1, next_ind$1, end_ind$2);
                  return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                              match$16[1],
                              match$17[0]
                            ])];
                } else {
                  var match$18 = parse_literal(str_ind$2, str_ind$2, end_ind$2);
                  return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                              /* Scan_indic */Block.__(2, [/* "<" */60]),
                              match$18[0]
                            ])];
                }
            case 1 : 
            case 2 : 
            case 3 : 
            case 4 : 
            case 6 : 
            case 7 : 
            case 8 : 
            case 9 : 
            case 10 : 
            case 11 : 
            case 13 : 
            case 15 : 
            case 16 : 
            case 17 : 
            case 18 : 
            case 19 : 
            case 20 : 
            case 21 : 
            case 22 : 
            case 23 : 
            case 24 : 
            case 25 : 
            case 26 : 
            case 29 : 
            case 30 : 
                exit = 1;
                break;
            case 31 : 
                var beg_ind$6 = str_ind + 1 | 0;
                var match$19 = parse_literal(beg_ind$6, beg_ind$6, end_ind);
                return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                            /* FFlush */2,
                            match$19[0]
                          ])];
            case 32 : 
                var beg_ind$7 = str_ind + 1 | 0;
                var match$20 = parse_literal(beg_ind$7, beg_ind$7, end_ind);
                return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                            /* Escaped_at */5,
                            match$20[0]
                          ])];
            
          }
        } else {
          exit = 1;
        }
      } else {
        var beg_ind$8 = str_ind + 1 | 0;
        var match$21 = parse_literal(beg_ind$8, beg_ind$8, end_ind);
        return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                    /* Force_newline */3,
                    match$21[0]
                  ])];
      }
      if (exit === 1) {
        var beg_ind$9 = str_ind + 1 | 0;
        var match$22 = parse_literal(beg_ind$9, beg_ind$9, end_ind);
        return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                    /* Scan_indic */Block.__(2, [c]),
                    match$22[0]
                  ])];
      }
      
    }
  };
  var add_literal = function (lit_start, str_ind, fmt) {
    var size = str_ind - lit_start | 0;
    if (size !== 0) {
      if (size !== 1) {
        return /* Fmt_EBB */[/* String_literal */Block.__(11, [
                    $$String.sub(str, lit_start, size),
                    fmt
                  ])];
      } else {
        return /* Fmt_EBB */[/* Char_literal */Block.__(12, [
                    Caml_string.get(str, lit_start),
                    fmt
                  ])];
      }
    } else {
      return /* Fmt_EBB */[fmt];
    }
  };
  var parse_spaces = function (_str_ind, end_ind) {
    while(true) {
      var str_ind = _str_ind;
      if (str_ind === end_ind) {
        invalid_format_message(end_ind, "unexpected end of format");
      }
      if (Caml_string.get(str, str_ind) === /* " " */32) {
        _str_ind = str_ind + 1 | 0;
        continue ;
      } else {
        return str_ind;
      }
    };
  };
  var parse_integer = function (str_ind, end_ind) {
    if (str_ind === end_ind) {
      invalid_format_message(end_ind, "unexpected end of format");
    }
    var match = Caml_string.get(str, str_ind);
    if (match >= 48) {
      if (match >= 58) {
        throw [
              Caml_builtin_exceptions.assert_failure,
              /* tuple */[
                "camlinternalFormat.ml",
                2624,
                11
              ]
            ];
      } else {
        return parse_positive(str_ind, end_ind, 0);
      }
    } else if (match !== 45) {
      throw [
            Caml_builtin_exceptions.assert_failure,
            /* tuple */[
              "camlinternalFormat.ml",
              2624,
              11
            ]
          ];
    } else {
      if ((str_ind + 1 | 0) === end_ind) {
        invalid_format_message(end_ind, "unexpected end of format");
      }
      var c = Caml_string.get(str, str_ind + 1 | 0);
      if (c > 57 || c < 48) {
        return expected_character(str_ind + 1 | 0, "digit", c);
      } else {
        var match$1 = parse_positive(str_ind + 1 | 0, end_ind, 0);
        return /* tuple */[
                match$1[0],
                -match$1[1] | 0
              ];
      }
    }
  };
  var compute_float_conv = function (pct_ind, str_ind, _plus, _space, symb) {
    while(true) {
      var space = _space;
      var plus = _plus;
      if (plus) {
        if (space) {
          if (legacy_behavior$1) {
            _space = false;
            continue ;
          } else {
            return incompatible_flag(pct_ind, str_ind, /* " " */32, "'+'");
          }
        } else {
          var exit = 0;
          if (symb >= 72) {
            switch (symb) {
              case 101 : 
                  return /* Float_pe */4;
              case 102 : 
                  return /* Float_pf */1;
              case 103 : 
                  return /* Float_pg */10;
              default:
                exit = 1;
            }
          } else if (symb >= 69) {
            switch (symb - 69 | 0) {
              case 0 : 
                  return /* Float_pE */7;
              case 1 : 
                  exit = 1;
                  break;
              case 2 : 
                  return /* Float_pG */13;
              
            }
          } else {
            exit = 1;
          }
          if (exit === 1) {
            if (legacy_behavior$1) {
              _plus = false;
              continue ;
            } else {
              return incompatible_flag(pct_ind, str_ind, symb, "'+'");
            }
          }
          
        }
      } else if (space) {
        var exit$1 = 0;
        if (symb >= 72) {
          switch (symb) {
            case 101 : 
                return /* Float_se */5;
            case 102 : 
                return /* Float_sf */2;
            case 103 : 
                return /* Float_sg */11;
            default:
              exit$1 = 1;
          }
        } else if (symb >= 69) {
          switch (symb - 69 | 0) {
            case 0 : 
                return /* Float_sE */8;
            case 1 : 
                exit$1 = 1;
                break;
            case 2 : 
                return /* Float_sG */14;
            
          }
        } else {
          exit$1 = 1;
        }
        if (exit$1 === 1) {
          if (legacy_behavior$1) {
            _space = false;
            continue ;
          } else {
            return incompatible_flag(pct_ind, str_ind, symb, "' '");
          }
        }
        
      } else if (symb >= 72) {
        switch (symb) {
          case 101 : 
              return /* Float_e */3;
          case 102 : 
              return /* Float_f */0;
          case 103 : 
              return /* Float_g */9;
          default:
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  /* tuple */[
                    "camlinternalFormat.ml",
                    2747,
                    25
                  ]
                ];
        }
      } else if (symb >= 69) {
        switch (symb - 69 | 0) {
          case 0 : 
              return /* Float_E */6;
          case 1 : 
              return /* Float_F */15;
          case 2 : 
              return /* Float_G */12;
          
        }
      } else {
        throw [
              Caml_builtin_exceptions.assert_failure,
              /* tuple */[
                "camlinternalFormat.ml",
                2747,
                25
              ]
            ];
      }
    };
  };
  var search_subformat_end = function (_str_ind, end_ind, c) {
    while(true) {
      var str_ind = _str_ind;
      if (str_ind === end_ind) {
        Curry._3(failwith_message(/* Format */[
                  /* String_literal */Block.__(11, [
                      "invalid format ",
                      /* Caml_string */Block.__(3, [
                          /* No_padding */0,
                          /* String_literal */Block.__(11, [
                              ": unclosed sub-format, expected \"",
                              /* Char_literal */Block.__(12, [
                                  /* "%" */37,
                                  /* Char */Block.__(0, [/* String_literal */Block.__(11, [
                                          "\" at character number ",
                                          /* Int */Block.__(4, [
                                              /* Int_d */0,
                                              /* No_padding */0,
                                              /* No_precision */0,
                                              /* End_of_format */0
                                            ])
                                        ])])
                                ])
                            ])
                        ])
                    ]),
                  "invalid format %S: unclosed sub-format, expected \"%%%c\" at character number %d"
                ]), str, c, end_ind);
      }
      var match = Caml_string.get(str, str_ind);
      if (match !== 37) {
        _str_ind = str_ind + 1 | 0;
        continue ;
      } else {
        if ((str_ind + 1 | 0) === end_ind) {
          invalid_format_message(end_ind, "unexpected end of format");
        }
        if (Caml_string.get(str, str_ind + 1 | 0) === c) {
          return str_ind;
        } else {
          var match$1 = Caml_string.get(str, str_ind + 1 | 0);
          var exit = 0;
          if (match$1 >= 95) {
            if (match$1 >= 123) {
              if (match$1 >= 126) {
                exit = 1;
              } else {
                switch (match$1 - 123 | 0) {
                  case 0 : 
                      var sub_end = search_subformat_end(str_ind + 2 | 0, end_ind, /* "}" */125);
                      _str_ind = sub_end + 2 | 0;
                      continue ;
                  case 1 : 
                      exit = 1;
                      break;
                  case 2 : 
                      return expected_character(str_ind + 1 | 0, "character ')'", /* "}" */125);
                  
                }
              }
            } else if (match$1 >= 96) {
              exit = 1;
            } else {
              if ((str_ind + 2 | 0) === end_ind) {
                invalid_format_message(end_ind, "unexpected end of format");
              }
              var match$2 = Caml_string.get(str, str_ind + 2 | 0);
              if (match$2 !== 40) {
                if (match$2 !== 123) {
                  _str_ind = str_ind + 3 | 0;
                  continue ;
                } else {
                  var sub_end$1 = search_subformat_end(str_ind + 3 | 0, end_ind, /* "}" */125);
                  _str_ind = sub_end$1 + 2 | 0;
                  continue ;
                }
              } else {
                var sub_end$2 = search_subformat_end(str_ind + 3 | 0, end_ind, /* ")" */41);
                _str_ind = sub_end$2 + 2 | 0;
                continue ;
              }
            }
          } else if (match$1 !== 40) {
            if (match$1 !== 41) {
              exit = 1;
            } else {
              return expected_character(str_ind + 1 | 0, "character '}'", /* ")" */41);
            }
          } else {
            var sub_end$3 = search_subformat_end(str_ind + 2 | 0, end_ind, /* ")" */41);
            _str_ind = sub_end$3 + 2 | 0;
            continue ;
          }
          if (exit === 1) {
            _str_ind = str_ind + 2 | 0;
            continue ;
          }
          
        }
      }
    };
  };
  var parse_conversion = function (pct_ind, str_ind, end_ind, plus, sharp, space, ign, pad, prec, padprec, symb) {
    var plus_used = false;
    var sharp_used = false;
    var space_used = false;
    var ign_used = /* record */[/* contents */false];
    var pad_used = false;
    var prec_used = /* record */[/* contents */false];
    var check_no_0 = function (symb, pad) {
      if (typeof pad === "number") {
        return pad;
      } else if (pad.tag) {
        if (pad[0] >= 2) {
          if (legacy_behavior$1) {
            return /* Arg_padding */Block.__(1, [/* Right */1]);
          } else {
            return incompatible_flag(pct_ind, str_ind, symb, "0");
          }
        } else {
          return pad;
        }
      } else if (pad[0] >= 2) {
        if (legacy_behavior$1) {
          return /* Lit_padding */Block.__(0, [
                    /* Right */1,
                    pad[1]
                  ]);
        } else {
          return incompatible_flag(pct_ind, str_ind, symb, "0");
        }
      } else {
        return pad;
      }
    };
    var opt_of_pad = function (c, pad) {
      if (typeof pad === "number") {
        return undefined;
      } else if (pad.tag) {
        return incompatible_flag(pct_ind, str_ind, c, "'*'");
      } else {
        switch (pad[0]) {
          case 0 : 
              if (legacy_behavior$1) {
                return pad[1];
              } else {
                return incompatible_flag(pct_ind, str_ind, c, "'-'");
              }
          case 1 : 
              return pad[1];
          case 2 : 
              if (legacy_behavior$1) {
                return pad[1];
              } else {
                return incompatible_flag(pct_ind, str_ind, c, "'0'");
              }
          
        }
      }
    };
    var get_prec_opt = function (param) {
      prec_used[0] = true;
      if (typeof prec === "number") {
        if (prec !== 0) {
          return incompatible_flag(pct_ind, str_ind, /* "_" */95, "'*'");
        } else {
          return undefined;
        }
      } else {
        return prec[0];
      }
    };
    var fmt_result;
    var exit = 0;
    var exit$1 = 0;
    var exit$2 = 0;
    if (symb >= 124) {
      exit$1 = 6;
    } else {
      switch (symb) {
        case 33 : 
            var match = parse_literal(str_ind, str_ind, end_ind);
            fmt_result = /* Fmt_EBB */[/* Flush */Block.__(10, [match[0]])];
            break;
        case 40 : 
            var sub_end = search_subformat_end(str_ind, end_ind, /* ")" */41);
            var beg_ind = sub_end + 2 | 0;
            var match$1 = parse_literal(beg_ind, beg_ind, end_ind);
            var fmt_rest = match$1[0];
            var match$2 = parse_literal(str_ind, str_ind, sub_end);
            var sub_fmtty = fmtty_of_fmt(match$2[0]);
            if (ign_used[0] = true, ign) {
              pad_used = true;
              var ignored_000 = opt_of_pad(/* "_" */95, pad);
              var ignored = /* Ignored_format_subst */Block.__(8, [
                  ignored_000,
                  sub_fmtty
                ]);
              fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                    ignored,
                    fmt_rest
                  ])];
            } else {
              pad_used = true;
              fmt_result = /* Fmt_EBB */[/* Format_subst */Block.__(14, [
                    opt_of_pad(/* "(" */40, pad),
                    sub_fmtty,
                    fmt_rest
                  ])];
            }
            break;
        case 44 : 
            fmt_result = parse_literal(str_ind, str_ind, end_ind);
            break;
        case 37 : 
        case 64 : 
            exit$1 = 4;
            break;
        case 67 : 
            var match$3 = parse_literal(str_ind, str_ind, end_ind);
            var fmt_rest$1 = match$3[0];
            fmt_result = (ign_used[0] = true, ign) ? /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                    /* Ignored_caml_char */1,
                    fmt_rest$1
                  ])] : /* Fmt_EBB */[/* Caml_char */Block.__(1, [fmt_rest$1])];
            break;
        case 78 : 
            var match$4 = parse_literal(str_ind, str_ind, end_ind);
            var fmt_rest$2 = match$4[0];
            if (ign_used[0] = true, ign) {
              var ignored$1 = /* Ignored_scan_get_counter */Block.__(10, [/* Token_counter */2]);
              fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                    ignored$1,
                    fmt_rest$2
                  ])];
            } else {
              fmt_result = /* Fmt_EBB */[/* Scan_get_counter */Block.__(21, [
                    /* Token_counter */2,
                    fmt_rest$2
                  ])];
            }
            break;
        case 83 : 
            pad_used = true;
            var pad$1 = check_no_0(symb, padprec);
            var match$5 = parse_literal(str_ind, str_ind, end_ind);
            var fmt_rest$3 = match$5[0];
            if (ign_used[0] = true, ign) {
              pad_used = true;
              var ignored$2 = /* Ignored_caml_string */Block.__(1, [opt_of_pad(/* "_" */95, padprec)]);
              fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                    ignored$2,
                    fmt_rest$3
                  ])];
            } else {
              var match$6 = make_padding_fmt_ebb(pad$1, fmt_rest$3);
              fmt_result = /* Fmt_EBB */[/* Caml_string */Block.__(3, [
                    match$6[0],
                    match$6[1]
                  ])];
            }
            break;
        case 91 : 
            var match$7 = parse_char_set(str_ind, end_ind);
            var char_set = match$7[1];
            var next_ind = match$7[0];
            var match$8 = parse_literal(next_ind, next_ind, end_ind);
            var fmt_rest$4 = match$8[0];
            if (ign_used[0] = true, ign) {
              pad_used = true;
              var ignored_000$1 = opt_of_pad(/* "_" */95, pad);
              var ignored$3 = /* Ignored_scan_char_set */Block.__(9, [
                  ignored_000$1,
                  char_set
                ]);
              fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                    ignored$3,
                    fmt_rest$4
                  ])];
            } else {
              pad_used = true;
              fmt_result = /* Fmt_EBB */[/* Scan_char_set */Block.__(20, [
                    opt_of_pad(/* "[" */91, pad),
                    char_set,
                    fmt_rest$4
                  ])];
            }
            break;
        case 32 : 
        case 35 : 
        case 43 : 
        case 45 : 
        case 95 : 
            exit$1 = 5;
            break;
        case 97 : 
            var match$9 = parse_literal(str_ind, str_ind, end_ind);
            fmt_result = /* Fmt_EBB */[/* Alpha */Block.__(15, [match$9[0]])];
            break;
        case 66 : 
        case 98 : 
            exit$1 = 3;
            break;
        case 99 : 
            var char_format = function (fmt_rest) {
              if (ign_used[0] = true, ign) {
                return /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                            /* Ignored_char */0,
                            fmt_rest
                          ])];
              } else {
                return /* Fmt_EBB */[/* Char */Block.__(0, [fmt_rest])];
              }
            };
            var scan_format = function (fmt_rest) {
              if (ign_used[0] = true, ign) {
                return /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                            /* Ignored_scan_next_char */4,
                            fmt_rest
                          ])];
              } else {
                return /* Fmt_EBB */[/* Scan_next_char */Block.__(22, [fmt_rest])];
              }
            };
            var match$10 = parse_literal(str_ind, str_ind, end_ind);
            var fmt_rest$5 = match$10[0];
            pad_used = true;
            var match$11 = opt_of_pad(/* "c" */99, pad);
            fmt_result = match$11 !== undefined ? (
                match$11 !== 0 ? (
                    legacy_behavior$1 ? char_format(fmt_rest$5) : invalid_format_message(str_ind, "non-zero widths are unsupported for %c conversions")
                  ) : scan_format(fmt_rest$5)
              ) : char_format(fmt_rest$5);
            break;
        case 69 : 
        case 70 : 
        case 71 : 
        case 101 : 
        case 102 : 
        case 103 : 
            exit$1 = 2;
            break;
        case 76 : 
        case 108 : 
        case 110 : 
            exit$2 = 8;
            break;
        case 114 : 
            var match$12 = parse_literal(str_ind, str_ind, end_ind);
            var fmt_rest$6 = match$12[0];
            fmt_result = (ign_used[0] = true, ign) ? /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                    /* Ignored_reader */3,
                    fmt_rest$6
                  ])] : /* Fmt_EBB */[/* Reader */Block.__(19, [fmt_rest$6])];
            break;
        case 115 : 
            pad_used = true;
            var pad$2 = check_no_0(symb, padprec);
            var match$13 = parse_literal(str_ind, str_ind, end_ind);
            var fmt_rest$7 = match$13[0];
            if (ign_used[0] = true, ign) {
              pad_used = true;
              var ignored$4 = /* Ignored_string */Block.__(0, [opt_of_pad(/* "_" */95, padprec)]);
              fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                    ignored$4,
                    fmt_rest$7
                  ])];
            } else {
              var match$14 = make_padding_fmt_ebb(pad$2, fmt_rest$7);
              fmt_result = /* Fmt_EBB */[/* String */Block.__(2, [
                    match$14[0],
                    match$14[1]
                  ])];
            }
            break;
        case 116 : 
            var match$15 = parse_literal(str_ind, str_ind, end_ind);
            fmt_result = /* Fmt_EBB */[/* Theta */Block.__(16, [match$15[0]])];
            break;
        case 88 : 
        case 100 : 
        case 105 : 
        case 111 : 
        case 117 : 
        case 120 : 
            exit$2 = 7;
            break;
        case 0 : 
        case 1 : 
        case 2 : 
        case 3 : 
        case 4 : 
        case 5 : 
        case 6 : 
        case 7 : 
        case 8 : 
        case 9 : 
        case 10 : 
        case 11 : 
        case 12 : 
        case 13 : 
        case 14 : 
        case 15 : 
        case 16 : 
        case 17 : 
        case 18 : 
        case 19 : 
        case 20 : 
        case 21 : 
        case 22 : 
        case 23 : 
        case 24 : 
        case 25 : 
        case 26 : 
        case 27 : 
        case 28 : 
        case 29 : 
        case 30 : 
        case 31 : 
        case 34 : 
        case 36 : 
        case 38 : 
        case 39 : 
        case 41 : 
        case 42 : 
        case 46 : 
        case 47 : 
        case 48 : 
        case 49 : 
        case 50 : 
        case 51 : 
        case 52 : 
        case 53 : 
        case 54 : 
        case 55 : 
        case 56 : 
        case 57 : 
        case 58 : 
        case 59 : 
        case 60 : 
        case 61 : 
        case 62 : 
        case 63 : 
        case 65 : 
        case 68 : 
        case 72 : 
        case 73 : 
        case 74 : 
        case 75 : 
        case 77 : 
        case 79 : 
        case 80 : 
        case 81 : 
        case 82 : 
        case 84 : 
        case 85 : 
        case 86 : 
        case 87 : 
        case 89 : 
        case 90 : 
        case 92 : 
        case 93 : 
        case 94 : 
        case 96 : 
        case 104 : 
        case 106 : 
        case 107 : 
        case 109 : 
        case 112 : 
        case 113 : 
        case 118 : 
        case 119 : 
        case 121 : 
        case 122 : 
            exit$1 = 6;
            break;
        case 123 : 
            var sub_end$1 = search_subformat_end(str_ind, end_ind, /* "}" */125);
            var match$16 = parse_literal(str_ind, str_ind, sub_end$1);
            var beg_ind$1 = sub_end$1 + 2 | 0;
            var match$17 = parse_literal(beg_ind$1, beg_ind$1, end_ind);
            var fmt_rest$8 = match$17[0];
            var sub_fmtty$1 = fmtty_of_fmt(match$16[0]);
            if (ign_used[0] = true, ign) {
              pad_used = true;
              var ignored_000$2 = opt_of_pad(/* "_" */95, pad);
              var ignored$5 = /* Ignored_format_arg */Block.__(7, [
                  ignored_000$2,
                  sub_fmtty$1
                ]);
              fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                    ignored$5,
                    fmt_rest$8
                  ])];
            } else {
              pad_used = true;
              fmt_result = /* Fmt_EBB */[/* Format_arg */Block.__(13, [
                    opt_of_pad(/* "{" */123, pad),
                    sub_fmtty$1,
                    fmt_rest$8
                  ])];
            }
            break;
        
      }
    }
    switch (exit$2) {
      case 7 : 
          plus_used = true;
          sharp_used = true;
          space_used = true;
          var iconv = compute_int_conv(pct_ind, str_ind, plus, sharp, space, symb);
          var match$18 = parse_literal(str_ind, str_ind, end_ind);
          var fmt_rest$9 = match$18[0];
          if (ign_used[0] = true, ign) {
            pad_used = true;
            var ignored_001 = opt_of_pad(/* "_" */95, pad);
            var ignored$6 = /* Ignored_int */Block.__(2, [
                iconv,
                ignored_001
              ]);
            fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                  ignored$6,
                  fmt_rest$9
                ])];
          } else {
            pad_used = true;
            prec_used[0] = true;
            var pad$3;
            var exit$3 = 0;
            if (typeof prec === "number" && prec === 0) {
              pad$3 = pad;
            } else {
              exit$3 = 9;
            }
            if (exit$3 === 9) {
              pad$3 = typeof pad === "number" ? /* No_padding */0 : (
                  pad.tag ? (
                      pad[0] >= 2 ? (
                          legacy_behavior$1 ? /* Arg_padding */Block.__(1, [/* Right */1]) : incompatible_flag(pct_ind, str_ind, /* "0" */48, "precision")
                        ) : pad
                    ) : (
                      pad[0] >= 2 ? (
                          legacy_behavior$1 ? /* Lit_padding */Block.__(0, [
                                /* Right */1,
                                pad[1]
                              ]) : incompatible_flag(pct_ind, str_ind, /* "0" */48, "precision")
                        ) : pad
                    )
                );
            }
            var match$19 = make_padprec_fmt_ebb(pad$3, (prec_used[0] = true, prec), fmt_rest$9);
            fmt_result = /* Fmt_EBB */[/* Int */Block.__(4, [
                  iconv,
                  match$19[0],
                  match$19[1],
                  match$19[2]
                ])];
          }
          break;
      case 8 : 
          if (str_ind === end_ind || !is_int_base(Caml_string.get(str, str_ind))) {
            var match$20 = parse_literal(str_ind, str_ind, end_ind);
            var fmt_rest$10 = match$20[0];
            var counter = counter_of_char(symb);
            if (ign_used[0] = true, ign) {
              var ignored$7 = /* Ignored_scan_get_counter */Block.__(10, [counter]);
              fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                    ignored$7,
                    fmt_rest$10
                  ])];
            } else {
              fmt_result = /* Fmt_EBB */[/* Scan_get_counter */Block.__(21, [
                    counter,
                    fmt_rest$10
                  ])];
            }
          } else {
            exit$1 = 6;
          }
          break;
      
    }
    switch (exit$1) {
      case 2 : 
          plus_used = true;
          space_used = true;
          var fconv = compute_float_conv(pct_ind, str_ind, plus, space, symb);
          var match$21 = parse_literal(str_ind, str_ind, end_ind);
          var fmt_rest$11 = match$21[0];
          if (ign_used[0] = true, ign) {
            pad_used = true;
            var ignored_000$3 = opt_of_pad(/* "_" */95, pad);
            var ignored_001$1 = get_prec_opt(/* () */0);
            var ignored$8 = /* Ignored_float */Block.__(6, [
                ignored_000$3,
                ignored_001$1
              ]);
            fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                  ignored$8,
                  fmt_rest$11
                ])];
          } else {
            pad_used = true;
            var match$22 = make_padprec_fmt_ebb(pad, (prec_used[0] = true, prec), fmt_rest$11);
            fmt_result = /* Fmt_EBB */[/* Float */Block.__(8, [
                  fconv,
                  match$22[0],
                  match$22[1],
                  match$22[2]
                ])];
          }
          break;
      case 3 : 
          var match$23 = parse_literal(str_ind, str_ind, end_ind);
          var fmt_rest$12 = match$23[0];
          fmt_result = (ign_used[0] = true, ign) ? /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                  /* Ignored_bool */2,
                  fmt_rest$12
                ])] : /* Fmt_EBB */[/* Bool */Block.__(9, [fmt_rest$12])];
          break;
      case 4 : 
          var match$24 = parse_literal(str_ind, str_ind, end_ind);
          fmt_result = /* Fmt_EBB */[/* Char_literal */Block.__(12, [
                symb,
                match$24[0]
              ])];
          break;
      case 5 : 
          fmt_result = Curry._3(failwith_message(/* Format */[
                    /* String_literal */Block.__(11, [
                        "invalid format ",
                        /* Caml_string */Block.__(3, [
                            /* No_padding */0,
                            /* String_literal */Block.__(11, [
                                ": at character number ",
                                /* Int */Block.__(4, [
                                    /* Int_d */0,
                                    /* No_padding */0,
                                    /* No_precision */0,
                                    /* String_literal */Block.__(11, [
                                        ", flag ",
                                        /* Caml_char */Block.__(1, [/* String_literal */Block.__(11, [
                                                " is only allowed after the '",
                                                /* Char_literal */Block.__(12, [
                                                    /* "%" */37,
                                                    /* String_literal */Block.__(11, [
                                                        "', before padding and precision",
                                                        /* End_of_format */0
                                                      ])
                                                  ])
                                              ])])
                                      ])
                                  ])
                              ])
                          ])
                      ]),
                    "invalid format %S: at character number %d, flag %C is only allowed after the '%%', before padding and precision"
                  ]), str, pct_ind, symb);
          break;
      case 6 : 
          if (symb >= 108) {
            if (symb >= 111) {
              exit = 1;
            } else {
              switch (symb - 108 | 0) {
                case 0 : 
                    plus_used = true;
                    sharp_used = true;
                    space_used = true;
                    var iconv$1 = compute_int_conv(pct_ind, str_ind + 1 | 0, plus, sharp, space, Caml_string.get(str, str_ind));
                    var beg_ind$2 = str_ind + 1 | 0;
                    var match$25 = parse_literal(beg_ind$2, beg_ind$2, end_ind);
                    var fmt_rest$13 = match$25[0];
                    if (ign_used[0] = true, ign) {
                      pad_used = true;
                      var ignored_001$2 = opt_of_pad(/* "_" */95, pad);
                      var ignored$9 = /* Ignored_int32 */Block.__(3, [
                          iconv$1,
                          ignored_001$2
                        ]);
                      fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                            ignored$9,
                            fmt_rest$13
                          ])];
                    } else {
                      pad_used = true;
                      var match$26 = make_padprec_fmt_ebb(pad, (prec_used[0] = true, prec), fmt_rest$13);
                      fmt_result = /* Fmt_EBB */[/* Int32 */Block.__(5, [
                            iconv$1,
                            match$26[0],
                            match$26[1],
                            match$26[2]
                          ])];
                    }
                    break;
                case 1 : 
                    exit = 1;
                    break;
                case 2 : 
                    plus_used = true;
                    sharp_used = true;
                    space_used = true;
                    var iconv$2 = compute_int_conv(pct_ind, str_ind + 1 | 0, plus, sharp, space, Caml_string.get(str, str_ind));
                    var beg_ind$3 = str_ind + 1 | 0;
                    var match$27 = parse_literal(beg_ind$3, beg_ind$3, end_ind);
                    var fmt_rest$14 = match$27[0];
                    if (ign_used[0] = true, ign) {
                      pad_used = true;
                      var ignored_001$3 = opt_of_pad(/* "_" */95, pad);
                      var ignored$10 = /* Ignored_nativeint */Block.__(4, [
                          iconv$2,
                          ignored_001$3
                        ]);
                      fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                            ignored$10,
                            fmt_rest$14
                          ])];
                    } else {
                      pad_used = true;
                      var match$28 = make_padprec_fmt_ebb(pad, (prec_used[0] = true, prec), fmt_rest$14);
                      fmt_result = /* Fmt_EBB */[/* Nativeint */Block.__(6, [
                            iconv$2,
                            match$28[0],
                            match$28[1],
                            match$28[2]
                          ])];
                    }
                    break;
                
              }
            }
          } else if (symb !== 76) {
            exit = 1;
          } else {
            plus_used = true;
            sharp_used = true;
            space_used = true;
            var iconv$3 = compute_int_conv(pct_ind, str_ind + 1 | 0, plus, sharp, space, Caml_string.get(str, str_ind));
            var beg_ind$4 = str_ind + 1 | 0;
            var match$29 = parse_literal(beg_ind$4, beg_ind$4, end_ind);
            var fmt_rest$15 = match$29[0];
            if (ign_used[0] = true, ign) {
              pad_used = true;
              var ignored_001$4 = opt_of_pad(/* "_" */95, pad);
              var ignored$11 = /* Ignored_int64 */Block.__(5, [
                  iconv$3,
                  ignored_001$4
                ]);
              fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                    ignored$11,
                    fmt_rest$15
                  ])];
            } else {
              pad_used = true;
              var match$30 = make_padprec_fmt_ebb(pad, (prec_used[0] = true, prec), fmt_rest$15);
              fmt_result = /* Fmt_EBB */[/* Int64 */Block.__(7, [
                    iconv$3,
                    match$30[0],
                    match$30[1],
                    match$30[2]
                  ])];
            }
          }
          break;
      
    }
    if (exit === 1) {
      fmt_result = Curry._3(failwith_message(/* Format */[
                /* String_literal */Block.__(11, [
                    "invalid format ",
                    /* Caml_string */Block.__(3, [
                        /* No_padding */0,
                        /* String_literal */Block.__(11, [
                            ": at character number ",
                            /* Int */Block.__(4, [
                                /* Int_d */0,
                                /* No_padding */0,
                                /* No_precision */0,
                                /* String_literal */Block.__(11, [
                                    ", invalid conversion \"",
                                    /* Char_literal */Block.__(12, [
                                        /* "%" */37,
                                        /* Char */Block.__(0, [/* Char_literal */Block.__(12, [
                                                /* "\"" */34,
                                                /* End_of_format */0
                                              ])])
                                      ])
                                  ])
                              ])
                          ])
                      ])
                  ]),
                "invalid format %S: at character number %d, invalid conversion \"%%%c\""
              ]), str, str_ind - 1 | 0, symb);
    }
    if (!legacy_behavior$1) {
      if (!plus_used && plus) {
        incompatible_flag(pct_ind, str_ind, symb, "'+'");
      }
      if (!sharp_used && sharp) {
        incompatible_flag(pct_ind, str_ind, symb, "'#'");
      }
      if (!space_used && space) {
        incompatible_flag(pct_ind, str_ind, symb, "' '");
      }
      if (!pad_used && Caml_obj.caml_notequal(/* Padding_EBB */[pad], /* Padding_EBB */[/* No_padding */0])) {
        incompatible_flag(pct_ind, str_ind, symb, "`padding'");
      }
      if (!prec_used[0] && Caml_obj.caml_notequal(/* Precision_EBB */[prec], /* Precision_EBB */[/* No_precision */0])) {
        incompatible_flag(pct_ind, str_ind, ign ? /* "_" */95 : symb, "`precision'");
      }
      if (ign && plus) {
        incompatible_flag(pct_ind, str_ind, /* "_" */95, "'+'");
      }
      
    }
    if (!ign_used[0] && ign) {
      var exit$4 = 0;
      if (symb >= 38) {
        if (symb !== 44) {
          if (symb !== 64) {
            exit$4 = 1;
          } else if (!legacy_behavior$1) {
            exit$4 = 1;
          }
          
        } else if (!legacy_behavior$1) {
          exit$4 = 1;
        }
        
      } else if (symb !== 33) {
        if (symb >= 37) {
          if (!legacy_behavior$1) {
            exit$4 = 1;
          }
          
        } else {
          exit$4 = 1;
        }
      } else if (!legacy_behavior$1) {
        exit$4 = 1;
      }
      if (exit$4 === 1) {
        incompatible_flag(pct_ind, str_ind, symb, "'_'");
      }
      
    }
    return fmt_result;
  };
  var parse_flags = function (pct_ind, str_ind, end_ind, ign) {
    var zero = /* record */[/* contents */false];
    var minus = /* record */[/* contents */false];
    var plus = /* record */[/* contents */false];
    var space = /* record */[/* contents */false];
    var sharp = /* record */[/* contents */false];
    var set_flag = function (str_ind, flag) {
      if (flag[0] && !legacy_behavior$1) {
        Curry._3(failwith_message(/* Format */[
                  /* String_literal */Block.__(11, [
                      "invalid format ",
                      /* Caml_string */Block.__(3, [
                          /* No_padding */0,
                          /* String_literal */Block.__(11, [
                              ": at character number ",
                              /* Int */Block.__(4, [
                                  /* Int_d */0,
                                  /* No_padding */0,
                                  /* No_precision */0,
                                  /* String_literal */Block.__(11, [
                                      ", duplicate flag ",
                                      /* Caml_char */Block.__(1, [/* End_of_format */0])
                                    ])
                                ])
                            ])
                        ])
                    ]),
                  "invalid format %S: at character number %d, duplicate flag %C"
                ]), str, str_ind, Caml_string.get(str, str_ind));
      }
      flag[0] = true;
      return /* () */0;
    };
    var _str_ind = str_ind;
    while(true) {
      var str_ind$1 = _str_ind;
      if (str_ind$1 === end_ind) {
        invalid_format_message(end_ind, "unexpected end of format");
      }
      var match = Caml_string.get(str, str_ind$1);
      var exit = 0;
      switch (match) {
        case 32 : 
            set_flag(str_ind$1, space);
            _str_ind = str_ind$1 + 1 | 0;
            continue ;
        case 35 : 
            set_flag(str_ind$1, sharp);
            _str_ind = str_ind$1 + 1 | 0;
            continue ;
        case 43 : 
            set_flag(str_ind$1, plus);
            _str_ind = str_ind$1 + 1 | 0;
            continue ;
        case 45 : 
            set_flag(str_ind$1, minus);
            _str_ind = str_ind$1 + 1 | 0;
            continue ;
        case 33 : 
        case 34 : 
        case 36 : 
        case 37 : 
        case 38 : 
        case 39 : 
        case 40 : 
        case 41 : 
        case 42 : 
        case 44 : 
        case 46 : 
        case 47 : 
            exit = 1;
            break;
        case 48 : 
            set_flag(str_ind$1, zero);
            _str_ind = str_ind$1 + 1 | 0;
            continue ;
        default:
          exit = 1;
      }
      if (exit === 1) {
        var pct_ind$1 = pct_ind;
        var str_ind$2 = str_ind$1;
        var end_ind$1 = end_ind;
        var zero$1 = zero[0];
        var minus$1 = minus[0];
        var plus$1 = plus[0];
        var sharp$1 = sharp[0];
        var space$1 = space[0];
        var ign$1 = ign;
        if (str_ind$2 === end_ind$1) {
          invalid_format_message(end_ind$1, "unexpected end of format");
        }
        var padty = zero$1 ? (
            minus$1 ? (
                legacy_behavior$1 ? /* Left */0 : incompatible_flag(pct_ind$1, str_ind$2, /* "-" */45, "0")
              ) : /* Zeros */2
          ) : (
            minus$1 ? /* Left */0 : /* Right */1
          );
        var match$1 = Caml_string.get(str, str_ind$2);
        var exit$1 = 0;
        if (match$1 >= 48) {
          if (match$1 >= 58) {
            exit$1 = 1;
          } else {
            var match$2 = parse_positive(str_ind$2, end_ind$1, 0);
            return parse_after_padding(pct_ind$1, match$2[0], end_ind$1, minus$1, plus$1, sharp$1, space$1, ign$1, /* Lit_padding */Block.__(0, [
                          padty,
                          match$2[1]
                        ]));
          }
        } else if (match$1 !== 42) {
          exit$1 = 1;
        } else {
          return parse_after_padding(pct_ind$1, str_ind$2 + 1 | 0, end_ind$1, minus$1, plus$1, sharp$1, space$1, ign$1, /* Arg_padding */Block.__(1, [padty]));
        }
        if (exit$1 === 1) {
          switch (padty) {
            case 0 : 
                if (!legacy_behavior$1) {
                  invalid_format_without(str_ind$2 - 1 | 0, /* "-" */45, "padding");
                }
                return parse_after_padding(pct_ind$1, str_ind$2, end_ind$1, minus$1, plus$1, sharp$1, space$1, ign$1, /* No_padding */0);
            case 1 : 
                return parse_after_padding(pct_ind$1, str_ind$2, end_ind$1, minus$1, plus$1, sharp$1, space$1, ign$1, /* No_padding */0);
            case 2 : 
                return parse_after_padding(pct_ind$1, str_ind$2, end_ind$1, minus$1, plus$1, sharp$1, space$1, ign$1, /* Lit_padding */Block.__(0, [
                              /* Right */1,
                              0
                            ]));
            
          }
        }
        
      }
      
    };
  };
  var is_int_base = function (symb) {
    switch (symb) {
      case 89 : 
      case 90 : 
      case 91 : 
      case 92 : 
      case 93 : 
      case 94 : 
      case 95 : 
      case 96 : 
      case 97 : 
      case 98 : 
      case 99 : 
      case 101 : 
      case 102 : 
      case 103 : 
      case 104 : 
      case 106 : 
      case 107 : 
      case 108 : 
      case 109 : 
      case 110 : 
      case 112 : 
      case 113 : 
      case 114 : 
      case 115 : 
      case 116 : 
      case 118 : 
      case 119 : 
          return false;
      case 88 : 
      case 100 : 
      case 105 : 
      case 111 : 
      case 117 : 
      case 120 : 
          return true;
      default:
        return false;
    }
  };
  var counter_of_char = function (symb) {
    var exit = 0;
    if (symb >= 108) {
      if (symb >= 111) {
        exit = 1;
      } else {
        switch (symb - 108 | 0) {
          case 0 : 
              return /* Line_counter */0;
          case 1 : 
              exit = 1;
              break;
          case 2 : 
              return /* Char_counter */1;
          
        }
      }
    } else if (symb !== 76) {
      exit = 1;
    } else {
      return /* Token_counter */2;
    }
    if (exit === 1) {
      throw [
            Caml_builtin_exceptions.assert_failure,
            /* tuple */[
              "camlinternalFormat.ml",
              2686,
              34
            ]
          ];
    }
    
  };
  var parse_char_set = function (str_ind, end_ind) {
    if (str_ind === end_ind) {
      invalid_format_message(end_ind, "unexpected end of format");
    }
    var char_set = Bytes.make(32, /* "\000" */0);
    var add_range = function (c, c$prime) {
      for(var i = c; i <= c$prime; ++i){
        add_in_char_set(char_set, Pervasives.char_of_int(i));
      }
      return /* () */0;
    };
    var fail_single_percent = function (str_ind) {
      return Curry._2(failwith_message(/* Format */[
                      /* String_literal */Block.__(11, [
                          "invalid format ",
                          /* Caml_string */Block.__(3, [
                              /* No_padding */0,
                              /* String_literal */Block.__(11, [
                                  ": '",
                                  /* Char_literal */Block.__(12, [
                                      /* "%" */37,
                                      /* String_literal */Block.__(11, [
                                          "' alone is not accepted in character sets, use ",
                                          /* Char_literal */Block.__(12, [
                                              /* "%" */37,
                                              /* Char_literal */Block.__(12, [
                                                  /* "%" */37,
                                                  /* String_literal */Block.__(11, [
                                                      " instead at position ",
                                                      /* Int */Block.__(4, [
                                                          /* Int_d */0,
                                                          /* No_padding */0,
                                                          /* No_precision */0,
                                                          /* Char_literal */Block.__(12, [
                                                              /* "." */46,
                                                              /* End_of_format */0
                                                            ])
                                                        ])
                                                    ])
                                                ])
                                            ])
                                        ])
                                    ])
                                ])
                            ])
                        ]),
                      "invalid format %S: '%%' alone is not accepted in character sets, use %%%% instead at position %d."
                    ]), str, str_ind);
    };
    var parse_char_set_after_char = function (_str_ind, end_ind, _c) {
      while(true) {
        var c = _c;
        var str_ind = _str_ind;
        if (str_ind === end_ind) {
          invalid_format_message(end_ind, "unexpected end of format");
        }
        var c$prime = Caml_string.get(str, str_ind);
        var exit = 0;
        var exit$1 = 0;
        if (c$prime >= 46) {
          if (c$prime !== 64) {
            if (c$prime !== 93) {
              exit = 1;
            } else {
              add_in_char_set(char_set, c);
              return str_ind + 1 | 0;
            }
          } else {
            exit$1 = 2;
          }
        } else if (c$prime !== 37) {
          if (c$prime >= 45) {
            var str_ind$1 = str_ind + 1 | 0;
            var end_ind$1 = end_ind;
            var c$1 = c;
            if (str_ind$1 === end_ind$1) {
              invalid_format_message(end_ind$1, "unexpected end of format");
            }
            var c$prime$1 = Caml_string.get(str, str_ind$1);
            if (c$prime$1 !== 37) {
              if (c$prime$1 !== 93) {
                add_range(c$1, c$prime$1);
                return parse_char_set_content(str_ind$1 + 1 | 0, end_ind$1);
              } else {
                add_in_char_set(char_set, c$1);
                add_in_char_set(char_set, /* "-" */45);
                return str_ind$1 + 1 | 0;
              }
            } else {
              if ((str_ind$1 + 1 | 0) === end_ind$1) {
                invalid_format_message(end_ind$1, "unexpected end of format");
              }
              var c$prime$2 = Caml_string.get(str, str_ind$1 + 1 | 0);
              var exit$2 = 0;
              if (c$prime$2 !== 37 && c$prime$2 !== 64) {
                return fail_single_percent(str_ind$1);
              } else {
                exit$2 = 1;
              }
              if (exit$2 === 1) {
                add_range(c$1, c$prime$2);
                return parse_char_set_content(str_ind$1 + 2 | 0, end_ind$1);
              }
              
            }
          } else {
            exit = 1;
          }
        } else {
          exit$1 = 2;
        }
        if (exit$1 === 2) {
          if (c === /* "%" */37) {
            add_in_char_set(char_set, c$prime);
            return parse_char_set_content(str_ind + 1 | 0, end_ind);
          } else {
            exit = 1;
          }
        }
        if (exit === 1) {
          if (c === /* "%" */37) {
            fail_single_percent(str_ind);
          }
          add_in_char_set(char_set, c);
          _c = c$prime;
          _str_ind = str_ind + 1 | 0;
          continue ;
        }
        
      };
    };
    var parse_char_set_content = function (_str_ind, end_ind) {
      while(true) {
        var str_ind = _str_ind;
        if (str_ind === end_ind) {
          invalid_format_message(end_ind, "unexpected end of format");
        }
        var c = Caml_string.get(str, str_ind);
        if (c !== 45) {
          if (c !== 93) {
            return parse_char_set_after_char(str_ind + 1 | 0, end_ind, c);
          } else {
            return str_ind + 1 | 0;
          }
        } else {
          add_in_char_set(char_set, /* "-" */45);
          _str_ind = str_ind + 1 | 0;
          continue ;
        }
      };
    };
    var parse_char_set_start = function (str_ind, end_ind) {
      if (str_ind === end_ind) {
        invalid_format_message(end_ind, "unexpected end of format");
      }
      var c = Caml_string.get(str, str_ind);
      return parse_char_set_after_char(str_ind + 1 | 0, end_ind, c);
    };
    if (str_ind === end_ind) {
      invalid_format_message(end_ind, "unexpected end of format");
    }
    var match = Caml_string.get(str, str_ind);
    var match$1 = match !== 94 ? /* tuple */[
        str_ind,
        false
      ] : /* tuple */[
        str_ind + 1 | 0,
        true
      ];
    var next_ind = parse_char_set_start(match$1[0], end_ind);
    var char_set$1 = Bytes.to_string(char_set);
    return /* tuple */[
            next_ind,
            match$1[1] ? rev_char_set(char_set$1) : char_set$1
          ];
  };
  var check_open_box = function (fmt) {
    if (typeof fmt === "number" || !(fmt.tag === 11 && typeof fmt[1] === "number")) {
      return /* () */0;
    } else {
      try {
        open_box_of_string(fmt[0]);
        return /* () */0;
      }
      catch (raw_exn){
        var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
        if (exn[0] === Caml_builtin_exceptions.failure) {
          return /* () */0;
        } else {
          throw exn;
        }
      }
    }
  };
  var parse_tag = function (is_open_tag, str_ind, end_ind) {
    try {
      if (str_ind === end_ind) {
        throw Caml_builtin_exceptions.not_found;
      }
      var match = Caml_string.get(str, str_ind);
      if (match !== 60) {
        throw Caml_builtin_exceptions.not_found;
      } else {
        var ind = $$String.index_from(str, str_ind + 1 | 0, /* ">" */62);
        if (ind >= end_ind) {
          throw Caml_builtin_exceptions.not_found;
        }
        var sub_str = $$String.sub(str, str_ind, (ind - str_ind | 0) + 1 | 0);
        var beg_ind = ind + 1 | 0;
        var match$1 = parse_literal(beg_ind, beg_ind, end_ind);
        var match$2 = parse_literal(str_ind, str_ind, ind + 1 | 0);
        var sub_fmt = match$2[0];
        var sub_format = /* Format */[
          sub_fmt,
          sub_str
        ];
        var formatting = is_open_tag ? /* Open_tag */Block.__(0, [sub_format]) : (check_open_box(sub_fmt), /* Open_box */Block.__(1, [sub_format]));
        return /* Fmt_EBB */[/* Formatting_gen */Block.__(18, [
                    formatting,
                    match$1[0]
                  ])];
      }
    }
    catch (exn){
      if (exn === Caml_builtin_exceptions.not_found) {
        var match$3 = parse_literal(str_ind, str_ind, end_ind);
        var sub_format$1 = /* Format */[
          /* End_of_format */0,
          ""
        ];
        var formatting$1 = is_open_tag ? /* Open_tag */Block.__(0, [sub_format$1]) : /* Open_box */Block.__(1, [sub_format$1]);
        return /* Fmt_EBB */[/* Formatting_gen */Block.__(18, [
                    formatting$1,
                    match$3[0]
                  ])];
      } else {
        throw exn;
      }
    }
  };
  return parse_literal(0, 0, str.length);
}

function format_of_string_fmtty(str, fmtty) {
  var match = fmt_ebb_of_string(undefined, str);
  try {
    return /* Format */[
            type_format(match[0], fmtty),
            str
          ];
  }
  catch (exn){
    if (exn === Type_mismatch) {
      return Curry._2(failwith_message(/* Format */[
                      /* String_literal */Block.__(11, [
                          "bad input: format type mismatch between ",
                          /* Caml_string */Block.__(3, [
                              /* No_padding */0,
                              /* String_literal */Block.__(11, [
                                  " and ",
                                  /* Caml_string */Block.__(3, [
                                      /* No_padding */0,
                                      /* End_of_format */0
                                    ])
                                ])
                            ])
                        ]),
                      "bad input: format type mismatch between %S and %S"
                    ]), str, string_of_fmtty(fmtty));
    } else {
      throw exn;
    }
  }
}

function format_of_string_format(str, param) {
  var match = fmt_ebb_of_string(undefined, str);
  try {
    return /* Format */[
            type_format(match[0], fmtty_of_fmt(param[0])),
            str
          ];
  }
  catch (exn){
    if (exn === Type_mismatch) {
      return Curry._2(failwith_message(/* Format */[
                      /* String_literal */Block.__(11, [
                          "bad input: format type mismatch between ",
                          /* Caml_string */Block.__(3, [
                              /* No_padding */0,
                              /* String_literal */Block.__(11, [
                                  " and ",
                                  /* Caml_string */Block.__(3, [
                                      /* No_padding */0,
                                      /* End_of_format */0
                                    ])
                                ])
                            ])
                        ]),
                      "bad input: format type mismatch between %S and %S"
                    ]), str, param[1]);
    } else {
      throw exn;
    }
  }
}

exports.is_in_char_set = is_in_char_set;
exports.rev_char_set = rev_char_set;
exports.create_char_set = create_char_set;
exports.add_in_char_set = add_in_char_set;
exports.freeze_char_set = freeze_char_set;
exports.param_format_of_ignored_format = param_format_of_ignored_format;
exports.make_printf = make_printf;
exports.output_acc = output_acc;
exports.bufput_acc = bufput_acc;
exports.strput_acc = strput_acc;
exports.type_format = type_format;
exports.fmt_ebb_of_string = fmt_ebb_of_string;
exports.format_of_string_fmtty = format_of_string_fmtty;
exports.format_of_string_format = format_of_string_format;
exports.char_of_iconv = char_of_iconv;
exports.string_of_formatting_lit = string_of_formatting_lit;
exports.string_of_formatting_gen = string_of_formatting_gen;
exports.string_of_fmtty = string_of_fmtty;
exports.string_of_fmt = string_of_fmt;
exports.open_box_of_string = open_box_of_string;
exports.symm = symm;
exports.trans = trans;
exports.recast = recast;
/* No side effect */


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var undefinedHeader = /* array */[];

function some(x) {
  if (x === undefined) {
    var block = /* tuple */[
      undefinedHeader,
      0
    ];
    block.tag = 256;
    return block;
  } else if (x !== null && x[0] === undefinedHeader) {
    var nid = x[1] + 1 | 0;
    var block$1 = /* tuple */[
      undefinedHeader,
      nid
    ];
    block$1.tag = 256;
    return block$1;
  } else {
    return x;
  }
}

function nullable_to_opt(x) {
  if (x === null || x === undefined) {
    return undefined;
  } else {
    return some(x);
  }
}

function undefined_to_opt(x) {
  if (x === undefined) {
    return undefined;
  } else {
    return some(x);
  }
}

function null_to_opt(x) {
  if (x === null) {
    return undefined;
  } else {
    return some(x);
  }
}

function valFromOption(x) {
  if (x !== null && x[0] === undefinedHeader) {
    var depth = x[1];
    if (depth === 0) {
      return undefined;
    } else {
      return /* tuple */[
              undefinedHeader,
              depth - 1 | 0
            ];
    }
  } else {
    return x;
  }
}

function option_get(x) {
  if (x === undefined) {
    return undefined;
  } else {
    return valFromOption(x);
  }
}

function option_get_unwrap(x) {
  if (x === undefined) {
    return undefined;
  } else {
    return valFromOption(x)[1];
  }
}

exports.nullable_to_opt = nullable_to_opt;
exports.undefined_to_opt = undefined_to_opt;
exports.null_to_opt = null_to_opt;
exports.valFromOption = valFromOption;
exports.some = some;
exports.option_get = option_get;
exports.option_get_unwrap = option_get_unwrap;
/* No side effect */


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE


var Block = __webpack_require__(5);
var Curry = __webpack_require__(1);
var Printf = __webpack_require__(21);
var Pervasives = __webpack_require__(2);
var Caml_exceptions = __webpack_require__(8);
var Caml_builtin_exceptions = __webpack_require__(0);

var $$Error = Caml_exceptions.create("Parser-AiProject.MenhirBasics.Error");

function _menhir_run18(_menhir_env, _menhir_stack) {
  var _menhir_env$1 = _menhir_discard(_menhir_env);
  var _tok = _menhir_env$1[/* _menhir_token */2];
  if (typeof _tok === "number") {
    switch (_tok) {
      case 7 : 
          return _menhir_run5(_menhir_env$1, _menhir_stack, /* MenhirState18 */11);
      case 9 : 
          return _menhir_run15(_menhir_env$1, _menhir_stack, /* MenhirState18 */11);
      default:
        if (_menhir_env$1[/* _menhir_error */3]) {
          throw [
                Caml_builtin_exceptions.assert_failure,
                /* tuple */[
                  "parser.ml",
                  100,
                  8
                ]
              ];
        }
        _menhir_env$1[/* _menhir_error */3] = true;
        return _menhir_errorcase(_menhir_env$1, _menhir_stack, /* MenhirState18 */11);
    }
  } else if (_tok.tag) {
    return _menhir_run7(_menhir_env$1, _menhir_stack, /* MenhirState18 */11, _tok[0]);
  } else {
    return _menhir_run4(_menhir_env$1, _menhir_stack, /* MenhirState18 */11, _tok[0]);
  }
}

function _menhir_run6(__menhir_env, __menhir_stack, __menhir_s) {
  while(true) {
    var _menhir_s = __menhir_s;
    var _menhir_stack = __menhir_stack;
    var _menhir_env = __menhir_env;
    var _menhir_stack$1 = /* tuple */[
      _menhir_stack,
      _menhir_s
    ];
    var _menhir_env$1 = _menhir_discard(_menhir_env);
    var _tok = _menhir_env$1[/* _menhir_token */2];
    if (typeof _tok === "number") {
      switch (_tok) {
        case 7 : 
            return _menhir_run5(_menhir_env$1, _menhir_stack$1, /* MenhirState6 */15);
        case 9 : 
            __menhir_s = /* MenhirState6 */15;
            __menhir_stack = _menhir_stack$1;
            __menhir_env = _menhir_env$1;
            continue ;
        default:
          if (_menhir_env$1[/* _menhir_error */3]) {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  /* tuple */[
                    "parser.ml",
                    804,
                    8
                  ]
                ];
          }
          _menhir_env$1[/* _menhir_error */3] = true;
          return _menhir_errorcase(_menhir_env$1, _menhir_stack$1, /* MenhirState6 */15);
      }
    } else if (_tok.tag) {
      return _menhir_run7(_menhir_env$1, _menhir_stack$1, /* MenhirState6 */15, _tok[0]);
    } else {
      return _menhir_run4(_menhir_env$1, _menhir_stack$1, /* MenhirState6 */15, _tok[0]);
    }
  };
}

function _menhir_run7(_menhir_env, _menhir_stack, _menhir_s, _v) {
  var _menhir_env$1 = _menhir_discard(_menhir_env);
  var _v$1 = /* Var */Block.__(1, [_v]);
  return _menhir_goto_aexpr(_menhir_env$1, _menhir_stack, _menhir_s, _v$1);
}

function _menhir_discard(_menhir_env) {
  var lexer = _menhir_env[/* _menhir_lexer */0];
  var lexbuf = _menhir_env[/* _menhir_lexbuf */1];
  var _tok = Curry._1(lexer, lexbuf);
  return /* record */[
          /* _menhir_lexer */lexer,
          /* _menhir_lexbuf */lexbuf,
          /* _menhir_token */_tok,
          /* _menhir_error */false
        ];
}

function _menhir_run4(_menhir_env, _menhir_stack, _menhir_s, _v) {
  var _menhir_env$1 = _menhir_discard(_menhir_env);
  var _v$1 = /* Num */Block.__(0, [_v]);
  return _menhir_goto_aexpr(_menhir_env$1, _menhir_stack, _menhir_s, _v$1);
}

function _menhir_errorcase(_menhir_env, __menhir_stack, __menhir_s) {
  while(true) {
    var _menhir_s = __menhir_s;
    var _menhir_stack = __menhir_stack;
    if (_menhir_s >= 19) {
      throw $$Error;
    } else {
      __menhir_s = _menhir_stack[1];
      __menhir_stack = _menhir_stack[0];
      continue ;
    }
  };
}

function _menhir_run5(__menhir_env, __menhir_stack, __menhir_s) {
  while(true) {
    var _menhir_s = __menhir_s;
    var _menhir_stack = __menhir_stack;
    var _menhir_env = __menhir_env;
    var _menhir_stack$1 = /* tuple */[
      _menhir_stack,
      _menhir_s
    ];
    var _menhir_env$1 = _menhir_discard(_menhir_env);
    var _tok = _menhir_env$1[/* _menhir_token */2];
    if (typeof _tok === "number") {
      switch (_tok) {
        case 7 : 
            __menhir_s = /* MenhirState5 */16;
            __menhir_stack = _menhir_stack$1;
            __menhir_env = _menhir_env$1;
            continue ;
        case 9 : 
            return _menhir_run6(_menhir_env$1, _menhir_stack$1, /* MenhirState5 */16);
        default:
          if (_menhir_env$1[/* _menhir_error */3]) {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  /* tuple */[
                    "parser.ml",
                    785,
                    8
                  ]
                ];
          }
          _menhir_env$1[/* _menhir_error */3] = true;
          return _menhir_errorcase(_menhir_env$1, _menhir_stack$1, /* MenhirState5 */16);
      }
    } else if (_tok.tag) {
      return _menhir_run7(_menhir_env$1, _menhir_stack$1, /* MenhirState5 */16, _tok[0]);
    } else {
      return _menhir_run4(_menhir_env$1, _menhir_stack$1, /* MenhirState5 */16, _tok[0]);
    }
  };
}

function _menhir_reduce22(_menhir_env, _menhir_stack, _menhir_s) {
  return _menhir_goto_stmtlist(_menhir_env, _menhir_stack, _menhir_s, /* [] */0);
}

function _menhir_run40(_menhir_env, _menhir_stack, _menhir_s, _v) {
  var _menhir_stack$1 = /* tuple */[
    _menhir_stack,
    _menhir_s,
    _v
  ];
  var _menhir_env$1 = _menhir_discard(_menhir_env);
  var _tok = _menhir_env$1[/* _menhir_token */2];
  var exit = 0;
  if (typeof _tok === "number" && _tok >= 17) {
    var _menhir_env$2 = _menhir_discard(_menhir_env$1);
    var _tok$1 = _menhir_env$2[/* _menhir_token */2];
    if (typeof _tok$1 === "number") {
      switch (_tok$1) {
        case 7 : 
            return _menhir_run5(_menhir_env$2, _menhir_stack$1, /* MenhirState41 */1);
        case 9 : 
            return _menhir_run6(_menhir_env$2, _menhir_stack$1, /* MenhirState41 */1);
        default:
          if (_menhir_env$2[/* _menhir_error */3]) {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  /* tuple */[
                    "parser.ml",
                    1170,
                    12
                  ]
                ];
          }
          _menhir_env$2[/* _menhir_error */3] = true;
          return _menhir_errorcase(_menhir_env$2, _menhir_stack$1, /* MenhirState41 */1);
      }
    } else if (_tok$1.tag) {
      return _menhir_run7(_menhir_env$2, _menhir_stack$1, /* MenhirState41 */1, _tok$1[0]);
    } else {
      return _menhir_run4(_menhir_env$2, _menhir_stack$1, /* MenhirState41 */1, _tok$1[0]);
    }
  } else {
    exit = 1;
  }
  if (exit === 1) {
    if (_menhir_env$1[/* _menhir_error */3]) {
      throw [
            Caml_builtin_exceptions.assert_failure,
            /* tuple */[
              "parser.ml",
              1174,
              8
            ]
          ];
    }
    _menhir_env$1[/* _menhir_error */3] = true;
    return _menhir_errorcase(_menhir_env$1, _menhir_stack, _menhir_s);
  }
  
}

function _menhir_run33(_menhir_env, _menhir_stack, _menhir_s) {
  var _menhir_stack$1 = /* tuple */[
    _menhir_stack,
    _menhir_s
  ];
  var _menhir_env$1 = _menhir_discard(_menhir_env);
  return _menhir_reduce22(_menhir_env$1, _menhir_stack$1, /* MenhirState33 */5);
}

function _menhir_goto_stmtlist(_menhir_env, _menhir_stack, _menhir_s, _v) {
  var _menhir_stack$1 = /* tuple */[
    _menhir_stack,
    _menhir_s,
    _v
  ];
  if (_menhir_s !== 5) {
    if (_menhir_s >= 19) {
      if (_menhir_env[/* _menhir_error */3]) {
        throw [
              Caml_builtin_exceptions.assert_failure,
              /* tuple */[
                "parser.ml",
                1220,
                8
              ]
            ];
      }
      var _tok = _menhir_env[/* _menhir_token */2];
      var exit = 0;
      if (typeof _tok === "number") {
        switch (_tok) {
          case 0 : 
              return _menhir_run2(_menhir_env, _menhir_stack$1, /* MenhirState1 */18);
          case 1 : 
              return _menhir_run32(_menhir_env, _menhir_stack$1, /* MenhirState1 */18);
          case 10 : 
              return _menhir_run33(_menhir_env, _menhir_stack$1, /* MenhirState1 */18);
          case 11 : 
              return _menhir_run36(_menhir_env, _menhir_stack$1, /* MenhirState1 */18);
          case 14 : 
              return /* Prog */Block.__(0, [
                        _v,
                        /* () */0
                      ]);
          case 16 : 
              return _menhir_run44(_menhir_env, _menhir_stack$1, /* MenhirState1 */18);
          default:
            exit = 1;
        }
      } else if (_tok.tag === 1) {
        return _menhir_run40(_menhir_env, _menhir_stack$1, /* MenhirState1 */18, _tok[0]);
      } else {
        exit = 1;
      }
      if (exit === 1) {
        if (_menhir_env[/* _menhir_error */3]) {
          throw [
                Caml_builtin_exceptions.assert_failure,
                /* tuple */[
                  "parser.ml",
                  1263,
                  12
                ]
              ];
        }
        _menhir_env[/* _menhir_error */3] = true;
        return _menhir_errorcase(_menhir_env, _menhir_stack$1, /* MenhirState1 */18);
      }
      
    } else {
      return _menhir_fail(/* () */0);
    }
  } else {
    if (_menhir_env[/* _menhir_error */3]) {
      throw [
            Caml_builtin_exceptions.assert_failure,
            /* tuple */[
              "parser.ml",
              1268,
              8
            ]
          ];
    }
    var _tok$1 = _menhir_env[/* _menhir_token */2];
    var exit$1 = 0;
    if (typeof _tok$1 === "number") {
      switch (_tok$1) {
        case 0 : 
            return _menhir_run2(_menhir_env, _menhir_stack$1, /* MenhirState34 */4);
        case 1 : 
            return _menhir_run32(_menhir_env, _menhir_stack$1, /* MenhirState34 */4);
        case 3 : 
            var _menhir_env$1 = _menhir_discard(_menhir_env);
            var _v$1 = /* Stmtlist */Block.__(7, [
                _v,
                /* () */0
              ]);
            return _menhir_goto_stmt(_menhir_env$1, _menhir_stack[0], _menhir_stack[1], _v$1);
        case 10 : 
            return _menhir_run33(_menhir_env, _menhir_stack$1, /* MenhirState34 */4);
        case 11 : 
            return _menhir_run36(_menhir_env, _menhir_stack$1, /* MenhirState34 */4);
        case 16 : 
            return _menhir_run44(_menhir_env, _menhir_stack$1, /* MenhirState34 */4);
        default:
          exit$1 = 1;
      }
    } else if (_tok$1.tag === 1) {
      return _menhir_run40(_menhir_env, _menhir_stack$1, /* MenhirState34 */4, _tok$1[0]);
    } else {
      exit$1 = 1;
    }
    if (exit$1 === 1) {
      if (_menhir_env[/* _menhir_error */3]) {
        throw [
              Caml_builtin_exceptions.assert_failure,
              /* tuple */[
                "parser.ml",
                1306,
                12
              ]
            ];
      }
      _menhir_env[/* _menhir_error */3] = true;
      return _menhir_errorcase(_menhir_env, _menhir_stack$1, /* MenhirState34 */4);
    }
    
  }
}

function _menhir_fail(param) {
  Printf.fprintf(Pervasives.stderr, /* Format */[
        /* String_literal */Block.__(11, [
            "Internal failure -- please contact the parser generator's developers.\n",
            /* Flush */Block.__(10, [/* End_of_format */0])
          ]),
        "Internal failure -- please contact the parser generator's developers.\n%!"
      ]);
  throw [
        Caml_builtin_exceptions.assert_failure,
        /* tuple */[
          "parser.ml",
          835,
          4
        ]
      ];
}

function _menhir_run32(_menhir_env, _menhir_stack, _menhir_s) {
  var _menhir_env$1 = _menhir_discard(_menhir_env);
  return _menhir_goto_stmt(_menhir_env$1, _menhir_stack, _menhir_s, /* Emptystmt */Block.__(2, [/* () */0]));
}

function _menhir_goto_stmt(_menhir_env, __menhir_stack, __menhir_s, __v) {
  while(true) {
    var _v = __v;
    var _menhir_s = __menhir_s;
    var _menhir_stack = __menhir_stack;
    var _menhir_stack$1 = /* tuple */[
      _menhir_stack,
      _menhir_s,
      _v
    ];
    var exit = 0;
    switch (_menhir_s) {
      case 0 : 
          var match = _menhir_stack[0];
          var match$1 = match[0];
          var _v_000 = match[2];
          var _v_001 = _menhir_stack[2];
          var _v$1 = /* Ifelse */Block.__(4, [
              _v_000,
              _v_001,
              _v,
              /* () */0
            ]);
          __v = _v$1;
          __menhir_s = match$1[1];
          __menhir_stack = match$1[0];
          continue ;
      case 2 : 
          if (_menhir_env[/* _menhir_error */3]) {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  /* tuple */[
                    "parser.ml",
                    847,
                    8
                  ]
                ];
          }
          var _tok = _menhir_env[/* _menhir_token */2];
          var exit$1 = 0;
          if (typeof _tok === "number") {
            switch (_tok) {
              case 15 : 
                  var _menhir_env$1 = _menhir_discard(_menhir_env);
                  var _tok$1 = _menhir_env$1[/* _menhir_token */2];
                  var exit$2 = 0;
                  if (typeof _tok$1 === "number") {
                    switch (_tok$1) {
                      case 0 : 
                          return _menhir_run2(_menhir_env$1, _menhir_stack$1, /* MenhirState47 */0);
                      case 1 : 
                          return _menhir_run32(_menhir_env$1, _menhir_stack$1, /* MenhirState47 */0);
                      case 10 : 
                          return _menhir_run33(_menhir_env$1, _menhir_stack$1, /* MenhirState47 */0);
                      case 11 : 
                          return _menhir_run36(_menhir_env$1, _menhir_stack$1, /* MenhirState47 */0);
                      case 16 : 
                          return _menhir_run44(_menhir_env$1, _menhir_stack$1, /* MenhirState47 */0);
                      default:
                        exit$2 = 4;
                    }
                  } else if (_tok$1.tag === 1) {
                    return _menhir_run40(_menhir_env$1, _menhir_stack$1, /* MenhirState47 */0, _tok$1[0]);
                  } else {
                    exit$2 = 4;
                  }
                  if (exit$2 === 4) {
                    if (_menhir_env$1[/* _menhir_error */3]) {
                      throw [
                            Caml_builtin_exceptions.assert_failure,
                            /* tuple */[
                              "parser.ml",
                              868,
                              16
                            ]
                          ];
                    }
                    _menhir_env$1[/* _menhir_error */3] = true;
                    return _menhir_errorcase(_menhir_env$1, _menhir_stack$1, /* MenhirState47 */0);
                  }
                  break;
              case 0 : 
              case 1 : 
              case 3 : 
              case 10 : 
              case 11 : 
              case 14 : 
              case 16 : 
                  exit$1 = 3;
                  break;
              default:
                exit$1 = 2;
            }
          } else {
            exit$1 = _tok.tag === 1 ? 3 : 2;
          }
          switch (exit$1) {
            case 2 : 
                if (_menhir_env[/* _menhir_error */3]) {
                  throw [
                        Caml_builtin_exceptions.assert_failure,
                        /* tuple */[
                          "parser.ml",
                          896,
                          12
                        ]
                      ];
                }
                _menhir_env[/* _menhir_error */3] = true;
                return _menhir_errorcase(_menhir_env, _menhir_stack, _menhir_s);
            case 3 : 
                var match$2 = _menhir_stack[0];
                var _v_000$1 = _menhir_stack[2];
                var _v$2 = /* If */Block.__(3, [
                    _v_000$1,
                    _v,
                    /* () */0
                  ]);
                __v = _v$2;
                __menhir_s = match$2[1];
                __menhir_stack = match$2[0];
                continue ;
            
          }
          break;
      case 6 : 
          var match$3 = _menhir_stack[0];
          var _v_000$2 = _menhir_stack[2];
          var _v$3 = /* While */Block.__(5, [
              _v_000$2,
              _v,
              /* () */0
            ]);
          __v = _v$3;
          __menhir_s = match$3[1];
          __menhir_stack = match$3[0];
          continue ;
      case 4 : 
      case 18 : 
          exit = 1;
          break;
      case 1 : 
      case 3 : 
      case 5 : 
      case 7 : 
      case 8 : 
      case 9 : 
      case 10 : 
      case 11 : 
      case 12 : 
      case 13 : 
      case 14 : 
      case 15 : 
      case 16 : 
      case 17 : 
      case 19 : 
          return _menhir_fail(/* () */0);
      
    }
    if (exit === 1) {
      var _v_001$1 = _menhir_stack[2];
      var _v$4 = /* :: */[
        _v,
        _v_001$1
      ];
      return _menhir_goto_stmtlist(_menhir_env, _menhir_stack[0], _menhir_stack[1], _v$4);
    }
    
  };
}

function _menhir_run44(_menhir_env, _menhir_stack, _menhir_s) {
  var _menhir_env$1 = _menhir_discard(_menhir_env);
  var _tok = _menhir_env$1[/* _menhir_token */2];
  var exit = 0;
  if (typeof _tok === "number" && _tok === 1) {
    var _menhir_env$2 = _menhir_discard(_menhir_env$1);
    return _menhir_goto_stmt(_menhir_env$2, _menhir_stack, _menhir_s, /* Break */Block.__(6, [/* () */0]));
  } else {
    exit = 1;
  }
  if (exit === 1) {
    if (_menhir_env$1[/* _menhir_error */3]) {
      throw [
            Caml_builtin_exceptions.assert_failure,
            /* tuple */[
              "parser.ml",
              1204,
              8
            ]
          ];
    }
    _menhir_env$1[/* _menhir_error */3] = true;
    return _menhir_errorcase(_menhir_env$1, _menhir_stack, _menhir_s);
  }
  
}

function _menhir_run36(_menhir_env, _menhir_stack, _menhir_s) {
  var _menhir_stack$1 = /* tuple */[
    _menhir_stack,
    _menhir_s
  ];
  var _menhir_env$1 = _menhir_discard(_menhir_env);
  var _tok = _menhir_env$1[/* _menhir_token */2];
  var exit = 0;
  if (typeof _tok === "number" && _tok === 9) {
    var _menhir_env$2 = _menhir_discard(_menhir_env$1);
    var _tok$1 = _menhir_env$2[/* _menhir_token */2];
    if (typeof _tok$1 === "number") {
      switch (_tok$1) {
        case 7 : 
            return _menhir_run5(_menhir_env$2, _menhir_stack$1, /* MenhirState37 */3);
        case 9 : 
            return _menhir_run15(_menhir_env$2, _menhir_stack$1, /* MenhirState37 */3);
        default:
          if (_menhir_env$2[/* _menhir_error */3]) {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  /* tuple */[
                    "parser.ml",
                    1136,
                    12
                  ]
                ];
          }
          _menhir_env$2[/* _menhir_error */3] = true;
          return _menhir_errorcase(_menhir_env$2, _menhir_stack$1, /* MenhirState37 */3);
      }
    } else if (_tok$1.tag) {
      return _menhir_run7(_menhir_env$2, _menhir_stack$1, /* MenhirState37 */3, _tok$1[0]);
    } else {
      return _menhir_run4(_menhir_env$2, _menhir_stack$1, /* MenhirState37 */3, _tok$1[0]);
    }
  } else {
    exit = 1;
  }
  if (exit === 1) {
    if (_menhir_env$1[/* _menhir_error */3]) {
      throw [
            Caml_builtin_exceptions.assert_failure,
            /* tuple */[
              "parser.ml",
              1140,
              8
            ]
          ];
    }
    _menhir_env$1[/* _menhir_error */3] = true;
    return _menhir_errorcase(_menhir_env$1, _menhir_stack, _menhir_s);
  }
  
}

function _menhir_run2(_menhir_env, _menhir_stack, _menhir_s) {
  var _menhir_stack$1 = /* tuple */[
    _menhir_stack,
    _menhir_s
  ];
  var _menhir_env$1 = _menhir_discard(_menhir_env);
  var _tok = _menhir_env$1[/* _menhir_token */2];
  var exit = 0;
  if (typeof _tok === "number" && _tok === 9) {
    var _menhir_env$2 = _menhir_discard(_menhir_env$1);
    var _tok$1 = _menhir_env$2[/* _menhir_token */2];
    if (typeof _tok$1 === "number") {
      switch (_tok$1) {
        case 7 : 
            return _menhir_run5(_menhir_env$2, _menhir_stack$1, /* MenhirState3 */17);
        case 9 : 
            return _menhir_run15(_menhir_env$2, _menhir_stack$1, /* MenhirState3 */17);
        default:
          if (_menhir_env$2[/* _menhir_error */3]) {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  /* tuple */[
                    "parser.ml",
                    1084,
                    12
                  ]
                ];
          }
          _menhir_env$2[/* _menhir_error */3] = true;
          return _menhir_errorcase(_menhir_env$2, _menhir_stack$1, /* MenhirState3 */17);
      }
    } else if (_tok$1.tag) {
      return _menhir_run7(_menhir_env$2, _menhir_stack$1, /* MenhirState3 */17, _tok$1[0]);
    } else {
      return _menhir_run4(_menhir_env$2, _menhir_stack$1, /* MenhirState3 */17, _tok$1[0]);
    }
  } else {
    exit = 1;
  }
  if (exit === 1) {
    if (_menhir_env$1[/* _menhir_error */3]) {
      throw [
            Caml_builtin_exceptions.assert_failure,
            /* tuple */[
              "parser.ml",
              1088,
              8
            ]
          ];
    }
    _menhir_env$1[/* _menhir_error */3] = true;
    return _menhir_errorcase(_menhir_env$1, _menhir_stack, _menhir_s);
  }
  
}

function _menhir_goto_aexpr(_menhir_env, __menhir_stack, __menhir_s, __v) {
  while(true) {
    var _v = __v;
    var _menhir_s = __menhir_s;
    var _menhir_stack = __menhir_stack;
    var _menhir_stack$1 = /* tuple */[
      _menhir_stack,
      _menhir_s,
      _v
    ];
    var exit = 0;
    switch (_menhir_s) {
      case 1 : 
          if (_menhir_env[/* _menhir_error */3]) {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  /* tuple */[
                    "parser.ml",
                    686,
                    8
                  ]
                ];
          }
          var _tok = _menhir_env[/* _menhir_token */2];
          var exit$1 = 0;
          if (typeof _tok === "number" && _tok < 8) {
            switch (_tok) {
              case 1 : 
                  var _menhir_env$1 = _menhir_discard(_menhir_env);
                  var _v_000 = _menhir_stack[2];
                  var _v$1 = /* Assign */Block.__(1, [
                      _v_000,
                      _v,
                      /* () */0
                    ]);
                  return _menhir_goto_stmt(_menhir_env$1, _menhir_stack[0], _menhir_stack[1], _v$1);
              case 4 : 
                  return _menhir_run10(_menhir_env, _menhir_stack$1);
              case 0 : 
              case 2 : 
              case 3 : 
              case 5 : 
              case 6 : 
                  exit$1 = 2;
                  break;
              case 7 : 
                  return _menhir_run12(_menhir_env, _menhir_stack$1);
              
            }
          } else {
            exit$1 = 2;
          }
          if (exit$1 === 2) {
            if (_menhir_env[/* _menhir_error */3]) {
              throw [
                    Caml_builtin_exceptions.assert_failure,
                    /* tuple */[
                      "parser.ml",
                      719,
                      12
                    ]
                  ];
            }
            _menhir_env[/* _menhir_error */3] = true;
            return _menhir_errorcase(_menhir_env, _menhir_stack, _menhir_s);
          }
          break;
      case 7 : 
          if (_menhir_env[/* _menhir_error */3]) {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  /* tuple */[
                    "parser.ml",
                    624,
                    8
                  ]
                ];
          }
          var _tok$1 = _menhir_env[/* _menhir_token */2];
          var exit$2 = 0;
          if (typeof _tok$1 === "number") {
            switch (_tok$1) {
              case 4 : 
                  return _menhir_run10(_menhir_env, _menhir_stack$1);
              case 2 : 
              case 6 : 
                  exit$2 = 3;
                  break;
              case 7 : 
                  return _menhir_run12(_menhir_env, _menhir_stack$1);
              case 0 : 
              case 1 : 
              case 3 : 
              case 5 : 
              case 8 : 
              case 9 : 
              case 10 : 
              case 11 : 
              case 12 : 
              case 13 : 
              case 14 : 
              case 15 : 
              case 16 : 
              case 17 : 
                  exit$2 = 2;
                  break;
              
            }
          } else {
            exit$2 = 2;
          }
          switch (exit$2) {
            case 2 : 
                if (_menhir_env[/* _menhir_error */3]) {
                  throw [
                        Caml_builtin_exceptions.assert_failure,
                        /* tuple */[
                          "parser.ml",
                          654,
                          12
                        ]
                      ];
                }
                _menhir_env[/* _menhir_error */3] = true;
                return _menhir_errorcase(_menhir_env, _menhir_stack, _menhir_s);
            case 3 : 
                var _v_000$1 = _menhir_stack[2];
                var _v$2 = /* Eq */Block.__(2, [
                    _v_000$1,
                    _v
                  ]);
                return _menhir_goto_bexpr(_menhir_env, _menhir_stack[0], _menhir_stack[1], _v$2);
            
          }
          break;
      case 8 : 
          if (_menhir_env[/* _menhir_error */3]) {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  /* tuple */[
                    "parser.ml",
                    587,
                    8
                  ]
                ];
          }
          var _tok$2 = _menhir_env[/* _menhir_token */2];
          var exit$3 = 0;
          if (typeof _tok$2 === "number") {
            switch (_tok$2) {
              case 4 : 
                  return _menhir_run10(_menhir_env, _menhir_stack$1);
              case 2 : 
              case 6 : 
                  exit$3 = 3;
                  break;
              case 7 : 
                  return _menhir_run12(_menhir_env, _menhir_stack$1);
              case 0 : 
              case 1 : 
              case 3 : 
              case 5 : 
              case 8 : 
              case 9 : 
              case 10 : 
              case 11 : 
              case 12 : 
              case 13 : 
              case 14 : 
              case 15 : 
              case 16 : 
              case 17 : 
                  exit$3 = 2;
                  break;
              
            }
          } else {
            exit$3 = 2;
          }
          switch (exit$3) {
            case 2 : 
                if (_menhir_env[/* _menhir_error */3]) {
                  throw [
                        Caml_builtin_exceptions.assert_failure,
                        /* tuple */[
                          "parser.ml",
                          617,
                          12
                        ]
                      ];
                }
                _menhir_env[/* _menhir_error */3] = true;
                return _menhir_errorcase(_menhir_env, _menhir_stack, _menhir_s);
            case 3 : 
                var _v_000$2 = _menhir_stack[2];
                var _v$3 = /* Gt */Block.__(1, [
                    _v_000$2,
                    _v
                  ]);
                return _menhir_goto_bexpr(_menhir_env, _menhir_stack[0], _menhir_stack[1], _v$3);
            
          }
          break;
      case 9 : 
          if (_menhir_env[/* _menhir_error */3]) {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  /* tuple */[
                    "parser.ml",
                    550,
                    8
                  ]
                ];
          }
          var _tok$3 = _menhir_env[/* _menhir_token */2];
          var exit$4 = 0;
          if (typeof _tok$3 === "number") {
            switch (_tok$3) {
              case 4 : 
                  return _menhir_run10(_menhir_env, _menhir_stack$1);
              case 2 : 
              case 6 : 
                  exit$4 = 3;
                  break;
              case 7 : 
                  return _menhir_run12(_menhir_env, _menhir_stack$1);
              case 0 : 
              case 1 : 
              case 3 : 
              case 5 : 
              case 8 : 
              case 9 : 
              case 10 : 
              case 11 : 
              case 12 : 
              case 13 : 
              case 14 : 
              case 15 : 
              case 16 : 
              case 17 : 
                  exit$4 = 2;
                  break;
              
            }
          } else {
            exit$4 = 2;
          }
          switch (exit$4) {
            case 2 : 
                if (_menhir_env[/* _menhir_error */3]) {
                  throw [
                        Caml_builtin_exceptions.assert_failure,
                        /* tuple */[
                          "parser.ml",
                          580,
                          12
                        ]
                      ];
                }
                _menhir_env[/* _menhir_error */3] = true;
                return _menhir_errorcase(_menhir_env, _menhir_stack, _menhir_s);
            case 3 : 
                var _v_000$3 = _menhir_stack[2];
                var _v$4 = /* Lt */Block.__(0, [
                    _v_000$3,
                    _v
                  ]);
                return _menhir_goto_bexpr(_menhir_env, _menhir_stack[0], _menhir_stack[1], _v$4);
            
          }
          break;
      case 10 : 
          if (_menhir_env[/* _menhir_error */3]) {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  /* tuple */[
                    "parser.ml",
                    513,
                    8
                  ]
                ];
          }
          var _tok$4 = _menhir_env[/* _menhir_token */2];
          var exit$5 = 0;
          if (typeof _tok$4 === "number") {
            switch (_tok$4) {
              case 4 : 
                  return _menhir_run10(_menhir_env, _menhir_stack$1);
              case 2 : 
              case 6 : 
                  exit$5 = 3;
                  break;
              case 7 : 
                  return _menhir_run12(_menhir_env, _menhir_stack$1);
              case 0 : 
              case 1 : 
              case 3 : 
              case 5 : 
              case 8 : 
              case 9 : 
              case 10 : 
              case 11 : 
              case 12 : 
              case 13 : 
              case 14 : 
              case 15 : 
              case 16 : 
              case 17 : 
                  exit$5 = 2;
                  break;
              
            }
          } else {
            exit$5 = 2;
          }
          switch (exit$5) {
            case 2 : 
                if (_menhir_env[/* _menhir_error */3]) {
                  throw [
                        Caml_builtin_exceptions.assert_failure,
                        /* tuple */[
                          "parser.ml",
                          543,
                          12
                        ]
                      ];
                }
                _menhir_env[/* _menhir_error */3] = true;
                return _menhir_errorcase(_menhir_env, _menhir_stack, _menhir_s);
            case 3 : 
                var _v_000$4 = _menhir_stack[2];
                var _v$5 = /* Neq */Block.__(3, [
                    _v_000$4,
                    _v
                  ]);
                return _menhir_goto_bexpr(_menhir_env, _menhir_stack[0], _menhir_stack[1], _v$5);
            
          }
          break;
      case 12 : 
          if (_menhir_env[/* _menhir_error */3]) {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  /* tuple */[
                    "parser.ml",
                    661,
                    8
                  ]
                ];
          }
          var _tok$5 = _menhir_env[/* _menhir_token */2];
          var exit$6 = 0;
          if (typeof _tok$5 === "number") {
            switch (_tok$5) {
              case 2 : 
                  return _menhir_run9(_menhir_env, _menhir_stack$1);
              case 4 : 
                  return _menhir_run10(_menhir_env, _menhir_stack$1);
              case 5 : 
                  return _menhir_run21(_menhir_env, _menhir_stack$1);
              case 7 : 
                  return _menhir_run12(_menhir_env, _menhir_stack$1);
              case 8 : 
                  return _menhir_run23(_menhir_env, _menhir_stack$1);
              case 12 : 
                  return _menhir_run25(_menhir_env, _menhir_stack$1);
              case 13 : 
                  return _menhir_run27(_menhir_env, _menhir_stack$1);
              case 0 : 
              case 1 : 
              case 3 : 
              case 6 : 
              case 9 : 
              case 10 : 
              case 11 : 
              case 14 : 
              case 15 : 
              case 16 : 
              case 17 : 
                  exit$6 = 2;
                  break;
              
            }
          } else {
            exit$6 = 2;
          }
          if (exit$6 === 2) {
            if (_menhir_env[/* _menhir_error */3]) {
              throw [
                    Caml_builtin_exceptions.assert_failure,
                    /* tuple */[
                      "parser.ml",
                      679,
                      12
                    ]
                  ];
            }
            _menhir_env[/* _menhir_error */3] = true;
            return _menhir_errorcase(_menhir_env, _menhir_stack, _menhir_s);
          }
          break;
      case 13 : 
          var _v_000$5 = _menhir_stack[2];
          var _v$6 = /* Minus */Block.__(2, [
              _v_000$5,
              _v
            ]);
          __v = _v$6;
          __menhir_s = _menhir_stack[1];
          __menhir_stack = _menhir_stack[0];
          continue ;
      case 14 : 
          var _v_000$6 = _menhir_stack[2];
          var _v$7 = /* Plus */Block.__(3, [
              _v_000$6,
              _v
            ]);
          __v = _v$7;
          __menhir_s = _menhir_stack[1];
          __menhir_stack = _menhir_stack[0];
          continue ;
      case 15 : 
          if (_menhir_env[/* _menhir_error */3]) {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  /* tuple */[
                    "parser.ml",
                    408,
                    8
                  ]
                ];
          }
          var _tok$6 = _menhir_env[/* _menhir_token */2];
          var exit$7 = 0;
          if (typeof _tok$6 === "number" && _tok$6 < 8) {
            switch (_tok$6) {
              case 2 : 
                  return _menhir_run9(_menhir_env, _menhir_stack$1);
              case 4 : 
                  return _menhir_run10(_menhir_env, _menhir_stack$1);
              case 0 : 
              case 1 : 
              case 3 : 
              case 5 : 
              case 6 : 
                  exit$7 = 2;
                  break;
              case 7 : 
                  return _menhir_run12(_menhir_env, _menhir_stack$1);
              
            }
          } else {
            exit$7 = 2;
          }
          if (exit$7 === 2) {
            if (_menhir_env[/* _menhir_error */3]) {
              throw [
                    Caml_builtin_exceptions.assert_failure,
                    /* tuple */[
                      "parser.ml",
                      418,
                      12
                    ]
                  ];
            }
            _menhir_env[/* _menhir_error */3] = true;
            return _menhir_errorcase(_menhir_env, _menhir_stack, _menhir_s);
          }
          break;
      case 16 : 
          var _v_000$7 = /* Num */Block.__(0, [0]);
          var _v$8 = /* Minus */Block.__(2, [
              _v_000$7,
              _v
            ]);
          __v = _v$8;
          __menhir_s = _menhir_stack[1];
          __menhir_stack = _menhir_stack[0];
          continue ;
      case 3 : 
      case 11 : 
      case 17 : 
          exit = 1;
          break;
      case 0 : 
      case 2 : 
      case 4 : 
      case 5 : 
      case 6 : 
      case 18 : 
      case 19 : 
          return _menhir_fail(/* () */0);
      
    }
    if (exit === 1) {
      if (_menhir_env[/* _menhir_error */3]) {
        throw [
              Caml_builtin_exceptions.assert_failure,
              /* tuple */[
                "parser.ml",
                490,
                8
              ]
            ];
      }
      var _tok$7 = _menhir_env[/* _menhir_token */2];
      var exit$8 = 0;
      if (typeof _tok$7 === "number") {
        switch (_tok$7) {
          case 4 : 
              return _menhir_run10(_menhir_env, _menhir_stack$1);
          case 5 : 
              return _menhir_run21(_menhir_env, _menhir_stack$1);
          case 7 : 
              return _menhir_run12(_menhir_env, _menhir_stack$1);
          case 8 : 
              return _menhir_run23(_menhir_env, _menhir_stack$1);
          case 12 : 
              return _menhir_run25(_menhir_env, _menhir_stack$1);
          case 13 : 
              return _menhir_run27(_menhir_env, _menhir_stack$1);
          case 0 : 
          case 1 : 
          case 2 : 
          case 3 : 
          case 6 : 
          case 9 : 
          case 10 : 
          case 11 : 
          case 14 : 
          case 15 : 
          case 16 : 
          case 17 : 
              exit$8 = 2;
              break;
          
        }
      } else {
        exit$8 = 2;
      }
      if (exit$8 === 2) {
        if (_menhir_env[/* _menhir_error */3]) {
          throw [
                Caml_builtin_exceptions.assert_failure,
                /* tuple */[
                  "parser.ml",
                  506,
                  12
                ]
              ];
        }
        _menhir_env[/* _menhir_error */3] = true;
        return _menhir_errorcase(_menhir_env, _menhir_stack, _menhir_s);
      }
      
    }
    
  };
}

function _menhir_goto_bexpr(__menhir_env, __menhir_stack, __menhir_s, __v) {
  while(true) {
    var _v = __v;
    var _menhir_s = __menhir_s;
    var _menhir_stack = __menhir_stack;
    var _menhir_env = __menhir_env;
    var _menhir_stack$1 = /* tuple */[
      _menhir_stack,
      _menhir_s,
      _v
    ];
    switch (_menhir_s) {
      case 3 : 
          if (_menhir_env[/* _menhir_error */3]) {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  /* tuple */[
                    "parser.ml",
                    205,
                    8
                  ]
                ];
          }
          var _tok = _menhir_env[/* _menhir_token */2];
          var exit = 0;
          if (typeof _tok === "number") {
            if (_tok !== 2) {
              if (_tok !== 6) {
                exit = 1;
              } else {
                return _menhir_run18(_menhir_env, _menhir_stack$1);
              }
            } else {
              var _menhir_env$1 = _menhir_discard(_menhir_env);
              var _tok$1 = _menhir_env$1[/* _menhir_token */2];
              var exit$1 = 0;
              if (typeof _tok$1 === "number") {
                switch (_tok$1) {
                  case 0 : 
                      return _menhir_run2(_menhir_env$1, _menhir_stack$1, /* MenhirState39 */2);
                  case 1 : 
                      return _menhir_run32(_menhir_env$1, _menhir_stack$1, /* MenhirState39 */2);
                  case 10 : 
                      return _menhir_run33(_menhir_env$1, _menhir_stack$1, /* MenhirState39 */2);
                  case 11 : 
                      return _menhir_run36(_menhir_env$1, _menhir_stack$1, /* MenhirState39 */2);
                  case 16 : 
                      return _menhir_run44(_menhir_env$1, _menhir_stack$1, /* MenhirState39 */2);
                  default:
                    exit$1 = 2;
                }
              } else if (_tok$1.tag === 1) {
                return _menhir_run40(_menhir_env$1, _menhir_stack$1, /* MenhirState39 */2, _tok$1[0]);
              } else {
                exit$1 = 2;
              }
              if (exit$1 === 2) {
                if (_menhir_env$1[/* _menhir_error */3]) {
                  throw [
                        Caml_builtin_exceptions.assert_failure,
                        /* tuple */[
                          "parser.ml",
                          228,
                          16
                        ]
                      ];
                }
                _menhir_env$1[/* _menhir_error */3] = true;
                return _menhir_errorcase(_menhir_env$1, _menhir_stack$1, /* MenhirState39 */2);
              }
              
            }
          } else {
            exit = 1;
          }
          if (exit === 1) {
            if (_menhir_env[/* _menhir_error */3]) {
              throw [
                    Caml_builtin_exceptions.assert_failure,
                    /* tuple */[
                      "parser.ml",
                      232,
                      12
                    ]
                  ];
            }
            _menhir_env[/* _menhir_error */3] = true;
            return _menhir_errorcase(_menhir_env, _menhir_stack, _menhir_s);
          }
          break;
      case 11 : 
          var _v_000 = _menhir_stack[2];
          var _v$1 = /* Nand */Block.__(4, [
              _v_000,
              _v
            ]);
          __v = _v$1;
          __menhir_s = _menhir_stack[1];
          __menhir_stack = _menhir_stack[0];
          continue ;
      case 12 : 
          if (_menhir_env[/* _menhir_error */3]) {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  /* tuple */[
                    "parser.ml",
                    114,
                    8
                  ]
                ];
          }
          var _tok$2 = _menhir_env[/* _menhir_token */2];
          var exit$2 = 0;
          if (typeof _tok$2 === "number") {
            if (_tok$2 !== 2) {
              if (_tok$2 !== 6) {
                exit$2 = 1;
              } else {
                return _menhir_run18(_menhir_env, _menhir_stack$1);
              }
            } else {
              var _menhir_env$2 = _menhir_discard(_menhir_env);
              __menhir_s = _menhir_stack[1];
              __menhir_stack = _menhir_stack[0];
              __menhir_env = _menhir_env$2;
              continue ;
            }
          } else {
            exit$2 = 1;
          }
          if (exit$2 === 1) {
            if (_menhir_env[/* _menhir_error */3]) {
              throw [
                    Caml_builtin_exceptions.assert_failure,
                    /* tuple */[
                      "parser.ml",
                      141,
                      12
                    ]
                  ];
            }
            _menhir_env[/* _menhir_error */3] = true;
            return _menhir_errorcase(_menhir_env, _menhir_stack, _menhir_s);
          }
          break;
      case 17 : 
          if (_menhir_env[/* _menhir_error */3]) {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  /* tuple */[
                    "parser.ml",
                    171,
                    8
                  ]
                ];
          }
          var _tok$3 = _menhir_env[/* _menhir_token */2];
          var exit$3 = 0;
          if (typeof _tok$3 === "number") {
            if (_tok$3 !== 2) {
              if (_tok$3 !== 6) {
                exit$3 = 1;
              } else {
                return _menhir_run18(_menhir_env, _menhir_stack$1);
              }
            } else {
              var _menhir_env$3 = _menhir_discard(_menhir_env);
              var _tok$4 = _menhir_env$3[/* _menhir_token */2];
              var exit$4 = 0;
              if (typeof _tok$4 === "number") {
                switch (_tok$4) {
                  case 0 : 
                      return _menhir_run2(_menhir_env$3, _menhir_stack$1, /* MenhirState31 */6);
                  case 1 : 
                      return _menhir_run32(_menhir_env$3, _menhir_stack$1, /* MenhirState31 */6);
                  case 10 : 
                      return _menhir_run33(_menhir_env$3, _menhir_stack$1, /* MenhirState31 */6);
                  case 11 : 
                      return _menhir_run36(_menhir_env$3, _menhir_stack$1, /* MenhirState31 */6);
                  case 16 : 
                      return _menhir_run44(_menhir_env$3, _menhir_stack$1, /* MenhirState31 */6);
                  default:
                    exit$4 = 2;
                }
              } else if (_tok$4.tag === 1) {
                return _menhir_run40(_menhir_env$3, _menhir_stack$1, /* MenhirState31 */6, _tok$4[0]);
              } else {
                exit$4 = 2;
              }
              if (exit$4 === 2) {
                if (_menhir_env$3[/* _menhir_error */3]) {
                  throw [
                        Caml_builtin_exceptions.assert_failure,
                        /* tuple */[
                          "parser.ml",
                          194,
                          16
                        ]
                      ];
                }
                _menhir_env$3[/* _menhir_error */3] = true;
                return _menhir_errorcase(_menhir_env$3, _menhir_stack$1, /* MenhirState31 */6);
              }
              
            }
          } else {
            exit$3 = 1;
          }
          if (exit$3 === 1) {
            if (_menhir_env[/* _menhir_error */3]) {
              throw [
                    Caml_builtin_exceptions.assert_failure,
                    /* tuple */[
                      "parser.ml",
                      198,
                      12
                    ]
                  ];
            }
            _menhir_env[/* _menhir_error */3] = true;
            return _menhir_errorcase(_menhir_env, _menhir_stack, _menhir_s);
          }
          break;
      case 0 : 
      case 1 : 
      case 2 : 
      case 4 : 
      case 5 : 
      case 6 : 
      case 7 : 
      case 8 : 
      case 9 : 
      case 10 : 
      case 13 : 
      case 14 : 
      case 15 : 
      case 16 : 
      case 18 : 
      case 19 : 
          return _menhir_fail(/* () */0);
      
    }
  };
}

function _menhir_run15(__menhir_env, __menhir_stack, __menhir_s) {
  while(true) {
    var _menhir_s = __menhir_s;
    var _menhir_stack = __menhir_stack;
    var _menhir_env = __menhir_env;
    var _menhir_stack$1 = /* tuple */[
      _menhir_stack,
      _menhir_s
    ];
    var _menhir_env$1 = _menhir_discard(_menhir_env);
    var _tok = _menhir_env$1[/* _menhir_token */2];
    if (typeof _tok === "number") {
      switch (_tok) {
        case 7 : 
            return _menhir_run5(_menhir_env$1, _menhir_stack$1, /* MenhirState15 */12);
        case 9 : 
            __menhir_s = /* MenhirState15 */12;
            __menhir_stack = _menhir_stack$1;
            __menhir_env = _menhir_env$1;
            continue ;
        default:
          if (_menhir_env$1[/* _menhir_error */3]) {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  /* tuple */[
                    "parser.ml",
                    742,
                    8
                  ]
                ];
          }
          _menhir_env$1[/* _menhir_error */3] = true;
          return _menhir_errorcase(_menhir_env$1, _menhir_stack$1, /* MenhirState15 */12);
      }
    } else if (_tok.tag) {
      return _menhir_run7(_menhir_env$1, _menhir_stack$1, /* MenhirState15 */12, _tok[0]);
    } else {
      return _menhir_run4(_menhir_env$1, _menhir_stack$1, /* MenhirState15 */12, _tok[0]);
    }
  };
}

function _menhir_run12(_menhir_env, _menhir_stack) {
  var _menhir_env$1 = _menhir_discard(_menhir_env);
  var _tok = _menhir_env$1[/* _menhir_token */2];
  if (typeof _tok === "number") {
    switch (_tok) {
      case 7 : 
          return _menhir_run5(_menhir_env$1, _menhir_stack, /* MenhirState12 */13);
      case 9 : 
          return _menhir_run6(_menhir_env$1, _menhir_stack, /* MenhirState12 */13);
      default:
        if (_menhir_env$1[/* _menhir_error */3]) {
          throw [
                Caml_builtin_exceptions.assert_failure,
                /* tuple */[
                  "parser.ml",
                  394,
                  8
                ]
              ];
        }
        _menhir_env$1[/* _menhir_error */3] = true;
        return _menhir_errorcase(_menhir_env$1, _menhir_stack, /* MenhirState12 */13);
    }
  } else if (_tok.tag) {
    return _menhir_run7(_menhir_env$1, _menhir_stack, /* MenhirState12 */13, _tok[0]);
  } else {
    return _menhir_run4(_menhir_env$1, _menhir_stack, /* MenhirState12 */13, _tok[0]);
  }
}

function _menhir_run25(_menhir_env, _menhir_stack) {
  var _menhir_env$1 = _menhir_discard(_menhir_env);
  var _tok = _menhir_env$1[/* _menhir_token */2];
  if (typeof _tok === "number") {
    switch (_tok) {
      case 7 : 
          return _menhir_run5(_menhir_env$1, _menhir_stack, /* MenhirState25 */8);
      case 9 : 
          return _menhir_run6(_menhir_env$1, _menhir_stack, /* MenhirState25 */8);
      default:
        if (_menhir_env$1[/* _menhir_error */3]) {
          throw [
                Caml_builtin_exceptions.assert_failure,
                /* tuple */[
                  "parser.ml",
                  302,
                  8
                ]
              ];
        }
        _menhir_env$1[/* _menhir_error */3] = true;
        return _menhir_errorcase(_menhir_env$1, _menhir_stack, /* MenhirState25 */8);
    }
  } else if (_tok.tag) {
    return _menhir_run7(_menhir_env$1, _menhir_stack, /* MenhirState25 */8, _tok[0]);
  } else {
    return _menhir_run4(_menhir_env$1, _menhir_stack, /* MenhirState25 */8, _tok[0]);
  }
}

function _menhir_run21(_menhir_env, _menhir_stack) {
  var _menhir_env$1 = _menhir_discard(_menhir_env);
  var _tok = _menhir_env$1[/* _menhir_token */2];
  if (typeof _tok === "number") {
    switch (_tok) {
      case 7 : 
          return _menhir_run5(_menhir_env$1, _menhir_stack, /* MenhirState21 */10);
      case 9 : 
          return _menhir_run6(_menhir_env$1, _menhir_stack, /* MenhirState21 */10);
      default:
        if (_menhir_env$1[/* _menhir_error */3]) {
          throw [
                Caml_builtin_exceptions.assert_failure,
                /* tuple */[
                  "parser.ml",
                  258,
                  8
                ]
              ];
        }
        _menhir_env$1[/* _menhir_error */3] = true;
        return _menhir_errorcase(_menhir_env$1, _menhir_stack, /* MenhirState21 */10);
    }
  } else if (_tok.tag) {
    return _menhir_run7(_menhir_env$1, _menhir_stack, /* MenhirState21 */10, _tok[0]);
  } else {
    return _menhir_run4(_menhir_env$1, _menhir_stack, /* MenhirState21 */10, _tok[0]);
  }
}

function _menhir_run27(_menhir_env, _menhir_stack) {
  var _menhir_env$1 = _menhir_discard(_menhir_env);
  var _tok = _menhir_env$1[/* _menhir_token */2];
  if (typeof _tok === "number") {
    switch (_tok) {
      case 7 : 
          return _menhir_run5(_menhir_env$1, _menhir_stack, /* MenhirState27 */7);
      case 9 : 
          return _menhir_run6(_menhir_env$1, _menhir_stack, /* MenhirState27 */7);
      default:
        if (_menhir_env$1[/* _menhir_error */3]) {
          throw [
                Caml_builtin_exceptions.assert_failure,
                /* tuple */[
                  "parser.ml",
                  324,
                  8
                ]
              ];
        }
        _menhir_env$1[/* _menhir_error */3] = true;
        return _menhir_errorcase(_menhir_env$1, _menhir_stack, /* MenhirState27 */7);
    }
  } else if (_tok.tag) {
    return _menhir_run7(_menhir_env$1, _menhir_stack, /* MenhirState27 */7, _tok[0]);
  } else {
    return _menhir_run4(_menhir_env$1, _menhir_stack, /* MenhirState27 */7, _tok[0]);
  }
}

function _menhir_run10(_menhir_env, _menhir_stack) {
  var _menhir_env$1 = _menhir_discard(_menhir_env);
  var _tok = _menhir_env$1[/* _menhir_token */2];
  if (typeof _tok === "number") {
    switch (_tok) {
      case 7 : 
          return _menhir_run5(_menhir_env$1, _menhir_stack, /* MenhirState10 */14);
      case 9 : 
          return _menhir_run6(_menhir_env$1, _menhir_stack, /* MenhirState10 */14);
      default:
        if (_menhir_env$1[/* _menhir_error */3]) {
          throw [
                Caml_builtin_exceptions.assert_failure,
                /* tuple */[
                  "parser.ml",
                  372,
                  8
                ]
              ];
        }
        _menhir_env$1[/* _menhir_error */3] = true;
        return _menhir_errorcase(_menhir_env$1, _menhir_stack, /* MenhirState10 */14);
    }
  } else if (_tok.tag) {
    return _menhir_run7(_menhir_env$1, _menhir_stack, /* MenhirState10 */14, _tok[0]);
  } else {
    return _menhir_run4(_menhir_env$1, _menhir_stack, /* MenhirState10 */14, _tok[0]);
  }
}

function _menhir_run9(_menhir_env, _menhir_stack) {
  var _menhir_env$1 = _menhir_discard(_menhir_env);
  var match = _menhir_stack[0];
  return _menhir_goto_aexpr(_menhir_env$1, match[0], match[1], _menhir_stack[2]);
}

function _menhir_run23(_menhir_env, _menhir_stack) {
  var _menhir_env$1 = _menhir_discard(_menhir_env);
  var _tok = _menhir_env$1[/* _menhir_token */2];
  if (typeof _tok === "number") {
    switch (_tok) {
      case 7 : 
          return _menhir_run5(_menhir_env$1, _menhir_stack, /* MenhirState23 */9);
      case 9 : 
          return _menhir_run6(_menhir_env$1, _menhir_stack, /* MenhirState23 */9);
      default:
        if (_menhir_env$1[/* _menhir_error */3]) {
          throw [
                Caml_builtin_exceptions.assert_failure,
                /* tuple */[
                  "parser.ml",
                  280,
                  8
                ]
              ];
        }
        _menhir_env$1[/* _menhir_error */3] = true;
        return _menhir_errorcase(_menhir_env$1, _menhir_stack, /* MenhirState23 */9);
    }
  } else if (_tok.tag) {
    return _menhir_run7(_menhir_env$1, _menhir_stack, /* MenhirState23 */9, _tok[0]);
  } else {
    return _menhir_run4(_menhir_env$1, _menhir_stack, /* MenhirState23 */9, _tok[0]);
  }
}

function prog(lexer, lexbuf) {
  var _menhir_env = /* record */[
    /* _menhir_lexer */lexer,
    /* _menhir_lexbuf */lexbuf,
    /* _menhir_token : () */0,
    /* _menhir_error */false
  ];
  var _menhir_stack_001 = _menhir_env[/* _menhir_lexbuf */1][/* lex_curr_p */11];
  var _menhir_stack = /* tuple */[
    /* () */0,
    _menhir_stack_001
  ];
  var _menhir_env$1 = _menhir_discard(_menhir_env);
  return _menhir_reduce22(_menhir_env$1, _menhir_stack, /* MenhirState0 */19);
}

exports.$$Error = $$Error;
exports.prog = prog;
/* No side effect */


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE


var Pervasives = __webpack_require__(2);
var AbstractDomain$AiProject = __webpack_require__(11);

function string_of_aexpr(a) {
  switch (a.tag | 0) {
    case 0 : 
        return String(a[0]);
    case 1 : 
        return a[0];
    case 2 : 
        return "(" + (string_of_aexpr(a[0]) + (" - " + (string_of_aexpr(a[1]) + ")")));
    case 3 : 
        return "(" + (string_of_aexpr(a[0]) + (" + " + (string_of_aexpr(a[1]) + ")")));
    
  }
}

var print_aexpr = string_of_aexpr;

function string_of_bexpr(a) {
  switch (a.tag | 0) {
    case 0 : 
        return "(" + (string_of_aexpr(a[0]) + (" < " + (string_of_aexpr(a[1]) + ")")));
    case 1 : 
        return "(" + (string_of_aexpr(a[0]) + (" > " + (string_of_aexpr(a[1]) + ")")));
    case 2 : 
        return "(" + (string_of_aexpr(a[0]) + (" == " + (string_of_aexpr(a[1]) + ")")));
    case 3 : 
        return "(" + (string_of_aexpr(a[0]) + (" != " + (string_of_aexpr(a[1]) + ")")));
    case 4 : 
        return "(" + (string_of_bexpr(a[0]) + (" nand " + (string_of_bexpr(a[1]) + ")")));
    
  }
}

var print_bexpr = string_of_bexpr;

function print_node(s) {
  switch (s.tag | 0) {
    case 0 : 
        print_nodelist(s[0]);
        return Pervasives.print_newline(/* () */0);
    case 1 : 
        Pervasives.print_string(s[0] + " = ");
        string_of_aexpr(s[1]);
        return Pervasives.print_string("; ");
    case 2 : 
        return Pervasives.print_string("; ");
    case 3 : 
        Pervasives.print_string("(if ");
        string_of_bexpr(s[0]);
        Pervasives.print_string(" ");
        print_node(s[1]);
        return Pervasives.print_string(") ");
    case 4 : 
        Pervasives.print_string("(if ");
        string_of_bexpr(s[0]);
        Pervasives.print_string(" ");
        print_node(s[1]);
        Pervasives.print_string(" else ");
        print_node(s[2]);
        return Pervasives.print_string(") ");
    case 5 : 
        Pervasives.print_string("(while ");
        string_of_bexpr(s[0]);
        Pervasives.print_string(" ");
        print_node(s[1]);
        return Pervasives.print_string(") ");
    case 6 : 
        return Pervasives.print_string("break; ");
    case 7 : 
        Pervasives.print_string("{ ");
        print_nodelist(s[0]);
        return Pervasives.print_string("} ");
    
  }
}

function print_nodelist(sl) {
  if (sl) {
    var sl$prime = sl[1];
    var s = sl[0];
    if (sl$prime) {
      print_nodelist(sl$prime);
      return print_node(s);
    } else {
      return print_node(s);
    }
  } else {
    return /* () */0;
  }
}

function string_of_label(l) {
  return "l" + String(l);
}

function print_label(l) {
  return "l" + String(l) + ":";
}

function bool_to_string(b) {
  if (b) {
    return "tt";
  } else {
    return "ff";
  }
}

function print_space(_m) {
  while(true) {
    var m = _m;
    if (m > 0) {
      Pervasives.print_string(" ");
      _m = m - 1 | 0;
      continue ;
    } else {
      return 0;
    }
  };
}

function print_margin(m) {
  return print_space((20 + m | 0) + 1 | 0);
}

function print_labelling(param, m) {
  var s = "<" + ("l" + String(param[0]) + (", " + ("l" + String(param[2]) + (", " + ((
              param[4] ? "tt" : "ff"
            ) + (", " + ("l" + String(param[5]) + ">")))))));
  Pervasives.print_string(s);
  if (s.length < 20) {
    print_space((20 - s.length | 0) + 1 | 0);
  }
  return print_space(m);
}

function print_at(param) {
  return "l" + String(param[0]) + ":";
}

function print_after(param) {
  return "l" + String(param[2]) + ":";
}

function print_labelled_node_trace(s, m) {
  switch (s.tag | 0) {
    case 0 : 
        var ls = s[1];
        print_labelling(ls, m);
        Pervasives.print_string("Prog:\n");
        print_labelled_nodelist_trace(s[0], m + 3 | 0);
        print_margin(m);
        print_after(ls);
        return Pervasives.print_newline(/* () */0);
    case 1 : 
        var ls$1 = s[2];
        print_labelling(ls$1, m);
        print_at(ls$1);
        Pervasives.print_string(s[0] + " = ");
        string_of_aexpr(s[1]);
        return Pervasives.print_string("; ");
    case 2 : 
        var ls$2 = s[0];
        print_labelling(ls$2, m);
        print_at(ls$2);
        return Pervasives.print_string("; ");
    case 3 : 
        var ls$3 = s[2];
        print_labelling(ls$3, m);
        Pervasives.print_string("(if ");
        print_at(ls$3);
        string_of_bexpr(s[0]);
        Pervasives.print_newline(/* () */0);
        print_labelled_node_trace(s[1], m + 3 | 0);
        return Pervasives.print_string(") ");
    case 4 : 
        var ls$4 = s[3];
        print_labelling(ls$4, m);
        Pervasives.print_string("(if ");
        print_at(ls$4);
        string_of_bexpr(s[0]);
        Pervasives.print_newline(/* () */0);
        print_labelled_node_trace(s[1], m + 3 | 0);
        Pervasives.print_newline(/* () */0);
        print_margin(m);
        Pervasives.print_string(" else ");
        Pervasives.print_newline(/* () */0);
        print_labelled_node_trace(s[2], m + 3 | 0);
        return Pervasives.print_string(") ");
    case 5 : 
        var ls$5 = s[2];
        print_labelling(ls$5, m);
        Pervasives.print_string("(while ");
        print_at(ls$5);
        string_of_bexpr(s[0]);
        Pervasives.print_newline(/* () */0);
        print_labelled_node_trace(s[1], m + 3 | 0);
        return Pervasives.print_string(") ");
    case 6 : 
        var ls$6 = s[0];
        print_labelling(ls$6, m);
        print_at(ls$6);
        return Pervasives.print_string("break; ");
    case 7 : 
        print_labelling(s[1], m);
        Pervasives.print_string("Stmtlist: {");
        Pervasives.print_newline(/* () */0);
        print_labelled_nodelist_trace(s[0], m + 3 | 0);
        print_margin(m);
        return Pervasives.print_string("} ");
    
  }
}

function print_labelled_nodelist_trace(sl, m) {
  if (sl) {
    var sl$prime = sl[1];
    var s = sl[0];
    if (sl$prime) {
      print_labelled_nodelist_trace(sl$prime, m);
      print_labelled_node_trace(s, m);
      return Pervasives.print_newline(/* () */0);
    } else {
      print_labelled_node_trace(s, m);
      return Pervasives.print_newline(/* () */0);
    }
  } else {
    return /* () */0;
  }
}

function print_parity(param, vl) {
  return " [" + (AbstractDomain$AiProject.stringofaP(param[1], vl) + "] ");
}

function print_parity_after(param, vl) {
  return " [" + (AbstractDomain$AiProject.stringofaP(param[3], vl) + "] ");
}

function print_vars(_vs) {
  while(true) {
    var vs = _vs;
    if (vs) {
      var vs$1 = vs[1];
      var v = vs[0];
      if (vs$1) {
        Pervasives.print_string(v);
        _vs = vs$1;
        continue ;
      } else {
        return Pervasives.print_string(v);
      }
    } else {
      return /* () */0;
    }
  };
}

function print_labelled_node_debug(s, m) {
  if (s.tag === 5) {
    Pervasives.print_string("debug: while ");
    print_at(s[2]);
    string_of_bexpr(s[0]);
    return Pervasives.print_newline(/* () */0);
  } else {
    return /* () */0;
  }
}

function print_labelled_node(s, m, vl) {
  switch (s.tag | 0) {
    case 0 : 
        var ls = s[1];
        return "\n" + (print_labelled_nodelist(s[0], m + 3 | 0, vl) + (print_after(ls) + (print_parity_after(ls, vl) + "\n")));
    case 1 : 
        var ls$1 = s[2];
        return print_at(ls$1) + (print_parity(ls$1, vl) + (s[0] + (" = " + (string_of_aexpr(s[1]) + "; "))));
    case 2 : 
        var ls$2 = s[0];
        return print_at(ls$2) + (print_parity(ls$2, vl) + ";");
    case 3 : 
        var ls$3 = s[2];
        return "if " + (print_at(ls$3) + (print_parity(ls$3, vl) + (string_of_bexpr(s[0]) + ("\n" + print_labelled_node(s[1], m + 3 | 0, vl)))));
    case 4 : 
        var ls$4 = s[3];
        return "if " + (print_at(ls$4) + (print_parity(ls$4, vl) + (string_of_bexpr(s[0]) + ("\n" + (print_labelled_node(s[1], m + 3 | 0, vl) + ("\n else \n" + print_labelled_node(s[2], m + 3 | 0, vl)))))));
    case 5 : 
        var ls$5 = s[2];
        return "while " + (print_at(ls$5) + (string_of_bexpr(s[0]) + (print_parity(ls$5, vl) + ("\n" + print_labelled_node(s[1], m + 3 | 0, vl)))));
    case 6 : 
        var ls$6 = s[0];
        return print_at(ls$6) + (print_parity(ls$6, vl) + "break; ");
    case 7 : 
        return "{\n" + (print_labelled_nodelist(s[0], m + 3 | 0, vl) + "}");
    
  }
}

function print_labelled_nodelist(sl, m, vl) {
  if (sl) {
    var sl$prime = sl[1];
    var s = sl[0];
    if (sl$prime) {
      return print_labelled_nodelist(sl$prime, m, vl) + (print_labelled_node(s, m, vl) + "\n");
    } else {
      return print_labelled_node(s, m, vl) + "\n";
    }
  } else {
    return "";
  }
}

var labelmargin = 20;

exports.string_of_aexpr = string_of_aexpr;
exports.print_aexpr = print_aexpr;
exports.string_of_bexpr = string_of_bexpr;
exports.print_bexpr = print_bexpr;
exports.print_node = print_node;
exports.print_nodelist = print_nodelist;
exports.string_of_label = string_of_label;
exports.print_label = print_label;
exports.bool_to_string = bool_to_string;
exports.labelmargin = labelmargin;
exports.print_space = print_space;
exports.print_margin = print_margin;
exports.print_labelling = print_labelling;
exports.print_at = print_at;
exports.print_after = print_after;
exports.print_labelled_node_trace = print_labelled_node_trace;
exports.print_labelled_nodelist_trace = print_labelled_nodelist_trace;
exports.print_parity = print_parity;
exports.print_parity_after = print_parity_after;
exports.print_vars = print_vars;
exports.print_labelled_node_debug = print_labelled_node_debug;
exports.print_labelled_node = print_labelled_node;
exports.print_labelled_nodelist = print_labelled_nodelist;
/* No side effect */


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE


var List = __webpack_require__(10);
var Caml_obj = __webpack_require__(4);
var Pervasives = __webpack_require__(2);

function varsa(a) {
  var collecta = function (a) {
    var exit = 0;
    switch (a.tag | 0) {
      case 0 : 
          return /* [] */0;
      case 1 : 
          return /* :: */[
                  a[0],
                  /* [] */0
                ];
      case 2 : 
      case 3 : 
          exit = 1;
          break;
      
    }
    if (exit === 1) {
      return Pervasives.$at(collecta(a[0]), collecta(a[1]));
    }
    
  };
  var cmp = function (x, y) {
    if (Caml_obj.caml_equal(x, y)) {
      return 0;
    } else if (Caml_obj.caml_lessthan(x, y)) {
      return 1;
    } else {
      return -1;
    }
  };
  return List.sort_uniq(cmp, collecta(a));
}

function varsb(b) {
  var collectb = function (b) {
    if (b.tag === 4) {
      return Pervasives.$at(collectb(b[0]), collectb(b[1]));
    } else {
      return Pervasives.$at(varsa(b[0]), varsa(b[1]));
    }
  };
  var cmp = function (x, y) {
    if (Caml_obj.caml_equal(x, y)) {
      return 0;
    } else if (Caml_obj.caml_lessthan(x, y)) {
      return 1;
    } else {
      return -1;
    }
  };
  return List.sort_uniq(cmp, collectb(b));
}

exports.varsa = varsa;
exports.varsb = varsb;
/* No side effect */


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE


var Block = __webpack_require__(5);
var Curry = __webpack_require__(1);
var Pervasives = __webpack_require__(2);
var AbstractDomain$AiProject = __webpack_require__(11);
var AbstractSyntax$AiProject = __webpack_require__(26);

function lfp(_a, f, leq) {
  while(true) {
    var a = _a;
    var fa = Curry._1(f, a);
    if (Curry._2(leq, fa, a)) {
      return fa;
    } else {
      _a = fa;
      continue ;
    }
  };
}

function leq(x, y) {
  if (x.tag === 5 && y.tag === 5) {
    var match = y[2];
    var match$1 = x[2];
    if (AbstractDomain$AiProject.leq(match$1[1], match[1]) && AbstractDomain$AiProject.leq(match$1[3], match[3])) {
      return AbstractDomain$AiProject.leq(match$1[6], match[6]);
    } else {
      return false;
    }
  } else {
    return Pervasives.failwith("abstractInterpreter: incorrect leq argument");
  }
}

function fWhile(r0, vl, x) {
  if (x.tag === 5) {
    var match = x[2];
    var b = x[0];
    var sb$prime = abstractInterpreter(x[1], AbstractDomain$AiProject.test(b, match[1]), vl);
    var afP$prime = AbstractSyntax$AiProject.property_after(sb$prime);
    var brP$prime = AbstractSyntax$AiProject.property_break(sb$prime);
    var atP = function (param) {
      return AbstractDomain$AiProject.join(r0, afP$prime, param);
    };
    var partial_arg = AbstractDomain$AiProject.nottest(b, atP);
    var afP = function (param) {
      return AbstractDomain$AiProject.join(partial_arg, brP$prime, param);
    };
    return /* While */Block.__(5, [
              b,
              sb$prime,
              /* tuple */[
                match[0],
                atP,
                match[2],
                afP,
                match[4],
                match[5],
                (function (param) {
                    return AbstractDomain$AiProject.bot(/* () */0, param);
                  })
              ]
            ]);
  } else {
    return Pervasives.failwith("abstractInterpreter: incorrect fWhile argument");
  }
}

function abstractInterpreter(s, r0, vl) {
  switch (s.tag | 0) {
    case 0 : 
        var match = s[1];
        var match$1 = abstractInterpreterStmtlist(s[0], r0, vl);
        return /* Prog */Block.__(0, [
                  match$1[0],
                  /* tuple */[
                    match[0],
                    match$1[1],
                    match[2],
                    match$1[2],
                    match[4],
                    match[5],
                    (function (param) {
                        return AbstractDomain$AiProject.bot(/* () */0, param);
                      })
                  ]
                ]);
    case 1 : 
        var match$2 = s[2];
        var a = s[1];
        var v = s[0];
        var afP$prime = function (param) {
          return AbstractDomain$AiProject.assign(v, a, r0, param);
        };
        return /* Assign */Block.__(1, [
                  v,
                  a,
                  /* tuple */[
                    match$2[0],
                    r0,
                    match$2[2],
                    afP$prime,
                    match$2[4],
                    match$2[5],
                    (function (param) {
                        return AbstractDomain$AiProject.bot(/* () */0, param);
                      })
                  ]
                ]);
    case 2 : 
        var match$3 = s[0];
        return /* Emptystmt */Block.__(2, [/* tuple */[
                    match$3[0],
                    r0,
                    match$3[2],
                    r0,
                    match$3[4],
                    match$3[5],
                    (function (param) {
                        return AbstractDomain$AiProject.bot(/* () */0, param);
                      })
                  ]]);
    case 3 : 
        var match$4 = s[2];
        var b = s[0];
        var st$prime = abstractInterpreter(s[1], AbstractDomain$AiProject.test(b, r0), vl);
        var afP$prime$1 = AbstractSyntax$AiProject.property_after(st$prime);
        var brP$prime = AbstractSyntax$AiProject.property_break(st$prime);
        var partial_arg = AbstractDomain$AiProject.nottest(b, r0);
        var afP$prime$prime = function (param) {
          return AbstractDomain$AiProject.join(afP$prime$1, partial_arg, param);
        };
        return /* If */Block.__(3, [
                  b,
                  st$prime,
                  /* tuple */[
                    match$4[0],
                    r0,
                    match$4[2],
                    afP$prime$prime,
                    match$4[4],
                    match$4[5],
                    brP$prime
                  ]
                ]);
    case 4 : 
        var match$5 = s[3];
        var b$1 = s[0];
        var st$prime$1 = abstractInterpreter(s[1], AbstractDomain$AiProject.test(b$1, r0), vl);
        var se$prime = abstractInterpreter(s[2], AbstractDomain$AiProject.nottest(b$1, r0), vl);
        var afP$prime$2 = AbstractSyntax$AiProject.property_after(st$prime$1);
        var brP$prime$1 = AbstractSyntax$AiProject.property_break(st$prime$1);
        var afP$prime$prime$1 = AbstractSyntax$AiProject.property_after(se$prime);
        var brP$prime$prime = AbstractSyntax$AiProject.property_break(se$prime);
        var afP$prime$prime$prime = function (param) {
          return AbstractDomain$AiProject.join(afP$prime$2, afP$prime$prime$1, param);
        };
        var brP$prime$prime$prime = function (param) {
          return AbstractDomain$AiProject.join(brP$prime$1, brP$prime$prime, param);
        };
        return /* Ifelse */Block.__(4, [
                  b$1,
                  st$prime$1,
                  se$prime,
                  /* tuple */[
                    match$5[0],
                    r0,
                    match$5[2],
                    afP$prime$prime$prime,
                    match$5[4],
                    match$5[5],
                    brP$prime$prime$prime
                  ]
                ]);
    case 5 : 
        var match$6 = s[2];
        var wbot_000 = s[0];
        var wbot_001 = s[1];
        var wbot_002 = /* tuple */[
          match$6[0],
          (function (param) {
              return AbstractDomain$AiProject.bot(/* () */0, param);
            }),
          match$6[2],
          (function (param) {
              return AbstractDomain$AiProject.bot(/* () */0, param);
            }),
          match$6[4],
          match$6[5],
          (function (param) {
              return AbstractDomain$AiProject.bot(/* () */0, param);
            })
        ];
        var wbot = /* While */Block.__(5, [
            wbot_000,
            wbot_001,
            wbot_002
          ]);
        var fp = lfp(wbot, (function (param) {
                return fWhile(r0, vl, param);
              }), leq);
        if (fp.tag === 5) {
          var match$7 = fp[2];
          var atP = match$7[1];
          var b$2 = fp[0];
          var sb$prime = abstractInterpreter(fp[1], AbstractDomain$AiProject.test(b$2, atP), vl);
          return /* While */Block.__(5, [
                    b$2,
                    sb$prime,
                    /* tuple */[
                      match$7[0],
                      atP,
                      match$7[2],
                      match$7[3],
                      match$7[4],
                      match$7[5],
                      match$7[6]
                    ]
                  ]);
        } else {
          return Pervasives.failwith("abstractInterpreter: incorrect while transformer");
        }
    case 6 : 
        var match$8 = s[0];
        return /* Break */Block.__(6, [/* tuple */[
                    match$8[0],
                    r0,
                    match$8[2],
                    (function (param) {
                        return AbstractDomain$AiProject.bot(/* () */0, param);
                      }),
                    match$8[4],
                    match$8[5],
                    r0
                  ]]);
    case 7 : 
        var match$9 = s[1];
        var match$10 = abstractInterpreterStmtlist(s[0], r0, vl);
        return /* Stmtlist */Block.__(7, [
                  match$10[0],
                  /* tuple */[
                    match$9[0],
                    match$10[1],
                    match$9[2],
                    match$10[2],
                    match$9[4],
                    match$9[5],
                    match$10[3]
                  ]
                ]);
    
  }
}

function abstractInterpreterStmtlist(sl, r0, vl) {
  if (sl) {
    var sl$prime = sl[1];
    var s = sl[0];
    if (sl$prime) {
      var match = abstractInterpreterStmtlist(sl$prime, r0, vl);
      var brP$prime$prime = match[3];
      var s$prime = abstractInterpreter(s, match[2], vl);
      var partial_arg = AbstractSyntax$AiProject.property_break(s$prime);
      var brP = function (param) {
        return AbstractDomain$AiProject.join(partial_arg, brP$prime$prime, param);
      };
      return /* tuple */[
              /* :: */[
                s$prime,
                match[0]
              ],
              match[1],
              AbstractSyntax$AiProject.property_after(s$prime),
              brP
            ];
    } else {
      var s$prime$1 = abstractInterpreter(s, r0, vl);
      return /* tuple */[
              /* :: */[
                s$prime$1,
                /* [] */0
              ],
              AbstractSyntax$AiProject.property_at(s$prime$1),
              AbstractSyntax$AiProject.property_after(s$prime$1),
              AbstractSyntax$AiProject.property_break(s$prime$1)
            ];
    }
  } else {
    return /* tuple */[
            /* [] */0,
            r0,
            r0,
            (function (param) {
                return AbstractDomain$AiProject.bot(/* () */0, param);
              })
          ];
  }
}

exports.lfp = lfp;
exports.leq = leq;
exports.fWhile = fWhile;
exports.abstractInterpreter = abstractInterpreter;
exports.abstractInterpreterStmtlist = abstractInterpreterStmtlist;
/* No side effect */


/***/ })
/******/ ])));