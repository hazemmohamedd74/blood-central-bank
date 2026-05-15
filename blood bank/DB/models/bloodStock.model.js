import { Schema , model } from "mongoose";

const bloodStockSchema = new Schema ({
    bloodType: {
        type: String,
        required: true,
        enum: ["A", "B", "AB", "O"] 
    },
    city :{
        type: String,
        requeried : [true , "city is requeried"],
    },
    expirationDate: { 
        type: Date,
        default: null 
    },
    quantity: { 
        type: Number,
        required: true,
        default: 0 
    }
    
},{
    timestamps : true 
})
const bloodStockModel = model("bloodStock", bloodStockSchema)
export default bloodStockModel