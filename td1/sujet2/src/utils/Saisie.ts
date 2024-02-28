export function litChaine(msg = ""): string {
  let ch: string | null;
  do {
    ch = prompt(msg === "" ? "Veuillez saisir une chaîne quelconque : " : msg);
  } while (ch === null);
  return ch;
}

export function litEntier(msg = ""): number {
  let ch: string | null;
  do {
    ch = prompt(msg === "" ? "Veuillez saisir un entier : " : msg);
  } while (ch === null || !ch.match(/^([0-9]+)$/));
  return Number.parseInt(ch);
}

export function litReel(msg = ""): number {
  let ch: string | null;
  do {
    ch = prompt(msg === "" ? "Veuillez saisir un réel : " : msg);
  } while (
    ch === null ||
    !ch.match(/(^[0-9]*[.][0-9]$)|(^[0-9]*[.][0-9]+$)|(^[0-9]+$)/)
  );
  return Number.parseFloat(ch);
}
