export const SET_GAME = 'SET_GAME'

export const setGame = name => dispatch => {
  dispatch({
    type: SET_GAME,
    payload: name
  })
}
