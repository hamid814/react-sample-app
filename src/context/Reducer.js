export default (state, action) => {
  switch (action.type) {
    case 'set-active-page':
      return {
        ...state,
        data: action.payload
      }
    default:
      return state;
  }
};