import customers from "./custom_modules/customer.js"
import projects from "./custom_modules/project.js"
import performers from "./custom_modules/performer.js"
import activeProjects from "./custom_modules/activeProjects.js"

const findAllCustomerProjects = (customerCode) => {
    let arr = []
    for(let i=0;i<projects.projects.length; i++) {
        if(projects.projects[i].customer === customerCode) arr.push(projects.projects[i])
    }
    if(arr.length > 0) {
    console.log("Customer projects: ", arr) 
    }
    else {
        console.log("That customer don't have any projects") 
    }
}

const findAllPerformerProjects = (performerCode) => {
    let arr = []
    for(let i=0;i<activeProjects.activeProjects.length; i++) {
        if(activeProjects.activeProjects[i].performer === performerCode) arr.push(activeProjects.activeProjects[i])
    }
    if(arr.length > 0) {
    console.log("Performer projects: ", arr) 
    }
    else {
        console.log("That performer don't have any projects") 
    }
}


let code = {key: 1}
customers.addCustomer('asdsad', 123, code)
customers.addCustomer('sddsf', 12343, code)
customers.changeCustomer(2, "iuoiuio")
customers.deleteCustomer(1)
projects.addProject('project1', code, "proj1", 2)
projects.addProject('project2', code, "proj2", 2)
projects.changeProject(4, 'pr')
performers.addPerformer("performer1", code, 1, 1)
performers.addPerformer("performer2", code, 2, 2)
performers.changePerformer(5, 'performer1.1', undefined, 11)
//findAllCustomerProjects(2)
activeProjects.addActiveProject(projects.projects[0], performers.performers[1].code, new Date('December 17, 2019 00:00:00'), new Date('December 17, 2029 00:00:00'))
activeProjects.addActiveProject(projects.projects[1], performers.performers[1].code, new Date('December 17, 2018 00:00:00'), new Date('December 17, 2024 00:00:00'))
findAllPerformerProjects(6)





