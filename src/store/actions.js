export default {
  retrieveRooms(contect) {
    var BaaS = require("minapp-sdk");
    BaaS.init("9b6f2104a25b4d4bce8a");
    let Rooms = new BaaS.TableObject("rooms");
    Rooms.get("").then(
      res => {
        contect.commit('getRooms', res.data.objects)
      },
      err => {
        console.log(err);
      }
    );
  },

  retrieveMonthlyTotals(context) {
    var BaaS = require("minapp-sdk");
    BaaS.init("9b6f2104a25b4d4bce8a");

    let myTable = new BaaS.TableObject("year2019");

    let query = new BaaS.Query();
    let month = String(context.state.cMonth);
    query.compare("month", "=", month);

    myTable.setQuery(query).find().then(res => {
      context.commit('setTotals', res.data.objects[0])
    })
  },

  updateRateTotal(context, toAdd) {
    var BaaS = require("minapp-sdk");
    BaaS.init("9b6f2104a25b4d4bce8a");

    BaaS.auth.anonymousLogin().then(res => {
      console.log(res)
    }, err => {
      console.log(err)
    })

    let myTable = new BaaS.TableObject("year2019");
    let query = new BaaS.Query();
    let month = String(context.state.cMonth);
    query.compare("month", "=", month);

    myTable.setQuery(query).find().then(res => {
      let myRecord = myTable.getWithoutData(res.data.objects[0]._id);
      myRecord.set('rateTotal', toAdd);
      myRecord.update().then(res => {
        context.commit('setTotals', res.data)
      }, err => {
        console.log(err)
      })
    });
  },

  updateRentPaid(context, _id) {
    var BaaS = this._actions._init();

    let myTable = new BaaS.TableObject('rooms');
    let myRecord = myTable.getWithoutData(_id);
    myRecord.set('rentPaid', true);
    myRecord.update().then(res => {
      this.dispatch('retrieveRooms');
    })
  },

  _init() {
    var BaaS = require("minapp-sdk");
    BaaS.init("9b6f2104a25b4d4bce8a");
    return BaaS;
  }
}


