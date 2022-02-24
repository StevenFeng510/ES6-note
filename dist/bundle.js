(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.teach = teach;
// 分别暴露

var school = exports.school = 'baidu';

function teach() {
    console.log('我们keyi');
}
},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 统一暴露

var school1 = 'google';

function findJob() {
    console.log('keyiyige');
}

exports.school1 = school1;
exports.findJob = findJob;
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 默认暴露
exports.default = {
    school: 'baidu',
    change: function change() {
        console.log('gaibian');
    }
};
},{}],4:[function(require,module,exports){
'use strict';

var _ = require('./1.js');

var m1 = _interopRequireWildcard(_);

var _2 = require('./2.js');

var m2 = _interopRequireWildcard(_2);

var _3 = require('./3.js');

var m3 = _interopRequireWildcard(_3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log(m1); // 入口文件

// 模块引入

console.log(m2);
console.log(m3);
},{"./1.js":1,"./2.js":2,"./3.js":3}]},{},[4]);
