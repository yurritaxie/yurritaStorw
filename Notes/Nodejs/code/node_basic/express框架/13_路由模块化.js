const express = require("express");

const app = express();

const homeRouter = require("./routes/homeRouter.js");
const adminRouter = require("./routes/adminRouter.js");

app.use(homeRouter);

app.use(adminRouter);

app.all("*", (req, res) => {
  res.send("<h1>404 Not Found<h1>");
});

app.listen(3000, () => {
  console.log("服务已经启动...");
});
