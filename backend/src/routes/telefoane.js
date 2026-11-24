import { Router } from "express";
import { parseId, valideazaTelefon } from "../validation.js";

const router = Router();

// Etapa 9: datele stau în memorie și se pierd la repornire (Etapa 10 le mută în MariaDB)
let telefoane = [
  { id: 1, titlu: "iPhone 15 Pro", inStoc: false, stare: "nou", pret: 5000 },
  { id: 2, titlu: "Samsung Galaxy S24", inStoc: true, stare: "resigilat", pret: 4000 },
  { id: 3, titlu: "Google Pixel 8", inStoc: true, stare: "second-hand", pret: 3000 },
];
let nextId = 4;

// Validează :id și găsește elementul, sau răspunde cu 400 / 404
function gasesteIndex(req, res) {
  const id = parseId(req.params.id);
  if (!id) {
    res.status(400).json({ error: "Id invalid" });
    return -1;
  }
  const index = telefoane.findIndex((t) => t.id === id);
  if (index === -1) {
    res.status(404).json({ error: "Telefonul nu există" });
  }
  return index;
}

// GET /telefoane
router.get("/", (req, res) => {
  res.json(telefoane);
});

// GET /telefoane/:id
router.get("/:id", (req, res) => {
  const index = gasesteIndex(req, res);
  if (index === -1) return;
  res.json(telefoane[index]);
});

// POST /telefoane
router.post("/", (req, res) => {
  const { erori, date } = valideazaTelefon(req.body ?? {});
  if (erori.length > 0) {
    return res.status(400).json({ error: erori.join("; ") });
  }
  const telefon = { id: nextId++, ...date };
  telefoane.push(telefon);
  res.status(201).json(telefon);
});

// PATCH /telefoane/:id (modificare parțială)
router.patch("/:id", (req, res) => {
  const index = gasesteIndex(req, res);
  if (index === -1) return;
  const { erori, date } = valideazaTelefon(req.body ?? {}, { partial: true });
  if (erori.length > 0) {
    return res.status(400).json({ error: erori.join("; ") });
  }
  telefoane[index] = { ...telefoane[index], ...date };
  res.json(telefoane[index]);
});

// DELETE /telefoane/:id
router.delete("/:id", (req, res) => {
  const index = gasesteIndex(req, res);
  if (index === -1) return;
  telefoane.splice(index, 1);
  res.status(204).end();
});

export default router;
