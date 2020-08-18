import {
  GET_CARDS
} from '../actions/action_types'

const defaultState = {
  cards: []
}

const cardReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CARDS:
      return {
        ...state,
        cards: action.payload.cards
      }
      default:
        return state
  }
}
export default cardReducer