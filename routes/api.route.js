const express = require('express');
const router = express.Router();

const { 
  postCount, getCount
} = require('../controllers/test.controller');

// const {} = require('other controllers')

// 全部都在/api 的主路径下，真实 path 是/api/count
router.post('/count', postCount);
router.get('/count', getCount);

// router.put('/other', OtherFunction)

module.exports = router;