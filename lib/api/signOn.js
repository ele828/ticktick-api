'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = signOn;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('../util/fs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var TOKEN_CACHE = 'token.json';
var SIGN_ON_API = 'user/signon?wc=true&remember=true';

function signOn(axios) {
  var _this = this;

  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(username, password) {
      var token, res, _token;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.t0 = JSON;
              _context.next = 3;
              return (0, _fs.readFile)(_path2.default.join(TOKEN_CACHE));

            case 3:
              _context.t1 = _context.sent;
              token = _context.t0.parse.call(_context.t0, _context.t1);

              if (!(!token || !token.length)) {
                _context.next = 7;
                break;
              }

              return _context.abrupt('return', token);

            case 7:
              _context.next = 9;
              return axios.post(SIGN_ON_API, { username: username, password: password });

            case 9:
              res = _context.sent;
              _token = res.data.token;
              _context.next = 13;
              return (0, _fs.writeFile)(_path2.default.join(TOKEN_CACHE), JSON.stringify(_token));

            case 13:
              return _context.abrupt('return', _token);

            case 14:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
}