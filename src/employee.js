const EntityBase = require('./entityBase')
const Util = require('./util')

class Employee extends EntityBase {
    static #TAXES_PERCENTAL = 0.2
    #grosspay = 5000.40

    get grossPay() {
        return Util.formatCurrency(this.#grosspay)
    }
}

module.exports = Employee
