let activeProjects = new Array()
class ActiveProjects {
    constructor(project, performer, start, end) {
        this.project = project;
        this.performer = performer;
        this.start = start;
        this.end = end;
    }

}
const addActiveProject = (project, performer, start, end) => {
    let activeProject = new ActiveProjects(project, performer, start, end)
    activeProjects.push(activeProject)
}
const changeActiveProject = (code, newEnd) => {
    for (let i = 0; i < activeProjects.length; i++) {
        if (activeProjects[i].code === code) {
            if (newEnd !== undefined) {
                activeProjects[i].end = newEnd
            }
            return
        }
    }
}
const deleteActiveProject = (code) => {
    for (let i = 0; i < activeProjects.length; i++) {
        if (activeProjects[i].code === code){
            activeProjects.splice(i, 1)
            return
        }
    }
}

const findActiveProject = (code) => {
    for (let i = 0; i < activeProjects.length; i++) {
        if (activeProjects[i].code === code) return activeProjects[i]
    }
    return -1
}

export default { activeProjects, addActiveProject, changeActiveProject, deleteActiveProject, findActiveProject }
