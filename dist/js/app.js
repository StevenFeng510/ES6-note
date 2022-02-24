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