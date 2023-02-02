// // Space Battle Project

// // make a class ship
// class Ship {
//     constructor (alienHull, firePower, accuracy) {
//         this.hull = hull || 20
//         this.firePower = firePower || 5
//         this.accuracy = accuracy || .7
//     }
//     attack() {}
// }

// const USSAssembly = new Ship()
// console.log(USSAssembly)

//     // let alienHull = Math.floor(Math.random(3,6)*6)
//     // let alienFirePower = Math.floor(Math.random(2,4))
//     // let alienAccuracy = (Math.floor(Math.random(.6,.8)*.9).toFixed(1)

// function test(alienHull, alienFirePower, alienAccuracy){
//     alien.Hull = Math.floor(Math.random() * (4) + 3)
//     alien.FirePower = Mathfloor(Math.random() * (3) + 2)
//     alien.Accuracy = Number (((Math.random()* (1) + 6)/10).toFixed(1)
// }


// const alien1 = new Ship(alienHull, alienFirePower, alienAccuracy)
// const alien2 = new Ship(alienHull, alienFirePower, alienAccuracy)
// const alien3 = new Ship(alienHull, alienFirePower, alienAccuracy)
// const alien4 = new Ship(alienHull, alienFirePower, alienAccuracy)
// console.log(alien1)
// console.log(alien2)
// test(alien)
// test(alien)
// console.log
// console.log
// // Make a ship factory that will pop out 6 aliens and your ship
// // Set each alien properties using random
// // Set your own ship properties


// Space Battle Project

// make a class ship
// class Ship {
//     constructor(hull, firePower, accuracy) {
//         this.hull = hull || 20
//         this.firePower = firePower || 5
//         this.accuracy = accuracy || .7
//     }
//     attack() { 
//         let person = prompt("which ship do you want to attack", 1);

//         If (person != null) {
//             console.log("Hello" + person + "! How are you today?")
//         }
//     }
// }
// // alien ship factory
// class Factory {
//     constructor(alien) {
//         this.alien = alien
//         this.alienShip = []
//     }
//     generateShip(num) {
//         let counter = 1

//         while (counter <= num) {
//             let hull = Math.floor(Math.random() * (4) + 3)
//             let firePower = Math.floor(Math.random() * (3) + 2)
//             let accuracy = Number(((Math.random() * (2) + 6) / 10).toFixed(1))

//             const newShip = new Ship(hull, firePower, accuracy)
//             this.alienShip.push(newShip)
//             counter++
//         }

//     }
//     findShip(index) {
//         return this.alienShip[index]
//     }
// }

// // new alien factory
// const alien = new Factory('Alien')

// // generate 6 aliens
// alien.generateShip(6)
// console.log(alien)
// console.log(alien.alienShip[3])

// // create player
// const USSAssembly = new Ship()
// console.log('Player:'+ USSAssembly)
// console.log(USSAssembly)
// console.log("There are 6 alien ships!")

  // play the game

  // Space Battle Project 2

// make a class ship
class Ship {
    constructor(hull, firePower, accuracy) {
      this.hull = hull || 20
      this.firePower = firePower || 5
      this.accuracy = accuracy || .7
    }
    attack() { }
  }
  // alien ship factory
  class Factory {
    constructor(alien) {
      this.alien = alien
      this.alienShip = []
    }
    generateShip(num) {
      let counter = 1
      
      while (counter <= num) {
        let hull = Math.floor(Math.random() * (4) + 3)
        let firePower = Math.floor(Math.random() * (3) + 2)
        let accuracy = Number(((Math.random() * (2) + 6) / 10).toFixed(1))
  
        const newShip = new Ship(hull, firePower, accuracy)
        this.alienShip.push(newShip)
        counter++
      }
  
    }
    findShip(index) {
      return this.alienShip[index]
    }
  }
  
  // new alien factory
  const alien = new Factory('Alien')
  
  // generate 6 aliens
  alien.generateShip(6)
  console.log(alien)
  console.log(alien.alienShip[3])
  
  // create player
  const USSAssembly = new Ship()
  console.log(USSAssembly)
  
  console.log("There are 6 alien ships!")
  
  // play the game
  
  let person = prompt("Please enter your name", "Harry Potter");
  
          if (person != null) {
              document.getElementById("demo").innerHTML =
                  "Hello " + person + "! How are you today?";
          }