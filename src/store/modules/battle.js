export default {
  namespaced: true,
  state() {
    return {
      counter: 10,
    };
  },
  getters: {
    getConter(state) {
      return state.counter;
    }
  }
};
