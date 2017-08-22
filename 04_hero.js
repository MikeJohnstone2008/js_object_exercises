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
    function LivingThing(monsterName, monsterHealth) {    //a class and an object
      let name = monsterName;        //let makes it private
      let health = monsterHealth;

      this.isAlive = function(){
        //return this.health > 0    //another way of writingn what's below
        if (health > 0){
          return true;
        }else{
          return false;
        }
      }
      //getter for name
      this.getName = function(){    //adding "this." enables us to use monster.getName()
        return name;
      }//getter for health
      this.getHealth = function(){
        return health;
      }
      this.setHealth = function(newHealth){
        health = newHealth;
      }
    }
    function Hero(heroName, heroHealth){

      LivingThing.call(this, heroName, heroHealth)    //call means to call LivingThing's constructor!!!

      this.attack = function(monster){    //any parameter passed in a local function becomes declared

        //generate random numbers between 0 and 10 for the damage taken in the attack for both
        let heroDamage = getRandomIntInclusive(0, 10);
        let monsterDamage = getRandomIntInclusive(0, 10);
        //decrease the health of the living thing with the random number generated
        monster.setHealth(monster.getHealth() - monsterDamage);

        //decrease the lealth of the hero (this) with the random number generated
        this.setHealth(this.getHealth() - heroDamage);

        console.log(this.getName() + ' took ' + heroDamage + 'damage. Damage =' + this.getHealth());
        console.log(monster.getName() + '  took ' + monsterDamage + 'damage. Damage =' + this.getHealth());

      }
      this.fight = function(arrayOfMonsters){
      //loop over passed in array of monsters
        for(let i=0;i<arrayOfMonsters.length; i++){
       //don't attack if monster is dead or hero is dead

            //arrayOfMonsters[i].isAlive();
          //this.attack(arrayOfMonsters[i]);
          //while loop:

          while (arrayOfMonsters[i].isAlive && this.isAlive()){   //should this have a break if hero.isAlive = false?
//this is a nested loop: the while fights one monester until dead, the for loop goes thru each monster.
            this.attack(arrayOfMonsters[i]);
            if (!this.isAlive() == false){
              break;
            }


          }
        }
      }

    }


      function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
        }


        let Hero1 = new Hero('superman', 100);  //**remove Hero1-->"hero".  hero now has all the methods and properties of LivingThing
        console.log(Hero1.isAlive);

        let Rat = new LivingThing('rat', 5);    //objects are Capitalized
        let Goblin = new LivingThing('goblin', 30);
        let Ogre = new LivingThing('ogre', 80);

        let monsters = [Rat, Goblin, Ogre]    //this is a list of variables, each one of which has properties and values.



    //The code below should work when you are done
    console.log("A hero emerges!");

    console.log("The noble " + Hero1.getName() + " has vowed to defeat the monsters and save the realm");
    console.log("Will they be victorious?");

    Hero1.fight(monsters);    //changed hero to "Hero1"

    if (Hero1.isAlive()) {
        console.log("The hero, " + Hero1.getName() + ", prevailed!");
    }
    else {
        console.log(Hero1.getName() + " was bested by the monsters. We are doomed");
    }

  })();
