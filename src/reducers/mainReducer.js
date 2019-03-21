const initialState = {
  counter: 0,
  azaza: false
};

export default function mainReducer(state = initialState, action = null) {
  switch (action.type) {
    case 'PLUS':
      return { ...state, counter: state.counter + 1 };
    case 'MINUS':
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}
