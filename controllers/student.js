/* HTTP REQUEST GET
@ACCESS PUBLIC
@URL api/students

*/
exports.getStudents = (req, res) => {
  res.send("Hello Bham! How are You?");
};

const StudentSchema = require("../model/Student");

exports.getAllStudents = async (req, res) => {
  try {
    let payload = await StudentSchema.find({});
    res.status(200).json({ message: "featched all Data", payload });
  } catch (err) {
    res.status(501).json({ message: "Server Error" });
  }
}


exports.getStudent = async (req, res) => {
  try {
    let payload = await StudentSchema.findOne({ _id: req.params.id });
    res.status(200).json({ message: "featched students".payload });
  } catch (err) {
    res.status(501).json({ message: "Server Error" });
  }
}

// exports.createStudent = async (req, res) => {
//   let { name, std_id, email, courses } = req.body;
//   let payload = {
//     name,
//     std_id,
//     email,
//     courses,
//   };

//   let data = await StudentSchema.create(payload);
//   res.status(201).json({ message: "Successfully created Student 😁", data });
// };

exports.createStudent = async (req, res) => {
  try {
    let { name, std_id, email, courses } = req.body;
    let payload = {
      name, std_id, email, courses
    };
    let data = await StudentSchema.create(payload);
    res.status(201).json({ message: "Successfully created Student 👍", data });
  } catch (err) {
    console.log(err);    
    res.status(501).json({ message:"Server error😩"})
  }
}

exports.updateStudent = async (req, res) => {
  try {
    let { name, std_id, email, courses } = req.body;
    let payload = await StudentSchema.findByIdAndUpdate(
      req.params.id,
      {
        name, std_id, email, courses,
      },
      { new: true }
    );
    await payload.save();
    res.status(201).json({ message: "Successfully Student updated", payload });
  } catch (err) {
    res.status(501).json({ message: "Server Error" });
    
  }
}

exports.deleteStudent = async (req, res) => {
  try {
    await StudentSchema.findByIdAndDelete(req.params.id);
    res.status(201).json({ message: "Successfully deleted Student" });
  } catch (err) {
    res.status(501).json({ message: "Server Error" });
  }
}