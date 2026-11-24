// Validare pe server: datele de la client nu sunt niciodată de încredere.
export const STARI = ["nou", "resigilat", "second-hand"];
const TITLU_MAX = 100;

// partial = true pentru PATCH (se verifică doar câmpurile trimise)
export function valideazaTelefon(body, { partial = false } = {}) {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return { erori: ["Corpul cererii trebuie să fie un obiect JSON"], date: {} };
  }

  const erori = [];
  const date = {};

  if (!partial || body.titlu !== undefined) {
    if (typeof body.titlu !== "string" || body.titlu.trim() === "") {
      erori.push("titlu este obligatoriu");
    } else if (body.titlu.trim().length > TITLU_MAX) {
      erori.push(`titlu are maximum ${TITLU_MAX} de caractere`);
    } else {
      date.titlu = body.titlu.trim();
    }
  }

  if (body.stare !== undefined) {
    if (typeof body.stare !== "string" || !STARI.includes(body.stare)) {
      erori.push(`stare trebuie să fie una din: ${STARI.join(", ")}`);
    } else {
      date.stare = body.stare;
    }
  } else if (!partial) {
    date.stare = "nou";
  }

  if (!partial || body.pret !== undefined) {
    if (
      typeof body.pret !== "number" ||
      !Number.isFinite(body.pret) ||
      body.pret <= 0
    ) {
      erori.push("pret trebuie să fie un număr mai mare decât 0");
    } else {
      date.pret = body.pret;
    }
  }

  if (body.inStoc !== undefined) {
    if (typeof body.inStoc !== "boolean") {
      erori.push("inStoc trebuie să fie true sau false");
    } else {
      date.inStoc = body.inStoc;
    }
  } else if (!partial) {
    date.inStoc = true;
  }

  return { erori, date };
}

// Id-urile din adresă vin ca text; se acceptă doar numere întregi pozitive
export function parseId(value) {
  const id = Number(value);
  return Number.isInteger(id) && id > 0 ? id : null;
}
