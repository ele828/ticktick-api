import fs from 'fs'

export function readFile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, data) => {
      if (err) return reject(err)
      resolve(data)
    })
  })
}

export function writeFile(filename, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, data, (err) => {
      if (err) return reject(err)
      resolve()
    })
  })
}