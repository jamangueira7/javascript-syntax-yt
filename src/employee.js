const EntityBase = require('./entityBase')
const Util = require('./util')

class Employee extends EntityBase {
    static #TAXES_PERCENTUAL = 0.2
    #grosspay = 5000.40

    get grossPay() {
        return Util.formatCurrency(this.#grosspay)
    }

    get netPay() {
        const result = this.#grosspay - (this.#grosspay * Employee.#TAXES_PERCENTUAL)
        return Util.formatCurrency(result)
    }
}

module.exports = Employee
