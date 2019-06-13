/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

class GameObject {
  constructor(newObject) {
    this.createdAt = newObject.createdAt;
    this.name = newObject.name;
    this.dimensions = newObject.dimensions;
  }

  destroy() {
    this.healthPoints = 0;
    return `${this.name} was removed from the game.`;
  }
}

/*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */

class CharacterStats extends GameObject {
  constructor(stats) {
    super(stats);
    this.healthPoints = stats.healthPoints; //special attribute to CharacterStats
  }

  takeDamage() {
    return `${this.name} took damage.`;
  }
}
/*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */

class Humanoid extends CharacterStats {
  constructor(char) {
    super(char);
    this.team = char.team;
    this.weapons = char.weapons;
    this.language = char.language;
  }

  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

class Villain extends Humanoid {
  constructor(villain){
      super(villain); //binds to Humanoid for inheritence
    this.evillaugh = villain.evillaugh;
    this.minion = villain.minion;
}

throwShade(hero) {
    let dmg = Math.floor(Math.random() * 5);
    if (hero.healthPoints <= 0) {
      return `${
        hero.name
      } is already dead and can't get their feelings hurt anymore.`;
    } else if (dmg === 0) {
      return `No good, try again. 0 damage.`;
    } else if (hero.healthPoints <= dmg) {
      hero.healthPoints -= dmg;
      return `${this.name} threw shade at ${
        hero.name
      } for ${dmg}HP damage and knocked them out!`;
    }
    hero.healthPoints -= dmg;
    return `${this.name} threw shade at ${
      hero.name
    } and hurt their feelings ${dmg}HP damage. That wasn't very nice.`;
  };

  apologize(hero) {
    let heal = Math.floor(Math.random() * 5);
    if (this.healthPoints <= 0) {
      return `${
        this.name
      } attempted to say sorry but is already done for. It's too late to 'pologize. Nice try.`;
    }
    this.healthPoints += heal;
    return `${this.name} apologized to ${hero.name} and gained ${heal}HP. Sorry!`;
  };
};



// //Villain Attacks - commented out for refactor

// Villain.prototype.throwShade = function(hero) {
//   let dmg = Math.floor(Math.random() * 5);
//   if (hero.healthPoints <= 0) {
//     return `${
//       hero.name
//     } is already dead and can't get their feelings hurt anymore.`;
//   } else if (dmg === 0) {
//     return `No good, try again. 0 damage.`;
//   } else if (hero.healthPoints <= dmg) {
//     hero.healthPoints -= dmg;
//     return `${this.name} threw shade at ${
//       hero.name
//     } for ${dmg}HP damage and knocked them out!`;
//   }
//   hero.healthPoints -= dmg;
//   return `${this.name} threw shade at ${
//     hero.name
//   } and hurt their feelings ${dmg}HP damage. That wasn't very nice.`;
// };

// Villain.prototype.apologize = function(hero) {
//   let heal = Math.floor(Math.random() * 5);
//   if (this.healthPoints <= 0) {
//     return `${
//       this.name
//     } attempted to say sorry but is already done for. It's too late to 'pologize. Nice try.`;
//   }
//   this.healthPoints += heal;
//   return `${this.name} apologized to ${hero.name} and gained ${heal}HP. Sorry!`;
// };

//logic in progress

//generate poison dmg
//add poisoned method to target object. figure out how to invoke method each time target takes action
//remove property in another heal method

// Villain.prototype.poisonAttack = function(hero) {
//   let dmg = Math.floor(Math.random() * 5);
//   if (hero.healthPoints <= 0) {
//     return `${hero.name} is already dead and can't be poisoned.`;
//   }
//   hero.healthPoints -= dmg;
//   return `${
//     this.name
//   } poisoned ${hero}. Damage is inflicted for each of ${hero}'s turn until removed. ${dmg}HP damage this turn.`;
// };

// <----- End Villain Attacks

class Hero extends Humanoid {
    constructor(hero){
        super(hero);
        this.motto = hero.motto;
        this.costume = hero.costume;
    }

