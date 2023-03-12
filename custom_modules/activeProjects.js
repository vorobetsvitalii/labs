let activeProjects = new Array()
class ActiveProjects {
    constructor(project, performer, start, end) {
        this.project = project;
        this.performer = performer;
        this.start = start;
        this.end = end;
    }

}
const createActiveProject = (project, performer, start, end) => {
    let activeProject = new ActiveProjects(project, performer, start, end)
    return activeProject
}
const addActiveProject = (activeProject) => {
    activeProjects.push(activeProject)
}
const changeActiveProject = (code, newEnd) => {
    let index = customers.findIndex(x => x.code === code);
            if (newEnd !== undefined) {
                activeProjects[index].end = newEnd
            }
            return
}
const deleteActiveProject = (code) => {
    let index = customers.findIndex(x => x.code === code);
            activeProjects.splice(index, 1)
            return
}

const findActiveProject = (code) => {
    let index = customers.findIndex(x => x.code === code);
        if (index === -1) return -1
        else return activeProjects[index]
}

export default { activeProjects, addActiveProject, changeActiveProject, deleteActiveProject, findActiveProject, createActiveProject }
