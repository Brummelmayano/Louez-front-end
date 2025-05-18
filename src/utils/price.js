import { differenceInMinutes, parseISO, addMinutes, isBefore, setHours, setMinutes } from 'date-fns';

const JOUR_START_H = 7, JOUR_START_M = 30;
const JOUR_END_H = 18, JOUR_END_M = 0;
const NUIT_START_H = 18, NUIT_START_M = 30;
const NUIT_END_H = 7, NUIT_END_M = 0;

function getMinutesInRange(startDate, endDate, h1, m1, h2, m2) {
  let total = 0;
  let current = new Date(startDate);

  while (isBefore(current, endDate)) {
    // Début de la tranche courante
    let trancheStart = setHours(setMinutes(new Date(current), m1), h1);
    let trancheEnd = setHours(setMinutes(new Date(current), m2), h2);

    // Si la tranche de fin est avant la tranche de début, c'est le lendemain (pour la nuit)
    if (isBefore(trancheEnd, trancheStart)) {
      trancheEnd = addMinutes(trancheEnd, 24 * 60);
    }

    // Calculer l'intersection avec [startDate, endDate]
    const start = current > trancheStart ? current : trancheStart;
    const end = endDate < trancheEnd ? endDate : trancheEnd;

    if (isBefore(start, end)) {
      total += differenceInMinutes(end, start);
    }

    // Passe au jour suivant
    current = setHours(setMinutes(new Date(current), 0), 0);
    current.setDate(current.getDate() + 1);
  }
  return total;
}

export function calculatePrice({ start, end, quantity, tarif_jour, tarif_nuit, tarifType }) {
  if (!start || !end || quantity < 1) return '0.00';
  const startDate = typeof start === 'string' ? parseISO(start) : start;
  const endDate = typeof end === 'string' ? parseISO(end) : end;
  let minutes = differenceInMinutes(endDate, startDate);
  if (minutes <= 0) return '0.00';

  let price = 0;

  if (tarifType === 'jour') {
    price = tarif_jour * (minutes / 630) * quantity;
  } else if (tarifType === 'nuit') {
    price = tarif_nuit * (minutes / 750) * quantity;
  } else if (tarifType === 'journee') {
    price = (tarif_jour + tarif_nuit) * (minutes / 1440) * quantity;
  } else {
    // Personnalisé : calcule séparément minutes de jour et de nuit
    const minutesJour = getMinutesInRange(
      startDate, endDate, JOUR_START_H, JOUR_START_M, JOUR_END_H, JOUR_END_M
    );
    const minutesNuit =
      minutes - minutesJour > 0 ? minutes - minutesJour : 0;
    price =
      (tarif_jour * (minutesJour / 630) + tarif_nuit * (minutesNuit / 750)) *
      quantity;
  }

  return price.toFixed(2);
}