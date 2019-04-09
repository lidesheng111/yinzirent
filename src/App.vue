<template>
  <div id="app">
    <div class="title">英子出租房管理系统</div>
    <div class="rooms">
      <div class="room-box" v-for="room in rooms">
        <div>房间号：{{room.roomNumber}}</div>
        <div>{{room.available==false?'住人':'空'}}</div>
        <span v-for="name in room.guestsName"> {{name}}</span>
        <div>房租：{{room.rate}}</div>
        <div>{{room.paid==false?'未交房租':'一交房租'}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      rooms: [
        {
          roomNumber: 101,
          available: false,
          guestsName: ["边巴", "次仁卓嘎"],
          rate: 750,
          paid: false
        },
        {
          roomNumber: 102,
          available: false,
          guestsName: ["索朗次仁", "次仁卓嘎"],
          rate: 750,
          paid: false
        },
        {
          roomNumber: 103,
          available: false,
          guestsName: ["索朗旺姆", "边巴吉拉"],
          rate: 750,
          paid: false
        }
      ]
    };
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
  display: grid;
}
.room-box {
  width: 200px;
  border: 1px solid #000;
  padding: 5px;
}
</style>
