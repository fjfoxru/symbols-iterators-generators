export default class Team {

  addPlayer(char) {
    this[char.name + Math.random()] = char;
  }

// Генератор
  *[Symbol.iterator]() {
    for(let item in this) {
      yield this[item];
    }
  }


//  Итератор 
//   [Symbol.iterator] () {
//     const values = Object.values(this);
//     let index = -1;

//     return {
//       next() {
//         index++;

//         return {
//             value: values[index],
//             done: index >= values.length
//         }
//     }
//     }
// };
}
