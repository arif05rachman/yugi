import {
  GET_CARDS
} from './action_types'

export const getCards = (url) => {
  return async dispatch => {
    const res = await fetch(url)
    const cards = await res.json()
    dispatch({
      type: GET_CARDS,
      payload: {
        cards: cards.data
      }
    })
  }
}