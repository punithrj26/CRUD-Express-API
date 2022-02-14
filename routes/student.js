const { Router } = require("express");
const { get } = require("express/lib/response");
const { getStudent, createStudent, getAllStudents,updateStudent,deleteStudent } = require("../controllers/student");
const router = Router();

// router.route("").get(getStudents).post(createStudent);

router.route("").post(createStudent).get(getAllStudents);

router.route("/:id").get(getStudent);
router.route("/:id").put(updateStudent);
router.route("/:id").delete(deleteStudent);


module.exports = router;
