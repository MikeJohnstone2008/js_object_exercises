/**
 * Let's protect our objects' properties so no one can change the name or health directly.
 *
 * Copy your code from the previous exercise, then change the properties to be private.
 *
 * Once the properties are private you will need to add GETTER methods so we can still
 * access the values. So, add two methods called "getName" and "getHealth" that return the
 * value of the name and health properties respectively.
 *
 * Finally, now that your name and health properties are private, fix the line that
 * prints out each monster's name and health.
 *
 * NOTE: Read the section "Private" for a push in the right direction.
 * http://javascript.crockford.com/private.html
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
      this.getName = function(){
        return name;
      }//getter for health
      this.getHealth = function(){
        return health;
      }
    }

        let Rat = new LivingThing('rat', 5);    //objects are Capitalized
        let Goblin = new LivingThing('goblin', 30);
        let Ogre = new LivingThing('ogre', 80);

        let monsters = [Rat, Goblin, Ogre]    //this is a list of variables, each one of which has properties and values.






    //The code below should work when you are done
    console.log("Monsters!");

    //for...of loop supported in ES6
    //not compatable before IE edge
    //@see http://www.benmvp.com/learning-es6-for-of-loop/
    //@see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
    console.log("ES6 for...in");
    for (let monster of monsters) {     //this is a loop--looping thru the array of monsters
        console.log(monster.getName() + ": " + monster.getHealth());
    }

    //just a spacer
    console.log("===================");

    //for loop loop supported before ES6
    //@see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
    console.log("for loop for support before ES6");
    for (let i=0; i < monsters.length; i++) {     //this does the same thing as the above, just different style.
        console.log(monsters[i].getName() + ": " + monsters[i].getHealth());
    }

})();
