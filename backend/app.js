const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require("dotenv").config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, () => {
  console.log("connected to mongoose");
});

app.use(cors());
// if (process.env.NODE_ENV === "production") {
//   const path = require("path");
//   app.use(express.static(path.resolve(__dirname, "frontend", "dist")));
//   app.get("*", (req, res) => {
//     res.sendFile(
//       path.resolve(__dirname, "frontend", "dist", "index.html"),
//       function (err) {
//         if (err) {
//           res.status(500).send(err);
//         }
//       }
//     );
//   });
// }
app.use("/users", require("./routes/usersRoute"));
app.use("/image", require("./routes/imageUpload"));

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
