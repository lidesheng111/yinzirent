<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
var BaaS = require("minapp-sdk");
import Header from './template/header.vue';

export default {
  name: "App",
  components: {
    Header
  },
  data() {
    return {
      monthlyIncome: 0,
      totalOfThisYear: 0,
      rooms: [
        // {
        //   rNumber: 101,
        //   available: false,
        //   beginTime: '2019-04-10',
        //   guestsName: ["边巴", "次仁卓嘎"],
        //   rate: 750,
        //   eCharge: 1,
        //   eStart: 630,
        //   waterCharge: 10,
        //   wasteCharge: 10,
        //   eBike: 30,
        //   eLast: 1500,
        //   rentPaid: false,
        //   waterPaid: false,
        //   wastePaid: false,
        //   eBikePaid: false,
        //   ePaid: false,
        // },
        // {
      ],
      cYear: new Date().getFullYear(),
      cMonth: new Date().getMonth() + 1
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
  },

  methods: {
    _getTable() {
      let table = new BaaS.TableObject("year2019");
      console.log(table, "table");
      return table;
    },
    addRate(rNumber, fee) {
      let query = new BaaS.Query();
      let month = String(this.cMonth);
      query.compare("month", "=", month);
      let myTable = this._getTable();
      let myReocrd = myTable.getWithoutData("5cadc633fb9d7f34f1d52090");
      myReocrd.set({
        rateArr: 200
      });
      myReocrd.update().then(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
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
