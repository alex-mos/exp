var bob = {
  firstName: 'Bob',
  lastName: 'Jones',
  phoneNumber: '(650) 777-7777',
  email: 'bob.jones@example.com',
}

var mary = {
  firstName: 'Mary',
  lastName: 'Johnson',
  phoneNumber: '(650) 888-8888',
  email: 'mary.johnson@example.com',
}

var contacts = [bob, mary]

function printPerson(person) {
  console.log(person.firstName + ' ' + person.lastName)
}

function list() {
  const contactsLength = contacts.length
  for (let i = 0; i < contactsLength; i++) {
    printPerson(contacts[i])
  }
}

/* Create a search function
then call it passing "Jones"*/
var search = function(lastName) {
  const contactsLength = contacts.length
  for (let i = 0; i < contactsLength; i++) {
    if (lastName === contacts[i].lastName) {
		    printPerson(contacts[i])
    }
  }
}

search('Jones')

var add = function(firstName, lastName, email, phoneNumber) {
  this.firstName = firstName
  this.lastName = lastName
  this.email = email
  this.phoneNumber = phoneNumber

  contacts.push(this)
}

add('Alexander', 'Mospan', 'alexander.mospan@gmail.com', '89511300551')

list()
