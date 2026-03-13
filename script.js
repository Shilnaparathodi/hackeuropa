function addStudent(){

let name = document.getElementById("name").value
let course = document.getElementById("course").value

if(name=="" || course==""){
alert("Please fill all fields")
return
}

let table = document.getElementById("studentTable")

let row = table.insertRow()

let cell1 = row.insertCell(0)
let cell2 = row.insertCell(1)

cell1.innerHTML = name
cell2.innerHTML = course

document.getElementById("name").value=""
document.getElementById("course").value=""

}
