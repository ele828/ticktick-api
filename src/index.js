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
    this._signOn = signOn(this.axios, this.config.tokenCachePath)
    // Inject api endpoint to ticktick application
    for (const api of Object.keys(apiList)) {
      Object.defineProperty(this, api, {
        value: apiList[api].apply(this, [this.axios])
      });
    }
  }

  async signOn() {
    const token = await this._signOn(this.config.username, this.config.password)
    this.axios.defaults.headers.common['Cookie'] = `t=${token}`;
  }
}