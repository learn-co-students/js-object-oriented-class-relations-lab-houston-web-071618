let driverId = 0;
let passengerId = 0;
let tripId = 0;
  //A driver has many trips, and has many passengers through trips.
  //A passenger has many trips, and has many drivers through trips.
  //A trip belongs to a driver and belongs to a passenger.
  const store = {drivers: [], passengers: [], trips: []}

class Driver {
  // initialized with a name; returns a JavaScript object that has attributes of id, and name
  constructor (name) {
    this.name = name;
    this.id = ++driverId;

    store.drivers.push(this)
  }
  //returns all of the trips that a driver has taken
  trips () {
    return store.trips.filter(trip => trip.driverId === this.id)
  }

  //returns all of the passengers that a driver has taken on a trip
  passengers () {
    return this.trips().map(trip => trip.passenger())
  }
}


class Passenger {
  //initialized with a name; returns a JavaScript object that has attributes of id, and name
  constructor (name) {
    this.name = name;
    this.id = ++passengerId;

    store.passengers.push(this)
  }
  // returns all of the trips that a passenger has taken
  trips () {
    return store.trips.filter(trip => trip.passengerId === this.id)
  }
  //returns all of the drivers that has taken a passenger on a trip
  drivers () {
    return this.trips().map(trip => trip.driver())
  }

}


class Trip {
  //initialized with an instance of driver and an instance of passenger; returns a JavaScript that has attributes id driverId, and passengerId
  constructor (driver, passenger) {
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id

    store.trips.push(this)
  }


  //returns the driver associated with the trip
  driver () {
    return store.drivers.find(driver => driver.id === this.driverId)
  }

  //returns the passenger associated with the trip
  passenger () {
    return store.passengers.find(passenger => passenger.id === this.passengerId)
  }

}
