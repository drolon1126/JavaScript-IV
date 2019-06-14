/*
  Object oriented design is commonly used in video games.
  For this part of the assignment you will be implementing several
  constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.
  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
class GameObject {
  constructor(stats) {
    this.createdAt = stats.createdAt;
    this.name = stats.name;
    this.dimensions = stats.dimensions;
  }
  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
class CharacterStats extends GameObject{
  constructor(stats) {
    super(stats);
    this.isChild = stats.isChild;
    this.healthPoints = stats.healthPoints;
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
class Humanoid extends CharacterStats{
  constructor(stats) {
    super(stats);
    this.isChild = stats.isChild;
    this.team = stats.team;
    this.weapons = stats.weapons;
    this.language = stats.language;
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
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
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
// * Give the Hero and Villains different methods that could be used to remove health points 
//   from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!
class Affiliation extends Humanoid {
  constructor(stats) {
    super(stats);
    this.isChild = stats.isChild;
    this.isHero = stats.isHero;
    this.hurtMessages = stats.hurtMessages;
    this.strength = stats.strength;
  }
  hurt(dmg) {
    this.healthPoints--;
    console.log(`${this.name} has ${this.healthPoints} health left.`);
    if (this.healthPoints <= 0) {
      return this.destroy();
    }
    else {
      return this.name + ': ' + this.hurtMessages[Math.floor(Math.random() * this.hurtMessages.length)];
    }
  }
  attack(target) {
    let accuracy = Math.floor(Math.random() * 20) + 1;
    console.log(`~~~~ ${this.name} is attacking ~~~~`);
    if (accuracy > 10) {
      console.log(`${this.name}'s attack hits ${target.name}, dealing ${this.strength} points of damage.`);
      if (accuracy === 20)
        return target.hurt(this.strength * 2);
      else
        return target.hurt(this.strength);
    }
    else {
      //target.miss();
      return `${this.name}'s attack misses.`;
    }
  }
}

  const hero = new Affiliation({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 80,
    name: 'The Jade Lamp',
    team: 'The League of the Just',
    weapons: [
      'Enchanted Jewelry',
    ],
    language: 'Common Tongue',
    isHero: true,
    hurtMessages: ['I don\'t feel so good...', 'How can this be!?', 'Is that the best you\'ve got?'],
    strength: 2,
  });

  const villain = new Affiliation({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 80,
    name: 'Dr. Menastro',
    team: 'Squad of Evilry',
    weapons: [
      'Math',
      'Science'
    ],
    language: 'Nerd Speak',
    isHero: false,
    hurtMessages: ['Tis but a scratch.', 'Just a flesh wound.', 'Right! I\'ll do you for that!', ' I\'m invincible!'],
    strength: 1,
  });

  let turn = 1;
  while(hero.healthPoints > 0 && villain.healthPoints > 0){
    if(turn>0){
      console.log(hero.attack(villain));
      turn = -turn;
    }
    else{
      console.log(villain.attack(hero));
      turn = -turn;
    }

  }