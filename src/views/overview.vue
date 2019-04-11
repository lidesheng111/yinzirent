<template>
  <div>
    <div>
      <div>本月收入：{{monthlyIncome}}</div>
      <div>今年截止本月总收入：{{totalOfThisYear}}</div>
      <div>总支出：</div>
    </div>

    <div class="rooms">
      <div class="room-box" v-for="room in rooms">
        <div>房间号：{{room.rNumber}}</div>
        <div>
          <span>{{room.available==false?'住人':'空'}}</span>
          <span class="begin-time" v-if="room.available">起租时间：<a-date-picker style="width: 90px" size="small" placeholder="date" suffixIcon=" " />
          </span>
          <span class="begin-time" v-if="!room.available">起租时间：{{room.beginTime}}</span>
        </div>
        <div class="names-box">
          在住人：
          <span v-for="name in room.guestsName">{{name}}</span>
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
            <button v-if="!room.rentPaid" @click="addRate(room.rNumber, room.rate)">已交</button>
          </div>
          <div>
            <span class="paid-item">{{room.waterPaid==false?'水费未交':'已交水费'}}</span>
            <a-button v-if="!room.waterPaid" @click="addWater(room.waterCharge)">已交</a-button>
          </div>
          <div>
            <span class="paid-item">{{room.wastePaid==false?'垃圾费未交':'已交垃圾费'}}</span>
            <button v-if="!room.wastePaid" @click="addWaste(room.wasteCharge)">已交</button>
          </div>
          <div>
            <span class="paid-item">{{room.ePaid==false?'电费未交':'已交电费'}}</span>
            <button v-if="!room.ePaid" @click="addE(room.eCharge)">已交</button>
          </div>
          <div>
            <span class="paid-item">{{room.eBikePaid==false?'电瓶车费未交':'已交电瓶车'}}</span>
            <button v-if="!room.eBikePaid" @click="addEBike(room.eBikeCharge)">已交</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
