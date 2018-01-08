'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _signOn = require('./api/signOn');

var _signOn2 = _interopRequireDefault(_signOn);

var _addTask = require('./api/task/addTask');

var _addTask2 = _interopRequireDefault(_addTask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Delegates api endpoint to ticktick
var apiList = { addTask: _addTask2.default };

var Ticktick = function () {
  function Ticktick(config) {
    _classCallCheck(this, Ticktick);

    this.config = config;
    this.axios = _axios2.default.create({
      baseURL: 'https://ticktick.com/api/v2/',
      timeout: config.timeout
    });
    this._signOn = (0, _signOn2.default)(this.axios, this.config.tokenCachePath);
    // Inject api endpoint to ticktick application
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = Object.keys(apiList)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var api = _step.value;

        Object.defineProperty(this, api, {
          value: apiList[api].apply(this, [this.axios])
        });
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
  }

  _createClass(Ticktick, [{
    key: 'signOn',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var token;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._signOn(this.config.username, this.config.password);

              case 2:
                token = _context.sent;

                this.axios.defaults.headers.common['Cookie'] = 't=' + token;

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function signOn() {
        return _ref.apply(this, arguments);
      }

      return signOn;
    }()
  }]);

  return Ticktick;
}();

exports.default = Ticktick;