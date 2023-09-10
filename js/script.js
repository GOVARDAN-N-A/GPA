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

