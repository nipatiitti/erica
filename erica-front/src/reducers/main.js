import { combineReducers } from 'redux'
import loading from './loading.js'
import error from './error.js'

const main = combineReducers({
  error,
  loading
})

export default main
