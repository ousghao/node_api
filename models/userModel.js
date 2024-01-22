const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        name : {
            type:String,
            required:[true,"enter the name please"]
        },

        email : {
            type : String,
            required:[true,"enter the email please"]
        },
        age : {
            type : Number,
            required:[true,"enter the age please"]
        }

    },
 
{timestamps : true}
)

const User = mongoose.model('User',userSchema);
module.exports = User;
