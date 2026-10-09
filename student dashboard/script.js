
let students = [];
let editIndex = -1;

function insertStudent() {
    let roll = document.getElementById("roll").value;
    let name = document.getElementById("name").value;
    let dept = document.getElementById("dept").value;

    if (roll == "" || name == "" || dept == "") {
        alert("Fill all fields");
        return;
    }

    students.push({ roll, name, dept });
    displayStudents();
    clearFields();
}


function displayStudents() {
    let table = document.getElementById("studentTable");
    table.innerHTML = "";

    students.forEach((s, i) => {
        table.innerHTML += `
            <tr>
                <td>${s.roll}</td>
                <td>${s.name}</td>
                <td>${s.dept}</td>
                <td>
                    <button onclick="editStudent(${i})">Edit</button>
                    <button onclick="deleteStudent(${i})">Delete</button>
                </td>
            </tr>`;
    });
}

function editStudent(i) {
    editIndex = i;
    document.getElementById("roll").value = students[i].roll;
    document.getElementById("name").value = students[i].name;
    document.getElementById("dept").value = students[i].dept;
}


function updateStudent() {
    if (editIndex == -1) {
        alert("Select Edit first");
        return;
    }

    students[editIndex] = {
        roll: document.getElementById("roll").value,
        name: document.getElementById("name").value,
        dept: document.getElementById("dept").value
    };

    editIndex = -1;
    displayStudents();
    clearFields();
}


function deleteStudent(i) {
    students.splice(i, 1);
    displayStudents();
}


function clearFields() {
    document.getElementById("roll").value = "";
    document.getElementById("name").value = "";
    document.getElementById("dept").value = "";
}

