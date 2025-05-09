const TestService = require('../services/test.service');
const service = new TestService();

async function postCount(req, res) {
  const { action, num } = req.body;
  if (action === "inc") {
    const _num = num && (typeof num === 'number') ? num : 1;
    await service.increase(_num);
  } else if (action === "clear") {
    await service.clear();
  }
  res.send({
    code: 0,
    data: await service.getCount()
  });
}

async function getCount(req, res) {
  const result = await service.getCount()
  res.send({
    code: 0,
    data: result,
  });
}

module.exports = { postCount, getCount  }