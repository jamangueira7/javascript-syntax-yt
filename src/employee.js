const EntityBase = require('./EntityBase')

class Employee extends EntityBase {
    static #TAXES_PERCENTAL = 0.2
    #grosspay = 5000.40

    get grossPay() {
        return Intl.NumberFormat("pt-br", {
            currency: "BRL",
            style: "currency"
        }).format(this.#grosspay)
    }
}

module.exports = Employee
