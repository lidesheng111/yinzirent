<template>
  <div id="app">
    <div class="title">英子出租房管理系统</div>
    <div>
      <div>本月收入：{{monthlyIncome}}</div>
      <div>今年截止本月总收入：{{totalOfThisYear}}</div>
      <div>总支出： </div>
    </div>
    <div class="rooms">
      <div class="room-box" v-for="room in rooms">
        <div>房间号：{{room.rNumber}}</div>
        <div>
          <span>{{room.available==false?'住人':'空'}}</span>
          <span class="begin-time" v-if="room.available">起租时间：<input class="input-time" type="text" /></span>
          <span class="begin-time" v-if="!room.available">起租时间：{{room.beginTime}}</span>
        </div>
        <div class="names-box">
          在住人：<span v-for="name in room.guestsName"> {{name}}</span>
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
          <div><span class="paid-item">{{room.rentPaid==false?'未交房租':'已交房租'}}</span> <button v-if="!room.rentPaid" @click="addRate(room.rNumber, room.rate)">已交</button></div>
          <div><span class="paid-item">{{room.waterPaid==false?'水费未交':'已交水费'}}</span> <button v-if="!room.waterPaid" @click="addWater(room.waterCharge)">已交</button></div>
          <div><span class="paid-item">{{room.wastePaid==false?'垃圾费未交':'已交垃圾费'}}</span> <button v-if="!room.wastePaid" @click="addWaste(room.wasteCharge)">已交</button></div>
          <div><span class="paid-item">{{room.ePaid==false?'电费未交':'已交电费'}}</span> <button v-if="!room.ePaid" @click="addE(room.eCharge)">已交</button></div>
          <div><span class="paid-item">{{room.eBikePaid==false?'电瓶车费未交':'已交电瓶车'}}</span > <button v-if="!room.eBikePaid" @click="addEBike(room.eBikeCharge)">已交</button></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var BaaS = require('minapp-sdk')

export default {
  name: "App",
  components: {},
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
    BaaS.init('9b6f2104a25b4d4bce8a');
    let Rooms = new BaaS.TableObject('rooms');
    Rooms.get('').then(res => {
      console.log(res);
      this.rooms = res.data.objects
    }, err => {
      console.log(err)
    })
  },

  methods: {
    _getTable() {
      let table = new BaaS.TableObject('year2019');
      console.log(table, 'table')
      return table;
    },
    addRate(rNumber, fee) {
      let query = new BaaS.Query();
      let month = String(this.cMonth);
      query.compare('month', '=', month);
      let myTable = this._getTable();
      let myReocrd = myTable.getWithoutData('5cadc633fb9d7f34f1d52090');
      myReocrd.set({
        'rateArr': 200
      });
      myReocrd.update().then(res => {
        console.log(res)
      }, err => {
        console.log(err)
      })
    },
    addWater(fee){},
    addWaste(fee) {},
    addE(fee) {},
    addEBike(fee) {}
  }
};
</script>

<style>
.title {
  font-size: 30px;
  text-align: center;
  margin-top: 50px;
}
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
