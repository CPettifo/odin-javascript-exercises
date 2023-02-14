const findTheOldest = function(people) {
    let oldest = 0;
    let oldestPerson;

    for (let {yearOfBirth, yearOfDeath, name} of people) {
        let death = yearOfDeath ? yearOfDeath : 2023;
        let age = death - yearOfBirth;
        if (age > oldest) {
            oldest = age;
            oldestPerson = name;
        }
    }
    return people.find(person=> person.name === oldestPerson);
};

// Do not edit below this line
module.exports = findTheOldest;
