let projects = new Array()
class Project {
    constructor(name, code, description, customer) {
        this.name = name;
        this.description = description;
        this.code = code.key
        this.customer = customer
    }

}
const CreateProject = (name, code, description, customer) => {
    let project = new Project(name, code, description, customer)
    code.key++
    return project
}
const addProject = (project) => {
    projects.push(project)
}
const changeProject = (code, newName, newDescription, newCustomer) => {
    let index = projects.findIndex(x => x.code === code);
    if (newName !== undefined) {
        projects[index].name = newName
    }
    if (newDescription !== undefined) {
        projects[index].description = newDescription
    }
    if (newCustomer !== undefined) {
        projects[index].customer = newCustomer
    }
}
const deleteProject = (code) => {
    let index = projects.findIndex(x => x.code === code);
    projects.splice(index, 1)
}

    export default { projects, addProject, changeProject, deleteProject, CreateProject }


