const mongoose = require("mongoose");
const usersSchema = mongoose.Schema(
  {
		"name": {type:String,required:true},
		"level": {type:String,required:true},
		"score": {type:Number,required:true}

		
	}
);

const UsersModule = mongoose.model("users", usersSchema);
module.exports = {
  UsersModule,
};