import { homedir } from 'os'
import { join } from 'path'

const filePath = join(homedir(), '../weather-data.json');
const saveKeyValue = (key, value) => {
    console.log(filePath)
}

export { saveKeyValue }