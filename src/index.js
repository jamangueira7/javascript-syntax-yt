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
const Manager = require('./manager')
const Util = require('./util')

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

const CURRENT_YEAR = 2021
Date.prototype.getFullYear = () => CURRENT_YEAR

{
    const employee = new Employee({
        name: 'Joãozinho',
        age: 20,
        gender: GENDER.male
    })

    assert.deepStrictEqual(employee.name, "Mr. Joãozinho")
    assert.deepStrictEqual(employee.age, undefined)
    assert.deepStrictEqual(employee.gender, undefined)
    assert.deepStrictEqual(employee.grossPay, Util.formatCurrency(5000.40))
    assert.deepStrictEqual(employee.netPay, Util.formatCurrency(4000.32))

    //não tem set, não vai mudar
    const expectedBirthYear = 2001
    assert.deepStrictEqual(employee.birthYear, expectedBirthYear)

    employee.age = 80
    assert.deepStrictEqual(employee.birthYear, 1941)
    console.log('\n --------employee--------')
    console.log('employee.name', employee.name)
    console.log('employee.age', employee.age)
    console.log('employee.gender', employee.gender)
    console.log('employee.grossPay', employee.grossPay)
    console.log('employee.netPay', employee.netPay)
}

{
    const manager = new Manager({
        name: 'Mariazinha',
        age: 30,
        gender: GENDER.female
    })

    assert.deepStrictEqual(manager.name, "Ms. Mariazinha")
    assert.deepStrictEqual(manager.age, undefined)
    assert.deepStrictEqual(manager.gender, undefined)
    assert.deepStrictEqual(manager.grossPay, Util.formatCurrency(5000.40))
    assert.deepStrictEqual(manager.bonuses, Util.formatCurrency(2000))
    assert.deepStrictEqual(manager.netPay, Util.formatCurrency(6000.32))

    //não tem set, não vai mudar
    const expectedBirthYear = 1991
    assert.deepStrictEqual(manager.birthYear, expectedBirthYear)

    console.log('\n --------manager--------')
    console.log('manager.name', manager.name)
    console.log('manager.age', manager.age)
    console.log('manager.gender', manager.gender)
    console.log('manager.grossPay', manager.grossPay)
    console.log('manager.bonuses', manager.bonuses)
    console.log('manager.netPay', manager.netPay)
}
