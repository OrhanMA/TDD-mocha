function perimetre(x) {
  return x * 4;
}

function airFace(x) {
  return x * x;
}

function surfaceCube(x) {
  return 6 * x * x;
}

function volumeCube(a) {
  return a * a * a;
}

module.exports = { perimetre, airFace, surfaceCube, volumeCube };
