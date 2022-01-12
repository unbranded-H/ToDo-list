const form = document.forms["myForm"]
const input = form["task"]
const ul = document.getElementById("TaskList")
form.addEventListener("submit",(e)=> {
e.preventDefault()
const val = input.value
const newli = document.createElement("li")
newli.innerHTML = val + "<i onclick=\"deleteTask(this)\" class=\"fas fa-times-circle\" style=\"float:right;\"></i>"
ul.appendChild(newli)


})

function deleteTask(x) {
    console.log("Hellow")
    x.parentElement.remove()
}


