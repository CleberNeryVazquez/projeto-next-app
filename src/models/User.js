import mongoose from "mongoose";

const {Schema} = mongoose
const useSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    email : {
        type:String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }

},
    {timestamps: true}
);
export default mongoose.model('User', useSchema);
