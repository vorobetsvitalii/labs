import customers from "./custom_modules/customer.js"
import projects from "./custom_modules/project.js"
import performers from "./custom_modules/performer.js"
import activeProjects from "./custom_modules/activeProjects.js"

const findAllCustomerProjects = (customerCode) => {
    let arr = []
    for (let i = 0; i < projects.projects.length; i++) {
        if (projects.projects[i].customer === customerCode) arr.push(projects.projects[i])
    }
    if (arr.length > 0) {
        console.log("Customer projects: ", arr)
    }
    else {
        console.log("That customer don't have any projects")
    }
}

const findAllPerformerProjects = (performerCode) => {
    let arr = []
    for (let i = 0; i < activeProjects.activeProjects.length; i++) {
        console.log(activeProjects.activeProjects[i].performer)
        if (activeProjects.activeProjects[i].performer === performerCode) arr.push(activeProjects.activeProjects[i])
    }
    if (arr.length > 0) {
        console.log("Performer projects: ", arr)
    }
    else {
        console.log("That performer don't have any projects")
    }
}


let code = { key: 1 }
const cust1 = customers.createCustomer('cust1', 123, code)
const cust2 = customers.createCustomer('cust2', 234, code)
const cust3 = customers.createCustomer('cust3', 233244, code)

customers.addCustomer(cust1)
customers.addCustomer(cust2)
customers.addCustomer(cust3)
customers.changeCustomer(1, "newCust", 12221)
customers.deleteCustomer(2)

//console.log("Find: ", customers.findCustomer(1))
//console.log("All: " , customers.customers)

const proj1 = projects.CreateProject("pr1", code, "pr1desc", 1)
const proj2 = projects.CreateProject("pr2", code, "pr2desc", 1)
const proj3 = projects.CreateProject("pr3", code, "pr2desc", 1)
projects.addProject(proj1)
projects.addProject(proj2)
projects.addProject(proj3)
projects.changeProject(4, "newpr1", 'newdesc1', 1)
projects.deleteProject(proj2.code)
//console.log(projects.projects)

const perf1 = performers.createPerformer('perf1', code, 1, 11)
const perf2 = performers.createPerformer('perf2', code, 2, 22)
performers.addPerformer(perf1)
performers.addPerformer(perf2)
performers.changePerformer(7, 'perf1.1', 3, 33)
performers.deletePerformer(8)
//console.log(performers.performers)
//findAllCustomerProjects(1)
const act1 = activeProjects.createActiveProject(proj1.code, perf1.code, 2022, 2025)
const act2 = activeProjects.createActiveProject(proj2.code, perf1.code, 2022, 2035)
activeProjects.addActiveProject(act1)
activeProjects.addActiveProject(act2)


findAllPerformerProjects(perf1.code)






