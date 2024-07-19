


// document.addEventListener('DOMContentLoaded', function () {
//     const studentForm = document.getElementById('studentForm');
//     const studentTable = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
//     let students = JSON.parse(localStorage.getItem('students')) || [];

//     studentForm.addEventListener('submit', function (e) {
//         e.preventDefault();
//         const name = document.getElementById('name').value;
//         addStudent(name);
//         studentForm.reset();
//     });

//     function addStudent(name) {
//         const rollNo = generateRandomRollNo();
//         const serialNo = students.length + 1;
//         const student = { serialNo, rollNo, name };
//         students.push(student);
//         localStorage.setItem('students', JSON.stringify(students));
//         renderTable();
//     }

//     function generateRandomRollNo() {
//         return 'RN' + Math.floor(Math.random() * 10000);
//     }

//     function renderTable() {
//         studentTable.innerHTML = '';
//         students.forEach((student, index) => {
//             const row = studentTable.insertRow();
//             row.insertCell(0).textContent = student.serialNo;
//             row.insertCell(1).textContent = student.rollNo;
//             row.insertCell(2).textContent = student.name;

//             const actionsCell = row.insertCell(3);
//             const editButton = document.createElement('button');
//             editButton.textContent = 'Edit';
//             editButton.addEventListener('click', () => editStudent(index));

//             const deleteButton = document.createElement('button');
//             deleteButton.textContent = 'Delete';
//             deleteButton.addEventListener('click', () => deleteStudent(index));

//             actionsCell.appendChild(editButton);
//             actionsCell.appendChild(deleteButton);
//         });
//     }

//     function editStudent(index) {
//         const newName = prompt('Enter new name:', students[index].name);
//         if (newName) {
//             students[index].name = newName;
//             localStorage.setItem('students', JSON.stringify(students));
//             renderTable();
//         }
//     }

//     function deleteStudent(index) {
//         students.splice(index, 1);
//         students.forEach((student, i) => student.serialNo = i + 1);  // Recalculate serial numbers
//         localStorage.setItem('students', JSON.stringify(students));
//         renderTable();
//     }

//     // Initial render
//     renderTable();
// });