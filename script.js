/*
COMPLETE THE FOLLOWING TASKS WITHOUT MODIFYING ANY OF THE CODE IN THE HTML OR CSS FILE.

You should only write code in the JavaScript functions below, as well as the object with your student information.

Each function is annotated with a comment explaining what it should do.

By the end of the lab, there shouldn't be any question marks left on the report card.
*/

const studentInformation = {
  name: "Stella Kim",
  grade: "A+++++++",
  advisor: "Pancake",
  major: "Computer Science",
  graduationYear: "2023",
  imageUrl: "https://media.sketchfab.com/models/49efaa2c91094e4ab3c8184d2ec537a9/thumbnails/b0b040369cc541719272d827e328e643/7f49e2acb05a4beab23e908069e2ca22.jpeg",

}

let semester = "Spring Semester"

const studentData = {
  "Spring Semester": [
    { code: "LIT 101", name: "English Literature 101", semester: "Spring 2021", credits: 5, grade: "B+" },
    { code: "CS 50", name: "Intro to Computer Science", semester: "Spring 2021", credits: 5, grade: "A-" },
    { code: "WD 140", name: "Modern Web Development", semester: "Spring 2021", credits: 5, grade: "A+" },
    { code: "JS 2.0", name: "Serverside JavaScript", semester: "Spring 2021", credits: 10, grade: "A-" },
  ],
  "Fall Semester": [
    { code: "Math 600", name: "Differential Equations", semester: "Fall 2020", credits: 5, grade: "A-" },
    { code: "CS 10", name: "Python Programming", semester: "Fall 2020", credits: 5, grade: "A" },
    { code: "History 99", name: "History of Computers", semester: "Fall 2020", credits: 5, grade: "A-" },
    { code: "MD 00", name: "Meditation and Mindfullness", semester: "Fall 2020", credits: 5, grade: "A+" },
  ],
  "Winter Term": [
    { code: "PHYS ED", name: "Physical Activity", semester: "Winter 2020", credits: 5, grade: "A-" },
    { code: "GEN ED", name: "General Education Requirement", semester: "Winter 2020", credits: 5, grade: "A+" },
  ],
}

const gpaPointsLookup = {
  "A+": 4.0,
  A: 4.0,
  "A-": 3.7,
  "B+": 3.3,
  B: 3.0,
  "B-": 2.7,
  "C+": 2.3,
  C: 2.0,
  "C-": 1.7,
  "D+": 1.3,
  D: 1.0,
  "D-": 0.7,
  F: 0.0,
}

/**
 * QUERY SELECTORS VARIABLES GO HERE
 */
const dropdown = document.querySelector(".dropdown")

// ADD more query selectors here

const student_name = document.querySelector("#student-name")
const student_advisor = document.querySelector("#student-advisor")
const student_major = document.querySelector("#student-major")
const student_grade = document.querySelector("#student-grade-level")
const student_year = document.querySelector("#student-graduation-year")
const student_img = document.querySelector("#student-image")

const semesterDropdown = document.querySelector(".semester-dropdown")
const dropdownBtn = document.querySelector(".dropdown-button")
const dropdownLabel = document.querySelector(".dropdown-label")

const fallSem = document.querySelector("#fall-semester")
const springSem = document.querySelector("#spring-semester")
const winterSem = document.querySelector("#winter-term")

const reportCardTable = document.querySelector(".report-card-table")

/**
 * Modify the report card to display the correct grade level from the lookup table above.
 *
 * @param {String} studentName - the name of the student
 */
function updateStudentName(studentName) {
  // code goes here
  studentName == studentInformation.name;
  student_name.innerHTML = studentName;
}

/**
 * Modify the report card to display the correct grade level from the lookup table above.
 *
 * @param {String|Number} studentGradeLevel - the grade level of the student
 */
function updateStudentGradeLevel(studentGradeLevel) {
  // code goes here
  studentGradeLevel == studentInformation.grade;
  student_grade.innerHTML = studentGradeLevel;
}

