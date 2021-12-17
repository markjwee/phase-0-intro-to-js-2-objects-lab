// Write your solution in this file!
let employee = {
    name: "Cookie Wee",
    streetAddress: "433 Dean St",
};

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
    let newObject = {...employee}
    console.log(newObject)
    newObject[key] = value
  return newObject;
}

updateEmployeeWithKeyAndValue(employee, "gender", "male")

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value
    return employee
}

const deleteFromEmployeeByKey = (employee, key) => {
    let newObject = {...employee}
    console.log(newObject)
    delete newObject[key]
    return newObject
}

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key]
    return employee
}