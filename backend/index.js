const express = require('express')
const app = express();
var cors = require('cors')
const categoryRouter = require('./routers/category')
const port = 3000;
app.use(cors());
app.use(express.json())
app.use(categoryRouter)
app.listen(port, () => {
    console.log("server is up on port " + port);
})

