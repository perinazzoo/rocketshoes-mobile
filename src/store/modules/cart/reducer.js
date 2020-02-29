export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD':
      return [...state, { ...action.product, amount: 1 }];
    default:
      return state;
  }
}
