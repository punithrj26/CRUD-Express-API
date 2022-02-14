const { Schema, model } = require("mongoose");

const StudentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    std_id: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    courses: {
        type: [""],
        required:true,
        default: ['JavaFullstack'],
    },
},{timestamps:true}
);

module.exports=model("students", StudentSchema);