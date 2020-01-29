export default (state, action) => {
  switch (action.type) {
    case 'set-data':
      return {
        ...state,
        data: action.payload
      }
    default:
      return state;
  }
};