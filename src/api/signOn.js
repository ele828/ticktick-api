import path from 'path'
import axios from 'axios'
import { readFile, writeFile } from '../util/fs'

// POST
const SIGN_ON_API = 'https://ticktick.com/api/v2/user/signon?wc=true&remember=true'

const TOKEN_CACHE = 'token.json'
export default async function signOn (username, password) {
  const token = JSON.parse(await readFile(path.join(TOKEN_CACHE)))
  if (token !== '') {
    return token;
  }
  const res = await axios.post(SIGN_ON_API, {username, password})
  const _token = res.data.token
  await writeFile(path.join(TOKEN_CACHE), JSON.stringify(_token))
  return _token;
}