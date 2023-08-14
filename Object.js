var person = {
    firstname: 'tulasiram',
    lastname: 'kancharla',
    age: 22,
    height: 5.8
}
// console.log(person['age'])
// // dit notation
// console.log(person.age)
var thePirateKing = {
    Name: 'Moneky-D-Luffy',
    Age: 21,
    Crew: ['Zoro','Sanji','Jinbei','Brook','Robin','Franky','Chopper','Nami',"usoop"],
    family: {sabo:'revolutinary',ace:'whitebeard pirates',garp:'marines',dragon:'revolutinary',dadan:'moutain bandit'},
    bounty: '5billon berries'
}
console.log('the crew of pirate is ',thePirateKing.Crew);
console.log('the family of pirate king is',thePirateKing.family);
console.log('the name of pirate king is ',thePirateKing.Name);
delete thePirateKing.bounty;
console.log(thePirateKing);