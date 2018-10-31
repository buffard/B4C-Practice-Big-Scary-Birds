// The learning objective for this practice exercise is to use the class syntax to establish a reusable definition (i.e. blueprint) of the properties and methods that objects will have in an application.
// Your job is to create a large, flightless bird class that defines the properties of a feathered terror. It should have the following properties:

// height
// flightless (should always be true)
// isExtinct
// name
// running speed
// toString -- This will be a method that outputs a description of the bird based on some of its properties. Example output: "The Cassowary is a big, scary bird that stands up to 6 ft and can run up to 30 mph!"
// Create at least 3 instances of the class. Visit the Wikipedia list of the largest birds in the world for inspiration.

class bird {

  constructor (props) {
    this.name = props.name
    this.height = props.height
    this.flightless = props.flightless
    this.isExtinct = props.isExtinct
    this.runSpeed = props.runSpeed
  }

  placeOrder () {
    return `The ${this.name} is a big, scary bird that stands ${this.height} ft tall and can run up to ${this.runSpeed} mph!.  Also it is currently ${this.isExtinct}.`
  }
}


const emperorPenguinProp = new bird({
  name: "Emperor Penguin",
  height: "3.7",
  flightless: true,
  isExtinct: "alive",
  runSpeed: "2.1"
})

const dwarfCassowaryProp = new bird({
  name: "Dwarf Cassowary",
  height: "3.4",
  flightless: true,
  isExtinct: "super alive",
  runSpeed: "4.5"
})

const ostrichProp = new bird({
  name: "Ostrich",
  height: "6.9",
  flightless: true,
  isExtinct: "super alive",
  runSpeed: "43"
})

const emperorPenguin = new bird(emperorPenguinProp)
console.log(emperorPenguin.placeOrder())

const dwarfCassowary = new bird(dwarfCassowaryProp)
console.log(dwarfCassowary.placeOrder())

const ostrich = new bird(ostrichProp)
console.log(ostrich.placeOrder())


// const NAME = new bird({
//   name: "",
//   height: "",
//   flightless: true,
//   isExtinct: "",
//   runSpeed: ""
// })