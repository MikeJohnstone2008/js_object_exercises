/**
 * It's time to create a hero to dispatch these pesky monsters.
 *
 * Copy your code from the previous exercise.
 *
 * Add a SETTER method to your LivingThing class named "setHealth" that lets you update the value
 * of the "health" property.
 *
 * Now, create a NEW object called "Hero" that EXTENDS the LivingThing class.
 *
 * NOTE: Check out the following to figure out how to extend an object
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance
 *
 * Add a method to the Hero class named "attack" that takes as a parameter a LivingThing object.
 * The method should do three things:
 * 1. Reduce the LivingThing object's health by a random value between 0 and 10.
 * 2. Reduce the hero's health by a random value between 0 and 10.
 * 3. Print out how much damage the monster and hero did to each other.
 *
 * NOTE: To point you in the right direction: check out
 * the getRandomInt function on this page:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 *
 * Give the Hero object another method named "fight" that takes as a parameter an array of LivingThing objects
 * and does the following:
 *  - For each LivingThing object in the array, call the "attack" method so the hero can attack the monster.
 *     - But, don't attack if the LivingThing is already dead!
 *  - Repeat the process until all the monsters or the hero is dead.
 *
 * Finally, you will need to instantiate your hero object with the name into a variable named "hero". Give them 100 health and a
 * name of your choice.
 */


 (function(){
    //@see https://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it
    'use strict';

    ///////////////////////////
    // Put your code here!
    ///////////////////////////
    function LivingThing(monsterName, monsterHealth){
      let name = monsterName;
      let health = monsterHealth;
    //write a function to check if LivingThing is alive:
      this.isAlive = function() {
        if(this.health > 0){
          return true;
        }else{
          return false;
        }
      }
      //write getter functions for name and health:
      this.getName = function(){
          return name;
      }
      this.getHealth = function(){
        return health;
      }
      this.setHealth = function(newHealth) {
        health = newHealth;
      }
    }
    //create new Hero which inherits from LivingThing:
    function Hero(heroName, heroHealth){
      LivingThing.call(this, heroName, heroHealth)

      //adding an Attack method to Hero:
      this.Attack = function(monster){
        //LivingThing.newHealth = LivingThing.health * getRandomIntInclusive(1,9)
        //Hero.newHealth
        let heroDamage = getRandomIntInclusive(1,10);
        let monsterDamage = getRandomIntInclusive(1,10);
        monster.setHealth(monster.health() - monsterDamage);
        this.setHealth(this.health() - heroDamage);


        console.log(this.getName() + 'took ' + heroDamage + 'damage');
        console.log(monster.getName() + 'took ' + monsterDamage + 'damage');
      }
      this.fight = function(arrayOfMonsters){
        for(let i=0;i<arrayOfMonsters.length; i++;){
          while (arrayOfMonsters[i].isAlive());{
            this.attack(arrayOfMonsters[i]);
          }

        }
      }
    }

    let hero = new Hero('batman', 100);  //**remove hero1-->"hero".  hero now has all the methods and properties of LivingThing
    console.log(hero1.isAlive);

    let Rat = new LivingThing('rat', 5);
    let Goblin = new LivingThing('goblin', 30);
    let Ogre = new LivingThing('ogre', 80);

    let monsters = [Rat, Goblin, Ogre]

  //random number generator for Attack method:
  function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}


    //The code below should work when you are done
    console.log("A hero emerges!");

    console.log("The noble " + hero1.getName() + " has vowed to defeat the monsters and save the realm");
    console.log("Will they be victorious?");

    hero1.fight(monsters);    //changed hero to "hero1"

    if (hero1.isAlive()) {
        console.log("The hero, " + hero1.getName() + ", prevailed!");
    }
    else {
        console.log(hero1.getName() + " was bested by the monsters. We are doomed");
    }

  })();
