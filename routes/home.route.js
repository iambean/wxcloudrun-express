const express = require('express');
const path = require('path');
const router = express.Router();

// 默认首页
router.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});


// 小程序调用，获取微信 Open ID
router.get("/api/wx_openid", async (req, res) => {
  if (req.headers["x-wx-source"]) {
    res.send(req.headers["x-wx-openid"]);
  }
});

module.exports = router;