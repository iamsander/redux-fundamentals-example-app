import { compose, createStore } from 'redux'
import rootReducer from './reducer'

import {
  sayHiOnDispatch,
  includeMeaningOfLife,
} from './exampleAddons/enhancers'

let preloadState
const persistedTodoString = localStorage.getItem('todos')

if (persistedTodoString) {
  preloadState = {
    todos: JSON.parse(persistedTodoString),
  }
}
const composeEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife)
//const store = createStore(rootReducer, preloadState)
const store = createStore(rootReducer, undefined, composeEnhancer)
export default store
