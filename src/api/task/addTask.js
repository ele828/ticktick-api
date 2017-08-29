import axios from 'axios'
import ObjectId from '../../util/objectId'

const defaultTask = {
  assignee: null,
  content: '',
  deleted: 0,
  dueDate: null,
  id: ObjectId(),
  isAllDay: null,
  items: [],
  local: true,
  modifiedTime: (new Date).toISOString(),
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
  title: '',
}

export default function addTask (axios) {
  return (task) => {
    const taskParams = Object.assign({}, defaultTask, task)
    return axios.post('task', taskParams)
  }
}