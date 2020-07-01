const mongoose= require('mongoose');

mongoose.connect('mongodb+srv://sai:iWDddZzcgE9k2EMU@cluster0.nvqga.mongodb.net/mydata?retryWrites=true&w=majority', {useNewUrlParser: true});


const schema = new mongoose.Schema({
  url: {
      type:String,
      required:true,
      unique:true
  },
  slug : String
});

const urlGroup = mongoose.model('urlGroup', schema);

module.exports = urlGroup;