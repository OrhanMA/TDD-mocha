import { assert, expect } from "chai";
import { flyable } from "../../avion/calculs.js";
describe("Calculs avion", function () {
  it("Flyable test correctement la capacité de vol d'un avion", function () {
    // Les données sont prises pour le boeing des consignes
    const EOW = 183040;
    const MZFW = 246070;
    const MTOW = 396893;
    const MLW = 265350;
    const maxCarburant = 173997;
    const maxPassengers = 400;
    const averagePassengerWeight = 100;
    const consumptionPerPassenger = 3.1;
    const numberOfPassengers = 350;
    const distance = 10000; // en km

    const result = flyable(
      EOW,
      MZFW,
      MTOW,
      MLW,
      maxCarburant,
      maxPassengers,
      averagePassengerWeight,
      consumptionPerPassenger,
      numberOfPassengers,
      distance
    );

    const failingDistance = flyable(
      EOW,
      MZFW,
      MTOW,
      MLW,
      maxCarburant,
      maxPassengers,
      averagePassengerWeight,
      consumptionPerPassenger,
      numberOfPassengers,
      50000
    );
    const failingPassengers = flyable(
      EOW,
      MZFW,
      MTOW,
      MLW,
      maxCarburant,
      maxPassengers,
      averagePassengerWeight,
      consumptionPerPassenger,
      800,
      distance
    );
    const failingAverageWeight = flyable(
      EOW,
      MZFW,
      MTOW,
      MLW,
      maxCarburant,
      maxPassengers,
      500,
      consumptionPerPassenger,
      numberOfPassengers,
      distance
    );

    expect(result).to.be.true;
    expect(failingDistance).to.be.false;
    expect(failingPassengers).to.be.false;
  });
});
