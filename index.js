const Factory = require('./factory');

var patient = Factory('Conor', 'McGregor', 'patient');
var nurse = Factory('Michelle', 'Waterson', 'nurse');
var doctor = Factory('Tony', 'Ferguson', 'doctor');

console.log(patient.getName());
console.log(nurse.getName());
console.log(doctor.getName());
