const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { init: initDB, Counter } = require("./db");

const logger = morgan("tiny");

// 根据 NODE_ENV 加载对应的 .env 文件
const env = process.env.NODE_ENV || 'development';
const envPath = path.resolve(process.cwd(), `.env.${env}`);
require('dotenv').config({ path: envPath });

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(logger);

// app.use('/', require('./routes/home.route'));
// app.use('/api', require('./routes/api.route'));
const homeRouter = require('./routes/home.route');
const apiRouter = require('./routes/api.route');
app.use('/', homeRouter);
app.use('/api', apiRouter);

const port = process.env.PORT || 80;

async function bootstrap() {
  await initDB();
  app.listen(port, () => {
    console.log("启动成功", port);
  });
}

bootstrap();
