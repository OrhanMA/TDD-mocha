import { expect } from "chai";
import { avions, flyable } from "../../avion/calculs.js";
describe("Calculs avion", function () {
  const avion = avions[0];
  const averagePassengerWeight = 100;
  const numberOfPassengers = 350;
  const distance = 10000;

  it("Flyable test correctement la capacité de vol d'un avion", function () {
    const result = flyable(
      avion,
      averagePassengerWeight,
      numberOfPassengers,
      distance
    );
    expect(result).to.be.true;
  });
  it("Test correctement le poids des passagers", () => {
    const failingAverageWeight = flyable(
      avion,
      500,
      numberOfPassengers,
      distance
    );
    expect(failingAverageWeight).to.be.false;
  });
  it("Test correctement la distance", () => {
    const failingDistance = flyable(
      avion,
      averagePassengerWeight,
      numberOfPassengers,
      50000
    );
    expect(failingDistance).to.be.false;
  });
  it("Test correctement le nombre de passagers", () => {
    const failingPassengers = flyable(
      avion,
      averagePassengerWeight,
      800,
      distance
    );
    expect(failingPassengers).to.be.false;
  });
});
