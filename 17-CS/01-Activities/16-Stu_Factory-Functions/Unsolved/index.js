// TODO: Fix the `greet` function so that it returns the correct values.
function student(name, gradeYear) {
  let studentInfo = {
    this.name,
    this.gradeYear,
  };

  return {
    greet: function () {
      console.log(
        `My name is ${studentInfo.name} and I am in ${studentInfo.gradeYear} grade`
      );
    },
  };
}

const newStudent = student('Dominique', '11th');
newStudent.greet();

module.exports = student;
