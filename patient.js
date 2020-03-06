class Patient {
    constructor(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }

    getName() {
        return 'Patient:- ' + this.firstName + ' ' + this.lastName;
    }
}

module.exports = Patient;
