'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readFile = readFile;
exports.writeFile = writeFile;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function readFile(filename) {
  return new Promise(function (resolve, reject) {
    _fs2.default.readFile(filename, function (err, data) {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

function writeFile(filename, data) {
  return new Promise(function (resolve, reject) {
    _fs2.default.writeFile(filename, data, function (err) {
      if (err) return reject(err);
      resolve();
    });
  });
}