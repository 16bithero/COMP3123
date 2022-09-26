//TODO - Create Employee Module here and export to use in index.js

let employees = [
    {id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", Salary:5000},
    {id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", Salary:4000},
    {id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", Salary:5500},
    {id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", Salary:9000}
]

exports.employees = employees

function total(){
    let total = 0
    for (let x in employees){
        total = total + employees[x].Salary
    }
    return { "total_salary" : total }

}

function names(){
    var arr = []
    for (let x in employees) {
        empName = employees[x].firstName + " "+ employees[x].lastName
        arr.push(empName)
    }
    return arr.sort()
}

exports.total = total
exports.names = names
