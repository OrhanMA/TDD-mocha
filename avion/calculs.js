// EOW = poids à vide
// MZFW = poids max sans carburant
// MTOW = poids max au décollage
// MLW = poids max à l'atterrissage
const keroseneDensity = 810;

export function flyable(
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
) {
  const totalPassengerWeight = numberOfPassengers * averagePassengerWeight;

  if (numberOfPassengers > maxPassengers) {
    // le nombre de passagers ne doit pas dépasser la capacité totale de l'avion
    console.log(
      `Le nombre de passagers (${numberOfPassengers}) dépasser le nombre total autorisé (${maxPassengers})`
    );
    return false;
  }

  if (EOW >= MZFW || EOW >= MTOW || EOW >= MLW) {
    // Si le poids à vide est plus grands que les autres types de poids, retourne faux, l'avion ne peut pas voler
    console.log(
      `Le poids à vide (${EOW}) dépasser l'un des paramètres suivants: MZFW:${MZFW}, MTOW:${MTOW}, MLW:${MLW}`
    );
    return false;
  }

  const loadedWeight = EOW + totalPassengerWeight;
  if (loadedWeight > MZFW || loadedWeight > MLW) {
    // si le poids chargé donc avion vide + passagers et supérieur, retourn faux
    console.log(
      `Le poids chargé (${loadedWeight}) dépasse l'un des paramètres suivants: le poids max sans carburant (${MZFW}) ou le poids max à l'atterissage ${MLW}`
    );
    return false;
  }

  // Calculer volume de carburant nécessaire pour transporter les passagers sur la distance donnée
  const fuelNeededLiters =
    numberOfPassengers * consumptionPerPassenger * (distance / 100);
  // Convertir les litres en kilogrammes
  const fuelWeight = fuelNeededLiters * (keroseneDensity / 1000);

  // Vérifier que le poids du carburant nécessaire est inférieur à la capacité maximale de carburant
  if (fuelWeight > maxCarburant) {
    console.log(
      `Le poids total du carburant (${fuelWeight}) dépasse le carburant maximum autorisé (${maxCarburant})`
    );
    return false;
  }

  // Vérifier que le poids total (poids à vide + passagers + carburant) est inférieur au poids max de décollage
  const totalWeight = loadedWeight + fuelWeight;
  if (totalWeight > MTOW) {
    console.log(
      `Le poids total calculé dépasse le poids total au décollage maximum autorisé ${MTOW}`
    );
    return false;
  }

  // si toutes les conditions sont passées
  return true;
}
