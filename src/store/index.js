import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {cardReducer, deckReducer} from './reducers'

const reducers = combineReducers({
  cards: cardReducer,
  decks: deckReducer
})

const store = createStore(reducers, applyMiddleware(thunk, logger))
export default store 