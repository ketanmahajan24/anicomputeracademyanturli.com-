const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
// SCHEMA CONNECTIN $ REQUIRE 

const adminRoutes = require("../routes/adminRoutes.js");
const Student= require ("../models/student");//STUDENT SCHEMA
const Course= require ("../models/course.js");//COURSES SCHEMA
const Blog= require ("../models/blog.js");//BLOG SCHEMA
const Visitor= require ("../models/enquiry.js");//VISITOR SCHEMA
const Feedback = require ("../models/feedback.js");//FEEDBACK SCHEMA

// protected route      /////
router.post("/login", authMiddleware, (req, res) => {
  res.redirect("/admin/dashboard");
});

router.get("/dashboard",authMiddleware, (req, res) => {
  res.render("./admin/home-admin.ejs")
});

// STUDENT PROTECTED -->> SHOW all students
router.get("/students", authMiddleware, async(req, res) => {
  const allStudents= await Student.find({});
  res.render("./admin/students.ejs",{allStudents});
});

//              ->> EDIT STUDENTS
router.get("/students/edit", authMiddleware,async (req, res) => {
 let {id}=req.params;
    const student = await Student.findById(id);
    const allCourses= await Course.find({});
    res.render("./admin-crud/student-edit.ejs",{student,allCourses});
});

//              ->> ADD NEW STUDENTS
router.get("/students/new", authMiddleware,async (req, res) => {
  const allCourses= await Course.find({});
        res.render("./admin-crud/student-new.ejs",{allCourses});
});



// COURSES PROTECTED -->> SHOW all COURSES
router.get("/courses", authMiddleware, async(req, res) => {
  const allCourses= await Course.find({});
  res.render("./admin/courses-admin.ejs",{allCourses});
});

//              ->> EDIT COURSES
router.get("/courses/edit", authMiddleware,async (req, res) => {
  let {id}=req.params;
    const course= await Course.findById(id);
    res.render("./admin-crud/course-edit.ejs",{course });
});

//              ->> ADD NEW COURSES
router.get("/courses/new", authMiddleware,async (req, res) => {
  res.render("./admin-crud/course-new.ejs");
});






// BLOGS PROTECTED -->> SHOW ALL BLOGSS
router.get("/blogs", authMiddleware, async(req, res) => {
  const allBlogs= await Blog.find({});
  res.render("./admin/blogs-admin.ejs",{allBlogs});
});

//              ->> EDIT BLOGS
router.get("/blogs/edit", authMiddleware,async (req, res) => {
  let {id}=req.params;
    const blog = await Blog.findById(id);
    res.render("./admin-crud/blog-edit.ejs",{blog});
});

//              ->> ADD NEW BLOGS
router.get("/blogs/new", authMiddleware,async (req, res) => {
  res.render("./admin-crud/blog-new.ejs");
});



// ENQUIRY'S PROTECTED -->> SHOW ALL enquiry
router.get("/enquiries", authMiddleware, async(req, res) => {
  const allVisitors= await Visitor.find({});
  res.render("./admin/enquiry-admin.ejs",{allVisitors});;
});


// FEEDBACKS PROTECTED -->> SHOW ALL FEEDBACKS
router.get("/enquiries", authMiddleware, async(req, res) => {
  const allFeedbacks= await Feedback.find({});
  res.render("./admin/feedback-admin.ejs",{allFeedbacks});
});




































module.exports = router;