/**
 * Modify the report card to display the correct advisor from the lookup table above.
 *
 * @param {String} studentAdvisor - the advisor of the student
 */
function updateStudentAdvisor(studentAdvisor) {
  // code goes here
  studentAdvisor == studentInformation.advisor;
  student_advisor.innerHTML = studentAdvisor;
}

/**
 * Modify the report card to display the correct major from the lookup table above.
 *
 * @param {String} studentMajor - the major of the student
 */
function updateMajor(studentMajor) {
  // code goes here
  studentMajor == studentInformation.major;
  student_major.innerHTML = studentMajor;
}

/**
 * Modify the report card to display the correct graduation year from the lookup table above
 *
 * @param {Number} graduationyear - the year the student graduates
 */
function updateStudentGraduationYear(graduationyear) {
  // code goes here
  graduationyear == studentInformation.graduationYear;
  student_year.innerHTML = graduationyear;
}

/**
 * Modify the img element using `setAttribute` so that that the src attribute
 * stores the link to your image.
 *
 * @param {String} url - a link to an image
 */
function updateStudentImage(imageUrl) {
  // code goes here
  imageUrl == studentInformation.imageUrl;
  student_img.src = imageUrl;
}

/**
 * This function should run as soon as the page loads and update the correct student info
 */
function populateStudentInfo({ name, grade, advisor, major, graduationYear, imageUrl }) {
  updateStudentName(name)
  updateStudentGradeLevel(grade)
  updateStudentAdvisor(advisor)
  updateMajor(major)
  updateStudentGraduationYear(graduationYear)
  updateStudentImage(imageUrl)
}

/**
 * This function should add a headers row to the report card table
 */
function addReportCardHeaders() {
  // update the code here
  reportCardTable.innerHTML += `
    <div class="table-header">
      <h4> Code</h4>
      <h4> Name </h4>
      <h4> Credits </h4>
      <h4>Letter</h4>
    </div>
  `
}

/**
 * This function should take in a single course and create a row with the
 * course code, course name, course semester, course credits, course letter grade, and course points columns.
 *
 * @param {Object} course
 * @param {Number} rowNum
 */
function addCourseRowToReportCard(course, rowNum) {
  // update the code here with information about the course passed to this function
  reportCardTable.innerHTML += `
    <div class="table-row">
      <h4 class="code-col">${course.code}</h4>
      <h4 class="name-col">${course.name}</h4>
      <h4 class="sen-col">${course.semester}</h4>
      <h4 class="credits-col">${course.credits}</h4>
      <h4 class="code-col">${course.grade}</h4>
    </div>
  `
}


/**
 * This is the primary function used to update the report card when the semester changes.
 * It should call the other functions responsible for creating the necessary HTML
 */
function updateReportCard() {
  updateDropdownLabel()
  reportCardTable.innerHTML = ``

  // add your code here
  springVal = studentData[semester];
  addReportCardHeaders();
  springVal.forEach(element => addCourseRowToReportCard(element));


}

/**
 * This function should toggle the dropdown.
 *
 * If the dropdown classList contains the "closed" class, it should remove it.
 * If the dropdown classList doesn't contain the "closed" class, it should add it.
 */
function toggleDropdown() {
  // code goes here
}

/**
 * This function should update the inner html of the dropdown label to be the current
 * value stored in the `semester` variable.
 */
function updateDropdownLabel() {
  // code goes here
}

// Add an event listener for the dropdown button that calls the toggleDropdown button

// Add 3 event listeners - one for the fall semester option, the spring semester option, and the winter term option
// Each callback function one should update the `semester` variable,
// call the `updateReportCard` function and toggle the dropdown

/*
* Add functions here to make it execute as soon as the page loads
*/
window.onload = function () {
  // run your function here to make it execute as soon as the page loads
  populateStudentInfo(studentInformation);
  updateReportCard();
}
