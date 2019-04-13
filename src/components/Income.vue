<template>
  <div>
    <div>今年截止本月总收入：{{totalOfThisYear}}</div>
    <div>总支出：</div>
    <p>本月房租收入{{rateTotal}}</p>
    <p>本月水费收入{{waterTotal}}</p>
    <p>本月电费收入{{eTotal}}</p>
    <p>本月卫生费收入{{wasteTotal}}</p>
    <p>本月电瓶车收入{{eBikeTotal}}</p>
    <div>本月收入：{{monthlyTotal}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalOfThisYear: 0,
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    },

    fullName() {
      return this.$store.getters.fullName;
    },

    rateTotal() {
      return this.$store.state.rateTotal;
    },
    wasteTotal() {
      return this.$store.state.wasteTotal;
    },
    waterTotal() {
      return this.$store.state.waterTotal;
    },
    eTotal() {
      return this.$store.state.eTotal;
    },
    eBikeTotal() {
      return this.$store.state.eBikeTotal;
    },
    monthlyTotal() {
      return this.$store.getters.monthlyTotal
    }
  },
};
</script>
