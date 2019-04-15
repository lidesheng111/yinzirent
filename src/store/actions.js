export default {
  retrieveMonthlyTotals(context) {
    var BaaS = require("minapp-sdk");
    BaaS.init("9b6f2104a25b4d4bce8a");

    let myTable = new BaaS.TableObject("year2019");

    let query = new BaaS.Query();
    let month = String(context.state.cMonth);
    query.compare("month", "=", month);

    myTable.setQuery(query).find().then(res => {
      console.log(res, '000');
      context.commit('setTotals', res.data.objects[0])
    })
  },

  updateRateTotal(context) {
    var BaaS = require("minapp-sdk");
    BaaS.init("9b6f2104a25b4d4bce8a");

    BaaS.auth.anonymousLogin().then(res => {
      console.log(res)
    }, err => {
      console.log(err)
    })

    let myTable = new BaaS.TableObject("year2019");
    // let myRecord = myTable.getWithoutData('5cadc639fb9d7f2a7567b7db');
    let query = new BaaS.Query();
    let month = String(context.state.cMonth);
    query.compare("month", "=", month);

    let myRecord = myTable.setQuery(query).find().then(res => {
      console.log(res, 'res');
      let myRecord = myTable.getWithoutData(res.data.objects[0]._id);
      myRecord.set('rateTotal', 800);
      myRecord.update().then(res => {
        context.commit('setTotals', res.data)
      }, err => {
        console.log(err)
      })
    });
  }
}
