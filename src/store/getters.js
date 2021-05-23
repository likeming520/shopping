const getters = {
  cartLength(state) {
    return state.cartLength.length
  },
  cartList(state) {
    return state.cartList()
  }
};

export default getters
