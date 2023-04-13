const {add, findName} = require('../index')

test( 'tests if the add function returns the correct sum', () => {

    // arrange
    const numberOne = 5
    const numberTwo = 10

    // act
    const sum = add(numberOne, numberTwo)


    // assert
    expect(sum).toBe(15)
})

test ('finds a name in an array with data', () => {

    // arrange
    const people = [
        { name: "piet", id: 1 },
        { name: "klaas", id: 2 },
        { name: "jaap", id: 3 },
    ]

    const personToFind = "klaas"

    // act

    const result = findName(people, personToFind)


    // assert

    expect(result).toEqual({ name: "klaas", id: 2 })

})

test('find by name returns 0 if no user found' , () => {

    // arrange
    const people = [
        { name: "piet", id: 1 },
        { name: "klaas", id: 2 },
        { name: "jaap", id: 3 },
    ]

    const personToFind = "Beppie"

    // act

    const result = findName(people, personToFind)


    // assert

    expect(result).toBeNull()

})