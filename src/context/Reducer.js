export default (state, action) => {
  switch (action.type) {
    case 'get-data':
      return {
        ...state,
        products: action.payload
      }
    default:
      return state;
  }
};