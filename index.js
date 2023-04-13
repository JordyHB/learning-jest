function add(num1, num2) {
    return num1 + num2
}


function findName(list, requestedName) {
    let result = list.find((person) => {
        return person.name === requestedName
    })

    if (result === undefined) {
        return result = null
    }
    else {
        return result
    }
}

module.exports = {
    add: add,
    findName: findName
}