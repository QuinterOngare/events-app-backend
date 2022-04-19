const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const placeRouter = require("./routers/place");

const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());
app.use(userRouter);
app.use(placeRouter);

app.listen(port, () => {
  console.log("server is running on port " + port);
});
