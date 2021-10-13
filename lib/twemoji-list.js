import getFiles from './utils/files'
import path from 'path'

const root = process.cwd()

export function getAllEmoji() {
  /** @type {string[]} */
  const list = getFiles(path.join(root, 'public/static/emoji'))
  return list.map((file) => {
    file = file.replace(path.join(root, 'public/static/emoji/'), '')
    file = file.replace(/_/g, '-')
    file = file.split('.')[0]
    return file
  })
}
