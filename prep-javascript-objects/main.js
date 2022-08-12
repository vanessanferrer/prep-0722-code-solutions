const person = {
  firstName: 'Vanessa',
  lastName: 'Ferrer',
  hobby: 'reading'
};

console.log(person);

var fullName = "The person's name is " + person.firstName + ' ' + person.lastName;
console.log(fullName);

person.job = 'teacher';
console.log("The person's current job is: " + person.job);

person.previousJob = 'server';
console.log("The person's previous job is: " + person.previousJob);

console.log(person);
