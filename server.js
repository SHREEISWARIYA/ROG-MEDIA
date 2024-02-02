const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: `${__dirname}/.env` });
const app = require("./app");

const port = process.env.PORT;
const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    //useCreateIndex:true,
    useUnifiedTopology: true,
    //  useFindAndModify:false
  })
  .then(() => {
    console.log("DB Connection Successfull");
    app.listen(port, () => {
      console.log("Server started");
      console.log(`App running on port ${port}`);
    });
  })

  .catch((err) => {
    console.log("Error");
    console.log(err);
  });



