import {
  GET_CARDS
} from './action_types'


export const getCards = ({
    show,
    sort,
    sortorder,
    language,
    fname,
  }) => {
  const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?&num=${show}&offset=0&${sort}&${sortorder}&${language}&${fname}`
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