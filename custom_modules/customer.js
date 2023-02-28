let customers = new Array()
class Customer {
    constructor(name, budget, code) {
        this.name = name;
        this.budget = budget;
        this.code = code.key
    }

}
const addCustomer = (name, budget, code) => {
    let customer = new Customer(name, budget, code)
    code.key++
    customers.push(customer)
}
const changeCustomer = (code, newName, newBudget) => {
    for (let i = 0; i < customers.length; i++) {
        if (customers[i].code === code) {
            if (newName !== undefined) {
                customers[i].name = newName
            }
            if (newBudget !== undefined) {
                customers[i].budget = newBudget
            }
            return 0
        }
    }
}
const deleteCustomer = (code) => {
    for (let i = 0; i < customers.length; i++) {
        if (customers[i].code === code){
            customers.splice(i, 1)
            return
        }
    }
}

const findCustomer = (code) => {
    for (let i = 0; i < customers.length; i++) {
        if (customers[i].code === code) return customers[i]
    }
    return -1
}

export default { customers, addCustomer, changeCustomer, deleteCustomer, findCustomer }


