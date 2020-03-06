const Patient = require('./patient');
const Nurse = require('./nurse');
const Doctor = require('./doctor');

const Factory = function (fname, lname, type) {
    if (type === 'patient') {
        return new Patient(fname, lname);
    } else if (type === 'nurse') {
        return new Nurse(fname, lname);
    } else if (type === 'doctor') {
        return new Doctor(fname, lname);
    }
}

module.exports = Factory;
