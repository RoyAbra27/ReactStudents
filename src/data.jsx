import Student from "./routes/manyStudents";

/**
 * @type {Student[]}
 */
let students = [
  {
    name: "Roy",
    age: 21,
    birthdate: "27/05/1995"
  },
  {
    name: "Noam",
    age: 19,
    birthdate: "11/03/2002"
  },
  {
    name: "Ido",
    age: 155,
    birthdate: "16/05/1495"
  },
  {
    name: "Asi",
    age: 4,
    birthdate: "12/05/2018"
  }
];

export function getStudents() {
  return students;
}

/**
 * @param {age} age
 * @returns {Student}
 */
export function getStudent(age) {
  return students.find(Student => Student.age === age);
}

/**
 * @param {age} age
 * @returns {void}
 */
export function deleteStudent(age) {
  students = students.filter(student => student.age !== age);
}

/**
 * @typedef {{ name: string; age: number; birthdate: string }} Student
 */
