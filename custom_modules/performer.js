let performers = new Array()
class Performer {
    constructor(name, code, experience, workers) {
        this.name = name;
        this.code = code.key
        this.experience = experience;
        this.workers = workers;
    }

}
const createPerformer = (name, code, experience, workers) => {
    let performer = new Performer(name, code, experience, workers)
    code.key++
    return performer
}
const addPerformer = (performer) => {
    performers.push(performer)
}
const changePerformer = (code, newName, newExperience, newWorkers) => {
    let index = performers.findIndex(x => x.code === code);
            if (newName !== undefined) {
                performers[index].name = newName
            }
            if (newExperience !== undefined) {
                performers[index].experience = newExperience
            }
            if (newWorkers !== undefined) {
                performers[index].workers = newWorkers
            }
}
const deletePerformer = (code) => {
    let index = performers.findIndex(x => x.code === code);
            performers.splice(index, 1)
}


export default { performers, addPerformer, changePerformer, deletePerformer, createPerformer }


