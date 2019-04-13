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
            <a-button v-if="!room.rentPaid" type="primary" size="small" @click="addRate(room.rNumber, room.rate)">已交</a-button>
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
var BaaS = require("minapp-sdk");
import Income from '../components/Income.vue';

export default {
  components: {
    Income
  },
  data() {
    return {
      rooms: [],
    };
  },

  mounted() {
    BaaS.init("9b6f2104a25b4d4bce8a");
    let Rooms = new BaaS.TableObject("rooms");
    Rooms.get("").then(
      res => {
        console.log(res);
        this.rooms = res.data.objects;
      },
      err => {
        console.log(err);
      }
    );

    console.log(this.$store);
    let i = 1;
    // setInterval( () => {
    //   this.$store.commit('updateCount', i++)
    // }, 1000);

    // this.$store.dispatch('retrieveMonthlyTotals');
  },

  methods: {
    _getTable() {
      let table = new BaaS.TableObject("year2019");
      console.log(table, "table");
      return table;
    },
    addRate(rNumber, fee) {
      // let query = new BaaS.Query();
      // let month = String(this.cMonth);
      // query.compare("month", "=", month);
      // let myTable = this._getTable();
      // let myReocrd = myTable.getWithoutData("5cadc633fb9d7f34f1d52090");
      // myReocrd.set({
      //   rateArr: 200
      // });
      // myReocrd.update().then(
      //   res => {
      //     console.log(res);
      //   },
      //   err => {
      //     console.log(err);
      //   }
      // );
      this.$store.dispatch("updateRateTotal", fee);
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
