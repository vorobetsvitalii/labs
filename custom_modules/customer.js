let customers = new Array()
class Customer {
    constructor(name, budget, code) {
        this.name = name;
        this.budget = budget;
        this.code = code.key
    }
}
const createCustomer = (name, budget, code) => {
    let customer = new Customer(name, budget, code)
    code.key++
    return customer
}
const addCustomer = (customer) => {
    customers.push(customer)
}
const changeCustomer = (code, newName, newBudget) => {
    let index = customers.findIndex(x => x.code === code);
            if (newName !== undefined) {
                customers[index].name = newName
            }
            if (newBudget !== undefined) {
                customers[index].budget = newBudget
            }
            return 0
    }
const deleteCustomer = (code) => {
    let index = customers.findIndex(x => x.code === code);
    if(index === -1){
        return -1
    }
    else {
        customers.splice(index, 1)
    }
}

const findCustomer = (code) => {
   let index = customers.findIndex(x => x.code === code);
   if(index === -1) return -1
   else return customers[index]
}

export default { customers, addCustomer, changeCustomer, deleteCustomer, findCustomer, createCustomer }


