<template>
  <div>
    <income />
    <div class="rooms">
      <div class="room-box" v-for="room in rooms" :key="room.id">
        <div>房间号：{{room.rNumber}}</div>
        <div>
          <span>{{room.available==false?'住人':'空'}}</span>
          <span class="begin-time" v-if="room.available">起租时间：<a-date-picker style="width: 90px" size="small" placeholder="date" suffixIcon=" " />
          </span>
          <span class="begin-time" v-if="!room.available">起租时间：{{room.beginTime}}</span>
        </div>
        <div class="names-box">
          在住人：
          <span v-for="name in room.guestNames" :key="name"> {{name}}</span>
        </div>
        <div class="charge-box gap">
          <div>房租：{{room.rate}}元/月</div>
          <div>电费：{{room.eCharge}}元/度</div>
          <div>水费：{{room.waterCharge}}元/人/月</div>
          <div>垃圾费：{{room.wasteCharge}}元/月</div>
          <div>电瓶车充电：{{room.eBikeCharge==0 ? '无' : room.eBikeCharge+'元/月'}}</div>
        </div>
        <div class="e-box">
          <div>入住电表底数：{{room.eStart}}°</div>
        </div>
        <div class="paid-box gap">
          <div>
            <span class="paid-item">{{room.rentPaid==false?'未交房租':'已交房租'}}</span>
            <a-button v-if="!room.rentPaid" type="primary" size="small" @click="addRate(room._id, room.rate)">已交</a-button>
          </div>
          <div>
            <span class="paid-item">{{room.waterPaid==false?'水费未交':'已交水费'}}</span>
            <a-button v-if="!room.waterPaid" type="primary" size="small" @click="addRate(room.rNumber, room.rate)">已交</a-button>
          </div>
          <div>
            <span class="paid-item">{{room.wastePaid==false?'垃圾费未交':'已交垃圾费'}}</span>
            <a-button v-if="!room.wastePaid" type="primary" size="small" @click="addRate(room.rNumber, room.rate)">已交</a-button>
          </div>
          <div>
            <span class="paid-item">{{room.ePaid==false?'电费未交':'已交电费'}}</span>
            <a-button v-if="!room.ePaid" type="primary" size="small" @click="addRate(room.rNumber, room.rate)">已交</a-button>
          </div>
          <div>
            <span class="paid-item">{{room.eBikePaid==false?'电瓶车费未交':'已交电瓶车'}}</span>
            <a-button v-if="!room.eBikePaid" type="primary" size="small" @click="addRate(room.rNumber, room.rate)">已交</a-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Income from '../components/Income.vue';

export default {
  components: {
    Income
  },
  data() {
    return {
    };
  },

  mounted() {
    this.$store.dispatch("retrieveRooms");
  },

  computed: {
    rooms() {
      return this.$store.state.rooms
    }
  },

  methods: {
    addRate(_id, toAdd) {
      this.$store.dispatch("updateRateTotal", this.$store.state.rateTotal + toAdd);
      this.$store.dispatch("updateRentPaid", _id)
    },
    addWater(fee) {},
    addWaste(fee) {},
    addE(fee) {},
    addEBike(fee) {}
  }
};
</script>

<style>
.rooms {
  display: flex;
}
.room-box {
  width: 200px;
  border: 1px solid #000;
  padding: 5px;
}
.begin-time {
  margin-left: 10px;
  font-size: 14px;
}
.input-time {
  width: 50px;
}

.gap {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #000;
}

.paid-item {
  display: inline-block;
  width: 100px;
}
</style>