    giveCompliment(villain) {
        let heal = Math.floor(Math.random() * 8);
        if (this.healthPoints <= 0) {
          return `${
            this.name
          } is already done for and can't give compliments. Nice try.`;
        }
        this.healthPoints += heal;
        return `${this.name} gave ${
          villain.name
        } a compliment and gained ${heal}HP for a total of ${this.healthPoints} HP!`;
      };

      guiltTrip(villain) {
        let dmg = Math.floor(Math.random() * 5);
        if (villain.healthPoints <= 0) {
          return `${villain.name} is already dead and can't feel guilty.`;
        } else if (dmg === 0) {
          return `That was a bad guilt trip, they don't feel guilty at all. 0 damage.`;
        } else if (villain.healthPoints <= dmg) {
          villain.healthPoints -= dmg;
          return `${this.name} guilt tripped ${
            villain.name
          } for ${dmg}HP damage and knocked them out!`;
        }
        villain.healthPoints -= dmg;
        return `${this.name} guilt tripped ${
          villain.name
        } and now they feel bad. ${dmg}HP damage.`;
      };
}


//Hero Attacks  -- commented out for refactor

// Hero.prototype.giveCompliment = function(villain) {
//   let heal = Math.floor(Math.random() * 8);
//   if (this.healthPoints <= 0) {
//     return `${
//       this.name
//     } is already done for and can't give compliments. Nice try.`;
//   }
//   this.healthPoints += heal;
//   return `${this.name} gave ${
//     villain.name
//   } a compliment and gained ${heal}HP for a total of ${this.healthPoints} HP!`;
// };

// Hero.prototype.guiltTrip = function(villain) {
//   let dmg = Math.floor(Math.random() * 5);
//   if (villain.healthPoints <= 0) {
//     return `${villain.name} is already dead and can't feel guilty.`;
//   } else if (dmg === 0) {
//     return `That was a bad guilt trip, they don't feel guilty at all. 0 damage.`;
//   } else if (villain.healthPoints <= dmg) {
//     villain.healthPoints -= dmg;
//     return `${this.name} guilt tripped ${
//       villain.name
//     } for ${dmg}HP damage and knocked them out!`;
//   }
//   villain.healthPoints -= dmg;
//   return `${this.name} guilt tripped ${
//     villain.name
//   } and now they feel bad. ${dmg}HP damage.`;
// };

// <----- End Hero Attacks

// Villains

const drDrama = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 3,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Dr. Drama",
  team: "The Bad Guys",
  weapons: ["Social Media"],
  language: "Gossip Speak",
  evillaugh: "Muwhahaha",
  minion: "Yippy Dog"
});

// Heroes

const niceGuy = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 5,
    width: 1,
    height: 3
  },
  healthPoints: 8,
  name: "Captain Nice Guy",
  team: "The Good Guys",
  weapons: ["Charitable Acts"],
  language: "Honesty",
  motto: "You Betcha!",
  costume: "Spandex and Cape"
});

//Fight between Good VS Evil

console.log(`Captain Nice Guy says, "${niceGuy.motto}"`);
console.log(
  `Captain Nice Guy's greatest method of attack is "${niceGuy.weapons}"`
);
console.log(
  `Captain Nice Guy prefers to wear a costume of a "${niceGuy.costume}"`
);
console.log(`Dr. Drama let out a big "${drDrama.evillaugh}"`);
console.log(`Dr. Drama's trusty sidekick is a ${drDrama.minion}`);
console.log(
  `Dr. Drama likes to use ${drDrama.weapons} in his method of attack`
);
console.log(drDrama.throwShade(niceGuy));
console.log(niceGuy.giveCompliment(drDrama));
console.log(niceGuy.guiltTrip(drDrama));
console.log(niceGuy.guiltTrip(drDrama));
console.log(niceGuy.guiltTrip(drDrama));
console.log(niceGuy.guiltTrip(drDrama));
console.log(niceGuy.guiltTrip(drDrama));
console.log(drDrama.apologize(niceGuy));
