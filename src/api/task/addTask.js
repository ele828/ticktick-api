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
  priority: 0,    // 0, 1, 3, 5
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
    const taskParams = Object.assign(
      {},
      defaultTask,
      {
        id: ObjectId(),
        modifiedTime: (new Date).toISOString(),
      },
      task
    )
    return axios.post('task', taskParams)
  }
}
