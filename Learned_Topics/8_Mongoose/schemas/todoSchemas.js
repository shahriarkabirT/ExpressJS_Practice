const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    },
  description: String,
  status: {
    type: String,
    enum: ["active", "inactive"],
    },
  date: { 
    type: Date,
    default: Date.now 
    },
});

//instance method
todoSchema.methods = {
  findActive : function(){
    return mongoose.model('todo').find({status:"active"});
  }
};

//static method
todoSchema.statics = {
  findByJs : function(){
    return this.find({title: /sh/i })
  }
}
module.exports = todoSchema;