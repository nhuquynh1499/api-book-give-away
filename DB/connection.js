const mongoose = require("mongoose");

const URL = "mongodb+srv://ngngocnhuquynh0104:CodersX1499@cluster0-kuqyf.mongodb.net/bookGiveAway?retryWrites=true&w=majority";
const connect = async () => {
  await mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

module.exports = connect;
