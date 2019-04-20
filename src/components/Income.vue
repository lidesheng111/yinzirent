<template>
  <div class="income-info">
    <div class="this-month">
      <span class="this-month-item">本月房租收入{{rateTotal}}</span>
      <span class="this-month-item">本月水费收入{{waterTotal}}</span>
      <span class="this-month-item">本月电费收入{{eTotal}}</span>
      <span class="this-month-item">本月卫生费收入{{wasteTotal}}</span>
      <span class="this-month-item">本月电瓶车收入{{eBikeTotal}}</span>
      <div>本月收入：{{monthlyTotal}}</div>
    </div>
    <div class="this-year">
      <div>今年截止本月总收入：{{totalOfThisYear}}</div>
      <div>总支出：</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalOfThisYear: 0
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
      return this.$store.getters.monthlyTotal;
    }
  }
};
</script>


<style>
.income-info {
  display: flex;
}
.this-month {
  border-right: 1px solid #000;
}
.this-month-item {
  margin-right: 10px;
}
.this-year {
  margin-left: 10px;
}
</style>

