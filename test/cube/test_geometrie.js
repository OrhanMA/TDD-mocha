const geometrie = require("../../cube/geometrie.js");
const Cube = require("../../cube/cube.js");
const assert = require("assert");

describe("Géométrie cube", function () {
  it("perimetre(x) vérifie correctement le perimetre pour x", function () {
    assert.equal(geometrie.perimetre(3), 12);
  });
  it("air(x) calcule correctement l'air d'un carré avec un côté de longueur x", function () {
    assert.equal(geometrie.airFace(3), 9);
  });
  it("surfaceCube(x) calcule correctement la surface totale d'un cube", function () {
    assert.equal(geometrie.surfaceCube(3), 54);
  });
  it("volumeCube(a) calcule correctement le volume d'un cube", function () {
    assert.equal(geometrie.volumeCube(3), 27);
  });
});

describe("Géométrie cube class", function () {
  const cube = new Cube(3);
  it("Cube.perimetre() vérifie correctement le perimetre", function () {
    assert.equal(cube.perimetre(), 12);
  });
  it("Cube.airFace() calcule correctement l'air d'un carré avec un côté de longueur x", function () {
    assert.equal(cube.airFace(), 9);
  });
  it("Cube.surface() calcule correctement la surface totale d'un cube", function () {
    assert.equal(cube.surface(), 54);
  });
  it("Cube.volume() calcule correctement le volume d'un cube", function () {
    assert.equal(cube.volume(), 27);
  });
});
