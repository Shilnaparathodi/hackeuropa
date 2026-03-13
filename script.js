function addStudent() {
    const nameInput = document.getElementById("name");
    const courseInput = document.getElementById("course");
    const table = document.getElementById("studentTable");

    const name = nameInput.value.trim();
    const course = courseInput.value.trim();

    if (!name || !course) {
        alert("Please fill all fields");
        return;
    }

    const row = table.insertRow();
    row.insertCell(0).textContent = name;
    row.insertCell(1).textContent = course;

    nameInput.value = "";
    courseInput.value = "";
}
