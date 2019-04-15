export default {
  updateCount(state, num) {
    state.count = num;
  },

  setTotals(state, data) {
    state.rateTotal = data.rateTotal,
    state.waterTotal = data.waterTotal,
    state.wasteTotal = data.wasteTotal,
    state.eTotal = data.eTotal,
    state.eBikeTotal = data.eBikeTotal
  }
}
