import axios from 'axios'
import config from './config'
import signOn from './api/signOn'
import addTask from './api/task/addTask'

class Application {
  async start() {
    const token = await signOn(config.username, config.password)
    const axiosInstance = axios.create({
      baseURL: 'https://ticktick.com/api/v2/',
      timeout: 2000,
      headers: { Cookie: `t=${token}` }
    })
    const retval = await addTask(axiosInstance, {
      title: 'test title',
      projectId: '597d7015e4b0ce3fc8da5094'
    })
    console.log(retval)
  }
}

(new Application).start()