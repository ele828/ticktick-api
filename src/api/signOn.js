import path from 'path'
import { readFile, writeFile } from '../util/fs'

const SIGN_ON_API = 'user/signon?wc=true&remember=true'

// TODO: implements token refreshing after token is expired
export default function signOn (axios, tokenCachePath) {
  return async (username, password) => {
    const token = JSON.parse(await readFile(path.join(tokenCachePath)))
    if (token && token.length > 0) return token
    const res = await axios.post(SIGN_ON_API, { username, password })
    const _token = res.data.token
    await writeFile(path.join(tokenCachePath), JSON.stringify(_token))
    return _token
  }
}