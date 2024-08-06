import express from "express";

export const app = express();

const items = [
  {
    id: 1,
    content: "Item 1",
  },
];

// Para recuperarlos todos
app.get("/items", (req, res) => {
  return res.json(items);
});

// Para recuperar uno solo
app.get("/items", (req, res) => {
  const { id } = req.params;
  const itemFound = items.find((item) => item.id === id);
  return res.json(itemFound);
});

// Para crear uno
app.get("/items", (req, res) => {
  const { content } = req.body;
  const newId = items.length + 1;
  const newItem = { id: newId, content };
  items.push(newItem);
  return res.json(newItem);
});
