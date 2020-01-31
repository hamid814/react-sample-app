export default (state, action) => {
  switch (action.type) {
    case 'get-data':
      return {
        ...state,
        products: action.payload
      }
    case 'set-single-product':
      return {
        ...state,
        singleProduct: action.payload
      }
    case 'set-loading':
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state;
  }
};