
const { Counter } = require("../db");

class TestService{
  constructor(){

  }
  
  async increase (num=1) {
    await Counter.create();
  }

  async clear(){
    await Counter.destroy({
      truncate: true,
    });
  }

  async getCount(){
    return (await Counter.count());
  }
}

module.exports = TestService;