import * as actionTypes from '../constants/mainConstants';

export function actionPlus() {
  return dispatch =>
    setTimeout(() => {
      return dispatch({ type: actionTypes.PLUS });
    }, 2000);
}

export function actionMinus() {
  return { type: actionTypes.MINUS };
}
