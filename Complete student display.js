let students = [
    {
        name: "Juan",
        age: 20,
        course: "BSIT",
        grade: 88
    },
    {
        name: "Mark",
        age: 21,
        course: "BSIT",
        grade: 92
    },
    {
        name: "Anna",
        age: 19,
        course: "BSIT",
        grade: 85
    }
];

console.log("=== STUDENT MANAGEMENT SYSTEM ===");

students.forEach(function(student) {
    console.log("-------------------");
    console.log("Name:", student.name);
    console.log("Age:", student.age);
    console.log("Course:", student.course);
    console.log("Grade:", student.grade);

    if (student.grade >= 75) {
        console.log("Status: PASSED");
    } else {
        console.log("Status: FAILED");
    }
});