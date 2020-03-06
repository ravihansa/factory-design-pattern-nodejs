class Doctor {
    constructor(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }

    getName() {
        return 'Doctor:- ' + this.firstName + ' ' + this.lastName;
    }
}

module.exports = Doctor;
