import axios from 'axios'
import config from './config'
import signOn from './api/signOn'
import addTask from './api/task/addTask'

// Delegates api endpoint to ticktick
const apiList = { addTask }

export default class Ticktick {
  constructor(config) {
    this.config = config
    this.axios = axios.create({
      baseURL: 'https://ticktick.com/api/v2/',
      timeout: config.timeout,
    })
    this._signOn = signOn(this.axios)
    // Inject api endpoint to ticktick application
    for (const api of Object.keys(apiList)) {
      this[api] = apiList[api].apply(this, [this.axios])
    }
  }

  async signOn() {
    const token = await this._signOn(this.config.username, this.config.password)
    this.axios.defaults.headers.common['Cookie'] = `t=${token}`;
  }
}

// Application entrypoint
async function start () {
  const _config = {
    username: config.username,
    password: config.password,
    timeout: 5000
  }
  try {
    const ticktick = new Ticktick(_config)
    await ticktick.signOn()
    await ticktick.addTask({
      title: 'test title',
      projectId: '597d7015e4b0ce3fc8da5094',
      priority: 5
    })
  } catch (error) {
    console.log('Error:', error)
  }
}

start()