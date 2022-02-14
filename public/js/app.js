let form = document.querySelector("#form");
let studentName = document.querySelector("#name");
let studentId = document.querySelector("#std_id");
let studentEmail = document.querySelector("#email");
let studentCourses = document.querySelector("#courses");

form.addEventListener("submit", async e => {
    e.preventDefault();

    let std_name = e.target[0].value;
    let std_id = e.target[1].value;
    let std_email = e.target[2].value;
    let std_courses = e.target[3].value;
    
    let payload = {
        name: std_name,
        std_id: std_id,
        email: std_email,
        courses: std_courses,
    };
    let url = "http://localhost:5000/api/students";
    let body = await window.fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });
    console.log(body);
});
