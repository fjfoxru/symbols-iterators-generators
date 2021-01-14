// TODO: write your code here
import Team from './team';
import Person from './person';


const team = new Team();



const char1 = new Person({
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10
  });

  team.addPlayer(char1);
  team.addPlayer(char1);
  team.addPlayer(char1);
  team.addPlayer(char1);
  team.addPlayer(char1);
  team.addPlayer(char1);



for(let num of team) {
    console.log(num);
}


const gen = team[Symbol.iterator]();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

