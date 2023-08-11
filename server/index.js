const express = require(`express`);
const app = express();
const { getBigPosters } = require("./routes/getBigPosters");
const { getSingleItem } = require("./routes/getSingleItem");
const { getRandom } = require("./routes/getRandom");
const { getAllItems } = require("./routes/getAllItem");
const { createShipingInfo } = require("./routes/shipInfo");
app.use(express.json());
const cors = require("cors");
app.use(cors((origin = "*")));

app.listen(process.env.PORT || 3000, () => {
	console.log("server is running");
});

app.get("/items/:item", getBigPosters);
app.get("/item/:id", getSingleItem);
app.get("/random", getRandom);
app.get("/allItems", getAllItems);
app.post("/payNow", createShipingInfo);
