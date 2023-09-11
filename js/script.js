function calculateAndDisplayGPA() {
    const gradeSelects = document.querySelectorAll('.grade-select');
    let totalCredits = 0;
    let totalGradePoints = 0;

    gradeSelects.forEach((select) => {
        const grade = parseFloat(select.value);
        const credits = getCourseCredits(select.id);

        totalCredits += credits;
        totalGradePoints += credits * grade;
    });

    const gpa = totalGradePoints / totalCredits;
    const gpaSpan = document.getElementById('gpa');
    gpaSpan.textContent = gpa.toFixed(2);
}


function getCourseCredits(courseId) {
    switch (courseId) {
        case 'CS3452-grade':
            return 3;
        case 'CS3491-grade':
            return 4;
        case 'CS3492-grade':
            return 3;
        case 'CS3401-grade':
            return 4;
        case 'CS3451-grade':
            return 3;
        case 'GE3451-grade':
            return 2;
        case 'SB8021-grade':
            return 2;
        case 'CS3461-grade':
            return 1.5;
        case 'CS3481-grade':
            return 1.5;
        default:
            return 0; 
                    }
}
function showCSE() {
    document.getElementById("cseContent").style.display = "block";
    document.getElementById("eceContent").style.display = "none";
}

function showECE() {
    document.getElementById("cseContent").style.display = "none";
    document.getElementById("eceContent").style.display = "block";
}


function generateGPAInputs() {
    const selectedSemester = parseInt(document.getElementById('currentSemester').value);
    const gpaInputsContainer = document.getElementById('gpaInputs');
    gpaInputsContainer.innerHTML = '';

    for (let i = 1; i <= selectedSemester; i++) {
        const gpaInput = document.createElement('div');
        gpaInput.innerHTML = `
            <label for="semester${i}">Semester ${i} GPA:</label>
            <input type="number" id="semester${i}" min="0" max="10" step="0.01">
        `;
        gpaInputsContainer.appendChild(gpaInput);
    }
}

function calculateCGPA() {
    const selectedSemester = parseInt(document.getElementById('currentSemester').value);
    const semesterGPAs = [];

    for (let i = 1; i <= selectedSemester; i++) {
        const gpaInput = parseFloat(document.getElementById(`semester${i}`).value);
        semesterGPAs.push(gpaInput);
    }

    // Calculate the average GPA of the selected semesters as CGPA
    const totalGPA = semesterGPAs.reduce((total, gpa) => total + gpa, 0);
    const averageCGPA = totalGPA / semesterGPAs.length;

    // Display the calculated CGPA on the webpage
    const cgpaSpan = document.getElementById('cgpa');
    cgpaSpan.textContent = averageCGPA.toFixed(2);
}

document.getElementById('currentSemester').addEventListener('change', generateGPAInputs);

generateGPAInputs();
