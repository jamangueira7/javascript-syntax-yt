/*
Exemplos:
console.log(new EntityBase({
    name: 'João Mangueira',
    gender: 'male'
}).name)

console.log(new EntityBase({
    name: 'Xuxa da Silva',
    gender: 'famale'
}).name)*/

const assert = require('assert')
const Employee = require('./employee')

const GENDER = {
    male: 'male',
    female: 'female'
}

//Tete de erro por não passar a idade(age)
{
    const employee = new Employee({
        name: 'Xuxa da Silva',
        gender: GENDER.female
    })

    assert.throws(() => employee.birthYear, { message: 'you must define age first!' })
}

{
    const employee = new Employee({
        name: 'Joãozinho',
        age: 20,
        gender: GENDER.male
    })

    assert.deepStrictEqual(employee.name, "Mr. Joãozinho")
    assert.deepStrictEqual(employee.age, undefined)
    assert.deepStrictEqual(employee.gender, undefined)
    assert.deepStrictEqual(employee.grossPay, 'R$ 5.000,40')
}
