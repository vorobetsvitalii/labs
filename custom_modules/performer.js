let performers = new Array()
class Performer {
    constructor(name, code, experience, workers) {
        this.name = name;
        this.code = code.key
        this.experience = experience;
        this.workers = workers;
    }

}
const addPerformer = (name, code, experience, workers) => {
    let performer = new Performer(name, code, experience, workers)
    code.key++
    performers.push(performer)
}
const changePerformer = (code, newName, newExperience, newWorkers) => {
    for (let i = 0; i < performers.length; i++) {
        if (performers[i].code === code) {
            if (newName !== undefined) {
                performers[i].name = newName
            }
            if (newExperience !== undefined) {
                performers[i].experience = newExperience
            }
            if (newWorkers !== undefined) {
                performers[i].workers = newWorkers
            }
            return 
        }
    }
}
const deletePerformer = (code) => {
    for (let i = 0; i < performers.length; i++) {
        if (performers[i].code === code){
            performers.splice(i, 1)
            return
        }
    }
}


export default { performers, addPerformer, changePerformer, deletePerformer }


