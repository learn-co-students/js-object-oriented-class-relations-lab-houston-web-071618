let store = { drivers: [], passengers: [], trips: [] };

let driverId = 0;
let tripId = 0;
let passengerId = 0;

class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;
    store.drivers.push(this);
  }

  trips() {
    store.trips.filter((trip) => {
      trip.driverId === this.id;
    });
  }

  passengers() {
    store.passengers.filter((passenger) => {
      passenger.driverId === this.id;
    });
  }
}

class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name;
    store.passengers.push(this);
  }

  trips() {
    store.trips.filter((trip) => {
      trip.passengerId === this.id;
    });
  }

  drivers() {
    store.drivers.filter((driver) => {
      driver.passengerId === this.id;
    });
  }
}
class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    store.trips.push(this);
  }

  driver() {
    store.drivers.find((driver) => {
      // console.log(driver.id);
      // console.log(this.driverId);
      driver.id == this.driverId;
    });
  }

  passenger() {
    store.passengers.find((passenger) => {
      passenger.id == this.passengerId;
    });
  }
}
