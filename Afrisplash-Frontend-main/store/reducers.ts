import { combineReducers } from 'redux'
import { counterReducer } from './general/reducer'


const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  counter: counterReducer,
})

export default rootReducer
