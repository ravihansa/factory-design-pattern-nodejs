class Nurse {
    constructor(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }

    getName() {
        return 'Nurse:- ' + this.firstName + ' ' + this.lastName;
    }
}

module.exports = Nurse;
