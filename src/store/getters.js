export default {
  fullName(state) {
    return state.firstName+ ' ' + state.lastName;
  },

  monthlyTotal(state) {
    return state.rateTotal + state.waterTotal + state.wasteTotal + state.eTotal + state.eBikeTotal
  },
}
