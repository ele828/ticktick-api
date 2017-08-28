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

export default function addTask (axios, task) {
  const taskParams = Object.assign({}, defaultTask, task)
  console.log('task:', taskParams)
  return axios.post('task', taskParams)
}