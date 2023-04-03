let studentsArray = [];

function clickHandler(event) {
    if (event.target.tagName === "BUTTON") {

        if(event.target.id === "changeBG") {
            console.log("Test")
        }
        else if (event.target.textContent === "Submit") {
            let firstNameInput = document.querySelector("#firstname");
            let lastNameInput = document.querySelector("#lastname");
            //lastNameInput.value = "";
            let progNameInput = document.querySelector("#progname");
            let student = {
                firstName: firstNameInput.value,
                lastName: lastNameInput.value,
                progName: progNameInput.value
            }
            console.log(student)
            studentsArray.push(student)
            firstNameInput.value = "";
            lastNameInput.value = "";
            progNameInput.value = "";
            console.log(studentsArray)
        }

        console.log(event.target)
    }
}

document.body.addEventListener("click", clickHandler)

function addStudentToList(newStudent) {

    const newLi = document.createElement("li")

    for (let i = 0; i < newStudent.length; i++) {
        if ( newStudent[i].firstName != "" && newStudent[i].lastName != "" && newStudent[i].progName != "") {
            if (newStudent[i].progName === "CIT") {
                const citList = document.querySelector("#cit")
                newLi.textContent = newStudent[i].firstName;
                citList.appendChild(newLi);
            }
            else if (newStudent[i].progName === "CST") {
                const cstList = document.querySelector("#cst")
                newLi.textContent = newStudent[i].firstName;
                cstList.appendChild(newLi);
            }
        }
    }
}