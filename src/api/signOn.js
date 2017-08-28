import axios from 'axios'

// POST
const SIGN_ON_API = 'https://ticktick.com/api/v2/user/signon?wc=true&remember=true'

export default function signOn (username, password) {
  return axios.post(SIGN_ON_API, {
    username, password
  }).then(res => res.data.token)
}