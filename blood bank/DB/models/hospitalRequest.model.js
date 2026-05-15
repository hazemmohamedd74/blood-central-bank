import { Schema , model } from "mongoose";

const hospitalRequestSchema = new Schema ({
    
    hospitalName :{
        type:String ,
        required : true ,
    },
    bloodType: {
        type: String,
        required: true,
        enum: ["A", "B", "AB", "O"] 
    },
    city :{
        type: String,
        requeried : [true , "city is requeried"],
    },
    quantity: { 
        type: Number,
        required: true,
        min: 1 
    },
    urgency: {
        type: String,
        required: true,
        enum: ["Immediate", "Urgent", "Normal"] 
    },
    requestDate: { 
        type: Date, 
        default: Date.now 
    }
    
},{
    timestamps : true 
})
const hospitalRequestModel = model("hospitalRequest", hospitalRequestSchema)
export default hospitalRequestModel