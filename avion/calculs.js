// EOW = poids à vide
// MZFW = poids max sans carburant
// MTOW = poids max au décollage
// MLW = poids max à l'atterrissage
const keroseneDensity = 810;

export const avions = [
  {
    EOW: 183040,
    MZFW: 246070,
    MTOW: 396893,
    MLW: 265350,
    maxCarburant: 173997,
    maxPassengers: 400,
    consumptionPerPassenger: 3.1,
  },
];
export function flyable(
  avion,
  averagePassengerWeight,
  numberOfPassengers,
  distance
) {
  const totalPassengerWeight = numberOfPassengers * averagePassengerWeight;

  if (numberOfPassengers > avion.maxPassengers) {
    // le nombre de passagers ne doit pas dépasser la capacité totale de l'avion
    console.log(
      `Le nombre de passagers (${numberOfPassengers}) dépasser le nombre total autorisé (${avion.maxPassengers})`
    );
    return false;
  }

  if (
    avion.EOW >= avion.MZFW ||
    avion.EOW >= avion.MTOW ||
    avion.EOW >= avion.MLW
  ) {
    // Si le poids à vide est plus grands que les autres types de poids, retourne faux, l'avion ne peut pas voler
    console.log(
      `Le poids à vide (${avion.EOW}) dépasser l'un des paramètres suivants: MZFW:${avion.MZFW}, MTOW:${avion.MTOW}, MLW:${avion.MLW}`
    );
    return false;
  }

  const loadedWeight = avion.EOW + totalPassengerWeight;
  if (loadedWeight > avion.MZFW || loadedWeight > avion.MLW) {
    // si le poids chargé donc avion vide + passagers et supérieur, retourn faux
    console.log(
      `Le poids chargé (${loadedWeight}) dépasse l'un des paramètres suivants: le poids max sans carburant (${avion.MZFW}) ou le poids max à l'atterissage ${avion.MLW}`
    );
    return false;
  }

  // Calculer volume de carburant nécessaire pour transporter les passagers sur la distance donnée
  const fuelNeededLiters =
    numberOfPassengers * avion.consumptionPerPassenger * (distance / 100);
  // Convertir les litres en kilogrammes
  const fuelWeight = fuelNeededLiters * (keroseneDensity / 1000);

  // Vérifier que le poids du carburant nécessaire est inférieur à la capacité maximale de carburant
  if (fuelWeight > avion.maxCarburant) {
    console.log(
      `Le poids total du carburant (${fuelWeight}) dépasse le carburant maximum autorisé (${avion.maxCarburant})`
    );
    return false;
  }

  // Vérifier que le poids total (poids à vide + passagers + carburant) est inférieur au poids max de décollage
  const totalWeight = loadedWeight + fuelWeight;
  if (totalWeight > avion.MTOW) {
    console.log(
      `Le poids total calculé dépasse le poids total au décollage maximum autorisé ${avion.MTOW}`
    );
    return false;
  }

  // si toutes les conditions sont passées
  return true;
}
