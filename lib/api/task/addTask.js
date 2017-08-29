'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addTask;

var _objectId = require('../../util/objectId');

var _objectId2 = _interopRequireDefault(_objectId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultTask = {
  assignee: null,
  content: '',
  deleted: 0,
  dueDate: null,
  id: (0, _objectId2.default)(),
  isAllDay: null,
  items: [],
  local: true,
  modifiedTime: new Date().toISOString(),
  // 0 1 3 5
  priority: 0,
  progress: 0,
  projectId: '',
  remindTime: null,
  reminder: null,
  reminders: null,
  sortOrder: 0,
  startDate: null,
  status: 0,
  tags: [],
  timeZone: 'America/Los_Angeles',
  title: ''
};

function addTask(axios) {
  return function (task) {
    var taskParams = Object.assign({}, defaultTask, {
      id: (0, _objectId2.default)(),
      modifiedTime: new Date().toISOString()
    }, task);
    return axios.post('task', taskParams);
  };
}