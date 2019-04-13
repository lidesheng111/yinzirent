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

    let myTable = new BaaS.TableObject("year2019");
    let myRecord = myTable.getWithoutData('5cadc639fb9d7f2a7567b7db');

    myRecord.set('rateTotal', 22);
    myRecord.update().then(res => {
      console.log(res, 'update')
    }, err => {
      console.log(err)
    })
  }
}
