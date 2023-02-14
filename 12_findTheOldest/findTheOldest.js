const findTheOldest = function(people) {
    let birth, death, oldest, oldestPerson;
    let previous = 0;

    for (let person of people) {
        birth = person.yearOfBirth;
        if (person.yearOfDeath == undefined) {
            death = 2023;
        }
        else {
            death = person.yearOfDeath;
        }
        nom = person.name;
        oldest = death - birth;
        if (oldest > previous) {
            oldest = oldest;
            oldestPerson = nom;
        }
        previous = oldest;
    }
    for (let b of people) {
        if (b.name == oldestPerson) {
            return b;
        }
    }
};

// Do not edit below this line
module.exports = findTheOldest;
