let projects = new Array()
class Project {
    constructor(name, code, description, customer) {
        this.name = name;
        this.description = description;
        this.code = code.key
        this.customer = customer
    }

}
const addProject = (name, code, description, customer) => {
    let project = new Project(name, code, description, customer)
    code.key++
    projects.push(project)
}
const changeProject = (code, newName, newDescription, newCustomer) => {
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].code === code) {
            if (newName !== undefined) {
                projects[i].name = newName
            }
            if (newDescription !== undefined) {
                projects[i].description = newDescription
            }
            if (newCustomer !== undefined) {
                projects[i].customer = newCustomer
            }
            return 0
        }
    }
}
const deleteProject = (code) => {
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].code === code){
            projects.splice(i, 1)
            return
        }
    }
}


export default { projects, addProject, changeProject, deleteProject }


