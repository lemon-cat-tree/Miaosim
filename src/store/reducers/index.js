import { combineReducers } from 'redux'
import counter from './counter'
import user from './user'
import adopt from './adopt'
import cat from './cat'
import feedback from './feedback'
import rescue from './rescue'

export default combineReducers({
  counter,
  user,
  adopt,
  cat,
  feedback,
  rescue
})