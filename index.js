let driverId = 0;
let tripId = 0;
let passengerId = 0;

let store = { drivers: [], passengers: [] , trips: []};

class Driver{
  constructor(name){
    this.name = name;
    this.id = ++driverId;
    store.drivers.push(this);
  }
  trips(){//Returns all trips a Driver has taken.
    return store.trips.filter(
      function(trip){
        return trip.driverId === this.id;
      }.bind(this));
  }

  passengers(){//Returns all the Passenger a driver has taken.
    return this.trips().map(function (trip) {
       return trip.passenger();
     });
  }
}

class Passenger{
  constructor(name){
    this.id = ++passengerId;
    this.name = name;
    store.passengers.push(this);
  }
  trips(){//Returns all trips a Passenger has taken.
    return store.trips.filter(
      function(trip){
        return trip.passengerId === this.id;
      }.bind(this));
  }

  drivers(){//Returns all the drivers that took passenger on trip
    return this.trips().map(function(trip){
        return trip.driver();
      });
  }

}//end class Passenger

class Trip{
  constructor(driver,passenger){
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    store.trips.push(this);
  }
  driver(){//Returns driver associated with trip
    return store.drivers.find(
     function(driver) {
         return driver.id === this.driverId;
     }.bind(this));
  }

  passenger(){//Returns passenger associated with trip
    return store.passengers.find(
     function(passenger) {
         return passenger.id === this.passengerId;
     }.bind(this));
  }

}//end class Trip
